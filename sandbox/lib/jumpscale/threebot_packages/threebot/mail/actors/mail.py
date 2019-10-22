from Jumpscale import j
import binascii
from io import BytesIO
import json
import os

from JumpscaleLibs.servers.mail.smtp import app
from JumpscaleLibs.servers.mail.imap.bcdbmailbox import BCDBMailboxdir


class mail(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        models = j.servers.imap.get_models()
        self.bcdb_mailbox = BCDBMailboxdir(models)

    def send(self, mail, schema_out=None, user_session=None):
        """
        ```in
        mail = (O) !email.message.1
        ```
        ```out
        success = (B)
        ```
        """

        server = app.MailServer()
        mail_stored = server.store_mail(mail._ddict, is_send=True)
        self.bcdb_mailbox.create_folder(mail_stored.folder)
        out = schema_out.new()
        out.success = True
        return out

    def list(self, date_from=None, date_to=None, user_session=None):
        """
        ```in
        date_from =  (D)
        date_to =  (D)
        ```
        """
        if date_from and date_to:
            date_from = j.data.types.date.clean(date_from)
            date_to = j.data.types.date.clean(date_to)
            query = "WHERE date BETWEEN {} and {}".format(date_from, date_to)

            mails = self.bcdb_mailbox.get_messages(query).fetchall()

            return json.dumps([self.bcdb_mailbox.get_object(o[0])._ddict for o in mails])

        mails = self.bcdb_mailbox.get_messages()
        return json.dumps([o._ddict for o in mails])

    def list_folders(self, user_session=None):
        """
        """
        folders = self.bcdb_mailbox.list_folders()
        return folders

    def update_folder_name(self, old_name, new_name, schema_out=None, user_session=None):
        """
        ```in
        old_name = (S)
        new_name = (S)
        ```
        ```out
        success = (B)
        ```
        """

        self.bcdb_mailbox.rename_folder(old_name, new_name)
        out = schema_out.new()
        out.success = True
        return out

    def move_message(self, mail_id, folder_name, schema_out=None, user_session=None):
        """
        ```in
        mail_id = (I)
        folder_name = (S)
        ```
        ```out
        success = (B)
        ```
        """

        model = self.bcdb_mailbox.get_object(mail_id)
        model.folder = folder_name
        model.save()
        out = schema_out.new()
        out.success = True
        return out

    def delete(self, mail_id, schema_out=None, user_session=None):
        """
        ```in
        mail_id =  (I)
        ```
        ```out
        success = (B)
        ```
        """

        self.bcdb_mailbox.remove(mail_id)
        out = schema_out.new()
        out.success = True
        return out

    def update_priority(self, mail_id, priority, schema_out=None, user_session=None):
        """
        ```in
        mail_id =  (I)
        priority = (B)
        ```
        ```out
        success = (B)
        ```
        """
        model = self.bcdb_mailbox.get_object(mail_id)
        model.priority = priority
        model.save()
        out = schema_out.new()
        out.success = True
        return out

    def receive(self, mail, schema_out=None, user_session=None):
        """
        ```in
        mail = (O) !email.message.1
        ```
        ```out
        success = (B)
        ```
        """

        server = app.MailServer()
        mail_stored = server.store_mail(mail._ddict)
        self.bcdb_mailbox.create_folder(mail_stored.folder)
        out = schema_out.new()
        out.success = True
        return out
