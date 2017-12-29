// dictionar folosit pentru culori:

/*
        0%{fill:grey}
        11%{fill:rgb(218, 165, 32)}
        22%{fill:#d8951a}
        33%{fill:green}
        44%{fill: #000099}
        55%{fill:purple}
        66%{fill:#b30000}
        77%{fill:brown}
        88%{fill: black}
        100%{fill: grey}
 */

var defined_colors ={

    grey: 'grey',
    yellow: 'rgb(218, 165, 32)',
    orange: '#d8951a',
    green: 'green',
    blue: '#000099',
    red: '#b30000',
    purple: 'purple',
    brown: 'brown',
    black: 'black'

};


function setLevelColorForKimonoAndTitle(color){

    // pentru titlu

    var title = document.getElementById('title_belt_color');
    title.style.color = defined_colors[color];
    title.textContent = color;

    // pentru kimono

    document.getElementById('path50').style.fill = defined_colors[color];
    document.getElementById('path54').style.fill = defined_colors[color];
    document.getElementById('path58').style.fill = defined_colors[color];
    document.getElementById('path62').style.fill = defined_colors[color];


}