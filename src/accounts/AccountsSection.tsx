import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type {Account} from "./types.ts";
import type {SxProps, Theme} from "@mui/material";

import {AccountInfoCard} from "./AccountInfoCard.tsx";
import {FormEvent, useRef, useState} from "react";
import {InputAdornment} from "@mui/material";

interface AccountSectionProps {
    accounts: Account[];
    onChangeAccount: (account: Account) => void;
    onAddAccount: (account: Account) => Promise<boolean>;
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
    modalBox: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        padding: 4,
    } as SxProps<Theme>
}

const AccountsSection: React.FC<AccountSectionProps> = (
    {
        accounts,
        onChangeAccount,
        onAddAccount,
    }) => {

    const [showModal, setShowModal] = useState(false);
    const accountFormRef = useRef<HTMLFormElement>(null);

    const handleSelectAccount = (account: Account) => {
        onChangeAccount(account);
    }

    const handleCreateAccount = (e: FormEvent<HTMLFormElement>) => {
        console.info("Executing handleCreateAccount");
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const account = {
            alias: formData.get("alias"),
            balance: formData.get("balance"),
        } as Account;

        onAddAccount(account)
            .then(success => {
                if (success && accountFormRef.current) {
                    accountFormRef.current.reset();
                    setShowModal(false);
                }
            });
    }

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleOnCloseModal = () => {
        setShowModal(false);
    }

    return (
        <Container
            sx={styles.container}
        >
            <Modal open={showModal} onClose={handleOnCloseModal}>
                <Box sx={styles.modalBox}
                     component="form"
                     onSubmit={(e) => handleCreateAccount(e)}
                     ref={accountFormRef}
                >
                    <Typography id="modal-modal-title" variant="h6" sx={{mb: 2}}>
                        Add a new account
                    </Typography>
                    <TextField sx={{mb: 2}} fullWidth label="Account alias" name="alias"></TextField>
                    <TextField
                        sx={{mb: 2}}
                        fullWidth
                        label="Amount"
                        type="number"
                        name="balance"
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                inputMode: "decimal",
                            },
                        }}
                    />
                    <Button variant="contained" fullWidth type="submit">Add</Button>
                </Box>
            </Modal>
            <Box sx={styles.sectionBox}>
                <Box sx={styles.headerBox}>
                    <Typography variant="h4" fontWeight="bold">Accounts Overview</Typography>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon/>}
                        color="primary"
                        onClick={handleOpenModal}
                    >
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