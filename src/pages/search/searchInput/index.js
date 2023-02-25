import React from "react";
import { Grid, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ searchHandler }) => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "5px 0px",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: { xs: "60%", sm: "50%" },
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={searchHandler}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
};

export default SearchInput;
