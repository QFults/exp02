
document.getElementById('increment').addEventListener('click', event => {
  
  axios.get('/increment')
    .then(response => {
      document.getElementById('count').textContent = response.data.count
    })
    .catch(err => console.error(err))

})

document.getElementById('decrement').addEventListener('click', event => {
  axios.get('/decrement')
    .then(response => {
      document.getElementById('count').textContent = response.data.count
    })
    .catch(err => console.error(err))
})

document.getElementById('addFood').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/foods', {
    food: document.getElementById('food').value
  })
    .then(response => {
      document.getElementById('foods').innerHTML = ''
      let foods = response.data.foods

      foods.forEach(food => {
        let foodElem = document.createElement('li')
        foodElem.textContent = food
        document.getElementById('foods').append(foodElem)
      })
    })
    .catch(err => console.error(err))
})

axios.get('/count')
  .then(response => {
    document.getElementById('count').textContent = response.data.count
  })
  .catch(err => console.error(err))

axios.get('/foods')
  .then(response => {
    let foods = response.data.foods

    foods.forEach(food => {
      let foodElem = document.createElement('li')
      foodElem.textContent = food
      document.getElementById('foods').append(foodElem)
    })
  })
  .catch(err => console.error(err))
