const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let user = tg.initDataUnsafe.user;

if (user) {
    alert(
        "Your Telegram ID is: " + user.id
    );
}
