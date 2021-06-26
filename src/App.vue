<template>
  <div id="app">
    <div class="container-fluid">
        <div class="row px-5 pt-2">
          <banner></banner>
        </div>
        <div class="row justify-content-start">
			<div class="col-12 justify-content-start p-4 containers">
				<div class="greetings">
					<div class="image mb-2">
						<img src="./assets/sunny.png">
					</div>
					<div class="mb-2">
						Good morning,
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
							22.5
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
							80%
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
							70%
						</div>
					</div>
				</div>
			</div>
        </div>

        <div class="row">
			<div class="col-12 justify-content-start p-4 containers">
				<div class="global temperature">
					<div class="image mb-2">
						<img src="./assets/temperature.png">
					</div>
					<div class="sub-heading ">
						Outside Temperature
					</div>

					<div class="mb-2 temperature_value value">
						22.5
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
			</div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      connection:null,
    }
  },
  methods:{
    ...mapActions([
      'getValues'
    ]),
  },
  created() {
    setInterval(()=>{
      //this code runs every second
    this.getValues();
    }, 10000);
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
		color: $grey;
	}
	
	.global.temperature{
		background: $dark;
		width: 454px;
		border-radius: 12px;
		padding: 20px 21px;
		margin:0 13px;
		height: 100%;
		color:white;
  		box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
	}
	
	.global.humidity{
		background: $light_grey;
		width: 454px;
		border-radius: 12px;
		padding: 20px 21px;
		margin:0 13px;
		height: 100%;
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
