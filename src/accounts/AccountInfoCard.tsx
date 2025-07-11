import {JSX} from "react";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import {useTheme} from "@mui/material";

interface AccountInfoCardProps {
    accountName: string,
    accountBalance: number,
    accountType?: 'checking' | "savings" | "investment" | "credit",
    lastTransactionDate?: Date,
    accountNumber?: string,
    currency?: string,
}

const formatCurrency = (value: number, currency: string = "MXN"): string => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2
    }).format(value);
}

const formatDate = (date?: Date): string => {
    if (!date) {
        return "No recent activity"
    }
    return new Intl.DateTimeFormat('ex-MX', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }).format(date);
}

export const AccountInfoCard = (
    {
        accountName,
        accountBalance,
        accountType = "checking",
        lastTransactionDate,
        accountNumber = "****1234",
        currency,
    }: AccountInfoCardProps): JSX.Element => {

    const theme = useTheme();

    return (
        <Card
            sx={{
                minWidth: 275,
                borderRadius: 2,
                boxShadow: theme.shadows[2],
                '&:hover': {
                    boxShadow: theme.shadows[4]
                }
            }}
        >
            <CardHeader
                sx={{paddingBottom: 0}}
                title={
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <AccountBalanceWalletOutlinedIcon color="primary"/>
                        <Chip
                            label={
                                <Typography variant="body2" fontWeight="bold">{accountType}</Typography>
                            }
                            color="primary"
                            size="small"/>
                    </Box>
                }
            >
            </CardHeader>
            <CardContent sx={{display: "flex", flexDirection: "column", gap: 2}}>
                <Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {accountName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {accountNumber}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {formatCurrency(accountBalance, currency)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Last activity: {formatDate(lastTransactionDate)}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
};

