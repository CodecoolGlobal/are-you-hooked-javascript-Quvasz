# Are you hooked ?

## Story

ACME corporation wants to transition from pen and paper for keeping track of it's employees data and go digital. Currently a lot of mockups are being produced by the product team and they asked you to add some logic to manipulate the sample data so that the mockups are more realistic for the demo.

## What are you going to learn?

- react state hooks
- updating arrays through stata hooks

## Tasks

1. When you type letters in the `name` header of the table the rows are filtered to show the ones which have in the their name those characters
    - Typing `Tiger` in the name column only displays the row with the name `Tiger Nixon`
    - The filter is case insensitive so typing `tiger ` in the name column only displays the row with the name `Tiger Nixon`

2. Pressing the `+` or `-` button in each row increases or decreases the salary value by 100 for that specific row only
    - Pressing the `+` button in the row with the name `Tiger Nixon` only increases the salary in that row
    - Pressing the `-` button in the row with the name `Tiger Nixon` only decreases the salary in that row
    - After decreasing the salary for `Tiger Nixon` and filtering the table for `Tiger Nixon` the salary remains changed (does not reset to initial value)
    - After filtering the table for `Tiger Nixon`, increasing his salary does not reset the filtered rows
    - After filtering the table for `Tiger Nixon`, changing his salary and then removing the filter the salary of `Tiger Nixon` remains changed

3. When the user enters text in the `Enter your password` and `Verify your password` text boxes a message is displayed if the content is not matching
    - Typing `1234` in the input box `Enter your password` and `1234` in the input box `Verify your password` shows the message `Access granted`
    - Typing `12` in the input box `Enter your password` and `1234` in the input box `Verify your password` shows the message `Passwords do not match`

4. The entered password must be at least characters long, contain any of the symbols `!@#$%^&*`, contain a number, a lower case letter and a upper case letter
    - Typing `pass` in the input box `Enter your password` shows the message `Password must: be at least 8 characters long & contain a capital letter & contain a number & contain a special symbol`
    - Typing `pass1` in the input box `Enter your password` shows the message `Password must: be at least 8 characters long & contain a capital letter & contain a special symbol`
    - Typing `pass1A` in the input box `Enter your password` shows the message `Password must: be at least 8 characters long & contain a special symbol`
    - Typing `pass1A!` in the input box `Enter your password` shows the message `Password must: be at least 8 characters long`
    - Typing `pass1A!123` in the input box `Enter your password` shows the message `Good choice of password!`
    - Typing `` in the input box `Enter your password` does not show any message

## General requirements

None

## Hints

- once you start the project you first need to install the react library with `npm install`
- once all the react libraries are installed, you can start the project  with `npm start`
- when updating an array through a react hook it is necessary to give as parameter for the setter a new array instead of the current array with a modified object (more info in background materials)

## Background materials

- <i class="far fa-video_camera"></i> [Deep dive into how react hooks work](https://drive.google.com/file/d/1eoSaG-VH_SW4z6A8Zz1svLEnHfHPLP14/view?usp=sharing)
- <i class="far fa-exclamation"></i> [Use State Hook](https://reactjs.org/docs/hooks-state.html)
- <i class="far fa-exclamation"></i> [Upgrading arrays in hooks](https://javascript.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc)
- <i class="far fa-book-open"></i> [Debugging a React project](https://blog.logrocket.com/debug-react-applications-with-the-new-react-devtools/)
- <i class="far fa-book-open"></i> [JS String functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
