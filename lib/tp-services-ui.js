let serviceUiItems = [];

// Auto render UI
Template.body.onRendered(function() {
  serviceUiItems = tpServicesUiTemplates.find({}, {name: 1}).fetch();
  Blaze.render(Template.tpServicesUi, document.querySelector('body'));
});


//
//      tpServicesUi: Lifecycle Hooks
//

Template.tpServicesUi.onCreated(function() {

});

Template.tpServicesUi.onRendered(function() {

});

//
//      tpServicesUi: Helpers
//

Template.tpServicesUi.helpers({
  serviceUiTemplates() {
    return serviceUiItems;
  },
});

//
//      tpServicesUi: Event Handlers
//

Template.tpServicesUi.events({
  'click .js-selector'(e, t) {

  },
});
