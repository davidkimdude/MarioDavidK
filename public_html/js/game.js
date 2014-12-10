
/* Game namespace */
var game = {
    // an object where to store game information
    data: {
        // score
        score: 0
   },
    // Run on page load.
    "onload": function() {
        // Initialize the video.
        //Makes the game screen appear
        //You can also make the screen smaller or bigger
        if (!me.video.init("screen", me.video.CANVAS, 1067, 600, true, 1.0)) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // add "#debug" to the URL to enable the debug Panel

        //If you type #debug after your address and hit restart, you can
        //check many things like hitbox so it will let you know where the
        //player colliddes with the object
        if (document.location.hash === "#debug") {
            window.onReady(function() {
                me.plugin.register.defer(this, debugPanel, "debug");
            });
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);

        // Load the resources.
        me.loader.preload(game.resources);

        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },
    // Run on game resources loaded.
    //The stuffs that will load when you start the game
    "loaded": function() {
        me.pool.register("mario", game.PlayerEntity, true);
        me.pool.register("BadGuy", game.BadGuy);
        me.pool.register("mushroom", game.Mushroom);

        me.pool.register("levelTrigger", game.levelTrigger);

        me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // Start the game.
        //If you write PLAY instead of MENU, it will automatically go to
        //the play screen
        me.state.change(me.state.MENU);
    }
};
