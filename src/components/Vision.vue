<template>
  <div class="visionSection">
    <div class="visionTitle">
      About Me
    </div>
    <hr class="hr1">
    <div class="visionExplain">
      駆け出しのエンジニア。大学では会計学が専門で、趣味程度で心理学を勉強中。
    </div>
  </div>
</template>

<script>
export default {
  name: "Vision"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.visionSection {
  width: 100%;
  text-align: center;
  background-image: #f5f5f5;
}

.visionTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 3px 9px #191314;
}

.visionExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  line-height: 0.25em;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

</style>

