'use strict';
let container=document.getElementById('container')
let Seattle={
    minCustomers:23,
    maxCustomers:65,
    AvgCookies:6.3,
    customers:[],
    cookies:[],
    sum:null,
    hours:['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'],
    getNumOfCustomer: function(){
        let customers=0;
        for(let i=0;i<this.hours.length;i++){
            customers=Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
            console.log(customers)
            this.customers.push(customers)
        }
        console.log(this.customers)
    },
    getNumCookies: function(){
        let cookies=0;
        for(let i=0;i<this.hours.length;i++){
            cookies=Math.floor(this.customers[i]*this.AvgCookies)
            console.log(cookies)
            this.cookies.push(cookies)
           this.sum=cookies+this.sum
           
        }
        console.log('sum',this.sum)
    },   
    display:function(){
        let h2El=document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent='Seattle';
        let ulEl=document.createElement('ul');
        container.appendChild(ulEl)
        for(let i=0;i<this.hours.length;i++){
            let liEl=document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent=`${this.hours[i]} : ${this.cookies[i]} Cookies`
        }
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`Total : ${this.sum} Cookies`

    }
}

Seattle.getNumOfCustomer()
Seattle.getNumCookies()
Seattle.display()

let Tokyo={
    minCustomers:3,
    maxCustomers:24,
    AvgCookies:1.2,
    customers:[],
    cookies:[],
    sum:null,
    hours:['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'],
    getNumOfCustomer: function(){
        let customers=0;
        for(let i=0;i<this.hours.length;i++){
            customers=Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
            console.log(customers)
            this.customers.push(customers)
        }
        console.log(this.customers)
    },
    getNumCookies: function(){
        let cookies=0;
        for(let i=0;i<this.hours.length;i++){
            cookies=Math.floor(this.customers[i]*this.AvgCookies)
            console.log(cookies)
            this.cookies.push(cookies)
           this.sum=cookies+this.sum
           
        }
        console.log('sum',this.sum)
    },   
    display:function(){
        let h2El=document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent='Tokyo';
        let ulEl=document.createElement('ul');
        container.appendChild(ulEl)
        for(let i=0;i<this.hours.length;i++){
            let liEl=document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent=`${this.hours[i]} : ${this.cookies[i]} Cookies`
        }
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`Total : ${this.sum} Cookies`

    }
}

Tokyo.getNumOfCustomer()
Tokyo.getNumCookies()
Tokyo.display()

let Dubai={
    minCustomers:11,
    maxCustomers:38,
    AvgCookies:3.7,
    customers:[],
    cookies:[],
    sum:null,
    hours:['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'],
    getNumOfCustomer: function(){
        let customers=0;
        for(let i=0;i<this.hours.length;i++){
            customers=Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
            console.log(customers)
            this.customers.push(customers)
        }
        console.log(this.customers)
    },
    getNumCookies: function(){
        let cookies=0;
        for(let i=0;i<this.hours.length;i++){
            cookies=Math.floor(this.customers[i]*this.AvgCookies)
            console.log(cookies)
            this.cookies.push(cookies)
           this.sum=cookies+this.sum
           
        }
        console.log('sum',this.sum)
    },   
    display:function(){
        let h2El=document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent='Dubai';
        let ulEl=document.createElement('ul');
        container.appendChild(ulEl)
        for(let i=0;i<this.hours.length;i++){
            let liEl=document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent=`${this.hours[i]} : ${this.cookies[i]} Cookies`
        }
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`Total : ${this.sum} Cookies`

    }
}

Dubai.getNumOfCustomer()
Dubai.getNumCookies()
Dubai.display()

let Paris={
    minCustomers:20,
    maxCustomers:38,
    AvgCookies:2.3,
    customers:[],
    cookies:[],
    sum:null,
    hours:['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'],
    getNumOfCustomer: function(){
        let customers=0;
        for(let i=0;i<this.hours.length;i++){
            customers=Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
            console.log(customers)
            this.customers.push(customers)
        }
        console.log(this.customers)
    },
    getNumCookies: function(){
        let cookies=0;
        for(let i=0;i<this.hours.length;i++){
            cookies=Math.floor(this.customers[i]*this.AvgCookies)
            console.log(cookies)
            this.cookies.push(cookies)
           this.sum=cookies+this.sum
           
        }
        console.log('sum',this.sum)
    },   
    display:function(){
        let h2El=document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent='Paris';
        let ulEl=document.createElement('ul');
        container.appendChild(ulEl)
        for(let i=0;i<this.hours.length;i++){
            let liEl=document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent=`${this.hours[i]} : ${this.cookies[i]} Cookies`
        }
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`Total : ${this.sum} Cookies`

    }
}

Paris.getNumOfCustomer()
Paris.getNumCookies()
Paris.display()

let Lima={
    minCustomers:2,
    maxCustomers:16,
    AvgCookies:4.6,
    customers:[],
    cookies:[],
    sum:null,
    hours:['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'],
    getNumOfCustomer: function(){
        let customers=0;
        for(let i=0;i<this.hours.length;i++){
            customers=Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
            console.log(customers)
            this.customers.push(customers)
        }
        console.log(this.customers)
    },
    getNumCookies: function(){
        let cookies=0;
        for(let i=0;i<this.hours.length;i++){
            cookies=Math.floor(this.customers[i]*this.AvgCookies)
            console.log(cookies)
            this.cookies.push(cookies)
           this.sum=cookies+this.sum
           
        }
        console.log('sum',this.sum)
    },   
    display:function(){
        let h2El=document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent='Lima';
        let ulEl=document.createElement('ul');
        container.appendChild(ulEl)
        for(let i=0;i<this.hours.length;i++){
            let liEl=document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent=`${this.hours[i]} : ${this.cookies[i]} Cookies`
        }
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`Total : ${this.sum} Cookies`

    }
}

Lima.getNumOfCustomer()
Lima.getNumCookies()
Lima.display()