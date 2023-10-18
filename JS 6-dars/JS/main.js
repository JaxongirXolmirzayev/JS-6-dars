// localStorage.setItem('Ism','Sunnatbek');
// localStorage.setItem('Familiya','Ravshanov');
// localStorage.setItem('Yoshi','16');

// localStorage['Ism'] = "Baxtiyor";
// localStorage['Familiya'] = "Kuchqarov";
// localStorage['Yoshi'] = "18";

// localStorage.removeItem('Ism');
// localStorage.removeItem('Familiya');
// localStorage.removeItem('Yoshi');
// localStorage.clear();

// let uningismi = localStorage.getItem(`ism`);
// let uningfamilyasi = localStorage.getItem(`Familiya`);
// let uningyoshi = localStorage.getItem(`yoshi`);
// console.log(uningismi,uningfamilyasi,uningyoshi);

// let sorov = new XMLHttpRequest();

// sorov.open('get','https://getty.uz/serverdan/malumot/olish');
// sorov.send();


// sorov.onload = function (){
//     console.log(sorov.responseText);
// }


// let jsFile = {'ism':'Guli','Yoshi':'16 yoshda'};
// let jsonFile = '{"ism":"Komila","yoshi": "38 yoshda"}'


// console.log(JSON.stringify(jsFile))
// console.log(JSON.parse(jsonFile))

let sorov = new XMLHttpRequest();
sorov.open('get','jsFile.js');
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}

let sorov1 = new XMLHttpRequest();
sorov1.open('get','jsonFile.json');
sorov1.send();
sorov1.onload = function (){
    console.log(sorov1.responseText);
}







