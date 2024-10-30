const form = document.getElementById("empForm")
form.addEventListener("submit",(event) =>{
    event.preventDefault()
    for(let i = 0; i < event.target.length-1; i++){ //exclude submit button
        console.log(event.target[i].labels[0].innerHTML + ": " + event.target[i].value)
    }
})
