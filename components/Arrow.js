export function Arrow(dir){
    const arrow = document.createElement("img");
    if(dir=="left"){
        arrow.setAttribute("src", "assets/arrow_left.svg");
    } else {
        arrow.setAttribute("src", "assets/arrow_right.svg");
    }

    return arrow;
}