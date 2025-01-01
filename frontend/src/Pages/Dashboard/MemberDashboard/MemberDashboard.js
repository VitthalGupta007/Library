import React, { useContext, useEffect, useState } from "react";
import "../AdminDashboard/AdminDashboard.css";
import "./MemberDashboard.css";

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import HistoryIcon from '@mui/icons-material/History';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CloseIcon from '@mui/icons-material/Close';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { IconButton } from '@mui/material';
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import moment from "moment";

function MemberDashboard() {
  const [active, setActive] = useState("profile");
  const [sidebar, setSidebar] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(AuthContext);
  const [memberDetails, setMemberDetails] = useState(null);

  useEffect(() => {
    const getMemberDetails = async () => {
      try {
        const response = await axios.get(
          `${API_URL}api/users/getuser/${user._id}`
        );
        setMemberDetails(response.data);
      } catch (err) {
        console.log("Error in fetching the member details", err);
      }
    };
    getMemberDetails();
  }, [API_URL, user]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <div className="sidebar-toggler" onClick={() => setSidebar(!sidebar)}>
          <IconButton>
            {sidebar ? (
              <CloseIcon style={{ fontSize: 25, color: "rgb(234, 68, 74)" }} />
            ) : (
              <DoubleArrowIcon
                style={{ fontSize: 25, color: "rgb(234, 68, 74)" }}
              />
            )}
          </IconButton>
        </div>
        <div className={sidebar ? "dashboard-options active" : "dashboard-options"}>
          <div className="dashboard-logo">
            <LibraryBooksIcon style={{ fontSize: 50 }} />
            <p className="logo-name">LCMS</p>
          </div>
          {/* Dashboard Menu */}
          <a
            href="#profile@member"
            className={`dashboard-option ${active === "profile" ? "clicked" : ""}`}
            onClick={() => {
              setActive("profile");
              setSidebar(false);
            }}
          >
            <AccountCircleIcon className="dashboard-option-icon" /> Profile
          </a>
          <a
            href="#activebooks@member"
            className={`dashboard-option ${active === "active" ? "clicked" : ""}`}
            onClick={() => {
              setActive("active");
              setSidebar(false);
            }}
          >
            <LocalLibraryIcon className="dashboard-option-icon" /> Active
          </a>
          <a
            href="#reservedbook@member"
            className={`dashboard-option ${active === "reserved" ? "clicked" : ""}`}
            onClick={() => {
              setActive("reserved");
              setSidebar(false);
            }}
          >
            <BookIcon className="dashboard-option-icon" /> Reserved
          </a>
          <a
            href="#history@member"
            className={`dashboard-option ${active === "history" ? "clicked" : ""}`}
            onClick={() => {
              setActive("history");
              setSidebar(false);
            }}
          >
            <HistoryIcon className="dashboard-option-icon" /> History
          </a>
          <a
            href="#profile@member"
            className={`dashboard-option ${active === "logout" ? "clicked" : ""}`}
            onClick={() => {
              logout();
              setSidebar(false);
            }}
          >
            <PowerSettingsNewIcon className="dashboard-option-icon" /> Log out
          </a>
        </div>

        <div className="dashboard-option-content">
          {/* Member Profile Section */}
          {memberDetails && (
            <div className="member-profile-content" id="profile@member">
              <div className="user-details-topbar">
                <img className="user-profileimage" src="./assets/images/Profile.png" alt="Profile" />
                <div className="user-info">
                  <p className="user-name">{memberDetails?.userFullName}</p>
                  <p className="user-id">
                    {memberDetails?.userType === "Student"
                      ? memberDetails?.admissionId
                      : memberDetails?.employeeId}
                  </p>
                  <p className="user-email">{memberDetails?.email}</p>
                  <p className="user-phone">{memberDetails?.mobileNumber}</p>
                </div>
              </div>
              <div className="user-details-specific">
                <div className="specific-left">
                  <div className="specific-left-top">
                    <p className="specific-left-topic">
                      <span><b>Age:</b></span> {memberDetails?.age}
                    </p>
                    <p className="specific-left-topic">
                      <span><b>Gender:</b></span> {memberDetails?.gender}
                    </p>
                  </div>
                  <div className="specific-left-bottom">
                    <p className="specific-left-topic">
                      <span><b>DOB:</b></span> {memberDetails?.dob}
                    </p>
                    <p className="specific-left-topic">
                      <span><b>Address:</b></span> {memberDetails?.address}
                    </p>
                  </div>
                </div>
                <div className="specific-right">
                  <div className="specific-right-top">
                    <p><b>Points</b></p>
                    <p>{memberDetails?.points || 0}</p>
                  </div>
                  <div className="dashboard-title-line"></div>
                  <div className="specific-right-bottom">
                    <p><b>Rank</b></p>
                    <p>{memberDetails?.rank || "N/A"}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Books Section */}
          <div className="member-activebooks-content" id="activebooks@member">
            <p className="member-dashboard-heading">Issued</p>
            <table className="activebooks-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Book-Name</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Fine</th>
                </tr>
              </thead>
              <tbody>
                {memberDetails?.activeTransactions
                  ?.filter((data) => data.transactionType === "Issued")
                  .map((data, index) => {
                    const daysOverdue = Math.floor(
                      (Date.parse(moment().format("MM/DD/YYYY")) - Date.parse(data.toDate)) / 86400000
                    );
                    const fine = daysOverdue > 0 ? daysOverdue * 10 : 0;
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.bookName}</td>
                        <td>{data.fromDate}</td>
                        <td>{data.toDate}</td>
                        <td>{fine}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          {/* Reserved Books Section */}
          <div className="member-reservedbooks-content" id="reservedbooks@member">
            <p className="member-dashboard-heading">Reserved</p>
            <table className="activebooks-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Book-Name</th>
                  <th>From</th>
                  <th>To</th>
                </tr>
              </thead>
              <tbody>
                {memberDetails?.activeTransactions
                  ?.filter((data) => data.transactionType === "Reserved")
                  .map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.bookName}</td>
                      <td>{data.fromDate}</td>
                      <td>{data.toDate}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* History Section */}
          <div className="member-history-content" id="history@member">
            <p className="member-dashboard-heading">History</p>
            <table className="activebooks-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Book-Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Return Date</th>
                </tr>
              </thead>
              <tbody>
                {memberDetails?.prevTransactions?.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.bookName}</td>
                    <td>{data.fromDate}</td>
                    <td>{data.toDate}</td>
                    <td>{data.returnDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDashboard;
