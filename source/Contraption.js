enyo.kind({
    name: "UbeCake.Contraption", kind: "Pane", flex: 1, transitionKind: "enyo.transitions.LeftRightFlyin",
    components: [
        {name: "contraptionContainer", kind: "Pane",
        components: [
            {name: "mainScreen", kind: "Contraption.MainScreen"}
        ]}
    ],
    create: function() {
        this.inherited(arguments);
    },
    ready: function() {
        this.$.contraptionContainer.selectViewByName("mainScreen");
    },
});