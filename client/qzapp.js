var Questionbank = new Mongo.Collection("questionbank");
var questionset
  Meteor.startup(function() {
Session.setDefault("qview",1);

  });
  // counter starts at 0
var hello = Questionbank.find({});
Session.setDefault("qview",1);


 Template.engine.helpers({
   question: "hello"
  ,  option1:"yep"
  , option2:"hoho"
  , option3:"lol"
  , option4:"hehe"
  , no:function(){return Session.get("qview") }

  });


 Template.engine.events({
    "click #next": function (event) {
      // Prevent default browser form submit
    
      var qans = Session.get("qview");
      qans = qans +1;
      Session.set("qview",qans);
      console.log(Session.get("qview"));
      },
      "click #back": function (event) {
      // Prevent default browser form submit
    
      var qans = Session.get("qview");
      qans = qans-1;
      if(qans<1){
          qans = 1;
        }        
      Session.set("qview",qans);
            console.log(Session.get("qview"));

      }

  });