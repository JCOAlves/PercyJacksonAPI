const formsAPI = {
    characters: `
        <input type="number" placeholder="Cabin number" title="Cabin number" class="grow-2  min-w-60 "
            name="cabin" id="cabin" min="1" max="20" step="1">
        <select name="camp" id="camp" title="Select the camp" class="grow-2 ">
            <option value="">Select the camp</option>
            <option value="Camp Half-Blood">Camp Half-Blood</option>
            <option value="Camp Jupiter">Camp Jupiter</option>
        </select>
        <select name="pantheon" id="pantheon" title="Select the pantheon" class="grow-2 ">
            <option value="">Select the pantheon</option>
            <option value="Greek">Greek</option>
            <option value="Roman">Roman</option>
        </select>
        <select name="category" id="category" title="Select the character category" class="grow-2 ">
            <option value="">Select the character category</option>
            <option value="Demigod">Demigod</option>
            <option value="Divinity">Divinity</option>
            <option value="Titan">Titan</option>
            <option value="Giant">Giant</option>
            <option value="Creature">Creature</option>
            <option value="Monster">Monster</option>
            <option value="Mortal">Mortal</option>
        </select>
        <div class="flex justify-start grow-2 gap-2">
            <button type="reset" class="bg-red-500 text-white hover:font-semibold"
                title="Reset form">Reset</button>
            <button type="submit" class="bg-green-500 text-white hover:font-semibold"
                title="Filter data">Filter</button>
        </div>`,
    
    artifacts: `
        <select name="category" id="category" title="Select the artifact category" class="grow-2">
            <option value="">Select the artifact category</option>
            <option value="weapon">Weapon</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
            <option value="protection">Protection</option>
            <option value="curing">Curing</option>
            <option value="futility">Futility</option>
            <option value="attack">Attack</option>
            <option value="defense">Defense</option>
        </select>
        <input type="search" name="name" id="name" title="Artifact name" placeholder="Artifact name" 
            maxlength="100" class="grow-2 ">
        <input type="search" name="description" id="description" title="Search by the artifact description" class="grow-2 min-w-40 "
            placeholder="Search by the artifact description" maxlength="100">
        <div class="flex justify-start grow-2 gap-2">
            <button type="reset" class="bg-red-500 text-white hover:font-semibold"
                title="Reset form">Reset</button>
            <button type="submit" class="bg-green-500 text-white hover:font-semibold"
                title="Filter data">Filter</button>
        </div>`,
    
    cabins: `<input type="number" placeholder="Cabin number" title="Cabin number" class="grow-2  min-w-40 md:max-w-80 w-full"
        name="cabinNumber" id="cabinNumber" min="1" max="20" step="1">
        <div class="flex justify-start grow-2 gap-2">
            <button type="reset" class="bg-red-500 text-white hover:font-semibold"
                title="Reset form">Reset</button>
            <button type="submit" class="bg-green-500 text-white hover:font-semibold"
                title="Filter data">Filter</button>
        </div>`,
    
    places: `
        <input type="search" name="location" id="location" title="Place name" 
            placeholder="Place name" maxlength="100" class="grow-2 min-w-40 md:max-w-90 w-full">
        <input type="search" name="description" id="description" title="Search by the place description" class="grow-2 min-w-40 md:max-w-90 w-full"
            placeholder="Search by the place description" maxlength="100">
        <div class="flex justify-start grow-2 gap-2">
            <button type="reset" class="bg-red-500 text-white hover:font-semibold"
                title="Reset form">Reset</button>
            <button type="submit" class="bg-green-500 text-white hover:font-semibold"
                title="Filter data">Filter</button>
        </div>`,

    books: `
        <select name="saga" id="saga" title="Select the serie books" class="grow-2 md:max-w-90 w-full">
            <option value="">Select the serie books</option>
            <option value="Percy Jackson & the Olympians">Percy Jackson & the Olympians</option>
            <option value="The Heroes of Olympus">The Heroes of Olympus</option>
            <option value="The Trials of Apollo">The Trials of Apollo</option>
        </select>
        <div class="flex justify-start grow-2 gap-2">
            <button type="reset" class="bg-red-500 text-white hover:font-semibold"
                title="Reset form">Reset</button>
            <button type="submit" class="bg-green-500 text-white hover:font-semibold"
                title="Filter data">Filter</button>
        </div>`
};

export default function select_typeRoute(nameRoute) {
    const list_typeRoutes = document.querySelectorAll(".list_typeRoutes");
    list_typeRoutes.forEach(element => {
        if (element.textContent.trim().toLowerCase() === nameRoute.trim().toLowerCase()) {
            element.style.backgroundColor = "#8cd5f0";
            document.getElementById("typeRoute").value = `${nameRoute.trim().toLowerCase()}`;
            document.getElementById("inputsForm").innerHTML = formsAPI[`${nameRoute.trim().toLowerCase()}`];
            localStorage.setItem("nameRoute", nameRoute.trim().toLowerCase());

        } else {
            element.style.backgroundColor = "#cfebf7";

        }
    });
};

