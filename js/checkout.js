function handleCheckout() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        showLogin();
        return;
    }
    showCheckoutModal();
}

// Open Checkout Modal
function showCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'flex';
}

// Submit Checkout
function submitCheckout() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const city = document.getElementById('custCity').value.trim();

    if (!name || !phone || !address || !city) {
        showMessage('Please fill all fields!');
        return;
    }

    console.log('Order Details:', { name, phone, address, city });

    // Success Message
    showMessage('Order placed successfully! Thank you for shopping.');

    // Close checkout modal
    closeModal('checkout-modal');

    // Auto close message after 2.5 sec
    setTimeout(() => closeModal('message-modal'), 2500);
}

// Show Register Modal
function showRegister() {
    document.getElementById('register-modal').style.display = 'flex';
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('message-modal').style.display = 'none';
}

// Show Login Modal
function showLogin() {
    document.getElementById('login-modal').style.display = 'flex';
    document.getElementById('register-modal').style.display = 'none';
    document.getElementById('message-modal').style.display = 'none';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Show Custom Message
function showMessage(text) {
    document.getElementById('message-text').textContent = text;
    document.getElementById('message-modal').style.display = 'flex';
}

// Registration Form Submission
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // Check if user already exists
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        showMessage('User with this email already exists!');
        return;
    }

    // Save user to localStorage
    const user = { username, email, password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    showMessage('Registration successful! Please login.');
    document.getElementById('registerForm').reset();
    setTimeout(showLogin(), 2000);
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        showMessage(`Welcome back, ${user.username}!`);
        document.getElementById('loginForm').reset();

        localStorage.setItem('currentUser', JSON.stringify(user));
        document.getElementById('login-modal').style.display = 'none';

        setTimeout(() => {
            closeModal('message-modal')
        }, 2000);
        // redirect to another page here, e.g., window.location.href = '/dashboard';
    } else {
        showMessage('Invalid email or password!');
    }
});

function logout() {
    localStorage.removeItem('currentUser');
    showMessage('Logged out successfully!');
    setTimeout(() => closeModal('message-modal'), 1500);
}

window.addEventListener('DOMContentLoaded', () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
    }
});