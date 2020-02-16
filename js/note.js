let tblBody = $("#tblbody");
let oneRow = "";
fetch('http://localhost:3000/select', {
    headers: {
        'authorization': localStorage.getItem('token')
    }
})
    .then(res => { return res.json() })
    .then(data => {
        if (data.name === "JsonWebTokenError") {
            alert('please login first')
            window.location.href = 'login.html'
        }
        else {
            console.log(data)
            data.map(noteTable => {
                return oneRow += " <tr>" +
                    "<td>" + noteTable.noteId + "</td>" +
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
    });

$(document).ready(function () {
    $("#buttonInsert").click(function () {
        const title = $('#title').val();
        const content = $('#content').val();
        console.log(title)
        console.log(content)
        if (title == "" || content == "") {
            alert("All fields are Required !")
        } else {
            let url = 'http://localhost:3000/createNote';
            let data = { noteTitle: title, noteBody: content, imageName: "" };
            fetch(url, {
                method: 'post',
                headers: {
                    "Content-type": "application/json",
                    'authorization': localStorage.getItem('token')
                },
                body: JSON.stringify(data)
                
            })
            .then(response => response.json())
            .then(function (data) {
                console.log(data);
                if (data.status == "Signup success!") {
                    alert("Successfully Added a note in database")
                } else {
                    alert("Something went wrong. :(")
                }
                console.log('Request succeeded with JSON response', data);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            })
        }
    });
});


