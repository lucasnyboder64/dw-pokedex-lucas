import { h1 } from "./components/h1.js";
import { Section } from "./components/Section.js";
import { Image } from "./components/Image.js";
import { InputField } from "./components/input_field.js";
import { Div } from "./components/Div.js";
import { Button } from "./components/Button.js";
import { p } from "./components/Paragraph.js";
import { a } from "./components/Anchor.js";

// https://pokeapi.co/api/v2/pokemon/bulbasaur
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const root = document.querySelector("#root");

let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

fetch('https://pokeapi.co/api/v2/pokemon/' + params.get("name"))
    .then(response => response.json())
    .then(data => {
        const title = Div();
        title.classList.add("about_title");
        const name = h1(data.name);
        name.classList.add("about_name");
        const id = p(data.id);
        id.classList.add("about_id");
        const arrow = Image("assets/arrow.svg");
        arrow.classList.add("about_arrow");

        title.append(arrow, name, id);
        root.append(title);

        const image = Image(baseUrl+data.id+".png");
        image.classList.add("about_pokemon_image");

        const imageContainer = Div();
        imageContainer.classList.add("about_image_container");
        imageContainer.append(image);

        root.append(imageContainer);

        const card = Div();
        card.classList.add("card");

        const type = Div();
        type.classList.add("pokemon_type");

        const grass_type = Div();
        grass_type.classList.add("grass_type");
        const poison_type = Div();
        poison_type.classList.add("poison_type");

        type.append(grass_type, poison_type);
        card.append(type);

        root.append(card);
        console.log(data);
    })
    .catch(error => console.error(error));