/*
var sellTotal = 0;
for(let i = 0; i < document.getElementsByClassName('open').length; i++){
  var sell = parseInt(document.getElementsByClassName('open').item(i).innerHTML) + parseInt(document.getElementsByClassName('close').item(i).innerHTML);
  document.getElementsByClassName('sell').item(i).innerHTML = sell; 
}

for(let i =0; i < document.getElementsByClassName('sell').length; i++){
  var sell1 = parseInt(document.getElementsByClassName('sell').item(i).innerHTML)
  sellTotal = sellTotal + sell1; 
}
document.getElementById('sell4').innerHTML = sellTotal; 
*/
var open30; 
var close30; 
var sellTotal30;

var open20; 
var close20; 
var sellTotal20;

var open10; 
var close10; 
var sellTotal10;

var open5; 
var close5; 
var sellTotal5;

var open2; 
var close2; 
var sellTotal2;

var open1; 
var close1; 
var sellTotal1;

var Money30; 
var Money20; 
var Money10; 
var Money5;
var Money2; 
var Money1; 


for(let i = 0; i < document.getElementsByName('open30').length; i++){
  open30 = document.getElementsByName('open30').item(i); 
  close30 = document.getElementsByName('close30').item(i); 
  open30.addEventListener("input", add30);
  open30.addEventListener("input", addTotal);
  close30.addEventListener("input", add30);
  close30.addEventListener("input", addTotal);
}
for(let i = 0; i < document.getElementsByName('open20').length; i++){
  open20 = document.getElementsByName('open20').item(i); 
  close20 = document.getElementsByName('close20').item(i); 
  open20.addEventListener("input", add20);
  open20.addEventListener("input", addTotal);
  close20.addEventListener("input", add20);
  close20.addEventListener("input", addTotal);
}
for(let i = 0; i < document.getElementsByName('open10').length; i++){
  open10 = document.getElementsByName('open10').item(i); 
  close10 = document.getElementsByName('close10').item(i); 
  open10.addEventListener("input", add10);
  open10.addEventListener("input", addTotal);
  close10.addEventListener("input", add10);
  close10.addEventListener("input", addTotal)
}

for(let i = 0; i < document.getElementsByName('open005').length; i++){
  open5 = document.getElementsByName('open005').item(i); 
  close5 = document.getElementsByName('close005').item(i); 
  open5.addEventListener("input", add5);
  open5.addEventListener("input", addTotal);
  close5.addEventListener("input", add5);
  close5.addEventListener("input", addTotal);
}

for(let i = 0; i < document.getElementsByName('open002').length; i++){
  open2 = document.getElementsByName('open002').item(i); 
  close2 = document.getElementsByName('close002').item(i); 
  open2.addEventListener("input", add2);
  open2.addEventListener("input", addTotal);
  close2.addEventListener("input", add2);
  close2.addEventListener("input", addTotal);
}

for(let i = 0; i < document.getElementsByName('open001').length; i++){
  open1 = document.getElementsByName('open001').item(i); 
  close1 = document.getElementsByName('close001').item(i); 
  open1.addEventListener("input", add1);
  open1.addEventListener("input", addTotal);
  close1.addEventListener("input", add1);
  close1.addEventListener("input", addTotal);
}


function add30(){
  for(let i = 0; i < document.getElementsByName('open30').length; i++){
    var addingOpen = parseInt(document.getElementsByName('open30').item(i).value) || 0; //make anything in inside the open box 0 if it is not number(same for close)
    var addingClose = parseInt(document.getElementsByName('close30').item(i).value) || 0;
    OpenCloseMath(addingOpen, addingClose, 49);
    document.getElementsByClassName('sell30').item(i).innerHTML = Sell;
  }
  //looping thorugh all the open and close input to see if anything is added so the calucation can happen

  sellTotal30 = sellTotal('sell30', 7);// amount of column + 1
  document.getElementById('sell4').innerHTML = sellTotal30;
  document.getElementById('Money30').innerHTML =  (sellTotal30 * 30)||0;
 
 
}
function add20(){
  for(let i = 0; i < document.getElementsByName('open20').length; i++){
    var addingOpen = parseInt(document.getElementsByName('open20').item(i).value) || 0; //make anything in inside the open box 0 if it is not number(same for close)
    var addingClose = parseInt(document.getElementsByName('close20').item(i).value) || 0;
    OpenCloseMath(addingOpen, addingClose, 99);
    document.getElementsByClassName('sell20').item(i).innerHTML = Sell;
  }
  //looping thorugh all the open and close input to see if anything is added so the calucation can happen

  sellTotal20 = sellTotal('sell20', 8);
  document.getElementById('sell5').innerHTML = sellTotal20;
  document.getElementById('Money20').innerHTML = (sellTotal20 * 20) || 0;
}

function add10(){
  for(let i = 0; i < document.getElementsByName('open10').length; i++){
    var addingOpen = parseInt(document.getElementsByName('open10').item(i).value) || 0; //make anything in inside the open box 0 if it is not number(same for close)
    var addingClose = parseInt(document.getElementsByName('close10').item(i).value) || 0;
    OpenCloseMath(addingOpen, addingClose, 99);
    document.getElementsByClassName('sell10').item(i).innerHTML = Sell;
  }
  //looping thorugh all the open and close input to see if anything is added so the calucation can happen

  sellTotal10 = sellTotal('sell10', 15);
  document.getElementById('sell100').innerHTML = sellTotal10;
  document.getElementById('Money10').innerHTML = (sellTotal10 * 10) || 0;
}

function add5(){
  for(let i = 0; i < document.getElementsByName('open005').length; i++){
    var addingOpen = parseInt(document.getElementsByName('open005').item(i).value) || 0; //make anything in inside the open box 0 if it is not number(same for close)
    var addingClose = parseInt(document.getElementsByName('close005').item(i).value) || 0;
    OpenCloseMath(addingOpen, addingClose, 149);
    document.getElementsByClassName('sell005').item(i).innerHTML = Sell;
  }
  //looping thorugh all the open and close input to see if anything is added so the calucation can happen

  sellTotal5 = sellTotal('sell005', 20);
  document.getElementById('sell101').innerHTML = sellTotal5;
  document.getElementById('Money005').innerHTML = (sellTotal5 * 5) || 0;
}

function add2(){
  for(let i = 0; i < document.getElementsByName('open002').length; i++){
    var addingOpen = parseInt(document.getElementsByName('open002').item(i).value) || 0; //make anything in inside the open box 0 if it is not number(same for close)
    var addingClose = parseInt(document.getElementsByName('close002').item(i).value) || 0;
    OpenCloseMath(addingOpen, addingClose, 299);
    document.getElementsByClassName('sell002').item(i).innerHTML = Sell;
  }
  //looping thorugh all the open and close input to see if anything is added so the calucation can happen

  sellTotal2 = sellTotal('sell002', 18); 
  document.getElementById('sell102').innerHTML = sellTotal2;
  document.getElementById('Money002').innerHTML = (sellTotal2 * 2) || 0;
}

function add1(){
  for(let i = 0; i < document.getElementsByName('open001').length; i++){
    var addingOpen = parseInt(document.getElementsByName('open001').item(i).value) || 0; //make anything in inside the open box 0 if it is not number(same for close)
    var addingClose = parseInt(document.getElementsByName('close001').item(i).value) || 0;
    OpenCloseMath(addingOpen, addingClose, 299);
    document.getElementsByClassName('sell001').item(i).innerHTML = Sell;
  }
  //looping thorugh all the open and close input to see if anything is added so the calucation can happen
  sellTotal1 = sellTotal('sell001', 10);
  document.getElementById('sell103').innerHTML = sellTotal1;
  document.getElementById('Money001').innerHTML = (sellTotal1 * 1) || 0;
}

function addTotal(){

  var Money30 = parseInt(document.getElementsByClassName('Money').item(0).innerHTML) || 0
  var Money20 = parseInt(document.getElementsByClassName('Money').item(1).innerHTML) || 0
  var Money10 = parseInt(document.getElementsByClassName('Money').item(2).innerHTML) || 0
  var Money5 = parseInt(document.getElementsByClassName('Money').item(3).innerHTML) || 0
  var Money2 = parseInt(document.getElementsByClassName('Money').item(4).innerHTML) || 0
  var Money1 = parseInt(document.getElementsByClassName('Money').item(5).innerHTML) || 0
  MoneyTotal = Money30+Money20+Money10+Money5+Money2+Money1;
  console.log(MoneyTotal)
  document.getElementById('MoneyTotal').innerHTML = MoneyTotal;
}

function sellTotal(sellType, sellrow){
  var sell = 0
  for(let i = 0; i < sellrow; i++){
    sell = sell +  parseInt(document.getElementsByClassName(sellType).item(i).innerHTML)
  }
  
 return sell;
}
// TODO: Add special exceptions. 
//       Working with zeros. 
function OpenCloseMath(Open, Close, bookAmount){
  if(Open != 0 && Close > Open){
    return Sell = Open + (bookAmount-Close) + 1; 
  }
  else if (Open == 0 && Close > Open){
    return Sell = 1 + (bookAmount-Close)
  }
  else if((Close == 0) && Open != 0){
    return Sell = Open + 1; 
  }
  else{
  return Sell = Open - Close;
  }
}















/*
  var sell1 = parseInt(document.getElementsByClassName(sellType).item(0).innerHTML) || 0
  var sell2 = parseInt(document.getElementsByClassName(sellType).item(1).innerHTML) || 0
  var sell3 = parseInt(document.getElementsByClassName(sellType).item(2).innerHTML) || 0
  var sell4 = parseInt(document.getElementsByClassName(sellType).item(3).innerHTML) || 0
  var sell5 = parseInt(document.getElementsByClassName(sellType).item(4).innerHTML) || 0
  var sell6 = parseInt(document.getElementsByClassName(sellType).item(5).innerHTML) || 0
  var sell7 = parseInt(document.getElementsByClassName(sellType).item(6).innerHTML) || 0
  var sell8 = parseInt(document.getElementsByClassName(sellType).item(7).innerHTML) || 0
  var sell9 = parseInt(document.getElementsByClassName(sellType).item(8).innerHTML) || 0
  var sell10 = parseInt(document.getElementsByClassName(sellType).item(9).innerHTML) || 0
  var sell11 = parseInt(document.getElementsByClassName(sellType).item(10).innerHTML) || 0
  var sell12 = parseInt(document.getElementsByClassName(sellType).item(11).innerHTML) || 0
  var sell13 = parseInt(document.getElementsByClassName(sellType).item(12).innerHTML) || 0
  var sell14 = parseInt(document.getElementsByClassName(sellType).item(13).innerHTML) || 0
  var sell15 = parseInt(document.getElementsByClassName(sellType).item(14).innerHTML) || 0

  return sell1 + sell2 + sell3 + sell4 + sell5 + sell6 + sell7 + sell8 + sell9 + sell10 + sell11 + sell12 + sell13 + sell14 + sell15;
  */
