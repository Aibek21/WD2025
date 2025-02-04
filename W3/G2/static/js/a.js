var heading = document.getElementById('heading1');
heading.innerText = 'New text';
heading.style.color = 'red';
console.log(heading.innerText);


var myClass = document.getElementsByClassName('my-class');
var p = myClass.item(0);
p.style.color = 'blue';
p.style.fontSize = '30px';

var h3 = document.getElementsByTagName('h3');
console.log(h3);


var newParagraph = document.createElement('p');
newParagraph.innerText = 'New Paragraph';
newParagraph.style.color = 'green';
newParagraph.style.fontSize = '20px';
newParagraph.className = 'new-class';
console.log(newParagraph.getAttribute('class'));


var container = document.getElementById('container');
container.appendChild(newParagraph);


// alert('HELLO');
// confirm('HELLO');


function myClick() {
    alert('Button clicked');
}

newParagraph.addEventListener('click', myClick);
newParagraph.onclick = myClick;
