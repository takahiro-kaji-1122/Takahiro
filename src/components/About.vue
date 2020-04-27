<template>
  <div class="aboutSection">
    <div class="aboutTitle">
      About Me
    </div>
    <br>
    <div
      class="aboutExplain"
    >
      <p>🏷大学では会計学が専門でした。今は趣味程度で心理学を勉強中📚</p>
      <p>🏷エンジニアになりたいと思ったきっかけはもともと、</p>
      <p>同じ作業を繰り返すのがあまり好きではなく反復作業をプログラムに任せれたら最高だと思ったからです。</p>
      <p>そこから、インタラクションデザインに興味をもち、ゆくゆくはユーザーに応じて表現が変わるような作品や</p>
      <p>ITと心理学の分野と掛け合わせたサービスをつくてみたいと思ってます💭</p>
    </div>
    <br>
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
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  padding: 10px 0;
}

.aboutTitle {
  display: inline-block;
  text-align: center;
  width: 300px;
  height: 100%;
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 2px 2px #3c40506b;
  padding: 0 20px 4px 20px;
  border-bottom: 2px solid #fff;
}

.aboutExplain {
  display: inline-block;
  text-align: center;
  height: 100%;
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 10pt;
  line-height: 1.4em;
  word-break: normal;
  padding: 8px 20px 0 20px;
  margin: 0 2px 0 2px;
}

/* .aboutExplain p{
  margin: 1.1em;
} */

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

</style>

