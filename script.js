const users = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(response => response.json())
        .then(data => showUser(data))
}

const showUser = users => {
    const allUsers = users.results;

    for (const user of allUsers) {
        console.log(user);
        const container = document.getElementById('new-user');
        const pic = user.picture.large;
        container.innerHTML = `<img src=${pic}>
        <h3> My Name Is </h3>
        <h1>${user.name.title} ${user.name.first} ${user.name.last} </h1>
        <p> ${user.email} </p>
        <p> ${user.phone} </p>
        `
    }
}