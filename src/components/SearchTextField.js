import TextField from "@mui/material/TextField";

export default function SearchTextField(props) {
  const { name, id, label, type, variant, input } = props;
  return (
    <TextField
      value={input.value}
      name={input.name}
      onChange={input.onChange}
      id={id}
      label={label}
      type={type}
      variant={variant}
    />
  );
}
