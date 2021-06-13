const body = document.body;
function getHtmlElement(tagName, parent, className) {
    const htmlElement = document.createElement(tagName);
    htmlElement.className = className;
    parent.append(htmlElement);
    return htmlElement;

}
const main = getHtmlElement("main", body, "main_container");


fetch("http://localhost:3000/photo")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(element => {
            const url = element.url
            const imgContainer = document.createElement("div");
            imgContainer.style.display = "inline-block";

            const img = document.createElement("img");
            img.setAttribute("src", url);
            img.style.width = "100px";
            img.style.height = "100px";

            imgContainer.append(img);
            main.append(imgContainer);

        });
        console.log(data);
    });
