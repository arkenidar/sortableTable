let table = [
{ name: 'Nightcrawler', realname: 'Wagner, Kurt',     power: 'Teleportation',    info: 'http://www.superherodb.com/Nightcrawler/10-107/' },
{ name: 'Cyclops',      realname: 'Summers, Scott',   power: 'Optic blast',      info: 'http://www.superherodb.com/Cyclops/10-50/' },
{ name: 'Rogue',        realname: 'Marie, Anna',      power: 'Absorbing powers', info: 'http://www.superherodb.com/Rogue/10-831/' },
{ name: 'Wolverine',    realname: 'Howlett, James',   power: 'Regeneration',     info: 'http://www.superherodb.com/Wolverine/10-161/' }
]

let sortColumn = "name"
columnAction(sortColumn)
for(let column of document.querySelectorAll("[data-sortable]")){
    column.onclick = function(event){
        let element = event.target
        let columnName = element.dataset.sortable
        columnAction(columnName)
    }
}
function columnAction(columnName){
    setSortedClassName("",sortColumn)
    
    sortColumn=columnName
    table=table.sort((a, b) => a[sortColumn] > b[sortColumn] ? 1 : -1)
    fillTable()
    
    setSortedClassName("sorted",sortColumn)
    function setSortedClassName(className,columnName){
        let element = document.querySelector(`[data-sortable="${columnName}"]`)
        element.className = className
    }

}

fillTable()
function fillTable(){
    let tbody = document.querySelector("table#heroes tbody")
    tbody.innerHTML = ""
    for(const [index, entry] of table.entries()){
        let {info,name,realname,power} = entry
        tbody.innerHTML += `<tr>
            <td>${index+1}</td>
            <td><a href='${info}'>${name}</a></td>
            <td>${realname}</td>
            <td>${power}</td>
            </tr>`
    }
}
