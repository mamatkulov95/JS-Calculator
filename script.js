let input = document.querySelector("input")
let btn = document.querySelector("button")
let paragraph = document.querySelector("p")

btn.addEventListener("click", function getCLick(){
 let listItems = ""
    for(let i = 0; i<leads.length; i++){
        // listItems += "<li> <a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i]  + "</a> </li>"
        listItems += `
        <li>
            <a target='_blank' href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>`
    }
    ulEL.innerHTML = listItems
})