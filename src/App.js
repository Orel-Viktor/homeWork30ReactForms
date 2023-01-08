import { Form, Field } from "react-final-form";
import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import  SearchTextField  from "./components/SearchTextField";

function App() {
  const [inputValue, setValue] = useState("Начните поиск");
  const onSubmit = (formValue) => {
    console.log(formValue);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => {
        return (
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: "25%", margin: "0 auto", padding: "2px" }}
            noValidate
            autoComplete="off"
          >
            <Box sx={{ display: "flex", alignItems: "flex-end", mb: "20px" }}>
              <Field
                component={SearchTextField}
                name="searchInput"
                error
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
