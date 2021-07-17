const container=document.querySelector('.container')
    btnContainer=document.querySelector('.buttons')
    btnBlack=document.createElement('button')
    btnGray=document.createElement('button')
    btnRGB=document.createElement('button')
    btnSize=document.createElement('button');

window.onload = () => {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach( box => box.addEventListener('mouseover', () => {
        box.style.background = "black"
    }))
}

const createDivs = (row,col) => {
    for (let i=0; i<(row*col); i++)
    {
        const div=document.createElement('div')
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box');
        div.style.border='1px solid red'
    }
}

createDivs(16,16)

const grayColor= () => {
    const boxes= container.querySelectorAll('.box')
    btnGray.textContent ="Gray";
    btnGray.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum= Math.floor(Math.random() *255)    
            box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`   
        }))
    })
    btnContainer.appendChild(btnGray).classList.add('btn')
}

grayColor()

const blackColor= () => {
    const boxes= container.querySelectorAll('.box')
    btnBlack.textContent ="Black";
    btnBlack.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {  
            box.style.background = "black"   
        }))
    })
    btnContainer.appendChild(btnBlack).classList.add('btn')
}

blackColor()

const rgbColor= () => {
    const boxes= container.querySelectorAll('.box')
    btnRGB.textContent ="RGB";
    btnRGB.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            box.style.background= `rgb(${R},${G},${B})`
        }))
    })
    btnContainer.appendChild(btnRGB).classList.add('btn')
}

rgbColor()

const reSet= () => {
    const boxes=container.querySelectorAll('.box')
    boxes.forEach(box => box.remove())
}

const reSize= () => {
    btnSize.textContent="Grid Size"
    btnSize.addEventListener('click', () => {
        let user = prompt("Change the Grid Size to: ")
        if(user === null || user < 1)
        {
            reSet()
            createDivs(16,16)
            blackColor()
            grayColor()
            rgbColor()
        }
        else{
            reSet()
            createDivs(user,user)
            blackColor()
            grayColor()
            rgbColor()
        }
    })
    btnContainer.appendChild(btnSize).classList.add('btn')
}

reSize()

const backgroundAnim = () => 
{
    colors = ['red', 'blue', 'yellow', 'green']
    const section = document.querySelector('.section')
        span = document.createElement('span')
    let size = Math.random() * 50
    span.style.width= 10 +size + 'px'
    span.style.height= 10 +size + 'px'
    span.style.borderRadius = `${size}%`
    span.style.top = Math.random() * innerHeight +'px'
    span.style.left = Math.random() * innerWidth +'px'
    const backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    span.style.background = backgroundColor
    section.appendChild(span)

    setTimeout(() => {span.remove()}, 5000)
}

setInterval(backgroundAnim, 500);