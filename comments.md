08.05.2023
Initialing project
1. Changed content the package.json (string number 5, link to homepage).
2. npm install.
3. npm i clsx.
4. npm i prop-types.

10.05.2023
Commons settings
1. npm i shortid. Check by "https://bundlephobia.com/": (2.5kB MINIFIED; 1.1kB MINIFIED + GZIPPED).
2. Added "import { Component } from 'react';" to the App.jsx file.
3. Changed "App" component to component-class.
4. Added "export class App;" to the App.jsx.
5. Added "extends Component" for "App" component-class
6. Added "state" to the "App" component-class.
7. Added the method render() to the "App" component-class.

Step 1 "Adding name of a contact and show list contacts"
1. Added a markup to the render() of "App" component-class.
2. Added the values to the "state" of the "App" component-class.
3. Added <label> "Name" to the markup in the render() of the "App" component-class.
4. Added <button type="submit"> to the markup in the render() of the "App" component-class.
5. Added "htmlFor={ this.nameInput }" to the <label>.
6. Added "value={ this.state.name }" to the <input>.
7. Added a "handleChange" method to the "App" component-class.
8. Added "import shortid from 'shortid';" to the App.jsx.
9. Added an "addContact" method to the "App"component-class - create an object with two elements: 1) id: shortid.generate
   (), 2) name: this.currentTarget.value.
10. Added a "handleSubmit" method to the "App" component-class.
11. Added "event.preventDefault();" to the "handleSubmit" method.
12. Added block "Contacts" to the markup in the render() of the "App" component-class.
13. Added render <li> items by map() in the block "Contacts".

TOTAL:
1. The Phonebook app must consists of a "form" and a "contacts list".
2. Adding a contact name is implemented at the current step.
3. The app didn't must save contacts between different sessions (updata page).
4. Used markup of template includes validate for contact name.
5. The "state" is corresponds template.
6. Each "contact" is an object with values: "name" and "id".
7. For generate "id" used "shortid".

Step 2 "Extention of the app functionality"
1. Added an element "number" to the "state" of "App" component-class.
2. Added markup in the render() of "App" component-class for <input type="tel">.
3. Added "htmlFor={this.numberInput}".
4. Added "value={this.state.number}" to <input>.
5. Added a "handleChangeNumber" method to the "App" component-class.
6. Changed name the "handleChange" method to "handleChangeName".

TOTAL: Added a function for adding phone number.

Step 3 "Add search field"
1. Created a "data" folder in the "src" folder.
2. Created a contacts.json file in the "data" folder.
3. Added data in the contacts.json file.
4. Added an element "filter" to the "state" of "App" component-class.
5. Added import the contacts.json to the App.jsx.
6. Added data from contacts.json to the elements in "state" of "App" component-class.
7. Added search field (<input/> without <form>).
8. Added "value={this.state.filter}" to <input>.
9. Destructuring the "state" values in the render() of "App".
10. Added a "changeFilter" method in the "App" component-class.
11. Added "onChange={this.changeFilter}" to the <input>.
12. Added the methods "filter()", "includes()" and "toLowerCase()".

TOTAL:
1. Added search field.
2. The search field it's "input" without "fopm".
3. A value of the search field write to "state" (derived data).
4. Use the method toLowerCase().