const daysOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let day= document.getElementById("day");
let month= document.getElementById("month");
let year= document.getElementById("year");
let male= document.getElementsByName('male');
let female= document.getElementsByName("female")

  function dayOfTheWeek () {
    CC= parseInt(year.substring(0,2));
    YY= parseInt(year.substring(0,2));
    MM= parseInt(month);
    DD= parseInt(date);
    d= (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
    console.log(d);
    return (Math.floor(d));
  }



  var formData= document.getElementById('form');
formData.addEventListener('submit', function (){
  var myDay= day.value;
  var myMonth= month.value;
  var myYear= year.value;

  if (myYear.trim()==="" || myDay.trim()==="" || myMonth.trim()===""){
    alert("Entry cannot be empty");
  }
  else if (myYear.length !=4){
    alert("Year must have 4 digits");
  }
  else{
    return true;
  }
  let results= d;
  });


formData.onsubmit ()
if (dayOfWeek[0] && maleNames[0] ) {
  alert("Kwasi");
}