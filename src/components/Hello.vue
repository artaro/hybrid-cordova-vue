
<template>

	<div class="hello">
		<div class="d-flex btn-header">
			<button v-on:click="logout" class="btnLogout">Logout</button>
			<button v-on:click="dev" class="btnLogout">Developer</button>

		</div>
		<h2>{{ msg }}</h2>
		<div id="new-employee" class="container">

			<div class="d-flex eachProfile row-12">
				<div>
					<center> <img src="https://www.nerdlog.it/wp-content/uploads/2017/12/Overlord-2-post.jpg" alt="HTML5 Icon" style="width:200px;height:220px;"> </center><br />
				</div>
				<div class="ml-5">
					<h5>
						<b>อันดับที่ 5</b> <br />Overlord II <br />เริ่ม: 9 ม.ค. 18–20.30 (TH)<br /> จำนวน: 13 ตอน<br/> ผลิต: Madhouse<br/><br/>เรื่องย่อ: ในปี 2126 เกม Dive Massively Multiplayer Online Role Playing Game (DMMORPG) ที่ชื่อ “Yggdrasil” ได้รับความนิยม ผ่านไป 12 ปีตัวเกมได้ปิดตัวลง กิลด์ Ainz Ooal Gown ได้ที่เคยยิ่งใหญ่ได้ถอนตัวก่อนเกมปิด เหลือเพียง Momonga ที่รับตำแหน่งหัวหน้า ยังคงอยู่ในเกมที่ฐานของกิลด์ซึ่งเป็นสุสานขนาดใหญ่ จนวันที่เกมปิดตัวลง เขาพร้อมกลับไปใช้ชีวิตในโลกความเป็นจริง แต่หลังเซิร์ฟเวอร์ปิดเขากลับพบว่าตนได้ย้ายไปในสถานที่อื่น และ NPC รับใช้กิลด์ได้มีชีวิต เขาจึงตั้งใจใช้ชีวิตใหม่ ในโลกใบใหม่ และค้นหาเหตุผลที่เขาถูกส่งมาที่นี่
					</h5>
				</div>
			</div>

			<div class="d-flex eachProfile row-12">
				<div>
					<center> <img src="https://i.pinimg.com/originals/c7/76/f9/c776f9bdeb216c927348e88ec44da7a5.jpg" alt="HTML5 Icon" style="width:200px;height:220px;"> </center><br />
				</div>
				<div class="ml-5">
					<h5>
						<b>อันดับที่ 4</b> <br />Gin no Guardian 2nd Season<br />เริ่ม: 13 ม.ค. 18–19.00 (TH)<br />จำนวน: 12 ตอน (อาจมี 6 ตอน)<br/>ผลิต: Haoliners Animation<br/><br/>เรื่องย่อ: (ภาคแรก) “ริคุ ซุยกิน” ชายที่ฐานะยากจน เขาได้รู้จัก “ริคุ เรย์” คุณหนูผู้ร่ำรวย ทั้งสองสนิทกันจากเกม จนเธอเสีย “ยูกิ” พ่อบุญธรรมจากการฆาตกรรม ทำให้เขาได้ทราบเรื่องที่เขาเป็นหลานแท้ ๆ ของยูกิที่ทิ้งมรดกและอุปกรณ์เข้าเกมใหม่ในโลกเสมือนจริง Grave Buster ไว้ให้ เรย์ถูกลักพาตัวจากชายที่ชื่อ “เทย์มุจิน” ที่ให้ซุยกินไปพบเขาในเกม เขาจึงต้องตามไปช่วยเธอในเกมที่มีการใช้เงินจริง เขาอยู่ฝ่ายผู้พิทักษ์สุสานที่แทบไม่เหลือใคร ต้องสู้กับเหล่านักล่าสุสาน ในฐานะหนึ่งผู้เล่นที่มีเงินในเกมเกินพันล้านเยน </h5>
				</div>
			</div>

			<div class="d-flex eachProfile">
				<div>
					<center> <img src="https://i.ytimg.com/vi/DZK0KdORw-c/maxresdefault.jpg" alt="HTML5 Icon" style="width:200px;height:220px;"> </center><br />
				</div>
				<div class="ml-5">
					<h5>
						<b>อันดับที่ 3</b> <br />Boku no Hero Academia (Season 3)<br />เริ่ม: - <br /> จำนวน: - <br/> ผลิต: Bones<br/><br/>ยุคสมัยหนึ่ง ได้มีเด็กที่เกิดมาพร้อม อัตลักษณ์ (Kosei, Quirk) ที่ทำให้ใช้ความสามารถพิเศษได้และเพิ่มจำนวนขึ้น กว่า 80% มีอัตลักษณ์ตั้งแต่เกิด จนการมีพลังพิเศษกลายเป็นเรื่องปกติในชีวิตประจำวัน และจำเป็นต้องมีผู้ผดุงความยุติธรรมเพื่อป้องกันอาชญากรรมจากพวกผู้มีพลังพิเศษ เรื่องราวของ “มิโดริยะ อิซึคุ” (เดกุ) ที่เคยประทับใจกับฮีโร่ผู้ผดุงความยุติธรรมตั้งแต่เด็ก ฝันอยากช่วยคนอื่นแต่ก็สิ้นหวังกับการที่ตนกลายเป็นพวกไร้อัตลักษณ์ หลังได้ช่วยเพื่อนร่วมชั้น “ออลไมท์” ฮีโร่อันดับหนึ่ง แบ่งความสามารถเฉพาะที่สืบทอดมาให้กับเขา ส่งผลให้ เดกุ มีโอกาสมาเรียนในโรงเรียน ยูเอ ที่สอนเหล่าฮีโร่โดยเฉพาะ</h5>
				</div>
			</div>

			<div class="d-flex eachProfile">
				<div>
					<center> <img src="https://i.ytimg.com/vi/_lGBF8fGC_M/maxresdefault.jpg" alt="HTML5 Icon" style="width:200px;height:220px;"> </center><br />
				</div>
				<div class="ml-5">
					<h5>
						<b>อันดับที่ 2</b> <br />Nanatsu no Taizai: Imashime no Fukkatsu (Season 2)<br />เริ่ม: 13 ม.ค. 18–4.30 (TH)<br /> จำนวน: 24 ตอน<br/> ผลิต: A-1 Pictures<br/><br/>เรื่องย่อ: กลุ่มอัศวินแห่งบาปทั้ง 7 อดีตเหล่านักโทษผู้ก่อคดีและถูกตีตราสัญลักษณ์ของบาป 7 ประการบนร่าง วันหนึ่งพวกนั้นถูกกล่าวหาว่ากำลังวางแผนยึดครองอาณาจักร จึงถูกเนรเทศจากเมือง เวลาผ่านไป 10 ปี ได้เกิดการก่อรัฐประหารครั้งใหญ่ ราชาถูกจับกุมโดยกลุ่มอัศวินศักดิ์สิทธิ์ซึ่งเป็นพวกที่ใช้อำนาจข่มขู่ประชาชน “เจ้าหญิงอลิธซาเบธ” ได้ออกตามหากลุ่มอัศวินทั้ง 7 เพื่อขอความช่วยเหลือ เธอได้พบ “เมลิโอดาส” เจ้าของบาร์ Boar Hat แต่เขากลับเป็นหัวหน้าของเหล่าอัศวินแห่งบาป ผู้ที่มีสัญลักษณ์ของมังกรแห่งโทสะบนร่าง หลังจากได้เห็นความตั้งใจของอลิธซาเบธที่ต้องการช่วยบิดา เขาตัดสินใจที่จะออกตามหาเหล่าอัศวินแห่งบาปอีก 6 คนที่แยกย้ายกันไปเมื่อสิบปีก่อน หลังจบศึกใหญ่ในอาณาจักร “ลีโอเนส” ราชาได้เห็นภาพนิมิตรถึงหายนะที่กำลังจะเกิดในเมืองหลวงคาเมลอท พวกเมลิโอดาสออกเดินทางต่อพร้อมปัญหาใหม่ที่เกิดขึ้นในกลุ่มของเขา

					</h5>
				</div>
			</div>

			<div class="d-flex eachProfile">
				<div>
					<center> <img src="https://animeanime.jp/imgs/p/jtKDOVlKAvjRrNw8SXAVejagI61Nrq_oqaqr/125942.jpg" alt="HTML5 Icon" style="width:200px;height:220px;"> </center><br />
				</div>
				<div class="ml-5">
					<h5>
						<b>อันดับที่ 1</b> <br />Yowamushi Pedal: Glory Line (Season 4)<br />เริ่ม: 9 ม.ค. 18–0.05 (TH)<br /> จำนวน: 25 ตอน<br/> ผลิต: TMS Entertainment<br/><br/>เรื่องย่อ: “โอโนดะ ซากามิจิ” นักเรียนหนุ่มปีหนึ่งขี่จักรยานไปแถวอากิบาฮาระบ่อยครั้งตั้งแต่เด็กด้วยจักรยานแม่บ้านธรรมดา ๆ ต้องขึ้นเขาและทางลาดชันไปกลับร่วม 90 กิโลเมตร กลายเป็นการฝึกฝนของเขาที่ไม่เคยรู้ตัวมาก่อน “อิมาอิซึมิ จุนสุเกะ” ที่ฝึกฝนเพื่อเป็นนักปั่นจักรยานมือโปร ได้สังเกตเห็นทักษะที่ไม่ธรรมดาและต้องการแข่งกับเขา ซึ่งทำให้เขาได้ก้าวสู่โลกของการแข่งขันจักรยาน ต่อเนื่องจากการแข่งวันแรกของอินเตอร์ไฮในอนิเมะซีซั่นสาม เกิดเหตุการณ์ไม่คาดฝันหลายอย่างที่เป็นอุปสรรคให้กับหลายโรงเรียน ช่วงท้ายของการแข่งระหว่างแต่ละโรงเรียนที่เข้มข้นกำลังจะถึงจุดไคล์แม็กซ์ </h5>
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
			msg: '10 อันดับ Anime ที่น่าสนใจในปี 2018 !!!',
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

.eachProfile {
	text-align: start;
	/* justify-content: center; */
	margin: 40px 40px 40px 100px;
	padding: 40px 10px 10px 10px;
	border: 1px solid #42b983 !important;
	/* box-shadow: 3px 3px 10px -3px rgb(75, 197, 96) !important; */
	border-radius: 15px;
}
</style>
