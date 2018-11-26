
<template>

	<div class="hello">
		<div class="d-flex btn-header">
			<button v-on:click="logout" class="btnLogout">Logout</button>
			<button v-on:click="dev" class="btnLogout">Developer</button>

		</div>
		<!-- <h2>{{ msg }} {{currentUser}}</h2> -->
		<div id="new-employee">

			<div class="">

				<div>
					<center> <img src=".././assets/kuma.png" alt="HTML5 Icon" style="width:700px;height:700px;"> </center><br />
				</div>

			</div>
		</div>

	</div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default {
	name: 'new-customer',

	// name: 'hello',
	data() {
		return {
			msg: 'ยินดีต้อนรับคุณ',
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
h1,
h2 {
	font-weight: normal;
}
.ull {
	display: grid;
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
ul {
	/* list-style-type: none; */
	margin: 0;
	padding: 0;
	overflow: hidden;
	/* background-color: #333; */
}

li {
	float: left;
}

li a {
	display: block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
}

li a:hover:not(.active) {
	background-color: #111;
}

.active {
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
	/* border: 1px solid #000; */
}

.btnLogout {
	color: #47525e;
	font-weight: bold;
	background-color: #cfeeff;
	font-size: 18px;
	width: auto !important;
	height: 40px;
	border-radius: 15px !important;
	/* border: 0.5px solid; */
	padding: 4px 0px 4px 0px;
	/* box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px; */
	outline-width: 0px;
	cursor: pointer;
	margin-bottom: 20px;
	margin-right: 20px;
}

.btnLogout:hover {
	color: #47525e;
	background-color: #cfeeff;
}
.btn-header {
	flex-direction: row-reverse;
}
</style>
