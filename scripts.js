const url = "https://api.openweathermap.org/data/2.5/weather?"

const apikey = "16f00dd6edca31d9934c7fd9cdfba77c"

const form = document.querySelector('.input-form')
const inputCity = document.querySelector('.input-city')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const temp = document.querySelector('.temp')
const sky = document.querySelector('.sky')
const minMax = document.querySelector('.min-max')

// função buscar clima na API -- https://openweathermap.org/
async function buscarClima(cidade) {
    const apiUrl = `${url}q=${cidade}&units=metric&appid=${apikey}`
    //console.log(apiUrl)
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    city.innerText = data.name
    country.innerText = data.sys.country
    temp.innerText = `${Math.round(data.main.temp)} °c`
    sky.innerText = data.weather[0].main
    minMax.innerText = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`
}

form.addEventListener('click', (e) => {
    e.preventDefault()
    fn_clear()
    if (inputCity.value !== '') {
        buscarClima(inputCity.value) 
    }
})

fn_clear = () => {
    city.innerText = ''
    country.innerText = ''
    temp.innerText = ''
    sky.innerText = ''
    minMax.innerText = ''
}