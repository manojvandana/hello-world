function DOB(){
// code here
var name = document.getElementById('name').value;//String
var dob = document.getElementById('dob').value;//String
var cdate = new Date();
 alert("Name :"+name+" DOB :" +dob);
var Age = cdate.getFullYear();
var age = new Date(dob);;
if (age.getFullYear() == cdate.getFullYear() && age.getMonth() == cdate.getMonth() && age.getDate() > cdate.getDate()) {
  alert("Please select date in valid range")
} else {
alert("age :"  + (Age-age.getFullYear()))
}
var daylists = ["Sunday" , "Mon" , "Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylists[cdate.getDay()]);
}
function displayTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var date = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var day = today.getDay();
  var daylists = ["Sunday" , "Mon" , "Tuesday","Wednesday ","Thursday","Friday","Saturday"];
      h = checkHours(h);
      m = checkTime(m);
      s = checkTime(s);
  document.getElementById('id1').innerHTML = "TIME :"+h +":"+ m +":"+ s;
  document.getElementById('id2').innerHTML = "DATE :"+date +"/"+ month +"/"+ year +" "+daylists[day];
   var t = setTimeout(displayTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" +i;
  }
  return i;
}
function checkHours(i) {
  if (i > 12) {
    i = i - 12
  }
  return i;
}

function Input() {
  var input_time = document.getElementById('input').value;
  if (input_time == "") {
    alert("please select valid time");
  }
  else {
    document.getElementById('id3').innerHTML = input_time;
  }
}

$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});
$(document).ready(function gmail_Link (){
  $("td:contains('Gmail Link')").html('<a href="https://plus.google.com/u/0/113326717827553789779">Google +</a>');
})
