
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    document.addEventListener("backbutton",onBackButton,false);
}
function onBackButton(e){
    e.preventDefault();
    alert("back buttom is passed");

}

