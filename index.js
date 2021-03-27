document.querySelector(".pro-icon").addEventListener("click", function() {

  var classListLength = document.querySelector(".jsOnClick").classList.length;

  if (classListLength === 1) {
    document.querySelector(".jsOnClick").classList.add("jsClicked");
    document.querySelector(".jsOnClick").style.display = "block";
    shareIconAnimatioOnClick();
  } else {
    document.querySelector(".jsOnClick").classList.remove("jsClicked");
    document.querySelector(".jsOnClick").style.display = "none";
    shareIconAnimatioRemoveOnClick();
  }

});

function shareIconAnimatioOnClick() {
  document.querySelector("#shareIcon").attributes[1].value = "#fff";
  document.querySelector(".pro-icon").style.backgroundColor = "#6d7f97";
}

function shareIconAnimatioRemoveOnClick() {
  document.querySelector("#shareIcon").attributes[1].value = "#6E8098";
  document.querySelector(".pro-icon").style.backgroundColor = "#ecf2f8";
}



// // Additional animations, Below code are not part of challenge
//
//
// //Share icon animation
// document.querySelector(".pro-icon").addEventListener("mouseover", function(){
//   document.querySelector(".pro-icon").classList.add("hover");
//
//   setTimeout(function(){
//     document.querySelector(".pro-icon").classList.remove("hover");
//   },500);
// },false);
//
//
//
// //Social icons animation
// var n = document.querySelectorAll(".social-icons").length;
//
// for (var i=0; i<n; i++){
//   document.querySelectorAll(".social-icons")[i].addEventListener("mouseover", function(){
//     var socialIconsId = this.id;
//
//     if(socialIconsId === "socialIcon1"){
//       document.querySelectorAll(".social-icons")[0].classList.add("hover");
//       document.querySelector("#facebookSocialIcon").attributes[1].value = "#3B5998";
//     }
//     else if (socialIconsId === "socialIcon2"){
//         document.querySelectorAll(".social-icons")[1].classList.add("hover");
//         document.querySelector("#twitterSocialIcon").attributes[1].value = "#1DA1F2";
//     }
//     else{
//       document.querySelectorAll(".social-icons")[2].classList.add("hover");
//       document.querySelector("#pinterestSocialIcon").attributes[1].value = "#E60023";
//     }
//
//     setTimeout(function(){
//       document.querySelectorAll(".social-icons")[0].classList.remove("hover");
//       document.querySelectorAll(".social-icons")[1].classList.remove("hover");
//       document.querySelectorAll(".social-icons")[2].classList.remove("hover");
//       document.querySelector("#facebookSocialIcon").attributes[1].value = "#fff";
//       document.querySelector("#twitterSocialIcon").attributes[1].value = "#fff";
//       document.querySelector("#pinterestSocialIcon").attributes[1].value = "#fff";
//     },400);
//
//   }, false);
// }
