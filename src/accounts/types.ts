export type Account = {
    accountId: string,
    balance: number,
    alias: string
}

export type ApiResponse = {
    data: Account[],
    timestamp: string,
    _links: object
}