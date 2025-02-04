var heading1 = document.getElementById('heading1');
heading1.innerText = 'New text';
heading1.style.color = 'red';
heading1.style.fontFamily = 'sans-serif';

var paragraph = document.getElementsByClassName('my-class').item(0);
paragraph.style.color = 'blue';
paragraph.style.fontSize = '30px';


function myClick() {
    var newParagraph = document.createElement('p');
    newParagraph.innerText = 'New paragraph';
    newParagraph.style.fontSize = '20px';
    newParagraph.style.color = 'green';


    var container = document.getElementById('container');
    container.appendChild(newParagraph);

    console.log(newParagraph.getAttribute('style'))
}

// paragraph.addEventListener('click', myClick);

// paragraph.onclick = myClick;

// alert('Hello');
// confirm('Hello');


// token = setTimeout(myClick, 5*1000);

// token = setInterval(myClick, 5*1000);


