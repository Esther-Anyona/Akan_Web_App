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
}

