const people = [
    { 
        id: 1,
        name: "product 1",
        price: 10
    },
    { 
        id: 2,
        name: "product 2",
        price: 10
    },
    { 
        id: 3,
        name: "product 3",
        price: 10
    },

  ];
//   const person = people.find(person => person.age > 30);
//   console.log(person); // Output: { name: "Bob", age: 40 }

  const person = people.find(person => person.id === -1);
  const index = people.findIndex(person => person.id === 10);
  console.log(index); // Output: 2
  console.log(person); // Output: 2
  