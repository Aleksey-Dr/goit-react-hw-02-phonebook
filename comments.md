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
6. Add "state" to the "App" component-class.
7. Add the method render() to the "App" component-class.

Step 1 "Adding name of a contact and show list contacts"
1. Added a markup to the render() of "App" component-class.
2. Added the values to the "state" of the "App" component-class.
3. Added <label> "Name" to the markup in the render() of the "App" component-class.
4. Added <button type="submit"> to the markup in the render() of the "App" component-class.
5. Add "htmlFor={ this.nameInput }" to the <label>.
6. Add "value={ this.state.name }" to the <input>.
7. Add a "handleChange" method to the "App" component-class.
8. Add "import shortid from 'shortid';" to the App.jsx.
9. Add an "addContact" method to the "App"component-class - create an object with two elements: 1) id: shortid.generate
   (), 2) name: this.currentTarget.value.
10. Add a "handleSubmit" method to the "App" component-class.
11. Add "event.preventDefault();" to the "handleSubmit" method.
12. Add block "Contacts" to the markup in the render() of the "App" component-class.
13. Add render <li> items by map() in the block "Contacts".

TOTAL:
1. The Phonebook app must consists of a "form" and a "contacts list".
2. Adding a contact name is implemented at the current step.
3. The app didn't must save contacts between different sessions (updata page).
4. Used markup of template includes validate for contact name.
5. The "state" is corresponds template.
6. Each "contact" is an object with values: "name" and "id".
7. For generate "id" used "shortid".