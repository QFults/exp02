
document.getElementById('increment').addEventListener('click', event => {
  
  axios.get('/increment')
    .then(response => {
      document.getElementById('count').textContent = response.data.count
    })
    .catch(err => console.error(err))

})

axios.get('/count')
  .then(response => {
    document.getElementById('count').textContent = response.data.count
  })
  .catch(err => console.error(err))
