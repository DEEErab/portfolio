# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To start to project

In the project directory, you can run:

### `npm install`

Installs the project's dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Feature list

1. Create a web server with at least one route and connect to it from your application using ExpressJS

2. Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format

3. Develop your project using a common JavaScript framework such as React, Angular, Vue, etc.

### possible features:

1. Implement a drag-and-drop interface that allows the user to move elements or items on the page around. For example, drag a file or image into the app from your desktop and have it display

## #1, Create a web server with at least one route and connect to it from your application using ExpressJS

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

```
node server.js
```

if all is set up correctly the server will start will be able to receive emails to your email address from the contact form.

## #2, Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format

Email validation found in src/components/contact/index.js

```
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Please enter a valid email address.");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };
```

HTML for the validation.

```
<ContactFormEmail
  value={message}
  onChange={handleChange}
  type="email"
  id="email"
></ContactFormEmail>
<ValidEmail>{error}</ValidEmail>
```

## #3, Develop your project using a common JavaScript framework such as React, Angular, Vue, etc.

developed using React.js and styled-components.

## Future updates:

1. decide what projects should be added
2. write content for the about section
