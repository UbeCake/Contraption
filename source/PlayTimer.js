enyo.kind({
    name: 'Contraption.PlayTimer',
    kind: 'enyo.Control',
    published: {
        playTimerDuration: "15",
        playTimerIntervalId: "0"
    },
    components: [
        {name: "playTimer", kind: "HFlexBox",
        components: [
            {name: "playTimerText", content: this.playTimerDuration}
        ]}
    ],
    create: function () {
        this.inherited(arguments);
        this.$.playTimerText.setContent( this.playTimerDuration );
    },
    timerStart: function () {
        this.playTimerIntervalId = setInterval( enyo.bind(this, this.incrementPlayTimer), 1000);
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
    }
});