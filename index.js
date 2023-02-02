function leave() { }
var validateParagraph = document.createElement("p");
var formm = document.getElementById("name");
var submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    if (document.getElementById("name").value === "") {
        var validateParagraph = document.createElement("p");
        validateParagraph.innerText = "please input your name";
        validateParagraph.classList.toggle("validate");
        document.body.appendChild(validateParagraph);
        setTimeout(function () {
            validateParagraph.classList.remove("validate");
        }, 1200);
        setTimeout(function () {
            validateParagraph.classList.add("visibility");
        }, 1200);
    } else {
        var letterCase = document.getElementById("name").value;
        var capitalise = letterCase.slice(0, 1);
        capitalise = capitalise.toUpperCase();

        var smallerCase = letterCase.slice(1, letterCase.length);
        smallerCase = smallerCase.toLowerCase();

        var collect = capitalise + smallerCase;
        var per = document.createElement("h1");
        per.innerText = "Hello," + " " + '"' + collect + '" ';
        document.body.appendChild(per);
        per.classList.toggle("green");
        // Animation
        setTimeout(function () {
            formm.classList.add("visibility");
        }, 100);

        setTimeout(function () {
            submit.classList.add("visibility");
        }, 100);
    }
});