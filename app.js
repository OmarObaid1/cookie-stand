'use strict';
let place =[];
let openHours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let contanir = document.getElementById('contanir');
let tableEl = document.createElement('table');
contanir.appendChild(tableEl);

function Place(shopName,minimumNumberOfCustomers,maximumNumberOfCustomers,averageNumberOfCookies){

    this.Name=shopName;
    this.minimumNumberOfCustomers=minimumNumberOfCustomers;
    this.maximumNumberOfCustomers=maximumNumberOfCustomers;
    this.total=0;
    this.averageNumberOfCookies =averageNumberOfCookies;
    this.CustomerHours=[],
    this.soldCookiesPerHour =[],
    place.push(this);
}
Place.prototype.getRandom = function(min,max){
     min = Math.ceil(min);
     max = Math.floor(max);
    return  Math.floor(Math.random() * (max - min + 1) + min);

}
Place.prototype.gen = function(){
    for(let i=0;i<openHours.length;i++)
       { 
             this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
             this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
             this.total += this.soldCookiesPerHour[i];
         }

}
Place.prototype.render = function(){

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    
    let tdEl1 = document.createElement('td');
    tableEl.appendChild(tdEl1);
    tdEl1.textContent = this.Name;

    for(let i=0; i<openHours.length;i++){
        let tdEl2 = document.createElement('td');
        tableEl.appendChild(tdEl2);
        tdEl2.textContent = this.soldCookiesPerHour[i];
    }

    let tdEl5 = document.createElement('td');
     tableEl.appendChild(tdEl5);
     tdEl5.textContent = this.total; 
    

    

}

function createTableHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = '';

    for (let x = 0; x <= openHours.length-1; x++) {
        let thEl1 = document.createElement('th');
        trEl.appendChild(thEl1);
        thEl1.textContent = openHours[x];

    }
    //  for (let i=0; i<place.length;i++)
    let thEl10 = document.createElement('th');
    trEl.appendChild(thEl10);
    thEl10.textContent = 'Daily Location Total';
}

createTableHeader();



function createTableFooter(){
    let totalDaily =0;
    let total =0;
    let trEl = document.createElement('tr');

    let thEl20 = document.createElement('th');
    trEl.appendChild(thEl20);
    thEl20.textContent = "total";

    tableEl.appendChild(trEl);
    
    for(let i=0 ; i<openHours.length;i++){
        totalDaily=0;
         
        for(let j=0 ; j<place.length;j++){
             total +=place[j].soldCookiesPerHour[i];
             totalDaily +=place[j].soldCookiesPerHour[i];


    }

     
let thEl10 = document.createElement('th');
    trEl.appendChild(thEl10);
    thEl10.textContent = totalDaily;
}
let thEl70 = document.createElement('th');
    trEl.appendChild(thEl70);
    thEl70.textContent = total;
}
let myform = document.getElementById('myForm');
myform.addEventListener('submit',addShop);
function addShop(event){
    event.preventDefault();

    let shopName = event.target.shopName.value;
    let minimumNumberOfCustomers = event.target.minimumNumberOfCustomers.value;
    let maximumNumberOfCustomers = event.target.maximumNumberOfCustomers.value;
    let averageNumberOfCookies = event.target.avgPerCustHourly.value;

    let newShop = new Place(shopName,minimumNumberOfCustomers,maximumNumberOfCustomers,averageNumberOfCookies);
    let tableLeg = tableEl.rows.length-1;
    tableEl.deleteRow(tableLeg);
    newShop.getRandom(minimumNumberOfCustomers,maximumNumberOfCustomers);

    newShop.gen();
    newShop.render();
    createTableFooter();


}

let Seattle = new Place('Seattle',23,65,6.3);
Seattle.getRandom(3,65);
Seattle.gen();
Seattle.render();

let Tokyo = new Place('Tokyo',3,24,1.2);
Tokyo.getRandom(3,24);
Tokyo.gen();
Tokyo.render();

let Dubai = new Place('Dubai',11,38,3.7);
Dubai.getRandom(11,38);
Dubai.gen();
Dubai.render();

let Paris = new Place('Paris',20,38,2.3);
Paris.getRandom(20,38);
Paris.gen();
Paris.render();


let Lima = new Place('Lima',2,16,4.6);
Lima.getRandom(2,16);
Lima.gen();
Lima.render();


createTableFooter();
console.log(place);


// for (let i = 0; i < place.length; i++) {
//     place[i].render();
// }


// let Seattle = {
//     shopName : 'Seattle',
//     minimumNumberOfCustomers: 23,
//     maximumNumberOfCustomers: 65,
//     averageNumberOfCookies: 6.3,
//     total :0,
//     CustomerHours:[],
//     soldCookiesPerHour :[],
//     openHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

//     getRandom: function (min,max) {
//          min = Math.ceil(min);
//          max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
        
//     },
   
//     gen:function ()
//     {
//         for(let i=0;i<this.openHours.length;i++)
//         { 
//             this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
//             this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
//             this.total += this.soldCookiesPerHour[i];
//         }
//     },

//     render: function () {
//         let h2El = document.createElement('h2');
//         contanir.appendChild(h2El);
//         h2El.textContent = this.shopName;
//         let ulEl = document.createElement('ul');
//         contanir.appendChild(ulEl);
//         for (let i = 0; i < this.openHours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = this.openHours[i] + ':' + this.soldCookiesPerHour[i] + ' cookies ' ;
            
//         }

//         let LiEl = document.createElement('li')
//         ulEl.appendChild(LiEl)
//         LiEl.textContent = 'totle :' + this.total + 'cookies';
    
//     }

// }
// ;


// Seattle.gen();
// Seattle.render();
// console.log(Seattle);



// let Tokyo = {
//     shopName : 'Tokyo',
//     minimumNumberOfCustomers: 3,
//     maximumNumberOfCustomers: 24,
//     averageNumberOfCookies: 1.2,
//     total :0,
//     CustomerHours:[],
//     soldCookiesPerHour :[],
//     openHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

//     getRandom: function (min,max) {
//          min = Math.ceil(min);
//          max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
        
//     },
   
//     gen:function ()
//     {
//         for(let i=0;i<this.openHours.length;i++)
//         { 
//             this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
//             this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
//             this.total += this.soldCookiesPerHour[i];
//         }
//     },

//     render: function () {
//         let h2El = document.createElement('h2');
//         contanir.appendChild(h2El);
//         h2El.textContent = this.shopName;
//         let ulEl = document.createElement('ul');
//         contanir.appendChild(ulEl);
//         for (let i = 0; i < this.openHours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = this.openHours[i] + ':' + this.soldCookiesPerHour[i] + ' cookies ' ;
            
//         }

//         let LiEl = document.createElement('li')
//         ulEl.appendChild(LiEl)
//         LiEl.textContent = 'totle :' + this.total + 'cookies';
    
//     }

// }
// ;


// Tokyo.gen();
// Tokyo.render();
// console.log(Tokyo);



// let Dubai = {
//     shopName : 'Dubai',
//     minimumNumberOfCustomers: 11,
//     maximumNumberOfCustomers: 38,
//     averageNumberOfCookies: 3.7,
//     total :0,
//     CustomerHours:[],
//     soldCookiesPerHour :[],
//     openHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

//     getRandom: function (min,max) {
//          min = Math.ceil(min);
//          max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
        
//     },
   
//     gen:function ()
//     {
//         for(let i=0;i<this.openHours.length;i++)
//         { 
//             this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
//             this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
//             this.total += this.soldCookiesPerHour[i];
//         }
//     },

//     render: function () {
//         let h2El = document.createElement('h2');
//         contanir.appendChild(h2El);
//         h2El.textContent = this.shopName;
//         let ulEl = document.createElement('ul');
//         contanir.appendChild(ulEl);
//         for (let i = 0; i < this.openHours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = this.openHours[i] + ':' + this.soldCookiesPerHour[i] + ' cookies ' ;
            
//         }

//         let LiEl = document.createElement('li')
//         ulEl.appendChild(LiEl)
//         LiEl.textContent = 'totle :' + this.total + 'cookies';
    
//     }

// }
// ;


// Dubai.gen();
// Dubai.render();
// console.log(Dubai);



// let Paris = {
//     shopName : 'Paris',
//     minimumNumberOfCustomers: 20,
//     maximumNumberOfCustomers: 38,
//     averageNumberOfCookies: 2.3,
//     total :0,
//     CustomerHours:[],
//     soldCookiesPerHour :[],
//     openHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

//     getRandom: function (min,max) {
//          min = Math.ceil(min);
//          max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
        
//     },
   
//     gen:function ()
//     {
//         for(let i=0;i<this.openHours.length;i++)
//         { 
//             this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
//             this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
//             this.total += this.soldCookiesPerHour[i];
//         }
//     },

//     render: function () {
//         let h2El = document.createElement('h2');
//         contanir.appendChild(h2El);
//         h2El.textContent = this.shopName;
//         let ulEl = document.createElement('ul');
//         contanir.appendChild(ulEl);
//         for (let i = 0; i < this.openHours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = this.openHours[i] + ':' + this.soldCookiesPerHour[i] + ' cookies ' ;
            
//         }

//         let LiEl = document.createElement('li')
//         ulEl.appendChild(LiEl)
//         LiEl.textContent = 'totle :' + this.total + 'cookies';
    
//     }

// }
// ;


// Paris.gen();
// Paris.render();
// console.log(Paris);





// let Lima = {
//     shopName : 'Lima',
//     minimumNumberOfCustomers: 2,
//     maximumNumberOfCustomers: 16,
//     averageNumberOfCookies: 4.6,
//     total :0,
//     CustomerHours:[],
//     soldCookiesPerHour :[],
//     openHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

//     getRandom: function (min,max) {
//          min = Math.ceil(min);
//          max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
        
//     },
   
//     gen:function ()
//     {
//         for(let i=0;i<this.openHours.length;i++)
//         { 
//             this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
//             this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
//             this.total += this.soldCookiesPerHour[i];
//         }
//     },

//     render: function () {
//         let h2El = document.createElement('h2');
//         contanir.appendChild(h2El);
//         h2El.textContent = this.shopName;
//         let ulEl = document.createElement('ul');
//         contanir.appendChild(ulEl);
//         for (let i = 0; i < this.openHours.length; i++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl)
//             liEl.textContent = this.openHours[i] + ':' + this.soldCookiesPerHour[i] + ' cookies ' ;
            
//         }

//         let LiEl = document.createElement('li')
//         ulEl.appendChild(LiEl)
//         LiEl.textContent = 'totle :' + this.total + 'cookies';
    
//     }

// }
// ;


// Lima.gen();
// Lima.render();
// console.log(Lima);

