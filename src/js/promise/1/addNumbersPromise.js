function add(promiseX, promiseY){
    return Promise.all([promiseX, promiseY])
        .then(
            (values)=>{
                let val = values[0].data.id + values[1].data.id;
                return (val);
            }
        )
}

add(axios.get('https://jsonplaceholder.typicode.com/todos/1'),
    axios.get('https://jsonplaceholder.typicode.com/todos/3')).then(
    (val) =>{
        alert(val);
    }
);