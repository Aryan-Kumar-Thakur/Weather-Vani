const cityName=document.getElementById("cityName")
const submitbtn=document.getElementById("submitBtn")
const city_name=document.getElementById("city_name")
const temp_status=document.getElementById("temp_status")
const temp_real_value=document.getElementById("temp_real_value")
const datahide = document.querySelector(".middle_layer")

const getinfo = async (event) => {
    event.preventDefault();
    let cityval=cityName.value;
    if(cityval === ""){
        city_name.innerText= `Please write the city name before search`
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=76974d1390f3e5c2311fb02b1cb7d223&units=metric`;
            const response = await fetch(url);
            const data= await response.json();
            const arrData = [data];
            city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            const tempmood= arrData[0].weather[0].main;
            if(tempmood=="Sunny"){
                temp_status.innerHTML= "<img src='images/sunny.png' alt='Sunny' class='img-fluid' title='Sunny'>"
            }
            else if(tempmood=="Clouds"){
                temp_status.innerHTML= "<img src='images/cloudy.png' alt='Coudy' class='img-fluid' title='Cloudy'>"
            }
            else if(tempmood=="Rain"){
                temp_status.innerHTML= "<img src='images/rainy.png' alt='Rainy' class='img-fluid' title='Rainy'>"
            }
            else if(tempmood=="Haze"){
                temp_status.innerHTML= "<img src='images/haze.png' alt='Haze' class='img-fluid' title='Haze'>"
            }
            else{
                temp_status.innerHTML= "<img src='images/others.jpg' alt='Other' class='img-fluid' title='Other'>"
            }
            datahide.classList.remove("data_hide")
        }
        catch{
            city_name.innerText= `Please write the city name Properly`
        }
    }
}

submitbtn.addEventListener('click',getinfo);