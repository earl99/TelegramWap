const tg = window.Telegram.WebApp;

tg.ready();
tg.MainButton.text = "Click Me!";
tg.MainButton.show();
tg.MainButton.onClick(() => {
    tg.sendData("Button clicked!");
});
