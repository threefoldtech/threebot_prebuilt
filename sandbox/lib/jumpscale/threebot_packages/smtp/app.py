from Jumpscale import j
import smtpd
from .gsmtpd import SMTPServer


class MailServer(SMTPServer):
    # Do something with the gathered message
    def process_message(self, peer, mailfrom, rcpttos, data):
        inheaders = 1
        lines = data.split("\n")
        print("---------- MESSAGE FOLLOWS ----------")
        for line in lines:
            # headers first
            if inheaders and not line:
                print("X-Peer:", peer[0])
                inheaders = 0
            print(line)
        print("------------ END MESSAGE ------------")
