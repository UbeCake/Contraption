enyo.kind({
    name: "Contraption.MainScreen", kind: enyo.VFlexBox, transitionKind: "enyo.transitions.LeftRightFlyin",
    published: {
      playDuration: "60",
      enforcePlayTimer: false,
      roundDuration: "0",
      enforceRoundTimer: false,
      playerOneHealth: "20",
      playerTwoHealth: "20"
    },
    components: [
        {kind: "PageHeader",
        components: [
            {name: "initialSetup", kind: "Contraption.InitialSetup", lazy: "false", className: "enyo-dark",
                onReceive: "preferencesReceived", onSave: "preferencesSaved"},
            {content: "Main Screen", flex: 1},
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
        {kind: "HFlexBox",
        components: [
            {content: "Player One Health: &nbsp; "},
            {name: "playerOneHealthText", content: "", flex: 1},
        ]},
        {kind: "HFlexBox",
        components: [
            {content: "Player Two Health: &nbsp; "},
            {name: "playerTwoHealthText", content: "", flex: 1},
        ]},
        {kind: "HFlexBox",
        components: [
            {name: "playTimer", kind: "Contraption.PlayTimer", lazy: "false"}
        ]},
        {kind: "Button", caption: "(Main Screen Here)", onclick: ""},
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
        
        this.$.initialSetup.close();
        this.$.playTimer.timerStart();
    },
    // update functions
    playDurationChanged: function() {
        this.$.playDurationText.setContent( this.playDuration );
    },
    enforcePlayTimerChanged: function() {
        this.$.enforcePlayTimerText.setContent( this.enforcePlayTimer ? "true" : "false" );
    },
    roundDurationChanged: function() {
        this.$.roundDurationText.setContent( this.roundDuration );
    },
    enforceRoundTimerChanged: function() {
        this.$.enforceRoundTimerText.setContent( this.enforceRoundTimer ? "true" : "false" );
    },
    playerOneHealthChanged: function() {
        this.$.playerOneHealthText.setContent( this.playerOneHealth );
    },
    playerTwoHealthChanged: function() {
        this.$.playerTwoHealthText.setContent( this.playerTwoHealth );
    }
});