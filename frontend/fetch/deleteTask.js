export function DeleteTask(id) {
    console.log(id);
    fetch(`http://localhost:3000/delete/${id}`, {
        method: 'DELETE'
        // ,
        // body: JSON.stringify(id)
    })
};

