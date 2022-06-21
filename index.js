function sendRequest(method, url, data) {

    const promise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            // console.log(this.response);
            resolve(this.response);
        };

        xhr.onerror = function () {
            reject("There is an error");
        };

        xhr.open(method, url);

        xhr.responseType = "json";

        xhr.send(data);
    });

    return promise;
}

function getData() {
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
        .then((responseData) => {
            console.log(responseData);
        }).catch((error) => {
            console.log(error);
        });
}

function setData() {
    // alert("set data");
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    ).then((responseData) => {
        console.log(responseData);
    });
}














$("#get").click(function (e) {
    e.preventDefault();
    getData();
});


$("#set").click(function (e) {
    e.preventDefault();
    setData();
});