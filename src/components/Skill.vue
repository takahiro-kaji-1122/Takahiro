<template>
  <div class="skillSection">
    <div class="skillTitle">
      梶尚洋
    </div>
    <br>
    <div class="skillExplain">
      seattleconslting
    </div><br>
    <label class="gitHubLabel">Github</label>
    <a
      class="gitHubLink"
      href="https://github.com/takahiro-kaji-1122/portfolio"
    >
      github.com/takahiro-kaji-1122
    </a>
    <br><br>

    <a
      href="#"
      class="skillCategoriesFrontend"
      @click="setCurrentChart('Frontend')"
    >
      Frontend
    </a>
    <a
      href="#"
      class="skillCategoriesBackend"
      @click="setCurrentChart('Backend')"
    >
      Backend
    </a>
    <a
      href="#"
      class="skillCategoriesDevOps"
      @click="setCurrentChart('DevOps')"
    >
      DevOps
    </a>
    <br>
    <div>
      <div>
        <div
          class="offFrontend"
          :class="{ onFrontend: isFrontendActive }"
        >
          <SkillFrontend />
        </div>
        <div
          class="offBackend"
          :class="{ onBackend: isBackActive }"
        >
          <lu class="skillListBackend">
            <li>Java</li>
            <li>Ruby</li>
            <li>RubyOnRails</li>
            <li>MySQL</li>
          </lu>
        </div>
        <div
          class="offDevOps"
          :class="{ onDevOps: isDevOpsActive }"
        >
          <div id="DevOps">
            <div class="skillListDevOps">
              <span class="skillDevOps">Linux</span>
              <span class="skillDevOps">Node</span>
              <span class="skillDevOps">Git</span>
              <span class="skillDevOps">GitHub</span>
              <span class="skillDevOps">Firebase</span>
            </div>
          </div>
        </div>
      </div>
      <div class="skillGraph">
        <div v-if="isFrontActive">
          <SkillChartFrontend />
        </div>
        <div v-if="isBackActive">
          <SkillChartBackend />
        </div>
        <div v-if="isDevOpsActive">
          <SkillChartDevOps />
        </div>
      </div>
    </div><!--試し-->
  </div>
</template>

<script>
import SkillChartFrontend from './SkillChart/SkillChartFrontend.vue'
import SkillChartBackend from './SkillChart/SkillChartBackend.vue'
import SkillChartDevOps from './SkillChart/SkillChartDevOps.vue'
import SkillFrontend from './SkillList/SkillFrontend.vue'


export default {
  name: "Skill",
  components: {
    SkillChartFrontend,
    SkillChartBackend,
    SkillChartDevOps,
    SkillFrontend,
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
  text-align: center;
  background: #fff;
  width: 100%;
  height: 100%;
}

.skillTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 3px 9px #191314;
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
}

.skillCategoriesBackend {
  color: #0f8839;
  opacity: 0.75;
}

.skillCategoriesDevOps {
  color: #571083;
  opacity: 0.75;
}

.offFrontend {
  opacity: 0.85;
  display: inline-block;
  height: 30px;
  border-radius: 20%;
}

/* .skillListBackend {
  color: rgba(15, 136, 57, 0.25);
  background: #0f8839;
  display: inline-block;
  height: 30px;
  border-radius: 20%;
} */

.skillListDevOps {
  color: rgba(87, 16, 131, 0.25);
  background: #571083;
  opacity: 0.25;
  display: inline-block;
  height: 30px;
  border-radius: 20%;
}

.skillFrontend {
  background: rgba(241, 6, 6, 0.25);
  margin: 10px;
  color: rgba(241, 6, 6, 0.75);
}

.skillListBackend li {
  display: inline;
  color: rgba(15, 136, 57, 0.25);
  padding: 5px 10px 5px 10px;
  font-weight: bold;
  background: rgba(15, 136, 57, 0.25);
  box-shadow: 0 0 8px gray;
  margin: 5px;
}

#SkilChartFrontend {
  width: 200px;
  height: 2000px;
}

#SkilChartBackend {
  width: 200px;
  height: 200px;
}

#SkilChartDevOps {
  width: 200px;
  height: 200px;
}

</style>

