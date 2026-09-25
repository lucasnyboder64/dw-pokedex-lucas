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

const main = document.createElement("main");
const root = document.querySelector(".root");
const input = Input();

let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
let pokemonurl = "https://pokeapi.co/api/v2/pokemon/1/";
let result = pokemonurl.slice(0, -1).split("/").pop();

let pokemonArray = [];
let customOffset = 0;

input.addEventListener("input", search);

// document.querySelector(".search_bar").value

function search(event) {
    const searchTerm = event.target.value;
    const listItems = document.querySelectorAll(".list_container li");
    listItems.forEach(function(item){
        let length = document.querySelector(".search_bar").value.length;
        if(item.querySelector(".pokemon_name").textContent.slice(0,length).includes(searchTerm)){
            item.style = "display:grid";
        } else {
            item.style = "display:none";
        }
    });
}

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            customOffset += 60;
            fetch('https://pokeapi.co/api/v2/pokemon?limit=60&offset=' + customOffset)
                .then(response => response.json())
                .then(data => {
                    pokemonArray = [...pokemonArray, ...data.results];
                    render();
                })
                .catch(error => console.error(error));
            observer.unobserve(entry.target);
        }
    });
});

function extractId(url) {
    url.slice(0, -1).split("/").pop();
}

function render() {
    root.innerHTML = "";
    root.append(Title("Pokédex", "assets/pokeball.svg"), input);
    let pokeList = document.createElement("ul");
    pokeList.classList.add("list_container");
    pokeList.innerHTML = `
    ${pokemonArray.map((pokemon) => {
        return Pokemon(pokemon);
    }).join("")}
            `;
    root.append(pokeList);
    let test = document.querySelector('.pokemon:nth-last-of-type(5)');
    observer.observe(test);

}

function init() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=60&offset=' + customOffset)
        .then(response => response.json())
        .then(data => {
            // Pokemon
            console.log(data.results)

            pokemonArray = [...data.results];
            render();
        })
        .catch(error => console.error(error));

}

init();