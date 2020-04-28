<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'SkillChartBackend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Backend',
            data: [],
            backgroundColor: [
              'rgba(15, 136, 57, 0.25)',
            ],
            pointBackgroundColor: [
              'rgba(15, 136, 57, 0.75)',
              'rgba(15, 136, 57, 0.75)',
              'rgba(15, 136, 57, 0.75)',
              'rgba(15, 136, 57, 0.75)',
              ],
            borderWidth: 1
          },
        ]
      },
      options: {
        scale: {
          ticks: {
            suggestedMin:0,
            suggestedMax:100,
            stepSize:20,
          }
        },
        legend: {
            display: false,
        }
      }
    }
  },
  mounted(){
    this.getBSkillScores()
    this.getBSkillName()
    this.renderChart(this.data, this.options)
      // this.$store.dispatch('updateSkillScores');
      // this.$store.getters.getSkillScores[0].Java.name
  },
  methods:{
    // storeからscore
    getBSkillScores(){
      const skillBScore=this.$store.getters.backScore
      this.data.datasets[0].data=skillBScore
    },
    // storeからname
    getBSkillName(){
      const skillBName=this.$store.getters.backName
      this.data.labels=skillBName
    }
  }

//   mounted(){

//     this.getbackScores()
//     this.renderChart(this.data, this.options)
//       // this.$store.dispatch('updateSkillScores');
//       // this.$store.getters.getSkillScores[0].Java.name
//   },
//   methods :{
//     getbackScores(){
//       const backScores = this.$store.getters.getSkillScores
//       this.data.datasets[0].data = backScores

// //    console.log($store.state.skillScores);
//     // const Java = this.$store.getters.getSkillScores[0].Java.name;
//       // console.log(this.$store.getters.getSkillScores[0])
//     },

//   }
}
</script>
