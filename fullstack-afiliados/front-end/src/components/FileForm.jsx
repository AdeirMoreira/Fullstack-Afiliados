import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";

const FileForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) =>{
        console.log('EE',e.target.files[0]);
        const formData = new FormData()

        formData.append('name',e.target.files[0].name)
        formData.append('file',e.target.files[0] )

        console.log(formData);
    }

  return (
    <Box sx={
      {padding: '1em'}
    }>
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            Upload arquivo de transações
          </Typography>
          <Input color="primary" type="file" onChange={handleFileInput}/>
          <Button color="success" variant="contained">
            Upload
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default FileForm;
