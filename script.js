async function checkCoolness() {
    const bio = document.getElementById('bioInput').value;
    const resultDiv = document.getElementById('result');
    const bioInput = document.getElementById('bioInput');
    const submitBtn = document.querySelector('.submit-btn');
    const loading = document.getElementById('loading');
    const tryAgainBtn = document.getElementById('tryAgainBtn');
    
    if (!bio) {
        resultDiv.innerHTML = 'Please enter a bio.';
        return;
    }

    bioInput.style.display = 'none';
    submitBtn.style.display = 'none';
    loading.style.display = 'block';

    try {
        const response = await fetch('https://howcoolami-lol.onrender.com/coolness', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bio }),
        });
        const data = await response.json();

        loading.style.display = 'none';
        if (data.error) {
            resultDiv.innerHTML = 'Error: ' + data.error;
        } else {
            resultDiv.innerHTML = `Your coolness score is <strong>${data.coolness}%</strong>`;
        }
        resultDiv.style.display = 'block';
        tryAgainBtn.style.display = 'block';
    } catch (error) {
        loading.style.display = 'none';
        resultDiv.innerHTML = 'There was an error contacting the server.';
    }
}

function resetForm() {
    const bioInput = document.getElementById('bioInput');
    const submitBtn = document.querySelector('.submit-btn');
    const resultDiv = document.getElementById('result');
    const tryAgainBtn = document.getElementById('tryAgainBtn');
    
    bioInput.value = '';
    bioInput.style.display = 'block';
    submitBtn.style.display = 'block';
    resultDiv.style.display = 'none';
    tryAgainBtn.style.display = 'none'; 
}
