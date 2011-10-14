enyo.kind({
    name: "UbeCake.InitialSetup", kind: "ModalDialog", style: "width: 600px",
    events: {
        onReceive: "",
        onSave: "",
        onCancel: ""
    },
    published: {
        defaultPlayDuration: "60",
        defaultEnforcePlayTimer: false,
        defaultRoundDuration: "0",
        defaultEnforceRoundTimer: false,
        defaultPlayerOneHealth: "20",
        defaultPlayerTwoHealth: "20"
    },
    components: [
        {name: "getPreferencesCall", kind: "PalmService", service: "palm://com.palm.systemservice/",
            method: "getPreferences", onSuccess: "getPreferencesSuccess", onFailure: "getPreferencesFailure"},
        {name: "setPreferencesCall", kind: "PalmService", service: "palm://com.palm.systemservice/",
            method: "setPreferences", onSuccess: "setPreferencesSuccess", onFailure: "setPreferencesFailure"},
        {kind: "RowGroup", caption: "Play/Turn Timing Options", 
        components: [
            {kind: "HFlexBox", align: "center",
            components: [
                {content: "Amount of time per turn", flex: 1},
                {name: "playDuration", kind: "Picker", value: "60",
                    onChange: "setPlayDuration",
                    items: [
                        {caption: "Do not use a play timer", value: "0"},
                        {caption: "15 seconds (lightning rounds)", value: "15"},
                        {caption: "30 seconds", value: "30"},
                        {caption: "45 seconds", value: "45"},
                        {caption: "1 minute (default)", value: "60"},
                        {caption: "1 minute 15 seconds", value: "75"},
                        {caption: "1 minute 30 seconds", value: "90"},
                        {caption: "2 minutes (beginner mode)", value: "120"}
                ]}
            ]},
            {kind: "HFlexBox", align: "center",
            components: [
                {content: "End turn when time expires?", flex: 1},
                {name: "enforcePlayTimer", kind: "ToggleButton", onLabel: "yes", offLabel: "no",
                    onChange: "setEnforcePlayTimer"}
            ]},
        ]},
        {kind: "RowGroup", caption: "Round Timing Options", 
        components: [
            {kind: "HFlexBox", align: "center",
            components: [
                {content: "Amount of time per round/game", flex: 1},
                {name: "roundDuration", kind: "Picker", value: "0",
                    onChange: "setRoundDuration",
                    items: [
                        {caption: "Do not use a round timer", value: "0"},
                        {caption: "10 minutes", value: "10"},
                        {caption: "20 minutes", value: "20"},
                        {caption: "30 minutes", value: "30"},
                        {caption: "40 minutes", value: "40"},
                        {caption: "50 minutes (tournament)", value: "50"},
                        {caption: "1 hour", value: "60"},
                        {caption: "1 hour 15 minutes", value: "75"},
                        {caption: "1 hour 30 minutes", value: "90"}
                ]}
            ]},
            {kind: "HFlexBox", align: "center",
            components: [
                {content: "End round/game when time expires?", flex: 1},
                {name: "enforceRoundTimer", kind: "ToggleButton", onLabel: "yes", offLabel: "no",
                    onChange: "setEnforceRoundTimer"}
            ]},
        ]},
        {kind: "RowGroup", caption: "Player Options", 
        components: [
            {kind: "HFlexBox", align: "center",
            components: [
                {content: "Player 1's starting health", flex: 1},
                {name: "playerOneHealth", kind: "Picker", value: "20",
                    onChange: "setPlayerOneHealth",
                    items: [
                        {caption: "5 health (cocky)", value: "5"},
                        {caption: "10 health (handicap)", value: "10"},
                        {caption: "15 health (mild handicap)", value: "15"},
                        {caption: "20 health (default)", value: "20"},
                        {caption: "30 health", value: "30"},
                        {caption: "40 health (two headed giant)", value: "40"},
                        {caption: "50 health", value: "50"},
                        {caption: "60 health (endurance game)", value: "60"}
                ]}
            ]},
            {kind: "HFlexBox", align: "center",
            components: [
                {content: "Player 2's starting health", flex: 1},
                {name: "playerTwoHealth", kind: "Picker", value: "20",
                    onChange: "setPlayerTwoHealth",
                    items: [
                        {caption: "5 health (cocky)", value: "5"},
                        {caption: "10 health (handicap)", value: "10"},
                        {caption: "15 health (mild handicap)", value: "15"},
                        {caption: "20 health (default)", value: "20"},
                        {caption: "30 health", value: "30"},
                        {caption: "40 health (two headed giant)", value: "40"},
                        {caption: "50 health", value: "50"},
                        {caption: "60 health (endurance game)", value: "60"}
                ]}
            ]},
        ]},
        {kind: "HFlexBox", align: "center",
        components: [
            {name: "resetButton", kind: "Button", className: "enyo-button-negative", caption: "Reset to Defaults",
                onclick: "resetToDefaults"},
            {kind: "Button", caption: "Huzzah! Let the duel commence!", className: "enyo-button-affirmative", 
                onclick: "loadMainScreen", flex: 1}            
        ]},
    ],
    rendered: function() {
      this.inherited(arguments);
      this.$.getPreferencesCall.call({
          "keys": ["playDuration", "enforcePlayTimer", "roundDuration", "enforceRoundTimer", "playerOneHealth", "playerTwoHealth"]
      });
      this.playDuration = "";
      this.enforcePlayTimer = "";
      this.roundDuration = "";
      this.enforceRoundTimer = "";
      this.playerOneHealth = "";
      this.playerTwoHealth = "";
    },
    getPreferencesSuccess: function(inSender, inResponse) {
        this.$.playDuration.setValue( inResponse.playDuration != "" ? inResponse.playDuration : this.defaultPlayDuration );
        this.$.enforcePlayTimer.setState( inResponse.enforcePlayTimer != "" ? inResponse.enforcePlayTimer : this.defaultEnforcePlayTimer );
        this.$.roundDuration.setValue( inResponse.roundDuration != "" ? inResponse.roundDuration : this.defaultRoundDuration );
        this.$.enforceRoundTimer.setState( inResponse.enforceRoundTimer != "" ? inResponse.enforceRoundTimer : this.defaultEnforceRoundTimer );
        this.$.playerOneHealth.setValue( inResponse.playerOneHealth != "" ? inResponse.playerOneHealth : this.defaultPlayerOneHealth );
        this.$.playerTwoHealth.setValue( inResponse.playerTwoHealth != "" ? inResponse.playerTwoHealth : this.defaultPlayerTwoHealth );
        
        this.doReceive( inResponse.playDuration, inResponse.enforcePlayTimer, inResponse.roundDuration, inResponse.enforceRoundTimer,
            inResponse.playerOneHealth, inResponse.playerTwoHealth );
    },
    getPreferencesFailure: function(inSender, inResponse) {
        enyo.log( "got failure from getPreferences" );
    },
    setPreferencesSuccess: function(inSender, inResponse) {
        enyo.log( "got success from setPreferences" );
    },
    setPreferencesFailure: function(inSender, inResponse) {
        enyo.log( "got failure from setPreferences" );
    },
    resetToDefaults: function() {
        this.$.playDuration.setValue( this.defaultPlayDuration );
        this.$.enforcePlayTimer.setState( this.defaultEnforcePlayTimer );
        this.$.roundDuration.setValue( this.defaultRoundDuration );
        this.$.enforceRoundTimer.setState( this.defaultEnforceRoundTimer );
        this.$.playerOneHealth.setValue( this.defaultPlayerOneHealth );
        this.$.playerTwoHealth.setValue( this.defaultPlayerTwoHealth );
    },
    loadMainScreen: function() {
        this.$.setPreferencesCall.call({
           "playDuration": this.$.playDuration.getValue(),
           "enforcePlayTimer": this.$.enforcePlayTimer.getState(),
           "roundDuration": this.$.roundDuration.getValue(),
           "enforceRoundTimer": this.$.enforceRoundTimer.getState(),
           "playerOneHealth": this.$.playerOneHealth.getValue(),
           "playerTwoHealth": this.$.playerTwoHealth.getValue()
        });
        
        this.doSave( this.$.playDuration.getValue(), this.$.enforcePlayTimer.getState(), this.$.roundDuration.getValue(),
            this.$.enforceRoundTimer.getState(), this.$.playerOneHealth.getValue(), this.$.playerTwoHealth.getValue() );
    }
});