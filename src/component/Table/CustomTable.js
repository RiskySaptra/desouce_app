import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { Button, Grid, ButtonGroup, Checkbox } from "@material-ui/core";
import Row from "./TableRow";

// construct history
function createData(name, code, barcode, price, warehouse) {
  return {
    name,
    code,
    barcode,
    price,
    warehouse,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

// row field
const rows = [createData("Yakluk", "YLK-01", null, 3000)];

const warehouse = [
  { warehoseName: "Warehouse 1", qty: 10 },
  { warehoseName: "Warehouse 2", qty: 20 },
];

export default function CustomTable() {
  console.log(rows);
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  return (
    <>
      <Grid style={{ marginBottom: "2%" }}>
        <ButtonGroup variant="contained" color="secondary">
          <Button>Add Product</Button>
          <Button>Add Purchase Planning</Button>
          <Button>Stock Adjustment</Button>
        </ButtonGroup>
      </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow variant="head">
              <TableCell>History</TableCell>
              <TableCell>Item Code</TableCell>
              {warehouse.map((itm) => {
                return (
                  <TableCell align="right">QTY ({itm.warehoseName})</TableCell>
                );
              })}
              {/* <TableCell align="right">QTY (WarehouseName)</TableCell>
              <TableCell align="right">QTY (WarehouseName)</TableCell>
              <TableCell align="right">QTY (WarehouseName)</TableCell> */}
              <TableCell align="right">
                QTY (Total from all warehouse)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
      </TableContainer>
    </>
  );
}
