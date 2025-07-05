import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import {Box, Container, Typography} from "@mui/material";
import {TransactionCategoryExpense} from "./TransactionCategoryExpense.tsx";
import {TransactionForm} from "./TransactionForm.tsx";

export default function TransactionsPage() {
    return (
        <Container sx={{mt: 4, display: "flex", gap: 3}}>
            <Box sx={{
                flex: 2,
                borderRadius: 2,
                borderColor: "lightgray",
                borderWidth: "1px",
                borderStyle: "solid",
                display: "flex",
                flexDirection: "column"
            }}>
                <Box sx={{display: 'flex', alignItems: "center", my: 2}}>
                    <AnalyticsOutlinedIcon sx={{ml: 2}} fontSize="large"/>
                    <Typography variant="h5" fontWeight="bold" sx={{padding: 0}}>Expense Categories</Typography>
                </Box>
                <Box sx={{width: '100%', display: "flex", flexDirection: "column"}}>
                    <TransactionCategoryExpense categoryName={"Food"} totalExpenses={800} percentage={80}/>
                    <TransactionCategoryExpense categoryName={"Food"} totalExpenses={800} percentage={80}/>
                    <TransactionCategoryExpense categoryName={"Food"} totalExpenses={800} percentage={80}/>
                </Box>
            </Box>
            <Box sx={{
                flex: 1,
                borderRadius: 2,
                borderColor: "lightgray",
                borderWidth: "1px",
                borderStyle: "solid",
                display: "flex"
            }}>
                <TransactionForm isCreating={true}/>
            </Box>
        </Container>
    )
}
