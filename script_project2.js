let donnees = [30,60,120,240];

//ajouter un canevas
let corps = d3.select('body');

let canevas = corps.append('svg')
.attr("width",400)
.attr("height",400);
any
canevas.selectAll('circle')
.data(donnees)
.enter()
.append('circle')
.attr('cx',(donnees,indexedDB))
.attr('cy',70)
.attr('r',20)
.style('fill','red')
.style('opacity',0.5);