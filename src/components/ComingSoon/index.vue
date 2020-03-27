<template>
    <div class="movie_body">
        	<ul>
				<li>
			    <div class="pic_show"><img src="/images/movie_5.jpg"></div>
					<div class="info_list">
						<h2>花木兰</h2>
						<p>观众评 <span class="grade">0.0</span></p>
						<p>主演: 刘亦菲 / 安柚鑫 / 甄子丹 / 巩俐 / 曾晓童</p>
						<p>今天55家影院放映600场</p>
					</div>
					<div class="btn_pre">
						预售
					</div>
                </li>

                <li>
			    <div class="pic_show"><img src="/images/movie.jpg"></div>
					<div class="info_list">
						<h2>速度与激情9</h2>
						<p>观众评 <span class="grade">0.0</span></p>
						<p>主演: 范·迪塞尔 / 米歇尔·罗德里格兹 / 查理兹·塞隆 / 吉姆·帕拉克</p>
						<p>今天56家影院放映450场</p>
					</div>
					<div class="btn_pre">
						预售
					</div>
                </li>

                <li>
			    <div class="pic_show"><img src="/images/movie_6.jpg"></div>
					<div class="info_list">
						<h2>毒液2</h2>
						<p>观众评 <span class="grade">0.0</span></p>
						<p>主演: 汤姆·哈迪 / 米歇尔·威廉姆斯 / 斯蒂芬·格拉汉姆</p>
						<p>今天60家影院放映800场</p>
					</div>
					<div class="btn_pre">
						预售
					</div>
                </li>


                <li>
			    <div class="pic_show"><img src="/images/movie_7.jpg"></div>
					<div class="info_list">
						<h2>奇异博士2</h2>
						<p>观众评 <span class="grade">0.0</span></p>
						<p>主演: 本尼迪克特·康伯巴奇 / 切瓦特·埃加福 / 伊丽莎白·奥尔森</p>
						<p>今天55家影院放映600场</p>
					</div>
					<div class="btn_pre">
						预售
					</div>
                </li>
			</ul>
    </div>
</template>


<script>
export default {
   name:'ComingSoon'
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
</style>