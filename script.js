import { h1 } from "./components/h1.js";
import { Section } from "./components/Section.js";
import { Image } from "./components/Image.js";
import { InputField } from "./components/input_field.js";
import { Div } from "./components/Div.js";

const root = document.querySelector("#root");

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

root.append(title,search_container);

// List
const list_container = Div();
