

let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total']
let Seattle = {
   name: 'Seattle',
   minHour: 65,
   maxHour: 23,
   avgSalesPerHour: 6.3,
   cookiesPerHour: [],
   total: 0,
   customersPerHour: function (maxHour, minHour) {
      maxHour = this.maxHour;
      return Math.ceil(Math.random() * (maxHour - minHour) + minHour);

   },
   cookiesPurchasedPerHour: function () {

      for (let i = 0; i < time.length - 1; i++) {
         this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * Math.ceil(this.avgSalesPerHour)
         // console.log(`${time[i]}:${this.cookiesPerHour[i]}`)
         this.total = this.total + this.cookiesPerHour[i]
      }
      return this.total;
   },
   render: function () {
      this.cookiesPurchasedPerHour();
      const container = document.getElementById('IHateFish');

      const h2El = document.createElement('h2');
      container.appendChild(h2El);
      h2El.textContent = this.name;

      let ul = document.createElement('ul');
      container.appendChild(ul);

      for (i = 0; i < time.length; i++) {
         if (i != time.length - 1) {
            let li = document.createElement('li');
            li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
            ul.appendChild(li);
         } else {
            let li = document.createElement('li');
            li.textContent = `${time[i]}:${this.total}`;
            ul.appendChild(li);
         }

      }
   }
}
let Tokyo = {
   name: 'Tokyo',
   minHour: 3,
   maxHour: 24,
   avgSalesPerHour: 1.2,
   cookiesPerHour: [],
   total: 0,
   customersPerHour: function (maxHour, minHour) {
      maxHour = this.maxHour;
      return Math.ceil(Math.random() * (maxHour - minHour) + minHour);

   },
   cookiesPurchasedPerHour: function () {

      for (let i = 0; i < time.length - 1; i++) {
         this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * Math.ceil(this.avgSalesPerHour)
         // console.log(`${time[i]}:${this.cookiesPerHour[i]}`)
         this.total = this.total + this.cookiesPerHour[i]
      }
      return this.total;
   },
   render: function () {
      this.cookiesPurchasedPerHour();
      const container = document.getElementById('IHateFish');

      const h2El = document.createElement('h2');
      container.appendChild(h2El);
      h2El.textContent = this.name;

      let ul = document.createElement('ul');
      container.appendChild(ul);

      for (i = 0; i < time.length; i++) {
         if (i != time.length - 1) {
            let li = document.createElement('li');
            li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
            ul.appendChild(li);
         } else {
            let li = document.createElement('li');
            li.textContent = `${time[i]}:${this.total}`;
            ul.appendChild(li);
         }

      }
   }
}
let Dubai = {
   name: 'Dubai',
   minHour: 11,
   maxHour: 38,
   avgSalesPerHour: 3.7,
   cookiesPerHour: [],
   total: 0,
   customersPerHour: function (maxHour, minHour) {
      maxHour = this.maxHour;
      return Math.ceil(Math.random() * (maxHour - minHour) + minHour);

   },
   cookiesPurchasedPerHour: function () {

      for (let i = 0; i < time.length - 1; i++) {
         this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * Math.ceil(this.avgSalesPerHour)
         // console.log(`${time[i]}:${this.cookiesPerHour[i]}`)
         this.total = this.total + this.cookiesPerHour[i]
      }
      return this.total;
   },
   render: function () {
      this.cookiesPurchasedPerHour();
      const container = document.getElementById('IHateFish');

      const h2El = document.createElement('h2');
      container.appendChild(h2El);
      h2El.textContent = this.name;

      let ul = document.createElement('ul');
      container.appendChild(ul);

      for (i = 0; i < time.length; i++) {
         if (i != time.length - 1) {
            let li = document.createElement('li');
            li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
            ul.appendChild(li);
         } else {
            let li = document.createElement('li');
            li.textContent = `${time[i]}:${this.total}`;
            ul.appendChild(li);
         }

      }
   }
}
let Paris = {
   name: 'Paris',
   minHour: 20,
   maxHour: 38,
   avgSalesPerHour: 2.3,
   cookiesPerHour: [],
   total: 0,
   customersPerHour: function (maxHour, minHour) {
      maxHour = this.maxHour;
      return Math.ceil(Math.random() * (maxHour - minHour) + minHour);

   },
   cookiesPurchasedPerHour: function () {

      for (let i = 0; i < time.length - 1; i++) {
         this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * Math.ceil(this.avgSalesPerHour)
         // console.log(`${time[i]}:${this.cookiesPerHour[i]}`)
         this.total = this.total + this.cookiesPerHour[i]
      }
      return this.total;
   },
   render: function () {
      this.cookiesPurchasedPerHour();
      const container = document.getElementById('IHateFish');

      const h2El = document.createElement('h2');
      container.appendChild(h2El);
      h2El.textContent = this.name;

      let ul = document.createElement('ul');
      container.appendChild(ul);

      for (i = 0; i < time.length; i++) {
         if (i != time.length - 1) {
            let li = document.createElement('li');
            li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
            ul.appendChild(li);
         } else {
            let li = document.createElement('li');
            li.textContent = `${time[i]}:${this.total}`;
            ul.appendChild(li);
         }

      }
   }
}

let Lima = {
   name: 'Lima',
   minHour: 2,
   maxHour: 16,
   avgSalesPerHour: 4.6,
   cookiesPerHour: [],
   total: 0,
   customersPerHour: function (maxHour, minHour) {
      maxHour = this.maxHour;
      return Math.ceil(Math.random() * (maxHour - minHour) + minHour);

   },
   cookiesPurchasedPerHour: function () {

      for (let i = 0; i < time.length - 1; i++) {
         this.cookiesPerHour[i] = this.customersPerHour(this.maxHour, this.minHour) * Math.ceil(this.avgSalesPerHour)
         // console.log(`${time[i]}:${this.cookiesPerHour[i]}`)
         this.total = this.total + this.cookiesPerHour[i]
      }
      return this.total;
   },
   render: function () {
      this.cookiesPurchasedPerHour();
      const container = document.getElementById('IHateFish');

      const h2El = document.createElement('h2');
      container.appendChild(h2El);
      h2El.textContent = this.name;

      let ul = document.createElement('ul');
      container.appendChild(ul);

      for (i = 0; i < time.length; i++) {
         if (i != time.length - 1) {
            let li = document.createElement('li');
            li.textContent = `${time[i]}:${this.cookiesPerHour[i]}`;
            ul.appendChild(li);
         } else {
            let li = document.createElement('li');
            li.textContent = `${time[i]}:${this.total}`;
            ul.appendChild(li);
         }

      }
   }
}




Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
