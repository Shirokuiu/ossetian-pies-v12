'use strict';

//goods
(function () {
  var goods = document.querySelectorAll('.goods__content');
  
  for (var i = 0, len = goods.length; i < len; i++) {
    var good = goods[i].querySelectorAll('.good');
    if (goods[i].children.length > 4) {
      for (var j = 0, jlen = good.length; j < jlen; j++) {
        good[j].style.marginBottom = '65px';
      };
    };
  };
})();

// .fom prefer
(function () {
  var prefer = document.querySelector('.fom__rt ul.prefer');
  
  if (prefer !== null) {
    prefer.addEventListener('click', function (evt) {
      var item = evt.target.closest('.fom__rt ul.prefer li');

      if (item) {
        var itemInput = item.querySelector('input');
        var itemSpan = item.querySelector('span');

        itemSpan.classList.toggle('check');

        if (itemSpan.classList.contains('check')) {
          itemInput.setAttribute('checked', '');
        } else {
          itemInput.removeAttribute('checked', '');
        };
      };
    });
  };
})();

// .fom privacy
(function () {
  var privacy = document.querySelector('.fom__rb div.privacy');
  
  if (privacy !== null) {
    privacy.addEventListener('click', function (evt) {
      var itemInput = this.querySelector('input');
      var itemSpan = this.querySelector('span');

      itemSpan.classList.toggle('check');

      if (itemSpan.classList.contains('check')) {
        itemInput.setAttribute('checked', '')
      } else {
        itemInput.removeAttribute('checked', '')
      };
    });
  };
})();

// good calculate
(function () {
  var calculation = document.querySelectorAll('.good div.calculation');
  var selectPrice = document.querySelectorAll('.good div.weight');
  var selectPriceWeight = document.querySelectorAll('.val-weight-js');
  var selectPriceText = document.querySelectorAll('.price-js');
  var add = document.querySelectorAll('.good div.price button');
  var basketCount = document.querySelector('.bas div p');
  
  for (var i = 0, len = calculation.length; i < len; i++) {
    calculation[i].addEventListener('click', function (evt) {
      var minus = evt.target.closest('.minus');
      var val = this.querySelector('.val-js');
      var plus = evt.target.closest('.plus');
      
      if (minus) {
        if (parseInt(val.textContent, 10) > 1) {
          val.textContent = parseInt(val.textContent, 10) - 1;
        }
      };
      
      if (plus) {
        val.textContent = parseInt(val.textContent, 10) + 1;
      }
    });
  };
  
  for (var i = 0, len = selectPrice.length; i < len; i++) {
    selectPriceWeight[i].textContent = selectPrice[i].dataset.weightMiddle;
    selectPriceText[i].textContent = selectPrice[i].dataset.priceMiddle;
    selectPrice[i].classList.add('mid');
    
    selectPrice[i].addEventListener('click', function (evt) {
      var minus = evt.target.closest('.minus');
      var val = this.querySelector('.val-weight-js');
      var plus = evt.target.closest('.plus');
      var itCart = this.closest('.good');
      var price = itCart.querySelector('.price-js');
      
      if (minus) {
        if (this.classList.contains('mid')) {
          this.classList.remove('mid');
          this.classList.add('min');
          val.textContent = this.dataset.weightMin;
          price.textContent = this.dataset.priceMin;
        } else if (this.classList.contains('max')) {
          this.classList.remove('max');
          this.classList.add('mid');
          val.textContent = this.dataset.weightMiddle;
          price.textContent = this.dataset.priceMiddle;
        }
      };
      
      if (plus) {
        if (this.classList.contains('mid')) {
          this.classList.remove('mid');
          this.classList.add('max');
          val.textContent = this.dataset.weightMax;
          price.textContent = this.dataset.priceMax;
        } else if (this.classList.contains('min')) {
          this.classList.remove('min');
          this.classList.add('mid');
          val.textContent = this.dataset.weightMiddle;
          price.textContent = this.dataset.priceMiddle;
        }
      }
    });
  };
  
  for (var i = 0, len = add.length; i < len; i++) {
    add[i].addEventListener('click', function () {
      var itCart = this.closest('.good');
      var itCount = itCart.querySelector('.val-js');
      
      basketCount.textContent = parseInt(basketCount.textContent, 10) + parseInt(itCount.textContent, 10);
    });
  }
})();

// t-basket calculate
(function () {
  var table = document.querySelector('.t-basket__content');
  
  if (table !== null) {
    var tableTotalPrice = document.querySelectorAll('.total-table-price-js');
    var tablePrice = document.querySelectorAll('.price-js');
    var calulate = document.querySelectorAll('.t-basket__content div.row-c div.calculate');
    var totalPrice = document.querySelector('.total-price-js');
    var totalPriceSale = document.querySelector('.total-price-sale-js');
    var del = document.querySelectorAll('.t-basket__content div.row-c div.sum button');
    var saleCheckbox = document.querySelector('.fom__rt ul.prefer li:last-child');

    var calculateTableSum = function (elem) {
      var sum = 0;

      for (var i = 0, len = elem.length; i < len; i++) {
        sum = sum + parseInt(elem[i].textContent, 10);
      };

      return sum;
    };

    for (var i = 0, len = tablePrice.length; i < len; i++) {
      tableTotalPrice[i].textContent = tablePrice[i].textContent;
    };

    table.dataset.price = calculateTableSum(tableTotalPrice);
    totalPrice.textContent = table.dataset.price;
    totalPriceSale.textContent = table.dataset.price;

    for (var i = 0, len = calulate.length; i < len; i++) {
      calulate[i].addEventListener('click', function (evt) {
        var minus = evt.target.closest('.minus');
        var val = this.querySelector('p');
        var plus = evt.target.closest('.plus');
        var itCart = this.closest('.t-basket__content div.row-c');
        var itPrice = itCart.querySelector('.price-js');
        var itTotalPrice = itCart.querySelector('.total-table-price-js');

        if (minus) {
          if (parseInt(val.textContent, 10) > 1) {
            val.textContent = parseInt(val.textContent, 10) - 1;
            itTotalPrice.textContent = parseInt(itTotalPrice.textContent, 10) - parseInt(itPrice.textContent, 10);
            table.dataset.price = calculateTableSum(tableTotalPrice);
            totalPrice.textContent = table.dataset.price;
            totalPriceSale.textContent = table.dataset.price;
          }
        };

        if (plus) {
          val.textContent = parseInt(val.textContent, 10) + 1;
          itTotalPrice.textContent = parseInt(itTotalPrice.textContent, 10) + parseInt(itPrice.textContent, 10);
          table.dataset.price = calculateTableSum(tableTotalPrice);
          totalPrice.textContent = table.dataset.price;
          totalPriceSale.textContent = table.dataset.price;
        }
      });
    };

    for (var i = 0, len = del.length; i < len; i++) {
      del[i].addEventListener('click', function () {
        var cart = this.closest('.t-basket__content div.row-c');
        var cartTP = cart.querySelector('.total-table-price-js');

        cart.remove();
        cartTP.textContent = 0;
        table.dataset.price = calculateTableSum(tableTotalPrice);
        totalPrice.textContent = table.dataset.price;
        totalPriceSale.textContent = table.dataset.price;
      });
    };

    saleCheckbox.addEventListener('click', function () {
      if (!(this.querySelector('span').classList.contains('check'))) {
        totalPriceSale.textContent = parseInt(totalPriceSale.textContent, 10) - (parseInt(totalPriceSale.textContent, 10) * 10 / 100);
      } else {
        totalPriceSale.textContent = table.dataset.price;;
      };
    });
  }
})();

// .page-header__m-b-slider
(function () {
  var slider = document.querySelector('.page-header__m-b-slider');
  
  if (slider !== null) {
    $(document).ready(function(){
      $(".page-header__m-b-slider").owlCarousel({
        slideTransition: 'ease',
        smartSpeed: 200,
        autoplay: false,
        nav: true,
        dots: true,
        responsive: {
          320: {
            items: 1
          }
        }
      });
    });
  }
})();

// slider discount
(function () {
  var slider = document.querySelector('.page-header__b-slider');
  
  if (slider !== null) {
    $(document).ready(function(){
      $(".page-header__b-slider").owlCarousel({
        slideTransition: 'ease',
        smartSpeed: 200,
        autoplay: false,
        nav: true,
        dots: false,
        responsive: {
          1700: {
            items: 10
          },
          1440: {
            items: 9
          },
          1270: {
            items: 8
          },
          1200: {
            items: 7
          },
          1100: {
            items: 6
          },
          1000: {
            items: 5
          },
          720: {
            items: 4
          },
          560: {
            items: 3
          },
          460: {
            items: 2
          },
          320: {
            items: 1
          }
        }
      });
    });
  }
})();

// .r__slider
(function () {
  var slider = document.querySelector('.r__slider');
  
  if (slider !== null) {
    $(document).ready(function(){
      $(".r__slider").owlCarousel({
        slideTransition: 'ease',
        smartSpeed: 200,
        autoplay: false,
        nav: true,
        dots: true,
        responsive: {
          320: {
            items: 1
          }
        }
      });
    });
  }
})();

// .hit__slider
(function () {
  var slider = document.querySelector('.hit__slider');
  
  if (slider !== null) {
    $(document).ready(function(){
      $(".hit__slider").owlCarousel({
        slideTransition: 'ease',
        smartSpeed: 200,
        autoplay: false,
        nav: true,
        dots: true,
        responsive: {
          1750: {
            items: 4.1,
            margin: 70
          },
          1270: {
            items: 3.05,
            margin: 40
          },
          820: {
            items: 2.06,
            margin: 40,
            dots: false
          },
          360: {
            items: 1.06,
            margin: 40,
            dots: false
          },
          320: {
            items: 1.07,
            margin: 40,
            dots: false
          }
        }
      });
    });
  }
})();
