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
const CollapsibleTable = () => {
  const data = [
    {
      name: "ELIANA NOGUEIRA",
      balance: 50,
      transactions: [
        {
          type: "Venda produtor",
          date: "20/07/2023",
          product: "DESENVOLVEDOR FULL STACK",
          value: 25,
        },
      ],
    },
    {
      name: "ELIANA NOGUEIRA",
      balance: 50,
      transactions: [
        {
          type: "Venda produtor",
          date: "20/07/2023",
          product: "DESENVOLVEDOR FULL STACK",
          value: 25,
        },
        {
          type: "Venda produtor",
          date: "20/07/2023",
          product: "DESENVOLVEDOR FULL STACK",
          value: 25,
        },
      ],
    },
    {
      name: "ELIANA NOGUEIRA",
      balance: 50,
      transactions: [
        {
          type: "Venda produtor",
          date: "20/07/2023",
          product: "DESENVOLVEDOR FULL STACK",
          value: 25,
        },
        {
          type: "Venda produtor",
          date: "20/07/2023",
          product: "DESENVOLVEDOR FULL STACK",
          value: 25,
        },
        {
          type: "Venda produtor",
          date: "20/07/2023",
          product: "DESENVOLVEDOR FULL STACK",
          value: 25,
        },
      ],
    },
  ];

  const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    console.log(row);
    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expandir linha"
              component="th"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th">{row.name}</TableCell>
          <TableCell component="th">{row.balance}</TableCell>
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
                      <TableCell align="center">Tipo</TableCell>
                      <TableCell align="center">Data</TableCell>
                      <TableCell align="center">Produto</TableCell>
                      <TableCell align="center">Valor</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.transactions.map((t, index) => (
                      <TableRow key={index}>
                        <TableCell>{t.type}</TableCell>
                        <TableCell>{t.date}</TableCell>
                        <TableCell>{t.product}</TableCell>
                        <TableCell>{t.value}</TableCell>
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
            <TableCell align="center">Vendedor</TableCell>
            <TableCell align="center">Saldo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d, index) => (
            <Row key={index} row={d} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
