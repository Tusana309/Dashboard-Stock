async function checkMyStock() {
    let x = document.getElementById("stock").value;
    console.log(x)
    if (x == "Chose one stock ...."){
      alert("Hãy chọn mã cổ phiếu muốn dự đoán")
    }else{
        const stock = x
        console.log(x)
        const response  = await fetch("./data.json");
        const {rows} = await response.json();
        console.log(rows)
        for(const row of rows){
            if (stock == row[0]){
                document.getElementById("result").innerHTML = "Giá cổ phiếu "+stock+ " được dự đoán là " + row[1]+ "(VND)";
            }
        }
    }
}
async function loadIntoTable(url, table){
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const { rows} = await response.json();
    console.log(("STB" == rows[0][0]))
    for (const row of rows){
        check_color = row[2]
        console.log(check_color)
        const rowElement = document.createElement("tr");
        if(check_color == 1){
            rowElement.setAttribute('id','increase');
        }else{
            rowElement.setAttribute('id','reduce');
        }
        row_new = [row[0], row[1]]
        for (const cellText of row_new){
            const cellElement = document.createElement("th");
            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
            
        }
        tableBody.appendChild(rowElement);
    }
}

loadIntoTable("./data.json", document.querySelector("table"));
