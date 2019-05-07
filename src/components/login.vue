<template>
    <div id="container" style="overflow:auto">
        <div class="tip" style="float:right">
            <router-link to = "/signup">
            <a href="" style="color: #a0a0a0;font-size: 20px">还没账号？马上注册</a>
            </router-link>
        </div>
        
        <div id="sign_body" class="form-group" >
            <h1 style="text-align:center;color:#989898">登录</h1>
           
                <label>账号</label>
                <input class="form-control" type="text" v-model="account" placeholder="请输入用户名">
                <label for="" style="color:#F8F8F8">密码</label>
                <input class="form-control" v-model="password" type="password" placeholder="请输入密码">
                <button v-on:click="submit" class="btn btn-block">登录</button>
            
        </div>
    </div>
</template>
<script>
import axios from "axios"
//dev version
export default {
    data:function(){
        return{
            account: '',
            password: ''


        }
    },
    methods:{
        submit: function(){
            let it = this
            axios({
                method: "post",
                url: 'http://localhost:3000/login',
                data: {
                    account: it.account,
                    password: it.password,
                },
                headers:{
                    "Content-Type": "application/json",
                    
                },
                withCredentials: true
                
            })
            .then((res)=>{
                console.log("login res data " , res.data)
                let token = res.data.token
                document.cookie = 'token='+token
                this.$store.commit('login')
                this.$router.push("/index")
            })
            .catch(err=>console.log("error: "+ err))

            
        }
    }
}
</script>
<style>
body{
    background: url(../assets/login.jpg) no-repeat 
}
#sign_body{
    max-width: 500px; 
    margin: 0 auto;
    margin-top: 100px;
}
form > *{
    margin-bottom: 10px

}
.btn{
    
    max-width: 80px;
    margin: 0 auto
}
label{
    font-size: 16px;
    color: #888888
}
</style>

