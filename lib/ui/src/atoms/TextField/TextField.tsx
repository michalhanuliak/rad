import MuiTextField from '@mui/material/TextField/TextField';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField/TextField';

export type TextFieldProps = MuiTextFieldProps;

export function TextField(props: TextFieldProps) {
  return <MuiTextField {...props} />;
}
