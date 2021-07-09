let element = document.getElementsByClassName('cards')[0];

const sort = () => [...element.children]
    .sort((a, b) => a.innerText - b.innerText)
    .forEach(node => element.appendChild(node));

const shuffle = () => [...element.children]
    .map(itm => [Math.random(), itm])
    .sort((a, b) => a[0] - b[0])
    .map(itm => itm[1])
    .forEach(node => element.appendChild(node));