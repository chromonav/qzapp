if (Meteor.isClient) {

  Meteor.startup(function() {
      $('#myAffix').affix({})
  });
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.index.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.index.events({

  });


}
