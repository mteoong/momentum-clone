const weather_key = "1986480656ec490d950204923202611";
const image_key = "r-nC73nZ5X1_8DWlOiNlyeBg4UEgXGcIxzFL4nvafiE";

export function getCurrentLocation() {
    const error_handler = () => {
        console.log("Failed to get location.");
      };

    if (window.navigator.geolocation) {
        return new Promise((resolve, reject) => {
            let lat, lon, weather_url;
            navigator.geolocation.getCurrentPosition(
                pos => {
                    resolve([
                        (lat = pos.coords.latitude),
                        (lon = pos.coords.longitude),
                        (weather_url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_key}`)
                    ])
                },
                error => {
                    reject(error_handler);
                  }
            );
        });
    }
}

export function callWeatherAPI(val) {
    const url = val[2];
    return fetch(url).then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            return Promise.reject("Weather fetch request failed.");
        }
    }).catch(error => console.log("Error: ", error));
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
