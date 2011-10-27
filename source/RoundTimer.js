enyo.kind({
    name: 'Contraption.RoundTimer',
    kind: 'enyo.Control',
    published: {
        enforceRoundTimer: false,
        roundTimerDuration: 0,
        roundTimerIntervalId: 0,
        progressBarWidth: 0,
        roundTime: 0
    },
    components: [
        {name: "progressBar", kind: "Image", src: "images/progress_bar.png",
            style: "position: absolute; top: 300px; left: 0px; width: 1px; height: 200px; z-index: -2;"}
    ],
    create: function () {
        this.inherited(arguments);
    },
    timerStart: function () {
        this.roundTimerIntervalId = setInterval( enyo.bind(this, this.incrementRoundTimer), 1000 );
    },
    incrementRoundTimer: function () {
        if ( this.roundTime <= this.roundTimerDuration ) {
            this.roundTime += 1;
            this.progressBarWidth = Math.round( 1024 / ( this.roundTimerDuration / this.roundTime ) );
            this.$.progressBar.applyStyle( "width", this.progressBarWidth + "px" );
        }
        else {
            this.timerEnd();
        }
    },
    timerEnd: function () {
        clearInterval( this.roundTimerIntervalId );
    }
});