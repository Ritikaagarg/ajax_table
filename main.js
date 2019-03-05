
$(document).ready(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/posts",
            success:function(data, status)
            {
                var arr = data;
    function CreateTable() {
        // CREATE DYNAMIC TABLE.
        let previoustable = document.getElementById('dynamic_table');
        if(!!previoustable){
            previoustable.remove();
        }
        var table = document.createElement('table');
        table.setAttribute('id', 'dynamicTable');
        //key and values
        var key = Object.keys(arr[0]);
        var value = arr.map((elements)=>{
            return Object.values(elements);
        })

        //table header
        var tr = document.createElement('tr');
        key.map((value, index) => {
            var th = document.createElement('th');
            th.innerHTML = key[index];
            th.setAttribute('class', 'tableClass1');
            th.setAttribute('id', key[index])
            tr.appendChild(th);
        })
        table.appendChild(tr);
        
        // table definition                
        arr.map((value, index1) => {
            var tr = document.createElement('tr');
            key.map((value, index2) => {
                var td = document.createElement('td');
                td.innerHTML = arr[index1][key[index2]];
                td.setAttribute('class', 'tableClass');
                tr.appendChild(td);
            })
        table.appendChild(tr);
        })
        document.body.appendChild(table);
        addEventsToColumns();
    }
    
  
    //event listener  
    function addEventsToColumns(){
        var header=Object.keys(arr[0]);
        header.map((value, index) => {
            document.getElementById(header[index]).addEventListener('click', function (event) {
            sortTable(event.target.innerText)
        })
    })
}


//sort function
let flag = true;
function sortTable(param){
    arr.sort(compare);
    function compare(row1,row2){
        if(row1[param]>row2[param] && flag){
            return 1;
        }
        else
        return -1;
    }
    flag=!flag;
    CreateTable();
}
CreateTable();
}
})
});