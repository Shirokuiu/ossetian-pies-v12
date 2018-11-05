/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
	        itemInput.setAttribute('checked', '');
	      } else {
	        itemInput.removeAttribute('checked', '');
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
	
	    var calculateTableSum = function calculateTableSum(elem) {
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
	      if (!this.querySelector('span').classList.contains('check')) {
	        totalPriceSale.textContent = parseInt(totalPriceSale.textContent, 10) - parseInt(totalPriceSale.textContent, 10) * 10 / 100;
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
	    $(document).ready(function () {
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
	    $(document).ready(function () {
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
	    $(document).ready(function () {
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
	    $(document).ready(function () {
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzU3YjU3MWE3ODU1MWM0ZWIyYTAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbImdvb2RzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbiIsImxlbmd0aCIsImdvb2QiLCJjaGlsZHJlbiIsImoiLCJqbGVuIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJwcmVmZXIiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsIml0ZW0iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiaXRlbUlucHV0IiwiaXRlbVNwYW4iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInByaXZhY3kiLCJjYWxjdWxhdGlvbiIsInNlbGVjdFByaWNlIiwic2VsZWN0UHJpY2VXZWlnaHQiLCJzZWxlY3RQcmljZVRleHQiLCJhZGQiLCJiYXNrZXRDb3VudCIsIm1pbnVzIiwidmFsIiwicGx1cyIsInBhcnNlSW50IiwidGV4dENvbnRlbnQiLCJkYXRhc2V0Iiwid2VpZ2h0TWlkZGxlIiwicHJpY2VNaWRkbGUiLCJpdENhcnQiLCJwcmljZSIsInJlbW92ZSIsIndlaWdodE1pbiIsInByaWNlTWluIiwid2VpZ2h0TWF4IiwicHJpY2VNYXgiLCJpdENvdW50IiwidGFibGUiLCJ0YWJsZVRvdGFsUHJpY2UiLCJ0YWJsZVByaWNlIiwiY2FsdWxhdGUiLCJ0b3RhbFByaWNlIiwidG90YWxQcmljZVNhbGUiLCJkZWwiLCJzYWxlQ2hlY2tib3giLCJjYWxjdWxhdGVUYWJsZVN1bSIsImVsZW0iLCJzdW0iLCJpdFByaWNlIiwiaXRUb3RhbFByaWNlIiwiY2FydCIsImNhcnRUUCIsInNsaWRlciIsIiQiLCJyZWFkeSIsIm93bENhcm91c2VsIiwic2xpZGVUcmFuc2l0aW9uIiwic21hcnRTcGVl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QUFJMUJDLGNBQUssSUFKcUI7QUFLMUJDLGVBQU0sSUFMb0I7QUFNMUJDLHFCQUFZO0FBQ1YsZ0JBQUs7QUFDSEMsb0JBQU87QUFESjtBQURLO0FBTmMsUUFBNUI7QUFZRCxNQWJEO0FBY0Q7QUFDRixFQW5CRDs7QUFxQkE7QUFDQSxFQUFDLFlBQVk7QUFDWCxPQUFJVixTQUFTL0QsU0FBU1ksYUFBVCxDQUF1QixjQUF2QixDQUFiOztBQUVBLE9BQUltRCxXQUFXLElBQWYsRUFBcUI7QUFDbkJDLE9BQUVoRSxRQUFGLEVBQVlpRSxLQUFaLENBQWtCLFlBQVU7QUFDMUJELFNBQUUsY0FBRixFQUFrQkUsV0FBbEIsQ0FBOEI7QUFDNUJDLDBCQUFpQixNQURXO0FBRTVCQyxxQkFBWSxHQUZnQjtBQUc1QkMsbUJBQVUsS0FIa0I7QUFJNUJDLGNBQUssSUFKdUI7QUFLNUJDLGVBQU0sSUFMc0I7QUFNNUJDLHFCQUFZO0FBQ1YsaUJBQU07QUFDSkMsb0JBQU8sR0FESDtBQUVKQyxxQkFBUTtBQUZKLFlBREk7QUFLVixpQkFBTTtBQUNKRCxvQkFBTyxJQURIO0FBRUpDLHFCQUFRO0FBRkosWUFMSTtBQVNWLGdCQUFLO0FBQ0hELG9CQUFPLElBREo7QUFFSEMscUJBQVEsRUFGTDtBQUdISCxtQkFBTTtBQUhILFlBVEs7QUFjVixnQkFBSztBQUNIRSxvQkFBTyxJQURKO0FBRUhDLHFCQUFRLEVBRkw7QUFHSEgsbUJBQU07QUFISCxZQWRLO0FBbUJWLGdCQUFLO0FBQ0hFLG9CQUFPLElBREo7QUFFSEMscUJBQVEsRUFGTDtBQUdISCxtQkFBTTtBQUhIO0FBbkJLO0FBTmdCLFFBQTlCO0FBZ0NELE1BakNEO0FBa0NEO0FBQ0YsRUF2Q0QsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9zdGF0aWMvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzU3YjU3MWE3ODU1MWM0ZWIyYTAiLCIndXNlIHN0cmljdCc7XG5cbi8vZ29vZHNcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBnb29kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb29kc19fY29udGVudCcpO1xuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGdvb2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGdvb2QgPSBnb29kc1tpXS5xdWVyeVNlbGVjdG9yQWxsKCcuZ29vZCcpO1xuICAgIGlmIChnb29kc1tpXS5jaGlsZHJlbi5sZW5ndGggPiA0KSB7XG4gICAgICBmb3IgKHZhciBqID0gMCwgamxlbiA9IGdvb2QubGVuZ3RoOyBqIDwgamxlbjsgaisrKSB7XG4gICAgICAgIGdvb2Rbal0uc3R5bGUubWFyZ2luQm90dG9tID0gJzY1cHgnO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufSkoKTtcblxuLy8gLmZvbSBwcmVmZXJcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBwcmVmZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9tX19ydCB1bC5wcmVmZXInKTtcbiAgXG4gIGlmIChwcmVmZXIgIT09IG51bGwpIHtcbiAgICBwcmVmZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgaXRlbSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmZvbV9fcnQgdWwucHJlZmVyIGxpJyk7XG5cbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIHZhciBpdGVtSW5wdXQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIHZhciBpdGVtU3BhbiA9IGl0ZW0ucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuXG4gICAgICAgIGl0ZW1TcGFuLmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrJyk7XG5cbiAgICAgICAgaWYgKGl0ZW1TcGFuLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICAgIGl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG59KSgpO1xuXG4vLyAuZm9tIHByaXZhY3lcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBwcml2YWN5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbV9fcmIgZGl2LnByaXZhY3knKTtcbiAgXG4gIGlmIChwcml2YWN5ICE9PSBudWxsKSB7XG4gICAgcHJpdmFjeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBpdGVtSW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICB2YXIgaXRlbVNwYW4gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblxuICAgICAgaXRlbVNwYW4uY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2snKTtcblxuICAgICAgaWYgKGl0ZW1TcGFuLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICBpdGVtSW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJywgJycpXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xufSkoKTtcblxuLy8gZ29vZCBjYWxjdWxhdGVcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBjYWxjdWxhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb29kIGRpdi5jYWxjdWxhdGlvbicpO1xuICB2YXIgc2VsZWN0UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29vZCBkaXYud2VpZ2h0Jyk7XG4gIHZhciBzZWxlY3RQcmljZVdlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWwtd2VpZ2h0LWpzJyk7XG4gIHZhciBzZWxlY3RQcmljZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJpY2UtanMnKTtcbiAgdmFyIGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb29kIGRpdi5wcmljZSBidXR0b24nKTtcbiAgdmFyIGJhc2tldENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhcyBkaXYgcCcpO1xuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGN1bGF0aW9uLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY2FsY3VsYXRpb25baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgbWludXMgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5taW51cycpO1xuICAgICAgdmFyIHZhbCA9IHRoaXMucXVlcnlTZWxlY3RvcignLnZhbC1qcycpO1xuICAgICAgdmFyIHBsdXMgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5wbHVzJyk7XG4gICAgICBcbiAgICAgIGlmIChtaW51cykge1xuICAgICAgICBpZiAocGFyc2VJbnQodmFsLnRleHRDb250ZW50LCAxMCkgPiAxKSB7XG4gICAgICAgICAgdmFsLnRleHRDb250ZW50ID0gcGFyc2VJbnQodmFsLnRleHRDb250ZW50LCAxMCkgLSAxO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgXG4gICAgICBpZiAocGx1cykge1xuICAgICAgICB2YWwudGV4dENvbnRlbnQgPSBwYXJzZUludCh2YWwudGV4dENvbnRlbnQsIDEwKSArIDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VsZWN0UHJpY2UubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBzZWxlY3RQcmljZVdlaWdodFtpXS50ZXh0Q29udGVudCA9IHNlbGVjdFByaWNlW2ldLmRhdGFzZXQud2VpZ2h0TWlkZGxlO1xuICAgIHNlbGVjdFByaWNlVGV4dFtpXS50ZXh0Q29udGVudCA9IHNlbGVjdFByaWNlW2ldLmRhdGFzZXQucHJpY2VNaWRkbGU7XG4gICAgc2VsZWN0UHJpY2VbaV0uY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG4gICAgXG4gICAgc2VsZWN0UHJpY2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgbWludXMgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5taW51cycpO1xuICAgICAgdmFyIHZhbCA9IHRoaXMucXVlcnlTZWxlY3RvcignLnZhbC13ZWlnaHQtanMnKTtcbiAgICAgIHZhciBwbHVzID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcucGx1cycpO1xuICAgICAgdmFyIGl0Q2FydCA9IHRoaXMuY2xvc2VzdCgnLmdvb2QnKTtcbiAgICAgIHZhciBwcmljZSA9IGl0Q2FydC5xdWVyeVNlbGVjdG9yKCcucHJpY2UtanMnKTtcbiAgICAgIFxuICAgICAgaWYgKG1pbnVzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnbWlkJykpIHtcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ21pZCcpO1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbWluJyk7XG4gICAgICAgICAgdmFsLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LndlaWdodE1pbjtcbiAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC5wcmljZU1pbjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnbWF4JykpIHtcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ21heCcpO1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbWlkJyk7XG4gICAgICAgICAgdmFsLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LndlaWdodE1pZGRsZTtcbiAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC5wcmljZU1pZGRsZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIFxuICAgICAgaWYgKHBsdXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaWQnKSkge1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnbWlkJyk7XG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdtYXgnKTtcbiAgICAgICAgICB2YWwudGV4dENvbnRlbnQgPSB0aGlzLmRhdGFzZXQud2VpZ2h0TWF4O1xuICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LnByaWNlTWF4O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaW4nKSkge1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnbWluJyk7XG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdtaWQnKTtcbiAgICAgICAgICB2YWwudGV4dENvbnRlbnQgPSB0aGlzLmRhdGFzZXQud2VpZ2h0TWlkZGxlO1xuICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LnByaWNlTWlkZGxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYWRkLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYWRkW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGl0Q2FydCA9IHRoaXMuY2xvc2VzdCgnLmdvb2QnKTtcbiAgICAgIHZhciBpdENvdW50ID0gaXRDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy52YWwtanMnKTtcbiAgICAgIFxuICAgICAgYmFza2V0Q291bnQudGV4dENvbnRlbnQgPSBwYXJzZUludChiYXNrZXRDb3VudC50ZXh0Q29udGVudCwgMTApICsgcGFyc2VJbnQoaXRDb3VudC50ZXh0Q29udGVudCwgMTApO1xuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyB0LWJhc2tldCBjYWxjdWxhdGVcbihmdW5jdGlvbiAoKSB7XG4gIHZhciB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50LWJhc2tldF9fY29udGVudCcpO1xuICBcbiAgaWYgKHRhYmxlICE9PSBudWxsKSB7XG4gICAgdmFyIHRhYmxlVG90YWxQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3RhbC10YWJsZS1wcmljZS1qcycpO1xuICAgIHZhciB0YWJsZVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlLWpzJyk7XG4gICAgdmFyIGNhbHVsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnQtYmFza2V0X19jb250ZW50IGRpdi5yb3ctYyBkaXYuY2FsY3VsYXRlJyk7XG4gICAgdmFyIHRvdGFsUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtcHJpY2UtanMnKTtcbiAgICB2YXIgdG90YWxQcmljZVNhbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtcHJpY2Utc2FsZS1qcycpO1xuICAgIHZhciBkZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudC1iYXNrZXRfX2NvbnRlbnQgZGl2LnJvdy1jIGRpdi5zdW0gYnV0dG9uJyk7XG4gICAgdmFyIHNhbGVDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb21fX3J0IHVsLnByZWZlciBsaTpsYXN0LWNoaWxkJyk7XG5cbiAgICB2YXIgY2FsY3VsYXRlVGFibGVTdW0gPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgdmFyIHN1bSA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbGVtLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHN1bSA9IHN1bSArIHBhcnNlSW50KGVsZW1baV0udGV4dENvbnRlbnQsIDEwKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBzdW07XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0YWJsZVByaWNlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0YWJsZVRvdGFsUHJpY2VbaV0udGV4dENvbnRlbnQgPSB0YWJsZVByaWNlW2ldLnRleHRDb250ZW50O1xuICAgIH07XG5cbiAgICB0YWJsZS5kYXRhc2V0LnByaWNlID0gY2FsY3VsYXRlVGFibGVTdW0odGFibGVUb3RhbFByaWNlKTtcbiAgICB0b3RhbFByaWNlLnRleHRDb250ZW50ID0gdGFibGUuZGF0YXNldC5wcmljZTtcbiAgICB0b3RhbFByaWNlU2FsZS50ZXh0Q29udGVudCA9IHRhYmxlLmRhdGFzZXQucHJpY2U7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsdWxhdGUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNhbHVsYXRlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgbWludXMgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5taW51cycpO1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgICAgIHZhciBwbHVzID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcucGx1cycpO1xuICAgICAgICB2YXIgaXRDYXJ0ID0gdGhpcy5jbG9zZXN0KCcudC1iYXNrZXRfX2NvbnRlbnQgZGl2LnJvdy1jJyk7XG4gICAgICAgIHZhciBpdFByaWNlID0gaXRDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS1qcycpO1xuICAgICAgICB2YXIgaXRUb3RhbFByaWNlID0gaXRDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC10YWJsZS1wcmljZS1qcycpO1xuXG4gICAgICAgIGlmIChtaW51cykge1xuICAgICAgICAgIGlmIChwYXJzZUludCh2YWwudGV4dENvbnRlbnQsIDEwKSA+IDEpIHtcbiAgICAgICAgICAgIHZhbC50ZXh0Q29udGVudCA9IHBhcnNlSW50KHZhbC50ZXh0Q29udGVudCwgMTApIC0gMTtcbiAgICAgICAgICAgIGl0VG90YWxQcmljZS50ZXh0Q29udGVudCA9IHBhcnNlSW50KGl0VG90YWxQcmljZS50ZXh0Q29udGVudCwgMTApIC0gcGFyc2VJbnQoaXRQcmljZS50ZXh0Q29udGVudCwgMTApO1xuICAgICAgICAgICAgdGFibGUuZGF0YXNldC5wcmljZSA9IGNhbGN1bGF0ZVRhYmxlU3VtKHRhYmxlVG90YWxQcmljZSk7XG4gICAgICAgICAgICB0b3RhbFByaWNlLnRleHRDb250ZW50ID0gdGFibGUuZGF0YXNldC5wcmljZTtcbiAgICAgICAgICAgIHRvdGFsUHJpY2VTYWxlLnRleHRDb250ZW50ID0gdGFibGUuZGF0YXNldC5wcmljZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHBsdXMpIHtcbiAgICAgICAgICB2YWwudGV4dENvbnRlbnQgPSBwYXJzZUludCh2YWwudGV4dENvbnRlbnQsIDEwKSArIDE7XG4gICAgICAgICAgaXRUb3RhbFByaWNlLnRleHRDb250ZW50ID0gcGFyc2VJbnQoaXRUb3RhbFByaWNlLnRleHRDb250ZW50LCAxMCkgKyBwYXJzZUludChpdFByaWNlLnRleHRDb250ZW50LCAxMCk7XG4gICAgICAgICAgdGFibGUuZGF0YXNldC5wcmljZSA9IGNhbGN1bGF0ZVRhYmxlU3VtKHRhYmxlVG90YWxQcmljZSk7XG4gICAgICAgICAgdG90YWxQcmljZS50ZXh0Q29udGVudCA9IHRhYmxlLmRhdGFzZXQucHJpY2U7XG4gICAgICAgICAgdG90YWxQcmljZVNhbGUudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnByaWNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRlbC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZGVsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2FydCA9IHRoaXMuY2xvc2VzdCgnLnQtYmFza2V0X19jb250ZW50IGRpdi5yb3ctYycpO1xuICAgICAgICB2YXIgY2FydFRQID0gY2FydC5xdWVyeVNlbGVjdG9yKCcudG90YWwtdGFibGUtcHJpY2UtanMnKTtcblxuICAgICAgICBjYXJ0LnJlbW92ZSgpO1xuICAgICAgICBjYXJ0VFAudGV4dENvbnRlbnQgPSAwO1xuICAgICAgICB0YWJsZS5kYXRhc2V0LnByaWNlID0gY2FsY3VsYXRlVGFibGVTdW0odGFibGVUb3RhbFByaWNlKTtcbiAgICAgICAgdG90YWxQcmljZS50ZXh0Q29udGVudCA9IHRhYmxlLmRhdGFzZXQucHJpY2U7XG4gICAgICAgIHRvdGFsUHJpY2VTYWxlLnRleHRDb250ZW50ID0gdGFibGUuZGF0YXNldC5wcmljZTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzYWxlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoISh0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrJykpKSB7XG4gICAgICAgIHRvdGFsUHJpY2VTYWxlLnRleHRDb250ZW50ID0gcGFyc2VJbnQodG90YWxQcmljZVNhbGUudGV4dENvbnRlbnQsIDEwKSAtIChwYXJzZUludCh0b3RhbFByaWNlU2FsZS50ZXh0Q29udGVudCwgMTApICogMTAgLyAxMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG90YWxQcmljZVNhbGUudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnByaWNlOztcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbi8vIC5wYWdlLWhlYWRlcl9fbS1iLXNsaWRlclxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlcl9fbS1iLXNsaWRlcicpO1xuICBcbiAgaWYgKHNsaWRlciAhPT0gbnVsbCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLnBhZ2UtaGVhZGVyX19tLWItc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgc2xpZGVUcmFuc2l0aW9uOiAnZWFzZScsXG4gICAgICAgIHNtYXJ0U3BlZWQ6IDIwMCxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gc2xpZGVyIGRpc2NvdW50XG4oZnVuY3Rpb24gKCkge1xuICB2YXIgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX19iLXNsaWRlcicpO1xuICBcbiAgaWYgKHNsaWRlciAhPT0gbnVsbCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAkKFwiLnBhZ2UtaGVhZGVyX19iLXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIHNsaWRlVHJhbnNpdGlvbjogJ2Vhc2UnLFxuICAgICAgICBzbWFydFNwZWVkOiAyMDAsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgIDE3MDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTQ0MDoge1xuICAgICAgICAgICAgaXRlbXM6IDlcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEyNzA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA4XG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICBpdGVtczogN1xuICAgICAgICAgIH0sXG4gICAgICAgICAgMTEwMDoge1xuICAgICAgICAgICAgaXRlbXM6IDZcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA1XG4gICAgICAgICAgfSxcbiAgICAgICAgICA3MjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA0XG4gICAgICAgICAgfSxcbiAgICAgICAgICA1NjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICA0NjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gLnJfX3NsaWRlclxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yX19zbGlkZXInKTtcbiAgXG4gIGlmIChzbGlkZXIgIT09IG51bGwpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgJChcIi5yX19zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBzbGlkZVRyYW5zaXRpb246ICdlYXNlJyxcbiAgICAgICAgc21hcnRTcGVlZDogMjAwLFxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgIDMyMDoge1xuICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyAuaGl0X19zbGlkZXJcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGl0X19zbGlkZXInKTtcbiAgXG4gIGlmIChzbGlkZXIgIT09IG51bGwpIHtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgJChcIi5oaXRfX3NsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgIHNsaWRlVHJhbnNpdGlvbjogJ2Vhc2UnLFxuICAgICAgICBzbWFydFNwZWVkOiAyMDAsXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgMTc1MDoge1xuICAgICAgICAgICAgaXRlbXM6IDQuMSxcbiAgICAgICAgICAgIG1hcmdpbjogNzBcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEyNzA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAzLjA1LFxuICAgICAgICAgICAgbWFyZ2luOiA0MFxuICAgICAgICAgIH0sXG4gICAgICAgICAgODIwOiB7XG4gICAgICAgICAgICBpdGVtczogMi4wNixcbiAgICAgICAgICAgIG1hcmdpbjogNDAsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgMzYwOiB7XG4gICAgICAgICAgICBpdGVtczogMS4wNixcbiAgICAgICAgICAgIG1hcmdpbjogNDAsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICBpdGVtczogMS4wNyxcbiAgICAgICAgICAgIG1hcmdpbjogNDAsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9tYXJrdXAvc3RhdGljL2pzL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9