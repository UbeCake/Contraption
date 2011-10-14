enyo.kind({
    name: 'Contraption.PlayTimer',
    kind: 'enyo.Control',
    published: {
        playTimerDuration: "60"
    },
    components: [
        {name: "playTimer", kind: "HFlexBox",
        components: [
            {name: "animator", kind: enyo.Animator, easingFunc: enyo.easing.linear, duration: (this.playTimerDuration * 1000),
                tick: 1000, onBegin: "beginAnimation", onAnimate: "stepAnimation", onEnd: "endAnimation"},
            {name: "playTimerText", content: this.playTimerDuration}
        ]}
    ],
    create: function () {
        this.inherited(arguments);
        this.$.playTimerText.setContent( this.playTimerDuration );
        this.$.animator.setDuration( this.playTimerDuration * 1000 );
    },
    timerStart: function () {
        this.$.animator.play( 0, this.playTimerDuration );
    },
    stepAnimation: function(inSender, inValue) {
        this.playTimerCurrent = this.$.playTimerText.getContent();
        this.playTimerNext = parseInt(this.playTimerCurrent) - 1;
        this.playTimerNext = (this.playTimerNext <= 0 ? 0 : this.playTimerNext);
        this.$.playTimerText.setContent( this.playTimerNext );
    },
    beginAnimation: function(inSender, inStart, inEnd) {
        
    },
    endAnimation: function(inSender, inValue) {
        
    }
})
