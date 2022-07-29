### To start the project

In the project directory, you can run:

### `npm install`

Installs the project's dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### My Project
The goal of my project is to be able to have a website that I can use to display my work to potental clients/employers. Creating this website was challenging and a learning experince. This was my first time really creating something that has a back-end. And my first time getting into react.js. I overall enjoyed it, and will be creating art and decideing what projects to display in the work section ASAP.

## Feature list

1. Create a web server with at least one route and connect to it from your application using ExpressJS

2. Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format

3. Develop your project using a common JavaScript framework such as React, Angular, Vue, etc.

# possible features:

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

you will have to change the user and pass to your own email address and password.

You will also have to change the email found on line 36 to your own email address.

```
to: "temp12345@gmail.com",
```

If you choose to use Gmail, you will need to enable less secure apps in your Gmail account. Or create a app sepecific password. You can learn how to do that [here](https://support.google.com/mail/answer/185833?hl=en)

If you would like to use a different email service, you can use any service that supports the SMTP protocol. you can learn how to do that [here](https://nodemailer.com/smtp/)

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
