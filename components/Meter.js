export function Meter(percent){
    const meter = document.createElement("div");
    meter.classList.add("meter");
    meter.innerHTML = `
        <meter class="meter" value="${percent/100}"></meter>
     `;

     return meter;
}