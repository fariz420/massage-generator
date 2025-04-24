document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('customerName').value;
    const orderId = document.getElementById('orderId').value;
    const itemsName = document.getElementById('itemsName').value;
    const totalItems = document.getElementById('totalItems').value;
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
  
    const message = `Hi ${name} 👋
  
  Thank you for placing your order with Sigma Drip! 🎉
  
  Your order ${itemsName} has been successfully received and is now being processed.
  
  📝 Order Details:
  - Order ID: #${orderId}
  - Item(s): ${totalItems}
  - Total Amount: ₹${amount}
  - Payment Method: ${paymentMethod}
  
  📦 You will receive a notification once your order is shipped.
  
  Thank you for choosing Sigma Drip! ❤`;
  
    document.getElementById('output').textContent = message;
  });
  
  document.getElementById('copyBtn').addEventListener('click', function() {
    const message = document.getElementById('output').textContent;
    navigator.clipboard.writeText(message).then(() => {
      alert('Message copied to clipboard!');
    });
});
  
