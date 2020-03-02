'use strict';

// YOU KNOW WHAT TO DO //

/** 
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Returns input value unchanged.
 * 
 * @param {Any Datatype} value: any datatype to be returned as itself.
 * 
 * @return {Any Datatype}: Should be the same as the input value as it doesn't change.
 */
 
function identity(value){
    return value;
}

module.exports.identity = identity;

/**
 * typeOf: Designed to determine the datatype of a given argument.
 * 
 * @param {Any Datatype: String, Boolean, Array, undefined, Object, Number, or Function}
 * value: any datatype to be returned as it's datatype.
 * 
 * @return {String}: If else chain will determine if what datatype the value is
 * and return that datatype as a string. 
 */
 
 function typeOf(value){
    if (Array.isArray(value) === true) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if(typeof value === "string") {
       return "string"; 
    } else if (typeof value === "object") {
        return "object";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "number") {
        return "number";
    } else if (typeof value === "boolean") {
        return "boolean";
    } else if (typeof value === "function") {
        return "function";
    } 
}

module.exports.typeOf = typeOf;

/**
 * first: Designed to determine if a given arguments are an array, a number and the
 * first occurence of the number as an element in the given array. 
 * 
 * @param {Array} array: The list to loop through to find the number.
 * 
 * @param {Number} number: The number to search for in the given array.
 * 
 * @return {Value}: The first element of the given array, the array, or first occurence of the given number.
 */
 
 function first(array, number){
    if(!Array.isArray(array)){
        return [];
    }else if (number === undefined || isNaN(number)){
        return array[0];
    }else if (number > array.length){
        return array;
    }else {
        return array.splice(0, number);
    }
}

module.exports.first = first;

/**
 * last: Designed to find the last number element in the array.
 * 
 * @param {Array} array: The given list to look through to find the given number. 
 * 
 * @param {Number} number: The given number to search for in the given array.
 * 
 * @return {Value}: An empty array (edgecase) if not an array, the given array
 * (edgecase) if the number is greater than the length, or the last element at
 * the address of the given number.
 */

function last(array, number){
if (!Array.isArray(array)){
    return [];
} else if (number === undefined || typeof number !== "number"){
    return array[array.length-1];
} if (number === -1) {
    return [];
} else if (number > array.length){
    return array;
} else { 
    return array.splice(array.length-number, number);
  
}

}

module.exports.last = last;

/**
 * indexOf: Designed to locate the first occurance of a given value or element in 
 * an array.
 * 
 * @param {Array} array: The list or collection to iterate through to find the given value.
 * 
 * @param {Any datatype} value: The value to search for in the given array.
 * 
 * @return {Value}: The index of the first occurance of the given value or 
 * -1 if the value is not in the given array (edgecase).
 */

function indexOf(array, value) {
for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
        return i;
    }
}
    return -1;

}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to determine if an array contains a value.
 * 
 * @param {Array} array: The list to search through for the given value.
 * 
 * @param {Value} value: The value to search for in the given array.
 * 
 * @return {Boolean}: A boolean of true or false will be returned if the given array 
 * includes the given value. Returns 0 if no value is given (edgecase).
 */
 
function contains(array, value) {
    return array.includes(value) ? true : false;
}

module.exports.contains = contains;


/** 
*unique: Designed to copy an old array into a new array with duplicates removed.
*
*@param: {Array}array: The collection to search through and remove duplicates from.
* 
*@return: {Array}: Returns a new array with no duplicates.
*/

function unique(array){
var ourArray = [];
for (var i = 0; i < array.length; i++) { 
    if (indexOf(ourArray, array[i]) === -1) {
        ourArray.push(array[i]);
    }
}
return ourArray;

}

module.exports.unique = unique;

/**
 * filter: Designed to loop over a collection and return a new array with all the
 * true elements.
 * 
 *@param {Array}array: The collection to search through.
 * 
 * @param {Function}test: The function to run on each value in the collection.
 * 
 * @return {Array}: Returns a new array of elements that the came back as true
 * once the test is ran. 
 * 
*/

function filter(array, test){
    var ourArray = [];
  each(array, function(element, index, array){
      if(test(element, index, array)){
          ourArray.push(element);
      }
  });
    return ourArray;
}

module.exports.filter = filter;


/**
*reject: Designed to loop through a collection and create a new array with all the
* elements that are not in the given array. 
* 
* @param {Array}array: The collection to iterate through.
* 
* @param {Function}test: The function will perform the action of determining if
* the given array contains an element. 
* 
* @return {Array}: Returns new array with all the element that were not in the 
* given array.
* 
*/

function reject(array, test){
 var ourArray = [];
filter(array, function(element, index, array){
    if (test(element, index, array) === false){
        ourArray.push(element);
    }
});
return ourArray;
}

module.exports.reject= reject;


/**
 * partition: Designed to loop through a collection and create an array made up of 
 * two arrays.
 * 
 * @param {Array}array: Collection to be looped through for elements.
 * 
 * @param {Function}test: The process of determining what elements are and are 
 * not inside of the given array and then places them new separate arrays.
 * 
 * @return {Array}: Returns a new array with both of the arrays inside.
 * 
*/

function partition(array, test){
var ourSubArray = [];
var truthyArray = [];
var falsyArray = [];
filter(array, function(element, index, array){
    if (test(element, index, array)) {
truthyArray.push(element);
    }
});
reject(array, function(element, index, array){
    if (test(element, index, array) === false) {
falsyArray.push(element);
    }
});
ourSubArray[0] = truthyArray;
ourSubArray[1] = falsyArray;
return ourSubArray;
}

module.exports.partition = partition;

/**
 * map: Designed to create an array of the values in the given collection.
 * 
 * @param {Array or Object}collection: The array or object to loop through.
 * 
 * @param {Function}test: The test to be applied to each element or value in the
 * collection.
 * 
 * @return {Array}: Returns a new array with the looped elements.
*/

function map(collection, test){
    
var ourCalledArray = [];
each(collection, function(element, index, collection) {
    ourCalledArray.push(test(element, index, collection));
});
return ourCalledArray;
}

module.exports.map = map;


/**
 * pluck: Designed to return each value of a collection in an array.
 * 
 * @param {Array}arrayofobjects: The given array that contain objects as element
 *to iterate over. 
 * 
 * @param {Property}objectkey: The given key of each iterated element.
 * 
 * @return {Array}: Returns a new array of properties from the iterated element.
*/

function pluck(arrayofobjects, objectkey){
return map(arrayofobjects, function(element, index, collection){
    return element[objectkey];
});

}

module.exports.pluck = pluck;

/**
 *every: Designed to loop an collection until a false element is found.
 * 
 * @param {Array or Object} collection: The array to iterate through.
 * 
 * @param {Function} test: The function to apply to each element.
 * 
 * @return {Boolean}: Returns a boolean value of false if at least one of the 
 * elements in the collection return false. Returns a boolean value of true if 
 * every value in the collection returns true.
 */
 
function every(collection, test){
    var ourArray = [];
      each(collection,function(element, index, collection){
         if(typeof test !== "function"){
             if(!element){
            ourArray.push(element);}
         }
        else if(!test(element, index, collection)){
            ourArray.push(element);
        }
    });
    if(ourArray.length > 0){
        return false;
    }
        return true;
}

module.exports.every = every;

/**
 * some: Designed to return a boolean value of true if the called value is true
 * for at least one element and false if it's false.
 * 
 * @param {Array or Object} collection: The collection to iterate through.
 * 
 * @param {Function} test: The function to apply to the elements or keys in the 
 * given collection.
 * 
 * @return {Boolean}: Return true or false based on what conditions are met.
 * Returns true if the collection length is greater than 0 else returns false
 * (edgecase).
 */
 
 function some(collection, test) {
     let ourArray = [];
    each(collection, function(value, index, collection) {
        if(typeof test !== 'function') {
             if (value) {
                ourArray.push(value);
             }
        } else if (test(value, index, collection)) {
             ourArray.push(value);
        } else if(test(value, index, collection)){
            ourArray.push(value);
        }
    });
        if(ourArray.length > 0){
        return true;
    }
        return false;
}

module.exports.some = some;

/**
 * reduce: Designed to loop through an collection and returning a value.
 * 
 * @param {Array} array: The list to loop through.
 * 
 * @param {Function} test: The test to apply to each value in the list.
 * 
 * @param {Value} seed: A given value.
 * 
 * @return {Value}: Returns the previous result and the last iteration. If seed
 * is not given it will return undefined.
 * 
 */

function reduce(array, test, seed) {
    let prevResult;
    if (seed !== undefined) {
        prevResult = seed;
        each(array, function(e, i, a) {
            prevResult = test(prevResult, e, i, a);
        });
    } else {
        prevResult = array[0];
        for (let i = 1; i < array.length; i++) {
            prevResult = test(prevResult, array[i], i, array);
        }
    }
    return prevResult;
}

module.exports.reduce = reduce;

/**
*extend: Designed to copy properties of objects into another.
*
* @param {Object} obj: Target object to be added to.
* 
* @param {Object} obj2: Source object to be added to the first given object.
* 
* @param {Spread Parameter of Objects} newArgs: Possible source objects to be 
* combined with the first given object.
* 
* @return {Object}: Returns the updated object. 
*
*/

function extend(obj1, obj2, ...newArgs) {
       Object.assign(obj1, obj2);
       Object.assign(obj1, ...newArgs);
       return obj1;
}

module.exports.extend = extend;
