export function Pokemon(src, text, name){
    const pokemonImage = document.createElement("img");
    let textParagraph = document.createElement("p");
    let nameParagraph = document.createElement("p");

    pokemonImage.setAttribute("src", src);
    textParagraph.textContent = text;
    nameParagraph.textContent = name;
}