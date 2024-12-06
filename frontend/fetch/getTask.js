// export async function getTask() {
//     let url = 'https://localhost:3000/';
//     let response = await fetch(url);

//     let tasks = await response.json();
//     console.log(tasks)
// }

export async function getTask() {
   return  await fetch('http://localhost:3000/').then((response)=>response.json())


    // console.log(tasks)
}