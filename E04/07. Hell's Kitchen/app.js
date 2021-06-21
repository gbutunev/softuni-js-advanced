function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let txtRaw = document.querySelector('#inputs textarea').value;
      let arr = JSON.parse(txtRaw);

      let restaurants = new Object();

      for (const element of arr) {
         let [name, workersString] = element.split(' - ');
         let workersArray = workersString.split(', ');
         let workers = [];
         for (const w of workersArray) {
            let [wName, sal] = w.split(' ');
            workers.push({
               name: wName,
               salary: Number(sal)
            });
         }
         if (restaurants[name] == null) {
            restaurants[name] = workers;
         }
         else {
            restaurants[name].push(...workers);
         }
      }

      let bestRestName = '';
      let bestRestSalary = 0;
      let maxSalary = 0;

      for (const key in restaurants) {
         let sum = 0;
         let maxSal = 0;
         for (const w of restaurants[key]) {
            sum += w.salary;
            if (w.salary > maxSal) {
               maxSal = w.salary;
            }
         }
         let avg = sum / restaurants[key].length;
         if (avg > bestRestSalary) {
            bestRestSalary = avg;
            bestRestName = key;
            maxSalary = maxSal;
         }
      }

      let bestRestElement = document.querySelector('#bestRestaurant p');
      bestRestElement.textContent = `Name: ${bestRestName} Average Salary: ${bestRestSalary.toFixed(2)} Best Salary: ${maxSalary.toFixed(2)}`;

      let workersElement = document.querySelector('#workers p');
      let str = '';
      for (const w of restaurants[bestRestName].sort((a, b) => b.salary - a.salary)) {
         str += `Name: ${w.name} With Salary: ${w.salary} `;
      }
      str = str.trim();
      workersElement.textContent = str;
   }
}