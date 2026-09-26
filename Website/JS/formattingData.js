export default function formattingData(listData, nameRoute) {
    switch (nameRoute) {
        case "characters":
            listData = listData.map(i => i = `
                <div class="flex flex-col grow-2 max-w-[400px] min-w-40">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_7lzou2aWzuYGyVMJ1vvnnC4yBAeE2nZ2W9LHvXtuA&s=10" 
                        alt="Picture of ${i.name}" class="rounded-t-lg border-1 grow-1">
                    <div class="flex flex-col gap-2 rounded-b-lg  border-x-1 border-b-1 p-3 grow-2">
                        <p class="font-semibold text-[20px] text-center">${i.name}</p>
                        <p><strong>Character type:</strong> ${i.category}</p>

                        ${i.pantheon ? `<p><strong>Pantheon:</strong> ${i.pantheon}</p>` : ""}
                        ${i.birthday ? `<p><strong>Birthday:</strong> ${i.birthday}</p>` : ""}
                        ${i.parents ? `<p><strong>Parents:</strong> ${i.parents[0]} and ${i.parents[1]}</p>` : ""}
                        ${i.camp ? `<p><strong>Camp:</strong> ${i.camp}</p>` : ""}
                        ${i.cabin ? `<p><strong>Number cabin:</strong> ${i.cabin}</p>` : ""}
                        
                        <p class="text-justify">${i.description}</p>
                    </div>
                </div>
                `); 
            break;

        case "artifacts":
            listData = listData.map(i => i = `
                <div class="flex flex-col grow-2 max-w-[400px] min-w-40">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_7lzou2aWzuYGyVMJ1vvnnC4yBAeE2nZ2W9LHvXtuA&s=10" 
                        alt="Picture of ${i.name}" class="rounded-t-lg border-1 grow-1">
                    <div class="flex flex-col gap-2 rounded-b-lg  border-x-1 border-b-1 p-3 grow-2">
                        <p class="font-semibold text-[20px] text-center">${i.name}</p>
                        <p class="text-justify">${i.description}</p>
                        <p class="flex flex-wrap gap-2 w-auto">${(i.category.map(a => a = `<span class="w-auto border rounded-lg py-1 px-2">${a}</span>`)).join("")}</p>
                    </div>
                </div>
                
                `);
            break;

        case "cabins":
            listData = listData.map(i => i = `${i}`);
            break;

        case "places":
            listData = listData.map(i => i = `${i}`);
            break;

        case "books":
            listData = listData.map(i => i = `${i}`);
            break;
    };

    return listData;
};