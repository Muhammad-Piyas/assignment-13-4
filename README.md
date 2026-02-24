## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Answer:

- getElementById: This returns only the element with a specific ID. This is the fastest in terms of performance.

- getElementsByClassName: This returns a live HTMLCollection containing all elements of the same class. It looks like an Array, but it is not a real Array.

- querySelector: This returns the first element found using a CSS selector. It is much more flexible.

##

## How do you create and insert a new element into the DOM?

## Answer:

First, you need to create the element with document.createElement('tagName'). Then, you need to set the content with innerText or innerHTML and insert it inside the specified parent element with appendChild() or insertBefore().

##

#
