import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //vuexが読み込まれている

// storeをエクスポート
export default new Vuex.Store({ //ここに実装を書く
  state: {
    skills: []
  },
  mutations: {
    addComment (state, skill){
      state.skills.push(skill)
    }
  },
  actions: {
/*    getSkills({ skill }) {
    // dataのスキルを初期化する
    this.skills = [];
    // this.skillsを一時変数のitemsに参照コピーする
    let items = this.skills;
    // axios.getを用いてデプロイ済のfunctionにアクセスする
    this.axios.get('https://us-central1-portfolio-12283.cloudfunctions.net/skills')
      .then((response) => {
        response.data.forEach(function(skill) {
          // 取得したデータを１件ずつ配列に設定する
          items.push(skill);
        })
      })
      .catch((e) => {
        alert(e);
      });
    }*/
  },
  getters: {
  },
}
)
