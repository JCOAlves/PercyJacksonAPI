const formsAPI = {
    characters: `
        <input type="number" placeholder="Cabin number" class="min-w-35"
            name="cabin" id="cabin" min="1" max="20" step="1">
        <select name="camp" id="camp" value="">
            <option value="">Select the camp</option>
            <option value="Camp Half-Blood">Camp Half-Blood</option>
            <option value="Camp Jupiter">Camp Jupiter</option>
        </select>
        <select name="pantheon" id="pantheon" value="">
            <option value="">Select the pantheon</option>
            <option value="Greek">Greek</option>
            <option value="Roman">Roman</option>
        </select>
        <select name="category" id="category" value="">
            <option value="">Select the character category</option>
            <option value="Demigod">Demigod</option>
            <option value="Divinity">Divinity</option>
            <option value="Titan">Titan</option>
            <option value="Giant">Giant</option>
            <option value="Creature">Creature</option>
            <option value="Monster">Monster</option>
            <option value="Mortal">Mortal</option>
        </select>`,
    
    artifacts: `
        <select name="" id="" value="">
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
        <input type="text" name="name" id="name" placeholder="Artifact name" maxlength="100" value="">
        <input type="text" name="description" id="description" class="min-w-65"
            placeholder="Search by the artifact description" maxlength="100" value="">`,
    
    cabins: `<input type="number" placeholder="Cabin number" class="min-w-35"
        name="cabinNumber" id="cabinNumber" min="1" max="20" step="1" value="">`,
    
    places: `
        <input type="text" name="location" id="location" placeholder="Place name" maxlength="100" value="">
        <input type="text" name="description" id="description" class="min-w-65"
            placeholder="Search by the place description" maxlength="100" value="">`,
    
    books: `
    <select name="saga" id="saga" value="">
        <option value="">Select the serie books</option>
        <option value="Percy Jackson & the Olympians">Percy Jackson & the Olympians</option>
        <option value="The Heroes of Olympus">The Heroes of Olympus</option>
        <option value="The Trials of Apollo">The Trials of Apollo</option>
    </select>`
};

export default function select_typeRoute(nameRoute) {
    const list_typeRoutes = document.querySelectorAll(".list_typeRoutes");
    list_typeRoutes.forEach(element => {
        if (element.textContent.trim().toLowerCase() === nameRoute.trim().toLowerCase()) {
            element.style.backgroundColor = "lightblue";
            document.getElementById("typeRoute").value = `${nameRoute.trim().toLowerCase()}`;
            document.getElementById("inputsForm").innerHTML = formsAPI[`${nameRoute.trim().toLowerCase()}`];
            localStorage.setItem("nameRoute", nameRoute.trim().toLowerCase());

        } else {
            element.style.backgroundColor = "white";
        }
    });
};

