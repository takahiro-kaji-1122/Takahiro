<template>
  <div class="skillSection">
    <div class="skillTitle">
      梶尚洋
    </div>
    <br>
    <div class="skillExplain">
      seattleconslting
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
      Frontend
    </a>
    <a
      href="#!"
      class="skillCategoriesBackend"
      :class="{ onskillCategoriesBackend: isBackActive }"
      @click="setCurrentChart('Backend')"
    >
      Backend
    </a>
    <a
      href="#!"
      class="skillCategoriesDevOps"
      :class="{ onskillCategoriesDevOps: isDevOpsActive }"
      @click="setCurrentChart('DevOps')"
    >
      DevOps
    </a>
    <br>
    <div>
      <lu
        class="offFrontend"
        :class="{ onFrontend: isFrontActive }"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </lu><br>
      <lu
        class="offBackend"
        :class="{ onBackend: isBackActive }"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </lu><br>
      <lu
        class="offDevOps"
        :class="{ onDevOps: isDevOpsActive }"
      >
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </lu>
    </div>
    <div class="skillGraph">
      <div
        v-if="isFrontActive"
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
    </div><!--試し-->
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
      currentChart: 'Frontend'
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
    }
  },
  methods: {
    setCurrentChart(chart) {
      this.currentChart = chart;
      console.log(this.currentChart);
      console.log(this.currentChart=='Frontend');
      console.log(this.currentChart=='Backend');
      console.log(this.currentChart=='DevOps');

/*いらなかったswich            switch (this.currentChart) {
              case "Frontend":
        console.log(`${this.currentChart}Frontendye!`);
        return this.currentChart = 'chart';
        break;
          case "Backend":
        console.log(`${this.currentChart}Backendye!`);
                return this.currentChart = 'chart';

        break;

              case "DevOps":
        console.log(`${this.currentChart}DevOpsye!`);
        break;
      }*/
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
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 3px 9px #3d4666;
}

.skillExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  word-break: keep-all;
  line-height: 0.25em;
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
}

.onskillCategoriesFrontend {
  text-decoration: underline;
}

.skillCategoriesBackend {
  color: #0f8839;
  opacity: 0.75;
  text-decoration: none;
}

.onskillCategoriesBackend {
  text-decoration: underline;
}

.skillCategoriesDevOps {
  color: #571083;
  opacity: 0.75;
  text-decoration: none;
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

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

</style>

