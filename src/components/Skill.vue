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
      @click="setCurrentChart('bbbb')"
    >
      Frontend
    </a>
    <a
      href=""
      class="skillCategoriesBackend"
    >
      Backend
    </a>
    <a
      href=""
      class="skillCategoriesDevOps"
    >
      DevOps
    </a>
    <br>
    <div class="skillListFrontend">
      <span class="skillFrontend">HTML</span>
      <span class="skillFrontend">CSS</span>
      <span class="skillFrontend">JavaScript</span>
      <span class="skillFrontend">SCSS</span>
      <span class="skillFrontend">Vue</span>
    </div>
    <div class="skillListBackend">
      <span class="skillBackend">Java</span>
      <span class="skillBackend">Ruby</span>
      <span class="skillBackend">RubyOnRails</span>
      <span class="skillBackend">MySQL</span>
    </div>
    <div class="skillListDevOps">
      <span class="skillDevOps">Linux</span>
      <span class="skillDevOps">Node</span>
      <span class="skillDevOps">Git</span>
      <span class="skillDevOps">GitHub</span>
      <span class="skillDevOps">Firebase</span>
    </div>
    <div class="skillGraph">
      <div id="SkilChartFrontend">
        <SkilChartFrontend />
      </div>
      <div id="SkilChartBackend">
        <SkilChartBackend />
      </div>
      <div id="SkilChartDevOps">
        <SkilChartDevOps />
      </div>
    </div><!--試し-->
  </div>
</template>

<script>
import SkilChartFrontend from './SkilChartFrontend.vue'
import SkilChartBackend from './SkilChartBackend.vue'
import SkilChartDevOps from './SkilChartDevOps.vue'

export default {
  name: "Skill",
  components: {
    SkilChartFrontend,
    SkilChartBackend,
    SkilChartDevOps
  },
  data: function () {
    return {
      currentChart: 'front'
    }
  },
  methods: {
    setCurrentChart(chart) {
      console.log(chart);
      this.currentChart = chart;
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

.skillListFrontend {
  opacity: 0.85;
  display: inline-block;
  height: 30px;
  border-radius: 20%;
}

.skillListBackend {
  color: #0f8839;
  opacity: 0.25;
  background: #0f8839;
  display: inline-block;
  height: 30px;
  border-radius: 20%;
}

.skillListDevOps {
  color: #571083;
  background: #571083;
  opacity: 0.25;
  display: inline-block;
  height: 30px;
  border-radius: 20%;
}

.skillFrontend {
  background: rgba(241, 6, 6, 0.278);
  margin: 10px;
  color: rgba(241, 6, 6, 0.678);
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

