// https://observablehq.com/@oliviawyq/d3-tuitorials-for-the-beginner@2153
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`
<h1 style="text-align:center">D3 Tuitorials for the Beginner</h1>
<br>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
<h4 style="text-align:left">This tuitorials can help you understand the relationship of styles and interactions in D3. Part one is for drawing basic elements. Part two shows the multiple ways to construct an interactive graph.</h4>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Part 1. Introduction to D3 Canvas and SVG

we all know that the HTML &lt; canvas &gt; element can be used to draw graphics on a web page. And SVG stands for Scalable Vector Graphics which is always used to define vector-based graphics for the Web. So what's their relationship and how to use them in D3?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### 1.1 Basic knowledge of HTML Canvas
First, create a canvas with border:

*&lt;canvas id="myCanvas" width="200" height="100"></canvas>*

**In a web page, x-coordinate increases form the left to the right, and y-coordinate increases from the top to the bottom.**
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<canvas id="myCanvas" width="200" height="100"></canvas>
<style>
  canvas {
    border:1px solid #d3d3d3;
  } 
</style>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Drawing a circle in the canvas:

The arc() method can create circles, or parts of circles. The stroke() or the fill() method will actually draw the arc on the canvas.

*ctx.arc(x-coordinate of the center, y-coordinate of the center, radius, starting angle, ending angle, False is default and indicates clockwise)*
`
)});
  main.variable(observer()).define(["DOM"], function(DOM)
{
  const canvas = DOM.canvas(200,100);
  // const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(100, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Adding text to the canvas:

*ctx.font* defines the font properties for the text.

*ctx.fillText(content, x-coordinate of the upper-left corner, y-coordinate of the upper-left corner)*
`
)});
  main.variable(observer()).define(["DOM"], function(DOM)
{
  const canvas = DOM.canvas(200,100);
  // const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext('2d');
  ctx.font = "30px Arial";
  ctx.fillText("Yes", 75, 60);
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`Coloring a rectangle:

*ctx.fillStyle* defines the color.

*ctx.fillRect(x-coordinate of the upper-left corner, y-coordinate of the upper-left corner, width, height)* can draw a rectangle with color.

*ctx.strokeRect(x-coordinate of the upper-left corner, y-coordinate of the upper-left corner, width, height)* method can draw a rectangle no fill.
`
)});
  main.variable(observer()).define(["DOM"], function(DOM)
{
  const canvas = DOM.canvas(200,100);
  // const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(10, 10, 180, 80);
  // ctx.strokeRect(10, 10, 180, 80);
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
<br>
### 1.2 Applying Canvas in D3
First, import D3 library:
`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Let's create the same canvas by D3. The method ***getContext('2d')*** stays the same and the only difference is ***d3.select()*** now replace ***document.getElementById()***:
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<div id = "myCanvas2"></div>`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  // Create canvas
  var canvas  = d3.select('#myCanvas2').append('canvas')
      .attr('id', 'canvas')
			.attr('width', 200)
			.attr('height', 100);
  const ctx = canvas.node().getContext('2d');
  
  // Set z-index
  ctx.globalCompositeOperation='destination-over';
  
  // Draw a circle
  ctx.beginPath();
  ctx.arc(100, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
  
  // Add text 
  ctx.font = "30px Arial";
  ctx.fillText("Yes", 75, 60);
  
  // Fill color
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(10, 10, 180, 80);
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
<br>
### 1.3 Basic knowledge of SVG 
In HTML, you can easily use &lt; svg &gt; with width and height to define the size of graph. And SVG provides:
Rectangle &lt; rect &gt;,
Circle &lt; circle &gt;,
Ellipse &lt; ellipse &gt;,
Line &lt; line &gt;,
Polyline &lt; polyline &gt;,
Polygon &lt; polygon &gt; and 
Path &lt; path &gt;.

It feels the stroke in SVG is more clear than the one in canvas. And the plenty of types in figture make SVG a better choice when drawing graphs.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Circle:

*&lt;circle cx="The x-coordinate of the center" cy="The y-coordinate of the center" r="The radius of the circle" stroke="black" stroke-width="2" fill="lightblue" />*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg width="200" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="lightblue" />
</svg>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Ellipse:

*&lt;ellipse cx="The x-coordinate of the center of the ellipse." cy="The y-coordinate of the center of the ellipse" rx="The x radius of the ellipse" ry="The y radius of the ellipse"
  style="fill:lightblue;stroke:black;stroke-width:2" />*
</svg>
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg width="200" height="100">
  <ellipse cx="100" cy="50" rx="80" ry="40"
  style="fill:lightblue;stroke:black;stroke-width:2" />
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Rectangle:

*&lt;rect x="x-coordinate of the left" y="y-coordinate of the top" rx="The x radius of the corners" ry="The y radius of the corners" width="100" height="80"
  style="fill:lightblue;stroke:black;stroke-width:2;opacity:0.4" />*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg width="200" height="100">
<rect x="10" y="10" rx="20" ry="20" width="100" height="80"
  style="fill:lightblue;stroke:black;stroke-width:2;opacity:0.4" />
</svg>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Line:

*&lt;line x1="the start of the line on the x-axis" y1="the start of the line on the y-axis" x2="the end of the line on the x-axis" y2="the end of the line on the y-axis" style="stroke:black;stroke-width:2" />*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg width="200" height="100">
  <line x1="0" y1="0" x2="100" y2="100" style="stroke:black;stroke-width:2" />
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Polyline:

The (x, y) pairs of points from the first to the last can be presented in three ways.

&lt;polyline points="0,0 35,0 35,30 80,30 80,60 60,60 75,80 75,90 30,90 0,80"
  style="fill:white;stroke:blue;stroke-width:2" />

&lt;polyline points="0 0 35 0 35 30 80 30 80 60 60 60 75 80 75 90 30 90 0 80"
  style="fill:white;stroke:red;stroke-width:2" />

&lt;polyline points="0 0, 35 0, 35 30, 80 30, 80 60, 60 60, 75 80, 75 90, 30 90, 0 80"
  style="fill:white;stroke:black;stroke-width:2" />
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg width="200" height="100">
  <polyline points="0,0 35,0 35,30 80,30 80,60 60,60 75,80 75,90 30,90 0,80"
  style="fill:white;stroke:blue;stroke-width:2" />

  <polyline points="0 0 35 0 35 30 80 30 80 60 60 60 75 80 75 90 30 90 0 80"
  style="fill:white;stroke:red;stroke-width:2" />

  <polyline points="0 0, 35 0, 35 30, 80 30, 80 60, 60 60, 75 80, 75 90, 30 90, 0 80"
  style="fill:white;stroke:black;stroke-width:2" />
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Polygon:

The (x, y) pairs of points is similar the polyline, but polygon will automated add a line between the last one and the first one.

&lt;polygon points="100,15 42,193 190,80 10,80 158,193"
  style="fill:lightblue;stroke:black;stroke-width:2;fill-rule:evenodd;" />
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
<svg height="200" width="200">
  <polygon points="100,15 42,193 190,80 10,80 158,193"
  style="fill:lightblue;stroke:black;stroke-width:2;fill-rule:evenodd;" />
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Path:

The following commands are available for path data:
* M = move to
* L = line to
* H = horizontal line to
* V = vertical line to
* C = curve to
* S = smooth curve to
* Q = quadratic Bézier curve
* T = smooth quadratic Bézier curve to
* A = elliptical Arc
* Z = closepath
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*Bezier Curves*

<svg viewBox="0 0 250 80">
    <path d="M10  10 C 20  20, 40  20, 50  10" stroke="lightblue" fill="transparent"/>
    <path d="M70  10 C 70  20, 120 20, 120 10" stroke="lightblue" fill="transparent"/>
    <path d="M130 10 C 120 20, 180 20, 170 10" stroke="lightblue" fill="transparent"/>
    <path d="M10  30 C 20  50, 40  50, 50  30" stroke="lightblue" fill="transparent"/>
    <path d="M70  30 C 70  50, 110 50, 110 30" stroke="lightblue" fill="transparent"/>
    <path d="M130 30 C 120 50, 180 50, 170 30" stroke="lightblue" fill="transparent"/>
    <path d="M10  50 C 20  80, 40  80, 50  50" stroke="lightblue" fill="transparent"/>
    <path d="M70  50 C 70  80, 110 80, 110 50" stroke="lightblue" fill="transparent"/>
    <path d="M130 50 C 120 80, 180 80, 170 50" stroke="lightblue" fill="transparent"/>
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
*S Command*

<svg viewBox="0 0 900 150">
    <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
*Q command*

<svg viewBox="0 0 900 80">
    <path d="M10 40 Q 95 10 180 40" stroke="black" fill="transparent"/>
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
*Arcs*

<svg viewBox="0 0 1500 320">
    <path d="M10 315
             L 110 215
             A 30 50 0 0 1 162.55 162.45
             L 172.55 152.45
             A 30 50 -45 0 1 215.1 109.9
             L 315 10"
          stroke="black" fill="lightblue" />
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
<br>
### 1.4 Drawing SVG in D3

In D3, it always use *.append()*, *.attr()* and *.style()* use draw SVG. Since it is data driven, we can generate some random data to show its usage.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Create SVG:

*var svg = d3.create("svg")
  .attr("width", width)
  .attr("height", height);*
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
To draw circle in D3, simply change all attributes in &lt;circle> to *.attr("property",value)*, the only different between D3 SVG and the original one is the *.attr()* function:

*var circle = svg.append("circle")
  .attr("cx",The x-coordinate of the center)
  .attr("cy",The y-coordinate of the center)
  .attr("r",The radius of the circle)
  .attr("stroke","black")
  .attr("stroke-width","2")
  .attr("fill","lightblue")*;
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{  
  var svg = d3.create("svg")
  .attr("width", 200)
  .attr("height", 100);
  
  var circle = svg.append("circle")
  .attr("cx",50)
  .attr("cy",50)
  .attr("r",40)
  .attr("stroke","black")
  .attr("stroke-width","2")
  .attr("fill","lightblue");
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Ellipse:

*var ellipse = svg.append("ellipse")
  .attr("cx",100)
  .attr("cy",50)
  .attr("rx",80)
  .attr("ry",40)
  .attr("stroke","black")
  .attr("stroke-width","2")
  .attr("fill","lightblue");*
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
  .attr("width", 200)
  .attr("height", 100);
  
  var ellipse = svg.append("ellipse")
  .attr("cx",100)
  .attr("cy",50)
  .attr("rx",80)
  .attr("ry",40)
  .attr("stroke","black")
  .attr("stroke-width","2")
  .attr("fill","lightblue");
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Rectangle:

*var rect = svg.append("rect")
  .attr("x",x-coordinate of the left)
  .attr("y",y-coordinate of the top)
  .attr("rx",The x radius of the corners)
  .attr("ry",The y radius of the corners)
  .attr("width",100)
  .attr("height",80)
  .attr("stroke","black")
  .attr("stroke-width","2")
  .attr("fill","lightblue")
  .attr("opacity", 0.4);*
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
  .attr("width", 200)
  .attr("height", 100);
  
  var rect = svg.append("rect")
  .attr("x",10)
  .attr("y",10)
  .attr("rx",20)
  .attr("ry",20)
  .attr("width",100)
  .attr("height",80)
  .attr("stroke","black")
  .attr("stroke-width","2")
  .attr("fill","lightblue")
  .attr("opacity", 0.4);
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Line:

*var line = svg.append("line")
  .attr("x1",the start of the line on the x-axis)
  .attr("y1",the start of the line on the y-axis)
  .attr("x2",the end of the line on the x-axis)
  .attr("y2",the end of the line on the y-axis)
  .attr("stroke","black")
  .attr("stroke-width","2");*
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
  .attr("width", 200)
  .attr("height", 100);
  
  var line = svg.append("line")
  .attr("x1",0)
  .attr("y1",0)
  .attr("x2",100)
  .attr("y2",100)
  .attr("stroke","black")
  .attr("stroke-width","2");
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Polyline:

*var polyline = svg.append("polyline")
  .attr("points","0,0 35,0 35,30 80,30 80,60 60,60 75,80 75,90 30,90 0,80")
  .attr("stroke","black")
  .attr("stroke-width","2")
  .attr("fill","white");*

`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
  .attr("width", 200)
  .attr("height", 100);
  
  var polyline = svg.append("polyline")
  .attr("points","0,0 35,0 35,30 80,30 80,60 60,60 75,80 75,90 30,90 0,80")
  .attr("stroke","black")
  .attr("stroke-width","2")
  .attr("fill","white");
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Polygon:

*var polygon = svg.append("polygon")
  .attr("points","100,15 42,193 190,80 10,80 158,193")
  .attr("stroke","black")
  .attr("stroke-width","2")
  .attr("fill","lightblue")
  .attr("fill-rule","evenodd");*
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
  .attr("width", 200)
  .attr("height", 200);
  
  var polygon = svg.append("polygon")
  .attr("points","100,15 42,193 190,80 10,80 158,193")
  .attr("stroke","black")
  .attr("stroke-width","2")
  .attr("fill","lightblue")
  .attr("fill-rule","evenodd");
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Path:

Every command remains the same in D3. Take a simple path example:

*var path = svg.append("path")
  .attr("d","M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")
  .attr("stroke","black")
  .attr("fill","transparent");*
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
  .attr("width", 200)
  .attr("height", 150);
  
  var path = svg.append("path")
  .attr("d","M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")
  .attr("stroke","black")
  .attr("fill","transparent");
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
<br>
### Conclusion

In D3, using SVG to draw objects is better than using Canvas because SVG can provide more figures than Canvas, and the SVG code is dryer.
<br>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
<br>
## Part 2. Constructing Interactive D3 Graphs
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Before introducing the interactive view in D3, I would like to look back to the basic interactive methods in the web, including the special effects in SVG, Canvas, and CSS. After you get the idea of D3 transition, it would be much easier to compare each of them, and know what kinds of interaction they can provide.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
### 2.1 SVG filter, gradient and animation
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### SVG Filter

The basic SVG filters include &lt;clipPath>, &lt;linearGradient> and &lt;radialGradient>.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
&lt;clipPath>

A clipping path restricts the region to which paint can be applied:
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg viewBox="0 0 1000 120">
    <defs>
        <clipPath id="cut-off-bottom">
            <rect x="0" y="0" width="200" height="100" />
        </clipPath>
    </defs>
    <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" fill="lightblue"/>
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### SVG Gradient
There are two kinds of gradient, linear gradient and radial gradient.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
&lt;linearGradient>

Can change color along linear gradient:
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg viewBox="0 0 1000 120">
    <defs>
        <linearGradient id="gradient">
            <stop offset="0%" stop-color="pink" />
            <stop offset="100%" stop-color="lightblue" />
        </linearGradient>
    </defs>
    <ellipse cx="100" cy="50" rx="100" ry="50" fill="url(#gradient)" />
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`&lt;radialGradient>

Can change color along radial gradient:
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg viewBox="0 0 1000 120">
  <defs>
    <radialGradient id="myGradient">
      <stop offset="10%" stop-color="white" />
      <stop offset="95%" stop-color="lightblue" />
    </radialGradient>
  </defs>
  <!-- using my linear gradient -->
  <circle cx="50" cy="50" r="50" fill="url('#myGradient')" />
</svg>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### SVG animation with SMIL 

SVG animation uses Synchronized Multimedia Integration Language (SMIL).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
&lt;animate>

* attributeName: The name of the attribute to animate.

* from: The initial value of the attribute.

* to: The final value.

* dur: The duration of the animation (for example, write '5s' for 5 seconds).

*&lt;animate attributeName="r" from="50" to="100" begin="0s" dur="4s" repeatCount="indefinite"/>*

*&lt;animate attributeName="opacity" from="1" to="0" begin="0s" dur="4s" repeatCount="indefinite" />*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg width="200" height="200">
    <circle cx="100" cy="100" r="50" style="fill:lightblue" >
        <animate attributeName="r" from="50" to="100" begin="0s" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" from="1" to="0" begin="0s" dur="4s" repeatCount="indefinite" />
    </circle>
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
&lt;animateMotion>

Can animate an element position and rotation according to SVG &lt;path>.

*&lt;animateMotion path="M100 100, A120 120, -45 0 1, 300 300 A120 120, -45 0 1, 100 100" dur="3s" rotate="auto" repeatCount="indefinite" />*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg viewBox="0 0 400 400" width="200" height="200">
    <polygon points="-12 -69,-58 85,64 -14,-81 -14,41 85" style="fill: lightblue;" >
        <animateMotion path="M100 100, A120 120, -45 0 1, 300 300 A120 120, -45 0 1, 100 100" dur="3s" rotate="auto" repeatCount="indefinite" />
    </polygon>
</svg>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
<br>
### 2.2 Canvas gradient, transform and animation
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### Canvas Gradient

Linear Gradient:

The combination of *ctx.createLinearGradient(x0 of the start point, y0 of the start point, x1 of the end point, y1 of the end point)* and *ctx.fillRect()* create a linear gradient rectangle.

`
)});
  main.variable(observer()).define(["DOM"], function(DOM)
{
  const canvas = DOM.canvas(200,100);
  const ctx = canvas.getContext('2d');
  var linearGradient = ctx.createLinearGradient(0, 0, 200, 0);
  //add color
  linearGradient.addColorStop(0, 'pink');
  linearGradient.addColorStop(1, 'lightblue');
  
  //set style
  ctx.fillStyle = linearGradient;
  ctx.fillRect(0, 0, 200, 100);
  
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Radial Gradient:

*ctx.createRadialGradient(x0 of the start circle, y0 of the start circle, radius of the start circle, x1 of the end circle, y1 of the end circle, radius of the end circle)* creates redial gradient in a circle.
`
)});
  main.variable(observer()).define(["DOM"], function(DOM)
{
  const canvas = DOM.canvas(100,100);
  const ctx = canvas.getContext('2d');
  
  // The inner circle is at x=50, y=50, with radius=0
  // The outer circle is at x=50, y=50, with radius=50
  var radialGradient = ctx.createRadialGradient(50, 50, 0, 50, 50, 50);
  
  //add color
  radialGradient.addColorStop(0, 'white');
  radialGradient.addColorStop(1, 'lightblue');
  
  //set style
  ctx.fillStyle = radialGradient;
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
  ctx.fill();
  
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
#### Canvas trasform

Translate:

*ctx.translate(x,y)* adds a translation by moving the canvas to x units horizontally and y units vertically. In the following graph, the original grey line moves right and becomes the black one.

`
)});
  main.variable(observer()).define(["DOM"], function(DOM)
{
  const canvas = DOM.canvas(200,100);
  const ctx = canvas.getContext('2d');
  
  ctx.strokeStyle = "grey";
  //save the style
  ctx.save();

  ctx.moveTo(0,0);
  ctx.lineTo(100,100);
  ctx.stroke();

  //translate
  ctx.strokeStyle = "black";
  ctx.translate(100,0);
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(100,100);
  ctx.stroke();
  
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Rotate:

*ctx.rotate(clockwise angle in radians)* completes a rotation. You can calculate the radians by degree * Math.PI / 180.
`
)});
  main.variable(observer()).define(["DOM"], function(DOM)
{
  const canvas = DOM.canvas(200,100);
  const ctx = canvas.getContext('2d');
  
  ctx.strokeStyle = "grey";
  //save the style
  ctx.save();

  ctx.moveTo(0,0);
  ctx.lineTo(100,100);
  ctx.stroke();

  //rotate
  ctx.strokeStyle = "black";
  ctx.rotate(Math.PI/4);
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(100,100);
  ctx.lineWidth = 5;
  ctx.stroke();
  
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Scale:

Using ctx.scale(x, y) to scale by scaling factor x in the horizontal direction and y in the vertical direction. A value of 1 results in no scaling.
`
)});
  main.variable(observer()).define(["DOM"], function(DOM)
{
  const canvas = DOM.canvas(200,200);
  const ctx = canvas.getContext('2d');
  
  ctx.strokeStyle = "grey";
  //save the style
  ctx.save();

  ctx.moveTo(0,0);
  ctx.lineTo(100,100);
  ctx.stroke();

  //scale
  ctx.scale(1,2);
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(100,100);
  ctx.stroke();
  
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
#### Canvas Animation

Using *ctx.clearRect(0, 0, canvas.width, canvas.height)* and *ctx.fillRect(posx, posy, 50, 50)* to draw the rectangle repeatedly and animation is the continuous moving graphs.
`
)});
  main.variable(observer()).define(["DOM"], function(DOM)
{
  const canvas = DOM.canvas(200,100);
  const ctx = canvas.getContext('2d');

  var posx = 0, posy = 0, dir = 1;

  setInterval(function() {
    posx += 1 * dir;
    //clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw
    ctx.fillRect(posx, posy, 50, 100);
    ctx.fillStyle = 'lightblue';
    
    if(posx + 50 >= canvas.width){
      dir = -1;
    }else if(posx <= 0){
      dir = 1;
    }
    
  },50);
  
  return canvas;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
<br>
### 2.3 CSS gradient, tranform, transition and animation
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### CSS Gradient
There are multiple types of linear gradient and radial gradient in CSS where you can set it to different angle and repeating style.

Linear Gradient:
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
* Vertical (default) —— *background: linear-gradient(pink, lightblue)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.linearGradient1 {
	width: 200px; height: 100px;
	background: linear-gradient(pink, lightblue);
}
</style>
<div class='linearGradient1'></div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
* Horizontal —— *background: linear-gradient(to right, pink, lightblue)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.linearGradient2 {
	width: 200px; height: 100px;
	background: linear-gradient(to right, pink, lightblue);
}
</style>
<div class='linearGradient2'></div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
* Tilted (to right bottom) —— 
*background: linear-gradient(to right bottom, pink, lightblue)*

* Tilted for any degree —— *background: linear-gradient(135deg, pink, lightblue)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.linearGradient3 {
	width: 200px; height: 100px;
	// background: linear-gradient(to right bottom, pink, lightblue);
  background: linear-gradient(135deg, pink, lightblue)
}
</style>
<div class='linearGradient3'></div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
* Repeating linear gardient —— *background: repeating-linear-gradient(90deg, pink 0%, lightblue 10%, pink 20%)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.linearGradient4 {
	width: 200px; height: 100px;
	background: repeating-linear-gradient(90deg, pink 0%, lightblue 10%, pink 20%);
}
</style>
<div class='linearGradient4'></div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Radial Gradient:

In radial gradient, shape can be either eclipse (default) or circle. Also it has multiple color stops in the syntax: *background: radial-gradient(shape, color-stop1, color-stop2, ...)*
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
* Eclipse —— *background: radial-gradient(white, lightblue)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.radialGradient1 {
	width: 200px; height: 100px;
	background: radial-gradient(white, lightblue);
}
</style>
<div class='radialGradient1'></div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
* Circle —— *background: radial-gradient(circle, white, lightblue)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.radialGradient2 {
	width: 200px; height: 100px;
	background: radial-gradient(circle, white, lightblue);
}
</style>
<div class='radialGradient2'></div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
* Repeating radial gradient —— *background: repeating-radial-gradient(pink 0%, lightblue 10%, pink 20%)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.radialGradient3 {
	width: 200px; height: 100px;
  background: repeating-radial-gradient(pink 0%, lightblue 10%, pink 20% );
}
</style>
<div class='radialGradient3'></div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### CSS Transform
First, We create an original rectangle in the wrapper &lt;div>.
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.wrapper{
	width: 200px; height: 100px;
  border: solid #d3d3d3 1px;
}
.original{
	width: 50px; height: 50px;
  border: solid black 1px;
}
</style>
<div class='wrapper'>
  <div class='original'></div>
</div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Translate: *transform: translate(50px, 25px)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.translate{
	width: 50px; height: 50px;
  border: solid black 1px;
  transform: translate(50px, 25px);
}
</style>
<div class='wrapper'>
  <div class='translate'></div>
</div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Rotate: *transform: rotate(35deg)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.rotate{
	width: 50px; height: 50px;
  border: solid black 1px;
  transform: rotate(30deg);
}
</style>
<div class='wrapper'>
  <div class='rotate'></div>
</div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Scale: *transform: scale(horizontal scaling factor x, vertical scaling factor y)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.scale{
	width: 50px; height: 50px;
  border: solid black 1px;
  transform: scale(0.5, 1);
}
</style>
<div class='wrapper'>
  <div class='scale'></div>
</div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
Skew: transform: *skew(distort the element along the x-axis, distort the element along the y-axis)*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.skew{
	width: 50px; height: 50px;
  border: solid black 1px;
  transform: skew(15deg, 15deg);
}
</style>
<div class='wrapper'>
  <div class='skew'></div>
</div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### CSS Transition

The transition starts when hovering over the rectangle:

* Property —— *transition-property: transform*

* Duration —— *transition-duration: 1s*

* Timing —— *transition-timing-function: ease-in-out*

* Delay —— *transition-delay: 0.5s*
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.transition{
	width: 50px; height: 50px;
  border: solid black 1px;
  transform: rotate(0deg);
  transition-duration: 1s;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  transition-delay: 0.5s;
}
.transition:hover { 
  cursor: pointer;
  transform: rotate(180deg);
  transition-duration: 2s;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  transition-delay: 0.5s;
}
</style>
<div class='wrapper'>
  <div class='transition'>click me</div>
</div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### CSS Animation
The animation properties let you configure the timing, duration, and other details of how the animation works. 
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`

Keyframe: @keyframe *from* the first keyframe *to* the second one.

In 3D animation, the first rectangle uses rotateX(), the second one uses rotateY(), and the last one uses rotateZ().
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style type="text/css">
.wrapper2{
	width: 200px; height: 200px;
  border: solid #d3d3d3 1px;
}
.rectangle{
	width: 50px; height: 50px;
  border: solid black 1px;
  transform-style: preserve-3d;
  animation-fill-mode: forwards;
}

.rectangle.animation1{
  animation: rect_name1 linear 10s infinite;
}
@keyframes rect_name1{
    from {transform: rotateX(0deg);}
    to {transform: rotateX(360deg);}
}

.rectangle.animation2{
  animation: rect_name2 linear 10s infinite;
}
@keyframes rect_name2{
    from {transform: rotateY(0deg);}
    to {transform: rotateY(360deg);}
}

.rectangle.animation3{
  animation: rect_name3 linear 10s infinite;
}
@keyframes rect_name3{
    from {transform: rotateZ(0deg);}
    to {transform: rotateZ(360deg);}
}
</style>
<div class='wrapper2'>
  <div class='rectangle animation1'>X</div>
  <div class='rectangle animation2'>Y</div>
  <div class='rectangle animation3'>Z</div>
</div>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
<br>
### 2.4 D3 gradient and transition
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### D3 Gradient

D3 realize gradent by SVG &lt;defs> object.

Linear gradient:
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
    .attr("width", 200)
    .attr("height", 100);

  var grad = svg.append("defs")
    .append("linearGradient")
      .attr("id", "linear")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%");

  grad.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "pink");

  grad.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "lightblue");

  svg.append("rect")
      .attr("width", 200)
      .attr("height", 100)
      .style("fill", "url(#linear)");
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Radial gradient:
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
    .attr("width", 200)
    .attr("height", 100);
  
  var grad = svg.append("defs")
    .append("radialGradient")
    .attr("id", "radial");

  grad.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "white");

  grad.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "lightblue");

  svg.append("circle")
      .attr("cx", 50)
      .attr("cy", 50)
      .attr("r", 50)
      .style("fill", "url(#radial)");
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
#### D3 Transition

To begin with, draw an original SVG rectangle in D3. 
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
  .attr("width", 200)
  .attr("height", 60);
  
  var rect = svg.append("rect")
  .attr("x",10)
  .attr("y",5)
  .attr("width",50)
  .attr("height",50)
  .attr("stroke","black")
  .attr("stroke-width","1")
  .attr("fill","lightblue");
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Then, add *rect.transition().delay(time).style("fill", "color")* to it.
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
  .attr("width", 400)
  .attr("height", 60);
  
  var text = svg.append("text")
    .text("click on the rect!")
    .attr("x",75)
    .attr('y',35);
  
  var rect = svg.append("rect")
  .attr("x",10)
  .attr("y",5)
  .attr("width",50)
  .attr("height",50)
  .attr("stroke","black")
  .attr("stroke-width","1")
  .attr("fill","lightblue");
  
  rect.on("mouseover", handleMouseOver);
  
  function handleMouseOver(d, i) {  
    rect.transition()
          .delay(1000)
          .style("fill", "lightgreen")
        .transition()
          .delay(1000)
          .style("fill", "lightyellow")
        .transition()
          .delay(1000)
          .style("fill", "pink")
        .transition()
          .delay(1000)
          .style("fill", "lightblue")
  }

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Also, transition can be used to change other atttributes such as position *(x,y)* and size *(width, height)*.
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
  .attr("width", 300)
  .attr("height", 120);
  
  var rect = svg.append("rect")
  .attr("x",10)
  .attr("y",10)
  .attr("width",50)
  .attr("height",50)
  .attr("stroke","black")
  .attr("stroke-width","1")
  .attr("fill","lightblue");
  
  rect.on("mouseover", handleMouseOver);
  
  function handleMouseOver(d, i) {  
    rect.transition()
          .delay(1000)
          .attr("x", 100)
          .attr("width",100)
          .attr("height",100)
        .transition()
          .delay(1000)
          .attr("x", 10)
          .attr("width",50)
          .attr("height",50)
  }

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
Rotatation can be implement by *transition()* together with *interpolateString* function.
`
)});
  main.variable(observer()).define(["d3"], function(d3)
{
  var svg = d3.create("svg")
  .attr("width", 200)
  .attr("height", 200);

  var rect = svg.append("rect")
    .attr("x",50)
    .attr("y",50)
    .attr("width",100)
    .attr("height",100)
    .attr("stroke","black")
    .attr("stroke-width","1")
    .attr("fill","lightblue");
  
  var rotate = d3.interpolateString( "rotate(0,100,100)", "rotate(-180,100,100)" )
  var rotate_back = d3.interpolateString( "rotate(-180,100,100)", "rotate(0,100,100)" )

  rect.on("mouseover", handleMouseOver);
  
  function handleMouseOver(d, i) {  
    rect.transition()
        .duration(1000)
        .attrTween('transform' , function(d,i,a){ return rotate } )
      .transition()
        .duration(1000)
        .attrTween('transform' ,  function(d,i,a){ return rotate_back })
  }
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`
### Conclusion

When comparing SVG and Canvas, both of them can realize basic transition and animation, but the SVG code is shorter and cleaner.

When using D3 SVG to create interactive D3 graph, every sepecial effects is much similar to the one in SVG, but it provides native interfaces to get combined with Javascript functions. 

In my view, CSS is the most clean and dry way to build interactive pages. If effects can be realized by CSS, we can combine the related class in CSS instead of using pure D3 transition.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
<br>
## Reference
https://developer.mozilla.org/en-US/

https://www.w3schools.com/

https://github.com/d3/d3-transition#selecting-elements
`
)});
  return main;
}
