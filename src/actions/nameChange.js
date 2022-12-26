

export const anothername=(name1)=>{
    return {
        type:'CHANGE_NAME',
        payload:name1
    }
}

// export const anothername=()=>{
//     return (dispatch)=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json =>{
//             dispatch({ type:'CHANGE_NAME',
//                     payload:json[0].name })
//         })
//     }
// }
