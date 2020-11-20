for(let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}
//console.log(i); we cannot print let variables outside the block
const x=1;
//x=2; we cannot reassign const variables
//Arrow  function example
const square = number => number * number;
console.log(square(5));
// template literals
const colors=['red','green','blue'];
const items=colors.map(color=>`<li>${color}</li>`);
console.log(items);

//object destruction
 const address={
     street:'',
     city:'',
     country:''
 };
 const{ street,city,country}=address;
 



//spread operator
const first = { name: 'jay'};
const second={job: 'trainer'};
const combined={...first,...second,location: 'hyderabad'};
console.log(combined);

//this operator
const person={
    name:"jayasree",
    work()
    {
        console.log(this);
    }
};
person.work();

