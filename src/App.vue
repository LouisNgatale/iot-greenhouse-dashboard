<template>
  <div id="app">
    <div class="container">
        <div class="row pt-2">
          <banner></banner>
        </div>
        <div class="row">
          <p class="title">Smart Greenhouse dashboard</p>
        </div>
        <div class="row">
          <controls></controls>
        </div>

        <div class="row">
          <div class="col m-2">
            <humidity></humidity>
          </div>
          <div class="col m-2">
            <temperature></temperature>
          </div>
          <div class="col m-2">
            <moisture></moisture>
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
  background: #DBFFEA;
  min-height: 100vh;

  .title{
    font-weight: bold;
    font-size: 28px;
    color: $bold-green;
    margin-top: 16px;
  }
}
</style>
