const key = '202c6f295e8d01ea65255ec9189b4902';
const weather = document.querySelector('.js-weather');
//현재 위치 알아내기
function getlocation() {
  navigator.geolocation.getCurrentPosition(succece,failed)
}

//위치 받아오기 성공
function succece(position) {
  const localtionobj = {
    latitude : position.coords.latitude,
    longitude : position.coords.longitude,
  }
  localstorage(localtionobj);
  rqueast(localtionobj.latitude,localtionobj.longitude);
}

//데이터 요청 & 적용

function rqueast(lat ,lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
  .then((data) => {
    return data.json();
  }).then((json) => {
    const temp = json.main.temp;
    const place = json.name;
    weather.innerText = `온도:${ temp }도 & 위치:${ place }`;
  })
}

//실패시 사용 함수

function failed() {
  console.log('실패');
}

//로컬스토리지 저장

function localstorage(localtionobj) {
  localStorage.setItem('localtion', JSON.stringify(localtionobj));
}

//저장되어 있을시 사용 함수
function reload() {
  const storage = JSON.parse(localstorage.getItem('localtion'));
  rqueast(storage.latitude,storage.longitude);
  
}
//첫 실행 함수
function init() {
  getlocation()
  if (localstorage.getItem('localtion' !== null)){
    reload();
  };
};


init();