const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe.user;

// Preload ad
if (user) {
    show_11373894({
        type: "preload",
        ymid: String(user.id)
    }).catch(console.log);
}

async function showAd() {

    if (!user) {
        alert("❌ Open this Mini App from Telegram.");
        return;
    }

    try {

        alert("Opening Ad...");

        await show_11373894({
            ymid: String(user.id)
        });

        alert("✅ Ad Finished");

    } catch (e) {

        console.log(e);

        alert("❌ Ad Failed");

    }

}
