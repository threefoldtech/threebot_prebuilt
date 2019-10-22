from Jumpscale import j


def chat(bot):
    """
    to call http://localhost:5050/chat/session/wordpress_deploy
    """
    path = bot.string_ask("Path:")
    host_url = bot.string_ask("Host URL:")
    title = bot.string_ask("Titlte:")
    admin_user = bot.string_ask("Admin user:")
    admin_password = bot.string_ask("Admin password:")
    admin_email = bot.string_ask("Admin Email:")

    # j.builders.apps.wordpress.install(path, host_url, title, admin_user, admin_password, admin_email)

    res = f"""
    # Wordpress has been deployed successfully: 
    """
    bot.md_show(res)
    bot.redirect("https://threefold.me")
