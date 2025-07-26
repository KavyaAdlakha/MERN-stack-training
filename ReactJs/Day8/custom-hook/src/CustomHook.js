import React from "react";

function useFetch(url) {
    const[data, setData] = React.useState(null);
    const[loading, setLoading] = React.useState(true);

    React.useEffect (() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
             setLoading(false);
        });
    },[url]);

    return{data, loading};
}

export default function CustomHook() {
    const {data, loading} = useFetch('https://jsonplaceholder.typicode.com/todos/1');

    return(
        <div style={{textAlign:'center', border:'1px solid black', margin:'10px', padding:'10px'}}>
            <h1>Data Fetch With CustomHook</h1>
            {loading ? <p>Loading...</p>: <p>Data: {JSON.stringify(data)}</p>}
        </div>
    )
}