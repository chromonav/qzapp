
var questionset
  Meteor.startup(function() {

  });
  // counter starts at 0


 Template.engine.helpers({
    question: "hello"
  });


Session.setDefault("qview",0);

 Template.engine.events({
    "click #next": function (event) {
      // Prevent default browser form submit
    
      var qans = Session.get("qview");
      qans = qans +1;
      Session.set("qview",qans);
      
    }
  });