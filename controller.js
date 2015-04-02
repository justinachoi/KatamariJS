
var app = new function(app) {
	
	app.makeHotSpots = function(assets, pages) {
		
		zog(assets.intro.instructionButton);
		zog(assets.intro.ball);
		var hs = new zim.HotSpots([
			{page:assets.info, rect:assets.info.back, call:function(){pages.go(assets.intro, "right");} },
			{page:assets.intro, rect:assets.intro.ball, call:function(){pages.go(assets.gameStart, "right");} },
			{page:assets.intro, rect:assets.intro.instructionButton, call:function(){pages.go(assets.info, "left");} },
			{page:assets.gameStart, rect:assets.gameStart.menu, call:function(){pages.go(assets.intro, "left");} }
		]);	
		
		function goHome() {
			zog("home");	
		}
		
	}	
	
	return app;
}(app || {});