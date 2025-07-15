async function getWeather(){
    lat= document.getElementById('lat').value;
    lon= document.getElementById('lon').value;
    let API ='3304c487546ad2cf3d18ace543f4acbf'
    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`
    let res = await fetch(URL)
    let data = await res.json()
    console.log(data)
    document.getElementById('cou').textContent=data.sys.country
    document.getElementById('cit').textContent=data.name
    document.getElementById('temp').textContent=data.main.temp
    document.getElementById('ws').textContent=data.wind.speed
    document.getElementById('hum').textContent=data.main.humidity
}