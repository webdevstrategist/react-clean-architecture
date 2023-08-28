export type LocalPaymentMethod = {
    provider: string,
    label:string,
    isDefaultMethod: boolean
}

export type RemotePaymentMethod = {
    name: string
}