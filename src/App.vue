<template>
  <div id="app">
    <div class="container-fluid">
        <!-- <div class="row px-5 pt-2">
          <banner></banner>
        </div> -->
        <div class="row justify-content-start">
			<div class="col-12 justify-content-evenly p-4 containers">
				<div class="greetings">
					<div class="image mb-2">
						<img src="./assets/sunny.png">
					</div>
					<div class="mb-2">
						Good Afternoon,
					</div>

					<div class="mb-2">
						Remember to irrigate the plants today for good growth.
					</div>
				</div>

				<div class="widgets">
					<div class="temperature">
						<div class="image mb-2">
							<img src="./assets/temperature.png">
						</div>
						<div class="sub-heading ">
							Temperature
						</div>

						<div class="mb-2 temperature_value value">
							{{ values.temperature }}&deg;C
						</div>
					</div>
					<div class="humidity">
						<div class="image mb-2">
							<img src="./assets/humidity.png">
						</div>
						<div class="sub-heading">
							Humidity
						</div>

						<div class="mb-2 humidity_value value">
							{{ values.humidity }}%
						</div>
					</div>
					<div class="moisture">
						<div class="image mb-2">
							<img src="./assets/humidity.png">
						</div>
						<div class="sub-heading">
							Soil moisture
						</div>

						<div class="mb-2 moisture_value value">
							{{moisture}}%
						</div>
					</div>
				</div>
			</div>
        </div>

        <div class="row">
			<div class="col-12 justify-content-evenly p-4 containers">
				<div class="global temperature">
					<div class="image mb-2">
						<img src="./assets/temperature.png">
					</div>
					<div class="sub-heading ">
						Water level - {{ values.water_level }}
					</div>

					<div class="progress mt-2" style="height: 50px">
						<div class="progress-bar " role="progressbar"  v-bind:style="{ width: values.water_level }" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
					</div>
				</div>
				<div class="global humidity">
						<div class="image mb-2">
							<img src="./assets/humidity.png">
						</div>
						<div class="sub-heading">
							Outside Humidity
						</div>

						<div class="mb-2 humidity_value value">
							80%
						</div>
				</div>
				<div class="global controls">
					<controls/>
				</div>
			</div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
import Controls from './components/Controls.vue';
import firebase from "./firebase";

var dht_ref = firebase.ref("/DHT11");
var water_level_ref = firebase.ref("/Water Level");
var irrigation_ref = firebase.ref("/irrigationState");
var ventilation_ref = firebase.ref("/ventilationState");
var moisture_ref = firebase.ref("/Soil Moisture");

export default {
  components: { Controls },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      connection:null,
	  values: {
		temperature:'',
		humidity:'',
		water_level:'',
		irrigation_state:'',
		ventilation_state:'',
		moisture:''
	  }
    }
  },
  methods:{
    ...mapActions([
      'getValues'
    ]),
	weather_api:() =>{
		axios.get("http://api.openweathermap.org/data/2.5/weather?q=Dar es Salaam&appid=8e08f28b8bfebe97d1cde65c3518b833")
			.then(() => {
				
			})
			.catch(err => console.log(err));	
	}
  },
  created() {
    dht_ref.on('value', (snapshot) => {
		this.values.temperature = snapshot.val().Temperature;
		this.values.humidity = snapshot.val().Humidity;
	});	

	water_level_ref.on('value',(snapshot)=> {
		var height = snapshot.val();
		this.values.water_level = `${Math.round(((19 - height)/ 19) * 100)}%`;
	});

	moisture_ref.on('value',(snapshot)=>{
		this.moisture = snapshot.val();
		console.log(this.moisture)
	});

	this.weather_api();
  }
}
</script>

<style lang="scss">
@import "./variables.scss ";

#app{
	background: $background;
	min-height: 100vh;
	font-family: 'Ubuntu', sans-serif;

	.containers{
		height:260px;
		display: flex;
	}

	.value{
		font-family: 'Raleway', sans-serif;
		font-style: italic;
		font-weight:700;
		font-size: 90px;
	}
	
	.widgets{
		display: flex;
	}

	.temperature_value{
		color: $blue;
	}

	.humidity_value{
		color: $orange;
	}

	.moisture_value{
		color: $blue;
	}

	.widgets>*{
		border-radius: 12px;
		padding: 20px 21px;
		margin:0 13px;
		height: 100%;
		background: $light_grey;
		width: 300px;
  		box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
	}

	.sub-heading{
		color: $white;
	}
	
	.global.temperature{
		background: $dark;
		width: 420px;
		border-radius: 12px;
		padding: 20px 21px;
		margin:0 13px;
		height: 100%;
		color:white;
  		box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
	}
	
	.global.humidity{
		background: $light_grey;
		width: 420px;
		border-radius: 12px;
		padding: 20px 21px;
		margin:0 13px;
		height: 100%;
  		box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
	}
	.global.controls{
		background: $light_grey;
		width: 268px;
		border-radius: 12px;
		padding: 20px 21px;
		margin:0 13px;
		height: 100%;
		// display:flex;
		// align-items:center;
		// justify-content:space-between;
  		box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
	}
	.global.temperature .sub-heading{
		color: white;
		font-weight: 400;
	}
	.greetings{
		background: $dark;
		margin:0 13px;
		color:white;
		width: 200px;
  		box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
		border-radius: 12px;
		padding: 20px 21px;
		height: 100%;
	}
	.title{
		font-weight: bold;
		font-size: 28px;
		color: $bold-green;
		margin-top: 16px;
	}

	
}
</style>
