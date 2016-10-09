$(document).ready(function(){
	$('#reader').html5_qrcode(function(data){
			console.log(data);
            window.location.href = data;
		},
		function(error){
            console.log(error)
		}, function(videoError){
			console.log("VIDEO ERROR: " + videoError);
		}
	);
});