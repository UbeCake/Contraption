enyo.kind({
    name: 'Contraption.PlayTimer',
    kind: 'enyo.Control',
    published: {
        playTimerDuration: "60"
    },
    components: [
        {name: "playTimer", kind: "HFlexBox",
        components: [
            {name: "playTimerAnimator", kind: enyo.Animator, easingFunc: enyo.easing.linear, duration: 60000,
                tick: 1000, onBegin: "beginAnimation", onAnimate: "stepAnimation", onEnd: "endAnimation"},
            {name: "playTimerText", content: this.playTimerDuration}
        ]}
    ],
    create: function () {
        this.inherited(arguments);
        this.$.playTimerText.setContent( this.playTimerDuration );
        this.$.playTimerAnimator.setDuration( 3000 );
    },
    timerStart: function () {
        this.$.playTimerAnimator.play( 0, this.playTimerDuration );
    },
    timerEnd: function () {
        this.$.playTimerAnimator.stop();
    },
    stepAnimation: function(inSender, inValue) {
        this.playTimerCurrent = this.$.playTimerText.getContent();

        this.playTimerNext = parseInt(this.playTimerCurrent) - 1;
        enyo.log( "changing to: " + this.playTimerNext );

        if ( this.playTimerNext < 0 ) {
            enyo.log( "ENDING ANIMATION!???");
            //this.endAnimation();
        }
        
        this.playTimerNext = (this.playTimerNext = 0 ? 0 : this.playTimerNext);
        this.$.playTimerText.setContent( this.playTimerNext );
    },
    beginAnimation: function(inSender, inStart, inEnd) {
        
    },
    endAnimation: function(inSender, inValue) {
        enyo.log( "NOT STOPPING?!" );
    }
})
