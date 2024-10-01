import {
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Dish = () => {
  return (
    <div>
      <div className="text-xl font-semibold my-4 flex justify-between">
        <h2>Danh sách món ăn</h2>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Tên món ăn</TableCell>
              <TableCell>Mô tả</TableCell>
              <TableCell>Giá tiền</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Cập nhật</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dish;
