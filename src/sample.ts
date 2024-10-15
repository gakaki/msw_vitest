import axios from 'axios'

export function fetchExample() {
    return fetch("https://example.com");
}


async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const url = "https://cost-optimization-platform-dev.cfapps.eu12.hana.ondemand.com/api/metrics/ddf03fcf-3a1b-4fa8-9dc9-8e1da35fafe5?hierarchyType=pc"
export const token = `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsZXguaGUwMUBzYXAuY29tIiwiaWQiOiIxMjI1NWQzZS01NGJiLTRhY2MtYWE4ZC0wZTM0Mzc5N2NkYWEiLCJmaXJzdE5hbWUiOiJBbGV4IiwibGFzdE5hbWUiOiJIZSIsImlhdCI6MTcyODg5NDYzMiwiZXhwIjoxNzI4OTM3ODMyLCJpc3MiOiJvcHRpbXVzIiwic3ViIjoiYWxleC5oZTAxQHNhcC5jb20iLCJqdGkiOiIyZTk5MDU3Yy0wOWZlLTRkOTEtYTJkYy04NmZiZGQ4NTc2NzgifQ.0gbWgkE_L9Fpgg_mRST0oZzxyQLQy_ZZ68lWOpaq3_c`

export async function getMetricsAzureAxios() {
    try {
        const config = {
            method: 'get',
            url: url,
            headers: {
                'authorization': token
            }
        };
        const resp = await axios(config)
        // console.log(resp.data)
        return resp.data
    } catch (e) {
        console.error(e)
    }
}
export async function getMetricsAzureFetch() {
    try {
        var myHeaders = new Headers();
        myHeaders.append("authorization", token);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders
        };
        let resp = await fetch(url, requestOptions)
        console.log(resp.status)
        const respJSON = await resp.json()
        return respJSON
    } catch (e) {
        console.log("error", e)
    }
}