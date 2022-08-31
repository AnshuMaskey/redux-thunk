import React from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { MdCancel } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import {
  inputChange,
  dataReplace,
  editData,
  updateData,
} from "../redux/userSlice.js";

const EditData = ({ row }) => {
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const inputValue = e.target;
    console.log(inputValue.value);
    dispatch(inputChange(inputValue));
  };

  const handleCancel = (row) => {
    console.log(row, "row");
    dispatch(editData(null));
    dispatch(dataReplace(row));
  };

  const handleSave = (e, id) => {
    e.preventDefault();
    dispatch(updateData(id));
    dispatch(editData(null));
  };
  return (
    <tr>
      <td>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Enter name"
          name="name"
          defaultValue={row.name}
          // value={}
          onChange={inputHandler}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Enter email"
          name="email"
          defaultValue={`${row.email}`}
          onChange={inputHandler}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Enter birthdate"
          name="date"
          defaultValue={`${row.date}`}
          onChange={inputHandler}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Enter address"
          name="address"
          defaultValue={` ${row.address}`}
          onChange={inputHandler}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Enter phone number"
          name="phone"
          defaultValue={`${row.phone}`}
          onChange={inputHandler}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Enter password"
          name="password"
          defaultValue={`${row.password}`}
          onChange={inputHandler}
        />
      </td>
      <td>
        <IconButton
          className="table_icon"
          onClick={(e) => handleSave(e, row.id)}
        >
          <BsCheckCircleFill size={20} color="#fff" />
        </IconButton>
        <IconButton className="table_icon" onClick={() => handleCancel(row)}>
          <MdCancel size={25} color="#fff" />
        </IconButton>
      </td>
    </tr>
  );
};

export default EditData;
