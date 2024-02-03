import styles from "./SingleApplication.module.css";
import { formatDate } from "./util/formatDates";
import { formattedPounds } from "./util/formatCash";
import { Button } from "./ui/Button/Button";
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const SingleApplication = ({ Application, setCurrentPage }) => {
  
  function loadMore() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  // Custom style to remove the line between cells and add text wrapping
  const tableCellStyle = {
    borderBottom: "none", // Removes the line between cells
    maxWidth: "100px",
    minWidth: "100px",
    whiteSpace: "normal" as "normal", // Allows text to wrap and ensures type compatibility
    overflowWrap: "break-word" as "break-word", // Ensures long words do not overflow their container
  };
  // Array of headers in the table
  const tableHeaderLabels = ["Company", "Name", "Email", "Loan Amount", "Application Date", "Expiry Date"];

  return (
    <div>
      <SimpleBar data-simplebar-direction='rtl' style={{ minWidth: '200px' }}>
        {Application?.map((detail) => (
          <Box
            key={detail.id}
            sx={{
              backgroundColor: "white",
              my: 4,
              mx: 6,
              borderRadius: "15px",
              alignItems: "center",
              p: 1,
              minWidth: "600px",
              borderBottom: "1px solid #ddd",
              '&:last-child': {
                borderBottom: "none"
              }
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                 {tableHeaderLabels.map((label, index) => (
                    <TableCell key={index} style={tableCellStyle}><b>{label}</b></TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={tableCellStyle}>{detail.company || ""}</TableCell>
                  <TableCell style={tableCellStyle}>
                    {(detail.first_name && detail.last_name) ? `${detail.first_name} ${detail.last_name}` : ""}
                  </TableCell>
                  <TableCell sx={{ color: "blue" }} style={tableCellStyle}><strong>{detail.email || ""}</strong></TableCell>
                  <TableCell style={tableCellStyle}>{formattedPounds(detail.loan_amount) || ""}</TableCell>
                  <TableCell style={tableCellStyle}>{formatDate(detail.date_created) || ""}</TableCell>
                  <TableCell style={tableCellStyle}>{formatDate(detail.expiry_date) || ""}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        ))}
      </SimpleBar>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Button className={styles.loadMoreButton} onClick={loadMore}>
          Load More
        </Button>
      </Box>
    </div>
  );
};

export default SingleApplication;
