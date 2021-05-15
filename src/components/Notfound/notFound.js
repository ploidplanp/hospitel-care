import React, { Component } from "react";
import Header from './../Header/Header'
import Footer from './../Footer/Footer'

class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          <h1 style={{ fontSize: 120 }}>404</h1>
          <h2>page not found</h2>
          <p className="mb-5 mt-3">
            ขออภัยไม่พบหน้าที่คุณค้นหา ดูเหมือนว่าหน้าเว็บที่คุณพยายามเข้าถึง
            ไม่มีอีกต่อไป
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
