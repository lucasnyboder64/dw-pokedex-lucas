export function a(text, url){
    let a = document.createElement("a");
    a.textContent = text;
    a.href=url;
    return a;
}