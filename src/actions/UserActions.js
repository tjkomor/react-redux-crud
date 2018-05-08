import React, { Component } from 'react';

export function updateUser(payload) {
  return { type: 'UPDATE_USER', id: payload.id, data: payload.data }
};

export function addUser(payload) {
  return ({ type:'ADD_USER', payload: payload });
};

export function editUser(payload) {
  return ({type: 'EDIT_USER', id: payload.id });
};

export function deleteUser(payload) {
  return ({ type:'DELETE_USER', id: payload.id });
};
