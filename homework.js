let list = document.getElementById("itemlist");

for (let i = 1;i<=10;i++){
    let li = document.createElement("li");
    li.textContent = "ITEM " + i;

    if(i%2===0){
        li.style.backgroundColor = "green";
        li.style.color = "white";
        li.style.padding= "12px"
    }

    list.appendChild(li);
}