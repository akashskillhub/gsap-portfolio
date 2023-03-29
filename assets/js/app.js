const user = document.getElementById("user")
const dots = document.getElementById("dots")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const cta = document.getElementById("cta")
const navLink = document.querySelector(".nav-link")

console.log("app running...")

const tl = gsap.timeline()
tl.from(user, {
    y: "100vh",
    opacity: 0,
    duration: 1
})
tl.from(dots, {
    rotation: 360,
    scale: 2,
    opacity: 0,
    duration: 1
})
tl.from(title, {
    x: "-200vh",
    duration: 1
})
tl.from(desc, {
    x: "200vh",
    duration: 1
})