let xmlns = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("width", 500);
svg.setAttribute("height", 500);
svg.setAttribute("viewbox", '0 0 500 500');


let arrKleur = ["#503D3F", "#615756", "#539987", "#52FFB8", "#4DFFF3"];

for(i=0;i<1200;i++){
    const randomIndex = Math.floor(Math.random()*4);

    let circleRandom = document.createElementNS(xmlns, "circle");
    circleRandom.setAttribute("cx", Math.floor(Math.random()*500) + 1);
    circleRandom.setAttribute("cy", Math.floor(Math.random()*500) + 1);
    circleRandom.setAttribute("r", Math.floor(Math.random()*15) + 3);
    circleRandom.setAttribute("fill", arrKleur[randomIndex]);
    
    svg.appendChild(circleRandom);
    document.body.appendChild(svg);
};





