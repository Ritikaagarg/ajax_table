
$(document).ready(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/posts",
            success:function(data, status)
            {
                var arr = data;
    function CreateTable() {
        let initialtable = document.getElementById('initialtable');
        if (!!initialtable) {
            initialtable.remove();
        }
        // CREATE DYNAMIC TABLE.
        var table = document.createElement('table');
        table.setAttribute('id', 'initialtable');

        // key and values....
        var key = Object.keys(arr[0]);
        var value = arr.map((elements) => {
            return Object.values(elements);
        });
        // Table Header......
        var tr = document.createElement('tr');
        let tableheader = key.map((arr1) => {
                    var th = document.createElement('th');
                    th.innerHTML = arr1;
                    th.setAttribute('id',arr1)
                    tr.appendChild(th);
                })

        table.appendChild(tr);
        // Table Definition......
       var arrvalue = arr.map((arrval)=> {
            var tr = document.createElement('tr');
            var arrkey = key.map((arrkey)=>  {
                var td = document.createElement('td');
                td.innerHTML = arrval[arrkey];
                tr.appendChild(td);
            })
            table.appendChild(tr);
        })
        document.body.appendChild(table);
        addToColumns();
    }
    function addToColumns() {
        var header = Object.keys(arr[0]);
        console.log(header);
        var header = header.map((header)=> {
            document.getElementById(header).addEventListener('click', function (event) {
                sortTable(event.target.innerHTML)
            });
        })
    }
    let flag = true;
    function sortTable(parameter) {
        arr.sort(comparison);
        function comparison(a, b) {
            if (a[parameter] > b[parameter] && flag) {
                return 1;
            }
            else
                return -1;
        }
        flag = !flag;
        CreateTable();
    }
    CreateTable();
        }
         });
                    
            });
