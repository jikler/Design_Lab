$('.header-block__nav a').click(function() {
	$('.header-block__nav a').removeClass('nav-active');
	$(this).addClass('nav-active');
});

// ползунок старт
var input1 = document.getElementById('price1');
var input2 = document.getElementById('price2');

price1.addEventListener('input', function (e) {
  var value = parseInt(e.target.value);
  if(Number.isFinite(value)) {
    price2.value == price1.value;
  } else {
    price2.value = '';
  }
});

price2.addEventListener('input', function (e) {
  var value = parseInt(e.target.value);
  if(Number.isFinite(value)) {
    price1.value = price2.value;
  } else {
    price1.value = '';
  }
});
// ползунок конец

// input +- start
 $(document).ready(function() {
     $('.input-number__minus').click(function () {
         var $input = $(this).parent().find('#input-number');
         var count = parseInt($input.val()) - 1;
         count = count < 1 ? 1 : count;
         $input.val(count);
         $input.change();
         return false;
     });
     $('.input-number__plus').click(function () {
         var $input = $(this).parent().find('#input-number');
         $input.val(parseInt($input.val()) + 1);
         $input.change();
         return false;
     });
 });
// input +- end


function numformat(){
var val=$("#price1").val();
val=val.replace(/[^0-9\s]/g, '');
val = val.replace(/(\d\d)(\d\d)/g, '$1 $2')
$("#price1").val(val);
}

$(document).ready(function(){
   setInterval(numformat, 10);
});

// file upload start

// file upload end

// custom select start
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  xz = document.getElementsByClassName("arrow");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
      xz[i].classList.remove("select-arrow-rotate");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
// custom select end

// spin arrow start
$('.select-selected').click(function() {
 $('.arrow').toggleClass('select-arrow-rotate');
});

// spin arrow end

// showpass start
$('body').on('click', '.showpass', function(){
  if ($('#password-input').attr('type') == 'password'){
    $(this).addClass('view');
    $('#password-input').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#password-input').attr('type', 'password');
  }
  return false;
});
// showpass end

// regard start

// regard end

// gallery start
let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}
// gallery end


// toggle class container start
// $(window).on('resize', function(e){
//      if (window.matchMedia('(min-width: 768px)').matches) {
//         $(".container-fluid").removeClass("container-fluid").addClass("container");
//     }
//     else if(window.matchMedia('(max-width: 768px)').matches) {
//         $(".container").removeClass("container").addClass("container-fluid");
//     }
// });

// $(document).ready(function(){
//   $(window).resize();
// });
// toggle class container end

// main slider start
// $(document).ready(function($) {
//     $('.main').slick({
//         arrows: false,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         // autoplay: true,
//         fade: true,
//         cssEase: 'ease-in-out',
//         dots: false,
//         speed: 1300,
//         // focusOnSelect: true,
//         autoplaySpeed: 3000,
//         responsive: [
//     {
//     breakpoint: 1300,
//     settings: {
//      slidesToShow: 1,
//      slidesToScroll: 1
//     }
//     },
//     {
//     breakpoint: 1200,
//     settings: {
//      slidesToShow: 1,
//      slidesToScroll: 1
//     }
//     },
//     {
//     breakpoint: 992,
//     settings: {
//      slidesToShow: 1,
//      slidesToScroll: 1
//     }
//     },
//     {
//     breakpoint: 576,
//     settings: {
//     slidesToShow: 1,
//     slidesToScroll: 1
//       }
//     }]
//   });
// });
// main slider end

// nav fixed start
// $(window).on('scroll', function(e){
//   if($(this).scrollTop()>1){
//     $('.header').addClass('header-fixed'),
//     $('.header-block__img').addClass('w-size');
//     $('.section-top__fix').addClass('m-top');
//   } else {
//     $('.header').removeClass('header-fixed'),
//     $('.header-block__img').removeClass('w-size');
//     $('.section-top__fix').removeClass('m-top');
//   }
// });

// $(document).ready(function(){
//   setTimeout(function() {
//     $(window).scroll();
//   }, 0);
// });

// $('.header-block__nav-mobile').on('click', () => {
//   if($(".header-block__nav-mobile-ul").hasClass("menu-nav_active")) {
//     $('.header').css('position', 'fixed');
//   } else {
//     $('.header').css('position', '');
//   }
// })
// nav fixed end

// input focus
$(".register-input__width input, .register-input__width select").on("focus",function(e){
      $(this).addClass('input-active');
  });

$(".register-input__width input, .register-input__width select").on("blur",function(e){
      $(this).removeClass('input-active');
  });
// input focus

// fix item card
$(document).ready(function() {
  $('.category-block__item').on('click', function() {
    $(this).find('a.link-block').get(0).click();
    // console.log('работает');
  });
});
// fix item card

// maskedinput
$('[name="phone"]').inputmask({"mask": "+7 999 999 99 99"});
// maskedinput

  





  




