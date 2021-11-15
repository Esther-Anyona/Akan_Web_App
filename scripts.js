const daysOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let day= document.getElementById("day");
let month= document.getElementById("month");
let year= document.getElementById("year");
// let d=Math.floor(((year.slice(0,2)/4) - 2*(year.slice(0,2))-1)+ (5*(year.slice(2,4))/4)+ ((26*(month+1)/10)) + day) %7;
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
  });

