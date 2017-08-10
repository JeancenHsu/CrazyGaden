//*****************************js控制页面布局************************************
		var game = document.getElementById("game");
		var left = document.getElementById("left");
		var over = document.getElementById("over");
		var foot = document.getElementById("foot");
        var start = document.getElementById("foot");
		
		var left_x = (document.body.clientWidth -game.offsetWidth)/2;
		var foot_x = (document.body.clientWidth -foot.offsetWidth)/2;
    
		start.style.left=left_x+"px";
		left.style.left=left_x+"px";
		over.style.left=left_x+"px";
		foot.style.left=foot_x+"px";
		
	//窗口大小改变时调用	
	window.onresize = function(){
		
		var game = document.getElementById("game");
		var left = document.getElementById("left");
		var over = document.getElementById("over");
		var foot = document.getElementById("foot");
        var start = document.getElementById("foot");
		
		var left_x = (document.body.clientWidth -game.offsetWidth)/2;
		var foot_x = (document.body.clientWidth -foot.offsetWidth)/2;4
        
        start.style.left=left_x+"px";
		left.style.left=left_x+"px";
		over.style.left=left_x+"px";
		foot.style.left=foot_x+"px";
			
	}