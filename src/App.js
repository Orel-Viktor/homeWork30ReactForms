import { Form, Field } from "react-final-form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SearchTextField from "./components/SearchTextField";

function App() {
  const onValidate = (value) => {
    const gg = {};
    if (value.searchInput === undefined) {
      gg.searchInput = 'Введите значние'
    }
    return gg;

  };

  const onSubmit = (formValue) => {
    console.log(formValue);
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={onValidate}
      render={({ handleSubmit }) => {
        return (
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: "25%", margin: "0 auto", padding: "2px" }}
            autoComplete="off"
          >
            <Box component='div' sx={{ display: "flex", alignItems: "flex-end", mb: "20px" }}>
              <Field
                component={SearchTextField}
                name="searchInput"
                id="standard-search"
                label="Search field"
                type="search"
                variant="standard"
              />
              <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            </Box>
            <Button type="submit" variant="contained">
              Find
            </Button>
          </Paper>
        );
      }}
    />
  );
}

export default App;
