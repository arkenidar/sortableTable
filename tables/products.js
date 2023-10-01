// a table as an array of objects with the same structure (same attributes/fields)
// table of products to sell (sample)
let productsTableData = [
  { name: 'Cookies',  cost: 9,   avail: '14'},
  { name: 'Bread',  cost: 10,   avail: '21'},
  { name: 'Water',  cost: 5,   avail: '28'},
  { name: 'Juice',  cost: 6,   avail: '16'},
]

// product table object
createTableObject(productsTableData.slice(),productsFillTable,"name","#products")

// produce HTML for <table> tag "body" using "table" array of objects
function productsFillTable(tableData,tableNode){
  // table "body"
  let tbody = tableNode.querySelector("tbody")
  // empty it
  tbody.innerHTML = ""
  // fill it again table row by table row
  for(const [index, entry] of tableData.entries()){
    // the table entry has data for filling below
    let {name,cost,avail} = entry
    // table row (filled)
    tbody.innerHTML += `<tr>
      <td><a href="javascript:alert('${name}')">${name}</a></td>
      <td>${cost}</td>
      <td>${avail}</td>
      </tr>`
  }
}
