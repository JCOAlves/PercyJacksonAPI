// Script to test of API Percy Jackson in Website
const formsAPI = {
    characters: ``,
    artifacts: ``,
    cabins: ``,
    places: ``,
    books: ``
};

function select_typeRoute(nameRoute) {
    const list_typeRoutes = document.querySelectorAll(".list_typeRoutes");
    list_typeRoutes.forEach(element => {
        if (element.textContent.trim().toLowerCase() === nameRoute.trim().toLowerCase()) {
            element.style.backgroundColor = "lightblue";
            document.getElementById("typeRoute").value = `${nameRoute.trim().toLowerCase()}`;
            document.getElementById("inputsForm").innerHTML = formsAPI[`${nameRoute.trim().toLowerCase()}`];

        } else {
            element.style.backgroundColor = "white";
        }
    });
};

document.querySelectorAll(".list_typeRoutes").forEach(element => {
    element.addEventListener('click', (event) => {
        select_typeRoute(event.target.textContent);
    });
});

async function GetData(nameRoute, data = {}) {
    try {
        let param = [];
        Object.entries(data).forEach(([key, value]) => {
            param.push(`${key}=${encodeURIComponent(value)}`);
        });
        const filters = param.length > 0 ? `?${param.join("&")}` : "";

        let Response = await fetch(`${nameRoute}${filters}`);
        let Data = await Response.json();
        return Data;

    } catch (error) {
        console.error("Error in requesting data from the server: ", error.message || error);
        return { success: false, message: "Error in requesting data from the server" };
    };
};

async function RequestingData(event) {
    try {
        event.preventDefault();
        document.getElementById("resultAPI").innerHTML = `<div class="flex flex-col justify-center items-center p-6">
            <div class="h-25 w-25 border-6 border-gray-300 border-t-blue-300 rounded-full animate-spin"></div>
            <span class="text-center text-gray-600 text-lg italic pt-1 animate-pulse">Loading...</span>
        </div>`;

        const nameRoute = document.getElementById("typeRoute").value;
        const ResponseServer = await GetData(nameRoute);
        if (ResponseServer.success) {
            let listData = ResponseServer.data;
            switch (nameRoute) {
                case "characters":
                    listData.map(i => `${i}`);
                    break;

                case "artifacts":
                    listData.map(i => `${i}`);
                    break;

                case "cabins":
                    listData.map(i => `${i}`);
                    break;

                case "places":
                    listData.map(i => `${i}`);
                    break;

                case "books":
                    listData.map(i => `${i}`);
                    break;
            };
            document.getElementById("resultAPI").innerHTML = listData.join("");

        } else {
            document.getElementById("resultAPI").innerHTML = `<div class="text-center text-lg font-semibold">${ResponseServer.message}</div>`
        };
        return;

    } catch (error) {
        document.getElementById("resultAPI").innerHTML = `<div class="text-center text-lg font-semibold">Error in the formatting of data from the server in this page</div>`;
        console.error(`Error in the formatting of data from the server in this page: `, error.message || error);
        return;
    };
};

document.querySelector("form").addEventListener("submit", RequestingData);

window.addEventListener("DOMContentLoaded", () => {
    select_typeRoute("characters");
});