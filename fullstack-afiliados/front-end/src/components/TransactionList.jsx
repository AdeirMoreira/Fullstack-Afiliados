import { Box } from "@mui/material";
import React from "react";
import CollapsibleTable from "./CollapsibleTable";

const TransactionList = () => {
  return (
    <Box sx={{padding: '1em'}}>
      <CollapsibleTable/>
    </Box>
  );
};

export default TransactionList;
