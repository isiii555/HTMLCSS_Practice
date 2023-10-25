// Octokit.js
// https://github.com/octokit/core.js#readme

let input = document.getElementById("search");

let request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
}
else {
    request = new ActiveXObject('Microsoft.XMLHTTP');
}


input.oninput = () => {
    let url = `https://api.github.com/users/${input.value}`;
    request.open("GET",url);
    request.responseType = 'json';
    request.onreadystatechange = () => {
        console.log(`${request.readyState} ${request.status}`)
        if (request.readyState === 4 && request.status === 200){
            console.log(request.response)
            let profile = request.response;
            document.getElementById("name").innerText = `${profile["name"]}`;
            document.getElementById("login").innerText = `${profile["login"]}`;
            document.getElementById("profile-picture").src = `${profile["avatar_url"]}`;
            document.getElementById("url").innerText = `${profile["html_url"]}`;
            document.getElementById("blog").innerText  = `${profile["blog"]}`;
            document.getElementById("city").innerText  = `${profile["location"]}`;
            document.getElementById("email").innerText  = `${profile["email"]}`;
            document.getElementById("followers").innerText  = `${profile["followers_url"]}`;
            document.getElementById("following").innerText  = `${profile["following_url"]}`;
        }
    }
    request.send();

}

