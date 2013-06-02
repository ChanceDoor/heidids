function switchElement(div1,div2){
  var a =  document.getElementById(div1);
  var b = document.getElementById(div2);
  a.style.display = 'inline';
  b.style.display = 'none';
  setTimeout(function(){a.style.display = 'none'; b.style.display = 'inline'},500);
};

function newWords(){
    $(".post0").html($("#content").val());
    $(".post1").animate({fontSize:'25px',opacity:0.8});
    $(".post2").animate({fontSize:'20px',opacity:0.6});
    $(".post3").animate({fontSize:'18px',opacity:0.4});
    $(".post4").animate({fontSize:'15px',opacity:0.35});
    $(".post5").animate({fontSize:'10px',opacity:0.18});
    $(".post0").animate({height:'40px'});
    $(".post6").animate({height:'0px'});
    $(".post6").slideUp();
    setTimeout("reset()",1000);
  };

  function reset(){
    $(".post6").html($(".post5").html());
    $(".post5").html($(".post4").html());
    $(".post4").html($(".post3").html());
    $(".post3").html($(".post2").html());
    $(".post2").html($(".post1").html());
    $(".post1").html($(".post0").html());
    $(".post0").html("");
    $(".post0").css({fontSize:'27px',height:'0px',opacity:'1'});
    $(".post1").css({fontSize:'27px',opacity:'1'});
    $(".post2").css({fontSize:'25px',opacity:'0.8'});
    $(".post3").css({fontSize:'20px',opacity:'0.6'});
    $(".post4").css({fontSize:'18px',opacity:'0.4'});
    $(".post5").css({fontSize:'15px',opacity:'0.35'});
    $(".post6").css({fontSize:'10px',height:'40px',opacity:'0.18',display:'inline'});
    
  } 

$(document).ready(function(){
  $("#login_link").click(function(){
    $("#sign_up_div").hide();
    $("#login_div").show();
  });

  $("#signup_link").click(function(){
    $("#login_div").hide();
    $("#sign_up_div").show();
  });

  $("html").click(function(evt){
    var target = evt.target;
    if(target.id!="login_form" && target.id != "signup_form" && target.id != "login_link" && target.id != "signup_link" && target.id != "login_username" && target.id != "login_password" && target.id != "sunspot_name" && target.id != "sunspot_username" && target.id != "sunspot_password") {
      $("#login_div").slideUp(300);
      $("#sign_up_div").slideUp(300);
    }
  });
});
