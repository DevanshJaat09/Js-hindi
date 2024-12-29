// document.getElementById('firstHeading')
// <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​

// const head = document.getElementById('firstHeading')
// undefined

// head
// <h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​

// head.innerText = 'Divyanshu Sindhu'
// 'Divyanshu Sindhu'

// const title = document.getElementById('title')
// undefined

// title
// <h1 id=​"title" class=​"heading">​…​</h1>​

// title.className
// 'heading'

// title.id
// 'title'

// title.class
// undefined

// title.getAttribute('id')
// 'title'

// title.getAttribute('class')
// 'heading'

// title.setAttribute('class', 'my class')
// undefined
// **************This always overwrite

// title
// <h1 id=​"title" class=​"my class">​…​</h1>​

// title.innerText
// 'DOM learning on Chai aur code'

// title.textContent
// 'DOM learning on Chai aur code test text'

// title.innerHTML
// 'DOM learning on Chai aur code <span style="display: none;">test text</span>'

// title
// <h1 id=​"title" class=​"my class">​…​</h1>​
// title.innerText
// 'DOM learning on Chai aur code'
// title.textContent
// 'DOM learning on Chai aur code test text'
// title.innerHTML
// 'DOM learning on Chai aur code <span style="display: none;">test text</span>'

// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit.​</h2>​

// document.querySelector('#title')
// <h1 id=​"title" class=​"my class">​…​</h1>​

// document.querySelector('input[type="password"]')
{/* <input type=​"password" name id>​  */}

// document.querySelector('input[type="password"]')
// <input type=​"password" name id>​

// document.querySelector('ul')
// <ul>​…​</ul>​

// const myUl= document.querySelector('ul')
// undefined

// myUl.querySelector('li')
// <li class=​"list-item">​…​</li>​

// const turnGreen = myUl.querySelector('li')
// undefined

// turnGreen.style.backgroundColor = "Green"
// 'Green'

// turnGreen.style.padding = "10px"
// '10px'

// turnGreen.style.borderRadius = "10px"
// '10px'

// turnGreen.innerText = "Devansh_Jaat09"
// 'Devansh_Jaat09'