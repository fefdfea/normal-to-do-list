function init() {
  background();
}

function background() {
  const back = document.querySelector('.background');
  const imgVal = 3;
  let random = Math.floor(Math.random() * 3);
  back.style.backgroundImage = `url(./${random + 1}.jpg)`
}


init ();