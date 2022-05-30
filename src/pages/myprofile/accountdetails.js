
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// const BasicTextFields = (props) => {
//   const { labelName, InputId, inputType, value, name } = props;
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '100%' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id={InputId} label={labelName} variant="outlined" type={inputType} name={name} value={value} />
//     </Box>
//   );
// }

export default function AccountDetails(props) {
 console.log(props)


  return (
    <div>
      <h4>Account Details</h4>
      <form >
        {/* <BasicTextFields labelName=" " InputId="name" inputType="text" value="" name="name" />
        <BasicTextFields labelName="Mobile" InputId="mobile" inputType="number" value="" name="mobile" />
        <BasicTextFields labelName="Email" InputId="email" inputType="text" value="" name="email" />
        <BasicTextFields labelName="Address" InputId="address" inputType="text" value="" name="address" /> */}
        <label for="username1">Username:</label><br />
        <input className="account-details-form  form-control " type="text" id="username1" name="name"  value={props.data.user.name}/><br />
        <label for="mobile1">Mobile:</label><br />
        <input className="account-details-form form-control " type="text" id="mobile1" name="mobile" value={props.data.user.mobile} autoComplete="off"/><br />
        <label for="email1">Email:</label><br />
        <input className="account-details-form form-control " type="text" id="email1" name="email" value={props.data.user.email}  autoComplete="off"/><br />
        <label for="address1">Address:</label><br />
        <input className="account-details-form form-control " type="text" id="address1" name="address" value={props.data.user.address}  autoComplete="off"/><br />
        <input type="submit" name="submit" id="submit-account-details" class="button button-primary " value="Update Account" />
      </form>
      <h4>Password change</h4>
      <form>
        {/* <BasicTextFields labelName="Current Password" InputId="current_password" inputType="password" value="" name="password" />
        <BasicTextFields labelName="New Password" InputId="new_password" inputType="password" value="" name="password" />
        <BasicTextFields labelName="Confirm Password" InputId="confirm_password" inputType="password" value="" name="cpassword" /> */}
        <input type="submit" name="submit" id="submit-password-details" class="button button-primary " value="Save Changes" />
      </form>
    </div>
  );
}