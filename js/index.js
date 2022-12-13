//Get Request 
// `${e.target.value}` return 

const form = document.getElementsByTagName('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch(`https://api.github.com/search/users?q=${e.target[0].value}`)
    .then(r => r.json())
    .then(results => {
        results.items.map(item => {
            const h2 = document.createElement('h2')
            h2.textContent = item.login
            const img = document.createElement('img')
            img.src = img.avatar_url
            const a = document.createElement('a')
            a.href = item.url
            a.innerText = "Profile"

            const userList = document.querySelector('#github-container')
            li.append(h2, img, a)
            userList.append(li)
        })
    })
})