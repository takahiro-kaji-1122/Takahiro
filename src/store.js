import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex) //vuexが読み込まれている

// storeをエクスポート
export default new Vuex.Store({ //ここに実装を書く
  state: {
    skillScores: [],
  },
  getters: {
    getSkillScores(state){
      return state.skillScores
    }
  },
  mutations: {
    //参考：https://vuex.vuejs.org/ja/guide/mutations.html
    setSkillScores (state, payload){
      state.skillScores = payload.graphScore;
    //参考
    //setMonths(state, payload) {
    //state.months = payload.months}
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
      const res = await axios.get('https://us-central1-portfolio-12283.cloudfunctions.net/skills')
      //resにScoreを配列でブッコム？
      /*多分これの変わり
        then((response) => {
        response.data.forEach((skill) {
        取得したデータを１件ずつ配列に設定する*/
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
