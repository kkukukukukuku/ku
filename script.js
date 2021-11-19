

let frst = document.createElement('main')
var x
x = prompt(frst.innerText)
frst.style.backgroundColor = 'yellow' 
frst.style.width = '300px'
frst.style.height = '250px' 
frst.innerText = x
frst.style.fontSize = '40px'
document.querySelector('body').append(frst)



let scnd = document.createElement('div')
scnd.style.backgroundColor = 'grey'
scnd.style.width = '500px'
scnd.style.height = '210px'
scnd.innerText = 'напиши че нибудь интересное'
scnd.style.fontSize = '40px'
document.querySelector('body').append(scnd)


let img = document.createElement('img')
img.src = 'photo.png'
img.style.width = '300px'
img.style.height = '200px' 
document.querySelector('main').append(img)
 
