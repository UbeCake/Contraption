enyo.kind({
    name: "UbeCake.Contraption", kind: "Pane", flex: 1, transitionKind: "enyo.transitions.LeftRightFlyin",
    components: [
        {name: "splash", kind: "VFlexLayout",
        components: [
            {content: "Splash! Whoaa oohhh!"}
        ]},
        {name: "initialSetup", kind: "Pane",
        components: [
            {kind: "Button", caption: "OK"},
            {kind: "Button", caption: "Cancel"}            
        ]},
        {name: "mainScreen", kind: "Pane",
        components: [
            {kind: "Button", caption: "Main"},
            {kind: "Button", caption: "Screen"}
        ]},
    ],
    create: function() {
        this.inherited(arguments);
        this.$.initialSetup.selectViewByName("splash");  
    },
    ready: function() {
    }
});