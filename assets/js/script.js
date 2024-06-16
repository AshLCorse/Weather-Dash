const city = "Denver";
let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=142fd521b11b6265b5f9c625dcbf7c87&units=imperial`;
fetch(requestUrl)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      alert(`Error:${response.statusText}`);
    }
  })
  .then(function (data) {
    console.log("Fetch Response \n-------------");
    console.log(data);
  });
requestUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=39.73&lon=104.99&appid=142fd521b11b6265b5f9c625dcbf7c87&units=imperial";
fetch(requestUrl)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      alert(`Error:${response.statusText}`);
    }
  })
  .then(function (data) {
    console.log("Fetch Response \n-------------");
    console.log(data);
  });

// function weatherFetchApi() {
//   $.ajax({
//     method: "GET",
//     url: "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={142fd521b11b6265b5f9c625dcbf7c87}&units=imperial",
//     headers: { "X-Api-Key": "142fd521b11b6265b5f9c625dcbf7c87" },
//     contentType: "application/json",
//     success: function (result) {
//       console.log("weather api", result[0]);

//       // console.log('weight only', result[0].characteristics.weight)
//       //let weight = result[0].characteristics.weight;
//       console.log(temperature.value);
//       //let speed = result[0].characteristics.top_speed;
//       //console.log("speed", speed);
//       // if (
//       //   result[0].characteristics.height === null ||
//       //   result[0].characteristics.height === undefined
//       // )
//       //   console.log("height only", result[0].characteristics.height);
//     },
//     error: function ajaxError(jqXHR) {
//       console.error("Error: ", jqXHR.responseText);
//     },
//   });
//   // createAnimalCard(animals)
//   // note to bryan. information coming out of the api will be an array
//   // animals = [name, height, weight, speed]
// }

// weatherFetchApi();
