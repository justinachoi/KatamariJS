zog("hi from view.js");

var app = function(app) {

	app.game = function() {

		zog("pages");
		p = {};

		//-------------I N T R O  P A G E -------------------
		p.intro = new createjs.Container();		
		p.intro.name = "intro";	
		p.intro.setBounds(0,0,stageW,stageH);

 		var introBacking = new createjs.Shape();
 		introBacking.setBounds(0,0,stageW,stageH);
 		introBacking.graphics.beginLinearGradientFill(["#230d41", "#863063"], [0, 1], 0, 0, stageW, stageH);
 		introBacking.graphics.drawRect(0,0,stageW,stageH);
 		p.intro.addChild(introBacking);

		//TAP TO START TEXT
		var startButton = p.intro.startButton = new zim.Label("T A P   B A L L   T O   B E G I N", 15, "Raleway", "#FFFFFF");
		p.intro.addChild(startButton);
        startButton.alpha = 0.9;

		startButton.x = frame.stageW/2;
		startButton.y = frame.stageH/1.4;

		var buttonBounds = startButton.getBounds();
		startButton.regX = buttonBounds.width/2;

		startButton.alpha = 0;
		createjs.Tween.get(startButton, {loop:true})
			//.wait(1050).to({alpha:1}, 1500, createjs.Ease.circIn);
            .wait(1050).to({alpha:1}, 1500).to({alpha:0}, 1000);

        //SETTINGS BUTTON
        var instructionButton = p.intro.instructionButton = new zim.Label("H I N T", 25, "Raleway", "#FFFFFF");
        p.intro.addChild(instructionButton);

        instructionButton.x = frame.stageW/2;
        instructionButton.y = frame.stageH/1.2;

        var instructionBounds = instructionButton.getBounds();
        instructionButton.regX = instructionBounds.width/2;

        instructionButton.alpha = 0;
        createjs.Tween.get(instructionButton)
            .wait(1050).to({alpha:1}, 1500, createjs.Ease.circIn);


        //BALL ANIMATION
        var ball = p.intro.ball = new createjs.Container();
        p.intro.addChild(ball);
        ball.scaleX = 0.6;
        ball.scaleY = 0.6;

        var ballImg = new createjs.Bitmap("images/ball.png");
        ball.x = frame.stageW/2;
        ball.y = frame.stageH/3;
        ball.addChild(ballImg);

        ball.width = ball.getBounds().width; 
        ball.height = ball.getBounds().height;
        
        ball.regX = ball.width / 2;
        ball.regY = ball.height / 2;

		ball.alpha = 0;
		createjs.Tween.get(ball)
			.wait(150).to({alpha:1}, 1500, createjs.Ease.circIn);


        //MUTE BUTTON
        var muteButton = p.intro.muteButton = new createjs.Container();
        muteButton.scaleX = 0.6;
        muteButton.scaleY = 0.6;
        var soundOn = new createjs.Bitmap("images/sound_on.png");
        var soundMute = new createjs.Bitmap("images/sound_mute.png");
        muteButton.addChild(soundOn);

        muteButton.x = 20;
        muteButton.y = 20;
       
        muteButton.on("click", toggleMute);
        p.intro.addChild(muteButton);
        muteButton.cursor = "pointer";
                    

        
        function toggleMute(e) {
            e.stopImmediatePropagation();
            if (createjs.Sound.getMute()) {
                createjs.Sound.setMute(false);
                p.intro.muteButton.removeChild(soundMute);
                p.intro.muteButton.addChild(soundOn);
            } else {
                createjs.Sound.setMute(true);
                p.intro.muteButton.removeChild(soundOn);
                p.intro.muteButton.addChild(soundMute);
            }
            stage.update();
        }

        stage.update();


        //------------------I N F O  P A G E -----------------
        p.info = new createjs.Container();
        p.info.name = "info"; 
        p.info.setBounds(0,0,stageW,stageH);


 		var infoBacking = new createjs.Shape();
 		infoBacking.setBounds(0,0,stageW,stageH);
 		infoBacking.graphics.beginLinearGradientFill(["#230d41", "#863063"], [0, 1], 0, 0, stageW, stageH);
 		infoBacking.graphics.drawRect(0,0,stageW,stageH);
 		p.info.addChild(infoBacking);
		
        //INSTRUCTION TEXT
        var instructions1 = p.info.instructions1 = new zim.Label("C O L L E C T   T H E   S M A L L   O B J E C T S   F I R S T", 25, "Raleway", "#FFFFFF");
        p.info.addChild(instructions1);
        
        instructions1.x = frame.stageW/2;
        instructions1.y = frame.stageH/2.55;
      
        var iBounds1 = instructions1.getBounds();
        instructions1.regX = iBounds1.width/2;

        //BACK BUTTON
        var back = p.info.back = new createjs.Container();
        p.info.addChild(back);
        back.scaleX = 0.2;
        back.scaleY = 0.2;

        var backImg = new createjs.Bitmap("images/back.png");
        back.x = frame.stageW/2;
        back.y = frame.stageH/1.45;
        back.addChild(backImg);

        back.width = back.getBounds().width; 
        back.height = back.getBounds().height;

        
        back.regX = back.width / 2;
        back.regY = back.height / 2;


		//-------------G A M E  P A G E -------------------
		p.gameStart = new createjs.Container();		
		p.gameStart.name = "gameStart";		

 		var gameBacking = new createjs.Shape();
 		gameBacking.setBounds(0,0,stageW,stageH);
 		gameBacking.graphics.beginLinearGradientFill(["#230d41", "#863063"], [0, 1], 0, 0, stageW, stageH);
 		gameBacking.graphics.drawRect(0,0,stageW,stageH);
 		p.gameStart.addChild(gameBacking);

		var mainBall = new createjs.Container();
		p.gameStart.addChild(mainBall);
        mainBall.scaleX = 0.6;
        mainBall.scaleY = 0.6;

        var ballImg2 = new createjs.Bitmap("images/ball.png");
        mainBall.addChild(ballImg2);

        mainBall.width = mainBall.getBounds().width; 
        mainBall.height = mainBall.getBounds().height;
        
        mainBall.regX = mainBall.width / 2;
        mainBall.regY = mainBall.height / 2;
        mainBall.setBounds(mainBall.width / 4,mainBall.width / 4,mainBall.width / 2,mainBall.width / 2);
        //zim.drag(mainBall, null, "pointer", "pointer", true);

        mainBall.x = frame.stageW/2;
        mainBall.y = frame.stageH/2;


        //MENU BUTTON
        var menuButton = p.gameStart.menu = new createjs.Container();
        p.gameStart.addChild(menuButton);
        menuButton.scaleX = 0.75;
        menuButton.scaleY = 0.75;

        var menuImg = new createjs.Bitmap("images/menu.png");
        menuButton.addChild(menuImg);

        menuButton.x = 20;
        menuButton.y = 20;

        //OBJECTS
        var things = new createjs.Container();
        var things2 = new createjs.Container();
        p.gameStart.addChild(things);
        p.gameStart.addChild(things2);

        var candy = new createjs.Bitmap("images/candy.png");
        zim.scale(candy,0.7);
        candy.x = zim.rand(0,frame.stageW-50);
        candy.y = zim.rand(0,frame.stageH-50);
//        things.addChild(candy);

        var lego = new createjs.Bitmap("images/lego.png");  
        zim.scale(lego,0.7);
        lego.x = zim.rand(0,frame.stageW-50);
        lego.y = zim.rand(0,frame.stageH-50);
//        things.addChild(lego);  

        var shroom = new createjs.Bitmap("images/shroom.png");
        zim.scale(shroom,0.4);
        shroom.x = zim.rand(0,frame.stageW-50);
        shroom.y = zim.rand(0,frame.stageH-50);
//        things.addChild(shroom);

        var bulb = new createjs.Bitmap("images/bulb.png");
        zim.scale(bulb,0.7);
        bulb.x = zim.rand(0,frame.stageW-50);
        bulb.y = zim.rand(0,frame.stageH-50);
//        things.addChild(bulb);

        var tennisball = new createjs.Bitmap("images/tennisball.png");
        zim.scale(tennisball,0.8);
        tennisball.x = zim.rand(0,frame.stageW-50);
        tennisball.y = zim.rand(0,frame.stageH-50);
//        things.addChild(tennisball);

        var cheese = new createjs.Bitmap("images/cheese.png");
        zim.scale(cheese,0.8);
        cheese.x = zim.rand(0,frame.stageW-50);
        cheese.y = zim.rand(0,frame.stageH-50);
//        things2.addChild(cheese);

        var toiletpaper = new createjs.Bitmap("images/toiletpaper.png");
        zim.scale(toiletpaper,0.7);
        toiletpaper.x = zim.rand(0,frame.stageW-50);
        toiletpaper.y = zim.rand(0,frame.stageH-50);
//        things2.addChild(toiletpaper);

        var pie = new createjs.Bitmap("images/pie.png");
        zim.scale(pie,0.7);
        pie.x = zim.rand(0,frame.stageW-50);
        pie.y = zim.rand(0,frame.stageH-50);
//        things2.addChild(pie);

        var balloon = new createjs.Bitmap("images/balloon.png");
        zim.scale(balloon,0.7);
        balloon.x = zim.rand(0,frame.stageW-50);
        balloon.y = zim.rand(0,frame.stageH-50);
//        things2.addChild(balloon);

        //ADD OBJECTS
        things.addChild(candy);
        things.addChild(lego);  
        things.addChild(shroom);
        things.addChild(bulb);
        things.addChild(tennisball);
        things2.addChild(cheese);
        things2.addChild(toiletpaper);
        things2.addChild(pie);
        things2.addChild(balloon);


		stage.update();

		//--------------------A N I M A T I O N -----------------


        animationTicker = createjs.Ticker.on("tick", gameBegin);
        createjs.Ticker.setFPS(60);

        var hitCheck = false;
        var playagain;
        tennisball;
        mainBall;

        function gameBegin(e){
        	ball.rotation += 2;
        	mainBall.rotation += 2;

        	var difX = stage.mouseX - mainBall.x;
            var difY = stage.mouseY - mainBall.y;
        
            mainBall.x += difX/90; 
            mainBall.y += difY/90;

        	stage.update();

            var scaleBall;
            lvlOne();

            function restartGame(e){
                p.gameStart.removeChild(mainBall);
                //p.gameStart.mainBall.removeChild(tennisball);
                p.gameStart.removeChild(playagain);
                //p.gameStart.addChild(mainBall);
                //zog("restarting");
                stage.update();

            }

            function lvlOne(){
                var currentThing;
                for(var i=0;i<things.getNumChildren();i++){
                    currentThing = things.getChildAt(i);
                    if (zim.hitTestBounds(mainBall, currentThing)) {
                        mainBall.addChild(currentThing);
                        var placement = zim.rand(0,150);
                        var placement2 = zim.rand(0,150);
                        currentThing.x = placement;
                        currentThing.y = placement2;
                    }                          
                }//END THING1 LOOP

                var thingsCount;
                thingsCount = things.getNumChildren();
                if (thingsCount==0){
                    scaleBall = createjs.Tween.get(mainBall) 
                        .to({scaleX:.95,scaleY:.95}, 900, createjs.Ease.elasticOut);
                   lvlTwo();
                }
            }//END LVL1

            function lvlTwo(){
                var currentThing2;
                for(var i=0;i<things2.getNumChildren();i++){
                    currentThing2 = things2.getChildAt(i);
                    if (zim.hitTestBounds(mainBall, currentThing2)) {
                        mainBall.addChild(currentThing2);
                        var placement = zim.rand(0,150);
                        currentThing2.x=placement;
                        currentThing2.y=placement;
                    }      

                    var things2Count;
                    things2Count = things2.getNumChildren();
                    if (things2Count==0){
                        playagain = p.gameStart.playagain = new zim.Label("P L A Y  A G A I N", 40, "Verdana", "#FFFFFF");
                        p.gameStart.addChild(playagain);

                        playagain.x = frame.stageW/2;
                        playagain.y = frame.stageH/1.9;

                        var playBounds = playagain.getBounds();
                        playagain.regX = playBounds.width/2;

                        playagain.alpha = 0;
                        createjs.Tween.get(playagain)
                            .wait(200).to({alpha:1}, 900, createjs.Ease.circIn);

                        playagain.cursor = "pointer";
                        playagain.on("click", restartGame);    
                    }

                } 
            }

		}// END OF gameBegin


		return p;
	}

	return app;
}(app || {});

