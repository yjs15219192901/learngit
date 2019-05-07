<template>
<div>
    <h1>{{msg}}</h1>
    <h2>{{cookie}}</h2>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data:function(){
            return{
                msg: '',
                cookie: ''
            }
        },
    created: function(){
        let it = this
        axios({
            url: 'http://localhost:3000/index',
            method: 'get',
            headers:{
                "token": document.cookie.substring(6)
            }
        }).then((res)=>{
            this.msg = res.data.msg
            console.log('response', res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
}
</script>

<style>

</style>

