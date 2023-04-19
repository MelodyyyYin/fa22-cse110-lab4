<b>Question 1</b>: 3, because the last condition we check for the forloop is i = 3 and i = 3 < 3 (price length) is false, the loop will stop. since type of i is var, we can access it anywhere. <br>
<b>Question 2</b>: 285,  because the last loop of forloop that we will run is i = 2, price[2] = 300, 300*0.95 = 285. Here is the last place we modified discounted price. since type of discounted price is var, we can access it anywhere. <br>
<b>Question 3</b>: 285, the last place we modified finalPrice is the last forloop. the final price will set to 285 after run the math.round command. since type of finalPrice is var, we can access it anywhere.<br>
<b>Question 4</b>: [95, 190, 285], every time we run the forloop it will push the discounted price result to discounted vector. We go through all the price input and get the result [95, 190, 285]. since type of vector discounted price is var, we can access it anywhere.<br>
<b>Question 5</b>: error, because we cannot access let if it's not in the same block scope. i is define in the for loop block and line 12 is not. <br>
<b>Question 6</b>: error, because we cannot access let if it's not in the same block scope. Discounted price is define in the for loop block and line 13 is not. <br>
<b>Question 7</b>: 285, because the final price is defined outside of forloop. It defined in the same block as line 14, so we can access it.<br>
<b>Question 8</b>:[95, 190, 285], because discounted and return statement is in the same block scope. We modify discounted in the forloop but did not defined in forloop. <br>
<b>Question 9</b>: error, because we cannot access let if it's not in the same block scope. i is define in the for loop block and line 12 is not.
<b>Question 10</b>: print 3, because we can access const if varible length and line 12 in the same block scope.
<b>Question 11</b>: runtime error, because we cannot modify the const variable. In the forloop, we are trying to modify the const, which cause error.
<b>Question 12</b>:
<b>Question 13</b>:
