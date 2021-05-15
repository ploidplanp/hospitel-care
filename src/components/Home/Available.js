import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

// AWS import
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { listRooms } from "../../graphql/queries.js";

Amplify.configure(awsconfig);

const Available = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRoom();
  }, []);

  // fetch room from dynamoDB
  const fetchRoom = async () => {
    try {
      const roomData = await API.graphql(graphqlOperation(listRooms));
      const roomList = roomData.data.listRooms.items.filter((room) => room.resident_name === "-" & room.contact_name === "-");
      console.log("room list", roomList);
      setRooms(roomList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-5">
          <span style={{ color: "#f7a440" }}>☾</span>{" "}
          <span style={{ color: "#ec686a" }}>Avai</span>
          <span style={{ color: "#ed8984" }}>lable</span>{" "}
          <span style={{ color: "#f5ad9a" }}>Room</span>
        </h1>
        {/* end header */}
        <hr />
        <div className="row mb-5">
          {rooms.map((room) => (
              <div
                key={room.id}
                className="col-md-6 col-sm-6 col-xs-6 text-center mt-3 mb-3"
              >
                <div className="btn-light room">
                  <h4>{room.id}</h4>
                  <p>{room.room_name}</p>
                  <Link
                    to={`/room-detail/${room.id}`}
                    className="btn btn-outline-secondary"
                  >
                    view room detail
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Available;
