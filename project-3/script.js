// setInterval - diye hue method ko kisi interval ke baad continuously run krta jata hai

const clock = document.querySelector('#clock')

setInterval(function (){
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
},1000)