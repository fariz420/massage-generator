document.getElementById('shippingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('customerName').value;
    const orderId = document.getElementById('orderId').value;
    const courier = document.getElementById('courierName').value;
    const trackingId = document.getElementById('trackingId').value;
  
    const message = `Hi ${name} 👋
  
  Great news! Your order for #${orderId} has been shipped and is on its way to you. 🚚✨
  
  📝 Order Details:
  - Order ID: #${orderId}
  - Currier: ${courier}
  - Tracking ID: ${trackingId}
  
  📦 Track Your Order:
  ⿢ Enter the Tracking code on the tracking page to see your shipment details.
  
  📢 Please note: Tracking information will be updated within 2-3 hours after this message.
  
  If you have any questions, feel free to contact us at 📞 ‪+91-6901914241
  
  Thank you for choosing Sigma Drip! We can’t wait for you to enjoy your purchase. ❤
  
  - Sigma Drip`;
  
    document.getElementById('output').textContent = message;
  });
  
  document.getElementById('copyBtn').addEventListener('click', function() {
    const message = document.getElementById('output').textContent;
    navigator.clipboard.writeText(message).then(() => {
      alert('Message copied to clipboard!');
    });
  });
  