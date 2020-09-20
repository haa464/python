
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!


    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    window.addEventListener("batterystatus",onBatteryStatus,false);

}

function onBatteryStatus(status){
	alert("level : "+ status.level + "isPlugged :" + status.isPlugged);
}