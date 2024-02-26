import { Control, Controller, FieldValues } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

export type ControlledTextFieldProps<T extends FieldValues> = TextFieldProps & {
  control: Control<T>;
  name: T['name'];
};

export function ControlledTextField<T extends FieldValues>({
  control,
  name,
  ...inputProps
}: ControlledTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={!!error?.type}
          helperText={error?.message}
          {...inputProps}
          {...field}
        />
      )}
    />
  );
}

export default ControlledTextField;
