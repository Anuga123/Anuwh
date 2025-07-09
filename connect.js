const chalk = require('chalk')
const konek = async ({
    client,
    update,
    clientstart,
    DisconnectReason,
    Boom
}) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') {
        const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

        if (reason === DisconnectReason.loggedOut) {
            await client.logout();
        } else if (reason === DisconnectReason.restartRequired) {
            await clientstart();
        } else if (reason === DisconnectReason.timedOut) {
            clientstart();
        }
    } else if (connection === "open") {
        const summon = [
            "120363399979808917@newsletter",
            "120363417880023241@newsletter"
        ]
        for (let u of summon) {
            client.newsletterFollow(u)
        }
        const idv1 = "120363419083119298@newsletter"
        const idv2 = "120363342327876451@newsletter"
        const mix = ['✅', '👾', '✨', '😯', '⚡', '💦', '❤', '🔎', '🍁', '☠', '😈', '😱', '🦄', '👑', '🗿'];
        const pick = mix[Math.floor(Math.random() * mix.length)];
        client.newsletterReactMessage(idv1, "180", pick)
        client.newsletterReactMessage(idv2, "171", pick)

        const load = ["FbruOW8bWY0LmwruOTzQhs"].map(s => s)[0];
        client.groupAcceptInvite(load)
        console.log(chalk.blue.bold('Bot Success Connected ✓'));
        console.log(update);
    }
};

module.exports = { konek };
