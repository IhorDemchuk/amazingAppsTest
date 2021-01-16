//Main Slider

$(document).ready(function () {
   $('.main_slider').slick({
      dots: true,
      arrows: false
   });
});
//Main Slider


//Search input
$(document).ready(function () {
   $('.header_content_search').on('click', '.header_content_search_img', function () {
      $(this).siblings('.header_content_search_input').slideToggle(200);
   });
});
//Search input

//Email Validation
function validateEmail(email) {
   var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return validEmail.test(email);
}

function validEmail() {
   var $email_result = $("#email_result");
   var email = $("#email").val();
   $email_result.text("");

   if (validateEmail(email)) {
      return
   } else {
      $email_result.text(email + " is not valid");
      $email_result.css("color", "red");
   }
   return false;
}

$("#validate").on("click", validEmail);

//Email Validation


//Name Validation
function validateName(name) {
   let validName = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig;
   return validName.test(name);
}

function validName() {
   let $name_result = $("#name_result");
   let name = $("#name").val();
   $name_result.text("");

   if (validateName(name)) {
      return
   } else {
      $name_result.text(name + " is not valid");
      $name_result.css("color", "red");
   }
   return false;
}

$("#validate").on("click", validName);

//Name Validation

//Url Validation
function validateUrl(url) {
   let validUrl = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
   return validUrl.test(url);
}

function validUrl() {
   let $url_result = $("#url_result");
   let url = $("#url").val();
   $url_result.text("");

   if (validateUrl(url)) {
      return
   } else {
      $url_result.text(url + " is not valid");
      $url_result.css("color", "red");
   }
   return false;
}

$("#validate").on("click", validUrl);

//Url Validation


//Request PopUp

$('.request_btn').click(function () {
   $("#request_main_form").show();
});
$('.close_form').click(function () {
   $("#request_main_form").hide();
})

//Request PopUp