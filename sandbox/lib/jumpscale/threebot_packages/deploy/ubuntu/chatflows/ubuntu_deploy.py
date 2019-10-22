from Jumpscale import j


def chat(bot):
    """
    to call http://localhost:5050/chat/session/ubuntu_deploy
    """

    host_name = bot.string_ask("Host name:")
    version = bot.single_choice("Version", ["18.04", "18.10", "19.04", "19.10"])
    memory = bot.single_choice("Memory", ["2 GB", "4 GB", "8 GB", "16 GB", "32 GB", "64 GB", "12 8GB"])
    cpu = bot.single_choice("CPU", ["2 Cores", "4 Cores", "8 Cores", "16 Cores"])
    disk = bot.single_choice("Disk", ["25 GB", "50 GB", "100 GB", "200 GB"])

    # j.builders.apps.wordpress.install(path, host_url, title, admin_user, admin_password, admin_email)

    res = f"""
    # Ubuntu has been deployed successfully: 
    """
    bot.md_show(res)
    bot.redirect("https://threefold.me")
