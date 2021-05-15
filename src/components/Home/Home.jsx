import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.css";
// AWS import
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { listRooms } from "../../graphql/queries.js";

Amplify.configure(awsconfig);

const Home = () => {
  const [search, setSearch] = useState("");

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRoom();
  }, []);

  // fetch room from dynamoDB
  const fetchRoom = async () => {
    try {
      const roomData = await API.graphql(graphqlOperation(listRooms));
      const roomList = roomData.data.listRooms.items;
      console.log("room list", roomList);
      setRooms(roomList);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-5">
          <span style={{ color: "#f7a440" }}>☾</span>{" "}
          <span style={{ color: "#ec686a" }}>Hospitel</span>{" "}
          <span style={{ color: "#ed8984" }}>Del</span>{" "}
          <span style={{ color: "#f5ad9a" }}>Luna</span>
        </h1>
        <div className="row mt-3 text-center">
          <div className="col-md-8 col-sm-8 col-xs-8 mt-3">
            <input
              value={search}
              onChange={onChange}
              type="search"
              className="form-control input-lg"
              placeholder="Enter search residents's name"
              style={{ borderRadius: 10 }}
            />
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4 mt-3">
            <Link
              to="/available"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Show Available Room
            </Link>
          </div>
        </div>
        {/* end header */}
        <hr />

        <div className="row mb-5">
          {rooms
            .filter((room) => room.resident_name.includes(search)).sort((a, b) => a.id - b.id)
            .map((filterroom) => (
              <div
                key={filterroom.id}
                className="col-md-6 col-sm-6 col-xs-6 text-center mt-3 mb-3"
              >
                <div className="btn-light room rounded">
                  <h4>{filterroom.id}</h4>
                  <p>ROOM: {filterroom.room_name}</p>
                  <Link
                    to={`/room-detail/${filterroom.id}`}
                    className="btn btn-outline-secondary"
                  >
                    view room detail
                  </Link>
                </div>
              </div>
            ))}
        </div>

        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
