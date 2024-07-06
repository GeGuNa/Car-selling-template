

var noclick = 0;

function display_menu(){
 
 if (noclick == 0) {
    document.body.style = 'overflow:hidden;max-height:100%;max-width:100%;';
    noclick = 1;
 } else {
    document.body.style = '';
    noclick = 0;
 } 
   
  var s1zdco1 = document.querySelectorAll('.pfixed1_mn')[0]
  
  s1zdco1.classList.toggle('cdisplno')
  
  
  
}
