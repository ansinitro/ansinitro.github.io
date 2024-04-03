let tg = window.Telegram.WebApp

function sendData() {
    tg.sendData(JSON.stringify({
        game: document.getElementsByTagName('h1')[0].innerText,
        data: modalData
    }));
}
var BackButton = WebApp.BackButton;
BackButton.show();
BackButton.onClick(function() {
    WebApp.showAlert("BackButton clicked");
    BackButton.hide();
});
