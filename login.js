const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kirim data ke server (contoh menggunakan fetch)
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect ke halaman utama atau tampilkan pesan sukses
            window.location.href = '/';
        } else {
            // Tampilkan pesan error
            alert('Username atau password salah');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});