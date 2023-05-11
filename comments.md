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

Step 4 "Refactor app"
1. Created a "contactForm" folder in the "components" folder.
2. Created a "contactList" folder in the "components" folder.
3. Created a "filter" folder in the "components" folder.
4. Created a "contactsItem" folder in the "components" folder.
5. Created a ContactForm.jsx file in the "contactForm" folder.
6. Created a ContactList.jsx file in the "contactList" folder.
7. Created a Filter.jsx file in the "filter" folder.
8. Created a ContactsItem.jsx file in the "contactsItem" folder.

11.05.2023
9. Created a "ContactList" component in the ContactList.jsx.
10. Added "export default ContactList;" to the ContactList.jsx.
11. Added a markup to the "ContactList" component.
12. Added import the "ContactList" component to the "App" component-class.
13. Changed the part markup in the render() of the "App" component-class to <ContactList> component.
14. Created a "Filter" component in the Filter.jsx.
15. Added "export default Filter;" to the Filter.jsx.
16. Added props to the "Filter".
17. Added import the "Filter" component to the "ContactList" component.
18. Changed the part markup in the render() of the "ContactList" component to <Filter> component.
19. Added props to the "ContactList".
20. Added parameters to the <ContactList> component in the "App" component-class.
21. Created a "ContactsItem" component in the ContactsItem.jsx.
22. Added "export default ContactsItem;" to the ContactsItem.jsx.
23. Added a markup to the "ContactsItem" component.
24. Added props to the "ContactsItem".
25. Added import the "ContactsItem" component to the "ContactList" component.
26. Changed the part markup in the render() of the "ContactsItem" component to <ContactList> component.
27. Added parameters to the <ContactsItem> component in the "ContactList" component.
28. Added "import { Component } from 'react';" to the ContactForm.jsx file.
29. Created a "ContactForm" component-class in the ContactForm.jsx.
30. Added "extends Component" for "ContactForm" component-class.
31. Added "state" to the "ContactForm" component-class.
32. Added the method render() to the "ContactForm" component-class.
33. Added a markup to the render() of "ContactForm" component-class.
34. Added "export default ContactForm;" to the ContactForm.jsx.
35. Added import the "ContactForm" component-class to the "App" component-class.
36. Changed the part markup in the render() of the "App" component-class to <ContactForm> component-class.
37. Moved "state" elements: "name" and "number" of the "App" to the "ContactForm".
38. Moved methods "handleChangeName", "handleChangeNumber" and "handleSubmit" of the "App" to the "ContactForm".
39. Added parameters to the render() "ContactForm" component-class.

TOTAL: Refactor app. Create the components (class): <ContactList>, <Filter>, <ContactForm>, <ContactsItem>.