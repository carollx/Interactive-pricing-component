var switchDiscount = document.getElementById("switchDiscount");
var precoInput = document.getElementById("precoInput");
var priceText = document.getElementById("price");
var views = precoInput.value;
var viewsText = document.getElementById("views");


window.onload = function () {
  precoPorViews(views);
}

precoInput.oninput = function () {
  var value = (this.value - this.min) / (this.max - this.min) * 100
  this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, #fff ' + value + '%, white 100%)';

  if (switchDiscount.checked) {
    views = precoInput.value;
    var price = precoPorViews(views);
    calcularDesconto(price);

  } else {
    views = precoInput.value;
    precoPorViews(views);
  }
}

switchDiscount.onchange = function () {
  if (switchDiscount.checked) {
    views = precoInput.value;
    var price = precoPorViews(views);
    calcularDesconto(price);

  } else {
    views = precoInput.value;
    precoPorViews(views);
  }
}


function precoPorViews(views) {
  var price = 0;

  if (views == 1) {
    price = 8;
    views = '10k';
    viewsText.innerHTML = views + " PAGEVIEWS";
    priceText.innerHTML = '$' + price.toFixed(2) + '<span class="grayishBlueText">/ month</span>';
    return 8;
  }
  if (views == 2) {
    price = 12;
    views = '50k';
    viewsText.innerHTML = views + " PAGEVIEWS";
    priceText.innerHTML = '$' + price.toFixed(2) + '<span class="grayishBlueText">/ month</span>';
    return 12;
  }
  if (views == 3) {
    price = 16;
    views = '100k';
    viewsText.innerHTML = views + " PAGEVIEWS";
    priceText.innerHTML = '$' + price.toFixed(2) + '<span class="grayishBlueText">/ month</span>';
    return 16;
  }
  if (views == 4) {
    price = 24;
    views = '500k';
    viewsText.innerHTML = views + " PAGEVIEWS";
    priceText.innerHTML = '$' + price.toFixed(2) + '<span class="grayishBlueText">/ month</span>';
    return 24;
  }
  if (views == 5) {
    price = 36;
    views = '1M';
    viewsText.innerHTML = views + " PAGEVIEWS";
    priceText.innerHTML = '$' + price.toFixed(2) + '<span class="grayishBlueText">/ month</span>';
    return 36;
  }
}

function calcularDesconto(price) {
  var discountValue = 0
  var discountPrice = 0
  discountValue = price * 0.25;
  discountPrice = price - discountValue;

  priceText.innerHTML = '$' + discountPrice.toFixed(2) + '<span class="grayishBlueText">/ month</span>';
  return priceText.innerHTML;
}