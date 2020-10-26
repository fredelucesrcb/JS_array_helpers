<script>
  
    // HELPER FUNCTION; DO NOT EDIT
Array.isEqual = function (array1, array2) {
    //console.log(array1, array2)
    if (!array1 || !array2)
        return false

    if (array1.length !== array2.length)
        return false

    for (i = 0, l = array1.length; i < l; i++) {

        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            if (Array.isEqual(array1[i], array2[i]))
                return false  
        }           
        else if (array1[i] !== array2[i]) { 
            return false
        }           
    }       
    return true;
}
// HELPER FUNCTION; DO NOT EDIT

/*
Let's create an array manipulation library called '_' where we implement functions such as:
Map - like each but would return an array with altered contents depending on the function
Reduce - reduce an array into a value, can accept optional initial value
Head - get the initial value of the array
Tail - get the last value of the array
Join - join the array elements into a string given a parameter
*/

// FILL OUT THE FUNCTIONS *****************

const $ = {
  filter: function (arr, func) {
    let return_arr = arr.filter(func)
    return return_arr;
  },
  map: function (arr, func) {
     let return_arr = arr.map(func)
     return return_arr;
  },
  reduce: function (arr, func, to_add=null) {
    return_val = arr.reduce(func, 0);
    
    return_val += to_add;
    if(arr.length === 0 && to_add === null){
       return_val = [];
    }
    
    return return_val

  },
  head: function (arr) {
    let firstElement = arr.shift()
    return firstElement
  },
  tail: function (arr) {
    let lastElement = arr.pop()
    return lastElement;
  },
  join: function (arr, glue) {
    return arr.join(glue)
  }
};

// *****************************************

// TESTS

(_ => {
  console.log('Running _.filter...');

  // Filtering array
  console.log(
    Array.isEqual($.filter([1, 2, 3], function (num) { return num < 2 }),[1])
  );

   //Filtering empty array
  console.log(
    Array.isEqual($.filter([], function (num) { return num < 2 }),[])
  );

  console.log('Running _.map...');

  // Mapping array
  console.log(
    Array.isEqual($.map([5, 6, 7], function (num) { return num + 3 }),[8, 9, 10])
  );

  // Mapping empty array
  console.log(
    Array.isEqual($.map([], function (num) { return num < 2 }),[])
  );

  console.log('Running _.reduce...');

  // Adding numbers
  console.log(
    ($.reduce([1, 2, 3], function (acc, num) { return acc + num }) === 6)
  );

  // Adding empty list
  console.log(
    Array.isEqual($.reduce([], function (acc, num) { return acc + num }),[])
  );

  // Adding with initial value
  console.log(
    ($.reduce([], function (acc, num) { return acc + num }, 0) === 0)
  );

  console.log(
    ($.reduce([1, 2, 3], function (acc, num) { return acc + num }, 4) === 10)
  );

  console.log('Running _.head...');

  // Getting top of array
  console.log(
    ($.head([1, 2, 3]) === 1)
  );

  // Getting top of empty array
  console.log(
    ($.head([]) === undefined)
  );

  console.log('Running _.tail...');

  // Getting tail of array
  console.log(
    ($.tail([1, 2, 3]) === 3)
  );

  // Getting tail of empty array
  console.log(
    ($.tail([]) === undefined)
  );

  console.log('Running _.join...');

  // Joining array
  console.log(
    ($.join(['to','be', 1], '-') === 'to-be-1')
  );

  // Joining empty array
  console.log(
    ($.join([], '-') === '')
  );
})();

</script>