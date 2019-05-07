<template>
    <div id="container" style="overflow:auto">
        <div>
            <router-link to= '/login'>
                <a href="/login" style=" float:right; color: #a0a0a0;font-size: 20px">已有账号？直接登录</a>
            </router-link>
        </div>
        <div id="sign_body" class="form-group" >
            
                <h1 style="text-align:center;color:	#989898"><b>注册</b></h1>
                <div>
                    <label style="display:block">账号</label>
                    <input v-model="account" class="form-control" type="text" name="account" placeholder="请输入用户名">
                </div>
                <div>
                    <label for="">密码</label>
                    <input v-model="password" class="form-control" name="password" type="password" placeholder="请输入密码">
                </div>
                <div>
                    <label for="">手机号</label>
                    <input v-model="phone" type="text" class="form-control" name="phone" >
                </div>
                
                <button v-on:click ="submit" type="submit" class="btn btn-block btn-primary">注册</button>
               
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data: function(){
        return {
            account: '',
            password: '',
            phone: ''
        }
    },
    methods:{
        submit: function(){
            let it = this
            axios({
                method: "post",
                url: 'http://localhost:3000/signup',
                data: {
                    account: it.account,
                    password: it.password,
                    phone: it.phone
                },
                headers:{
                    "Content-Type": "application/json",
                    
                },
                withCredentials: true
                
            })
            .then((res)=>{
                console.log('signup res data ' , res.data)
                this.$router.push("/login")
            })
            .catch(err=>console.log("error: "+ err))

            
        }
    }
}
</script>
<style>
    body{
    background: url(../assets/signup.jpg) no-repeat 
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
    margin: 20px auto
}
label{
    font-size: 16px;
    color: #888888
}
</style>


