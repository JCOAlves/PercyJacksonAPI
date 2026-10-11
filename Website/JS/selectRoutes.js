import formsAPI from "./formsFilter.js";

export default function select_typeRoute(nameRoute) {
    const list_typeRoutes = document.querySelectorAll(".list_typeRoutes");
    list_typeRoutes.forEach(element => {
        if (element.dataset.route.trim().toLowerCase() === nameRoute.trim().toLowerCase()) {
            element.style.backgroundColor = "#8cd5f0";
            document.getElementById("typeRoute").value = `${nameRoute.trim().toLowerCase()}`;
            document.getElementById("inputsForm").innerHTML = `${formsAPI[`${nameRoute.trim().toLowerCase()}`]}
            <div class="flex justify-center sm:justify-start grow-2 gap-2">
                <button type="reset" class="text-center bg-red-500 text-white grow-1 hover:font-semibold 
                    py-2 px-4 rounded max-w-none md:max-w-30" title="Reset form" id="buttonReset">Reset filters</button>
                <button type="submit" class="text-center bg-green-500 text-white grow-1 hover:font-semibold 
                    py-2 px-4 rounded max-w-none md:max-w-30" title="Filter data" id="buttonSubmit">Filter</button>
            </div>`;
            localStorage.setItem("nameRoute", nameRoute.trim().toLowerCase());

        } else {
            element.style.backgroundColor = "#cfebf7";

        }
    });
};

export function hiddenForm() {
    if(document.getElementById("formFilters").className === "hidden"){
        document.getElementById("formFilters").className = `flex flex-col md:flex-row 
            flex-wrap gap-2 justify-start w-full`;
        document.getElementById("buttonFilters").className = "flex gap-1 bg-gray-300 py-1 px-2 rounded-xl";

    } else{
        document.getElementById("formFilters").className = "hidden";
        document.getElementById("buttonFilters").className = "flex gap-1 bg-gray-200 py-1 px-2 rounded-xl";
    };
};

