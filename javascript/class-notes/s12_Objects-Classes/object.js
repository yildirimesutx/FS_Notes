// let dog = { name: "Rocky",
//             legs :4 ,
//             tail:1,
//             qualities :["loyalt", "companionship"],
//             bark : function() {
//                 console.log("woof");
//             },
//             result : function() {
//                 return this.name+ " has " + this.legs + " legs.";
//             }


//     };

//     dog.bark();
//     console.log(dog.result());

// function dog(na, legs, tail) {
//       this.name = na;
//       this.legs = legs;
//       this.tail = tail;
// }

// let dog1 = new dog("Riley", 4, 1);

// document.write(dog1.name)

// console.log(dog1)


// class Dog {
//     constructor(name, foot) {
//       this.dogName = name;
//       this.foot = foot;
//     }
//   }
//   myDog = new Dog("Buldog")
//   console.log(myDog)

class Dog {
    constructor(name, foot) {
      this.dogName = name;
      this.foot = foot;
    }
    current(){
       return "I have a " + this.dogName + " and it has " + this.foot + " legs" ;
    }
  }
  myDog = new Dog("Buldog", 4) 
//   document.getElementById("content").innerHTML = myDog.current();
console.log(myDog.current())