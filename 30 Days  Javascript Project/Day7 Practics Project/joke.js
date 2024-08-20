const btn = document.querySelector(".joke-button");
const container = document.querySelector(".joke-text");

const jokeapi = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,explicit";

const getjoke = () => {
    container.classList.remove("fade");
    fetch(jokeapi)
        .then(data => data.json())
        .then(item => {
            if (item.type === "single") {
                container.textContent = item.joke;
            } else if (item.type === "twopart") {
                container.textContent = `${item.setup} - ${item.delivery}`;
            }
            container.classList.add("fade");
        })
        .catch(error => {
            container.textContent = "Oops! Something went wrong. Please try again.";
        });
};


btn.addEventListener("click", getjoke);
getjoke();
