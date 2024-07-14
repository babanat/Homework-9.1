let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    
    development: {
      web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
   
  function sumSalaries(company) {
    if (Array.isArray(company)) { //этот метод проверяет является ли данный объект массивом.
      return company.reduce((prev, current) => prev + current.salary, 0); //сумма элементов массива
     
  } else { 
      let sum = 0;
      for (let subdep of Object.values(company)) {
        sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
      }
      return sum;
     }
  
  }
  console.log(sumSalaries(company));
  
