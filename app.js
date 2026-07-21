const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe.user;

/*
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
    blockId: "39215"
});

async function showAd() {
    try {
        await AdController.show();

        alert("✅ Ad completed successfully!");

        if (!tg.initDataUnsafe.user) {
            alert("❌ User data not found");
            return;
        }

        const userId = tg.initDataUnsafe.user.id;

        console.log("Sending reward for user:", userId);

        const response = await fetch(
            "https://truth-collar-received-reduced.trycloudflare.com/reward",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: userId
                })
            }
        );

        const result = await response.json();

        console.log("Reward response:", result);

        if (result.success) {
            alert(
                "🎉 Reward Added!\n\n" +
                "🪙 Coins: " + result.coins
            );
            setTimeout(() => {
                tg.close();
            }, 500);
        } else {
            alert("❌ Reward failed");
        }

    } catch (e) {
        console.error(e);
        alert("❌ Something went wrong");
    }
}
