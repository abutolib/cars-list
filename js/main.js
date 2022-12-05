// var elResult = document.querySelector('.js-result')
var elCars = document.querySelector('.js-cars')
var elForm = document.querySelector('.js-form')
var elInput = document.querySelector('.js-input')
var elInput2 = document.querySelector('.js-input2')
var elBtn1 = document.querySelector('.js-btn1')
var elBtn2 = document.querySelector('.js-btn2')


var cars = ['Kia','Lada',"Honda",'Tesla','BMW',"Mercedes"]

elCars.textContent = cars;

elForm.addEventListener('submit',function(evt){
  evt.preventDefault();
  if(elInput.value != "" &&  elInput2.value != ""){
    cars.unshift(elInput.value);
    cars.push(elInput2.value);
  }else if((elInput.value != "" && elInput2.value == "")){
    cars.unshift(elInput.value);
  }else if((elInput.value == "" && elInput2.value != "")){
    cars.push(elInput2.value);
  }
  elCars.textContent = cars;
  elInput.value = ''
  elInput2.value = ''
})

elBtn1.addEventListener('click',function(evt){
  cars.shift();
  elCars.textContent = cars;
})

elBtn2.addEventListener('click',function(evt){
  cars.pop();
  elCars.textContent = cars;
})
