
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const  BasicTextFields = (props) => {
    const {labelName , InputId , inputType} = props;
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={InputId} label={labelName} variant="outlined" type={inputType}/>
    </Box>
  );
}

export default function WithdrawalRequest(){
    return(
        <div>
                  <form>
                      <BasicTextFields labelName = "Enter Amount" InputId ="withdrawal_amount" inputType="text"/>
                      <p style={{"marginLeft":"40px","fontSize":"12px","color":"grey"}}>*Not Less than ₹250</p>
                      <input type="submit" name="submit" id="submit-withdrawal-payment-details" class="button button-primary " value="Request Withdrawal" />
                      <p></p>
                  </form>
        </div>
    );
}