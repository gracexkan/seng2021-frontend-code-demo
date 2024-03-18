console.log("hello world");

submitOnClick = () => {
    const blueText = document.getElementById("blue-txt");
    if (blueText.innerText == "hello") {
        blueText.innerText = "bye";
    } else {
        blueText.innerText = "hello";
    }
}

const submitBtn = document.getElementById("submit-invoice-btn");
submitBtn.addEventListener("click", submitOnClick);