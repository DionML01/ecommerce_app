import { useField } from "formik";
import React from "react";

interface MyCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children: React.ReactNode;
}

const MyCheckbox: React.FC<MyCheckboxProps> = ({ children, ...props }) => {
  const [field, meta, helpers] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input
          type="checkbox"
          {...field}
          checked={Boolean(field.value)}
          onChange={(e) => helpers.setValue(e.target.checked)}
          {...props}
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div style={{ fontSize: "0.85rem", color: "red" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyCheckbox;
