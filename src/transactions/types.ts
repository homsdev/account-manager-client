import type {Account, ApiGetAccountsResponse} from "../accounts/types.ts";

export type Transaction = {
    transactionId: string,
    alias: string,
    amount: number,
    type: string,
    date: string,
    account: Account,
}

export type TransactionApiResponse = {
    data: Transaction[],
    timestamp: string,
}