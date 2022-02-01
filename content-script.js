console.log("content-script.js");


document.querySelector("div.title").insertAdjacentHTML("beforeend", `
    <button style="position:absolute;right:0;" onclick='
    (()=>
    {
        let toBeCopied = "";
        [...document.querySelectorAll("pre")].filter((x,i)=>i%2==0).forEach(e=>toBeCopied+=e.innerText)
        console.log(toBeCopied);
        navigator.clipboard.writeText(toBeCopied)
    })()'>Copy Test Cases</button>
`)