import { ADDRESS_FORM_API_BASE_URL, ADDRESS_FORM_API_KEY, fetchFieldByString } from "./talent-form-data-fetching";
export const PROJECT_FORM_ID = "4fdd9a3d-2e3a-4ddb-9032-289970c1e8fb";

export const fetchProjectDataFromAPI = async () => {
    const apiResponse = await fetch(
        `${ADDRESS_FORM_API_BASE_URL}api_key=${ADDRESS_FORM_API_KEY}&form_id=${PROJECT_FORM_ID}`
    );
  
    const rawProjectData = await apiResponse.json();

    console.log(rawProjectData);
  
    return postProcessAPIResponse(rawProjectData) as Array<any>;
};

const postProcessAPIResponse = (data) => {
    return data.responses.map((r) => {
        const responseData = r.response_data;
        return {
            title: fetchFieldByString(responseData, "title"),
            url: "https://" + fetchFieldByString(responseData, "link")
            .replace("http://","")
            .replace("https://", ""),
            image: fetchFieldByString(responseData, "thumbnail"),
            categories: fetchFieldByString(responseData, "categories")
        }
    });
};