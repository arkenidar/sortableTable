// a table as an array of objects with the same structure (same attributes/fields)
let table = [
{ name: 'Nightcrawler', realname: 'Wagner, Kurt',     power: 'Teleportation',    info: 'http://www.superherodb.com/Nightcrawler/10-107/' },
{ name: 'Cyclops',      realname: 'Summers, Scott',   power: 'Optic blast',      info: 'http://www.superherodb.com/Cyclops/10-50/' },
{ name: 'Rogue',        realname: 'Marie, Anna',      power: 'Absorbing powers', info: 'http://www.superherodb.com/Rogue/10-831/' },
{ name: 'Wolverine',    realname: 'Howlett, James',   power: 'Regeneration',     info: 'http://www.superherodb.com/Wolverine/10-161/' }
]

// initially is sorted by "name" column
let sortColumn = "name"
// initially is sorted in "unspecified" order (it then defaults to something)
let sortOrder = "unspecified"
// changing "sortColumn" must activate the column action
columnAction(sortColumn)

// set "click event" handlers for every "sortable"
for(let column of document.querySelectorAll("[data-sortable]")){
    // column "on click" event handler function
    column.onclick = function(event){
        // clicked DOM element
        let element = event.target
        // get "column name"
        let columnName = element.dataset.sortable
        // do column action specific for column name
        columnAction(columnName)
    }
}

// action when a table column is activated
function columnAction(columnName){
    
    // if action on a sorted column then invert sorting order
    if(columnName==sortColumn){
        // invert sorting order
        // sort order defaults to "ascending" if "unspecified"
        sortOrder = sortOrder=="ascending" ? "descending":"ascending"
    }

    // no CSS class (part of CSS class change)
    setSortedClassName("",sortColumn)
    
    // current column used for sorting
    sortColumn=columnName
    // sort by "sort column" and "sort order"
    const sign = sortOrder == "ascending" ? 1 : -1
    table.sort((a, b) => a[sortColumn] > b[sortColumn] ? sign : -sign)
    // changing table means producing HTML again
    fillTable()
    
    // set "sorted" CSS class (CSS class change)
    setSortedClassName(sortOrder == "ascending" ? "sortedAscending" : "sortedDescending", sortColumn)
    
    // CSS class for "sortable" (column name for selecting it)
    function setSortedClassName(className,columnName){
        // "sortable" element attribute for querying
        let element = document.querySelector(`[data-sortable="${columnName}"]`)
        // set CSS class of HTML DOM element
        element.className = className
    }

}

// produce the first table (initialization)
fillTable()

// produce HTML for <table> tag "body" using "table" array of objects
function fillTable(){
    // table "body"
    let tbody = document.querySelector("table#heroes tbody")
    // empty it
    tbody.innerHTML = ""
    // fill it again table row by table row
    for(const [index, entry] of table.entries()){
        // the table entry has data for filling below
        let {info,name,realname,power} = entry
        // table row (filled)
        tbody.innerHTML += `<tr>
            <td>${index+1}</td>
            <td><a href='${info}'>${name}</a></td>
            <td>${realname}</td>
            <td>${power}</td>
            </tr>`
    }
}
