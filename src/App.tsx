import {useEffect, useState} from "react";
import Home from "./general/Home";
import Header from "./navigation/Header";
import AccountsSection from "./accounts/AccountsSection.tsx";
import TransactionsSection from "./transactions/TransactionsSection.tsx";
import type {Account} from "./accounts/types.ts";
import {getAccounts} from "./accounts/getAccounts.ts";
import {getTransactions} from "./transactions/getTransactions.ts";
import {postAccount} from "./accounts/postAccounts.ts";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [transactions, setTransactions] = useState([]);
    const [selectedAccount, setSelectedAccount] = useState<Account>();
    const [createdAccount, setCreatedAccount] = useState<Account>();

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
            getTransactions(selectedAccount, "JUNE", 2025)
                .then(res => {
                    console.info("Retrieved transactions");
                    setTransactions(res.data)
                    console.table(res.data);
                })
        }

    }, [selectedAccount]);

    useEffect(() => {
        getAccounts()
            .then(res => {
                setAccounts(res.data);
            })
    }, [createdAccount]);

    const handleOnChangeAccount = (account: Account) => {
        console.log("Account changed:", account);
        setSelectedAccount(account);
    };

    const handleOnAddAccount = (account: Account) => {
        console.log("App tsx Received account:", account);
        postAccount(account)
            .then(res => {
                console.log("Setting created account:");
                setCreatedAccount(res.data);
                console.log("Proceding to reset form");
            });
    }

    return (
        <>
            <Header/>
            <Home/>
            <AccountsSection accounts={accounts} onChangeAccount={handleOnChangeAccount}
                             onAddAccount={handleOnAddAccount}/>
            <TransactionsSection/>
        </>
    );
}

export default App;
