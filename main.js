let display = document.querySelector('#display')
let displayResult = document.querySelector('#displayResult')

let allBtns = Array.from(document.querySelectorAll('.btn'))

allBtns.map(btn => {
    btn.addEventListener('click', (event) => {
        switch (event.target.innerText) {
            case "C":
                display.innerText = ""
                displayResult.innerText = ""
                break
            case "DEL":
                display.innerText
                    ? display.innerText = display.innerText.slice(0, -1)
                    : ""
                break
            case "=":
                try {
                    displayResult.innerText = eval(display.innerText)
                    if (displayResult.innerText === 'undefined') {
                        displayResult.innerText = ""
                    }
                } catch (error) {
                    displayResult.innerText = ""
                    display.innerText = ""
                }
                break
            default:
                display.innerText += event.target.innerText
        }
    })
})

window.addEventListener("keydown", (event) => {
    if (event.key == "c" || event.key == "C" || event.key == "Escape") {
        display.innerText = "";
        displayResult.innerText = ""
    }
    else if (event.key == "Backspace" || event.key == "Delete") {
        display.innerText
            ? display.innerText = display.innerText.slice(0, -1)
            : ""
    }
    else if (event.key == "Enter") {
        try {
            displayResult.innerText = eval(display.innerText)
            if (displayResult.innerText === 'undefined') {
                displayResult.innerText = ""
            }
        } catch (error) {
            displayResult.innerText = ""
            display.innerText = ""
        }
    }
    else if (
        event.key == "0" ||
        event.key == "1" ||
        event.key == "2" ||
        event.key == "3" ||
        event.key == "4" ||
        event.key == "5" ||
        event.key == "6" ||
        event.key == "7" ||
        event.key == "8" ||
        event.key == "9" ||
        event.key == "+" ||
        event.key == "-" ||
        event.key == "*" ||
        event.key == "/" ||
        event.key == "(" ||
        event.key == ")" ||
        event.key == "." ||
        event.key == "%"
    ) {
        displayOnScreen(event.key)
    }
})

function displayOnScreen(key) {
    allBtns.map(btn => {
        if (btn.innerText === key) {
            display.innerText += btn.innerText
        }
    })
}
