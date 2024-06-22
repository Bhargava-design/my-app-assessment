import React from "react";
import "./ReadOnlyRow.css";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td className="actions">
        <button
          type="button"
          className="edit-btn"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => {
            const confirmBox = window.confirm("Are you sure you want delete this Record?");
            if (confirmBox === true) {
              handleDeleteClick(contact.id);
            }
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
