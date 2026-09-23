import select_typeRoute from "./selectRoutes.js";
import RequestingData from "./requestAPI.js";

document.querySelectorAll(".list_typeRoutes").forEach(element => {
    element.addEventListener('click', (event) => {
        select_typeRoute(event.target.textContent);
    });
});

document.querySelector("form").addEventListener("submit", RequestingData);

window.addEventListener("DOMContentLoaded", () => {
    select_typeRoute("characters");
});