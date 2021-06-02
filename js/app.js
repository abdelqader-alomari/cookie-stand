'use strict';
let hours = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];

const articleElem = document.getElementById('container');
const table = document.createElement('table');
articleElem.appendChild(table);
table.id = 'tableId'

let allShops=[];

function Store (storeLocation,minSCustomers,maxCustomers,avgCookies){
  this.storeLocation = storeLocation;
  this.minCustomers = minSCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalCookiesPerHour = [];
  this.totalCookiesPerDay = 0;

  allShops.push(this);
}

function randomAvgCookie(minCustomers, maxCustomers, avgCookies) {
  return Math.floor(avgCookies * (Math.random() * (maxCustomers - minCustomers) + maxCustomers));
}

Store.prototype.totalCookies = function() {
  for (let h = 0; h < hours.length; h++){
    this.totalCookiesPerHour.push(randomAvgCookie(this.minCustomers, this.maxCustomers, this.avgCookies));
    console.log(this.totalCookiesPerHour);
  }
  for (let d = 0; d < hours.length; d++) {
 this.totalCookiesPerDay = (this.totalCookiesPerDay + this.totalCookiesPerHour[d]);
  }
}
Store.prototype.createTable = function() {
  const trEl = document.createElement('tr');
  table.appendChild(trEl);


  let thEl = document.createElement('th');
  thEl.textContent = `${this.storeLocation}`
  trEl.appendChild(thEl);

  for (let i = 0; i < hours.length; i++){
    let tdEl = document.createElement('td');
    tdEl.textContent = `${this.totalCookiesPerHour[i]}`
    trEl.appendChild(tdEl);
  }

  let tdTotal = document.createElement('td');
  tdTotal.textContent = `${this.totalCookiesPerDay}`
  trEl.appendChild(tdTotal);
}

let seattle = new Store('Seattle', 23, 65, 6.3)
let tokyo = new Store('Tokyo', 3, 24, 1.2,)
let dubai = new Store('Dubai', 11, 38, 3.7,)
let paris = new Store('Paris', 20, 38, 2.3,)
let lima = new Store('Lima', 2, 16, 4.6,)

//let storeList = [seattle, tokyo, dubai, paris, lima];

function pickStores(){
  for(let i = 0; i<allShops.length; i++){
    allShops[i].totalCookies()
    allShops[i].createTable()
  }
};


function hourTableRow(){
  
  let trTime = document.createElement('tr');
  table.appendChild(trTime);
  let openHoursTh = document.createElement('th');
  openHoursTh.textContent = ('Open Hours');
  trTime.appendChild(openHoursTh);
  for (let i = 0; i < hours.length; i++){
    let thTime = document.createElement('th');
    thTime.textContent = `${hours[i]}`
    trTime.appendChild(thTime);
  }

  let dailyTot = document.createElement('th');
  trTime.appendChild(dailyTot);
  dailyTot.textContent = 'Daily Total';
}

function totalRow(){
  const trTot = document.createElement('tr');
  table.appendChild(trTot);
  
  let tfTot = document.createElement('tfoot');
  tfTot.textContent = ("Total");
  trTot.appendChild(tfTot);

  for(let i = 0; i < hours.length; i++){
    let tdTot = document.createElement('td');
    trTot.appendChild(tdTot);
    let fTotal = 0;
  for (let j = 0; j < allShops.length; j++){
      fTotal += allShops[j].totalCookiesPerHour[i];
  }
    tdTot.textContent = fTotal;
  }
  let totalCookiesForDay = 0;
  for (let i = 0; i < allShops.length; i++){
    totalCookiesForDay += allShops[i].totalCookiesPerDay;
  }
  let tdTot = document.createElement('td');
  trTot.appendChild(tdTot);
  tdTot.textContent = totalCookiesForDay;
}

const cookiesForm = document.getElementById('cookiesForm')
cookiesForm.addEventListener('submit',formSubmit);
function formSubmit(event){
  event.preventDefault()
  let newStore = event.target.inputLocation.value;
  let minValue = event.target.minCookiesNumber.value;
  let maxValue = event.target.maxCookiesNumber.value;
  let avgValue = event.target.avgCookiesNumber.value;
  let newShop = new Store(newStore,minValue,maxValue,avgValue);

  let tableLength = table.rows.length-1;
  table.deleteRow(tableLength);
  newShop.totalCookies();
  newShop.createTable();
  totalRow();
}
hourTableRow();
pickStores();
totalRow();