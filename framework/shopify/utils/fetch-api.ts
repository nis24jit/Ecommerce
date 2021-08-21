import {ApiFetcherOptions, ApiFetcherResults} from "@common/types/api";

type FetcherParams = {
    query: string;
};


const fetchApi = async <T>({url,query}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({query}),
    });
    debugger;
    const {data, errors} = await response.json();
    if (errors) {
        throw new Error(errors[0].message ?? errors.message);
    }
    return {data};
};

export default fetchApi;
