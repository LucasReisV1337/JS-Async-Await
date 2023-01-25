

const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(e => console.error(e))
}

function addNewUser() { 
    axios.post(url, {
        name: "Olivia Zars",
        avatar: "https://picsum.photos.com/200/300",
        city: "Brasília"
    })
        .then(response => {console.log(response)})
        .catch(err => console.error(err))
}


addNewUser()
getUsers()