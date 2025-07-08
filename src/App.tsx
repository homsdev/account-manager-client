import {useEffect, useState} from "react";
import Home from "./general/Home";
import Header from "./navigation/Header";
import AccountsSection from "./accounts/AccountsSection.tsx";
import TransactionsSection from "./transactions/TransactionsSection.tsx";
import type {Account} from "./accounts/types.ts";
import {getAccounts} from "./accounts/getAccounts.ts";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [selectedAccount, setSelectedAccount] = useState<Account>();

    useEffect(() => {
        let cancel = false;

        getAccounts().then(res => {
            if (!cancel) {
                setAccounts(res.data)
                setIsLoading(false);
            }
        });

        return () => {
            cancel = true;
        }
    }, []);

    useEffect(() => {

        if (selectedAccount) {
            fetch(`http://localhost:8080/api/accounts/${selectedAccount?.accountId}/transactions`)
                .then(res => {
                    console.log("transactions retrieved with status:", res.status);
                    res.json().then(data=>console.log(data))
                });
        }

    }, [selectedAccount]);

    const handleOnChangeAccount = (account: Account) => {
        console.log("Account changed:", account);
        setSelectedAccount(account);
    };

    return (
        <>
            <Header/>
            <Home/>
            <AccountsSection accounts={accounts} onChangeAccount={handleOnChangeAccount}/>
            <TransactionsSection/>
        </>
    );
}

export default App;
