import select_typeRoute from "./selectRoutes.js";
import RequestingData from "./requestAPI.js";

document.querySelectorAll(".list_typeRoutes").forEach(element => {
    element.addEventListener('click', async (event) => {
        select_typeRoute(event.target.textContent);
        await RequestingData(event);
    });
});

document.querySelector("form").addEventListener("submit", RequestingData);

window.addEventListener("DOMContentLoaded", async (event) => {
    select_typeRoute("characters");
    await RequestingData(event);
});