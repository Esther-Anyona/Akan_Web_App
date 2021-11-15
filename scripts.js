const daysOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var day= document.getElementById("day");
var month= document.getElementById("month");
var year= document.getElementById("year");
let d=(((year.slice(0,2)/4) - 2*(year.slice(0,2))-1)+ (5*(year.slice(2,4))/4)+ ((26*(month+1)/10)) + day) %7;
let index;
if (d==0){
  index=6;
}
console.log(4);