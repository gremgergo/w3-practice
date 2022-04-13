console.log("this is a script file")

console.log("load")

//console.dir(document)//


async function loadEvent() {

    let countriesData = await fetch("https://restcountries.com/v3.1/all");
    let countriesJson = await countriesData.json();
    console.log(countriesJson[88])

    let countriesSection = document.getElementById("countries");
    //console.dir(countriesSection);
    //countriesSection.innerHTML+="hali";
    countriesSection.insertAdjacentHTML("beforeend",`
    <h1>countries</h1>
    `)
    
    //countriesSection.insertAdjacentHTML("beforeend", countriesJson[88].name.common)//

    /*let countryComponent = `
    <div class="country">
        <h2>ide kerul az orszag neve</h2>
    </div>
    `*/

    function countryComponent(countryName,) {
        return `
        <div class="country">
            <h2>${countryName}</h2>
        </div>`
    }

    for (let index = 0; index < countriesJson.length; index++) {
        console.log(index)
        //countriesSection.insertAdjacentHTML("beforeend", countriesJson[index].name.common)
        countriesSection.insertAdjacentHTML("beforeend", countryComponent(countriesJson[index].name.common))

    }


}

window.addEventListener("load",loadEvent)

function logger(logThis) {
    console.log(logThis)
}

logger("Hello")
logger("Hello2")
logger(8)
logger(true)

