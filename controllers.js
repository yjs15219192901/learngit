const fs = require("fs")

function addController(route){
    var files = fs.readdirSync(__dirname + "/controllers")
    var jsfiles = files.filter((item)=>{
        return item.endsWith("js")
    })
    addMapping(route, jsfiles)
}
function addMapping(route, jsfiles){
    for(var i of jsfiles){
        mapping = require(__dirname + "/controllers/"+ i)
       
        for(var j in mapping){
            if(j.startsWith("GET")){
                var path = j.substring(4);
                route.get(path, mapping[j])
            }else if(j.startsWith("POST")){
                var path = j.substring(5)
                route.post(path, mapping[j])
            }else{
                console.log(`invalid url: ${j}`)
            }
        }
    }
}


module.exports = function(){
    var router = require("koa-router")()
    addController(router)
    return router.routes()
}