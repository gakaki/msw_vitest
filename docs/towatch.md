


你想开发语言虚拟机吗? -- 教程
https://rustcc.cn/article?id=d3d24b8c-f15b-4732-b2b0-15398f5ed147

How to preprocess Cypress tests with Vite
https://adamlynch.com/preprocess-cypress-tests-with-vite/
cypress vite
Supercharge your Cypress E2E tests using Vite
https://medium.com/@mammadataei/supercharge-your-cypress-e2e-tests-using-vite-9b2950b05f2
https://github.com/cypress-io/cypress-realworld-app/blob/develop/vite.config.ts
https://www.youtube.com/watch?v=Jrr9sfvk_vg
https://www.npmjs.com/package/@cypress/vite-dev-server
rust bundler
https://github.com/farm-fe/performance-compare
https://www.bilibili.com/video/BV1q1421b7YR/?spm_id_from=333.999.0.0&vd_source=c6697a063eaf5e2d3acbeb85caac9e07


rust web
https://rustcc.cn/article?id=b07433b4-a9c8-40a6-9ffa-36fa4a1ef2d0

https://www.youtube.com/@Cypressio/videos
React Testing Library vs Cypress Component Testing
https://www.youtube.com/watch?v=QdZuKKK7oD0

https://vitest-or-cypress-demo.netlify.app/
https://github.com/maoberlehner/talk-vitest-cypress

Markus Oberlehner: Vitest or Cypress? Why not both?! – vuejs.de Conf 2022
https://www.youtube.com/watch?v=vY9t6hNFhFc

cypress component testing
https://docs.cypress.io/guides/component-testing/overview


vitest browser mode
https://zenn.dev/apple_yagi/articles/b2b96af1fd355c 
并发一万次呢

https://mayashavin.com/articles/component-testing-browser-vitest

vietst happydom
https://blog.csdn.net/qq449245884/article/details/126240033




var axios = require('axios');

var config = {
   method: 'get',
   url: 'https://cop-cost-optimization-stage-cost-optimization-engine-srv.cfapps.eu12.hana.ondemand.com/rightsizing/VMUSAGE?$expand=vm($select=platform,platformId,providerResource)&$filter=recommendations/any() and vm/platform eq \'AZURE\'&$top=5&$select=id,vm_platformId',
   headers: { 
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vY29zdC1vcHRpbWl6YXRpb24uYXV0aGVudGljYXRpb24uZXUxMi5oYW5hLm9uZGVtYW5kLmNvbS90b2tlbl9rZXlzIiwia2lkIjoiZGVmYXVsdC1qd3Qta2V5LS0xNzM5NDQwNDYzIiwidHlwIjoiSldUIiwiamlkIjogIlVnbUR1KzJPSjUwQWx1KzczQisxWmtYcGNmMFlVZUJhVVF6T3BvaFUzSms9In0.eyJqdGkiOiJkNjI0ODI1MTU0YjM0NjE1OTcwYmQ4ZjRlN2FlZjQ1YyIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiIxNzgwMmEwNS0yNGIzLTQ1ODItOWU0Yi03NzcwYWRhY2I2ODciLCJ6ZG4iOiJjb3N0LW9wdGltaXphdGlvbiJ9LCJzdWIiOiJzYi1jb3AtcmlnaHRzaXppbmctc3RhZ2UhdDcwMTI1IiwiYXV0aG9yaXRpZXMiOlsidWFhLnJlc291cmNlIl0sInNjb3BlIjpbInVhYS5yZXNvdXJjZSJdLCJjbGllbnRfaWQiOiJzYi1jb3AtcmlnaHRzaXppbmctc3RhZ2UhdDcwMTI1IiwiY2lkIjoic2ItY29wLXJpZ2h0c2l6aW5nLXN0YWdlIXQ3MDEyNSIsImF6cCI6InNiLWNvcC1yaWdodHNpemluZy1zdGFnZSF0NzAxMjUiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6ImU0ZGY3ZGNjIiwiaWF0IjoxNzI5NTY2NzQwLCJleHAiOjE3Mjk2MDk5NDAsImlzcyI6Imh0dHBzOi8vY29zdC1vcHRpbWl6YXRpb24uYXV0aGVudGljYXRpb24uZXUxMi5oYW5hLm9uZGVtYW5kLmNvbS9vYXV0aC90b2tlbiIsInppZCI6IjdkYmEyM2I2LTlkZWQtNDgwZC05MTZmLTdjOTQxOGYxZThiNyIsImF1ZCI6WyJzYi1jb3AtcmlnaHRzaXppbmctc3RhZ2UhdDcwMTI1IiwidWFhIl19.lWhGdv4kbVKpl20pgf22KHvBQsgOFfqCJ7xyW7gGyjql_4bnon6Q1cPhnOBeDJ9ujvsoBtvrq6vRVCNig3z0uWZm7zKi8ChSBY51TorZuPArxlWKXtOI9MJgryeiUCgONJ7je1-7HDW_5652PpJAxbgaEXORP20XHUkH6o-rByfFhz3MPURWzrKOMuz4KkbqYKsKzsLXLlfSvPkbDK6VBMMLsZgWX5qdF_LTe4-yfG5rlMFrD-pSlqmaWmjc4U_SHH97B8P-zH5ncH1xF2INADrn63RxDn0do3ALmId1XE2pFkFB-ec2U2OVVVncBOMCY4wUEsvPB08q0jL1k_b_1g', 
      'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
   }
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error) {
   console.log(error);
});


https://rustcc.cn/article?id=d3d24b8c-f15b-4732-b2b0-15398f5ed147




{
    "@odata.context": "$metadata#VMUSAGE(id,vm_platformId,vm(platform,platformId,providerResource))",
    "value": [
        {
            "id": "00006038-db5b-4848-929a-c6ec1bcf79cc",
            "vm_platformId": "d880f02b-4667-46df-acdd-607edbcd5ed9",
            "vm": {
                "platform": "AZURE",
                "platformId": "d880f02b-4667-46df-acdd-607edbcd5ed9",
                "providerResource": "/subscriptions/36fce71e-1779-480d-8b4c-586b4f8a820f/resourceGroups/HEC45-FET-EASTUS2-1/providers/Microsoft.Compute/virtualMachines/hec45v159166"
            }
        },
        {
            "id": "00006497-9e3c-408f-b7a4-7c9db1c49bff",
            "vm_platformId": "b6d6145e-dbc4-4f61-910e-a0acda72d370",
            "vm": {
                "platform": "AZURE",
                "platformId": "b6d6145e-dbc4-4f61-910e-a0acda72d370",
                "providerResource": "/subscriptions/ad64e1f0-f6db-46d0-87b8-5b381f947cbc/resourceGroups/RG-S4-AZR0201-SFH-SFHVLAB/providers/Microsoft.Compute/virtualMachines/azr02v006985"
            }
        },
        {
            "id": "00007f64-f995-497b-b8ad-8db2a0b4f2f1",
            "vm_platformId": "278b341b-baf4-4fa4-bbef-34027306dd49",
            "vm": {
                "platform": "AZURE",
                "platformId": "278b341b-baf4-4fa4-bbef-34027306dd49",
                "providerResource": "/subscriptions/a68ae472-1849-4ed9-a700-24f5070acd2d/resourceGroups/SHOOT--HC-DEV--M538776-HAAS/providers/Microsoft.Compute/virtualMachines/shoot--hc-dev--m538776-haas-default-f1-z1-7cf8d-72flp"
            }
        },
        {
            "id": "0000919d-12c5-4624-9888-f20522caeb95",
            "vm_platformId": "7210ae8b-aa60-48e0-85c6-7d23324de58f",
            "vm": {
                "platform": "AZURE",
                "platformId": "7210ae8b-aa60-48e0-85c6-7d23324de58f",
                "providerResource": "/subscriptions/35c892a0-44f8-401c-8607-55a73b304f13/resourceGroups/SHOOT--UGW-PRD--ZRH20/providers/Microsoft.Compute/virtualMachines/shoot--ugw-prd--zrh20-gwproxy-z3-6f545-hh4s5"
            }
        },
        {
            "id": "00012459-7171-4624-9039-6699e895c08e",
            "vm_platformId": "079256e7-090d-49d9-84e9-a9aec00c66fe",
            "vm": {
                "platform": "AZURE",
                "platformId": "079256e7-090d-49d9-84e9-a9aec00c66fe",
                "providerResource": "/subscriptions/cb787a80-eaca-4af4-ada5-57d86c58d74a/resourceGroups/RG-S4-AZR0201-IBR-IBRPROD/providers/Microsoft.Compute/virtualMachines/azr02v005858"
            }
        }
    ]
}





