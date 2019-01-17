function picOpen(id, imgNum)
{
    var pos = document.getElementById(id);
    pos.innerHTML = "";
    var table = document.createElement("table");
    var tr1 = document.createElement("tr");
    var th = document.createElement("th");
    var button = document.createElement("button");
    button.innerHTML = "CLOSE PIC";
    button.style.color = "red";
    button.addEventListener("click", function () {
        pos.innerHTML = "";
    });
    th.appendChild(button);
    tr1.appendChild(th);
    table.appendChild(tr1);
    var tr2 = document.createElement("tr");
    var td = document.createElement("td");
    var img = document.createElement("img");
    img.src = imgNum;
    td.appendChild(img);
    tr2.appendChild(td);
    table.appendChild(tr2);
    pos.appendChild(table);

}
