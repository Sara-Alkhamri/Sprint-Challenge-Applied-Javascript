// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component



function Header() {

    //create elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');

    //create classes
    header.classList.add('header');
    date.classList.add('span');
    h1.classList.add('h1');
    temp.classList.add('span');

    //text content
    date.textContent = 'MARCH 28, 2019';
    h1.textContent = 'Lambda Times',
    temp.textContent = '98°';

    //setup structur
    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);

    return header;

}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());