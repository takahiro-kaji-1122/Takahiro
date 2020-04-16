<template>
  <div id="mainSection">
    <div id="userName">
      梶尚洋
    </div>
    <div id="companyName">
      seattleconslting
    </div>
    <img
      id="profilePicture"
      alt="人"
      src="../assets/takahiro2.png"
    >
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainSection {
  width: 100%;
  text-align: center;
  height: 100%;
  background-image: linear-gradient(#80e1f7, #06c1e6);
}

#userName {
  color: #fff;
  height: 100%;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 3px 9px #3d4666;
  padding: 50px 0 0 0;
}

#companyName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 2px 3px 9px #3d4666;
  padding: 10px 0;
}

#profilePicture {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: px solid #06c1e6;
  padding: 5px 0 10px 0;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap');

</style>

