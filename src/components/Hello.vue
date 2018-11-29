
<template>

	<div class="hello">
		<b-navbar toggleable="md" type="dark" variant="warning" >

			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<b-navbar-brand href="http://localhost:8081/#/hello"><div class="logo">Anime</div></b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<b-nav-item active href="http://localhost:8081/#/hello"><div class="font-bold">Home</div></b-nav-item>
						<b-nav-item href="http://localhost:8081/#/profile"><div class="headerfont">Developer</div></b-nav-item>

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

		<div>
			<b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators background="#ababab" :interval="4000" img-width="500" img-height="160" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
<b-carousel-slide caption="Boruto: Naruto Next Generations" text="" img-src="https://images4.alphacoders.com/737/737895.png" class="img-fluid" ></b-carousel-slide>
<b-carousel-slide caption="One Punch Man" text="" img-src="https://www.ps4wallpapers.com/wp-content/uploads/2017/03/PS4Wallpapers.com_big_f6e38856e3f4fd3b8b2a48062e3d451b67c0ad91.jpg" class="img-fluid"></b-carousel-slide>
			</b-carousel>
		</div>



		<div class="container mt-5">

			<div class="d-flex row allcard">

				<div class="eachCard">
	  <b-card title="Ore to Kawazu san no Isekai Hourouki"
          img-src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/46970630_1931341423620464_1962359768584552448_n.jpg?_nc_cat=107&_nc_ht=scontent.fbkk10-1.fna&oh=629d3d811615daceac0538c78c8319e1&oe=5C751EE4"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 mr-2">
   <div>
    <b-button href="http://localhost:8081/#/read1" variant="dark">อ่านต่อ ...</b-button></div>
  </b-card>
</div>


<div class="eachCard">
	 <b-card title="The Promised Neverland"
          img-src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/46967632_1931341480287125_8402532412822650880_n.jpg?_nc_cat=111&_nc_ht=scontent.fbkk14-1.fna&oh=1bfa1def1b3ddc60166a090d0fdc0d7b&oe=5C6A8E72"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 mr-2">
  
    <b-button href="http://localhost:8081/#/read2" variant="dark">อ่านต่อ ...</b-button>
  </b-card>
	</div>


<div class="eachCard">
	 <b-card title="One Punch Man Season 1"
          img-src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/46983753_1931341396953800_3493328087041441792_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk10-1.fna&oh=b3111d9fc7dc33620e818c9dd7f053ce&oe=5C6366CB"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 mr-2">
  
    <b-button href="http://localhost:8081/#/read3" variant="dark">อ่านต่อ ...</b-button>
  </b-card>
	</div>

<div class="eachCard">
	 <b-card title="Boruto: Naruto Next Generations"
          img-src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/47196434_1931341406953799_5557097694251450368_n.jpg?_nc_cat=103&_nc_ht=scontent.fbkk10-1.fna&oh=8162ed25231d02a9ea4d9c8f560c88a1&oe=5CA0A106"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">

    <b-button href="http://localhost:8081/#/read4" variant="dark">อ่านต่อ ...</b-button>
  </b-card>
</div>



</div>
</div>
<div class="footer pt-3 pb-3 mt-4">Copyright © 2009-2018 Anime WebApp. All Rights Reserved.</div>
</div>

	</div>
	
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import { Carousel } from 'bootstrap-vue/es/components'

Vue.use(Carousel)

import db from './firebaseInit'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
	name: 'new-customer',

	// name: 'hello',
	data() {
		return {
			msg: '5 อันดับ Anime ที่น่าสนใจในปี 2018 !!!',
			customer: [],
			loading: true
		}
	},
	created() {
		db
			.collection('order')
			// .orderBy('')
			.get()
			.then(querySnapshot => {
				this.loading = false
				querySnapshot.forEach(doc => {
					const data = {
						id: doc.id,
						customer: doc.data().customer,
						name: doc.data().name,
						ea: doc.data().ea
					}
					this.customer.push(data)
					console.log('data ', this.customer)
				})
			})

		if (firebase.auth().currentUser) {
			this.isLoggedIn = true
			this.currentUser = firebase.auth().currentUser.email
		}
	},
	watch: {
		$route: 'fetchData'
	},
	methods: {
		// saveEmployee() {
		// 	db
		// 		.collection('order')
		// 		.add({
		// 			// employee_id: this.employee_id,
		// 			order: this.name,
		//       ea: this.ea,
		//       customer: this.currentUser
		// 			// dept: this.dept,
		// 			// position: this.position
		// 		})
		// 		.then(docRef => {
		// 			console.log('Client added: ', docRef.id)
		//       this.$router.push('/profile')

		// 		})
		// 		.catch(error => {
		// 			console.error('Error adding employee: ', error)
		// 		})
		// },
		logout: function() {
			firebase
				.auth()
				.signOut()
				.then(() => {
					this.$router.replace('login')
				})
		},
		dev: function() {
			this.$router.replace('profile')
		}
	}
}
</script>


<style scoped>
.header{
	color:#fffff !important;
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
.eachCard{
margin-bottom:20px;
	width:270px !important;
}
/* Remove the navbar's default margin-bottom and rounded borders */
.navbar {
	margin-bottom: 0;
	border-radius: 0;
}

/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
.row.content {
	height: 450px;
}

/* Set gray background color and 100% height */
.sidenav {
	padding-top: 20px;
	background-color: #f1f1f1;
	height: 100%;
}

/* Set black background color, white text and some padding */
footer {
	background-color: #555;
	color: white;
	padding: 15px;
}

/* On small screens, set height to 'auto' for sidenav and grid */

h1,
h2 {
	font-weight: normal;
}

/* .active {
	background-color: #4caf50;
} 

.hello {
	text-align: center;
}

.hrr {
	width: 500px;
}
.c0 {
	width: auto;
	margin-top: 10px;
	margin-bottom: 10px;
	/* border: 1px solid #000;} */

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
.btn-header {
	flex-direction: row-reverse;
}

.eachProfile {
	text-align: start;
	/* background-color: #f0edc5;  */
	/* justify-content: center; */
	margin-top: 10px;
	/* margin: 40px 40px 40px 100px;
	padding: 40px 10px 10px 10px; */
	border: 1px solid #ffa936 !important;
	/* box-shadow: 3px 3px 10px -3px rgb(75, 197, 96) !important; */
	border-radius: 15px;
}

.eachProfile:hover {
	border: 1px solid #ffa936 !important;
	box-shadow: 3px 3px 10px -3px #ffa936 !important;
}
.img-fluid{
	    max-width: 100% !important;
    max-height: 500px !important;
}
.img-fluid {
    max-width: 100%;
    max-height: 500px;
}

.card-img-top {
    width: 100%;
		height:270px;
		}

		.allcard{
			height:100%;
			margin:auto;
	justify-content: center;
		}
.footer{
	background: #ffc107 !important;
	color:#fff;
}
.card{
	height:100% !important;
}

</style>
