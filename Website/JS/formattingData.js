export default function formattingData(listData, nameRoute) {
    switch (nameRoute) {
        case "characters":
            listData.map(i => `${i.name}`);
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

    return listData;
};