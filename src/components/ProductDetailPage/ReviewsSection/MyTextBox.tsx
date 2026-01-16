import { useField } from "formik";
import TextField from "@mui/material/TextField";

interface MyTextBoxProps {
  label: string;
  name: string;
  type?: string;
}

const MyTextBox = ({ label, ...props }: MyTextBoxProps) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      multiline
      minRows={2}
      placeholder="Write your comment..."
      variant="outlined"
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      fullWidth
    />
  );
};

export default MyTextBox;
