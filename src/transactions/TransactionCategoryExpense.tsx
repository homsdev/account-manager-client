import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

interface TransactionCategoryExpenseProps {
    categoryName: string;
    totalExpenses: number;
    percentage: number;
}

const formatCurrency = (value: number, currency: string = "MXN") => {
    return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency,
        minimumFractionDigits: 2
    }).format(value);
}

export const TransactionCategoryExpense: React.FC<TransactionCategoryExpenseProps> = (
    {
        categoryName,
        totalExpenses,
        percentage,
    }) => {

    return (
        <Box sx={{padding: 2}}>
            <Box sx={{display: "flex", justifyContent: "space-between", mb: 0}}>
                <Typography variant="subtitle1" fontWeight="bold">{categoryName}</Typography>
                <Typography variant="subtitle1" fontWeight="bold">{formatCurrency(totalExpenses)}</Typography>
            </Box>
            <Box>
                <LinearProgress sx={{height: 8, borderRadius: 1}} variant="determinate"
                                value={percentage}></LinearProgress>
            </Box>
        </Box>
    )
}