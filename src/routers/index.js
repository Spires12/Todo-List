
function routers(app){
  app.get('/', function(req, res){
    return res.status(200).json({"hello": "world"});

  })
  
  
}

module.exports = routers