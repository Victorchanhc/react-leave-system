import type { Metadata } from "next";
import "./admin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Col, Row } from "react-bootstrap";
import { AdminSideNavbar } from "../../admin-components/AdminSideNavbar";
import AdminSideBar from "../../admin-components/AdminSideBar";

export const metadata: Metadata = {
  title: "React-leave-system",
  description: "React-leave-system",
};

interface ReactLayoutProps {
  children: React.ReactNode
}

export default function RootLayout(props: ReactLayoutProps) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div>
          <AdminSideNavbar />
        </div>
        <div>
          <Row className=" vh-100">
              <AdminSideBar />
            <Col>
              {props.children}
            </Col>
          </Row>
        </div>
      </body>
    </html>
  );
}
