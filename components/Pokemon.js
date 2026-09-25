let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

function extractId(url) {
    return url.slice(0, -1).split("/").pop();
}

export function Pokemon(pokemon){
    console.log(extractId(pokemon.url));
    return `
    <li class="pokemon">
        <p class="pokemon_text">${"#"+extractId(pokemon.url).padStart(3,"0")}</p>
        <img class="pokemon_image" src="${baseUrl+extractId(pokemon.url)+".png"}">
        <a class="pokemon_name" href="dest.html?name=${pokemon.name}">${pokemon.name}</a>
    </li>
    `;
}















