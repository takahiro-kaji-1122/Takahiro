<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'SkillChartFrontend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Frontend',
            data: [],
            backgroundColor: [
              'rgba(241, 6, 6, 0.25)',
            ],
            pointBackgroundColor: [
              'rgba(241, 6, 6, 0.25)',
              'rgba(241, 6, 6, 0.25)',
              'rgba(241, 6, 6, 0.25)',
              'rgba(241, 6, 6, 0.25)',
              'rgba(241, 6, 6, 0.25)',


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
    this.getFSkillScores()
    this.getFSkillName()
    this.renderChart(this.data, this.options)
      // this.$store.dispatch('updateSkillScores');
      // this.$store.getters.getSkillScores[0].Java.name
  },
  methods:{
    // storeからscore
    getFSkillScores(){
      const skillFScore=this.$store.getters.frontScore
      this.data.datasets[0].data=skillFScore
    },
    // storeからname
    getFSkillName(){
      const skillFName=this.$store.getters.frontName
      this.data.labels=skillFName
    }
  }

//   methods :{
//     getbackScores(){
//       const backScores = this.$getters.getSkillScores
//     this.data.labels = backScores
// //    console.log($store.state.skillScores);
//     // const Java = this.$store.getters.getSkillScores[0].Java.name;
//       // console.log(this.$store.getters.getSkillScores[0])
//     }
//   }
}
</script>
