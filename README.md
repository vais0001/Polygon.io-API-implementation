***Step by step guide to implement the Polygon.io API into your project.***

1.	Setup the HTML structure.
    1. Create a new HTML file.
    2. Link the CSS file by adding a “<link>” tag with the “href” attribute set to “styles.css”
    3. Link the JavaScript file by adding a “<script>” tag with the “src” attribute set to “script.js”
    4. Create a text input to be able to write the stock name and a button to call the “getStockData” function.
  
  ```html
  <!DOCTYPE html>
<html>
<head>
  <title>Stock Data</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Stock Data Lookup</h1>
  <div class="form-container">
    <input type="text" id="stockInput" placeholder="Enter stock symbol">
    <button onclick="getStockData()">Get Data</button>
  </div>
  <div id="stockData"></div>

  <script src="script.js"></script>
</body>
</html>

  ```
  
2.	Style the HTML with CSS
    1. Create a new “styles.css” file for the CSS.
    2. Add the following CSS code to style the HTML attributes.
  
  ```css
  body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
  }
  
  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px 0 0 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 8px 16px;
    font-size: 16px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }
  
  #stockData {
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  ```
  
 3.	Set up the JavaScript code.
    1. Create a new JavaScript file named “script.js”
    2. Copy the following JavaScript code into the file.
  
  ```javascript
  function getStockData() {
    const stockInput = document.getElementById("stockInput");
    const stockSymbol = stockInput.value;
    const apiKey = "YOUR API KEY"; //Change this placeholder with your own API key
    const url = `https://api.polygon.io/v1/open-close/${stockSymbol}/2023-01-09?adjusted=true&apiKey=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const stockData = document.getElementById("stockData");
        stockData.innerHTML = `
          <h2>${stockSymbol} Stock Data</h2>
          <p>Open Price: $${data.open}</p>
          <p>Close Price: $${data.close}</p>
          <p>High Price: $${data.high}</p>
          <p>Low Price: $${data.low}</p>
        `;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
  
  ```
  
 4.	Get your API key.
    1. Go to the Polygon.io website (https://polygon.io/) and sign up for and account.
    2. Once an account has been created, click the “Get your Free API Key” and navigate down until you find the API key and copy it.
    3. Replace the placeholder API key.
    4. In the JavaScript file, locate the “const apiKey = “YOUR API KEY”;”
    5. Replace the “YOUR API KEY” with your own Polygon.io API key that you copied in step 4.
  
  
 6.	Test the implementation.
    1. Save all of the files.
    2. Open the “index.html” file in your browser.
    3. Enter a valid stock symbol in the input field, like AAPL or GOOGL (for companies Apple and Google).
    4. The stock data, including the open, close, high and low prices should be fetched from the Polygon.io API and displayed on the page.

The tutorial was created by ***Dominykas Vaisnoras***.
