export default function formattingData(listData, nameRoute) {
    switch (nameRoute) {
        case "characters":
            listData = listData.map(i => i = `
                <div class="flex flex-col w-auto max-w-60 min-w-40">
                    <img src="" alt="" class="rounded-t-lg border-1">
                    <div class="rounded-b-lg  border-x-1 border-b-1 p-3">
                        <p class="font-semibold">${i.name}</p>
                        <p>${i.description}</p>
                    </div>
                </div>
                `); // Ver problema de espaçamento entre os cards
            break;

        case "artifacts":
            listData = listData.map(i => i = `${i}`);
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