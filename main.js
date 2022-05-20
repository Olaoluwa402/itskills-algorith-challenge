// Bootcamp Algorithm challenge/solutions - itskills 2022

/*1. The formula to convert from Celsius to Fahrenheit is the
temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.
Define a variable fahrenheit and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
NOTE; Return the value of the result from the function*/

function convertToFahrenheit(C) {
  const F = (C * 9/5) + 32;
  return F;
}
//console.log(convertToFahrenheit(20));


/*
    2. Given an integer array nums, move all the even integers 
    at the beginning of the array  followed by all the odd integers. 
    Return any array that satisfies the condition
    Example: 
    Input: nums = [3,1,2,4]
    output: [2,4,3,1]
    Explanation: outputs: [4,2,3,1], [2,4,1,3] and [4,2,1,3] 
    would also be accepted
 */
    function evenFirstThenOdd(nums){
        let even = [];
        let odd = [];
        for(let i=0; i<nums.length; i++){
            if(nums[i] % 2 === 0){
                even.push(nums[i]);
            }else{
                odd.push(nums[i]);
            }
        }

        return even.concat(odd);
    }
    // console.log(evenFirstThenOdd([3,1,2,4]))

    /*
        3. Write a function that takes in integers in minute and convert it to seconds
        Examples:
        convert(5) => 300
        convert(3) => 180
    */

        function convertToSeconds(min){
            //60 seconds = 1minute;
            const sec = 60 * min;
            return sec;
        }
        // console.log(convertToSeconds(3))

    /*
        4. Write a function that returns true if a number passed into it is an 
        even number and false if otherwise. 
    */
        
        function isEven(num){
            if(num % 2 ===0){
                return true
            }else{
                return false
            }
        }
        // console.log(isEven(9))

    /* 
        5. Create a function that takes a number as an argument, increments the number by 
        1 and return the result. Example addition(0) => 1, addition(4) => 5
    */
        function incrementByOne(num){
          return ++num //num + 1
        }
        // console.log(incrementByOne(0))

    /* 
       6. Create a function that takes voltage and current and returns the 
        calculated power. Example circuitPower(230, 10) => 2300
    */

        function calcPower(v,c){
            const p = v * c;
            return p
        }
        // console.log(calcPower(230,10))

    /*
        You are counting points for a basketball game, given the amount of 
        2-pointers scored and 3-pointers scored, find the final points for the 
        team and return that value. Examples points(1,1) => 5, points(5,7) => 31
    */
     function finalPoint(arg1, arg2){
        const twoPointer = 2 * arg1;
        const threePointer = 3 * arg2;

        return twoPointer + threePointer;
     }
    //console.log(finalPoint(5,7))

    /*
        Repeat a given string str (first argument) for num times (second argument). 
        Return an empty string if num is not a positive number. 
        For the purpose of this challenge, do not use the built-in .repeat() method.

        Example:
        repeatStringNumTimes("*", 3) should return the string ***.
         repeatStringNumTimes("abc", 3) should return the string abcabcabc.
    */
   
         function repeatStringNumTimes(str, num){
             let final = ''
             for(let i=0; i<num; i++){
                 final += str // final = final + str
             }
             return final;

         }
        //  console.log(repeatStringNumTimes("grace", 5))


    /*
        Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. 
        If no element passes the test, return undefined.
        Example:
        findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) 
        should return 8.

        findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) 
        should return undefined.
    */

        const findElement = (arr, func)=>{
                const result = arr.find(func)
                return result;
               //alternative
                // for(let i=0; i<arr.length; i++){
                //     let num = arr[i]
                //         if(func(num)){
                //             return num
                //         }
                // }
                // return undefined
        }

        // console.log(findElement([1, 3, 5, 5, 10, 11], function(num) { return num % 2 === 0; }))

        /*
                Write a function that splits an array (first argument) into groups the length of size (second argument) 
                and returns them as a two-dimensional array.

                Example:
                chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

                chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

                chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

                chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

        */

    function chucnks(arr, size){
        // let newArray = [];
        // while(arr.length > 0){
        //      newArray.push(arr.splice(0, size))
        // }
        // return newArray;
        //alternative
        let newArray = []
        for(let i=0; i<arr.length; i+=size){
            newArray.push(arr.slice(i, i+size))
        }
        return newArray
    }

    console.log(chucnks([0, 1, 2, 3, 4, 5], 4))