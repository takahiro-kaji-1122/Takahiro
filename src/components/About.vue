<template>
  <div class="aboutSection">
    <div class="aboutTitle">
      About Me
    </div>
    <hr class="hr1">
    <div class="aboutExplain">
      駆け出しのエンジニア。大学では会計学が専門で、趣味程度で心理学を勉強中。
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aboutSection {
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: #f5f5f5;
}

.aboutTitle {
  height: 100%;
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 3px 9px #191314;
}

.aboutExplain {
  height: 100%;
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  line-height: 0.25em;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

</style>

