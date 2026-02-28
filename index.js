
async function getRepos() {
    try {
        const res = await fetch("https://api.github.com/users/kykikimora/repos");
        const repos = await res.json();

        const main = document.querySelector("main");

        repos.forEach(repo => {
            const article = document.createElement("article");
            article.className = "container";
            article.innerHTML = `
                <h2><a href="${repo.html_url}">${repo.name}</a></h2>
                <p>${repo.description || "No description provided."}</p>
            `;
            main.appendChild(article);
        });

    } catch (error) {
        console.error(error);
    }
}

getRepos(); 






// fetch('https://api.github.com')
//   .then(response => response.json())
//   .then(data => console.log(data));

// This code sends a GET request to the GitHub API and logs the response data to the console.

// fetch('https://api.github.com/user', {
//   headers: {
//     'Authorization': 'token YOUR_PERSONAL_ACCESS_TOKEN'
//   }
// })

// this is how you authenticate

// fetch('https://api.github.com/users/octocat')
//   .then(response => response.json())
//   .then(data => console.log(data));

// this coge requests data from the octocat endpoint

// fetch('https://api.github.com/users/nonexistentuser')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .catch(error => console.error('There was a problem with your fetch operation:', error));

// this code handles errors for a failed API request
   