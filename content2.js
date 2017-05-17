// MADE WITH LOVE BY @RAWNLY (rawnly.com) <fedevitale99@gmail.com>

// VARS
var pruned = toNumber($('#priceblock_ourprice').html());
var conIVA = parse(incorpora(scorpora(pruned, 22), 4));

// EXECUTION
$.each($('.a-row .a-color-price'), function(i, val) {
  var number = val.innerHTML.split('&nbsp;')[0];
  var prunedNumber = toNumber(number);
  var ivato = parse(incorpora(scorpora(prunedNumber, 22)).toFixed(2));
  val.innerHTML = "EUR " + prunedNumber + " | " + ivato;
})
$('#priceblock_ourprice').html("EUR " + pruned + " | " + conIVA)


// VARIOUS UTILITIES FUNCTIONS
function toNumber(txt) {
  var n = txt.split('EUR')[1].split('.').join('').split(',').join('.');
  n = Number(n);
  return n;
}

function parse(number) {
  number = Number(number).toLocaleString();

  var newNumber = number.split(',').join('.');
  var digits = newNumber.split('.');
  var lastDigit = digits[digits.length - 1];
  digits.pop();
  var noDecimals = digits.join('.');
  var x = [noDecimals, lastDigit];
  var n = x.join(',');
  return n;
}

$.fn.digits = function(){
    return this.each(function(){
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") );
    })
}

function scorpora(price, tax = 22) {
    tax = tax / 100;
    if (typeof price == 'number') {
        return price - ( price * tax );
    }

    return false;
}

function incorpora(price, tax = 4) {
    tax = tax / 100;

    if (typeof price == 'number') {
        return price + (price * tax);
    }

    return false;
}