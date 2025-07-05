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

    return (
        <>
            <Header/>
            <Home/>
            <AccountsSection accounts={accounts}/>
            <TransactionsSection/>
        </>
    );
}

export default App;
