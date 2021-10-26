function CLICK(){
    if (window.confirm("CLICK COMPLETE")){
        var id = document.getElementById("return");
        
        var newelement = document.createElement("p");
        newelement.textContent = "OKが選択されました。";

        id.appendChild(newelement);
    }
    else {
        var id = document.getElementById("return");
        
        var newelement = document.createElement("p");
        newelement.textContent = "キャンセルが選択されました。";

        id.appendChild(newelement);
    }
}