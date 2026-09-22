export function Title(title, src) {
    const sectionElement = document.createElement("section");
    sectionElement.classList.add("title");

    sectionElement.innerHTML = `
        <img src="${src}">
        <h1 class="title_text">${title}</h1>`;

    return sectionElement;

}