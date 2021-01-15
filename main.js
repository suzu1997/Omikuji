'use strict';

{ 

  const btn1 = document.getElementById('btn1')

  btn1.addEventListener('click',() => {
    
    //確立操作
    const n = Math.random();
    if(n < 0.25) {
      btn1.textContent = '大吉'; 
    } else if(n < 0.55) {
      btn1.textContent = '中吉'; 
    } else if(n < 0.85) {
      btn1.textContent = '末吉'; 
    } else {
      btn1.textContent = '凶'; 
    }
      
  });
  const btn2 = document.getElementById('btn2')

  btn2.addEventListener('click',() => {
    
    //確立操作
    const n = Math.random();
    if(n < 0.25) {
      btn2.textContent = '大吉'; 
    } else if(n < 0.55) {
      btn2.textContent = '中吉'; 
    } else if(n < 0.85) {
      btn2.textContent = '末吉'; 
    } else {
      btn2.textContent = '凶'; 
    }
      
  });
  const btn3 = document.getElementById('btn3')

  btn3.addEventListener('click',() => {
    
    //確立操作
    const n = Math.random();
    if(n < 0.25) {
      btn3.textContent = '大吉'; 
    } else if(n < 0.55) {
      btn3.textContent = '中吉'; 
    } else if(n < 0.85) {
      btn3.textContent = '末吉'; 
    } else {
      btn3.textContent = '凶'; 
    }
      
  });
  
  const resetBtn = document.getElementById("reset");

  resetBtn.addEventListener('click',() => {
    location.reload(false);
    // const dog = document.getElementByClassName("fa-dog");
    // const cat = document.getElementByClassName("fa-cat");
    // const dove = document.getElementByClassName("fa-dove");
    // btn1.innerHTML = dog;
    // btn2.textContent = cat;
    // btn3.textContent = dove;
  });


}