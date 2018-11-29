<template>
	<div class="login">
		<img src="https://forum.anime.lk/uploads/default/original/1X/5679c88da55ccddceec97cb840dc2f3f6864998f.png" style="width:400px;height:300px;">

		<div>
			<div class="row d-flex inp">
				<input style="	
    color: #a7744d;
    font-size: 18px;
    width: 270px !important;
    height: 40px;
    <!-- border-radius: 20px !important; -->
    border: 0.5px solid rgb(82, 212, 74);
    padding: 4px 0px 4px 19px;
    <!-- box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px; -->
    outline-width: 0px;" type="text" v-model="email" placeholder="Email">

				<input style="	
color: #a7744d ;
    font-size: 18px;
    width: 270px !important;
    height: 40px;
		
    <!-- border-radius: 20px !important; -->
    border: 0.5px solid rgb(82, 212, 74);
    padding: 4px 0px 4px 19px;
    <!-- box-shadow: rgb(75, 197, 96) 3px 3px 10px -3px; -->
    outline-width: 0px; " type="password" v-model="password" placeholder="Password">
			</div>
		</div>
		<button style="	font-size: 18px;
	width: 270px !important;
	height: 49px;
	font-weight:bold;
	<!-- border-radius: 20px !important; -->
	border: 0.5px solid rgb(76, 171, 71);
	padding: 4px 0px 4px 0px;
	box-shadow: 3px 3px 10px -3px #cacaca;
  outline-width: 0px;
  background-color: #ff9052;
  color: #fff;
  " v-on:click="signIn">Sign in</button><br>
		<button style="	font-size: 18px;
	width: 270px !important;
	height: 49px;
		font-weight:bold;
	<!-- border-radius: 20px !important; -->
	border: 0.5px solid rgb(76, 171, 71);
	padding: 4px 0px 4px 0px;
	box-shadow: 3px 3px 10px -3px #cacaca;
  outline-width: 0px;
  background-color: #6c757d;
  color: #fff;
  " v-on:click="signUp">Sign up</button>
		<h5 class="mt-4 gray">Forgot Password
			<!-- <router-link to="/sign-up">Sign Up</router-link> -->
		</h5>
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
		signUp: function() {
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
	color: #f0c791;
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
.logo {
	color: #ffa936;
	margin: 20px 0px 20px 0px;
}
.gray {
	color: gray;
}
.inp {
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
input[data-v-ef68022e] {
	margin: 0px 0 !important;
}
</style>
