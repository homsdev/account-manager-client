export type Account = {
    accountId: string,
    balance: number,
    alias: string
}

export type ApiGetAccountsResponse = {
    data: Account[],
    timestamp: string,
    _links: object
}

export type ApiPostAccountResponse = {
    data: Account,
    timestamp: string,
    _links: object
}