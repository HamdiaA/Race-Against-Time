//referenced https://memberfix.rocks/hide-youtube-video/



var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	 
		var player;
	 
		function onYouTubeIframeAPIReady() {
	    	player = new YT.Player('player', {
	        	height: '100%',
	        	width: '100%',
	        	playerVars: { 'rel':0, 'autoplay': 1, 'controls': 0 },
	        	videoId: 'IisgnbMfKvI',
	        	events: {
	            'onReady': onPlayerReady,
	            'onStateChange': onPlayerStateChange
	        	}
	    	});
		}
	 
		function onPlayerReady(event) {
	    	event.target.playVideo();
	   		player.mute();
		}
	 
		var done = false;
	 
		function onPlayerStateChange(event) {        
	    	if(event.data === YT.PlayerState.ENDED) {          
	        stopVideo();
	    	}
		}
	 
		function stopVideo() {
	    	player.stopVideo();
	    	document.getElementById("player").style.display = "none";
	    	document.getElementsByClassName('fluid-width-video-wrapper').style.padding = "0";
		}



		function buttonclick() {
	 		document.getElementById("nums").value++;
	 		if (document.getElementById("nums").value == 40){
	 				sessionStorage.setItem("timePassed", timePassed);
	 				location.href = "page5.html";
	 		}
		}