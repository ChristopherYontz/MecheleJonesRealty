document.getElementById('emailButton').addEventListener('click', function() {
    const email = 'mailto:Mechele1130@gmail.com'; // Replace with your email address
    window.location.href = email;
  });

document.getElementById('callButton').addEventListener('click', function() {
  const phoneNumber = '+3106138793'; // Replace with your phone number including the country code
  window.location.href = 'tel:' + phoneNumber;
});