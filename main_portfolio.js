
///////////////////// SCROLL TO TOP BUTTON /////////////////////////////////////

var scrollToTopBtn = document.getElementById("back_to_top_btn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

///////////////////// END OF SCROLL TO TOP BUTTON //////////////////////////////

// Type animation before bootstrap animation
// var TxtRotate = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };
  
// TxtRotate.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];
  
//     if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }
  
//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
//     var that = this;
//     var delta = 300 - Math.random() * 100;
  
//     if (this.isDeleting) { delta /= 2; }
  
//     if (!this.isDeleting && this.txt === fullTxt) {
//         delta = this.period;
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.loopNum++;
//         delta = 500;
//     }
  
//     setTimeout(function() {
//         that.tick();
//     }, delta);
// };
  
// window.onload = function() {
//     var elements = document.getElementsByClassName('txt-rotate');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-rotate');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//             new TxtRotate(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid white }";
//     document.body.appendChild(css);
// };

