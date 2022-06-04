import React, { useEffect, useState } from 'react';
import './Users.scss';
import axios from 'axios';

const Users = ({ user, allUsers }) => {

  ////REMOVING USER
  const deleteUser = async (_id) => {
    
    const alert = window.confirm('Do you want to delete this user?');
    if(alert) {
      await axios
      .delete(`${process.env.REACT_APP_API_URL}/api/delete-user/${_id}`)
      .then(res => {
        window.location.reload();
        return res.data;
      })
      .catch(err => {
        if(err) {
          console.log("error from removing user on admin panel front end" + err);
        }
      })
    }
  }

  return (
    <div className="users-area">
      <div className="search-area mb-3">
        <h3>Search for users: </h3>
        <form className="form-inline my-2 my-lg-0 d-flex">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
        </form>
      </div>
      <div className="table-area">
        <h3>All users: </h3>
        <table>
          <thead>
            <tr>
              <th className='d-flex align-items-center justify-content-center'><input type="checkbox" /></th>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Admin Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            allUsers && allUsers.map((users, i) => (
              <tbody key={i}>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td style={{ fontWeight: 'bold' }}>{i += 1}</td>
                  <td className='d-flex align-items-center'>
                    <img src={require('../../../assets/no-user-avatar.png')} alt="" />
                    <h4>{users.firstName} {users.lastName}</h4>
                  </td>
                  <td>{users.email}</td>
                  <td>
                    {
                      users.admin === true ?
                        <span className='true'>true</span>
                        :
                        <span className='false'>false</span>
                    }
                  </td>
                  <td>
                    <button className='view' type='button'>View</button>
                    <button className='delete' type='button' onClick={() => deleteUser(users._id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    </div>
  )
}

export default Users;