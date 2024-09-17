import { getdata , getitem } from "./data.js"

const box__phones = document.querySelector(".phone")
const modal = document.querySelector(".modal")
const closemod = document.querySelector(".close-btn")
const contmod = document.querySelector(".modal__cont")


const getrender = async () => {
    const data = await getdata(`phones`)
    box__phones.innerHTML = data.map((item) => `
    <div>
    <img src="${item.img}" alt="">
    <h1>${item.title}</h1>
    <button data-title="phones" data-id="${item.id}">info</button>
    </div>
    `)
}


getrender()

const local = (data) => {
    const olddata = JSON.parse(localStorage.getItem("numbers")) || []
    localStorage.setItem("numbers", JSON.stringify([data, ...olddata]))
}

const openmod = (data) => {
    modal.style.display = "block"
    contmod.innerHTML = `
    <img src="${data.img}" alt="">
    <h2>${data.title}</h2>
    <button class="button">add</button>
    `
    const btn = document.querySelector(".button")
    btn.addEventListener("click", () =>{
        local(data)
    })
}


box__phones.addEventListener("click", async (e) => {
    if(e.target.dataset.id){
        const data = await getitem(e.target.dataset.title,e.target.dataset.id)
        openmod(data)
    }
})


closemod.addEventListener("click", () => {
    modal.style.display = "none"
})
