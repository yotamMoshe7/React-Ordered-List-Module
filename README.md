# React-Ordered-List-Module
The project implements list management.

# Main functionality: 
1. Push up an element to list.
2. Pop an element from list.
3. When pop element from list, the largest element will show up, in the next pop up, the second largest element will return and so on.
3. Unit Tests to validate that the operations are performed with the required efficiency.

![Novidea picture](https://user-images.githubusercontent.com/57434735/115446364-cbb11c80-a21f-11eb-86e3-20c670019d12.PNG)

# The project implement 2 kinds of list management:

## Quick Pop Ordereded list
1. Push an element - in this implementation the list will always remain sorted, each element will be insert to the sorted position in the list. </br>
   o(n) in the worst case.
2. Pop up element - since the list is already sorted, by each click on the pop up button, the first element in list will appear, in the next pop up, the second largest element    will return and so on.</br>
   o(1) in the worst case.

## Quick Push Ordereded list
1. Push an element - In this implementation each element will be added to the end of the list.</br>
   o(1) in the worst case.
2. Pop up element - by clicking on the pop up element, the function will check all the elements in the list and the largest element will be returned, in the next click on the pop   up, the second largest element will return and so on.</br>
  o(n) in the worst case.

## Run project instructions
1. For start the project just type in terminal 'npm install' and 'npm start'.
2. For running Unit Test just type in terminal 'npm test'.
