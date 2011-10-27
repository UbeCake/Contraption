enyo.kind({
    name: 'Contraption.PlayTimer',
    kind: 'enyo.Control',
    published: {
        enforcePlayTimer: false,
        playTimerDuration: 0,
        playTimerIntervalId: 0,
        rotationDegrees: 360,
    },
    components: [
        {kind: "HFlexBox",
        components: [
            {name: "playTimerText", lazy: "false", height: "20px", width: "20px",
                style: "-webkit-transition: all 0.8s ease-in-out; position: absolute; left: 512px; top: 384px; z-index: 2"},
            {name: "rainbowCircle", kind: "Image", src: "images/rainbow.png", onclick: "timerReset",
                style: "-webkit-transition: all 0.8s ease-in-out; position: absolute; left: 387px; top: 259px; z-index: 1"}
        ]},
        {name: "windingSound", kind: "Sound", src: "audio/49214__tombola__fisher-price3.wav"}
    ],
    create: function () {
        this.inherited(arguments);
    },
    timerStart: function () {
        this.playTimerIntervalId = setInterval( enyo.bind(this, this.incrementPlayTimer), 1000 );
    },
    incrementPlayTimer: function () {
        var timerInt = parseInt( this.$.playTimerText.getContent() );

        if ( timerInt <= 0 ) {
            this.timerReset();
        }
        else {
            this.$.playTimerText.setContent( timerInt - 1 );
        }
    },
    timerReset: function () {
        clearInterval( this.playTimerIntervalId );
        this.$.playTimerText.setContent( this.playTimerDuration );
        this.timerStart();
        this.$.windingSound.play();
        
        this.rotationDegrees = ( this.rotationDegrees == "360" ? "180" : "360" );
        this.$.rainbowCircle.applyStyle( "-webkit-transform", "rotate(" + this.rotationDegrees + "deg)" );
        this.$.playTimerText.applyStyle( "-webkit-transform", "rotate(" + this.rotationDegrees + "deg)" );
    }
});