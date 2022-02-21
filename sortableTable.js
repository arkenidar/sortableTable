
// create an instance/object of a sorted table (this enables having many sorted tables)
function createTableObject(table,fillTable,sortColumnInit,tableSelector){

// table DOM node
let tableNode = document.querySelector(tableSelector)

// initially is sorted by "name" column
let sortColumn = sortColumnInit
// initially is sorted in "unspecified" order (it then defaults to something)
let sortOrder = "unspecified"
// changing "sortColumn" must activate the column action
columnAction(sortColumn,tableNode)

// set "click event" handlers for every "sortable"
for(let column of tableNode.querySelectorAll("[data-sortable]")){
    // column "on click" event handler function
    column.onclick = function(event){
        // clicked DOM element
        let element = event.target
        // get "column name"
        let columnName = element.dataset.sortable
        // do column action specific for column name
        columnAction(columnName,tableNode)
    }
}

// action when a table column is activated
function columnAction(columnName,tableNode){
    
    // if action on a sorted column then invert sorting order
    if(columnName==sortColumn){
        // invert sorting order
        // sort order defaults to "ascending" if "unspecified"
        sortOrder = sortOrder=="ascending" ? "descending":"ascending"
    }

    // no CSS class (part of CSS class change)
    setSortedClassName("",sortColumn,tableNode)
    
    // current column used for sorting
    sortColumn=columnName
    // sort by "sort column" and "sort order"
    const sign = sortOrder == "ascending" ? 1 : -1
    table.sort((a, b) => a[sortColumn] > b[sortColumn] ? sign : -sign)
    // changing table means producing HTML again
    fillTable(table,tableNode)
    
    // set "sorted" CSS class (CSS class change)
    setSortedClassName(sortOrder == "ascending" ? "sortedAscending" : "sortedDescending", sortColumn, tableNode)
    
    // CSS class for "sortable" (column name for selecting it)
    function setSortedClassName(className,columnName,tableNode){
        // "sortable" element attribute for querying
        let element = tableNode.querySelector(`[data-sortable="${columnName}"]`)
        // set CSS class of HTML DOM element
        element.className = className
    }

}

// produce the first table (initialization)
fillTable(table,tableNode)

}
