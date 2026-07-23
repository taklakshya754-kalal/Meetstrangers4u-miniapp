const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

async function showAd() {
    alert("Button Clicked");
    const user = tg.initDataUnsafe.user;

    if (!user) {
        alert("❌ Please open this Mini App from Telegram.");
        return;
    }

    try {

        // Show Monetag Rewarded Ad
        alert("Opening Ad...");
        await show_11373894();
        alert("Ad Finished");
        // Reward User
        const response = await fetch(
            "https://mass-pct-acute-focuses.trycloudflare.com/reward",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: user.id
                })
            }
        );

        const result = await response.json();

        if (result.success) {

            alert(`🎉 Reward Added!\n\n🪙 Coins: ${result.coins}`);

            tg.close();

        } else {

            alert("❌ Reward failed.");

        }

    } catch (err) {

        console.error(err);

        alert("❌ Ad skipped, failed or reward error.");

    }

}
