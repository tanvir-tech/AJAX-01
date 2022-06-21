function sendRequest(method, url, data) {

    const promise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            // console.log(this.response);
            if(this.status>=400){
                reject(`Application Specific Error ${this.status}`); //back-tick for string formation
            }else{
                resolve(this.response);
            }
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

// Application_Specific_Error_URL = "https://jsonplaceholder.typicode.com/todos/text";


function getData() {
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/text")
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