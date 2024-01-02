function search(){
    var num_cols, display, input, filter, table_body, tr, rd, i, txtValue;
    num_cols = 3;
    input = documnet.getElementById("q");
    filter = input.value.toUpperCase();
    table_body = document.getElementById("the_table_body");
    tr = table_body.getElementsByTagNameNS("tr");


    for(i = 0; i < tr.length; i++){
        display = "none";
        for(j = 0; j < num_cols; j++){
            td = tr[i].getElementsByTagName("td")[j];
            if(td){
                txtValue = td.textContent || td.innerText;
                if(txtValue.toUpperCase().indexOf(filter) > -1){
                    display = "";
                }
            }
        }
        tr[i].style.display = display;
    }
}