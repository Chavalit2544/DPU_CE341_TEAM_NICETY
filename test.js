function getIPAddress() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').innerText = 'IP ของคุณคือ : ' + data.ip;
        })
        .catch(error => console.error('Error fetching IP address:', error));
}

// Call the function when the page is loaded
window.onload = getIPAddress;