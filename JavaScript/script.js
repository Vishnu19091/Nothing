'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
<article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${+(
          data.population / 1000000
        ).toFixed(1)} Million People</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].symbol} ${
    data.currencies[0].name
  }</p>
        <p class="country__row"><span>🏛️</span>${data.capital}</p>
        <p class="country__row"><span>📞</span>+${data.callingCodes[0]}</p>
        <p class="country__row"><span>Other Names: </span>${
          data.altSpellings[0]
        }, ${data.altSpellings[1]}</p>
        
      </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = `Something went wrong!`) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

/*
///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(
              data.population / 1000000
            ).toFixed(1)} Million People</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
*/

/*
//Callback Hell
const getCountryAndNeighbour = function (country) {
  //AJAX call Country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render Country 1
    renderCountry(data);

    //Get Neighbour counrtry
    const [neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('uae');
getCountryAndNeighbour('bharat');
getCountryAndNeighbour('usa');

/////////////////////////
//Consuming Promises
//Chaining Promises
//Handling errors

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// getCountryData('portugal');

/////Promises
const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);

//Consuming Promises
const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      console.log(data);
      if (!neighbour) return;

      //Country 2 neighbour
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err.message} :(`);
      renderError(`Something went wrong: ${err.message} Try Again!`);
    })
    .finally(() =>{
  countriesContainer.style.opacity = 1;
    })
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

//Creating Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve('You Win!!');
//   } else {
//     reject('You Lost :)');
//   }
// });

// lotteryPromise.then(res => console.log(res))
// .catch(err => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
    // navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    let { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const res = await fetch(
      `https://geocode.xyz/${lat.toFixed(6)},${lng.toFixed(6)}?geoit=json`
    );
    if (!res.ok) throw new Error(`Problem getting location data`);
    const dataGeo = await res.json();
    console.log(dataGeo);
    if (dataGeo.country === 'India') {
      dataGeo.country = 'bharat';
    }

    //Country Data
    const resGeo = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    const data = await resGeo.json();
    console.log(data);
    renderCountry(data[0]);

    return `You're in ${dataGeo.city}, ${dataGeo.state}, ${dataGeo.country}`; //should return data present in the string literals
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong! ${err.message}`);

    //Rejected promise from async function
    throw err;
  }
};

console.log('1. Will get location');
// whereAmI()
//   .then(city => console.log(`2. ${city}`))
//   .catch(err => console.error(`2. ${err.message}`))
//   .finally(() => console.log('3. Finished getting location'));

//Returning values in asynchronous function
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2. ${city}`);
  } catch (err) {
    console.error(`2. ${err.message}`);
  }
  console.log('3. Finished getting location');
})();

//try catch example 
// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
*/

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    // console.log(data1, data2, data3);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(r => r[0].region));
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('bharat', 'italy', 'usa');