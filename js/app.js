

let time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total']
let Seattle={
    city:'Seattle',
    maxHour:23,
    minHour:65,
    avrgHour:6.3,
    cookyPerHour:[],
    total:0,
    customersPerHour:function(maxHour,minHour){

        return Math.ceil(Math.random()*(maxHour-minHour)+minHour); 

    },
    cookiesPurchased:function(){
        
       for(let i=0;i<time.length;i++){
      

         this.cookyPerHour[i] =this.customersPerHour(this.maxHour,this.minHour)*this.avrgHour 
         this.total=this.total+this.cookyPerHour[i]
        
       }
    
    },
    render: function () {
     const container = document.getElementById('iHateFish');

     

     const h2El = document.createElement('h2');
     articleEl.appendChild(h2El);
     h2El.textContent = this.city;
     let ul = document.createElement('ul');
        container.appendChild(ul);

        for(i=0;i<time.length;i++){
        let list = time[i]+this.cookyPerHour[i]
        }


     }
    
    
    

}
Seattle();
