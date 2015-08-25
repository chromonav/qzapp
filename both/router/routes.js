Router.route('/', function () {
  this.render('index', {
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
