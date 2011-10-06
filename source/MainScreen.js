enyo.kind({
    name: "UbeCake.MainScreen", kind: enyo.VFlexBox, transitionKind: "enyo.transitions.LeftRightFlyin",
    components: [
        {kind: "PageHeader",
        components: [
            {name: "initialSetup", kind: "UbeCake.InitialSetup", lazy: "false"},
            {content: "Main Screen", flex: 1},
            {name: "resetButton", kind: "Button", content: "Back to Initial Setup", onclick: "loadInitialSetup"}
        ]},
        {kind: "Button", caption: "(Main Screen Here)", onclick: ""},
    ],
    loadInitialSetup: function() {
        //this.owner.$.contraptionContainer.selectViewByName("initialSetup");
        this.$.initialSetup.openAtCenter();
    },
    ready: function() {
        //this.$.initialSetup.openAtCenter();
        enyo.log( "MainScreen ready");
    },
    rendered: function() {
        this.$.initialSetup.openAtCenter();
        enyo.log( "rendered" );
    }
});