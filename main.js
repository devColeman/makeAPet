let h2 = document.querySelector('h2')
let hunger = document.querySelector('#hunger')
let happiness = document.querySelector('#happiness')



let pet = {

hunger: 0,
happiness: 0,
feed: function(){
    if(this.hunger >= 100){
        alert('Pet is full!')
        hunger.innerText = `Hunger: ${pet.hunger}`
    }else {
        this.hunger += 5
        hunger.innerText = `Hunger: ${pet.hunger}`
    }
},

play: function(){
    if(this.happiness >= 100){
        alert('Pet is full!')
        happiness.innerText = `Happiness: ${pet.happiness}`
    }else {
        this.happiness += 5
        happiness.innerText = `Happiness: ${pet.happiness}`
    }
},
status: function(){
    document.querySelector("h4").innerText =  (`${pet.name} is ${pet.hunger} full and is ${pet.happiness} happy`)
}

}


pet.name = prompt("Enter your Pet's name")
h2.innerText = pet.name;
hunger.innerText = `Hunger: ${pet.hunger}`
happiness.innerText = `Happiness: ${pet.happiness}`

let feed = document.querySelector('#feed')
let play = document.querySelector('#play')

play.addEventListener('click', () => pet.play())
feed.addEventListener('click', () => pet.feed())

let statuss = document.querySelector('#status')
statuss.addEventListener('click', () => pet.status() )










