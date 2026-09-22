import { h1 } from "./components/h1.js";
import { Section } from "./components/Section.js";
import { Image } from "./components/Image.js";
import { Div } from "./components/Div.js";
import { Button } from "./components/Button.js";
import { p } from "./components/Paragraph.js";
import { a } from "./components/Anchor.js";
import { Pokemon } from "./components/Pokemon.js";
import { Title } from "./components/Title.js";
import { Input } from "./components/Input.js";

const root = document.querySelector(".root");
const input = Input();
root.append(Title("Pokédex", "assets/pokeball.svg"), Input());
let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
let pokemonurl = "https://pokeapi.co/api/v2/pokemon/1/";
let result = pokemonurl.slice(0, -1).split("/").pop();

function extractId(url) {
    url.slice(0, -1).split("/").pop();
}
fetch('https://pokeapi.co/api/v2/pokemon?limit=200')
    .then(response => response.json())
    .then(data => {
        // Pokemon
        console.log(data.results)
        let pokeList = document.createElement("ul");
        pokeList.classList.add("list_container");
        pokeList.innerHTML = `
                ${data.results.map((pokemon) => {
                    return Pokemon(pokemon);
        }).join("")}
            `;
        root.append(pokeList);
    })
    .catch(error => console.error(error));