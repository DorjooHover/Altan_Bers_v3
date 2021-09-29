var sections = document.querySelectorAll("section");
onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;
  var scroll_width = document.documentElement.scrollWidth

  

  sections.forEach((section) => {
    
    
    switch(section.id){
      case 'header':
        if((scrollPosition < 480 )&&(scrollPosition >= 0)){
          var currentId = section.attributes.id.value;
          removeClassAbout();
          removeClassProduct();
          removeClassContact();
          addActiveClass(currentId);
          
          if(scrollPosition > (section.offsetTop + 80)){
            addScrollAnimation('service')
          }
        }
        break;
        case 'service_service_text':
          case 'service':
            if((scrollPosition < 2582)&&(scrollPosition >= 480)){
              currentId  = section.attributes.id.value
              
              removeClassContact()
              removeClassProduct()
              removeClassHeader()
              addActiveClass(currentId);
            }
            if(scrollPosition > (section.offsetTop+160)){
              addScrollAnimation('product')
            }
        break;
      case 'product':
        if((scrollPosition <= 3300)&&(scrollPosition>=2582)) {
          currentId = section.attributes.id.value;
          removeClassHeader();
          removeClassContact();
          removeClassAbout();
          addActiveClass(currentId);
        }
        break;
      case 'contact':
        
        if(scrollPosition >= 3300) {
          currentId = section.attributes.id.value;
          removeClassAbout();
          removeClassProduct();
          removeClassHeader();
          addActiveClass(currentId);
         
        }
        break;
        default:
          if(scroll_width >= 2000) {
            if(scrollPosition <= 3500){
              removeContact();
            }
            if(scrollPosition >= 3000){
              addContact();
            }
          } else if(scroll_width >= 1240) {
            if(scrollPosition <= 3750){
              removeContact();
            }
            if(scrollPosition >= 3550){
              addContact();
            }
          } else {
          if(scrollPosition <= 4500){
            removeContact();
          }
          if(scrollPosition >= 4000){
            addContact();
          }
          }
    }
  
  });
};

function removeClassHeader() {
  var el1 = document.querySelector('#header1');
  el1.classList.remove('active')
}
function removeClassAbout() {
  var el1 = document.querySelector('#service1');
  el1.classList.remove('active')
}
function removeClassProduct() {
  var el1 = document.querySelector('#product1');
  el1.classList.remove('active')
}
function removeClassContact() {
  var el1 = document.querySelector('#contact1');
  el1.classList.remove('active')
}
function addActiveClass(element) {
  var el = document.querySelector('#'+ element + '1');
  el.classList.add('active');
}
function addScrollAnimation(element) {
  var el2 = document.getElementById(element + '_service_text')
  el2.classList.add('animate__fadeInLeft')
}
function removeContact() {
  var el = document.getElementById("contact")
  el.style.display = 'none'
}
function addContact() {
  var el = document.getElementById("contact")
  el.style.display = 'block'
}


// hamburger button
var hamburger = document.getElementById('hamburger')
var hamburger_btns = document.getElementById("nav_btns_hamburger")
// hamburger.onclick = hamburger_display;
hamburger.addEventListener('click', () => {
  if(hamburger_btns.style.display == 'flex') {
    hamburger_display_off()
  }
  else {
    hamburger_display_on()
  }
})

hamburger_btns.addEventListener('click', () => {
  hamburger_display_off()
})
function hamburger_display_on() {
  hamburger_btns.style.display = 'flex'
}
function hamburger_display_off() {
  hamburger_btns.style.display = 'none'
}
hamburger_btns.onclick = hamburger_btn_display;
function hamburger_btn_display() {
  hamburger_btns.style.display = 'none'
}
function navbar(x) {
  x.classList.toggle('change')
}

