<template>
    <div id="detail">
        
        <Header title="Movie Details">
        <i class="iconfont icon-right" @touchstart="handleToBack"></i>
        </Header>
        <div id="content" class="contentDetail">
            <div class="detail_list">

                <div class="detail_list_bg"></div>
                <div class="detail_list_filter"></div>
                <div class="detail_list_content">
                <div class="detail_list_img">
                        <img src="/images/movie_1.jpg" alt="">
                        </div>
                        <div class="detail_list_info">

                                <h2>无名之辈</h2>
                                <p>A Cool Fish</p>
                                <p>9.2</p>
                                <p>剧情，喜剧，犯罪</p>
                                <p>中国大陆，108分钟</p>
                                <p>2018-11-16大陆上映</p>
                            </div>
                        
                        </div>
                         </div>
                            <div class="detail_intro">
                                    <p>《无名之辈》该片围绕一把丢失的老枪，讲述了一对低配版的劫匪，一个落魄的保安，一个身体残疾却性格彪悍的毒舌女，这些“无名之辈”身上发生的一系列荒诞故事。</p>
                            </div>
                            <div class="detail_player swiper-container">
                                <ul class="swiper-wrapper">
                                    <li class="swiper-slide">
                                                <div>
                                                    <img src="/images/person_3.jpg">
                                                </div>
                                            <p>陈建斌</p>
                                            <p>马先勇</p>
                                    </li>
                                     <li class="swiper-slide">
                                                <div>
                                                    <img src="/images/person_2.jpg">
                                                </div>
                                            <p>陈建斌</p>
                                            <p>马先勇</p>
                                    </li>
                                     <li class="swiper-slide">
                                                <div>
                                                    <img src="/images/person_2.jpg">
                                                </div>
                                            <p>陈建斌</p>
                                            <p>马先勇</p>
                                    </li>
                                     <li class="swiper-slide">
                                                <div>
                                                    <img src="/images/person_2.jpg">
                                                </div>
                                            <p>陈建斌</p>
                                            <p>马先勇</p>
                                    </li>

                                </ul>

                                </div>

                            </div>
                            
                        </div>

</template>


<script>
import Header from '@/components/Header'
export default {
    name:'Detail',
    components:{Header},
    methods: {
        handleToBack(){
            this.$router.back();
        }
    },
}
</script>

<style scoped>
#detail{position: absolute;left: 0;top: 0;z-index: 100;width:100% ;min-height: 100%;background:white}
#content .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}
.detail_list .detail_list_bg{ width:100%; height:100%; background: url(/images/movie_1.jpg) 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}
.detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}
.detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}
.detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}
.detail_list .detail_list_img img{ width:100%; height: 100%;}
.detail_list .detail_list_info{ margin-top: 20px;}
.detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
.detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}
</style>