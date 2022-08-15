let donnees = (30,60,120,240)



//ajouter un canevas
let corps = d3.select('body');
let canevas = corps.append('svg')
.attr("width",400)
.attr("height",400);

//ajouter le cercle
let cercle = canevas.append ('circle')
   .attr('cx',140)
   .attr('cy',70)
   .attr('r',40)
   .style('fill','red');
  
let ligne = canevas
.append ('polyline')
.attr("points",'20,20,60,100,90,20,200,20')
.style("stroke",'purple')
.style("fill",'none')
.style("stroke-width",5)
;

let losage = canevas
.append('polygon')
.attr("points","141,30,101,70,141,110,180,70,")
.style("stroke","blue")
.style("stroke-width",1)
.style("fill","blue")
let losage2 = canevas
.append('polygon')
.attr("points","141,30,101,70,180,70,141,110")
.style("stroke","orange")
.style("stroke-width",1)
.style("fill","orange");

canevas.selectAll('circle')
.data(donnees)
.enter()
.append('circle')
.attr('cx',20)
.attr('cy',70)
.attr('r',20)
.style('fill','red')
.style('opacity',0.5);