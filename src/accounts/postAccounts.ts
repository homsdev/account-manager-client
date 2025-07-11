import type {Account, ApiGetAccountsResponse, ApiPostAccountResponse} from "./types.ts";
import {assertIsApiResponse} from "./getAccounts.ts";

export async function postAccount(
    account: Account
) {
    const baseEndpoint = "http://localhost:8080";
    const url = "api/accounts"
    const response = await fetch(`${baseEndpoint}/${url}`, {
        method: "POST",
        body: JSON.stringify({
            "accountBalance": account.balance,
            "accountAlias": account.alias,
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });

    const body = (await response.json()) as unknown;
    assertIsApiPostAccountResponse(body);

    return body;
}

function assertIsApiPostAccountResponse(
    response: unknown
): asserts response is ApiPostAccountResponse {
    const {data} = response;

    if (!data) {
        throw new Error("Unexpected response");
    }
}