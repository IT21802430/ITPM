import React from "react"; 
//import '/UserTableComponent.css';

function UserTableComponent() {
  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password (Encrypted)</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>johndoe</td>
          <td>johndoe@example.com</td>
          <td>******** (Encrypted)</td>
          <td>USA</td>
          <td class="actions">
            <button class="view-btn">View</button>
            <button class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserTableComponent;
