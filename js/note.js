let tblBody = $("#tblbody");
    let oneRow = "";
    fetch('http://localhost:3000/selectBibek',{
        headers:{
            'authorization': localStorage.getItem('token')
        }
    })
        .then(res => { return res.json() })
        .then(data => {
            if(data.name==="JsonWebTokenError"){
                alert('please login first')
                window.location.href='login.html'
            }
            else{
            console.log(data)
            data.map(noteTable => {
                    return oneRow += " <tr>" +
                        "<td>" + noteTable.id + "</td>" +
                        "<td>" + noteTable.noteTitle + "</td>" +
                        "<td>" + noteTable.noteBody + "</td>" +
                        "</tr>";
                });
                $("#tbodyone").html(oneRow);
                // console.log(data);
            }
        })

    .catch(error => {
        console.log(error);
    })
