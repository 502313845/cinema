<template>
    <div id="main" >
       <Header title="My Profile"></Header>
       <Login/>
         <Tabbar />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar/index.vue';
import Login from '@/components/Login'
export default {
    name:'Mine',
     components:{Tabbar,Header,Login}
}
</script>


<style scoped>

</style>