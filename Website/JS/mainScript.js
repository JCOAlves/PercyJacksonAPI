import select_typeRoute, { hiddenForm } from "./selectRoutes.js";
import RequestingData from "./requestAPI.js";

document.querySelectorAll(".list_typeRoutes").forEach(element => {
    element.addEventListener('click', async (event) => {
        select_typeRoute(event.target.closest('li').dataset.route);
        await RequestingData(event);
    });
});

document.getElementById("buttonFilters").addEventListener("click", hiddenForm);

document.querySelector("form").addEventListener("submit", RequestingData);

window.addEventListener("DOMContentLoaded", async (event) => {
    const nameRoute = localStorage.getItem("nameRoute");
    nameRoute ? select_typeRoute(nameRoute) : select_typeRoute("characters");
    await RequestingData(event);
});