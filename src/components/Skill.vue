<template>
  <div class="skillSection">
    <div class="skillTitle">
      梶尚洋
    </div>
    <div class="skillExplain">
      seattleconslting
    </div>
    <label class="gitHubLabel">Github</label>
    <a
      class="gitHubLink"
      href="https://github.com/takahiro-kaji-1122/portfolio"
    >
      github.com/takahiro-kaji-1122
    </a>
    <br>
    <a
      href=""
      class="skillCategoriesFrontend"
    >
      skillCategoriesFrontend
    </a>
    <a
      href=""
      class="skillCategoriesBackend"
    >
      skillCategoriesBackend
    </a>
    <a
      href=""
      class="skillCategoriesDevOps"
    >
      skillCategoriesDevOps
    </a>
    <br>
    <div class="skillListFrontend">
      skillListFrontend
    </div>
    <div class="skillListBackend">
      skillListBackend
    </div>
    <div class="skillListDevOps">
      skillListDevOps
    </div>
    <div class="skillGraph">
      グラフの表示
    </div><!--試し-->
  </div>
</template>

<script>
export default {
  name: "Skill"
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skillSection {
  background: red;
  width: 100%;
  height: auto;
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
  filter: alpha(opacity=25);
}

.skillCategoriesBackend {
  color: #0f8839;
  filter: alpha(opacity=25);
}

.skillCategoriesDevOps {
  color: #571083;
  filter: alpha(opacity=25);
}

.skillListFrontend {
  color: #b51a1a;
  filter: alpha(opacity=75);
  background: #b51a1a;
  display: inline-block;
  height: 30px;
}

.skillListBackend {
  color: #0f8839;
  filter: alpha(opacity=75);
  background: #0f8839;
  display: inline-block;
  height: 30px;
}

.skillListDevOps {
  color: #571083;
  filter: alpha(opacity=75);
  background: #571083;
  display: inline-block;
  height: 30px;
}

</style>

