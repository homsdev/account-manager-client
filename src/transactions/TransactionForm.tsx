import {JSX} from "react";
import {Box, Button, InputAdornment, MenuItem, TextField, Typography} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

interface TransactionFormProps {
    isCreating: boolean;
}

export const TransactionForm = ({isCreating}: TransactionFormProps): JSX.Element => {
    return (
        <Box sx={{width: "100%", padding: 2}}>
            {isCreating ? (
                <Box sx={{display: "flex", alignItems: "center", mb: 2}}>
                    <AddOutlinedIcon/>
                    <Typography variant="h6" fontWeight="bold">Add New Expense</Typography>
                </Box>
            ) : (
                <Box>
                    <Typography>Editing</Typography>
                </Box>
            )}
            <Box component="form">
                <TextField
                    sx={{mb: 2}}
                    fullWidth
                    label="Amount"
                    type="number"
                    slotProps={{
                        input: {
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            inputMode: "decimal",
                        },
                    }}
                />
                <TextField sx={{mb: 1.5}} fullWidth select label="Account" helperText="Select accout" defaultValue="2">
                    <MenuItem key="1" value="1">Main checking</MenuItem>
                    <MenuItem key="2" value="2">Savings account</MenuItem>
                    <MenuItem key="3" value="3">CreditCard</MenuItem>
                </TextField>
                <TextField sx={{mb: 1.5}} fullWidth select label="Category" helperText="Select category"
                           defaultValue="2">
                    <MenuItem key="1" value="1">Food</MenuItem>
                    <MenuItem key="2" value="2">Services</MenuItem>
                    <MenuItem key="3" value="3">Crabs</MenuItem>
                </TextField>
                <TextField sx={{mb: 1.5}} fullWidth multiline label="Description" rows={4}/>
                <Button fullWidth variant="contained">
                    {isCreating ? 'Add Expense' : 'Save Changes'}
                </Button>
            </Box>
        </Box>
    );
};