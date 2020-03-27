<template>
    <div class="cinema_body">
				
					<ul>
						<li>
							<div>
								<span>Cineplex Cinemas Empress Walk</span>
								<span class="q"><span class="price"> $20</span></span>
							</div>
							<div class="address">
								<span>Empress Walk, 5095 Yonge St 3rd Floor, North York,ON</span>
								<span>4.7km</span>
							</div>
							<div class="card">
								<div>Food</div>
                                <div>Discount</div>
							</div>
						</li>

                        <li>
							<div>
								<span>Cineplex Cinemas Fairview Mall</span>
								<span class="q"><span class="price"> $20</span></span>
							</div>
							<div class="address">
								<span>1800 Sheppard Ave E Unit Y007, North York, ON</span>
								<span>11.2km</span>
							</div>
							<div class="card">
								<div>Food</div>
                                <div>Discount</div>
							</div>
						</li>
                        <li>
							<div>
								<span>SilverCity Richmond Hill</span>
								<span class="q"><span class="price"> $18</span></span>
							</div>
							<div class="address">
								<span>8725 Yonge St, Richmond Hill, ON</span>
								<span>4.7km</span>
							</div>
							<div class="card">
								<div>Food</div>
                                <div>Discount</div>
							</div>
						</li>
                        <li>
							<div>
								<span>Cineplex Cinemas Markham and VIP</span>
								<span class="q"><span class="price"> $22</span></span>
							</div>
							<div class="address">
								<span>179 Enterprise Blvd #169, Markham, ON</span>
								<span>14.7km</span>
							</div>
							<div class="card">
								<div>Food</div>
                                <div>Discount</div>
							</div>
						</li>
					</ul>
				
			</div>
</template>



<script>
export default {
    name:'Cilist'
}
</script>

<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>