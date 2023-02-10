let url ="https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true"
fetch(url)
.then(response => response.json())
.then(function(response){
    for(let i = 0; i< response.length; i++){
        let cases = (response[i]["infected"] - response[i]["deceased"] - response[i]["recovered"])
        if(response[i]["country"] != "Singapore" && cases > 0 && cases != null){
            let countrysentence = response[i]["country"]
            let casessentence = cases
            let newdivone = document.createElement("div")
            newdivone.innerHTML = countrysentence
            document.querySelector(".countrytable").append(newdivone)
            let newdivtwo = document.createElement("div")
            newdivtwo.innerHTML = casessentence
            document.querySelector(".casestable").append(newdivtwo)
        }
        
    }
})