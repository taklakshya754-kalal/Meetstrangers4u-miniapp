const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

async function showAd() {

    if (!tg.initDataUnsafe.user) {
        alert("❌ Please open this Mini App from Telegram.");
        return;
    }

    const userId = tg.initDataUnsafe.user.id;

    try {

        // Monetag Rewarded Ad
        await show_11373894();

        // Reward API
        const response = await fetch(
            "https://mass-pct-acute-focuses.trycloudflare.com/reward",
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

        if (result.success) {

            alert(
                "🎉 Reward Added!\n\n" +
                "🪙 Coins: " + result.coins
            );

            setTimeout(() => {
                tg.close();
            }, 500);

        } else {

            alert("❌ Reward failed.");

        }

    } catch (e) {

        console.error(e);
        alert("❌ Ad skipped or failed.");

    }

}
