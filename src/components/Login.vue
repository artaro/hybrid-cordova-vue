<template>
	<div class="login">
		<img src=".././assets/logoballoon.png" style="width:300px;height:300px;">
		<h3 class="logo">Toon Toon</h3>
		<input style="	
    color: rgb(55, 123, 52);
    font-size: 18px;
    width: 250px !important;
    height: 40px;
    <!-- border-radius: 20px !important; -->
    border: 0.5px solid rgb(82, 212, 74);
    padding: 4px 0px 4px 19px;
    <!-- box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px; -->
    outline-width: 0px;" type="text" v-model="email" placeholder="Email"><br>
		<input style="	
color: rgb(55, 123, 52);
    font-size: 18px;
    width: 250px !important;
    height: 40px;
    <!-- border-radius: 20px !important; -->
    border: 0.5px solid rgb(82, 212, 74);
    padding: 4px 0px 4px 19px;
    <!-- box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px; -->
    outline-width: 0px; " type="password" v-model="password" placeholder="Password"><br>
		<button style="	font-size: 18px;
	width: 270px !important;
	height: 49px;
	<!-- border-radius: 20px !important; -->
	border: 0.5px solid rgb(76, 171, 71);
	padding: 4px 0px 4px 0px;
	box-shadow: 3px 3px 10px -3px #cacaca;
  outline-width: 0px;
  background-color: orange;
  color: #fff;
  " v-on:click="signIn">Sign in</button><br>
	<button style="	font-size: 18px;
	width: 270px !important;
	height: 49px;
	<!-- border-radius: 20px !important; -->
	border: 0.5px solid rgb(76, 171, 71);
	padding: 4px 0px 4px 0px;
	box-shadow: 3px 3px 10px -3px #cacaca;
  outline-width: 0px;
  background-color: brown;
  color: #fff;
  " v-on:click="signUp">Sign up</button>
		<h4>Forgot Password
			<!-- <router-link to="/sign-up">Sign Up</router-link> -->
		</h4>
	</div>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'login',
	data: function() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signIn: function() {
			firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then(
					user => {
						this.$router.replace('hello')
					},
					err => {
						alert('Oops. ' + err.message)
					}
				)
		},
		signUp:function () {
			this.$router.replace('sign-up')
		}
		
	}
}
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
	margin-top: 40px;
	text-align: center;
}
input {
	margin: 10px 0;
	width: 20%;
	padding: 15px;
}
button {
	margin-top: 20px;
	width: 10%;
	cursor: pointer;
}
p {
	margin-top: 40px;
	font-size: 13px;
}
p a {
	text-decoration: underline;
	cursor: pointer;
}
.logo{
	color: orange;
}
</style>
