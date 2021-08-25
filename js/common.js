$(document).ready(function () {
   $('.mob__header').on('click', function () {
      $('.mob__menu').toggleClass('active');
   });
   $('.slider__wrap').slick({
      slidesToShow: 3,
      arrows: false,
      dots: true,
      centerMode: true,
      variableWidth: true,
      responsive: [
         {
           breakpoint: 900,
           settings: {
            variableWidth: false,
            slidesToShow: 2,
           }
         },
         {
            breakpoint: 500,
            settings: {
            variableWidth: false,
            slidesToShow: 1
      }
    }
       ]
    });


    
   
});

const contrabas = document.getElementsByClassName
    ('contentBx');

    for (i = 0; i<contrabas.length; i++ ){
      contrabas[i].addEventListener('click', function(){
         this.classList.toggle('active')
      })
    };

   
    let btns = document.querySelectorAll("*[data-modal-btn]");


    for(let i = 0; i<btns.length; i++) {
        btns[i].addEventListener('click', function() {
            let name = btns[i].getAttribute('data-modal-btn');
            let smodal = document.querySelector("[data-modal-window='"+name+"']");
            smodal.style.display = "block";
            let close = smodal.querySelector(".modalClose");
            close.addEventListener('click', function() {
               smodal.style.display = "none";
            })
        })
    };

    window.onclick = function(closeAll) {
       if(closeAll.target.hasAttribute('data-modal-window')) {
          let modals = document.querySelectorAll("*[data-modal-window]");
          for(let i = 0; i<modals.length; i++) {
            modals[i].style.display = "none";
          }
       }
    }


    
    