enyo.kind({
    name: "UbeCake.InitialSetup", kind: enyo.VFlexBox, transitionKind: "enyo.transitions.LeftRightFlyin",
    components: [
        {kind: "PageHeader",
        components: [
            {content: "Initial Setup", flex: 1},
            {name: "resetButton", kind: "Button", content: "Reset to Defaults", onclick: "resetToDefaults"}
        ]},
        {kind: "RowGroup", caption: "Play Timing Options", 
        components: [
            {kind: "HFlexBox", align: "center",
            components: [
                {content: "Duration of play timer (the amount of time each player has per play)", flex: 1},
                {kind: "Picker", value: "0", onChange: "",
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
                {content: "Enforce timer by ending player's play when time expires", flex: 1},
                {kind: "ToggleButton", onLabel: "enforce timer", offLabel: "do not enforce timer", onChange: "roundTimerTottle"}
            ]},
        ]},
        {kind: "RowGroup", caption: "Round Timing Options", 
        components: [
            {kind: "HFlexBox", align: "center",
            components: [
                {content: "Duration of round timer (the amount of time per game)", flex: 1},
                {kind: "Picker", value: "0", onChange: "",
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
                {content: "Enforce timer by ending the round when time expires", flex: 1},
                {kind: "ToggleButton", onLabel: "enforce timer", offLabel: "do not enforce timer", onChange: "roundTimerTottle"}
            ]},
        ]},
        {kind: "RowGroup", caption: "Player Options", 
        components: [
            {kind: "HFlexBox", align: "center",
            components: [
                {content: "Player 1's starting health", flex: 1},
                {kind: "Picker", value: "20", onChange: "",
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
                {kind: "Picker", value: "20", onChange: "",
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
        {kind: "Button", caption: "Huzzah! Let the duel of planeswalkers commence!", onclick: "loadMainScreen"},
    ],
    loadMainScreen : function() {
        this.owner.$.contraptionContainer.selectViewByName("mainScreen");
    }
});