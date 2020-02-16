$(document).ready(function () {
    $("#button1").click(function () {
        const email = $('#phone').val();
        const password = $('#password').val();
        console.log(email)
        console.log(password)

        if (phone == "" || password == "") {
            alert("All fields are Required !")

        } else {
            let url = 'http://localhost:3000/Login';
            let data = { email: email, password: password };
            fetch(url, {
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
                
            })
            
                .then(response => response.json())
                .then(function (data) {
                    console.log(data);
                    if (data.status == "200") {
                        localStorage.setItem('status',data.status)
                        localStorage.setItem('token',"Bearer " + data.token)
                        alert("Successfull")
                        window.location.href = "DashBoard.html"
                    } else {
                        alert("Error")
                    }
                    console.log('Request succeeded with JSON response', data);
                })
                .catch(function (error) {
                    console.log('Request failed', error);
                });


        }
    });
});