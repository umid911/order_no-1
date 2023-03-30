var en = {
  'главная': 'Home',
  'сервис': 'Service',
  'информация': 'Information',
  'Запись на процедуру': 'Sing up for the prosedure',
  'Немного о нас': 'A little about us',
  'У нас работают три проффессиональных мастера, к Вашим услугам три кабинета.': 'Three professional masters work for us, three cabinets are at your service.',
  'Мы работаем с 10:00 до 20:00.':'We work from 10:00 to 20:00.',
  'Вместе с Вами мы стремимся к красоте и комфорту.':'Together with you we strive for beauty and comfort.',
  'СТУДИЯ ЛАЗЕРНОЙ ЭПИЛЯЦИИ':'LASER EPILATION STUDIO',
  'Преимущество, Эффективность, Цена':'Benefit, Efficiency, Price',
  'Лазерная эпиляция - одна из самых востребованных косметических процедур': 'Laser hair removal is one of the most requested cosmetic procedures.',
  'УЗНАТЬ БОЛЬШЕ':'TO LEARN MORE',
  'КОНТАКТЫ:':'CONTACTS:',
  'НА ГЛАВНУЮ':'TO THE MAIN',
};
var ru = {
  'Home': 'главная',
  'Service': 'сервис',
  'Information': 'информация',
  'Sing up for the prosedure': 'Запись на процедуру',
  'A little about us': 'Немного о нас',
  'Three professional masters work for us, three cabinets are at your service.' : 'У нас работают три проффессиональных мастера, к Вашим услугам три кабинета.',
  'We work from 10:00 to 20:00.':'Мы работаем с 10:00 до 20:00.',
  'Together with you we strive for beauty and comfort.': 'Вместе с Вами мы стремимся к красоте и комфорту.',
  'LASER EPILATION STUDIO':'СТУДИЯ ЛАЗЕРНОЙ ЭПИЛЯЦИИ',
  'Benefit, Efficiency, Price':'Преимущество, Эффективность, Цена',
  'TO LEARN MORE': 'УЗНАТЬ БОЛЬШЕ',
  'CONTACTS:':'КОНТАКТЫ:',
  'TO THE MAIN':'НА ГЛАВНУЮ'
};

let btn = document.querySelector('.btn');
let links = document.querySelectorAll('.header__nav-link');
let linksMain = document.querySelectorAll('.main__servis-info');
let linkMaininfo = document.querySelectorAll('.main__nav-us'); 
let linkMainDescription = document.querySelector('.main__nav-description');
let linkMainWord = document.querySelector('.main__nav-word');
let linkMainDesc = document.querySelector('.main__nav-desc');
let linkMainLink = document.querySelector('.main__nav-link');
let linkMainTel = document.querySelector('.main__servis-tel');




btn.addEventListener('click', (e)=>{
  e.preventDefault();
  
  btn.classList.toggle('active');
  change()
  changeMain()
  changeMain2()
  changeMain3()
  changeMain4()
  changeMain5()
  changeMain6()
  changeMain7()
})

function change() { 
  if ( btn.classList.contains('active')) {
    links.forEach(link => {
      for (const key in en) {
        if(link.innerHTML.toLowerCase() == key.toLowerCase()){
          link.innerHTML = en[key];
        }
      }
    })
  }else{
    links.forEach(link => {
      for (const key in ru) {
        if(link.innerHTML.toLowerCase() == key.toLowerCase()){
          link.innerHTML = ru[key];
        }
      }
    })
  }
 }

function changeMain() { 
  if ( btn.classList.contains('active')) {
    linksMain.forEach(linkM => {
      for (const key in en) {
        if(linkM.innerHTML.toLowerCase() == key.toLowerCase()){
          linkM.innerHTML = en[key];
        }
      }
    })
  }else{
    linksMain.forEach(linkM => {
      for (const key in ru) {
        if(linkM.innerHTML.toLowerCase() == key.toLowerCase()){
          linkM.innerHTML = ru[key];
        }
      }
    })
  }
 }
 
function changeMain2() { 
  if ( btn.classList.contains('active')) {
    linkMaininfo.forEach(linkN => {
      for (const key in en) {
        if(linkN.innerHTML.toLowerCase() == key.toLowerCase()){
          linkN.innerHTML = en[key];
        }
      }
    })
  }else{
    linkMaininfo.forEach(linkN => {
      for (const key in ru) {
        if(linkN.innerHTML.toLowerCase() == key.toLowerCase()){
          linkN.innerHTML = ru[key];
        }
      }
    })
  }
 }
function changeMain3() { 
  if ( btn.classList.contains('active')) {
      for (const key in en) {
        if(linkMainDescription.innerHTML.toLowerCase() == key.toLowerCase()){
          linkMainDescription.innerHTML = en[key];
        }
      }
  }else{
      for (const key in ru) {
        if(linkMainDescription.innerHTML.toLowerCase() == key.toLowerCase()){
          linkMainDescription.innerHTML = ru[key];
        }
      }
  }
 }
function changeMain4() { 
  if ( btn.classList.contains('active')) {
      for (const key in en) {
        if(linkMainWord.innerHTML.toLowerCase() == key.toLowerCase()){
          linkMainWord.innerHTML = en[key];
        }
      }
  }else{
      for (const key in ru) {
        if(linkMainWord.innerHTML.toLowerCase() == key.toLowerCase()){
          linkMainWord.innerHTML = ru[key];
        }
      }
  }
 }
function changeMain5() { 
  if ( btn.classList.contains('active')) {
      for (const key in en) {
        if(linkMainDesc.innerHTML.toLowerCase() == key.toLowerCase()){
          linkMainDesc.innerHTML = en[key];
        }
      }
  }else{
      for (const key in ru) {
        if(linkMainDesc.innerHTML.toLowerCase() == key.toLowerCase()){
          linkMainDesc.innerHTML = ru[key];
        }
      }
  }
 }
function changeMain6() { 
  if ( btn.classList.contains('active')) {
      for (const key in en) {
        if(linkMainLink.innerHTML.toLowerCase() == key.toLowerCase()){
          linkMainLink.innerHTML = en[key];
        }
      }
  }else{
      for (const key in ru) {
        if(linkMainLink.innerHTML.toLowerCase() == key.toLowerCase()){
          linkMainLink.innerHTML = ru[key];
        }
      }
  }
 }
function changeMain7() { 
  if ( btn.classList.contains('active')) {
      for (const key in en) {
        if(linkMainTel.innerHTML.toLowerCase() == key.toLowerCase()){
          linkMainTel.innerHTML = en[key];
        }
      }
  }else{
      for (const key in ru) {
        if(linkMainTel.innerHTML.toLowerCase() == key.toLowerCase()){
          linkMainTel.innerHTML = ru[key];
        }
      }
  }
 }



