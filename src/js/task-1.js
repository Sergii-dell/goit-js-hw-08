"use strict";     /* использование последней  версии  js  */

/* const bootonn = document.querySelector(".js-target-btn");       //  вешаем  на  аштиемель связь   события  клика  
const DobSlooch = document.querySelector(".js-target-btn1");
const SnjtSlooch = document.querySelector(".js-target-btn2");



const foonction = () => {       //  функция  действия  при нажатие  на  кнопку  
  console.log('Click!');
};

DobSlooch.addEventListener('click', ()=>{             
  bootonn.addEventListener('click', foonction);        //  команда  на  слушанье  кнопки  
});

SnjtSlooch.addEventListener('click', ()=>{  
  bootonn.removeEventListener('click', foonction);    //  отмена  слушанья  кнопки    
});

 // const formms = document.querySelector(".formm");

 // formms.addEventListener('submit', event =>{
 //  event.preventDefault();                                неперезагружать страницу при отправке  формы  
 // const forrmme = event.target.elements;
 // console.log(forrmme.subscription.name);
 // }); 

 const formRef = document.querySelector( ".formm" );

 formRef.addEventListener('submit', event =>{            //  change     input   
  event.preventDefault();                               // неперезагружать страницу при отправке  формы   
  const Reff = event.target;
  const formData = new FormData(Reff);

  const Objectt = {};

  formData.forEach((value, key) =>{
    console.log('value:', value);
    console.log('key:', key);

    Objectt[key] = value;
  });
   
     console.log(Objectt);

     console.log(formRef.elements);

 });



 const bttn = document.querySelector(".btnn");


 const foww = document.querySelector( ".formm2" );

 foww.addEventListener('change', e =>{            //  change     input   
 
    console.log(e);

    bttn.disabled =!e.target.checked;
   
  });
   
  
  bootonn.addEventListener('focus', ()=>{       //  виделение  чево либо 

    console.log('Получил фокус');

  });

  bootonn.addEventListener('blur', ()=>{       

    console.log('Потерял фокус');

  });  */ 
  
  const bootonn = document.querySelector(".js-target-btn");       //  вешаем  на  аштиемель связь   события  клика  
  const bttn = document.querySelector(".btnn");         //  активность кнопки  отправки  формы
  const foww = document.querySelector( ".slua" );     //  поставить  галочку  для  активности  кнопки  отправки
  const propic = document.querySelector( ".propis" );     //  слушатель наберания 
  const formRef = document.querySelector( ".formm" );     

  formRef.addEventListener('submit', event =>{            //  слушатель события кнопки отправки формы 
    event.preventDefault();                               // неперезагружать страницу при отправке  формы   
    const Reff = event.target;
    const formData = new FormData(Reff);
  
    const Objectt = {};
  
    formData.forEach((value, key) =>{
      console.log('value:', value);
      console.log('key:', key);
  
      Objectt[key] = value;
    });
     
       console.log(Objectt);
  
       console.log(formRef.elements);
  
   });

  
  bootonn.addEventListener('focus', fcc );      //  слушатель события выдилил ли клиент 
  bootonn.addEventListener('blur', bcc );        //  слушатель события убрали ли выдиление
   //foww.addEventListener('change ', ccc );
 //propic.addEventListener('input ', pcc );


  function fcc(ev1){
    console.log("Получил фокус");
  } 

  function bcc(ev2){
    console.log("Потерял фокус");
  } 

  //function pcc(ev3){
   // propic.textContent = ev3.target.value;
 // } 

 // function ccc(ev4){
  //  bttn.disabled =!ev4.target.checked;
 // } 

 foww.addEventListener('change', e1 =>{            //  слушатель события поставили ли галочку, связана с активированием кнопки   
 
  console.log(e1);

  bttn.disabled =!e1.target.checked;
 
});

propic.addEventListener('input', ev1 =>{            //  слушатель собітия что наберают в строке  
 
  

  propic.textContent = ev1.target.value;

  console.log(ev1);
 
});

const outputRef = document.querySelector('.js-output');  //  отрисовщик в браузере

const butT = document.querySelector('.but');  //  отрисовщик в браузере

window.addEventListener('keypress', event => {    //  слушатель  события браузера  клавиатуры только  символов
  console.log(event);

  outputRef.textContent += event.key;       //  отресовка  на екране браузера символов
});

window.addEventListener('keydown', event => {    //  слушатель  события браузера  клавиатуры служебных и символьных клавиш
  console.log(event);
});

butT.addEventListener('click', () => {    //  очистка писаного
  outputRef.textContent = '';       //  отрисовка пустой страки 
});



const Box = document.querySelector('.js-box');  //  анимация  наведения

Box.addEventListener('mouseenter', event =>{    //  применение СSS  свойств при наведении  мышки
  console.log(event);
  const box = event.target;
  box.classList.add('box--active');
});

Box.addEventListener('mouseleave', event =>{   //  применение СSS  свойств при уберании    мышки
  const box = event.target;                     //  mouseover   чуствует  детей  
  box.classList.remove('box--active');
});
                                                      //   Модальное  окно

// const openModalBtn = document.querySelector('button [data-action = "open-modal"]');   //  Открытие
// openModalBtn.addEventListener('click', () => {
 // document.body.classList.add('show-modal');

//  window.addEventListener('keydown', onPressEscape );                     //  Закрытиемодального окна  от  нажатия клавишы Escape
    
// });

// const closeModalBtn = document.querySelector('button [data-action = "close-modal"]',);   //  Закрытие модального  окна  от  кнопки
// closeModalBtn.addEventListener('click', () => {
 // document.body.classList.remove('show-modal');
 // window.removeEventListener('keydown', onPressEscape );
// });


// const backdropRef = document.querySelector('.js-backdrop');     //  Закрытие  модального  окна  от  клика по  фону
// backdropRef.addEventListener('click', event => {
  //if(event.target === event.currentTarget){
  //  document.body.classList.remove('show-modal');
  //  window.removeEventListener('keydown', onPressEscape );
 // }
//});


//function onPressEscape (event){                                  //  Закрытиемодального окна  от  нажатия клавишы Escape  глобальная функция 
 // if(event.code === 'Escape'){
 //   document.body.classList.remove('show-modal');
 // }
//};

                                                        //   Модальное  окно  правельная запись

   const openModalBtn = document.querySelector('button [data-action="open-modal"]');
   const closeModalBtn = document.querySelector('button [data-action="close-modal"]');
   const backdropRef = document.querySelector('.js-backdrop');

   openModalBtn.addEventListener('click', onOpenModal);
   closeModalBtn.addEventListener('click', onCloseModal);
   backdropRef.addEventListener('click', onBackDropClick);

   function onOpenModal(){
     window.addEventListener('keydown', onPressEscape);
     document.body.classList.add('show-modal');
   }
   function onCloseModal(){
     window.removeEventListener('keydown', onPressEscape);
     document.body.classList.remove('show-modal');
   }
   function onBackDropClick(event){
     if(event.target===event.currentTarget){
       onCloseModal();
     }
   }
   function onPressEscape(event){
     if(event.code==='Escape'){
       onCloseModal();
     }
   }
