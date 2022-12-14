# Junior-Mid Level Frontend Software Engineer Roadmap

## Basic Javascript

- Syntax
- Variables, assignment, and differences between let, var, const<br>
      - var - is hoisted and can be overwritten and has wonky scoping <br>
      - let - is a variable that can change and has superseded var; mutable<br>
      - const - is a variable that can't be changed once it has been assigned; immutable<br>
      https://medium.com/@codingsam/awesome-javascript-no-more-var-working-title-999428999994
- Comparison Operators<br>(== vs ===, > < >= <=, !== vs !=, &&, ||)
      <br> == --> loosely equal
      <br> === --> strictly equal
      <br> > --> greater than
      <br> < --> less than
      <br> >= --> greater than or equal to
      <br> <= --> less than or equal to
      <br> != --> does not equal (just type)
      <br> !== --> strictly does not equal (type and value)
      <br> && --> (both variable sides need to be true)
      <br> || --> OR operator (either variable side needs to be true)
- Array Methods (forEach, map, some, push, pop, shift, unshift, slice, sort)
- Logic decision making (if/else, ternary)<br>
      - Control flow is a nice way to think about if/else and ternary operators. It's saying to the program that IF this is true run this code or ELSE run that code
- Asynchronous data requests (fetch, or framework specific fetch (angulars HttpClientModule))
- DOM Manipulation - manipulating elements on the screen based off of user interaction or application states
- Concepts of Hoisting, Event bubbling, Scope, Prototypes
- ES6 Syntax - Destructuring, Spread operator, Arrow Functions, "this" context

## Browser Debugging

- Using DevTools to debug Javascript/HTML/CSS at runtime. Leveraging the tool to your advantage.<br>
      - Using the inspect tool on Chrome helps you peer into elements and check what's happening under the website page's hood

## Version Control

- Using git and understanding how to leverage it.<br>
      - Git is a system of saving and tracking all changes made to a project and its files. Git can be run on a local maching, but also distributed remotely to spaces like Bitbucket or Github to be saved online. <br>
      - Common commands for git are 'git init' which initializes git, 'git add .' which will add all your files/changes to stage, 'git commit' which saves(commits) your files/changes to the branch, 'git status' which lets you know the status of your files

## Package Managers`

- Understanding the basics of npm, the primary javascript package management solution <br>
      - NPM - stands for Node Package Manger - its a tool used for mannaging (installing and running) packages<br>
      - Free to use
      - Has command line functionality
      - Is used in tandem with Nodejs (runtime environment that allows JS to be run outside the browser)
- Understanding `package.json`, `npm install`, and how to run scripts `npm run`

## CSS

- Understanding of Flexbox, grid, css variables, positioning, box models, em/rem sizing units
- CSS preprocessors - Basic Sass knowledge like creating variables and reusing them via imports
- Understanding of a common CSS Framework/Library - Bootstrap, TailwindCSS, Material
- calc() - Understand how to make calculations in css for sizing elements

## Advanced Topics but ones you'll interact within our codebase regularly

### RxJs

- Streaming Events and async pipelines (functional programming)
- Reactive Programming - Reacting to state changes and having UI update accordingly

### State Management

- Similar to a database but used on the front-end to maintain state of specific components and 
      data being passed via the API (we use Akita: https://opensource.salesforce.com/akita/ )

### Frontend Frameworks & Libraries

- Experience with a framework/library such as React, Vue, Angular, Svelte, etc.
- Understanding the way these tools allow you to build in routing
- Understanding how these tools allow you to pair logic into your markup for DOM manipulation.

### Typescript

- Understanding why strong typing is important and beneficial
- Understanding the differences between Classes, Interfaces, Types, Enums, and Generics
- Understanding Inheritance (OOP)

## Important Resources


- [FreeCodeCamp](https://www.freecodecamp.org/) - Free way to learn and solve real world issues. Covers everything from front-end to backend. 
- [Mozilla Develper Network](https://developer.mozilla.org/en-US/) - Complete documentation for HTML, CSS, and Javascript Browser API's.