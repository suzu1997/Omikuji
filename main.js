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
    // console.log('reset!');

    // location.reload(false); //リロード
    
    btn1.innerHTML = '<i class="fas fa-dog"></i>';
    btn2.innerHTML = '<i class="fas fa-cat"></i>';
    btn3.innerHTML = '<i class="fas fa-dove"></i>';
  
  });


}