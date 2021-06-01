'use strict';
let hours = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];

function Store (storeLocation,minSCustomers,maxCustomers,avgCookies){
  this.storeLocation = storeLocation;
  this.minCustomers = minSCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
}

function randomAvgCookie(minCustomers, maxCustomers, avgCookies) {
  return Math.floor(avgCookies * (Math.random() * (maxCustomers - minCustomers) + maxCustomers));
}

Store.prototype.totalCookies = function() {
  for (let h = 0; h < hours.length; h++){
    this.totalCookiesPerHour.push(randomAvgCookie(this.minCustomers, this.maxCustomers, this.avgCookies));
  }
  for (let d = 0; d < hours.length; d++) {
    this.totalCookiesPerDay = (this.totalCookiesPerDay + this.totalCookiesPerHour[d]);
  }
}

let seattle = new Store('Seattle', 23, 65, 6.3)
let tokyo = new Store('Tokyo', 3, 24, 1.2,)
let dubai = new Store('Dubai', 11, 38, 3.7,)
let paris = new Store('Paris', 20, 38, 2.3,)
let lima = new Store('Lima', 2, 16, 4.6,)
let storeList = [seattle, tokyo, dubai, paris, lima];

const articleElem = document.getElementById('container');
  
const table = document.createElement('table');
articleElem.appendChild(table);

function hourTableRow(){
  const trTime = document.createElement('tr');
  table.appendChild(trTime);
  
  let thTime = document.createElement('th');
  thTime.textContent = ("Open Hours");
  trTime.appendChild(thTime);
  
  for (let i = 0; i < hours.length; i++){
    let tdTime = document.createElement('td');
    tdTime.textContent = `${hours[i]}`
    trTime.appendChild(tdTime);
  }

  let dailyTot = document.createElement('th');
  trTime.appendChild(dailyTot);
  dailyTot.textContent = 'Daily Total';
}

function createTable(stores) {
  stores.totalCookies();
  console.log(stores);
  const trEl = document.createElement('tr');
  table.appendChild(trEl);


  let thEl = document.createElement('th');
  thEl.textContent = `${stores.storeLocation}`
  trEl.appendChild(thEl);

  for (let i = 0; i < hours.length; i++){
    let tdEl = document.createElement('td');
    tdEl.textContent = `${stores.totalCookiesPerHour[i]}`
    trEl.appendChild(tdEl);
  }

  let tdTotal = document.createElement('td');
  tdTotal.textContent = `${stores.totalCookiesPerDay}`
  trEl.appendChild(tdTotal);
}

function totalRow(){
  const trTot = document.createElement('tr');
  table.appendChild(trTot);
  
  let tfTot = document.createElement('tfoot');
  tfTot.textContent = ("Total");
  trTot.appendChild(tfTot);

  for (let i = 0; i < hours.length; i++){
    let tdTot = document.createElement('td');
    trTot.appendChild(tdTot);
    let fTotal = 0;
    for (let j = 0; j < storeList.length; j++){
      fTotal += storeList[j].totalCookiesPerHour[i];
    }
    tdTot.textContent = fTotal;
  }
  let totalCookiesForDay = 0;
  for (let i = 0; i < storeList.length; i++){
    totalCookiesForDay += storeList[i].totalCookiesPerDay;
  }
  let tdTot = document.createElement('td');
  trTot.appendChild(tdTot);
  tdTot.textContent = totalCookiesForDay;
}
hourTableRow();

createTable(seattle);
createTable(tokyo);
createTable(dubai);
createTable(paris);
createTable(lima);

totalRow();