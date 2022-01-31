import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../Utils"


export default function PrivateRoute() {
  const { currentUser } = useAuth()
  return currentUser.length ? <Outlet /> : <Navigate to="/login" />
}