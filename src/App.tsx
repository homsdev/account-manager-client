import Home from "./general/Home";
import Header from "./navigation/Header";
import AccountsPage from "./accounts/AccountsPage.tsx";
import TransactionsPage from "./transactions/TransactionsPage.tsx";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <AccountsPage/>
            <TransactionsPage/>
        </>
    );
}

export default App;
