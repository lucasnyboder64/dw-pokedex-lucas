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
        const id = p("#" + data.id);
        id.classList.add("about_id");
        const arrow = Image("assets/arrow.svg");
        arrow.classList.add("about_arrow");

        arrow.addEventListener("click", function () { window.location = "index.html" });

        title.append(arrow, name, id);
        root.append(title);

        const image = Image(baseUrl + data.id + ".png");
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
        grass_type.textContent = "Grass";
        grass_type.classList.add("grass_type");
        const poison_type = Div();
        poison_type.textContent = "Poison";
        poison_type.classList.add("poison_type");

        const aboutText = h1("About");
        aboutText.classList.add("about");
        type.append(grass_type, poison_type);
        card.append(type, aboutText);

        const attributes = Div();
        attributes.classList.add("attributes");

        const weight = p(data.weight / 10 + " kg");
        weight.classList.add("weight");

        const weight_text = p("Weight");
        weight_text.classList.add("weight_text");

        const weight_container = Div();
        weight_container.classList.add("weight_container");

        weight_container.append(weight, weight_text);

        attributes.append(weight_container);

        const height = p(data.height / 10 + " m");
        height.classList.add("height");
        const height_text = p("Height");
        height_text.classList.add("height_text");
        const height_container = Div();
        height_container.classList.add("height_container");
        height_container.append(height, height_text);

        attributes.append(height_container);

        const moves_container = Div();
        moves_container.classList.add("moves_container");
        const moves = p(data.moves[0].move.name);
        const move_text = p("Moves");
        move_text.classList.add("move_text");
        moves.classList.add("moves");


        moves_container.append(moves, move_text);

        attributes.append(moves_container);

        card.append(attributes);
        const text = p("There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.");
        text.classList.add("random_text");
        card.append(text);

        const base_stats = p("base stats");
        base_stats.classList.add("base_stats_text");
        card.append(base_stats);

        root.append(card);

        console.log(data);
    })
    .catch(error => console.error(error));