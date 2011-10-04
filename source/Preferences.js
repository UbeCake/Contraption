enyo.kind({
  name: "Contraption.Preferences",
  kind: enyo.VFlexBox,
  events: {
      onReceive: "",
      onSave: "",
      onCancel: ""
  },
  components: [
      {
          name: "getPreferencesCall",
          kind: "PalmService",
          service: "palm://com.palm.systemservice/",
          method: "getPreferences",
          onSuccess: "getPreferencesSuccess",
          onFailure: "getPreferencesFailure"
      },
      {
          name: "setPreferencesCall",
          kind: "PalmService",
          service: "palm://com.palm.systemservice/",
          method: "setPreferences",
          onSuccess: "setPreferencesSuccess",
          onFailure: "setPreferencesFailure"
      },
      {kind: "PageHeader", content: "Enyo FeedReader - Preferences"},
      {kind: "VFlexBox",
          components: [
              {kind: "RowGroup", caption: "Default Feed", components: [
                  {name: "defaultFeedInput", kind: "Input"}
              ]},
              {kind: "HFlexBox", pack: "end", style: "padding: 0 10px;",
                  components: [
                      {name: "saveButton", kind: "Button",
                          content: "Save", onclick: "saveClick"},
                      {width: "10px"},
                      {name: "cancelButton", kind: "Button",
                          content: "Cancel", onclick: "cancelClick"}
                  ]
              }
          ]
      },
  ],
  create: function() {
      this.inherited(arguments);
      this.$.getPreferencesCall.call(
      {
          "keys": ["defaultFeed"]
      });
      // keep this updated with the value that's currently saved to the service
      this.savedUrl = "";
  },
  getPreferencesSuccess: function(inSender, inResponse) {
      this.savedUrl = inResponse.defaultFeed;
      this.$.defaultFeedInput.setValue(this.savedUrl);
      this.doReceive(this.savedUrl);
  },
  getPreferencesFailure: function(inSender, inResponse) {
      enyo.log("got failure from getPreferences");
  },
  setPreferencesSuccess: function(inSender, inResponse) {
      console.log("got success from setPreferences");
  },
  setPreferencesFailure: function(inSender, inResponse) {
      console.log("got failure from setPreferences");
  },
  showingChanged: function() {
      // reset contents of text input box to last saved value
      this.$.defaultFeedInput.setValue(this.savedUrl);
  },
  saveClick: function(inSender, inEvent) {
      var newDefaultFeedValue = this.$.defaultFeedInput.getValue();
      this.$.setPreferencesCall.call(
      {
          "defaultFeed": newDefaultFeedValue
      });
      this.savedUrl = newDefaultFeedValue;
      this.doSave(newDefaultFeedValue);
  },
  cancelClick: function() {
      this.doCancel();
  }
});