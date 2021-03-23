const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['red', 'green', 'blue'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'red',
        'green',
        'blue'
      ],
      borderColor: [
        'red',
        'green',
        'blue'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


console.time();



// Algorithm to time goes here
let array = []
for(let i = 0; i < 10000; i++) {
  array.push(i)
}
console.log(array.length)




console.timeEnd();