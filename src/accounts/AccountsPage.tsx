import AddIcon from "@mui/icons-material/Add";
import {Box, Button, Container, Typography} from "@mui/material";
import {AccountInfoCard} from "./AccountInfoCard.tsx";

const accounts = [
    {
        name: "Main Checking",
        balance: 8450.00
    },
    {
        name: "Savings Account",
        balance: 15200.00
    },
    {
        name: "Credit Card",
        balance: 2200.00
    }
]

export default function AccountsPage() {
    return (
        <Container
            sx={{
                mt: 4,
            }}
        >
            <Box sx={{
                borderRadius: 2,
                borderColor: "lightgray",
                borderWidth: "1px",
                borderStyle: "solid",
            }}>
                <Box sx={{display: "flex", justifyContent: "space-between", my: 4, mx: 3}}>
                    <Typography variant="h4" fontWeight="bold">Accounts Overview</Typography>
                    <Button variant="contained" startIcon={<AddIcon/>} color="primary">
                        Add Account
                    </Button>
                </Box>
                <Box sx={{display: "flex", mb: 4}}>
                    {accounts.map((account) => (
                        <Box sx={{flex: 1, mx: 2}}>
                            <AccountInfoCard accountName={account.name} accountBalance={account.balance}/>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}
