
<template>

	<div class="hello">
		<div class="title">
			<div> - </div>{{ msg }}</div>


		<div class="d-flex eachProfile">
			<div>
				<center> <img src=".././assets/logo.png" alt="HTML5 Icon" style="width:150px;height:150px;border-radius:50px"> </center><br />
			</div>
			<div class="ml-5">
				<h5>
					<b>Napat Binsa-ard</b> <br />5835512007 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-2x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/newnapat17">Facebook</a> <br />
					<i class="fas fa-phone-square fa-2x" style="color:#42b983"></i>Tel : 0836534304 <br />
					<i class="far fa-envelope fa-2x" style="color:#42b983"></i>E-mail : naphat1811@gmail.com <br /></h5>
			</div>
		</div>


		<div class="d-flex eachProfile">
			<div>
				<center> <img src=".././assets/pumin.jpg" alt="HTML5 Icon" style="width:160px;height:180px;"> </center><br />
			</div>
			<div class="ml-5">
				<h5>
					<b>Pumin Swangjang</b> <br />5835512102 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-2x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/boy.reallife">Facebook</a> <br />
					<i class="fas fa-phone-square fa-2x" style="color:#42b983"></i>Tel : 0831760760 <br />
					<i class="far fa-envelope fa-2x" style="color:#42b983"></i>E-mail : realxiz.zixlaer@hotmail.com <br /></h5>
			</div>
		</div>

		<div class="d-flex eachProfile">
			<div>
				<center> <img src=".././assets/logo.png" alt="HTML5 Icon" style="width:150px;height:150px;border-radius:50px"> </center><br />
			</div>
			<div class="ml-5">
				<h5>

					<b>Busarin Kaewsalam</b> <br />5835512051 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-2x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/yb3buss">Facebook</a> <br />
					<i class="fas fa-phone-square fa-2x" style="color:#42b983"></i>Tel : 0917542311 <br />
					<i class="far fa-envelope fa-2x" style="color:#42b983"></i>E-mail : yb3buss@gmail.com <br /></h5>
			</div>
		</div>


		<div class="d-flex eachProfile">
			<div>
				<center> <img src=".././assets/pumin.jpg" alt="HTML5 Icon" style="width:160px;height:180px;"> </center><br />
			</div>
			<div class="ml-5">
				<h5>
					<b>Pumin Swangjang</b> <br />5835512102 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-2x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/boy.reallife">Facebook</a> <br />
					<i class="fas fa-phone-square fa-2x" style="color:#42b983"></i>Tel : 0831760760 <br />
					<i class="far fa-envelope fa-2x" style="color:#42b983"></i>E-mail : realxiz.zixlaer@hotmail.com <br /></h5>
			</div>
		</div>


		<div class="d-flex eachProfile">
			<div>
				<center> <img src=".././assets/pumin.jpg" alt="HTML5 Icon" style="width:160px;height:180px;"> </center><br />
			</div>
			<div class="ml-5">
				<h5>
					<b>Pumin Swangjang</b> <br />5835512102 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-2x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/boy.reallife">Facebook</a> <br />
					<i class="fas fa-phone-square fa-2x" style="color:#42b983"></i>Tel : 0831760760 <br />
					<i class="far fa-envelope fa-2x" style="color:#42b983"></i>E-mail : realxiz.zixlaer@hotmail.com <br /></h5>
			</div>
		</div>


		<div class="d-flex eachProfile">
			<div>
				<center> <img src=".././assets/pumin.jpg" alt="HTML5 Icon" style="width:160px;height:180px;"> </center><br />
			</div>
			<div class="ml-5">
				<h5>
					<b>Pumin Swangjang</b> <br />5835512102 <br />Computer Engineering <br />
					<i class="fab fa-facebook-square fa-2x" style="color:#42b983"></i>
					<a href="https://www.facebook.com/boy.reallife">Facebook</a> <br />
					<i class="fas fa-phone-square fa-2x" style="color:#42b983"></i>Tel : 0831760760 <br />
					<i class="far fa-envelope fa-2x" style="color:#42b983"></i>E-mail : realxiz.zixlaer@hotmail.com <br /></h5>
			</div>
		</div>


		<h2>
			<a href="/#/hello" target="">
				<i class="fas fa-home"></i> กลับสู่หน้าหลัก</a><br/>
			<button v-on:click="logout" class="btnLogout">Logout</button>
		</h2>
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
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
	margin-left: 80px;
	text-align: center;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}

.title {
	font-size: 30px;
	font-weight: bold;
	text-align: center;
}

.eachProfile {
	text-align: start;
	/* justify-content: center; */
	margin: 40px 40px 40px 100px;
	/*padding: 40px 10px 10px 10px; */
	/* border: 1px solid #42b983 !important;
	box-shadow: 3px 3px 10px -3px rgb(75, 197, 96) !important;
	border-radius: 15px; */
}

.btnLogout {
	color: rgb(55, 123, 52);
	font-size: 18px;
	width: 250px !important;
	height: 40px;
	border-radius: 20px !important;
	border: 0.5px solid rgb(82, 212, 74);
	padding: 4px 0px 4px 0px;
	box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px;
	outline-width: 0px;
	cursor: pointer;
	margin-top: 20px;
}

.btnLogout:hover {
	color: #fff;
	background-color: #4caf50;
}
</style>
