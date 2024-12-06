// export async function getTask() {
//     let url = 'https://localhost:3000/';
//     let response = await fetch(url);

//     let tasks = await response.json();
//     console.log(tasks)
// }

export async function getTask() {
    await fetch('https://localhost:3000/').then((response)=>response.json().then((task)=>console.log(tasks)))


    // console.log(tasks)
}