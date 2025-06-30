import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import {Box, Card, CardContent, Container, Typography} from "@mui/material";

export default function Home() {
    return (
        <Container sx={{width: "100%"}}>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    mt: 4,
                    mb: 4
                }}
            >
                <Typography variant="h5" fontWeight="bold">
                    Expense Tracker
                </Typography>
                <Typography variant="subtitle1">
                    Track and manage your expenses efficiently
                </Typography>
            </Box>
            <Box
                component="div"
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                }}
            >
                <Card sx={{flex: 1}}>
                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1,
                            }}
                        >
                            <Typography variant="body2">Total Balance</Typography>
                            <AccountBalanceWalletOutlinedIcon color="success"></AccountBalanceWalletOutlinedIcon>
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight="bold">
                                $12,450.00
                            </Typography>
                            <Box sx={{display: "flex", alignItems: "center", mt: 1}}>
                                <TrendingUpOutlinedIcon color="success"></TrendingUpOutlinedIcon>
                                <Typography color="success" variant="subtitle2">
                                    +2.5% from last month
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={{flex: 1}}>
                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1,
                            }}
                        >
                            <Typography variant="body2">Total Balance</Typography>
                            <AccountBalanceWalletOutlinedIcon color="success"></AccountBalanceWalletOutlinedIcon>
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight="bold">
                                $12,450.00
                            </Typography>
                            <Box sx={{display: "flex", alignItems: "center", mt: 1}}>
                                <TrendingUpOutlinedIcon color="success"></TrendingUpOutlinedIcon>
                                <Typography color="success" variant="subtitle2">
                                    +2.5% from last month
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={{flex: 1}}>
                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1,
                            }}
                        >
                            <Typography variant="body2">Total Balance</Typography>
                            <AccountBalanceWalletOutlinedIcon color="success"></AccountBalanceWalletOutlinedIcon>
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight="bold">
                                $12,450.00
                            </Typography>
                            <Box sx={{display: "flex", alignItems: "center", mt: 1}}>
                                <TrendingUpOutlinedIcon color="success"></TrendingUpOutlinedIcon>
                                <Typography color="success" variant="subtitle2">
                                    +2.5% from last month
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card sx={{flex: 1}}>
                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1,
                            }}
                        >
                            <Typography variant="body2">Total Balance</Typography>
                            <AccountBalanceWalletOutlinedIcon color="success"></AccountBalanceWalletOutlinedIcon>
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight="bold">
                                $12,450.00
                            </Typography>
                            <Box sx={{display: "flex", alignItems: "center", mt: 1}}>
                                <TrendingUpOutlinedIcon color="success"></TrendingUpOutlinedIcon>
                                <Typography color="success" variant="subtitle2">
                                    +2.5% from last month
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}
