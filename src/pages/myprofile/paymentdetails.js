
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

export default function PaymentDetails(){
    return(
        <div>
            <h4>Payment Method</h4>
                  <form>
                    <div>
                      <BasicTextFields labelName = "Tax ID" InputId ="tax_id" inputType="text"/>
                      <span class="description">The unique Tax Identification Number of your country. Known as TIN, PAN, UID, etc. in different countries</span>
                    </div>
                    <h3>Bank Details</h3>
                    <div>
                      <BasicTextFields labelName = "Name of Bank" InputId ="bank_name" inputType="text"/>
                      <BasicTextFields labelName = "Bank Code" InputId ="bank_code" inputType="text"/>
                      <BasicTextFields labelName = "Account Number" InputId ="bank_account_number" inputType="text"/>
                      <BasicTextFields labelName = "Name of Account" InputId ="bank_account_name" inputType="text"/>
                      <input type="submit" name="submit" id="submit-payment-details" class="button button-primary " value="Save Changes" />
                    </div>
                  </form>
        </div>
    );
}