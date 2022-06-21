function sendRequest(method, url) {

    const promise = new Promise((resolve, reject) => {
        
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            // console.log(this.response);
            resolve(this.response);
        };

        xhr.open(method, url);

        xhr.responseType = "json";

        xhr.send();
    });

    return promise;
}

function getData() {
    sendRequest("GET","https://jsonplaceholder.typicode.com/todos/1").then((responseData)=>{
        console.log(responseData);
    });
}

function setData() {
    alert("set data");
}


$("#get").click(function (e) {
    e.preventDefault();
    getData();
});


$("#set").click(function (e) {
    e.preventDefault();
    setData();
});