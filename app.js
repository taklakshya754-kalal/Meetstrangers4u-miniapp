const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

/*
const user = tg.initDataUnsafe.user;

if (user) {
    document.body.innerHTML += `
        <hr>
        <h3>Telegram User</h3>
        <p>ID: ${user.id}</p>
        <p>Name: ${user.first_name}</p>
        <p>Username: @${user.username || "No Username"}</p>
    `;
} else {
    document.body.innerHTML += `
        <hr>
        <p>❌ Open this Mini App from Telegram.</p>
    `;
}
*/

const AdController = window.Adsgram.init({
    blockId: "39368"
});

async function showAd() {
    try {
        await AdController.show();

        alert("🎉 Ad completed successfully!\n\n🪙 Reward will be added automatically.");

        setTimeout(() => {
            tg.close();
        }, 500);

    } catch (e) {
        console.error(e);
        alert("❌ Ad skipped or failed.");
    }
}
