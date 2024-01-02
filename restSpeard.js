//function filterOutOdds() {
//    var nums = Array.prototype.slice.call(arguments);
//    return nums.filter(function(num) {
//      return num % 2 === 0
//    });
//  }

function filterOutOdds(...nums) {
    return nums.filter((num) => {
        return num % 2 === 0;
    });
};

function findMin(...nums) {
    return Math.min(...nums);
};

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
};

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num * 2)]  

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom= items => {
    let rN = Math.floor(Math.random() * items.length);
    return [...items.slice(0, rN), ...items.slice(rN + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val};
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return {...obj, [key]: val}
}
