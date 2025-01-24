let pass = document.getElementById("password")
let msg = document.getElementById("message")
let str = document.getElementById("strength")

pass.addEventListener('input', () => {
    if(pass.value.length > 0) {
        msg.style.display = "block"
    } else {
        msg.style.display = "none"
    }

    if(pass.value.length < 4) {
        str.innerHTML = "weak"
        pass.style.borderColor = "tomato"
        str.style.color = "tomato"
    } else if(pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium"
        pass.style.borderColor = "orange"
        str.style.color = "orange"
    } else if(pass.value.length >= 8) {
        str.innerHTML = "strong"
        pass.style.borderColor = "rgb(0, 221, 0)"
        str.style.color = "rgb(0, 221, 0)"
    }
})