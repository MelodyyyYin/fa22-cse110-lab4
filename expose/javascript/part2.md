<b>Question 1</b>: 3, because the last condition we check for the forloop is i = 3 and i = 3 < 3 (price length) is false, the loop will stop. since type of i is var, we can access it anywhere. <br>
<b>Question 2</b>: 285,  because the last loop of forloop that we will run is i = 2, price[2] = 300, 300*0.95 = 285. Here is the last place we modified discounted price. since type of discounted price is var, we can access it anywhere. <br>
<b>Question 3</b>: 285, the last place we modified finalPrice is the last forloop. the final price will set to 285 after run the math.round command. since type of finalPrice is var, we can access it anywhere.<br>
<b>Question 4</b>: [95, 190, 285], every time we run the forloop it will push the discounted price result to discounted vector. We go through all the price input and get the result [95, 190, 285]. since type of vector discounted price is var, we can access it anywhere.<br>
<b>Question 5</b>: error, because we cannot access let if it's not in the same block scope. i is define in the for loop block and line 12 is not. <br>
<b>Question 6</b>: error, because we cannot access let if it's not in the same block scope. Discounted price is define in the for loop block and line 13 is not. <br>
<b>Question 7</b>: 285, because the final price is defined outside of forloop. It defined in the same block as line 14, so we can access it.<br>
<b>Question 8</b>:[95, 190, 285], because discounted and return statement is in the same block scope. We modify discounted in the forloop but did not defined in forloop. <br>
<b>Question 9</b>: error, because we cannot access let if it's not in the same block scope. i is define in the for loop block and line 12 is not. <br>
<b>Question 10</b>: print 3, because we can access const if varible length and line 12 in the same block scope. <br>
<b>Question 11</b>: runtime error, because we cannot modify the const variable. In the forloop, we are trying to modify the const, which cause error.<br>
<b>Question 12</b>:
1. `alert(student.name);`
2. `alert(student["Grad Year"]);`
3. `greeting();`
4. `alert(student[FavoriteTeacher.name]);`
5. `alert(Courseload[0]);`



   <br>
   <b>Question 13</b>:
-  A: Output: `32`
   > Node.js has concatenated the string `3` with the number 2 to produce the string `32`.
-  B: Output: `1`
   > Node.js has converted the string `3` to a number and then subtracted the number 2 from it, resulting in the number 1. This is because the minus operator `-` is only defined for numeric types, so JavaScript automatically converts the string to a number before performing the subtraction.
-  C: Output: `3`
   > Node.js has added the number 3 and the value `null`. In JavaScript, when I perform an arithmetic operation involving null, it is treated as `0`. Therefore, the expression `3 + null` is equivalent to `3 + 0`, which results in the number 3.
-  D: Output: '3null'
   >  Node.js has concatenated the string `3` and the value null. In JavaScript, when you perform a string concatenation involving null, it is converted to the string `null`. Therefore, the expression `'3' + null` is equivalent to the string concatenation `'3' + 'null'`, which results in the string `'3null'`.