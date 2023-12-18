async function loadUsers() {

    let arr = [];
    const url = 'https://api.escuelajs.co/api/v1/users';
    const response = await fetch(url);
    const data = await response.json();
    // let newData = JSON.parse(data);
    let newData2 = JSON.stringify(data);

    for (item of data) {
        // console.log(item.name);
        arr.push(item.name);
    }

    // console.log(arr);

    //[{"id":1,"email":"john@mail.com","password":"changeme","name":"Jhon","role":"customer","avatar":"https://i.imgur.com/LDOO4Qs.jpg","creationAt":"2023-12-18T07:49:41.000Z","updatedAt":"2023-12-18T07:49:41.000Z"}]

    // console.log(newData);
    // console.log(newData2);
    // console.log(data);
    

    // myArray = JSON.parse(data);
    // console.log(myArray);
    return arr;
}

let userList = await loadUsers();
console.log(userList);

// const result = loadUsers().then((data) => {
//     // console.log(data);
// });



// let userList = await loadUsers();
// console.log(loadUsers());
// console.log(userList());

// async function getStarWarsMovie(id) {
//     const response = await fetch(`https://swapi.dev/api/films/${id}/`)
//     console.log("ответ получен", response) // *1
//     return response.json()
//   }
  
//   const movies = getStarWarsMovie(1).then((movie) => {
//     console.log(movie.title)
//   }) // *2
//   console.log("результат вызова функции", movies) // *3


