const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

// SDK loaded ya nahi
alert("SDK: " + typeof show_11373894);

const user = tg.initDataUnsafe.user;

// Preload
if (user && typeof show_11373894 === "function") {
    show_11373894({
        type: "preload",
        ymid: String(user.id)
    }).catch(console.log);
}

async function showAd() {

    alert("Button Clicked");

    if (!user) {
        alert("❌ Please open this Mini App from Telegram.");
        return;
    }

    if (typeof show_11373894 !== "function") {
        alert("❌ Monetag SDK not loaded!");
        return;
    }

    try {

        alert("Opening Ad...");

        const result = await show_11373894({
            ymid: String(user.id)
        });

        console.log(result);

        alert("✅ Ad Finished");

    } catch (e) {

        console.log(e);

        alert("❌ Ad Failed\n\n" + JSON.stringify(e));

    }

}
