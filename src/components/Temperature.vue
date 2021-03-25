<template>
  <div class="temperature">
    <div class="icon">
      <img src="../assets/temperature-low@2x.png" alt="">
    </div>
    <div class="details">
      <div class="value">
        <span>36 C</span>
      </div>
      <div class="description">
        <span>Temperature</span>
      </div>
    </div>
    <div class="status">
      <img src="../assets/Up@2x.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Temperature"
}
</script>
<style lang="scss" scoped>
@import "../variables.scss ";
.temperature{
  height: 180px;
  width: 250px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .icon img{
    height: 68px;
    width: auto;
  }
  .details{
    display: flex;
    flex-direction: column;
    .value{
      font-size: 44px;
      color: $bold-green;
      font-weight: bold;
    }
    .description{
      font-size: 24px;
      color: $light-green;
    }
  }
  .status img{
    height: 14px;
    width: auto;
  }
  &:hover{
    background: $hover-green;
  }
}
</style>
