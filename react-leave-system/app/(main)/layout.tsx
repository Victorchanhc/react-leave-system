import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Col, Row } from "react-bootstrap";
import { SideNavbar } from "../../components/SideNavbar";
import SideBar from "../../components/SideBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
          <SideNavbar />
        </div>
        <div>
          <Row className=" vh-100">
              <SideBar />
            <Col>
              {props.children}
            </Col>
          </Row>
        </div>
      </body>
    </html>
  );
}
