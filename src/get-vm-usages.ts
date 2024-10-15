// from lin han
const fs = require('fs');

let token;
const from = '2024-10-10T05:00:00.550Z';
const to = '2024-10-12T05:00:00.550Z';

export async function getToken() {
    const myHeaders = new Headers();
    myHeaders.append(
        'Authorization',
        'Basic c2ItY29wLXJpZ2h0c2l6aW5nLXN0YWdlIXQ3MDEyNTpTYVhpM3FBcnRCWENHRUZIVjcrY0paZmFLMXM9'
    );
    myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)');
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const fetchResult = await (
        await fetch(
            'https://cost-optimization.authentication.eu12.hana.ondemand.com/oauth/token?grant_type=client_credentials',
            requestOptions
        )
    ).json();
    token = fetchResult.access_token;
}

export async function saveVmUsage(hypescalar, from, to) {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)');

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const url =
        'https://cop-cost-optimization-stage-cost-optimization-engine-srv.cfapps.eu12.hana.ondemand.com/rightsizing/';
    const firstQuery = `VMUSAGE?$expand=recommendations,vm&$filter=recommendations/any(r:r/created_at ge ${from} and r/created_at le ${to} and r/action eq 'ScaleDown')${hypescalar ? ` and vm/platform eq '${hypescalar}'` : ''
        }`;

    let fetchResult = null;
    const allResult = [];
    do {
        console.log(`${hypescalar || 'all'} fetching - ${fetchResult?.['@odata.nextLink'] || firstQuery}`);
        fetchResult = await (
            await fetch(`${url}${fetchResult?.['@odata.nextLink'] || firstQuery}`, requestOptions)
        ).json();
        allResult.push(...fetchResult.value);
    } while (fetchResult['@odata.nextLink']);

    console.log(`${hypescalar || 'all'} data length: ${allResult.length}`);
    const currFileName = `./vm_${hypescalar || 'all'}_${Date.now()}.json`;
    await fs.promises.writeFile(currFileName, JSON.stringify(allResult, null, 4));
    console.log(`Saved to ${currFileName}`);
}

export const saveVmUsageByHypescalar = (hypescalar) => {
    return saveVmUsage(hypescalar, from, to);
};

export async function saveVmUsages() {
    try {
        await getToken();

        await saveVmUsageByHypescalar('GCP');
        await saveVmUsageByHypescalar('AZURE');
        // await saveVmUsageByHypescalar('AWS');
        // await saveVmUsageByHypescalar();
    } catch (e) {
        console.error(e)
    }
}

function promseSaveVmUsage() {
    Promise.resolve()
        .then(async () => {
            await getToken();

            await saveVmUsageByHypescalar('GCP');
            await saveVmUsageByHypescalar('AZURE');
            // await saveVmUsageByHypescalar('AWS');
            // await saveVmUsageByHypescalar();
        })
        .catch((error) => console.log('error', error));
}
