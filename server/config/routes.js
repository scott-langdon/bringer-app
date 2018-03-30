var users = require('../controllers/Users.js');
var questions = require('../controllers/Questions.js');
var answers = require('../controllers/Answers.js');
var events = require('../controllers/Events.js');

module.exports = function(app){

    app.post('/users', users.create);
    app.post('/login', users.login);
    /**Protected API**/
    app.use(userAuth);

    app.get('/logout', users.logout);
    app.get('/currentUser', users.getCurrentUser);
    
    app.post('/new_question', questions.create);
    app.get('/getQuestions', questions.index);
    
    app.get('/getOneQuestion/:id', questions.show);
    
    app.post('/answer/:id', answers.create);
    app.get('/like/:id', answers.like);
    
    app.post('/new_event', events.create);
    app.post('/getEvents', events.index);
    
}
function userAuth(req,res,next){
    if (req.session.user){
        next();
    }else{
        res.sendStatus(401);
    }
}