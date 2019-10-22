from Jumpscale import j


def chat(bot):
    """
    to call http://localhost:5050/chat/session/wordpress_deploy
    """
    username = bot.string_ask("Username:")

    # j.builders.apps.wordpress.install(path, host_url, title, admin_user, admin_password, admin_email)

    res = f"""
    # Miner craft has been deployed successfully: 
    """
    bot.md_show(res)
    bot.redirect("https://threefold.me")
