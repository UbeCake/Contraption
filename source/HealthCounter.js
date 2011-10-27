enyo.kind({
    name: 'Contraption.HealthCounter',
    kind: 'enyo.Control',
    published: {
        healthValue: 0,
        startingHealth: 0
    },
    components: [
        {kind: "HFlexBox",
        components: [
            {name: "healthText", content: "this.healthValue", style: "font-size: 48px"},
            {name: "addHealth", content: "HEAL", style: "color: #00FF00", onclick: "addHealth"},
            {name: "subtractHealth", content: "DAMAGE", style: "color: #FF0000", onclick: "subtractHealth"}
        ]}
    ],
    create: function () {
        this.inherited(arguments);
    },
    addHealth: function() {
        this.healthValue++;
        this.healthValueChanged();
    },
    subtractHealth: function() {
        this.healthValue--;
        this.healthValueChanged();
    },
    healthValueChanged: function() {
        if ( this.healthValue / this.startingHealth >= .75 ) {
            this.$.healthText.applyStyle( "color", "#00FF00" );
        }
        else if ( this.healthValue / this.startingHealth >= .3 ) {
            this.$.healthText.applyStyle( "color", "#FFFF00" );
        }
        else {
            this.$.healthText.applyStyle( "color", "#FF0000" );
        }
        
        this.$.healthText.setContent( this.healthValue );
    }
});