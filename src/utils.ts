

export function isResourceIdLikeUrl(id: string): boolean {
    // 检查字符串是否符合Azure资源ID的基本模式
    // '/subscriptions/9aa896a8-b75b-4532-8ab3-ca516aa238ee/resourceGroups/HEC44-IEM-WESTEUROPE-1/providers/Microsoft.Compute/virtualMachines/hec44v065372'
    const pattern = /^\/subscriptions\/[\w-]+\/resourceGroups\/[\w-]+\/providers\/Microsoft\.Compute\/virtualMachines\/[\w-]+$/i;
    return pattern.test(id);
}
export async function getVmPlatformId(resourceId: string): Promise<string> {
    // 从资源ID中提取虚拟机名称
    const parts = resourceId.split('/');
    const vmName = parts[parts.length - 1];

    // 这里应该调用Azure API来获取虚拟机的详细信息
    // 为了示例,我们假设有一个函数可以做到这一点
    // const vmDetails = await getAzureVmDetails(resourceId);
    // return vmDetails.platformId;

    // 由于我们没有实际的Azure API调用,这里简单返回虚拟机名称作为platformId
    // 在实际实现中,您需要替换这部分代码以获取真实的platformId
    return vmName;
}