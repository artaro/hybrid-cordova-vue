
<template>
<div>

		<b-navbar toggleable="md" type="dark" variant="warning" >

			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>


			<b-navbar-brand><div class="logo" v-on:click="home">Anime</div></b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<b-nav-item v-on:click="home" ><div class="headerfont">Home</div></b-nav-item>
				
						<b-nav-item active v-on:click="dev"><div class="font-bold" >Developer</div></b-nav-item>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">

					<b-nav-form>
						<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
						<b-button size="sm" class="my-2 my-sm-0 mr-2" type="submit">Search</b-button>
						<b-button v-on:click="logout" size="sm" class="my-2 my-sm-0" type="submit">Log out</b-button>
					</b-nav-form>

				</b-navbar-nav>

			</b-collapse>
		</b-navbar>
	<div class="container">
		



		
		
<div class="row logo mt-5"><div class="col-12">Team</div></div>
		<div class="row">
			<div class="d-flex eachProfile col-12 cen">

				<div class="p-2">
					<center> <img src=".././assets/napat.jpg" alt="HTML5 Icon" style="width:150px;height:150px;"> </center><br />
				</div>
				<div class="dev">
					<b>Napat Binsa-ard</b> <br />5835512007 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-1x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/newnapat17">Facebook</a> <br />
					<i class="fas fa-phone-square fa-1x" style="color:#42b983"></i> Tel : 0836534304 <br />
					<i class="far fa-envelope fa-1x" style="color:#42b983"></i> E-mail : naphat1811@gmail.com <br />
				</div>
			</div>
		</div>

		<div class="row">
			<div class="d-flex eachProfile col-12 cen">
				<div class="p-2">
					<center> <img src=".././assets/gap.jpg" alt="HTML5 Icon" style="width:160px;height:180px;"> </center><br />
				</div>
				<div class="dev">

					<b>Naruenat Khunatham</b> <br />5835512010 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-1x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/narunart.kunatham">Facebook</a> <br />
					<i class="fas fa-phone-square fa-1x" style="color:#42b983"></i> Tel : 081-4061860 <br />
					<i class="far fa-envelope fa-1x" style="color:#42b983"></i> E-mail : kap7059678@gmail.com <br />
				</div>
			</div>
		</div>

		<div class="row">
			<div class="d-flex eachProfile col-12 cen">
				<div class="p-2">
					<center> <img src=".././assets/gram.jpg" alt="HTML5 Icon" style="width:150px;height:150px;"> </center><br />
				</div>
				<div class="dev">

					<b>Anongnat Faikhao</b> <br />5835512036 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-1x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/gramma.nano">Facebook</a> <br />
					<i class="fas fa-phone-square fa-1x" style="color:#42b983"></i> Tel : 087-4638443 <br />
					<i class="far fa-envelope fa-1x" style="color:#42b983"></i> E-mail : hle_gam@hotmail.com <br />
				</div>
			</div>
		</div>

		<div class="row">
			<div class="d-flex eachProfile col-12 cen">
				<div class="p-2">
					<center> <img src=".././assets/bus.jpg" alt="HTML5 Icon" style="width:160px;height:180px;"> </center><br />
				</div>
				<div class="dev">

					<b>Busarin Kaewsalam</b> <br />5835512051 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-1x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/yb3buss">Facebook</a> <br />
					<i class="fas fa-phone-square fa-1x" style="color:#42b983"></i> Tel : 0917542311 <br />
					<i class="far fa-envelope fa-1x" style="color:#42b983"></i> E-mail : yb3buss@gmail.com <br />
				</div>
			</div>
		</div>

		<div class="row">
			<div class="d-flex eachProfile col-12 cen">
				<div class="p-2">
					<center> <img src=".././assets/pumin.jpg" alt="HTML5 Icon" style="width:160px;height:180px;"> </center><br />
				</div>
				<div class="dev">
					<b>Pumin Swangjang</b> <br />5835512102 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-1x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/boy.reallife">Facebook</a> <br />
					<i class="fas fa-phone-square fa-1x" style="color:#42b983"></i> Tel : 0831760760 <br />
					<i class="far fa-envelope fa-1x" style="color:#42b983"></i> E-mail : fvck3oy@hotmail.com <br />
				</div>
			</div>
		</div>

		<div class="row">
			<div class="d-flex eachProfile col-12 cen">
				<div class="p-2">
					<center> <img src=".././assets/art.jpg" alt="HTML5 Icon" style="width:160px;height:180px;"> </center><br />
				</div>
				<div class="dev">

					<b>Tossapol Jaidee</b> <br />5835512102 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-1x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/j.tossapol">Facebook</a> <br />
					<i class="fas fa-phone-square fa-1x" style="color:#42b983"></i> Tel : 087-3860824 <br />
					<i class="far fa-envelope fa-1x" style="color:#42b983"></i> E-mail : invisibleart.t@gmail.com <br />
				</div>
			</div>
		</div>
	</div>
<div class="footer pt-3 pb-3 mt-4">Copyright © 2009-2018 Anime WebApp. All Rights Reserved.</div>
	</div>

</template> 




<script>
import firebase from 'firebase'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
	name: 'profile',
	data() {
		return {
			msg: 'Developer'
		}
	},
	methods: {
		logout: function() {
			firebase
				.auth()
				.signOut()
				.then(() => {
					this.$router.replace('login')
				})
		},
		home: function() {
			this.$router.replace('home')
		},
		dev:function () {
			this.$router.replace('dev')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
	color:#fff !important;
	font-weight: bold;
}

.font-bold{
		font-weight: bold;
}

active{
	font-weight: bold;
}

.headerfont{
color:#fff;
}
.logo{
	color: black !important;
font-weight: bold;
font-size:25px;
}
h1,
h2 {
	font-weight: normal;
	margin-left: 80px;
	text-align: center;
}
.footer{
	background: #ffc107 !important;
	color:#fff;
}

/* ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
} */

.title {
	font-size: 30px;
	font-weight: bold;
	text-align: center;
}

.eachProfile {
	text-align: start;
	width: auto;
	/* justify-content: center; */
	/* margin: 40px 40px 40px 100px; */
	padding: 40px 10px 10px 10px;
	/* border: 1px solid #42b983 !important;
	box-shadow: 3px 3px 10px -3px rgb(75, 197, 96) !important;
	border-radius: 15px; */
}

.btnLogout {
	color: #ffa936;
	font-weight: bold;
	background-color: #cfeeff;
	font-size: 18px;
	width: auto !important;
	height: 40px;
	border-radius: 15px !important;
	/* border: 0.5px solid; */
	padding: 4px 4px 4px 4px;
	/* box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px; */
	outline-width: 0px;
	cursor: pointer;
	margin-bottom: 20px;
	margin-right: 20px;
}

.btnLogout:hover {
	color: #cfeeff;
	background-color: #ffa936;
}
.arrow {
	cursor: pointer;
	color: gray;
}
.cen {
	justify-content: center;
}
.dev {
	padding: 0px 10px 10px 10px;
}
</style>
