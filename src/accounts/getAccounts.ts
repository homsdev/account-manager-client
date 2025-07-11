import type {ApiGetAccountsResponse} from "./types.ts";

export async function getAccounts() {
    const baseURL = "http://localhost:8080";
    const response = await fetch(baseURL + '/api/accounts');

    const body = (await response.json()) as unknown;

    assertIsApiResponse(body);

    return body;
}

export function assertIsApiResponse(
    response: unknown
): asserts response is ApiGetAccountsResponse {

    const {data} = response;

    if (!data) {
        return;
    }

    if (Array.isArray(data)) {
        data.forEach((account) => {
            validateAccountInformation(account);
        })
    }
}

function validateAccountInformation(account) {
    if (!("accountId") in account) {
        throw new Error("Missing account information");
    }
    if (!("balance") in account) {
        throw new Error("Missing balance information");
    }
    if (!("alias") in account) {
        throw new Error("Missing alias in account");
    }
}