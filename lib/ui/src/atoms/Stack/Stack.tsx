import Box, { BoxProps } from '@mui/material/Box/Box';

export type StackProps = BoxProps & {
  vertical?: boolean;
};

export function Stack({ vertical, children, ...props }: StackProps) {
  return (
    <Box
      display="flex"
      flexDirection={vertical ? 'column' : 'row'}
      gap="0.6rem"
      {...props}
    >
      {children}
    </Box>
  );
}

export default Stack;
