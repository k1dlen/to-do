// export async function getTask() {
//     let url = 'https://localhost:3000/';
//     let response = await fetch(url);

//     let tasks = await response.json();
//     console.log(tasks)
// }

export async function getTask() {
<<<<<<< HEAD
   return  await fetch('http://localhost:3000/').then((response)=>response.json())
=======
    await fetch('https://localhost:3000/').then((response)=>response.json().then((task)=>console.log(tasks)))
>>>>>>> 8043a2ee31bdd6a08b0688b37b582f4fa52374d8


    // console.log(tasks)
}