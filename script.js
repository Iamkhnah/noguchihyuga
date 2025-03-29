function addtopbar() {
    const troi = document.createElement("div")
    troi.className = "troi"
    document.body.prepend(troi)
    const bar = document.createElement("nav")
    bar.className = "bar"
    bar.innerHTML = `
        <ul class="menu">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./sharecode.html">Share Code</a></li>
                <li><a href="#">Share Tool</a></li>
            </ul>
    `
    troi.prepend(bar)
}

function new2({ img,price, title, info, feat1, feat2, feat3, href_ }) {
    const Content = document.getElementById("Content")
    const Plan = document.createElement("div")
    Plan.className = "plan"
    Plan.innerHTML = `
    <div class="inner">
                <span class="pricing">
                    <span>
                        Free <small>/${price} checkpoint</small>
                    </span>
                </span>
                <img src="${img}">
                <p class="title">${title}</p>
                <p class="info">${info}</p>
                <ul class="features">
                    <li>
                        <span class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor"
                                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                        </span>
                        <span>${feat1}</span>
                    </li>
                    <li>
                        <span class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor"
                                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                        </span>
                        <span>${feat2}</span>
                    </li>
                    <li>
                        <span class="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path fill="currentColor"
                                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                        </span>
                        <span>${feat3}</span>
                    </li>
                </ul>
                <div class="action">
                    <a class="button" href="${href_}">
                        Nhận Mã Nguồn
                    </a>
                </div>
            </div>
    `
    Content.prepend(Plan)
}
const text = document.getElementById("text-loading")
async function loading() {
    const ok = [
        ".",
        ". .",
        ". . ."
    ]
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        alert("Bro! This website only work for Pc");
        window.location.href = "https://google.com";
    } else {
        var i = 0
        setInterval(function() {
            if (text) {
                if (i > 2) {
                    i = 0
                }
                text.innerHTML = `<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-aperture-icon lucide-aperture"><circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94"/><path d="M9.69 8h11.48"/><path d="m7.38 12 5.74-9.94"/><path d="M9.69 16 3.95 6.06"/><path d="M14.31 16H2.83"/><path d="m16.62 12-5.74 9.94"/></svg> </span> Loading ${ok[i]}`
                i = i + 1
            }
        }, 500)
    }
}
async function get() {
    try {
        const response = await fetch("https://duckvitne.pythonanywhere.com/Get");
        const data = await response.json();
        console.log(data); 
        data.forEach(a => {
            new2({
                img: a.img_url,
                price: a.price,
                title: a.Title,
                info: a.Info,
                feat1: a.f1,
                feat2: a.f2,
                feat3: a.f3,
                href_: a.href
            });
        });
    } catch (error) {
        console.error("Lỗi:", error);
    }
    const oitroi = document.getElementById("ha")
    oitroi.remove()
}
get()
loading()
function go(v) {
    window.location.href = v
}
