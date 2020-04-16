<template>
  <div
    class="footerSection"
  >
    <!--https://cleysense.com/blog/smooth-scroll-with-vuejs/-->
    <a
      v-smooth-scroll
      href="#Main"
    >
      <img
        id="footerScroll"
        alt="top"
        src="../assets/up.png"
      >
    </a>
    <div class="footerCopyright">
      ©︎Seattleconsultig
    </div>
    <br>
  </div>
</template>

,
<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footerSection {
  text-align: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#80e1f7, #06c1e6);
}

#footerScroll {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-size: cover;
  border: px solid #80e1f7;
}

.footerCopyright {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12pt;
  line-height: 0.25em;
  word-break: keep-all;
}
</style>
