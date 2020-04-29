import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex) //vuexが読み込まれている

// storeをエクスポート
export default new Vuex.Store({ //ここに実装を書く
  state: {
    skillScores: [],
    loaded: false
  },
  // getters: {
  //   getSkillScores(state){
  //     const backScoreAllay = []
  //       state.skillScores[0].skills.forEach((backScore) => {
  //       backScoreAllay.push(backScore.score);
  //     })
  //     return backScoreAllay
  //   }
  // },
  getters: {
    frontScore(state){
      const frontScoreAllay=[]
      state.skillScores[0].skills.forEach((skillInfo1)=>{
        frontScoreAllay.push(skillInfo1.score)
      })
      return frontScoreAllay
    },
    backScore(state){
      const backScoreAllay=[]
      state.skillScores[1].skills.forEach((skillInfo2)=>{
        backScoreAllay.push(skillInfo2.score)
      })
      return backScoreAllay
    },
    devScore(state){
      const devScoreAllay=[]
      state.skillScores[2].skills.forEach((skillInfo3)=>{
        devScoreAllay.push(skillInfo3.score)
      })
      return devScoreAllay
    },
    frontName(state){
      const frontNameAllay=[]
      state.skillScores[0].skills.forEach((skillInfo4)=>{
        frontNameAllay.push(skillInfo4.name)
      })
      return frontNameAllay
    },
    backName(state){
      const backNameAllay=[]
      state.skillScores[1].skills.forEach((skillInfo5)=>{
        backNameAllay.push(skillInfo5.name)
      })
      return backNameAllay
    },
    devName(state){
      const devNameAllay=[]
      state.skillScores[2].skills.forEach((skillInfo6)=>{
        devNameAllay.push(skillInfo6.name)
      })
      return devNameAllay
    }

  },

  mutations: {
    //参考：https://vuex.vuejs.org/ja/guide/mutations.html
    setSkillScores (state, payload){
      state.skillScores = payload.graphScore;
    //参考
    //setMonths(state, payload) {
    //state.months = payload.months}
    state.loaded = true

    },
  },
  actions: {
    //参考：https://vuex.vuejs.org/ja/guide/actions.html
    //getSkills(commit) {これではなくasyncで外部データを取得する
    async updateSkillScores({commit}){
      // dataのスキルを初期化する
      const graphScore = [];
      // this.skillsを一時変数のitemsに参照コピーする<なし
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      // const res = await axios.get('https://us-central1-portfolio-12283.cloudfunctions.net/skills')
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills';
      const res = await axios.get(functionsUrl);
        // 取得したデータを１件ずつ配列に設定する
      res.data.forEach((Score) => {
        graphScore.push(Score);
      });
      //skillScoresの中に配列が格納されているhttps://qiita.com/mattun_evo/items/856371651606f83fc549#%EF%BC%94vuex%E3%81%A7%E5%85%A8%E9%83%A8%E5%8F%96%E3%82%8A%E5%87%BA%E3%81%97%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86
      //mutationのsetSkillScoresにデータを渡している
      commit('setSkillScores',{graphScore});
      //コミットの参考
      //doUpdateMonths({commit}, months) {
      //commit('setMonths', { months })}
    },
  },
});
