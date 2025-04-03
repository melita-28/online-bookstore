
function updateCountdown() {
    const eventDate = new Date('April 10, 2025 10:00:00').getTime();
    const currentDate = new Date().getTime();
    const timeDifference = eventDate - currentDate;
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    document.getElementById("countdown").innerHTML = 
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
    if (timeDifference < 0) {
      document.getElementById("countdown").innerHTML = "The event has started!";
    }
  }
  
  setInterval(updateCountdown, 1000);
  
  
  function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!username || !email || !password) {
      alert("All fields must be filled out!");
      return false;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address!");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return false;
    }
  
    return true;
  }
  