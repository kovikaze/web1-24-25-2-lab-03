
let data = [
    { id: 1, name: "Gipsz Jakab", age: 25, city: "Budapest", height: 180, email: "gipsz@hotmail.com" },
    { id: 2, name: "Teszt Elek", age: 32, city: "Debrecen", height: 170, email: "teszt@hotmail.com" },
    { id: 3, name: "Alma Béla", age: 29, city: "Szeged", height: 185, email: "alma@hotmail.com" },
    { id: 4, name: "Kókusz Edit", age: 22, city: "Pécs", height: 169, email: "kokusz@hotmail.com" },
    { id: 4, name: "Kókusz Edit", age: 22, city: "Pécs", height: 169, email: "kokusz@hotmail.com" }
  ];



const div = document.getElementById("myTable");


const generateTable = (tableRows = [] ) =>{
    const keys = Object.keys(tableRows[0]);
    tableRows.forEach(adat => {
        const row = document.createElement('tr');
        table.appendChild(row);
        keys.forEach(key => {
            const cell = document.createElement('td');
            row.appendChild(cell);
            cell.innerHTML = adat(key);
        });
    });

// const table = document.createElement("table");
// div.appendChild(table);
// for(let i = 0; i < 5; i++) {
//     const row = document.createElement('tr');
//     table.appendChild(row);
//     for(let j = 0; j < 5; j++){
//         const cell = document.createElement('td');
//         row.appendChild(cell);
//         cell.textContent = `$asd`;
//     }
//}

}

// const meret = 5;
// const container = document.getElementById("tablaContainer");

// const tabla = document.createElement("table");

// for (let i = 0; i < meret; i++) {
//   const sor = document.createElement("tr");
//   for (let j = 0; j < meret; j++) {
//     const cella = document.createElement("td");
//     cella.textContent = `${i + 1},${j + 1}`; // vagy hagyd üresen: ""
//     sor.appendChild(cella);
//   }
//   tabla.appendChild(sor);
// }

// container.appendChild(tabla);