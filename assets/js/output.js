const frontEndSkills = [
    { name: "html", percent: 80 },
    { name: "css", percent: 35 },
    { name: "js", percent: 15 },
    { name: "React", percent: 10 },
]
const backEndSkills = [
    { name: "Node Js", percent: 70 },
    { name: "Mongo DB", percent: 45 },
    { name: "SQL", percent: 25 },
    { name: "Express Js", percent: 90 },
]

const fe = document.getElementById("frontend")
const be = document.getElementById("backend")

dispay(frontEndSkills, fe)
dispay(backEndSkills, be)

function dispay(arr, el) {
    for (const item of arr) {
        el.innerHTML += `
        <div class="progress-bar">
            <div class="progress" style="width:${item.percent}%">${item.name}</div>
        </div>
        `
    }
}
