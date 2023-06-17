function getStockData() {
    const stockInput = document.getElementById("stockInput");
    const stockSymbol = stockInput.value;
    const apiKey = "dAC3tSWtiFqlCp41aXuplSDoNlc40Qgs";
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
  