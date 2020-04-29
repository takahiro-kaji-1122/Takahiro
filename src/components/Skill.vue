<template>
  <div class="skillSection">
    <div class="skillTitle">
      Skill Set
    </div>
    <br>
    <div class="skillExplain">
      <p>
        学生時代に、HPHとMySQLを少し触ったことがあります。動画をアップロードしたり、ログイン画面を作ったりしました。
      </p>
      <p>新卒研修ではVueなど色々なものを触り、自分がどれが好きなんだろうかと迷ったりしています。</p>
      <p>今は、frontendを触るのが楽しいので色々調べてスキルアップしていきたいと思っています。</p>
    </div><br>
    <label class="gitHubLabel">Github : </label>
    <a
      class="gitHubLink"
      href="https://github.com/takahiro-kaji-1122/portfolio"
    >
      github.com/takahiro-kaji-1122
    </a>
    <br><br>

    <a
      href="#!"
      class="skillCategoriesFrontend"
      :class="{ onskillCategoriesFrontend: isFrontActive }"
      @click="setCurrentChart('Frontend')"
    >
      Frontend</a>
    <a
      href="#!"
      class="skillCategoriesBackend"
      :class="{ onskillCategoriesBackend: isBackActive }"
      @click="setCurrentChart('Backend')"
    >
      Backend</a>
    <a
      href="#!"
      class="skillCategoriesDevOps"
      :class="{ onskillCategoriesDevOps: isDevOpsActive }"
      @click="setCurrentChart('DevOps')"
    >
      DevOps</a>
    <br>
    <div>
      <ul
        class="offFrontend"
        :class="{ onFrontend: isFrontActive }"
      >
        <li
          v-for="fName in frontNames"
          :key="fName"
        >
          {{ fName }}
        </li>
      </ul>
      <!-- v-forで書き直す -->
      <ul
        class="offBackend"
        :class="{ onBackend: isBackActive }"
      >
        <li
          v-for="bName in backNames"
          :key="bName"
        >
          {{ bName }}
        </li>
      </ul>
      <ul
        class="offDevOps"
        :class="{ onDevOps: isDevOpsActive }"
      >
        <li
          v-for="dName in devNames"
          :key="dName"
        >
          {{ dName }}
        </li>
      </ul>
    </div>
    <div class="skillGraph">
      <div
        v-if="isFrontActive && loaded"
        class="skillGraph"
      >
        <SkillChartFrontend />
      </div>
      <div
        v-if="isBackActive"
        class="skillGraph"
      >
        <SkillChartBackend />
      </div>
      <div
        v-if="isDevOpsActive"
        class="skillGraph"
      >
        <SkillChartDevOps />
      </div>
    </div>
    <div id="jpVision" />
  </div>
</template>

<script>
import SkillChartFrontend from './SkillChart/SkillChartFrontend.vue'
import SkillChartBackend from './SkillChart/SkillChartBackend.vue'
import SkillChartDevOps from './SkillChart/SkillChartDevOps.vue'


export default {
  name: "Skill",
  components: {
    SkillChartFrontend,
    SkillChartBackend,
    SkillChartDevOps,
  },
  data () {
    return {
      currentChart: 'Frontend',
      // v-forで書き直す
      frontNames :[],
      backNames :[],
      devNames :[],

    }
  },
  computed: {
    isFrontActive() {
      return this.currentChart=='Frontend';
    },
    isBackActive() {
      return this.currentChart=='Backend';
    },
    isDevOpsActive() {
      return this.currentChart=='DevOps';
    },
    loaded(){
      return this.$store.state.loaded
    }
  },
  mounted (){
    this.getFSkillName()
    this.getBSkillName()
    this.getDSkillName()
  },
  // v-forで書き直す
  methods: {
    setCurrentChart(chart) {
      this.currentChart = chart;
    },
    // v-for:tate値を返す
    getFSkillName(){
      const skillFName=this.$store.getters.frontName;
      this.frontNames=skillFName;
    },
    getBSkillName(){
      const skillBName=this.$store.getters.backName;
      this.backNames=skillBName;
    },
    getDSkillName(){
      const skillDName=this.$store.getters.devName;
      this.devNames=skillDName;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skillSection {
  display: inline-block;
  text-align: center;
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 10px 0;
}

.skillTitle {
  display: inline-block;
  text-align: center;
  color: #20879f;
  width: 300px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 2px 2px #3c40506b;
  border-bottom: 2px solid #20879f;
}

.skillExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  line-height: 1.4em;
  word-break: normal;
  padding: 15px 20px 5px 20px;
}

.gitHubLabel {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

.gitHubLink {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
}

.skillCategoriesFrontend {
  color: #b51a1a;
  opacity: 0.75;
  text-decoration: none;
  margin: 0 3px;
}

.onskillCategoriesFrontend {
  text-decoration: underline;
}

.skillCategoriesBackend {
  color: #0f8839;
  opacity: 0.75;
  text-decoration: none;
  margin: 0 3px;
}

.onskillCategoriesBackend {
  text-decoration: underline;
}

.skillCategoriesDevOps {
  color: #571083;
  opacity: 0.75;
  text-decoration: none;
  margin: 0 3px;
}

.onskillCategoriesDevOps {
  text-decoration: underline;
}

.offFrontend li {
  display: inline-block;
  color: rgba(181, 26, 26, 0.25);
  padding: 5px 10px 5px 10px;
  font-weight: bold;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 1px gray;
  margin: 12px 5px 6px 5px;
}

.onFrontend li {
  color: rgba(241, 6, 6, 0.75);
  padding: 5px 10px 5px 10px;
  font-weight: bold;
  background: rgba(241, 6, 6, 0.25);
  box-shadow: 0 0 6px gray;
  margin: 12px 5px 6px 5px;
}

.offBackend li {
  display: inline-block;
  color: rgba(15, 136, 57, 0.25);
  padding: 5px 10px 5px 10px;
  font-weight: bold;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 1px gray;
  margin: 6px 5px;
}

.onBackend li {
  color: rgba(15, 136, 57, 0.75);
  padding: 5px 10px 5px 10px;
  font-weight: bold;
  background: rgba(15, 136, 57, 0.25);
  box-shadow: 0 0 6px gray;
  margin: 6px 5px;
}

.offDevOps li {
  display: inline-block;
  color: rgba(87, 16, 131, 0.25);
  padding: 5px 10px 5px 10px;
  font-weight: bold;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 1px gray;
  margin: 6px 5px;
}

.onDevOps li {
  color: rgba(87, 16, 131, 0.75);
  padding: 5px 10px 5px 10px;
  font-weight: bold;
  background: rgba(87, 16, 131, 0.25);
  box-shadow: 0 0 6px gray;
  margin: 6px 5px;
}

.skillGraph {
  display: inline-block;
  text-align: center;
  width: 300px;
  height: 300px;
}

#jpVision {
  padding: 20px 0 20px 0;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

</style>

