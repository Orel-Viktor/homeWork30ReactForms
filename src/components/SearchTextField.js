import TextField from "@mui/material/TextField";

export default function SearchTextField(props) {
  const { id, label, type, variant, input, meta } = props;
  console.log(meta)
  return (
    <TextField
      {...input}
      // value={input.value}
      // name={input.name}
      // onChange={input.onChange}
      error={Boolean(meta.error && meta.touched)}
      id={id}
      label={label}
      type={type}
      variant={variant}
      helperText={meta.error && meta.touched ? meta.error : null}
    />
  );
}
