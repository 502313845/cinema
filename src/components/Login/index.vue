<template>
   	<div class="login_body">
				<div>
					<input class="login_text" type="text" placeHolder="Username/Phone/Email" >
				</div>
				<div>
					<input class="login_text" type="password" placeHolder="Enter your password" >
				</div>
				<div class="login_btn">
					<input type="submit" value="Login">
				</div>
				<div class="login_link">
					<a href="#">Sign Up</a>
					<a href="#">Forget Password?</a>
				</div>
			</div>

</template>
<script>
export default {
    name:'Login'
}
</script>


<style scoped>
#content .login_body{  width:100%;}
.login_body .login_text{ width:100%; height: 40px; border:none; border-bottom: 1px #ccc solid; margin-bottom: 5px; outline: none; text-indent: 10px;}
.login_body .login_btn{ height:50px; margin:10px;}
.login_body .login_btn input{ width:100%; height:100%; background:#e54847; border-radius: 3px; border:none; display: block; color:white; font-size: 20px;}
.login_body .login_link{ display: flex; justify-content:space-between;}
.login_body .login_link a{ margin:0 5px; font-size: 16px; color:#e54847;}


</style>