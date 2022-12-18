const result = document.querySelector("#resultat")

function random(){
let randomTenFirst = Math.floor(Math.random() * 10 +1);
console.log(randomTenFirst)
let randomTenLast = Math.floor(Math.random() * 10 +1);
console.log(randomTenLast)

const ulHeadFirst = document.createElement("ol");
const ulHeadLast = document.createElement("ol");
for (i = 0; i < randomTenFirst; i++)
{
    let newItem = document.createElement("li")
    let randomHundra = Math.round(Math.random() * 100);
    console.log(randomHundra)
    newItem.innerText = randomHundra;
    ulHeadFirst.appendChild(newItem)
    }
    result.appendChild(ulHeadFirst);
    for (i = 0; i < randomTenLast; i++)
    {
        let newItem = document.createElement("li")
        let randomHundra = Math.round(Math.random() * 100);
        console.log(randomHundra)
        newItem.innerText = randomHundra;
        ulHeadLast.appendChild(newItem)
        }
        result.appendChild(ulHeadLast);
}