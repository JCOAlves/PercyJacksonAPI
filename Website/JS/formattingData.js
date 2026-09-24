export default function formattingData(listData, nameRoute) {
    switch (nameRoute) {
        case "characters":
            listData = listData.map(i => i = `${i.name}`);
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