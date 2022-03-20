function add(n1,n2){
    return n1+n2;
}

const WORKING_HOURS_WEEK = 40;

let counter = 0;

function inc(amount = 1) {
    counter += amount;
    return counter;
  }
  
  function dec(amount = 1) {
    counter -= amount;
    return counter;
  }
  
  let localCounter = 5;
  
  const moduleName = 'My Module 1';

//   default olarak export hali
//   export default moduleName;
//   export default "My Module 1";

export default (num) => num*num;
export{
    WORKING_HOURS_WEEK,
    WORKING_HOURS_WEEK as WHW,
    add as sum,
    dec, inc, counter
};

console.log(`${moduleName} is loaded.`)

