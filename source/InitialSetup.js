enyo.kind({
    name: "UbeCake.InitialSetup", kind: "ModalDialog", style: "width: 600px",
    components: [
         {kind: "PageHeader",
         components: [
             {content: "Initial Setup", flex: 1},
             {name: "resetButton", kind: "Button", className: "enyo-button-negative", content: "Reset to Defaults", onclick: "resetToDefaults"}
         ]},
        {kind: "RowGroup", caption: "Play/Turn Timing Options", 
        components: [
            {kind: "HFlexBox", align: "center",
            components: [
                {content: "Amount of time per turn", flex: 1},
                {name: "playDuration", kind: "Picker", value: "0",
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
        {kind: "Button", caption: "Huzzah! Let the duel commence!", className: "enyo-button-affirmative", 
            onclick: "loadMainScreen"}
    ],
    loadMainScreen: function() {
        enyo.log( "do stuff here" );
        this.owner.$.initialSetup.close();
    }
});