import MUIPagination from "@mui/material/Pagination";
import { useState } from "react";

const Pagination = ({ totalItems = 0, itemsPerPage = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (e, newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  return (
    <MUIPagination
      sx={{ m: "auto" }}
      count={Math.ceil(totalItems / itemsPerPage)}
      page={currentPage}
      onChange={handleChangePage}
      variant="outlined"
      color="primary"
    />
  );
};
export default Pagination;
