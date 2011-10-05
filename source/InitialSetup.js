enyo.kind({
    name: "UbeCake.InitialSetup", kind: enyo.VFlexBox, transitionKind: "enyo.transitions.LeftRightFlyin",
    components: [
        {kind: "PageHeader",
        components: [
            {content: "Initial Setup", flex: 1},
            {name: "resetButton", kind: "Button", content: "Reset to Defaults", onclick: "resetToDefaults"}
        ]},
        {kind: "Button", caption: "Huzzah! Let the duel of planeswalkers commence!", onclick: "loadMainScreen"},
    ],
    loadMainScreen : function() {
        this.owner.$.contraptionContainer.selectViewByName("mainScreen");
    }
});