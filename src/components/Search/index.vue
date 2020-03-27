<template>
    <div class="search_body">
				<div class="search_input">
					<div class="search_input_wrapper">
						<i class="iconfont icon-sousuo"></i>
						<input type="text">
					</div>					
				</div>
				<div class="search_result">
					<h3>Movies/Shows/TV series</h3>
					<ul>
						<li>
							<div class="img"><img src="/images/movie_1.jpg"></div>
							<div class="info">
								<p><span>无名之辈</span><span>9.2</span></p>
								<p>A Cool Fish</p>
								<p>剧情，喜剧，犯罪</p>
								<p>2020-02-02</p>
							</div>
						</li>
                        <li>
							<div class="img"><img src="/images/movie_5.jpg"></div>
							<div class="info">
								<p><span>花木兰</span><span>0.0</span></p>
								<p>Mu Lan</p>
								<p>历史，战争，动作</p>
								<p>2020-05</p>
							</div>
						</li>
                        <li>
							<div class="img"><img src="/images/movie_3.jpg"></div>
							<div class="info">
								<p><span>复仇者联盟4: 终局之战</span><span>9.7</span></p>
								<p>Avengers 4: Endgame</p>
								<p>剧情，科幻，动作</p>
								<p>2019-04-02</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
</template>


<script>
export default {
    name:'Search'
}
</script>

<style scoped>
#content .search_body{ flex:1; overflow:auto;}
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
/* .search_body .search_result{} */
.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
/* .search_body .search_result ul{} */
.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
.search_body .search_result .img{ width: 60px; float:left; }
.search_body .search_result .img img{ width: 100%; }
.search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
</style>