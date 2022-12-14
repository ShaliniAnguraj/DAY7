//A.Get all the countries from the Asia continent /region using the Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
   var result=JSON.parse(request.response);
   var foo1 = result.filter((ele)=>`${ele.region = "Asia"}`).filter((ele)=>ele.name);
    console.log(foo1)
}

//2.Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var foo1 = result.filter((ele)=>ele.population<200000);
    console.log(foo1)
}

//C.Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var foo1 = result.forEach((ele) => console.log `${ele.name},${ele.capital} ${ele.flag}`);
    console.log(foo1);
}

//D.Print the total population of countries using reduce function

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var foo1 = result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(foo1);
}

//E.Print the country which uses US Dollars as currency.

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var foo2 = result.filter((ele)=>`${ele.currency= "US Dollars"}`).map((ele)=>ele.name);
    console.log(foo2);
}