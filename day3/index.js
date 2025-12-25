async function getData() {
  try {
    const response = await fetch(
      "https://v1.appbackend.io/v1/rows/wDcrEXtePdGv"
    );
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.log("error ketika melakukan Fetching");
    return [];
  }
}

async function main() {
  const todos = await getData(); // [{}, {}. {}]
  const todosContainer = document.getElementById("todos");

  todos.data.forEach((todo) => {
    const titleElement = document.createElement("h2");
    const contentElement = document.createElement("p");

    titleElement.textContent = todo.list;
    contentElement.textContent = todo.detail;

    todosContainer.appendChild(titleElement);
    todosContainer.appendChild(contentElement);
  });
}

main();
