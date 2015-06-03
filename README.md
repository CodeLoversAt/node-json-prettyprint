# node-json-prettyprint
Tiny Node.js app for pretty-printing JSON data

## Usage

1. Start app `npm start`
2. Go to `http://localhost:3000`
3. Enter your JSON data into the big textarea
4. Click *Prettify*

The response will contain the prettified JSON data with `Content-Type: application/json`. If you use an extension like [JSON Formatter for Google Chrome](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) you can directly inspect your JSON in the browser. If you don't have such an extension, you will just see the well formatted JSON.
