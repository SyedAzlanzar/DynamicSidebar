var btn = document.querySelector(".fa-bars")
var sidebar = document.getElementById("sidebar")

var bar_div = document.getElementById('bar-div')


// toggling-function
btn.addEventListener('click' , function(){
  
  if(sidebar.style.width == "280px"){
    // alert('hi')
sidebar.style.width = "66px"
sidebar.style.transition = "0.5s all"
sidebar.style.padding = '0px'
bar_div.style.marginRight = '0px'
bar_div.style.justifyContent = 'center'

var logoname = document.querySelector('.logo_name')
logoname.style.padding = '10px'
var logo = document.querySelector('.logo')
logo.style.display = 'none'
var name = document.querySelector('.name')
name.style.display = 'none'

var text = document.querySelectorAll('.text');

for (var i=0; i< text.length; i++) {

    text[i].style.display = 'none';
    // buttons[i].className = buttons[i].className + ' newclass';

}
  }
else{
  sidebar.style.width = '280px'
  var logo = document.querySelector('.logo')
logo.style.display = 'block'
var name = document.querySelector('.name')
name.style.display = 'block'

sidebar.style.padding = '0px 5px'
bar_div.style.marginRight = '5px'
bar_div.style.justifyContent = 'end'



var text = document.querySelectorAll('.text');


for (var i=0; i< text.length; i++) {

    text[i].style.display = 'block';
    // buttons[i].className = buttons[i].className + ' newclass';

}


}
} )