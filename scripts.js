function akanName(){
  var year= document.getElementById("year");
  var month= document.getElementById("month");
  var day= document.getElementById("day");
  var CC= parseInt(year.value.slice(0,2));
  var YY= parseInt(year.value.slice(2,4));
  var MM= parseInt(month.value);
  var DD= parseInt(day.value);
  var dateOfBirth= (MM + "/" + DD + "/" + CC + YY);
  var calculateDay= new Date (dateOfBirth);
  var daysOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var genderMale= document.getElementById("male");
  var genderFemale= document.getElementById("female");
  if (year.value==""|| month.value=="" || day.value==""){
    alert("Empty entry! confirm that all entries are filled before submitting");
    return false;
  }
  if ((month.value<1) || (month.value>12)){
    alert("Enter a valid value for month");
    return false;
  }
  if ((day.value<1) || (day.value>31)){
    alert("Enter a valid value for day");
    return false;
  }
  if (genderMale.checked){
    alert("Hey!" + " " + "You are a male and your Akan name is" + " " + maleNames[calculateDay.getDay()] + " " + ": You were born on a" + " " + daysOfWeek[calculateDay.getDay()]);
    year.value=""; month.value=""; day.value="";
  }
  else if(genderFemale.checked){
    alert("Hey!" + " " + "You are a female and your Akan name is" + " " + femaleNames[calculateDay.getDay()] + " " + ": You were born on a" + " " + daysOfWeek[calculateDay.getDay()]);
    year.value=""; month.value=""; day.value="";
  }
}

