import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { formatDateMomentJS, formatReal } from "../common";
const CollapsibleTable = (props) => {
  const { sellers } = props;

  const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expandir linha"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{formatReal(row.balance)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  align="center"
                  sx={{ flexGrow: 1 }}
                >
                  Transações
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Tipo</TableCell>
                      <TableCell>Data</TableCell>
                      <TableCell>Produto</TableCell>
                      <TableCell>Valor</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.transactions.map((t, index) => (
                      <TableRow key={index}>
                        <TableCell>{t.description}</TableCell>
                        <TableCell>{formatDateMomentJS(t.date)}</TableCell>
                        <TableCell>{t.product}</TableCell>
                        <TableCell>{formatReal(t.value)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Lista de Vendedores">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Vendedor</TableCell>
            <TableCell>Saldo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellers.map((d, index) => (
            <Row key={index} row={d} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
