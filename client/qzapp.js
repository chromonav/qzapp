var Questionbank = new Mongo.Collection("questionbank");
var questionset
  Meteor.startup(function() {
Session.setDefault("qview",1);

  });
  // counter starts at 0
var hello = Questionbank.find({});
Session.setDefault("qview",1);


 Template.engine.helpers({
   question: "what is my name"
  ,  option1:"ck"
  , option2:"chromonav"
  , option3:"chinmay "
  , option4:"all of the above"
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