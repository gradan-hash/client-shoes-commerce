import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminNav from "../../components/adminnav/Adminnav";
import Sidebar from "../../components/adminnav/Sidebar";
import UploadItems from "../../components/adminnav/UploadItems";
import "./admin.scss";

const AdminHome = () => {
  const user = useSelector((state) => state.user.currentUser);

  const [adminname, setAdminname] = useState("");
  useEffect(() => {
    if (user) {
      setAdminname(user.user.username);
    }
  }, [user]);
  return (
    <>
      <AdminNav />
      <h5 className="admintit" >welcome admin ,{adminname}</h5>
      <div className="admin-container">
        <Sidebar className="ad-sidebar" />
        <div className="admin-content">
          <UploadItems />
        </div>
      </div>
    </>
  );
};

export default AdminHome;
