
let img = document.getElementById("img-loaded")
let file
document.getElementsByClassName('file')[0].addEventListener('change', event => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        img.src = event.target.result;
        file = event.target.result
    })
    reader.readAsDataURL(event.target.files[0]);
})


async function carica() {
    let url = 'http://127.0.0.1:3000/api/admin/upload'
    const data = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: document.getElementsByClassName('nome-opera')[0].value,
            tecnica: document.getElementsByClassName('tecnica')[0].value,
            descrizione: document.getElementsByClassName('descrizione')[0].value,
            altezza: document.getElementsByClassName('altezza')[0].value,
            larghezza: document.getElementsByClassName('larghezza')[0].value,
            img: file,
            anno: document.getElementsByClassName('anno')[0].value,
            categoria: document.getElementsByClassName('categoria')[0].value

        })
    })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            return res
        });
    return data
}

async function get(url) {
    const data = await fetch(url)
        .then(res => res.json())
        .then(res => console.log(res));
}

async function post(url) {
    const data = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            user: document.getElementById('user').value,
            password: document.getElementById('password').value
        })
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.messaggio == "Non autorizzato") {
                alert("user o password errati")
            } else if (res.messaggio == "login") {
                location.href = 'admin.html';
            }
        });
}


