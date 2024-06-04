input = document.querySelector('#input')
calculate = document.querySelector('#calculate')
max = document.querySelector('#max')
min = document.querySelector('#min')

calculate.addEventListener('click',()=>{
    const numbers = input.value.split(",")
    min.innerHTML = "Min value = " + Math.min(...numbers)
    max.innerHTML = "Max value = " + Math.max(...numbers)
})
