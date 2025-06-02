document.getElementById("payBtn").addEventListener("click", () => {
  fetch("https://api.example.com/pay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount: 5000,
      currency: "USD",
      description: "Test payment"
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerText = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    document.getElementById("result").innerText = "Error: " + err.message;
  });
});
