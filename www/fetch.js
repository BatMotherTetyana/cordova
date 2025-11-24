document.getElementById("fetch-joke").addEventListener("click", fetchJoke);

async function fetchJoke() {
    try {
        // Получаем данные из API
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        
        // Проверка успешного запроса
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        // Парсим JSON
        const jokeData = await response.json();

        // Вставляем шутку на страницу
        document.getElementById("joke-setup").textContent = jokeData.setup;
        document.getElementById("joke-punchline").textContent = jokeData.punchline;
    } catch (error) {
        console.error("Error fetching joke:", error);
        document.getElementById("joke-setup").textContent = "Oops! Failed to fetch a joke.";
        document.getElementById("joke-punchline").textContent = "";
    }
}
