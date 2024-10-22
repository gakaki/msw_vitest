import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest'
import { http } from 'msw'
import { setupServer } from 'msw/node'
import { getVmPlatformId, isResourceIdLikeUrl } from './utils'

// 设置MSW服务器来模拟Azure API
const server = setupServer(
    http.get('https://management.azure.com/subscriptions/:subscriptionId/resourceGroups/:resourceGroupName/providers/Microsoft.Compute/virtualMachines/:vmName', (req, res, ctx) => {
        const { vmName } = req.params
        return res(
            ctx.json({
                properties: {
                    vmId: `platform-${vmName}` // 模拟返回的platformId
                }
            })
        )
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('isResourceIdLikeUrl', () => {

    it('should return true for valid Azure resource ID', () => {
        const validId = '/subscriptions/9aa896a8-b75b-4532-8ab3-ca516aa238ee/resourceGroups/HEC44-IEM-WESTEUROPE-1/providers/Microsoft.Compute/virtualMachines/hec44v065372'
        expect(isResourceIdLikeUrl(validId)).toBe(true)
    })

    it('should return false for invalid Azure resource ID', () => {
        const invalidId = 'not-a-valid-resource-id'
        expect(isResourceIdLikeUrl(invalidId)).toBe(false)
    })

    it('should return false for partially valid Azure resource ID', () => {
        const partiallyValidId = '/subscriptions/9aa896a8-b75b-4532-8ab3-ca516aa238ee/resourceGroups/HEC44-IEM-WESTEUROPE-1'
        expect(isResourceIdLikeUrl(partiallyValidId)).toBe(false)
    })
})

describe('getVmPlatformId', () => {
    it('should return the correct platform ID for a valid resource ID', async () => {
        const validId = '/subscriptions/9aa896a8-b75b-4532-8ab3-ca516aa238ee/resourceGroups/HEC44-IEM-WESTEUROPE-1/providers/Microsoft.Compute/virtualMachines/hec44v065372'
        const platformId = await getVmPlatformId(validId)
        expect(platformId).toBe('platform-hec44v065372')
    })

    // it('should throw an error for an invalid resource ID', async () => {
    //     const invalidId = 'not-a-valid-resource-id'
    //     await expect(getVmPlatformId(invalidId)).rejects.toThrow()
    // })

    // it('should handle API errors gracefully', async () => {
    //     server.use(
    //         http.get('https://management.azure.com/subscriptions/:subscriptionId/resourceGroups/:resourceGroupName/providers/Microsoft.Compute/virtualMachines/:vmName', (req, res, ctx) => {
    //             return res(ctx.status(500))
    //         })
    //     )

    //     const validId = '/subscriptions/9aa896a8-b75b-4532-8ab3-ca516aa238ee/resourceGroups/HEC44-IEM-WESTEUROPE-1/providers/Microsoft.Compute/virtualMachines/hec44v065372'
    //     await expect(getVmPlatformId(validId)).rejects.toThrow('Failed to fetch VM details')
    // })
})

