'use strict'; 
let contanir = document.getElementById('contanir');
let Seattle = {
    shopName : 'Seattle',
    minimumNumberOfCustomers: 23,
    maximumNumberOfCustomers: 65,
    averageNumberOfCookies: 6.3,
    total :0,
    CustomerHours:[],
    soldCookiesPerHour :[],
    openHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

    getRandom: function (min,max) {
         min = Math.ceil(min);
         max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    },
   
    gen:function ()
    {
        for(let i=0;i<this.openHours.length;i++)
        { 
            this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
            this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
            this.total += this.soldCookiesPerHour[i];
        }
    },

    render: function () {
        let h2El = document.createElement('h2');
        contanir.appendChild(h2El);
        h2El.textContent = this.shopName;
        let ulEl = document.createElement('ul');
        contanir.appendChild(ulEl);
        for (let i = 0; i < this.openHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = this.openHours[i] + ':' + this.soldCookiesPerHour[i] + ' cookies ' ;
            
        }

        let LiEl = document.createElement('li')
        ulEl.appendChild(LiEl)
        LiEl.textContent = 'totle :' + this.total + 'cookies';
    
    }

}
;


Seattle.gen();
Seattle.render();
console.log(Seattle);



let Tokyo = {
    shopName : 'Tokyo',
    minimumNumberOfCustomers: 3,
    maximumNumberOfCustomers: 24,
    averageNumberOfCookies: 1.2,
    total :0,
    CustomerHours:[],
    soldCookiesPerHour :[],
    openHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

    getRandom: function (min,max) {
         min = Math.ceil(min);
         max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    },
   
    gen:function ()
    {
        for(let i=0;i<this.openHours.length;i++)
        { 
            this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
            this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
            this.total += this.soldCookiesPerHour[i];
        }
    },

    render: function () {
        let h2El = document.createElement('h2');
        contanir.appendChild(h2El);
        h2El.textContent = this.shopName;
        let ulEl = document.createElement('ul');
        contanir.appendChild(ulEl);
        for (let i = 0; i < this.openHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = this.openHours[i] + ':' + this.soldCookiesPerHour[i] + ' cookies ' ;
            
        }

        let LiEl = document.createElement('li')
        ulEl.appendChild(LiEl)
        LiEl.textContent = 'totle :' + this.total + 'cookies';
    
    }

}
;


Tokyo.gen();
Tokyo.render();
console.log(Tokyo);



let Dubai = {
    shopName : 'Dubai',
    minimumNumberOfCustomers: 11,
    maximumNumberOfCustomers: 38,
    averageNumberOfCookies: 3.7,
    total :0,
    CustomerHours:[],
    soldCookiesPerHour :[],
    openHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

    getRandom: function (min,max) {
         min = Math.ceil(min);
         max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    },
   
    gen:function ()
    {
        for(let i=0;i<this.openHours.length;i++)
        { 
            this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
            this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
            this.total += this.soldCookiesPerHour[i];
        }
    },

    render: function () {
        let h2El = document.createElement('h2');
        contanir.appendChild(h2El);
        h2El.textContent = this.shopName;
        let ulEl = document.createElement('ul');
        contanir.appendChild(ulEl);
        for (let i = 0; i < this.openHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = this.openHours[i] + ':' + this.soldCookiesPerHour[i] + ' cookies ' ;
            
        }

        let LiEl = document.createElement('li')
        ulEl.appendChild(LiEl)
        LiEl.textContent = 'totle :' + this.total + 'cookies';
    
    }

}
;


Dubai.gen();
Dubai.render();
console.log(Dubai);



let Paris = {
    shopName : 'Paris',
    minimumNumberOfCustomers: 20,
    maximumNumberOfCustomers: 38,
    averageNumberOfCookies: 2.3,
    total :0,
    CustomerHours:[],
    soldCookiesPerHour :[],
    openHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

    getRandom: function (min,max) {
         min = Math.ceil(min);
         max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    },
   
    gen:function ()
    {
        for(let i=0;i<this.openHours.length;i++)
        { 
            this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
            this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
            this.total += this.soldCookiesPerHour[i];
        }
    },

    render: function () {
        let h2El = document.createElement('h2');
        contanir.appendChild(h2El);
        h2El.textContent = this.shopName;
        let ulEl = document.createElement('ul');
        contanir.appendChild(ulEl);
        for (let i = 0; i < this.openHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = this.openHours[i] + ':' + this.soldCookiesPerHour[i] + ' cookies ' ;
            
        }

        let LiEl = document.createElement('li')
        ulEl.appendChild(LiEl)
        LiEl.textContent = 'totle :' + this.total + 'cookies';
    
    }

}
;


Paris.gen();
Paris.render();
console.log(Paris);





let Lima = {
    shopName : 'Lima',
    minimumNumberOfCustomers: 2,
    maximumNumberOfCustomers: 16,
    averageNumberOfCookies: 4.6,
    total :0,
    CustomerHours:[],
    soldCookiesPerHour :[],
    openHours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

    getRandom: function (min,max) {
         min = Math.ceil(min);
         max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    },
   
    gen:function ()
    {
        for(let i=0;i<this.openHours.length;i++)
        { 
            this.CustomerHours.push(this.getRandom(this.minimumNumberOfCustomers,this.maximumNumberOfCustomers))
            this.soldCookiesPerHour.push(Math.ceil( this.CustomerHours[i] * this.averageNumberOfCookies));
            this.total += this.soldCookiesPerHour[i];
        }
    },

    render: function () {
        let h2El = document.createElement('h2');
        contanir.appendChild(h2El);
        h2El.textContent = this.shopName;
        let ulEl = document.createElement('ul');
        contanir.appendChild(ulEl);
        for (let i = 0; i < this.openHours.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl)
            liEl.textContent = this.openHours[i] + ':' + this.soldCookiesPerHour[i] + ' cookies ' ;
            
        }

        let LiEl = document.createElement('li')
        ulEl.appendChild(LiEl)
        LiEl.textContent = 'totle :' + this.total + 'cookies';
    
    }

}
;


Lima.gen();
Lima.render();
console.log(Lima);

