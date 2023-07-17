const input = document.getElementById("numberofwords");
const container = document.querySelector(".container");

const generateword = (n) => {
    let text = ""; // Change const to let here
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < n; ++i) {
        const random = (Math.random() * 15).toFixed(0);
        text += letters[random];
    }
    return text;
};

let numberofwords;

const generatePara = () => {
    numberofwords = Number(input.value);

    const para = document.createElement("p");
    let data = " ";
    for (let i = 0; i < numberofwords; ++i) {
        const randomNumber = (Math.random() * 25).toFixed(0);
        data += generateword(randomNumber).toLocaleLowerCase();
        data += " ";
    }

    para.innerText = data;
    para.setAttribute("class", "paras");
    container.append(para);
};
