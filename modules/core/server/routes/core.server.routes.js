module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render(app.core.dirname + "/public/views/index.html");
    });
    
    app.get('/create', function(req, res){
        res.render(app.core.dirname + "/public/views/create.html");
    })

}