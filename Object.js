//objects are collection of named values
//methods are action which is performed in object

// function objectLearn() {
//   const data = {
//     name: "kaival",
//     age: 20,
//     status: "employee",
//   };
//   console.log(data.age);
// }
// objectLearn();

// function demo() {
//   function Person() {
//     (this.name = "kaival"), (this.mobile = 123467);
//   }
//   const person = new Person();
//   Person.prototype.gender = "MALE";
//   console.log(person);
// }
// demo();

// function detailsPrint() {
//   function Data(name, number) {
//     (this.name = name), (this.number = number);
//   }
//   const data = new Data("kaival", 555);
//   console.log(data);
// }
// detailsPrint();

//there are 2 types of object properties 1)Data properties and 2) Accessor properties :- get and set

// function studentData() {
//   const Student = {
//     firstName: "Kaival",
//     lastName: "Thakkar",
//     get getName() {
//       return this.firstName + this.lastName;
//     },
//     set changeLastName(newName) {
//       this.lastName = newName;
//     },
//   };

//   //   const data = new Student();
//   //   console.log(data);
//   Student.changeLastName = "raguvanshi";
//   console.log(Student.getName);
// }
// studentData();

// function demoData() {
//   const data = {
//     name: "kaival",
//     roll: 555,
//   };
//   console.log(data);
//   console.log(data.JSON.stringfy());
// }
// demoData();

function checkEntries() {
  const data = {
    name: "kaival",
    roll: 555,
  };
  temp = Object.entries(data)[1];
  console.log(Object.entries(data));
  console.log(temp);
}
checkEntries();

// function checkAssign() {
//   const o1 = {
//     name: "kaival",
//     id: 48,
//   };
//   const o2 = {
//     id: 5,
//   };
//   const o4 = Object.assign({}, o1, o2);
//   console.log(o4);
// }
// checkAssign();

// function checkAssign2() {
//   let data = {
//     name: "kaival",
//     roll: 5,
//   };
//   let myobj = {};
//   let copyData = Object.assign(myobj, data);
//   console.log(copyData);
// }
// checkAssign2();

// function checkCreate() {
//   let student = {
//     name: "kaival",
//     surname: "thakkar",
//     roll: 48,
//     display() {
//       console.log(this.name + this.surname + this.roll);
//     },
//   };
//   let std1 = Object.create(student);
//   console.log(std1.display());
// }
// checkCreate();

// function checkDefineProperty() {
//   let obj = {};
//   Object.defineProperty(obj, "property1", {
//     value: 1088,
//     enumerable: true,
//     writable: true,
//     configurable: true,
//   });
//   console.log(obj.property1);
// }
// checkDefineProperty();

// function checkObjfreeze() {
//   let obj = {
//     name: "kaival",
//     rol: 10,
//   };
//   let n1 = Object.freeze(obj);
//   console.log(n1 == obj);
//   obj.name = "karan";
//   console.log(obj.name);
// }
// checkObjfreeze();

// console.log(Object.is("java", "java"));
// console.log(Object.is([], []));
// console.log(Object.is(-1, 1));
// console.log(Object.is(NaN, 0 / 0));

// console.log(Object.isFrozen({ name: "aka" })); //because new object is extensible

//assign : it will copy and print updated value from maltiple object and we will copy object to anoter objects
//Object.assign(target , ...sources)

//create : create a new object using prototype of given object
//Onject.create(proto , propertiesObject)

//defineProperty : method adds or modifies existing property on an object and returns the object.
//Object.defineProperty(obj , prop , descriptor)

//entries : return from object to Array of key value pair which we pass in object
//Object.entries(obj)

//freeze: freeze object no longer we able to change anyting of it
//Object.freeze(obj)

//fromEntries: it is performed reverse of entries() from array to object4
//Object.fromEntries(iterable)

//

//Object.is: it will return T/F as per check both value same or not
//Object.isExtensible : It will return true if we can able to add value in object
//Object.isFrozen : it will check if object is able to change if we able to change it will return false
