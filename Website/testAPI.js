// Script to test of API Percy Jackson in Website
const formsAPI = {
    characters: `a`,
    artifacts: `b`,
    cabins: `c`,
    places: `d`, 
    books: `e`
};

function select_typeRoute(nameRoute){
    const list_typeRoutes = document.querySelectorAll(".list_typeRoutes");
    list_typeRoutes.forEach(element => {
        if(element.textContent.trim().toLowerCase() === nameRoute.trim().toLowerCase()){
            element.style.backgroundColor = "lightblue";
            document.getElementById("typeRoute").value = `${nameRoute.trim().toLowerCase()}`;
            document.getElementById("inputsForm").innerHTML = formsAPI[`${nameRoute.trim().toLowerCase()}`];

        } else{
            element.style.backgroundColor = "white";
        }
    });
};

document.querySelectorAll(".list_typeRoutes").forEach(element => {
    element.addEventListener('click', (event) => {
        select_typeRoute(event.target.textContent);
    });
});

async function GETApi(nameRoute, data={}) {
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
        return;
    };
};

window.addEventListener("DOMContentLoaded", () => {
    select_typeRoute("characters");
});