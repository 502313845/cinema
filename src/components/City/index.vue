<template>
    <div class="city_body">
		
				<div class="city_list">
					<div>
					        <div class="city_hot">
								<h2>Popular City</h2>
								<ul class="clearfix">
									<li>Toronto</li>
                                    <li>Vancouver</li>
                                    <li>Monteral</li>
                                    <li>Ottawa</li>
                                    <li>Quebec City</li>
								</ul>
							</div>
							<div class="city_sort">
								<div>
									<h2 id="d1">A</h2>
									<ul>
										<li>Ajax</li>
                                        <li>Abbotsford</li>

									</ul>
								</div>

                                <div>
									<h2 id="d2">B</h2>
									<ul>
										<li >Brampton</li>
                                        <li>Burnaby</li>
                                        <li>Barry</li>

									</ul>
								</div>

                                <div>
									<h2 id="d3">C</h2>
									<ul>
										<li >Calgary</li>
                                        <li>Cambridge</li>
                                        <li>Coquitlam</li>
                                        <li>Chatham-Kent</li>

									</ul>
								</div>

                                <div>
									<h2 id="d4">E</h2>
									<ul>
										<li >Edmonton</li>
                                        

									</ul>
								</div>

                                <div>
									<h2 id="d5">G</h2>
									<ul>
										<li >Gatineau</li>
                                        <li>Great sudbury</li>
                                        <li>Guihu</li>

									</ul>
								</div>

                                <div>
									<h2  id="d6">H</h2>
									<ul>
										<li>Halifax</li>
                                        <li>Hamilton</li>

									</ul>
								</div>

                                <div>
									<h2 id="d7">K</h2>
									<ul>
										<li >Kelowna</li>
                                        <li>Kingston</li>
                                        <li>Kitchina</li>

									</ul>
								</div>

                                <div>
									<h2 id="d8">L</h2>
									<ul>
										<li >Langier</li>
                                        <li>Langley City</li>
                                        <li>Laval</li>
                                        <li>Levi</li>
                                        <li>London</li>

									</ul>
								</div>

                                <div>
									<h2 id="d9">M</h2>
									<ul>
										<li >Markham</li>
                                        <li>Mikawa</li>
                                        <li>Mississauga</li>
                                        <li>Montreal</li>

									</ul>
								</div>

                                <div>
									<h2 id="d10">O</h2>
									<ul>
										<li>Oakville</li>
                                        <li>Oshawa</li>
                                        <li>Ottawa</li>

									</ul>
								</div>

                                <div>
									<h2 id="d11">Q</h2>
									<ul>
										<li>Quebec City</li>
                                	</ul>
								</div>

                                <div>
									<h2 id="d12">R</h2>
									<ul>
										<li>Regina</li>
                                        <li>Richmond</li>
                                        <li>Richmond Hill</li>

									</ul>
								</div>

                                <div>
									<h2 id="d13">S</h2>
									<ul>
										<li>Saguenay</li>
                                        <li>Saktun</li>
                                        <li>Sanic</li>
                                        <li>Sherbrooke</li>
                                        <li>St johns</li>
                                        <li>St. Catharines</li>
                                        <li>Surrey</li>

									</ul>
								</div>

                                 <div>
									<h2 id="d14">T</h2>
									<ul>
										<li>Taylorburn</li>
                                        <li>Thunder Bay</li>
                                        <li>Toronto</li>

									</ul>
								</div>

                                 <div>
									<h2 id="d15">V</h2>
									<ul>
										<li>Vancouver</li>
                                        <li>Vaughan</li>

									</ul>
								</div>

                                 <div>
									<h2 id="d16">W</h2>
									<ul>
										<li >Whitby</li>
                                        <li>Windsor</li>
                                        <li>Winnipeg</li>

									</ul>
								</div>
							</div>
							</div>
						</div>			
					<div class="city_index">
					<ul>
						<li><a href="#d1">A</a></li> 
                        <li><a href="#d2">B</a></li> 
                        <li><a href="#d3">C</a></li> 
                        <li><a href="#d4">E</a></li> 
                        <li><a href="#d5">G</a></li> 
                        <li><a href="#d6">H</a></li> 
                        <li><a href="#d7">K</a></li> 
                        <li><a href="#d8">L</a></li> 
                        <li><a href="#d9">M</a></li> 
                        <li><a href="#d10">O</a></li> 
                        <li><a href="#d11">Q</a></li> 
                        <li><a href="#d12">R</a></li> 
                        <li><a href="#d13">S</a></li> 
                        <li><a href="#d14">T</a></li> 
                        <li><a href="#d15">V</a></li> 
                        <li><a href="#d16">W</a></li> 
					</ul>
				</div>
				</div>
				
			
</template>


<script>
import BScroll from 'better-scroll';
export default {
	name:'City'

	
	
}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
a{text-decoration: none;}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
/* .city_body .city_hot ul{} */
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
/* .city_body .city_sort{} */
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>