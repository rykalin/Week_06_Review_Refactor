
$('#fahrenheit_to_celsius').on('click', function() {  //function starts whenn button is clicked

  var temp = parseFloat($('#temperature').val());  //establish var temp and converts string to float, and sets to float

  var convertedTemp = (temp - 32) * 5/9;  //converted temp var is added and its formula

  backgroundChange(temp); //background change function is called with temp variable, with argument

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(temp)) { // if statement, is not a numbers

    addError();///calls adderror function

  } else { ///otherwise do this

    $('#result').html(temp + "&deg;F = " + convertedTemp + "&deg;C"); //calls result id and changes text var 

  }
});


$('#celsius_to_fahrenheit').on('click', function() { //when button is clicked func

  var temp = parseFloat($('#temperature').val()); //.val sets the value

  var convertedTemp = temp * 9 / 5 + 32; 

  backgroundChange(convertedTemp); //parameter??

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(temp)) {

    addError();

  } else {

    $('#result').html(temp + "&deg;C = " + convertedTemp + "&deg;F");

  }
});


function backgroundChange(temp) {


  $('body').attr('class', ''); // select body and clear out the classes

  if (temp < 50) {

    $('body').addClass('cold');

  } else if (temp >= 50 && temp <= 70) {

    $('body').addClass('mild');

  } else if (temp > 70) {

    $('body').addClass('hot');

  }
}

//define adderror function 
function addError() {

  $('#temperature').addClass('error');

  $('.error-message').fadeIn(500).html('Please enter a value.');

}


function clearError() { //clear out the error styles, 

  $('.error-message').fadeOut(500);


  $('#temperature.error').removeClass('error');

}


$('#temperature').on('keyup', function() {  //select #temperature, when keys are released, run the fuctions

  $('#result').html('');  //change result to display nothing

  clearError();  //run the clearerror function

});
