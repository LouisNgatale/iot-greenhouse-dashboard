<template>
    <div>
        <div class="controls">
            <div class="irrigation m-2">
                <img src="../assets/raindrops@2x.png" alt="">
                <span class="irrigate">Irrigate</span>
                <input type="checkbox" @change="irrigation" v-model="irrigate" value="irrigate" name="" id="">
            </div>
            <div class="ventilation m-2">
                <img src="../assets/fan@2x.png" alt="">
                <span class="fan">Ventilation</span>
                <input type="checkbox" @change="ventilation" v-model="ventilate" value="ventilate" name="" id="ventilation">
            </div>
          <div>

          </div>
        </div>
    </div>
</template>

<script>
import firebase from "../firebase";


var irrigation_ref = firebase.ref("/irrigationState");
var ventilation_ref = firebase.ref("/ventilationState");

export default {
    data() {
        return{
          irrigate:"",
          ventilate:""
        }
    },
  methods:{
    ventilation(){
      ventilation_ref.set(this.ventilate,(error) => {
        if (error) {
          console.log(error)
        }
      });
    },
    irrigation(){
      irrigation_ref.set(this.irrigate,(error) => {
        if (error) {
          console.log(error)
        }
      });
    }
  },
  created() {
    irrigation_ref.on('value', (snapshot) => {
      this.irrigate = snapshot.val()
	  });	

    ventilation_ref.on('value',(snapshot)=> {
      this.ventilate = snapshot.val();
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../variables.scss ";

.controls{
    display: flex;
    justify-content:space-between;
    align-items:center;
    width:100%;

  /*Radio*/
  input[type="checkbox"]{
    position: relative;
    width: 40px;
    height: 20px;
    border: 2px solid #c6c6c6;
    -webkit-appearance: none;
    outline: none;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    transition:all .5s;
  }
  input:checked[type="checkbox"]{
    border: 2px solid $blue;
  }
  input[type="checkbox"]:before{
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 10px;
    top: 2px;
    left: 2px;
    transform: scale(1.1);
    background: #c6c6c6;
    transition: all .5s;
  }
  input:checked[type="checkbox"]:before{
    left: 20px;
    background: $blue;
    transition: all .5s;
  }


  .irrigation{
        img{
            height:30px;
            width:auto;
            margin: 5px 0;
        }

         .irrigate{
            margin: 5px 0;
            color: white;
            font-size: 18px;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .ventilation{
        img{
            height:30px;
            width:auto;
            margin: 5px 0;
        }
        .fan{
            margin: 5px 0;
            color: white;
            font-size: 18px;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
