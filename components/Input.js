

export function Input(){
    const searchContainer = document.createElement("section");
    searchContainer.classList.add("search_container");

    searchContainer.innerHTML = `
        <input 
            type="search"
            placeholder="Search"
            class="search_bar"
        </input>
        <img src="assets/icon.svg" class="icon">
        <button class="sort_button">#</button>
    `;

    return searchContainer;
}