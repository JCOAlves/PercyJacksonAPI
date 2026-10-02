function check_formData(form) {
    let dataQuery = {};
    
    switch (form.get('typeRoute')) {
        case "characters":
            form.get('camp') ? dataQuery.camp = form.get('camp').toLowerCase().trim() : null;
            Number(form.get('cabin')) && Number(form.get('cabin')) > 0 && Number(form.get('cabin')) < 21 ? 
                dataQuery.cabin = Number(form.get('cabin')) : null;
            form.get('pantheon') ? dataQuery.pantheon = form.get('pantheon').toLowerCase().trim() : null;
            form.get('category') ? dataQuery.category = form.get('category').toLowerCase().trim() : null;
            break;

        case "artifacts":
            form.get('category') ? dataQuery.category = form.get('category').toLowerCase().trim() : null;
            form.get('name') ? dataQuery.name = form.get('name').toLowerCase().trim() : null;
            form.get('description') ? dataQuery.description = form.get('description').toLowerCase().trim() : null;
            break;
            
        case "cabins":
            Number(form.get('cabinNumber')) && Number(form.get('cabinNumber')) > 0 && Number(form.get('cabinNumber')) < 21 ? 
                dataQuery.cabinNumber = Number(form.get('cabinNumber')) : null;
            break;

        case "places":
            form.get('description') ? dataQuery.description = form.get('description').toLowerCase().trim() : null;
            form.get('location') ? dataQuery.location = form.get('location').toLowerCase().trim() : null;
            break;

        case "sagas/books":
            form.get('saga') ? dataQuery.saga = form.get('saga').toLowerCase().trim() : null;
            break;
    };
    
    return dataQuery;
};

export default check_formData;