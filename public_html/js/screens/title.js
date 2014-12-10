game.TitleScreen = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        // Load your title screen from the image
        var titleImage = new me.Sprite(0, 0, me.loader.getImage("title-screen"));
        me.game.world.addChild(titleImage, -10);
        // Let the game start when you press ENTER
        me.input.bindKey(me.input.KEY.ENTER, "start");

        // Draw or write something in your title screen
        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, 'init', [510, 30, me.game.viewport.width, me.game.viewport.height]);
                // Decide what fonts and what size you will use for your letters.
                this.font = new me.Font("Arial", 46, "white");
            },
            // Draw whatever you wrote here in your title screen.
            draw: function(renderer) {
                this.font.draw(renderer.getContext(), "Tricky Mario", 450, 130);
                this.font.draw(renderer.getContext(), "Press ENTER to play", 250, 530);
            }

        })));

        // If key is pressed, start the game.
        this.handler = me.event.subscribe(me.event.KEYDOWN, function(action, keyCode, edge) {
            if (action === "start") {
                me.state.change(me.state.PLAY);
            }
        });
   },
    /**	
     *  action to perform when leaving this screen (state change)
     */
    // If you stop pressing the key, unsubscribe from the handler.
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.event.unsubscribe(this.handler);
    }
});
