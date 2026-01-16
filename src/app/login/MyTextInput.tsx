import { SxProps, TextField, Theme } from "@mui/material";
import { useField } from "formik";

interface MyTextInputProps {
  label: string;
  name: string;
  type?: string;
  sx?: SxProps<Theme>;
}

const MyTextInput = ({ sx, ...props }: MyTextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root fieldset": { borderRadius: "40px" },
        "& .MuiOutlinedInput-input": { height: 20 },
        ...sx,
      }}
    />
  );
};

export default MyTextInput;
