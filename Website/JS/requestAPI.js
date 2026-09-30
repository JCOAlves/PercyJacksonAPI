import formattingData from "./formattingData.js";
import check_formData from "./validateData.js";

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
        const Form = document.querySelector("form");
        const dataForm = check_formData(new FormData(Form));
        const ResponseServer = await GetData(nameRoute, dataForm);
        if (ResponseServer.success) {
            let listData = ResponseServer.data;
            listData = formattingData(listData, nameRoute);
            document.getElementById("resultAPI").innerHTML = `<div class="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 
                sm:grid-cols-2 gap-4 justify-center items-start w-full mx-auto">${listData.join("")}</div>`;

        } else {
            document.getElementById("resultAPI").innerHTML = `<div class="my-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" 
                        stroke-linecap="round" stroke-linejoin="round" class="mb-3 mx-auto w-45 h-45 lucide lucide-ghost preview-icon"><path d="M15 10v1"/>
                        <path d="M7.528 20.472a1.6 1.6 0 012.277 0l1.057 1.056a1.6 1.6 0 002.276 0l1.057-1.056a1.6 1.6 0 012.277 0l1.114 
                            1.114a1.4 1.4 0 002.414-1V10a8 8 0 00-16 0v10.586a1.4 1.4 0 002.414 1z"/>
                        <path d="M9 10v1"/>
                    </svg>
                    <p class="text-center text-lg font-semibold">${ResponseServer.message}</p>
                </div>`
        };
        return;

    } catch (error) {
        document.getElementById("resultAPI").innerHTML = `<div class="text-center text-lg font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="mb-3 mx-auto w-45 h-45 lucide lucide-shield-alert preview-icon">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 
                    4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                    <path d="M12 8v4"/><path d="M12 16h.01"/>
            </svg>
            <p class="text-center text-lg font-semibold">Error in the formatting of data from the server in this page</p>
        </div>`;
        console.error(`Error in the formatting of data from the server in this page: `, error.message || error);
        return;
    };
};