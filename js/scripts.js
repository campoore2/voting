var age = parseInt(prompt("What is your current age?"));

$(function(){
  if(age >= 18) {
    $(".adult").show();
  } else {
    $(".minor").show();
  }
})
