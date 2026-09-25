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
const root = document.querySelector(".root");

let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

let currentColor;

fetch('https://pokeapi.co/api/v2/pokemon/' + params.get("name"))
    .then(response => response.json())
    .then(data => {
        currentColor = data.types[0].type.name;
        const title = Div();
        title.classList.add("about_title");
        const name = h1(data.name);
        name.classList.add("about_name");
        const id = p("#" + data.id.toString().padStart(3, "0"));//"#"+id.toString().padStart(4,"0")
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
        aboutText.classList.add("color-"+currentColor+"-text");

        type.innerHTML = `
            ${data.types.map((singleType) => {
            return `
                    <div class="type color-${singleType.type.name}">${singleType.type.name}</div>
                `;
        }).join("")}
        `;

        root.classList.add("color-" + data.types[0].type.name);
        // type.append(grass_type, poison_type);


        card.append(type, aboutText);

        const attributes = Div();
        attributes.classList.add("attributes");

        const weight = p(data.weight / 10 + " kg");
        weight.classList.add("weight");

        const weight_text = p("Weight");
        weight_text.classList.add("weight_text");

        const weight_container = Div();
        weight_container.classList.add("weight_container");

        const weight_icon = Image("assets/weight.svg");
        weight_container.append(weight_icon, weight, weight_text);

        attributes.append(weight_container);

        const height = p(data.height / 10 + " m");
        height.classList.add("height");
        const height_text = p("Height");
        height_text.classList.add("height_text");
        const height_container = Div();
        const ruler_icon = Image("assets/ruler.svg");
        height_container.classList.add("height_container");
        height_container.append(ruler_icon, height, height_text);

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

        const base_stats = p("Base stats");
        base_stats.classList.add("base_stats_text");
        base_stats.classList.add("color-"+currentColor+"-text");
        card.append(base_stats);

        const base_stats_container = Div();
        base_stats_container.classList.add("base_stats_container");
        const stats_container = Div();
        stats_container.classList.add("stats_container");

        stats_container.innerHTML += `
            <p class=color-${currentColor}-text>HP</p>
            <p class=color-${currentColor}-text>ATK</p>
            <p class=color-${currentColor}-text>DEF</p>
            <p class=color-${currentColor}-text>SATK</p>
            <p class=color-${currentColor}-text>SDEF</p>
            <p class=color-${currentColor}-text>SPD</p>
        `;

        const stats_values = Div();

        stats_values.innerHTML = `
            ${data.stats.map((stat) => {
            return `<p>${stat.base_stat}</p>`;
        }).join("")}
        `;
        stats_values.classList.add("stats_values");

        type.innerHTML = `
            ${data.types.map((singleType) => {
            return `
                    <div class="type color-${singleType.type.name}">${singleType.type.name}</div>
                `;
        }).join("")}
        `;


        const stats_values_container = Div();
        stats_values_container.append(stats_values);
        stats_values_container.classList.add("stats_values_container");
        const meters_section = Div();
        meters_section.classList.add("meters_section");

        /*
          type.innerHTML = `
            ${data.types.map((singleType) => {
            return `
                    <div class="type color-${singleType.type.name}">${singleType.type.name}</div>
                `;
        }).join("")}
        `;

        */

        meters_section.innerHTML = `
            ${data.stats.map((meter) => {
            return `
                <div class="meter color-${data.types[0].type.name}-low">
                    <div class="amount color-${currentColor}" style=width:${meter.base_stat + "px"}></div>
                </div>
                `;
        }).join("")}
        `;

        base_stats_container.append(stats_container, stats_values_container, meters_section);
        card.append(base_stats_container);
        root.append(card);
        console.log(data);
    })
    .catch(error => console.error(error));

const big_pokeball = Image("assets/pokebal_big.svg");
big_pokeball.classList.add("big_pokeball");

root.append(big_pokeball)