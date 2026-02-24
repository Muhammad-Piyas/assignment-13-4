# Answers to 5 Questions

### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Answer:

- getElementById: This returns only the element with a specific ID. This is the fastest in terms of performance.

- getElementsByClassName: This returns a live HTMLCollection containing all elements of the same class. It looks like an Array, but it is not a real Array.

- querySelector: This returns the first element found using a CSS selector. It is much more flexible.

##

### How do you create and insert a new element into the DOM?

## Answer:

First, you need to create the element with document.createElement('tagName'). Then, you need to set the content with innerText or innerHTML and insert it inside the specified parent element with appendChild() or insertBefore().

##

### What is Event Bubbling? And how does it work?

## Answer:

Event bubbling is a process where when an event (e.g. click) occurs on a child element, it gradually propagates to its parent and its parents above it (from bottom to top). For example, if you click a button, that click event will also reach its container div.

##

### What is Event Delegation in JavaScript? Why is it useful?

## Answer:

Event delegation is the practice of placing a single event listener on a common parent element rather than on multiple child elements. This saves memory and works even if new child elements are added dynamically later.

##

### What is the difference between preventDefault() and stopPropagation() methods?

## Answer:

- preventDefault(): This prevents the browser's default behavior (e.g., reloading the page after a form is submitted or going to another page when clicking a link).

- stopPropagation(): This prevents event bubbling, i.e., ensuring that the event does not reach the parent element.

##
