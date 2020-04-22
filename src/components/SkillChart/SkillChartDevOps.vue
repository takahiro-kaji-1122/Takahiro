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
    computed:{
    score(){
      return this.$store.getters.getSkillScores[0].Java.name
    }
  },
  mounted () {
    this.renderChart(this.data, this.options);
    this.$store.dispatch('updateSkillScores');
//    console.log($store.state.skillScores);
    const Java = this.$store.getters.getSkillScores[0].Java.name;
      console.log(Java)
  }
}
</script>
