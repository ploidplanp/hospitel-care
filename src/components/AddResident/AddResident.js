import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";

// AWS import
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { listRooms } from "../../graphql/queries.js";
import { updateRoom } from "../../graphql/mutations.js";

Amplify.configure(awsconfig);

const AddResident = () => {
  const history = useHistory()
  const { roomid } = useParams();
  const [room, setRoom] = useState();
  const [thisRoomName, setThisRoomName] = useState();

  // form
  const [resident_name, setResidentName] = useState();
  const [resident_gender, setResidentGender] = useState();
  const [resident_phone, setResidentPhone] = useState();
  const [resident_allergyFood, setResidentAllergyFood] = useState();
  const [resident_allergyDrug, setResidentAllergyDrug] = useState();
  const [contact_name, setContactName] = useState();
  const [contact_phone, setContactPhone] = useState();

  const today = new Date().toDateString()

  useEffect(() => {
    fetchRoomInfo();
  }, []);

  const fetchRoomInfo = async () => {
    try {
      const roomData = await API.graphql(graphqlOperation(listRooms));
      const roomInfoData = roomData.data.listRooms.items.find(
        (room) => room.id == roomid
      );
      console.log("room info", roomInfoData);
      setRoom(roomInfoData);
      setThisRoomName(roomInfoData.room_name)
    } catch (error) {
      console.log(error);
    }
  };

  const addSubmit = async () => {
    try {
      // resident name
    if (resident_name !== "" || room.resident_name !== resident_name) {
      room.resident_name = resident_name;
    }
    if (room.resident_gender !== resident_gender) {
      room.resident_gender = resident_gender;
    }
    // gender
    room.resident_gender = resident_gender
    // resident phone
    if (
      resident_phone !== "" ||
      room.resident_phone !== resident_phone
    ) {
      room.resident_phone = resident_phone;
    }
    // allergy food
    if (resident_allergyFood == "") {
      room.resident_allergyFood = "-";
    } else {
      room.resident_allergyFood = resident_allergyFood;
    }
    // allergy Drug
    if (resident_allergyDrug == "") {
      room.resident_allergyDrug = "-";
    } else {
      room.resident_allergyDrug = resident_allergyDrug;
    }
    // contact name
    if (contact_name !== "" || room.contact_name !== contact_name) {
      room.contact_name = contact_name;
    }
    // contact phone
    if (contact_phone !== "" || room.contact_phone !== contact_phone) {
      room.contact_phone = contact_phone;
    }
    // checkin
    room.checkin = today

    delete room.createdAt;
    delete room.updatedAt;

    await API.graphql(graphqlOperation(updateRoom, { input: room }));
    history.push(`/room-detail/${room.id}`);
    } catch (error) {
      console.log("error on add", error)
    }

  };

  return (
    <div>
      <Header />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-7 text-left mt-3">
            <h1>
              <span style={{ color: "#f7a440" }}>☾</span>{" "}
              <span style={{ color: "#ec686a" }}>Add Resident</span>{" "}
              <span style={{ color: "#ed8984" }}>to Room</span>{" "}
              <span style={{ color: "#f5ad9a" }}>{thisRoomName}</span>
            </h1>
          </div>
        </div>
        {/* resident */}
        <div className="card mt-3 mb-3" style={{ width: "100%" }}>
          <div className="card-header">
            <h3 style={{color: "black"}}>Resident Information</h3>
          </div>
          <div className="card-body">
            <div className="form-group mt-3 mb-3">
              <label className="mb-2">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="name surname"
                value={resident_name}
                onChange={(e) => setResidentName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 mb-3">
              <label className="mb-2">Gender</label>
              <select
                class="form-control"
                onChange={(e) => setResidentGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option selected value="Other">
                  Other
                </option>
              </select>
            </div>
            <div className="form-group mt-3 mb-3">
              <label className="mb-2">Phone</label>
              <input
                type="text"
                className="form-control"
                value={resident_phone}
                onChange={(e) => setResidentPhone(e.target.value)}
              />
            </div>
            <div class="row">
              <div className="col-md-6 col-sm-12">
                <div className="form-group mt-3 mb-3">
                  <label className="mb-2">Allergy Food</label>
                  <input
                    type="text"
                    className="form-control"
                    value={resident_allergyFood}
                    onChange={(e) => setResidentAllergyFood(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="form-group mt-3 mb-3">
                  <label className="mb-2">Allergy Drug</label>
                  <input
                    type="text"
                    className="form-control"
                    value={resident_allergyDrug}
                    onChange={(e) => setResidentAllergyDrug(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="card mt-3" style={{ width: "100%" }}>
          <div className="card-header">
            <h3 style={{color: "black"}}>Emergency contact</h3>
          </div>
          <div className="card-body">
            <div className="form-group mt-3 mb-3">
              <label className="mb-2">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="name surname"
                value={contact_name}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 mb-3">
              <label className="mb-2">Phone</label>
              <input
                type="text"
                className="form-control"
                value={contact_phone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="container text-center mt-4 mb-4">
        <button className="btn btn-primary" onClick={addSubmit}>add</button>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default AddResident;
