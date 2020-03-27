<template>
    <div id="main" >
       <Header title="YY Cinema"></Header>
       <div id="content">
        <div class="cinema_menu">
				<div class="city_switch">
					City <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					Brand <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					Feature <i class="iconfont icon-lower-triangle"></i>
				</div>
                
			</div>
            <Cilist/>
            </div>
         <Tabbar />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar/index.vue';
import Cilist from '@/components/Cllist'
export default {
    name:'Cinema',
     components:{Tabbar,Header,Cilist}
}
</script>


<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;} 
</style>