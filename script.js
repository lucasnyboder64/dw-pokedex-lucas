import { h1 } from "./components/h1.js";
import { Section } from "./components/Section.js";
import { Image } from "./components/Image.js";
import { InputField } from "./components/input_field.js";
import { Div } from "./components/Div.js";
import { Button } from "./components/Button.js";
import { p } from "./components/Paragraph.js";
import { a } from "./components/Anchor.js";

const root = document.querySelector(".root");

// Title
const title = Section();
title.classList.add("title");
const title_text = h1("Pokédex");
title_text.classList.add("title_text");
const title_logo = Image("assets/pokeball.svg");
title.append(title_logo, title_text);

// Input Field
const icon = Image("assets/icon.svg");
icon.classList.add("icon");
const search_container = Section();
search_container.classList.add("search_container");
const input = InputField();
let placeholder = "Search";
input.setAttribute("placeholder", placeholder);
input.classList.add("search_bar");
search_container.append(input);
search_container.append(icon);

// Sort button
const sort_button = Button();
sort_button.textContent = "#";
sort_button.classList.add("sort_button");
search_container.append(sort_button)

root.append(title, search_container);

// List
const list_container = Div();
list_container.classList.add("list_container");
root.append(list_container);

let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
let pokemonurl = "https://pokeapi.co/api/v2/pokemon/1/";
let result = pokemonurl.slice(0, -1).split("/").pop();

function extractId(url) {
    url.slice(0, -1).split("/").pop();
}

function openDetails(){
    alert("test");
}

for (let id = 1; id < 200; id++) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id + "/")
        .then(response => response.json())
        .then(data => {
            //  console.log(data.sprites.front_default);
            let div = Div();
            let image = Image(baseUrl+id+".png");
            let name = a(data.name,"dest.html?name="+data.name);
            let text = p("#"+id.toString().padStart(3,"0"));

            image.classList.add("pokemon_image");
            name.classList.add("pokemon_name");
            text.classList.add("pokemon_text");

            const grayDiv = Div();
            grayDiv.classList.add("gray_div");
        
            div.append(text, image, name, grayDiv);
            div.classList.add("pokemon");
            list_container.append(div);
        })
        .catch(error => console.error(error));
}