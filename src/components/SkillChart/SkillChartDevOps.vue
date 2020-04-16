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
            data: [30, 20, 30, 40, 50],
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
            stepSize:10,
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
