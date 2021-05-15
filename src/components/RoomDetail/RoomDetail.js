import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// AWS import
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { listRooms } from "../../graphql/queries.js";
import { updateRoom, createResidentLog } from "../../graphql/mutations.js";
// Swal alert import
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
Amplify.configure(awsconfig);

const RoomDetail = () => {
  const history = useHistory();
  const { roomid } = useParams();
  const [roominfo, setRoom] = useState([]);

  const today = new Date().toDateString()

  useEffect(() => {
    fetchRoomInfo();
  }, []);

  // fetch room from dynamoDB
  const fetchRoomInfo = async () => {
    try {
      const roomData = await API.graphql(graphqlOperation(listRooms));
      const roomInfoData = roomData.data.listRooms.items.find((room) => room.id == roomid);
      console.log("room info", roomInfoData);
      setRoom(roomInfoData);
    } catch (error) {
      console.log(error);
    }
  };

  // on click delete
  const deleteSubmit = async() => {
    try {
      // creat new resident log
      newResidentLog()

      // clear record
      roominfo.resident_name = "-"
      roominfo.resident_gender = "Other"
      roominfo.resident_phone = "-"
      roominfo.resident_allergyFood = "-"
      roominfo.resident_allergyDrug = "-"
      roominfo.checkin = "-"
      roominfo.contact_name = "-"
      roominfo.contact_phone = "-"

      delete roominfo.createdAt
      delete roominfo.updatedAt
      
      await API.graphql(graphqlOperation(updateRoom, {input: roominfo}))
      history.push("/resident-log");
    } catch (error) {
      console.log("error on delete", error)
    }
  }

  // creat new resident log
  const newResidentLog = async () => {
    const creteResidentHistory = {
      id: uuid(),
      resident_name: roominfo.resident_name,
      resident_gender: roominfo.resident_gender,
      resident_phone: roominfo.resident_phone,
      checkin: roominfo.checkin,
      checkout: today
    }

    await API.graphql(graphqlOperation(createResidentLog, {input: creteResidentHistory}))
  }

  return (
    <div>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-7 text-left mt-3 mb-3">
            <h1>
              <span style={{ color: "#f7a440" }}>☾</span>{" "}
              <span style={{ color: "#ec686a" }}>#</span>{" "}
              <span style={{ color: "#ed8984" }}>Room</span>{" "}
              <span style={{ color: "#f5ad9a" }}>{roominfo.room_name}</span></h1>
          </div>
          { roominfo.resident_name !== "-" ?
          <div className="col-md-4 col-sm-4 col-xs-5 text-center mt-3 mb-3">
            <Link
              to={`/edit-resident/${roominfo.id}`}
              className="btn btn-outline-warning"
            >
              Edit
            </Link>
            <span style={{ color: "grey" }}> | </span>
            <button className="btn btn-outline-danger" onClick={() => {
            MySwal.fire({
              text: "Are you sure to delete this ?",
              type: "warning",
              showCancelButton: true,
              confirmButtonText: "Yes, delete it!",
              cancelButtonText: "No, cancel!",
            }).then((result) => {
              if (result.value) {
                deleteSubmit()
              }
            });
          }}>delete</button>
          </div>
        : <div className="col-md-4 col-sm-4 col-xs-5 text-center mt-3 mb-3"></div>}
        </div>

        {/* detail */}
        <div className="card" style={{ width: "100%" }}>
          <div class="card-header">
            <h3 style={{color: "black"}}>Resident Information</h3>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-hover mt-3">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Allergy Food</th>
                  <th>Allergy Drug</th>
                </tr>
              </thead>
              <tbody>
                {roominfo.resident_name !== "-" ? (
                  <tr>
                    <td>{roominfo.resident_name}</td>
                    <td>{roominfo.resident_gender}</td>
                    <td>{roominfo.resident_phone}</td>
                    <td>{roominfo.resident_allergyFood}</td>
                    <td>{roominfo.resident_allergyDrug}</td>
                  </tr>
                ) : (
                  <tr>
                    <td colspan="5" className="text-center">
                      no one live in this room ;{" "}
                      <Link to={`/add-resident/${roominfo.id}`}>add</Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {roominfo.contact_name !== "-" ? (
              <p>
                Emergency contact: {roominfo.contact_name} ({roominfo.contact_phone})
              </p>
            ) : (
              <p>Emergency contact: -</p>
            )}
            {roominfo.checkin !== "-" ? (<p><i>Check in at:</i> {roominfo.checkin}</p>) : (<p>Check in at: -</p>)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RoomDetail;
