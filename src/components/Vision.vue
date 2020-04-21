<template>
  <div class="visionSection">
    <div class="visionTitle">
      Vision
    </div>
    <div class="visionExplain">
      <p>互いの違いを楽しめる世界にしたいなと漠然と思っています。あまり具体性がないのですが、一番核になっているのはこの感覚です。その道の過程で、TeamTech Move the World.を実現させたいと思っています。</p>
      <p />
      <p>どう実現させていくのかは、シアトルがどう成長していくかにかかっていると感じているので、その中でシアトルのValueを体現できるように頑張っていきたいと思っています。</p>
    </div>
    <div>{{ score1 }}</div>
    <div>{{ score2 }}</div>
    <input
      type="checkbox"
      @click="getScore1"
    >
    <input
      type="checkbox"
      @click="getScore2"
    >
  </div>
</template>

<script>
export default {
  name: "Vision",
  computed:{
    score1(){
      return this.$store.getters.getSkillScores[0]
    },
    score2(){
      return this.$store.getters.getSkillScores[1]
    }
  },
  methods:{
    getScore1(){
    this.$store.dispatch('updateSkillScores');
//    console.log($store.state.skillScores);
    },
        getScore2(){
    this.$store.dispatch('updateSkillScores');
//    console.log($store.state.skillScores);
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.visionSection {
  width: 100%;
  text-align: center;
  background-image: #f5f5f5;
  padding: 10px 0;
}

.visionTitle {
  display: inline-block;
  text-align: center;
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  width: 300px;
  font-weight: bold;
  text-shadow: 2px 2px 2px #3c40506b;
  padding: 0 0 5px 0;
  border-bottom: 2px solid #20879f;
}

.visionExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  padding: 10px 20px 5px 20px;
  margin: 0 0 0 0;
  line-height: 1.4em;
  word-break: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

</style>

