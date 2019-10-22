import vobject
import datetime
from Jumpscale import j


class addressbook(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        self.base_url = "http://127.0.0.1:8851"
        self.client = None

    def login(self, username, password, addressbook=None, user_session=None):
        """
        ```in
        username = (S)
        password = (S)
        ```
        currentlly any username and password will work
        """
        self.client = j.clients.carddav.get(
            resource=f"{self.base_url}/{username}", user=username, passwd=password, verif=False, name="test"
        )
        self.username = username

    def _verify_client(self):
        if not self.client:
            raise j.exceptions.Runtime("Use login method to enable the actor")

    def list_addressbooks(self, schema_out=None, user_session=None):
        """
        ```out
        addressbooks = (dict)
        ```
        returns dict of addressbooks {hrefs:etags}
        """
        self._verify_client()
        addressbooks = self.client.list_abooks()
        output = schema_out.new()
        output.addressbooks = addressbooks
        return output

    def add_addressbook(self, name, description, addressbook_id=None, schema_out=None, user_session=None):
        """
        ```in
        name = (S)
        description = (S)
        addressbook_id = (S)
        ```
        addressbook_id is optional if not specified the server will generate another one
        """
        self._verify_client()
        result = self.client.create_abook(name, description, addressbook_id)
        return result

    def get_addressbook(self, addressbook_id, schema_out=None, user_session=None):
        """
        ```in
        addressbook_id = (S)
        ```
        ```out
        addressbook = (dict)
        ```
        returns dict of addressbook vcards {hrefs: etags}
        """
        self._verify_client()
        addressbook = self.client.get_abook(addressbook_id)
        output = schema_out.new()
        output.addressbook = addressbook
        return output

    def get_addressbook_meta(self, addressbook_id, schema_out=None, user_session=None):
        """
        ```in
        addressbook_id = (S)
        ```
        ```out
        addressbook = (dict)
        ```
        returns addressbook props href, name and description
        """
        self._verify_client()
        addressbook = self.client.get_abook(addressbook_id, get_meta=True)
        output = schema_out.new()
        output.addressbook = addressbook
        return output

    def delete_addressbook(self, href, user_session=None):
        """
        ```in
        href = (S)
        ```
        href is user/addressbook_id
        """
        self._verify_client()
        self.client.delete_abook(href)
        return True

    def add_vcard(self, vcard, href, user_session=None):
        """
        ```in
        vcard = (S)
        href = (S)
        ```
        Adds a new vcard to an address book
        vcard is in standared vcard format
        href is the href for the address book you want to add vcard to user/addresssbook_id
        vcard example :
        begin:VCARD
        source:ldap://cn=bjorn%20Jensen, o=university%20of%20Michigan, c=US
        name:Bjorn Jensen
        fn:Bj=F8rn Jensen
        n:Jensen;Bj=F8rn
        email;type=internet:bjorn@umich.edu
        tel;type=work,voice,msg:+1 313 747-4454
        key;type=x509;encoding=B:dGhpcyBjb3VsZCBiZSAKbXkgY2VydGlmaWNhdGUK
        end:VCARD
        """
        self._verify_client()
        return self.client.upload_new_card(vcard, href)

    def get_vcard(self, href, user_session=None):
        """
        ```in
        href = (S)
        ```
        """
        self._verify_client()
        return self.client.get_vcard(href)

    def delete_vcard(self, href, etag=None, user_session=None):
        """
        ```in
        href = (S)
        etag = (S)
        ```
        if etag is provided will only delete if etag is matched
        href is user/addressbook_id/vcard_href
        """
        self._verify_client()
        if not etag:
            etag = None
        self.client.delete_vcard(href, etag)
        return True

    def find_vcards(self, text, addressbook_href, schema_out=None, user_session=None):
        """
        ```in
        text = (S)
        addressbook_href = (S)

        ```
        ```out
        vcards = (LS)
        ```
        text to search with
        addressbook_href: user/addressbook_id for the addressbook you want to search in
        """
        self._verify_client()
        if not addressbook_href:
            vcards = []
        else:
            vcards = self.client.find_vcards(text, addressbook_href)
        output = schema_out.new()
        output.vcards = vcards
        return output

    def update_vcard(self, vcard, href, etag=None, user_session=None):
        """
        ```in
        vcard = (S)
        href = (S)
        etag = (S)
        ```
        if etag is provided will only update if etag is matched
        vcard is vcard in standard format
        href is user/addressbook_id/vcard_id
        """
        if not etag:
            etag = None
        self.update_vcard(vcard, href, etag)
        return True
