
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const  BasicTextFields = (props) => {
    const {labelName , InputId ,inputType} = props;
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

export default function AccountDetails(){
    return(
        <div>
                  <h4>Account Details</h4>
                  <form>
                    <BasicTextFields labelName = "First Name" InputId ="first_name" inputType="text"/>
                    <BasicTextFields labelName = "Last Name" InputId ="last_name" inputType="text"/>
                    <BasicTextFields labelName = "Mobile" InputId ="mobile" inputType="text"/>
                    <BasicTextFields labelName = "Email" InputId ="email" inputType="text"/>
                    <BasicTextFields labelName = "Address" InputId ="address" inputType="text"/>
                    <input type="submit" name="submit" id="submit-account-details" class="button button-primary " value="Update Account" />
                  </form>
                  <h4>Password change</h4>
                  <form>
                    <BasicTextFields labelName = "Current Password" InputId ="current_password" inputType="password"/>
                    <BasicTextFields labelName = "New Password" InputId ="new_password" inputType="password"/>
                    <BasicTextFields labelName = "Confirm Password" InputId ="confirm_password" inputType="password"/>
                    <input type="submit" name="submit" id="submit-password-details" class="button button-primary " value="Save Changes" />
                </form>                 
        </div>
    );
}