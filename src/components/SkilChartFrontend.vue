<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'SkilChartFrontend',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'SCSS', 'Vue'],
        datasets: [
          {
            label: 'Frontend',
            data: [3, 2, 3, 4, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
          },
        ]
      },
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
