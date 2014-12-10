game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
        
        //These are the things that you take from the images so you can use it in the game
        {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
        {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
        {name: "mario", type:"image", src: "data/img/player1.png"},
        {name: "title-screen", type:"image", src: "data/img/title-screen.png"},
	{name: "slime", type:"image", src: "data/img/slime-spritesheet.png"},
        {name: "mushroom", type:"image", src: "data/img/mushroom.png"},
        
        /* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        
        //These are the maps that you made in the tiled, so you can put your maps to your game.
        {name: "Davidlevel1", type: "tmx", src: "data/map/Davidlevel1.tmx"},
        {name: "Davidlevel2", type: "tmx", src: "data/map/Davidlevel2.tmx"}

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	

	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
];
