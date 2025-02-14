const key = "fa1c25f1a516495aa75132832251302";

document.getElementById("city").addEventListener("input", () => {
    query = this.value;
    
    async function autocomplete() {
        let suggestions = await fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}`);
        sugg_data = await suggestions.json()
        console.log(sugg_data);
    }
    
})

async function getData() {
    const city = document.getElementById('city').value;

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
    const data = await response.json();

    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const icon = data.current.condition.icon;
    
    document.querySelector('.weather-box').innerHTML = `
        <p>${temp}</p>
        <p>${condition}</p>
        <img src="https:${icon}" alt="Weather icon">
    `;
}