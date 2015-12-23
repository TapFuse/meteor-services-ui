// Auto render UI
Template.body.onRendered(function() {
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
  helper() {
    return '';
  },
});

//
//      tpServicesUi: Event Handlers
//

Template.tpServicesUi.events({
  'click .js-selector'(e, t) {

  },
});
