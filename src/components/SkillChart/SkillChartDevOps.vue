<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'SkillChartDevOps',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub', 'Firebase'],
        datasets: [
          {
            label: 'DevOps',
            data: [20, 20, 80, 80, 40],
            backgroundColor: [
              'rgba(87, 16, 131, 0.25)',
            ],
            pointBackgroundColor: [
              'rgba(87, 16, 131, 0.75)',
              'rgba(87, 16, 131, 0.75)',
              'rgba(87, 16, 131, 0.75)',
              'rgba(87, 16, 131, 0.75)',
              'rgba(87, 16, 131, 0.75)',
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
    this.getDSkillScores()
    this.getDSkillName()
    this.renderChart(this.data, this.options)
      // this.$store.dispatch('updateSkillScores');
      // this.$store.getters.getSkillScores[0].Java.name
  },
  methods:{
    // storeからscore
    getDSkillScores(){
      const skillDScore=this.$store.getters.devScore
      this.data.datasets[0].data=skillDScore
    },
    // storeからname
    getDSkillName(){
      const skillDName=this.$store.getters.devName
      this.data.labels=skillDName
    }
  }
}
</script>
