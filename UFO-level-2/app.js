var tbody=d3.select('tbody');
var button=d3.select('#filter-btn');
var inpDT=d3.select('#datetime');
var inpCity=d3.select('#city')
var inpST=d3.select('#state')
var inpCTRY=d3.select('#country')
var inpSHP=d3.select('#shape')
var cols=['datetime','city','state','country','shape','durationMinutes','comments']

function tblOn(dataObj){
    dataObj.forEach(line => {
    let row=tbody.append('tr');
    cols.forEach(col => row.append('td').text(line[col]))
    });
}

tblOn(data);

button.on('click',() => {d3.event.preventDefault();

let inpDate=inpDT.property('value')
  
let fDate=data.filter(data => data.datetime === inpDate);
let fCity=data.filter(data => data.city === inpCity);
let fState=data.filter(data => data.state === inpST);
let fCountry=data.filter(data => data.country === inpCTRY);
let fShape=data.filter(data => data.shape === inpSHP);

// let fData = data.filter(data => data.datetime === inpDate | data.city === inpCity | data.state === inpST | data.country === inpCTRY | data.shape === inpSHP)

// let fData=data.filter(data => fDate || fCity || fState || fCountry || fShape)

let fData = data.filter(function(el) {
  return el.fDate === inpDate | 
        el.fCity === inpCity |
        el.fState === inpST;
}); 


tbody.html('');
  if (fData.length!==0){tblOn(fData);}
  else{tbody.append('tr').append('td').text('Nothing found, Earthling.');}
})