<b>Question 1</b>: 3, because the last condition we check for the forloop is i = 3 and i = 3 < 3 (price length) is false, the loop will stop. since type of i is var, we can access it anywhere. <br>
<b>Question 2</b>: 150,  because the last loop of forloop that we will run is i = 2, price[2] = 300, 300*0.5 = 150. Here is the last place we modified discounted price. since type of discounted price is var, we can access it anywhere. <br>
<b>Question 3</b>: 150, the last place we modified finalPrice is the last forloop. the final price will set to 150 after run the math.round command. since type of finalPrice is var, we can access it anywhere.<br>
<b>Question 4</b>: [50, 100, 150], every time we run the forloop it will push the discounted price result to discounted vector. We go through all the price input and get the result [50, 100, 150]. since type of vector discounted price is var, we can access it anywhere.<br>
<b>Question 5</b>: error, because we cannot access let if it's not in the same block scope. i is define in the for loop block and line 12 is not. <br>
<b>Question 6</b>: error, because we cannot access let if it's not in the same block scope. Discounted price is define in the for loop block and line 13 is not. <br>
<b>Question 7</b>: 150, because the final price is defined outside of forloop. It defined in the same block as line 14, so we can access it.<br>
<b>Question 8</b>:[50, 100, 150], because discounted and return statement is in the same block scope. We modify discounted in the forloop but did not defined in forloop. <br>
<b>Question 9</b>: error, because we cannot access let if it's not in the same block scope. i is define in the for loop block and line 12 is not. <br>
<b>Question 10</b>: print 3, because we can access const if varible length and line 12 in the same block scope. <br>
<b>Question 11</b>: the result is [50, 100, 150] Because push the value does not modify the type of the variable, we could still push the price, but we cannot modify the price already in the array. 
<br>
<b>Question 12</b>:
1. `alert(student.name);`
2. `alert(student["Grad Year"]);`
3. `student.greeting();`
4. `alert(student[FavoriteTeacher.name]);`
5. `alert(student.courseload[0]);`



   <br>
   <b>Question 13</b>:
-  A: Output: `'32'`
   > Node.js has concatenated the string `'3'` with the number 2 to produce the string `'32'`.
-  B: Output: `'1'`
   > Node.js has converted the string `'3'` to a number and then subtracted the number 2 from it, resulting in the number 1. This is because the minus operator `-` is only defined for numeric types, so JavaScript automatically converts the string to a number before performing the subtraction.
-  C: Output: `3`
   > Node.js has added the number 3 and the value `null`. In JavaScript, when I perform an arithmetic operation involving null, it is treated as `0`. Therefore, the expression `3 + null` is equivalent to `3 + 0`, which results in the number 3.
-  D: Output: `'3null'`
   >  Node.js has concatenated the string `3` and the value null. In JavaScript, when you perform a string concatenation involving null, it is converted to the string `null`. Therefore, the expression `'3' + null` is equivalent to the string concatenation `'3' + 'null'`, which results in the string `'3null'`.
-  E: Output: `4`
   > Node.js has added the boolean value `true` (which is equal to `1` when converted to a number) to the number 3, resulting in the number 4. In JavaScript, when I perform an arithmetic operation involving a boolean value, it is automatically converted to a number.
-  F: Output: `0` 
   >  Node.js has added the boolean value `false` (which is equal to 0 when converted to a number) to the value `null`, resulting in the number 0. In JavaScript, when I perform an arithmetic operation involving `null`, it is treated as `0`.
-  G: Output: `'3undefined'`
   > In JavaScript, when I perform a string concatenation involving `undefined`, it is converted to the string `'undefined'`. Therefore, the expression `'3' + undefined` is equivalent to the string concatenation `'3' + 'undefined'`, which results in the string `'3undefined'`.
-  H: Output: `NaN` (not a number)
   > This is because in JavaScript, when I perform an arithmetic operation involving `undefined`, it is converted to the special value `NaN`. Therefore, the expression `'3' - undefined` is equivalent to the subtraction `3 - NaN`, which results in `NaN`.

 <br>
   <b>Question 14</b>:

-  A: Output: `true` 
    > JavaScript performs a type conversion and converts the string `'2'` to the number 2, and then compares it to the number 1. Since `2` is greater than `1`, the expression returns `true`.
-  B: Output: `true` 
    > JavaScript performs a lexicographic comparison of the two strings. The comparison is performed character by character, starting from the leftmost character. In this case, `'2'` is less than `'1'` in the second string, so the whole string `'12'` is considered greater than `'2'`.
-  C: Output: `true`
    > JavaScript performs a type conversion and converts the string `'2'` to the number 2. Then, it compares the two numbers 2 and `2`. Since they have the same value, the expression returns `true`. This is an example of type coercion in JavaScript.
-   D: Output: `false`
    > JavaScript performs a strict comparison, meaning that it does not perform any type coercion. Since `2` is a number and `'2'` is a string, they are considered different types, so the expression returns false.
-   E: Output: `false`
    > JavaScript performs a type conversion and converts `true` to the number 1. Then, it compares the two numbers 1 and 2. Since they have different values, the expression returns `false`.
-   F: Output: `true`
    > JavaScript performs a strict comparison. The value `Boolean(2)` is `true`, since any nonzero number in JavaScript is considered `true` when converted to a Boolean. Therefore, the expression compares the Boolean value `true` to the Boolean value `true`, which have the same value and type, so the expression returns `true`.

<br>

   <b>Question 15</b>: The `==` operator is called the equality operator. It compares two values for equality, but it performs type coercion before making the comparison. That means that if the two values being compared have different types, JavaScript will try to convert one or both of them to a common type before comparing them. The `===` operator is called the strict equality operator. It also compares two values for equality, but it does not perform type coercion before making the comparison. That means that if the two values being compared have different types, the comparison will always return `false`. 

<br>
<b>Question 16</b>: 

```javascript
for (let property in statistics) {
    if(key.charAt(0) === 'r' || myObject[key] % 2 === 1){
        console.log(`${property}: ${object[property]}`);
    }
}
```

<br>
<b>Question 17</b>:

- Result: `[2, 4, 6]`
- The `modifyArray` function takes two parameters: an array and a callback function.
Within the `modifyArray` function, a new empty array `newArr` is created to hold the modified values. A for loop iterates over each element in the input array. For each element, the `callback` function is called with the current element as an argument. The result of calling the `callback` function with the current element is pushed onto the `newArr` array. Once the loop is finished, the `newArr` array is returned as the result.
In this case, the `doSomething` function is passed as the callback function. The `doSomething` function takes a number as input and returns that number multiplied by 2. So, when `modifyArray([1, 2, 3], doSomething)` is called, the `callback` function is the `doSomething` function, which takes each element of the input array in turn and multiplies it by 2. This results in the new array `[2, 4, 6]`.

<br>
<b>Question 18</b>:

```javascript
function printTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

setInterval(printTime, 1000);
```

<br>
<b>Question 19</b>:
1 3 4 2

  

