var login = async(ctx, next)=>{
    // ctx.response.body = `
    //  <a href = "javascript:alert('again')">在线看片</a>
    //     `
    
    var account = ctx.request.body.account
    var password = ctx.request.body.password
    ctx.session.login = true
    ctx.session.user = account
    ctx.cookies.set('user','alsojokie')
    // ctx.response.type = 'application/json'
    ctx.response.body = {'response post data':ctx.session,
                         'token': 'Jokie'
                        }

    
    // ctx.response.body = `
    // <form action = "/query" method = "GET">
    //     <input type = "text" name = "question"></input>
    //     <button type = "submit">查询</button>
    // </form>
    // `

    await next()
}

var signup = async(ctx, next)=>{
    var account = ctx.request.body.account || ''
    var password = ctx.request.body.password || ""   
    
    await next()
}

var index = async(ctx, next)=>{
    console.log(ctx.request.querystring)
    if(ctx.session.login)
    {    
        ctx.response.body = {"msg":'welcome to blockchain!','cookie':ctx.cookies.get('user')} 
    }
    else
        ctx.response.body = {"msg": 'please login'}
    await next()
}



module.exports = {
    "POST /login": login,
    "POST /signup": signup,
    "GET /index": index
}
