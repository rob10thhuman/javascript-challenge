var tbody=d3.select('tbody');
var button=d3.select('#filter-btn');
var inpDT=d3.select('#datetime');
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

tbody.html('');
  if (fDate.length !==0){tblOn(fDate);}
  else{tbody.append('tr').append('td').text('Nothing found, earthling.');}
})