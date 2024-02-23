import MuiCheckbox from '@mui/material/Checkbox/Checkbox';
import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox/Checkbox';

export type CheckboxProps = MuiCheckboxProps;

export function Checkbox(props: CheckboxProps) {
  return <MuiCheckbox {...props} />;
}
