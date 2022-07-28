# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the project's dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Feature list

1. Create a form and save the values (on click of Submit button) to an external file.

2. Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format

3. Develop your project using a common JavaScript framework such as React, Angular, Vue, etc.

### possible features:

1. Create a web server with at least one route and connect to it from your application using ExpressJS

2. Implement a drag-and-drop interface that allows the user to move elements or items on the page around. For example, drag a file or image into the app from your desktop and have it display

### reciving emails:

Navigate to the server.js found in the main project directory. There you will find

```
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "temp12345@gmail.com",
    pass: "temp12345",
  },
});
```

you will have to change the user and pass to your own email address and password. You will
allso have to change the email found on line 36 to your own email address.

```
to: "temp12345@gmail.com",
```

Now run the server.js file in the terminal.

`node server.js`

if all is set up correctly the server will start will be able to receive emails to your email address from the contact form.
