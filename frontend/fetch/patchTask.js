export function PatchTask(task) {
    console.log(task);
    fetch('http://localhost:3000/update', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    })
};

