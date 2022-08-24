import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { dataReplace } from "../redux/actionCreator";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./User.css";

const ReadData = ({ row, handleEdit, handleDelete }) => {
  const dispatch = useDispatch();

  return (
    <tr onClick={() => dispatch(dataReplace(row))}>
      <td>{row.name}</td>
      <td> {row.email}</td>
      <td>{row.date}</td>
      <td>{row.address}</td>
      <td>{row.phone}</td>
      <td> {row.password}</td>
      <td>
        <IconButton
          className="table_icon"
          onClick={(e) => handleEdit(e, row.id)}
        >
          <AiFillEdit color="#fff" />
        </IconButton>
        <IconButton
          className="table_icon"
          onClick={(e) => handleDelete(e, row.id)}
        >
          <AiFillDelete color="#fff" />
        </IconButton>
      </td>
    </tr>
  );
};

export default ReadData;
