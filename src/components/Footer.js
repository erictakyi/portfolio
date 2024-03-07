import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
          <a href="https://www.linkedin.com/feed/"><img src={navIcon1} alt="Icon" /></a>
<a href="https://www.facebook.com/photo/?fbid=213649097399832&set=a.107486524682757"><img src={navIcon2} alt="Icon" /></a>
<a href="whatsapp://send?phone=0505003248">
  <img src={navIcon3} alt="Icon" />
</a>
<a href="javascript:void(0);" onclick="shareContent()"><img src="share_icon.png" alt="Share Icon" /></a>

</div>

            <p>Copyright 2024. Powered by ENAT technologies</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
