const cityname = document.getElementById('cityname')
const city_name = document.getElementById('city_name')
const submitBtn = document.getElementById('submitBtn')
const temp_status = document.getElementById('temp_status')
const temp_real_value = document.getElementById('temp_real_value')
const middle_layer = document.querySelector('.middle_layer')

const getInfo = async (e) => {
    e.preventDefault();
    let cityval = cityname.value

    if(cityval === ""){
        city_name.innerText  = `Please write the name before search`;
        middle_layer.classList.add('data_hide')
    }else{
       try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=82781b65318d1500e64163c6b0faf44b`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data]
        city_name.innerText  = `${arrData[0].name} , ${arrData[0].sys.country}`
        temp_real_value.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;
        const tempMood = arrData[0].weather[0].main;
        if(tempMood === "Clear"){
           temp_status.innerHTML =  `<i class="fa-solid fa-sun" style="color:yellow"></i>`
        }else if(tempMood === "Clouds"){
            temp_status.innerHTML =  `<div class="fa fa-cloud clouds"></div>`
        }else if(tempMood === "Rain"){
            temp_status.innerHTML =  `<i class="fa-solid fa-cloud-showers-heavy" style="color:#ddd"></i>`
        }else if(tempMood === "Haze"){
            temp_status.innerHTML =  `<i class="fa-solid fa-smog"></i>`
        }
        middle_layer.classList.remove('data_hide')
        // console.log(data);
       } catch (error) {
        city_name.innerText  = `Please enter the city name properly`;
        middle_layer.classList.add('data_hide')
       }
    }

}

submitBtn.addEventListener('click',getInfo);