// const user =  {id : 1, name : "Din Shaw", role:"SD1",JoiningDate : "10/05/2025"};

// const {id,name,role,JoiningDate} = user;

// console.log(`Your Emp Id is ${id}, Name is ${name}, Your role is ${role} and Joining Date is ${JoiningDate}`);

// =================================================================================

function getUserData() {
  return {
    id: 101,
    name: "Sara Lee",
    email: "sara.lee@example.com",
    role: "Developer",
    department: "Engineering",
    location: "NYC"
  };
}

// only needed value
const { name, email, role } = getUserData();

console.log(`Name: ${name}`);
console.log(`Email: ${email}`);
console.log(`Role: ${role}`);
