const formsAPI = {
    "characters": `
        <input type="number" placeholder="Text the cabin number" title="Cabin number" class="grow-2  min-w-60 "
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
            <option value="Greco-Roman">Greco-Roman</option>
        </select>
        <select name="category" id="category" title="Select the character category" class="grow-2 ">
            <option value="">Select the character category</option>
            <option value="Demigod">Demigod</option>
            <option value="Legacy">Legacy</option>
            <option value="Divinity">Divinity</option>
            <option value="Titan">Titan</option>
            <option value="Primordial">Primordial</option>
            <option value="Giant">Giant</option>
            <option value="Creature">Creature</option>
            <option value="Monster">Monster</option>
            <option value="Mortal">Mortal</option>
        </select>`,
    
    "artifacts": `
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
            <option value="magic">Magic</option>
            <option value="trophy">Trophy</option>
            <option value="strategy">Strategy</option>
            <option value="repair">Repair</option>
            <option value="tool">Tool</option>
            <option value="clairvoyance">Clairvoyance</option>
            <option value="psychic">Psychic</option>
            <option value="skill">Skill</option>
            <option value="statue">Statue</option>
            <option value="item">Item</option>
        </select>
        <input type="search" name="name" id="name" title="Name of artifact" 
            placeholder="Text the name of artifact" maxlength="100" class="grow-2 ">
        <input type="search" name="description" id="description" title="Search by the artifact description" 
            class="grow-2 min-w-40" placeholder="Search by the artifact description" maxlength="100">`,
    
    "cabins": `
        <input type="number" placeholder="Text the Cabin number" title="Cabin number" 
            class="grow-2 min-w-40 md:max-w-80 w-full" name="cabinNumber" id="cabinNumber" 
            min="1" max="20" step="1">`,
    
    "places": `
        <input type="search" name="location" id="location" title="Location of place" 
            placeholder="Search by the location of place" maxlength="100" class="grow-2 min-w-40 md:max-w-90 w-full">
        <input type="search" name="description" id="description" title="Search by the place description" class="grow-2 min-w-40 md:max-w-90 w-full"
            placeholder="Search by the place description" maxlength="100">`,

    "sagas/books": `
        <select name="saga" id="saga" title="Select the serie books" class="grow-2 md:max-w-90 w-full">
            <option value="">Select the serie books</option>
            <option value="Percy Jackson and the Olympians">Percy Jackson and the Olympians</option>
            <option value="The Heroes of Olympus">The Heroes of Olympus</option>
            <option value="The Trials of Apollo">The Trials of Apollo</option>
        </select>`
};

export default formsAPI;