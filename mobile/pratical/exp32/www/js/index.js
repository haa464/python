
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function cameraTakePicture(){
	navigator.camera.getPicture(onSuccess,onFailure,{
		quality:50,
		destinationType:camera.DestinationType.DATA_URL
	});

	function onSuccess(imagesrc){
		var im = document.getElementById('myImage');
		im.src = "data:image/jpeg;base64," +imagesrc;
	}

	function onFailure(meassage){
		alert("Failure beacuse :" +meassage);
		
	}

}

function cameraGetPicture(){
	navigator.camera.getPicture(onSuccess,onFailure,{
		quality:50,
		destinationType:Camera.DestinationType.DATA_URL,
		sourceType:Camera.PictureSourceType.PHOTOLIBRARY
	});

	function onSuccess(imagesrc){
		var im = document.getElementById('myImage');
		im.src = "data:image/jpg;base64," +imagesrc;
	}

	function onFailure(meassage){
		alert("Failure beacuse :" +meassage);
		
	}

}