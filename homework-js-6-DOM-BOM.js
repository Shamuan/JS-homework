// v1.0

var tags = ['div', 'p', 'a']
var classes = ['container', 'main', 'wrapper']

var style = document.createElement ('style')
style.appendChild(document.createTextNode(`
  .container {
    background: blue;
    padding: 50px;
    border: 2px solid black;}
  .main {
    background: yellow;
    padding: 30px;
    opacity:0.4;}
  .wrapper {
    background: green;
    padding: 30px;
    opacity:0.4;}
  }`))
document.head.appendChild(style)
for(var i = 0; i < tags.length; i++) {
  var addElements = document.createElement(tags[i])
  var addClass = addElements.classList.add(classes[i])
  document.body.appendChild(addElements)
}

// v1.1

var tags = ['div', 'p', 'a']

var classes = new Map();

classes.set('container','background: blue;padding: 50px;border: 2px solid black;');
classes.set('main','background: yellow; padding: 30px; opacity:0.4;');
classes.set('wrapper','background: green; padding: 30px; opacity:0.4;');

var stringClass = '';
for(var x of classes) {
  stringClass += `.${x[0]} {${x[1]}}\n`;
}

var style = document.createElement ('style')
style.appendChild(document.createTextNode(stringClass))
document.head.appendChild(style)
for(var i = 0; i < tags.length; i++) {
  var addElements = document.createElement(tags[i])
  var addClass = addElements.classList.add(Array.from(classes.keys())[i])
  document.body.appendChild(addElements)
}