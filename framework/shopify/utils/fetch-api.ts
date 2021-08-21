type FetcherParams = {
    query: string;
};

type FetcherResult<T> = {
    data: T
}

const fetchApi = async <T>({query}: FetcherParams): Promise<FetcherResult<T>> => {
    const url = "http://localhost:4000/graphql"; // graph ql endpoint
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
