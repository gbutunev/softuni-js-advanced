function solve(arr, crit) {
    let employees = JSON.parse(arr);

    if (crit == 'all') {
        for (let i = 0; i < employees.length; i++) {
            console.log(`${i}. ${employees[i].first_name} ${employees[i].last_name} - ${employees[i].email}`);
        }
    }
    else {
        let [cat, val] = crit.split('-');
        let newEmpl = employees.filter(x => x[cat] == val);

        for (let i = 0; i < newEmpl.length; i++) {
            console.log(`${i}. ${newEmpl[i].first_name} ${newEmpl[i].last_name} - ${newEmpl[i].email}`);
        }
    }
}

solve(`[{"id": "1", "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female" }, {    "id": "2",    "first_name": "Kizzee",    "last_name": "Jost",    "email": "kjost1@forbes.com",    "gender": "Female"  },  {    "id": "3",    "first_name": "Evanne",    "last_name": "Maldin",    "email": "emaldin2@hostgator.com",    "gender": "Male"  }]`,
    'gender-Female'
);

solve(`[{"id": "1", "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female" }, {    "id": "2",    "first_name": "Kizzee",    "last_name": "Jost",    "email": "kjost1@forbes.com",    "gender": "Female"  },  {    "id": "3",    "first_name": "Evanne",    "last_name": "Maldin",    "email": "emaldin2@hostgator.com",    "gender": "Male"  }]`,
    'all'
);

solve(`[{    "id": "1",    "first_name": "Kaylee",    "last_name": "Johnson",    "email": "k0@cnn.com",    "gender": "Female"  }, {    "id": "2",    "first_name": "Kizzee",    "last_name": "Johnson",    "email": "kjost1@forbes.com",    "gender": "Female"  }, {    "id": "3",    "first_name": "Evanne",    "last_name": "Maldin",    "email": "emaldin2@hostgator.com",    "gender": "Male"  }, {    "id": "4",    "first_name": "Evanne",    "last_name": "Johnson",    "email": "ev2@hostgator.com",    "gender": "Male"  }]`,
    'last_name-Johnson'
);