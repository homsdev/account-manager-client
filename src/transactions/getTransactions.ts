import type {Account} from "../accounts/types.ts";
import type {TransactionApiResponse} from "./types.ts";

export async function getTransactions(account: Account, month?: string, year?: number) {
    const baseUrl = "http://localhost:8080";
    let params = ""
    if (month) {
        params += `?month=${month}&`
    }
    if (year) {
        params += `?year=${year}`
    }
    const response = await fetch(`${baseUrl}/api/accounts/${account.accountId}/transactions${params}`);
    const body = await response.json() as unknown;

    return body;
}


function assertIsTransactionApiResponse(
    response: unknown
): asserts response is TransactionApiResponse {
    const {data} = response;

    if (!data) {
        return;
    }

    if (!Array.isArray(data)) {
        throw new Error("Expected list of transactions");
    }

}