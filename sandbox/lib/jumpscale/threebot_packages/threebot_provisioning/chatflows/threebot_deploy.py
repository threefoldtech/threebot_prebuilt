from Jumpscale import j


def chat(bot):
    """
    to call http://localhost:5050/chat/session/threebot_deploy
    """
    phonebook = j.clients.gedis.get(name="phonebook", port=8901, host="phonebook.3bot.grid.tf")
    token = j.clients.digitalocean.provisioning.token_
    question = "Please enter your 3BOT doublename: {}"
    remark = ""
    while True:
        name = bot.string_ask(question.format(remark))
        if name.count(".") != 1:
            remark = "(Doublename should have atleast one dot)"
            continue
        try:
            phonebook.actors.phonebook.get(name=name)
            remark = "(Doublename is alreayd in use)"
        except:
            break

    question = "Please enter your email: {}"
    remark = ""
    while True:
        email = bot.string_ask(question.format(remark))
        if not j.data.types.email.check(email):
            remark = "(Invalid email)"
            continue
        break
    question = "Please enter a description for your 3BOT:"
    description = bot.string_ask(question)
    bot.md_show("Deployment will start this might take several minutes")

    threebot_machine = j.tools.threebot_deploy.get(
        name, do_machine_name=f"threebot-{name}", do_token=token, do_project_name="3bots"
    )
    if not threebot_machine.exists():
        threebot_machine.create_new_do_machine()
    threebot_machine.machine_init()
    threebot_machine.jsx_install()
    threebot_machine.wireguard_install()
    threebot_machine.threebot_start()
    print("Finished installing threebot")
    print("Start registration installing threebot")

    client = threebot_machine.threebot_client()
    client.actors.registration.register(name, email, description)

    url = f"https://{name}.3bot.grid.tf"
    res = """
    # Your 3bot has been registered successfully you can find it here ({0})[{0}]
    """.format(
        url
    )
    bot.md_show(res)
    # bot.redirect("https://threefold.me")
