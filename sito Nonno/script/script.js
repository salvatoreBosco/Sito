function details() {
    document.getElementsByClassName("focus hidden")[0].className = "focus"
    document.getElementsByClassName("focus-opera-img")[0].style.I
}

function closeFocus() {
    document.getElementsByClassName("focus")[0].className = "focus hidden"
}

function param() {
    let p1 = document.getElementById('input-cerca-opere').value
    let filter = document.getElementById('select-filter').value
    let url = 'http://127.0.0.1:3002/api/search?query='
    if (filter == "none") {
        url = 'http://127.0.0.1:3002/api/opere/' + p1
        return s(url)
    } else {
        url += p1 + '&limit=99&filt=' + filter
    }
    let b = s(url).then((b) => {
        return b
    })

    return b
}

async function s(url, filter) {
    console.log(url)
    const data = await fetch(url)
        .then(res => res.json())
        .then((res) => {
            return res
        });
    return data
}
let arte
function cercaOpere() {
    document.getElementById('bt-cerca-opere').style.backgroundColor = 'red'
    setTimeout(() => {
        document.getElementById('bt-cerca-opere').style.backgroundColor = 'white' 
    }, 1000);
    let art = param()
        .then((art) => {
            console.log(art)
            if(art.messaggio){
                alert(art.messaggio)
                return 0
            }
            if (art.length < 1) {
                alert("Nessun risultato")
            }
            let img
            if (art.length == 1) {
                document.getElementsByClassName("opere")[0].innerHTML = ``
                img = new Image()
                img.src = 'data:image/png;base64,' + art[0].img
                img.className = 'opera center'
                img.style.height = art[0].altezza + "px"
                img.style.width = art[0].larghezza + "px"
                img.setAttribute("onclick", "details()")
                document.getElementsByClassName("opere")[0].appendChild(img)

            }
            if (art.length > 1) {
                arte = art
                scorri(2)
            }
        })
}
let nImg = 0

function scorri(pos) {
    console.log(arte.length)
    if (pos == 0) {
        nImg++
    }else if(pos == 1){
        nImg--
    }
    if (nImg >= arte.length) {
        nImg--
    }
    if (nImg < 0) {
        nImg++
    }
    document.getElementsByClassName("opere")[0].innerHTML = ``
    let img = new Image()
    img.src = 'data:image/png;base64,' + arte[nImg].img
    img.className = 'opera center'
    img.style.height = arte[nImg].altezza + "px"
    img.style.width = arte[nImg].larghezza + "px"
    img.setAttribute("onclick", "details()")
    document.getElementsByClassName("opere")[0].appendChild(img)
}


