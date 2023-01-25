import axios from "axios"

axios
    .get('https://api.github.com/users/LucasReisV1337')
    .then(res => console.log(res))