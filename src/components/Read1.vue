
<template>
<div>

		<b-navbar toggleable="md" type="dark" variant="warning" >

			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<b-navbar-brand href="http://localhost:8081/#/hello"><div class="logo">Anime</div></b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<b-nav-item  href="http://localhost:8081/#/hello"><div class="headerfont">Home</div></b-nav-item>
						<b-nav-item  href="http://localhost:8081/#/profile"><div class="headerfont">Developer</div></b-nav-item>

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
	<div class="container mt-5 mb-5">
<div class="cen logo mb-4">Ore to Kawazu san no Isekai Hourouki</div>
		
		<div class="row cen p-2">
		

					<center> <img fluid src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/47232851_1931456380275635_2564515562168254464_n.jpg?_nc_cat=100&_nc_ht=scontent.fbkk8-3.fna&oh=b320e217e93cac3232123903bf15cd01&oe=5CAE139E" alt="HTML5 Icon" style="width:350px;height:350px;"> </center><br />

		
</div>

			<div class="row cen">
			<div class="p-2">
					<center> <img src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.0-9/47128654_1931456433608963_1383591137079459840_n.jpg?_nc_cat=110&_nc_ht=scontent.fbkk12-3.fna&oh=ca28da719cb4063894f0c57aaf314992&oe=5CA79BEF" alt="HTML5 Icon" style="width:350px;height:350px;"> </center><br />

</div></div>
<div class="row cen">
				<div class="p-2">
					<center> <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/46975323_1931456413608965_4485702335439306752_n.jpg?_nc_cat=107&_nc_ht=scontent.fbkk14-1.fna&oh=006f456b77499377b55384f3b1918e26&oe=5CA23357" alt="HTML5 Icon" style="width:350px;height:350px;"> </center><br />

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
	name: 'Read1',
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
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
	background: #ffc107 !important;
	color:#fff;
}
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
