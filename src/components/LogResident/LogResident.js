import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// AWS import
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { listResidentLogs } from "../../graphql/queries.js";

Amplify.configure(awsconfig);
const LogResident = () => {
  const [residentLogs, setResidentLogs] = useState([]);

  useEffect(() => {
    fetchRoomInfo();
  }, []);

  // fetch room from dynamoDB
  const fetchRoomInfo = async () => {
    try {
      const residentLogData = await API.graphql(graphqlOperation(listResidentLogs));
      const residentLogList = residentLogData.data.listResidentLogs.items
      setResidentLogs(residentLogList);
      console.log(residentLogList)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-3">
        <h1 className="mt-3 mb-3">
          <span style={{ color: "#f7a440" }}>☾</span>{" "}
          <span style={{ color: "#ec686a" }}>Resident</span>{" "}
          <span style={{ color: "#ed8984" }}>Log</span>{" "}
          <span style={{ color: "#f5ad9a" }}>History</span>
        </h1>
        <hr />
        <table className="table table-bordered table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Check In</th>
              <th>Check Out</th>
            </tr>
          </thead>
          <tbody>
            {residentLogs.map((residentLog) => (
              <tr key={residentLog.id}>
                <td>{residentLog.resident_name}</td>
                <td>{residentLog.resident_gender}</td>
                <td>{residentLog.resident_phone}</td>
                <td>{residentLog.checkin}</td>
                <td>{residentLog.checkout}</td>
              </tr>
            )
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default LogResident;
