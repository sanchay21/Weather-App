const key = "fa1c25f1a516495aa75132832251302";

async function getData() {
    const city = document.getElementById('city').value;

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
    const data = await response.json();

    console.log(data)

    const temp = data.current.temp_c;
    const city_name = data.location.name;
    const condition = data.current.condition.text;
    const icon = data.current.condition.icon;
    
    document.querySelector('.weather-box').innerHTML = `
        <p style="font-size:54px;">${city_name} </p>
        <img src="https:${icon}" style="width:100px; height:100px;" alt="Weather icon">
        <p style="font-size:54px;">${temp}°c</p>
    `;
}