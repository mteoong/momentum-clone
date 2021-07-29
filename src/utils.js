const weather_key = "732e4e6b58929775651f5fc1f4e48027";
const image_key = "r-nC73nZ5X1_8DWlOiNlyeBg4UEgXGcIxzFL4nvafiE";

let lat = 37.773972;
let lon = -122.431297;
let weather_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weather_key}`;

export function getCurrLocation() {
    if ( navigator.permissions && navigator.permissions.query) {
          navigator.permissions.query({ name: 'geolocation' }).then(function(result) {
              const permission = result.state;
              if ( permission === 'granted' || permission === 'prompt' ) {
                  _onGetCurrentLocation();
              } 
          });
    } else if (navigator.geolocation) {
        _onGetCurrentLocation();
    } 
}

function _onGetCurrentLocation () {
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude; 
        weather_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weather_key}`;
    })
}

export function callWeatherApi() {
    return fetch(weather_url, {mode: 'cors'})
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          return Promise.reject("Openweathermap data unable to load");
        }
      })
      .catch(error => {return {
        "coord":{"lon":-122.4313,"lat":37.774},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"base":"stations","main":{"temp":59,"feels_like":58.96,"temp_min":54.25,"temp_max":71.26,"pressure":1016,"humidity":93},"visibility":10000,"wind":{"speed":1.99,"deg":270,"gust":7},"clouds":{"all":20},"dt":1627542491,"sys":{"type":2,"id":2017837,"country":"US","sunrise":1627564256,"sunset":1627615273},"timezone":-25200,"id":5391959,"name":"San Francisco","cod":200
      }});
}

export function callQuoteApi() {
    const quote_url = "https://api.quotable.io/random";
    return fetch(quote_url).then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            return Promise.reject("Quote fetch request failed.");
        }
    }).catch(error => console.log("Error: ", error));
}

export function imageDetails() {
    const image_url = `https://api.unsplash.com/photos/random/?client_id=${image_key}&collections=8498187&orientation=landscape`;
    return fetch(image_url).then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            return Promise.reject("Image fetch request failed.");
        }
    }).catch(error => console.log("Error: ", error));
}

export const showDropdown = (index, className) => {
    let dropdown = document.getElementsByClassName(className);
    if (dropdown[index].style.display === "block") {
      dropdown[index].style.display = "none";
    } else {
      dropdown[index].style.display = "block";
    }
  };