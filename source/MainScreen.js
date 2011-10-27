enyo.kind({
    name: "Contraption.MainScreen", kind: enyo.VFlexBox, transitionKind: "enyo.transitions.LeftRightFlyin",
    published: {
      playDuration: 60,
      enforcePlayTimer: false,
      roundDuration: 0,
      enforceRoundTimer: false,
      playerOneHealth: 20,
      playerTwoHealth: 20
    },
    components: [
        {kind: "Image", src: "images/fill_top.png",
            style: "position: absolute; top: 0px; left: 0px; z-index: -1;"},
        {kind: "Image", src: "images/fill_bottom.png",
            style: "position: absolute; top: 363px; left: 0px; z-index: -1;"},
        {kind: "Contraption.RoundTimer", lazy: "false"},
        {kind: "Contraption.PlayTimer", lazy: "false"},
        {name: "duelBegin", kind: "Sound", src: "audio/11220__jnr-hacksaw__ultrasound-boom.wav"},
        
        {kind: "HFlexBox",
        components: [
            {name: "initialSetup", kind: "Contraption.InitialSetup", lazy: "false", 
                onReceive: "preferencesReceived", onSave: "preferencesSaved"},
            {name: "resetButton", kind: "Button", content: "Back to Initial Setup", onclick: "loadInitialSetup"}
        ]},
        {kind: "HFlexBox",
        components: [
            {content: "Play Duration: &nbsp; "},
            {name: "playDurationText", content: "", flex: 1},
        ]},
        {kind: "HFlexBox",
        components: [
            {content: "Enforce Play Timer: &nbsp; "},
            {name: "enforcePlayTimerText", content: "", flex: 1},
        ]},
        {kind: "HFlexBox",
        components: [
            {content: "Round Duration: &nbsp; "},
            {name: "roundDurationText", content: "", flex: 1},
        ]},
        {kind: "HFlexBox",
        components: [
            {content: "Enforce Round Timer: &nbsp; "},
            {name: "enforceRoundTimerText", content: "", flex: 1},
        ]},
        {name: "playerOneHealthWidget", kind: "Contraption.HealthCounter", lazy: "false",
            style: "position: absolute; top: 500px; left: 100px;"},
        {name: "playerTwoHealthWidget", kind: "Contraption.HealthCounter", lazy: "false",
            style: "position: absolute; top: 200px; left: 800px; -webkit-transform: rotate(180deg)"},
        {kind: "HFlexBox",
        components: [
            {content: "Player Two Health: &nbsp; "},
            {name: "playerTwoHealthText", content: "", flex: 1},
        ]},
    ],
    loadInitialSetup: function() {
        //this.owner.$.contraptionContainer.selectViewByName("initialSetup");
        this.$.initialSetup.openAtCenter();
    },
    rendered: function() {
        this.$.initialSetup.openAtCenter();
    },
    
    // got preferences from the db, let's set our local vars to their values
    preferencesReceived: function(inSender, inDefaultPlayDuration, inDefaultEnforcePlayTimer, inDefaultRoundDuration, inDefaultEnforceRoundTimer, inDefaultPlayerOneHealth, inDefaultPlayerTwoHealth) {
        this.setPlayDuration( inDefaultPlayDuration );
        this.setEnforcePlayTimer( inDefaultEnforcePlayTimer );
        this.setRoundDuration( inDefaultRoundDuration );
        this.setEnforceRoundTimer( inDefaultEnforceRoundTimer );
        this.setPlayerOneHealth( inDefaultPlayerOneHealth );
        this.setPlayerTwoHealth( inDefaultPlayerTwoHealth );
    },
    // we saved some new preferences, let's update our local vars to reflect them
    preferencesSaved: function(inSender, inPlayDuration, inEnforcePlayTimer, inRoundDuration, inEnforceRoundTimer, inPlayerOneHealth, inPlayerTwoHealth) {
        this.setPlayDuration( inPlayDuration );
        this.setEnforcePlayTimer( inEnforcePlayTimer );
        this.setRoundDuration( inRoundDuration );
        this.setEnforceRoundTimer( inEnforceRoundTimer );
        this.setPlayerOneHealth( inPlayerOneHealth );
        this.setPlayerTwoHealth( inPlayerTwoHealth );
        
        this.$.duelBegin.play();
        this.$.initialSetup.close();
        
        this.$.playerOneHealthWidget.setStartingHealth( inPlayerOneHealth );
        this.$.playerOneHealthWidget.setHealthValue( inPlayerOneHealth );
        this.$.playerTwoHealthWidget.setStartingHealth( inPlayerTwoHealth );
        this.$.playerTwoHealthWidget.setHealthValue( inPlayerTwoHealth );
        
        this.$.playTimer.setPlayTimerDuration( inPlayDuration );
        this.$.roundTimer.setRoundTimerDuration( inRoundDuration );
        this.$.roundTimer.timerStart();
    },

    // preferences update functions
    playDurationChanged: function() {
        this.$.playTimer.setPlayTimerDuration( this.playDuration );
    },
    enforcePlayTimerChanged: function() {
        this.$.playTimer.setEnforcePlayTimer( this.enforcePlayTimer ? true : false );
    },
    roundDurationChanged: function() {
        this.$.roundTimer.setRoundTimerDuration( this.roundDuration );
    },
    enforceRoundTimerChanged: function() {
        this.$.roundTimer.setEnforceRoundTimer( this.enforceRoundTimer ? true : false );
    },
    playerOneHealthChanged: function() {
        this.$.playerOneHealthWidget.setHealthValue( this.playerOneHealth );
    },
    playerTwoHealthChanged: function() {
        this.$.playerTwoHealthWidget.setHealthValue( this.playerTwoHealth );
    }
});