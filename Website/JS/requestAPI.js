import formattingData from "./formattingData.js";

async function GetData(nameRoute, data = {}) {
    try {
        let param = [];
        Object.entries(data).forEach(([key, value]) => {
            param.push(`${key}=${encodeURIComponent(value)}`);
        });
        const filters = param.length > 0 ? `?${param.join("&")}` : "";

        let Response = await fetch(`http://localhost:3000/api/${nameRoute}${filters}`);
        let Data = await Response.json();
        return Data;

    } catch (error) {
        console.error("Error in requesting data from the server: ", error.message || error);
        return { success: false, message: "Error in requesting data from the server" };
    };
};

export default async function RequestingData(event) {
    try {
        event.preventDefault();
        document.getElementById("resultAPI").innerHTML = `<div class="flex flex-col justify-center items-center p-6">
            <div class="h-25 w-25 border-6 border-gray-300 border-t-blue-300 rounded-full animate-spin"></div>
            <span class="text-center text-gray-600 text-lg italic pt-1 animate-pulse">Loading...</span>
        </div>`;

        const nameRoute = document.getElementById("typeRoute").value;
        const ResponseServer = await GetData(nameRoute);
        if (ResponseServer.success) {
            let listData = ResponseServer.data;
            console.log(listData);
            listData = formattingData(listData, nameRoute);
            console.log(listData);
            document.getElementById("resultAPI").innerHTML = listData.join("");

        } else {
            document.getElementById("resultAPI").innerHTML = `<div class="text-center text-lg font-semibold">${ResponseServer.message}</div>`
        };
        return;

    } catch (error) {
        document.getElementById("resultAPI").innerHTML = `<div class="text-center text-lg font-semibold">Error in the formatting of data from the server in this page</div>`;
        console.error(`Error in the formatting of data from the server in this page: `, error.message || error);
        return;
    };
};