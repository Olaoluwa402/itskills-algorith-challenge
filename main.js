// Bootcamp Algorithm challenge/solutions - itskills 2022
const {log} = console;
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

    // console.log(chucnks([0, 1, 2, 3, 4, 5], 4))

    const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
    function itCom(arr){
        let newComp = [];
        for(let i=0; i<arr.length; i++){
          
          let newA = arr[i].match(/o/gi)
          if(!Array.isArray(newA) || (Array.isArray(newA) && newA.length == 1)){
           newComp.push(arr[i])
          }
        }
        return newComp;
    
    }

    // console.log(itCom(itCompanies))

    /*
    

Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present 
in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument.

    */

    function searchOut(arr, obj){
        let objKeys = Object.keys(obj)
        
        return arr.filter(object => {
            log(object['last'])
            for(let i=0; i<objKeys.length; i++){
                log(object[objKeys[i]] != obj[objKeys[i]])
                   if(!object.hasOwnProperty(objKeys[i]) || object[objKeys[i]] != obj[objKeys[i]]){
                        return false
                   }
            }
            return true
        })
    }

    // log(searchOut([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet",  }))



      /* 

            Perform a search and replace on the sentence using the arguments provided and return the new sentence.

            First argument is the sentence to perform the search and replace on.

            Second argument is the word that you will be replacing (before).

            Third argument is what you will be replacing the second argument with (after).

            Note: Preserve the case of the first character in the original word when you are replacing it. 
            For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

            Template:
            myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.

            myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.

            myReplace("I think we should look up there", "up", "Down") should return the string I think we should look down there.
      */
        function searchAndReplace(str, before, after){
                const index = str.indexOf(before)

                // using regx
                if(/^[A-Z]/.test(before)){
                    after = after[0].toUpperCase() + after.substring(1)
                }else{
                    after = after[0].toLowerCase() + after.substring(1)
                }

                // log(str[index] === str[index].toUpperCase())
                // if(str[index] === str[index].toUpperCase()){
                //     after = after.charAt(0).toUpperCase() + after.slice(1)
                // }else{
                //     after = after.charAt(0).toLowerCase() + after.slice(1)
                // }
                // log('before', before)
                // log('after', after)
               return  str.replace(before, after)
        }

        // log(searchAndReplace("Let us go to the store", "store", "mall"))
        

    /*
    
        We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
        The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers 
        between 1 and 4 (both inclusive) is 10.

        sumAll([1, 4]) should return 10.

        sumAll([4, 1]) should return 10.

        sumAll([5, 10]) should return 45.

        sumAll([10, 5]) should return 45.
    */

    function sumAll(arr){
        //  sort method
        const sorted = arr.sort((a,b) => a-b)
        // Math function
        const min = Math.min(...arr)//sorted[0]
        const max = Math.max(arr[0], arr[1])// sorted[1]
  
        let sum = 0
        for(let i=min; i <= max; i++){
                sum += i //sum = sum + i
        }

        return sum
        
    }

    // log(sumAll([200, 1]))



    /*
        SUM ALL PRIME:
        A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2
        is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is
        divisible by 1, 2 and 4.

        Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

        sumPrimes(10) should return 17.
        sumPrimes(977) should return 73156.
    */

        // function sumPrime(num){
        //     log(num)
        //     // check isprime
        //     function isPrime(num){
        //         for(let i=2; i<=num; i++){
        //             if(num % i == 0){
        //                 return false
        //             }
        //         }
        //         return true
        //     }

        //     let sum = 0
        //     for(let i=2; i<=num; i++){
        //         if(isPrime(i)){
        //             sum = sum + i
        //         }
        //     }
        //     return sum;
        // }
        // log(sumPrime(10))