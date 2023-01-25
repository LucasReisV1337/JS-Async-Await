const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(r => r.json())
        .then(d => renderApiResult.textContent = JSON.stringify(d))
        .catch(e => console.error(e))
}

function getUser(id) { 
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = JSON.stringify(data.name)
            userCity.textContent = JSON.stringify(data.city)
            userAvatar.src = data.avatar
        })
    .catch(e => console.error(e))
}

function addUser(newUser) { 
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; chartset=UTF-8"
        }
    })
        .then(res => res.json())
        .then(dat => alertApi.textContent = dat)
        .catch(error => console.error(error))
}

function updateUser(updatedUser, id) { 
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(r => alertApi.textContent = r)
    .catch(error => console.error(error))
}

function deleteUser(id) { 
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headeres: {
            "Content-Type": "application/json charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}




const newUser = {
    name: "Lorem Ipsum",
    avatar: "https://picsum.photos/400/200",
    city: "Lorem Ipsumlândia"
}

addUser(newUser)

const updatedUser = {
    name: "Lora Ipsam",
    avatar:"https://picsum.photos/200/300",
    city:"Lorom Yplyson"
}


updateUser(updatedUser, 9)
deleteUser(6)

getUsers()
getUser(9) 
