

let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total']

// let Seattle = {
//    name: 'Seattle',
//    minHour: 65,
//    maxHour: 23,
//    avgSalesPerHour: 6.3,
//    cookiesPerHour: [],
//    total: 0,
//    customersPerHour: function (maxHour, minHour) {
//       maxHour = this.maxHour;
//       return Math.ceil(Math.random() * (maxHour - minHour) + minHour);

//    },
//    cookiesPurchasedPerHour: function () {

//       for (let i = 0; i < time.length - 1; i++) {
//          this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * this.avgSalesPerHour
//          // console.log(`${time[i]}:${this.cookiesPerHour[i]}`)
//          this.total = this.total + this.cookiesPerHour[i]
//       }
//       return this.total;
//    },
//    render: function () {
//       this.cookiesPurchasedPerHour();
//       const container = document.getElementById('IHateFish');

//       const h2El = document.createElement('h2');
//       container.appendChild(h2El);
//       h2El.textContent = this.name;

//       let ul = document.createElement('ul');
//       container.appendChild(ul);

//       for (i = 0; i < time.length; i++) {
//          if (i != time.length - 1) {
//             let li = document.createElement('li');
//             li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
//             ul.appendChild(li);
//          } else {
//             let li = document.createElement('li');
//             li.textContent = `${time[i]}:${this.total}`;
//             ul.appendChild(li);
//          }

//       }
//    }
// }
// let Tokyo = {
//    name: 'Tokyo',
//    minHour: 3,
//    maxHour: 24,
//    avgSalesPerHour: 1.2,
//    cookiesPerHour: [],
//    total: 0,
//    customersPerHour: function (maxHour, minHour) {
//       maxHour = this.maxHour;
//       return Math.ceil(Math.random() * (maxHour - minHour) + minHour);

//    },
//    cookiesPurchasedPerHour: function () {

//       for (let i = 0; i < time.length - 1; i++) {
//          this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * this.avgSalesPerHour
//          // console.log(`${time[i]}:${this.cookiesPerHour[i]}`)
//          this.total = this.total + this.cookiesPerHour[i]
//       }
//       return this.total;
//    },
//    render: function () {
//       this.cookiesPurchasedPerHour();
//       const container = document.getElementById('IHateFish');

//       const h2El = document.createElement('h2');
//       container.appendChild(h2El);
//       h2El.textContent = this.name;

//       let ul = document.createElement('ul');
//       container.appendChild(ul);

//       for (i = 0; i < time.length; i++) {
//          if (i != time.length - 1) {
//             let li = document.createElement('li');
//             li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
//             ul.appendChild(li);
//          } else {
//             let li = document.createElement('li');
//             li.textContent = `${time[i]}:${this.total}`;
//             ul.appendChild(li);
//          }

//       }
//    }
// }
// let Dubai = {
//    name: 'Dubai',
//    minHour: 11,
//    maxHour: 38,
//    avgSalesPerHour: 3.7,
//    cookiesPerHour: [],
//    total: 0,
//    customersPerHour: function (maxHour, minHour) {
//       maxHour = this.maxHour;
//       return Math.ceil(Math.random() * (maxHour - minHour) + minHour);

//    },
//    cookiesPurchasedPerHour: function () {

//       for (let i = 0; i < time.length - 1; i++) {
//          this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * this.avgSalesPerHour
//          // console.log(`${time[i]}:${this.cookiesPerHour[i]}`)
//          this.total = this.total + this.cookiesPerHour[i]
//       }
//       return this.total;
//    },
//    render: function () {
//       this.cookiesPurchasedPerHour();
//       const container = document.getElementById('IHateFish');

//       const h2El = document.createElement('h2');
//       container.appendChild(h2El);
//       h2El.textContent = this.name;

//       let ul = document.createElement('ul');
//       container.appendChild(ul);

//       for (i = 0; i < time.length; i++) {
//          if (i != time.length - 1) {
//             let li = document.createElement('li');
//             li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
//             ul.appendChild(li);
//          } else {
//             let li = document.createElement('li');
//             li.textContent = `${time[i]}:${this.total}`;
//             ul.appendChild(li);
//          }

//       }
//    }
// }
// let Paris = {
//    name: 'Paris',
//    minHour: 20,
//    maxHour: 38,
//    avgSalesPerHour: 2.3,
//    cookiesPerHour: [],
//    total: 0,
//    customersPerHour: function (maxHour, minHour) {
//       maxHour = this.maxHour;
//       return Math.ceil(Math.random() * (maxHour - minHour) + minHour);

//    },
//    cookiesPurchasedPerHour: function () {

//       for (let i = 0; i < time.length - 1; i++) {
//          this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * this.avgSalesPerHour
//          // console.log(`${time[i]}:${this.cookiesPerHour[i]}`)
//          this.total = this.total + this.cookiesPerHour[i]
//       }
//       return this.total;
//    },
//    render: function () {
//       this.cookiesPurchasedPerHour();
//       const container = document.getElementById('IHateFish');

//       const h2El = document.createElement('h2');
//       container.appendChild(h2El);
//       h2El.textContent = this.name;

//       let ul = document.createElement('ul');
//       container.appendChild(ul);

//       for (i = 0; i < time.length; i++) {
//          if (i != time.length - 1) {
//             let li = document.createElement('li');
//             li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
//             ul.appendChild(li);
//          } else {
//             let li = document.createElement('li');
//             li.textContent = `${time[i]}:${this.total}`;
//             ul.appendChild(li);
//          }

//       }
//    }
// }

// let Lima = {
//    name: 'Lima',
//    minHour: 2,
//    maxHour: 16,
//    avgSalesPerHour: 4.6,
//    cookiesPerHour: [],
//    total: 0,
//    customersPerHour: function (maxHour, minHour) {
//       maxHour = this.maxHour;
//       return Math.ceil(Math.random() * (maxHour - minHour) + minHour);

//    },
//    cookiesPurchasedPerHour: function () {

//       for (let i = 0; i < time.length - 1; i++) {
//          this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * this.avgSalesPerHour
//          // console.log(`${time[i]}:${this.cookiesPerHour[i]}`)
//          this.total = this.total + this.cookiesPerHour[i]
//       }
//       return this.total;
//    },
//    render: function () {
//       this.cookiesPurchasedPerHour();
//       const container = document.getElementById('IHateFish');

//       const h2El = document.createElement('h2');
//       container.appendChild(h2El);
//       h2El.textContent = this.name;

//       let ul = document.createElement('ul');
//       container.appendChild(ul);

//       for (i = 0; i < time.length; i++) {
//          if (i != time.length - 1) {
//             let li = document.createElement('li');
//             li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
//             ul.appendChild(li);
//          } else {
//             let li = document.createElement('li');
//             li.textContent = `${time[i]}:${this.total}`;
//             ul.appendChild(li);
//          }

//       }
//    }
// }


// Seattle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render();



const container = document.getElementById('IHateFish');
const tableEl = document.createElement('table')
container.appendChild(tableEl)

function Ugly(city, minHour, maxHour, avgSalesPerHour) {
   this.city = city;
   this.minHour = minHour;
   this.maxHour = maxHour;
   this.avgSalesPerHour = Math.ceil(avgSalesPerHour);
   this.cookiesPerHour = [];
   this.total = 0;
   this.cookiesPurchasedPerHour();

}
Ugly.prototype.customersPerHour = function (maxHour, minHour) {

   return Math.ceil(Math.random() * (maxHour - minHour) + minHour);
};

Ugly.prototype.cookiesPurchasedPerHour = function () {

   for (let i = 0; i < time.length - 1; i++) {
      this.avgSalesPerHour
      this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * this.avgSalesPerHour
      this.total = this.total + this.cookiesPerHour[i]
   }
   return this.total;

}

let thefootFunction = function () {
   let footerRow = document.createElement('tr')
   tableEl.appendChild(footerRow)
   let tdUculom = document.createElement('td')
   footerRow.appendChild(tdUculom)
   tdUculom.textContent = 'Totals'

   let grandTotal = 0;

   for (let i = 0; i < time.length - 1; i++) {
      let tdUculom = document.createElement('td')
      footerRow.appendChild(tdUculom)

      let totalClock = 0;

      for (let j = 0; j < cities.length; j++) {
         totalClock = totalClock + cities[j].cookiesPerHour[i]
      }

      tdUculom.textContent = totalClock;
      grandTotal += totalClock;

   }

   let lastCell = document.createElement('td');
   footerRow.appendChild(lastCell)
      lastCell.textContent = grandTotal;
}


let headFunction = function () {
   // this is the header of the table 


   const hederRow = document.createElement('tr')
   tableEl.appendChild(hederRow)

   let tHead = document.createElement('th')
   hederRow.appendChild(tHead)
   tHead.textContent = 'xxxxx'

   for (i = 0; i < time.length; i++) {
      tHead = document.createElement('th')
      hederRow.appendChild(tHead)
      tHead.textContent = time[i]
   }
   tHead = document.createElement('th')
   hederRow.appendChild(tHead)
   tHead.textContent = 'Daily Location Total'
}




Ugly.prototype.render = function () {



   // the date type 
   let trData = document.createElement('tr')
   tableEl.appendChild(trData)

   let tdCulom = document.createElement('td')
   trData.appendChild(tdCulom)
   tdCulom.textContent = this.city

   for (var i = 0; i < time.length; i++) {
      tdCulom = document.createElement('td')
      trData.appendChild(tdCulom)
      tdCulom.textContent = this.cookiesPerHour[i];
   }

   tdCulom = document.createElement('td')
   trData.appendChild(tdCulom)
   tdCulom.textContent = this.total;




   // const h2El = document.createElement('h2');
   // container.appendChild(h2El);
   // h2El.textContent = this.city;
   // let ul = document.createElement('ul');
   // container.appendChild(ul);

   // for (i = 0; i < time.length; i++) {
   //    if (i != time.length - 1) {
   //       let li = document.createElement('li');
   //       li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
   //       ul.appendChild(li);
   //    } else {
   //       let li = document.createElement('li');
   //       li.textContent = `${time[i]}:${this.total}`;
   //       ul.appendChild(li);
   //    }  
   // }
};

const Seattle = new Ugly(
   'Seattle',
   65,
   23,
   6.3,
)
const Tokyo = new Ugly(
   'Tokyo',
   3,
   24,
   1.2,
);
const Dubai = new Ugly(
   'Dubai',
   11,
   38,
   3.7,
);
const Paris = new Ugly(
   'Paris',
   20,
   38,
   2.7,
);
const Lima = new Ugly(
   'Lima',
   2,
   16,
   4.6,
);

let cities = [Seattle, Tokyo, Dubai, Paris, Lima]

headFunction();
for (let i = 0; i < cities.length; i++) {
   cities[i].render();
}
thefootFunction();