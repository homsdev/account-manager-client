import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import type {Account} from "./types.ts";
import type {SxProps, Theme} from "@mui/material";

import {AccountInfoCard} from "./AccountInfoCard.tsx";

interface AccountSectionProps {
    accounts: Account[];
    onChangeAccount: (account: Account) => void;
}

const styles = {
    container: {
        mt: 4
    } as SxProps<Theme>,
    sectionBox: {
        borderRadius: 2,
        borderColor: "lightgray",
        borderWidth: "1px",
        borderStyle: "solid",
    } as SxProps<Theme>,
    headerBox: {
        display: "flex",
        justifyContent: "space-between",
        my: 4,
        mx: 3
    } as SxProps<Theme>,
    accountsBox: {
        display: "flex",
        mb: 4
    } as SxProps<Theme>,
    accountBox: {
        flex: 1,
        mx: 2,
        cursor: "pointer",
    } as SxProps<Theme>,
}

const AccountsSection: React.FC<AccountSectionProps> = ({accounts, onChangeAccount}) => {

    function handleSelectAccount(account: Account) {
        onChangeAccount(account);
    }

    return (
        <Container
            sx={styles.container}
        >
            <Box sx={styles.sectionBox}>
                <Box sx={styles.headerBox}>
                    <Typography variant="h4" fontWeight="bold">Accounts Overview</Typography>
                    <Button variant="contained" startIcon={<AddIcon/>} color="primary">
                        Add Account
                    </Button>
                </Box>
                <Box sx={styles.accountsBox}>
                    {accounts?.map((account) => (
                        <Box key={account.accountId} sx={styles.accountBox}
                             onClick={() => handleSelectAccount(account)}>
                            <AccountInfoCard
                                accountName={account.alias}
                                accountBalance={account.balance}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default AccountsSection;