<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'SkillChartFrontend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'SCSS', 'Vue'],
        datasets: [
          {
            label: 'Frontend',
            data: [30, 20, 30, 40, 50],
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
