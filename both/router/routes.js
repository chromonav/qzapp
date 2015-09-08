Router.route('/', function () {
  this.render('engine', {
    data: { title : "Quizup"

      }
    });
  });

Router.route('/engine',function(){
  this.render('engine', {
    data: { title : "Quizup"

      }
    });

});
