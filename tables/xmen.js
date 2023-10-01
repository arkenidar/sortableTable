// a table as an array of objects with the same structure (same attributes/fields)
let tableData1 = [
{ name: 'Nightcrawler', realname: 'Wagner, Kurt',   power: 'Teleportation',  info: 'http://www.superherodb.com/Nightcrawler/10-107/' },
{ name: 'Cyclops',    realname: 'Summers, Scott',   power: 'Optic blast',    info: 'http://www.superherodb.com/Cyclops/10-50/' },
{ name: 'Rogue',    realname: 'Marie, Anna',    power: 'Absorbing powers', info: 'http://www.superherodb.com/Rogue/10-831/' },
{ name: 'Wolverine',  realname: 'Howlett, James',   power: 'Regeneration',   info: 'http://www.superherodb.com/Wolverine/10-161/' }
]

// first table object
createTableObject(tableData1.slice(),fillTableCommon1,"name","#heroes")

// second table object
createTableObject(tableData1.slice(),fillTableCommon1,"name","#heroes2")

// produce HTML for <table> tag "body" using "table" array of objects
function fillTableCommon1(tableData,tableNode){
  // table "body"
  let tbody = tableNode.querySelector("tbody")
  // empty it
  tbody.innerHTML = ""
  // fill it again table row by table row
  for(const [index, entry] of tableData.entries()){
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
