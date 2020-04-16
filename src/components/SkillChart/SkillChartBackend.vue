<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'SkillChartBackend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL'],
        datasets: [
          {
            label: 'Backend',
            data: [20, 70, 60, 80],
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
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
