
const getcountries=()=>{
    const xhr= new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType="json"
    xhr.onload=()=>{
        const countries =xhr.response;


// const LanguageCheck= countries
// .filter((speak)=>speak.language.spa)
// .map((country)=>country.name.common)

// console.log(LanguageCheck);
// I tried but it doesnt work

const People = countries
.filter((people)=> people.population >10000000)
 .map((country)=>country.name.common)

console.log(People);











 








    }
    
    }
    
    getcountries()