from Jumpscale import j


def chat(bot):
    """
    to call http://localhost:5050/chat/session/wordpress_deploy
    """
    admin_user = bot.string_ask("Admin user:")
    admin_password = bot.string_ask("Admin password:")
    admin_email = bot.string_ask("Admin Email:")
    db_user = bot.string_ask("Database user:")
    db_password = bot.string_ask("Database password:")

    # j.builders.apps.wordpress.install(path, host_url, title, admin_user, admin_password, admin_email)

    res = f"""
    # Taiga has been deployed successfully: 
    """

    bot.md_show(res)
    bot.redirect("https://threefold.me")
