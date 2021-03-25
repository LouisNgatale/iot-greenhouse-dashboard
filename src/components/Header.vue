<template>
  <div id="header">
        <div class="heading">
            <div class="icon">
                  <img src="../assets/cloud-sun.png" alt="">
            </div>
            <div class="status ">
                <div class="date">{{ date }} </div>
                <div class="weather">Cloudy</div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    date: function (){
       let today = new Date();
       let dd = String(today.getDate()).padStart(2, '0');
       let mm = String(today.getMonth());
       let day = today.getDay();

       let Months = [
         "January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"
       ];

       let Days = [
         "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
       ]

       today = Months[mm] + " " + dd + ", " + Days[day];
       return today;
    },
    weather: function (){
    //  TODO:Weather API
    }
  }
}
</script>

<style lang="scss">
@import "../variables.scss ";

.heading{
  display:flex;
  align-content: center;
  align-items: center;
  .icon{
    margin-right: 5px;
  }
  .date{
    color: $light-green;
  }
  .weather{
    color: $bold-green;
    font-weight: bold;
  }
}
</style>
