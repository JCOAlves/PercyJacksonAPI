const formsAPI = {
    characters: ``,
    artifacts: ``,
    cabins: ``,
    places: ``,
    books: ``
};

export default function select_typeRoute(nameRoute) {
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

