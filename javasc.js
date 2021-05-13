function getTime() {
    const clock = document.querySelector('.clock');
    time( clock );
    setInterval(() => {
      time( clock )
    }, 1000);
}

function time( clock ) {
  const time = new Date;
  const houers = time.getHours();
  const minutes = time.getMinutes();
  const second = time.getSeconds();
  clock.innerText = `${ houers < 10 ? `0${houers}` : houers }:${ minutes < 10 ? `0${minutes}` : minutes }:${ second < 10 ? `0${second}` : second}`;
}



function submitBlock(e) {
    e.preventDefault();
    let inputval = document.querySelector('.input').value;
    localStorage.setItem('name',inputval);
}
function init(){
    //시간 불러오기
   getTime();
   if ( localStorage.getItem('name') === null ){
        const form = document.querySelector('.form');
        form.addEventListener('submit',submitBlock);
   }
   else{
    const local = document.querySelector('.local');
    const session = localStorage.getItem('name');
    local.innerText = session;
   }
   setInterval(getTime, 1000);
}

init()