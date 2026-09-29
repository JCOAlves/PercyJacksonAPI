export default function formattingData(listData, nameRoute) {
    switch (nameRoute) {
        case "characters":
            listData = listData.map(i => i = `
                <div class="flex flex-col min-w-40">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_7lzou2aWzuYGyVMJ1vvnnC4yBAeE2nZ2W9LHvXtuA&s=10" 
                        alt="Picture of ${i.name}" class="rounded-t-lg border-1 ">
                    <div class="flex flex-col gap-2 rounded-b-lg  border-x-1 border-b-1 p-3 ">
                        <p class="font-semibold text-[20px] text-center">${i.name}</p>
                        <p><strong>Character type:</strong> ${i.category}</p>

                        ${i.pantheon ? `<p><strong>Pantheon:</strong> ${i.pantheon}</p>` : ""}
                        ${i.birthday ? `<p><strong>Birthday:</strong> ${i.birthday}</p>` : ""}
                        ${i.parents ? `<p><strong>Parents:</strong> ${i.parents[0]} and ${i.parents[1]}</p>` : ""}
                        ${i.camp ? `<p><strong>Camp:</strong> ${i.camp}</p>` : ""}
                        ${i.cabin ? `<p><strong>Number cabin:</strong> ${i.cabin}</p>` : ""}
                        
                        <p class="text-justify">${i.description}</p>
                    </div>
                </div>`);
            break;

        case "artifacts":
            listData = listData.map(i => i = `
                <div class="flex flex-col min-w-40">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_7lzou2aWzuYGyVMJ1vvnnC4yBAeE2nZ2W9LHvXtuA&s=10" 
                        alt="Picture of ${i.name}" class="rounded-t-lg border-1 ">
                    <div class="flex flex-col gap-2 rounded-b-lg  border-x-1 border-b-1 p-3 ">
                        <p class="font-semibold text-[20px] text-center">${i.name}</p>
                        <p class="text-justify">${i.description}</p>
                        <p class="flex flex-wrap gap-2 w-auto">${(i.category.map(a => a = `<span class="w-auto border rounded-lg py-1 px-2">${a}</span>`)).join("")}</p>
                    </div>
                </div>`);
            break;

        case "cabins":
            listData = listData.map(i => i = `
                <div class="flex flex-col min-w-40">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_7lzou2aWzuYGyVMJ1vvnnC4yBAeE2nZ2W9LHvXtuA&s=10" 
                        alt="Picture of cabin ${i.cabinNumber}" class="rounded-t-lg border-1 ">
                    <div class="flex flex-col gap-2 rounded-b-lg  border-x-1 border-b-1 p-3 ">
                        <p class="font-semibold text-[20px] text-center">Cabin ${i.cabinNumber}</p>
                        <p><strong>Divinity:</strong> ${i.divinity}</p>
                        <p class="text-justify">${i.description}</p>
                    </div>
                </div>`);
            break;

        case "places":
            listData = listData.map(i => i = `
                <div class="flex flex-col min-w-40">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_7lzou2aWzuYGyVMJ1vvnnC4yBAeE2nZ2W9LHvXtuA&s=10" 
                        alt="Picture of ${i.name}" class="rounded-t-lg border-1 ">
                    <div class="flex flex-col gap-2 rounded-b-lg  border-x-1 border-b-1 p-3 ">
                        <p class="font-semibold text-[20px] text-center">${i.name}</p>
                        <p><strong>Location:</strong> ${i.location}</p>
                        <p class="text-justify">${i.description}</p>
                    </div>
                </div>`);
            break;

        case "books":
            listData = listData.map(i => i = `
                <div class="flex flex-col min-w-40">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_7lzou2aWzuYGyVMJ1vvnnC4yBAeE2nZ2W9LHvXtuA&s=10" 
                        alt="Picture of ${i.title}" class="rounded-t-lg border-1 ">
                    <div class="flex flex-col gap-2 rounded-b-lg  border-x-1 border-b-1 p-3 ">
                        <p class="font-semibold text-[20px] text-center">${i.title}</p>
                        <p><strong>Author:</strong> ${i.author}</p>
                        <p><strong>Saga:</strong> ${i.saga.name}</p>
                        <p><strong>Publication Date:</strong> ${i.publicationDate}</p>
                        <p><strong>Page Number:</strong> ${i.pagesNumber}</p>
                        <p class="text-justify">${i.synopsis}</p>
                    </div>
                </div>`);
            break;
    };

    return listData;
};