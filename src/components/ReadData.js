import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { dataReplace, deleteData } from "../redux/actionCreator";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./User.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const ReadData = ({ row, handleEdit }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleYes = (id) => {
    setShow(false);
    dispatch(deleteData(id));
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setShow(true);
  };
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

        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to delete the user, {row.name}?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleYes(row.id)}>
              Yes
            </Button>
            <Button variant="primary" onClick={() => setShow(false)}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </td>
    </tr>
  );
};

export default ReadData;
