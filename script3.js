document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('customerName').value;
    const orderId = document.getElementById('orderId').value;
    const courier = document.getElementById('courierName').value;
    const trackingId = document.getElementById('trackingId').value;
  
    const message = `Hi ${name} 👋
  
  Your order from Sigma Drip has been Delivered today 📦
  
  📝 Order Details:
  - Order ID: #${orderId}
  - Currier: ${courier}
  - Tracking ID: ${trackingId}
  
  You are now a Sigma 🗿
  
  - Sigma Drip`;
  

    document.getElementById('output').textContent = message;
  });
  
  document.getElementById('copyBtn').addEventListener('click', function() {
    const message = document.getElementById('output').textContent;
    navigator.clipboard.writeText(message).then(() => {
      alert('Message copied to clipboard!');
    });
  });
  