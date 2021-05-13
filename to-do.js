let arr = [];
const to_do = document.querySelector('.js-to-do-list');


function createfn(e) {
  e.preventDefault();
  let input = document.querySelector('.input');
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const span = document.createElement('span');
  li.classList.add('list-style')
  li.id = arr.length;
  span.innerText = input.value;
  btn.innerText = '삭제버튼';
  span.style.color = '#fff';
  li.appendChild(span)
  li.appendChild(btn);
  to_do.appendChild(li);
  input.value = '';
  storage( span )
  btn.addEventListener('click',btnEvent);
}

function storage( span ) {
  let obj = {
    id : arr.length,
    content : span.innerText
  }
  arr.push(obj);

  localStorage.setItem('list',JSON.stringify(arr));
  
}

function getstorage() {
  let storage = JSON.parse(localStorage.getItem('list'));
  storage.map((e) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const span = document.createElement('span');
    li.id = e.id;
    btn.innerText = '삭제버튼'
    span.innerText = e.content;
    span.style.color = '#fff';
    li.appendChild(span);
    li.appendChild(btn);
    to_do.appendChild(li);
    let obj = {
      id : arr.length,
      content : span.innerText
    }
    arr.push(obj);
    btn.addEventListener('click',btnEvent);
  })
}

function btnEvent() {
  let parentNode = this.parentNode;
  parentNode.remove();
  let filter = arr.filter((e) => {
    return parseInt(parentNode.id) !== e.id;
  })
  arr = filter;
  localStorage.setItem('list',JSON.stringify(arr));
}


function blankCheck() {
  const input = document.querySelector('.input');
  const guide = document.querySelector('.guide');
  if ( input.innerText === '' ){
    guide.classList.add('guide-fade');
  }
}

function init() {
  const input = document.querySelector('.input');
  const storage = localStorage.getItem('list');
  const btn = document.querySelector('.to-do-form');
  storage !== null ? getstorage() : null;
    btn.addEventListener('submit',createfn);
  input.addEventListener('keydown',blankCheck);
}


init()