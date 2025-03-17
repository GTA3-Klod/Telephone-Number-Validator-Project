const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const validNumbers = [
    "1 555-555-5555",
    "1 (555) 555-5555",
    "1(555)555-5555",
    "1 555 555 5555",
    "5555555555",
    "555-555-5555",
    "(555)555-5555"
];

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;


const validCheck = (input) => {
    let results = [];
    if (input === "") {
        alert("Please provide a phone number");
        return;
    }
    if (!phoneRegex.test(input)) {
        const paragraph = document.createElement("p");
        paragraph.classList.add("results-text");
        paragraph.style = "color: rgb(184, 0, 31);";
        paragraph.innerText = `Invalid US number: ${input}`;
        return result.appendChild(paragraph);
    } else {
        const paragraph = document.createElement("p");
        paragraph.classList.add("results-text");
        paragraph.style = "color: rgb(0, 184, 9);";
        paragraph.innerText = `Valid US number: ${input}`;
        return result.appendChild(paragraph);
    }
};

const validClear = () => {
    result.innerHTML = ""
};

checkBtn.addEventListener("click", () => validCheck(userInput.value));
userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        validCheck(userInput.value);
    };  
});
clearBtn.addEventListener("click", () => validClear());
