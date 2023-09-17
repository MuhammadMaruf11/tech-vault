import React from "react";
import { Link } from "react-router-dom";

import profile from "../../assets/img/team/profile.jpg";
import profile6 from "../../assets/img/team/profile-6.jpg";

const AboutUsTeam = () => {
  return (
    <>
      <div className="team-area fix">
        <div className="container">
          <div className="row mb-5 pb-5">
            <div className="col-md-6">
              <div
                class=" profile-wrap wow animate__zoomIn"
                data-wow-delay=".3s"
                style={{ width: "416px" }}
              >
                <div class="profile-img-top">
                  {" "}
                  <img src={profile} alt="" />
                </div>{" "}
                <div class="profile-body text-center">
                  <h5 class="profile-title mb-0">MD. A.G. MAHMUD</h5>
                  <small>Chairman</small>
                </div>
                <div className="profile-social">
                  <Link className="px-2" to="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link className="px-2" to="#">
                    <i class="fa-brands fa-github"></i>
                  </Link>
                  <Link className="px-2" to="#">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link className="px-2" to="#">
                    <i class="fa-solid fa-envelope"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="speech-wrap">
                <h2>Empowering Tomorrow: Our Journey in Software Solutions</h2>
                <p className="wow animate__fadeInUp" data-wow-delay=".2s">
                  I stand before you today as the Chairman of Tech Vault Ltd and
                  it is with immense pride and gratitude that I share our
                  journey in the realm of software solutions.
                </p>
                <p className="wow animate__fadeInUp" data-wow-delay=".4s">
                  From our inception 2020, we embarked on a mission to create a
                  company that not only delivers exceptional software solutions
                  but also sets new standards for innovation and
                  client-centricity.
                </p>
                <p className="wow animate__fadeInUp" data-wow-delay=".6s">
                  In a world where technology shapes the present and defines the
                  future, our commitment to excellence has been unwavering. We
                  have worked tirelessly to understand the evolving needs of
                  businesses, to anticipate challenges, and to craft solutions
                  that not only address today's problems but also empower you
                  for tomorrow's opportunities.
                </p>
                <p className="wow animate__fadeInUp" data-wow-delay=".8s">
                  Our success story is not just about lines of code or software
                  development milestones; it's about the people who have trusted
                  us with their visions and challenges. It's about the
                  transformative impact we've had on businesses, large and
                  small, across diverse industries.
                </p>
                <p className="wow animate__fadeInUp" data-wow-delay="1s">
                  Thank you for choosing Tech Vault Ltd as your software
                  solutions partner. Together, we will empower tomorrow and
                  shape a brighter future.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="speech-wrap">
                <h2>Innovation: Pioneering the Future of Software Solutions</h2>
                <p className="wow animate__fadeInUp" data-wow-delay=".2s">
                  I stand before you today as the Managing Director of Tech
                  Vault Ltd, a beacon of innovation in the realm of software
                  solutions. It is both an honor and a privilege to address you
                  on this momentous occasion as we reflect on our journey and
                  set our sights on the path ahead.
                </p>
                <p className="wow animate__fadeInUp" data-wow-delay=".4s">
                  Our journey, which began 2020, is a testament to the power of
                  innovation. In an era defined by rapid technological change,
                  we understood early on that our mission was not simply to
                  adapt to the future, but to actively shape it. And that
                  mission continues to drive us forward.
                </p>
                <p className="wow animate__fadeInUp" data-wow-delay=".6s">
                  At the heart of our success are the dedicated individuals who
                  make up the [Your Company Name] family. Our teams of
                  engineers, designers, developers, and visionaries are the
                  driving force behind our innovations. Their tireless
                  dedication to pushing the boundaries of what's possible is
                  what sets us apart.
                </p>
                <p className="wow animate__fadeInUp" data-wow-delay=".8s">
                  Thank you for being with us on this remarkable journey. The
                  future is bright, and together, we will illuminate it.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div
                class=" profile-wrap wow animate__zoomIn"
                data-wow-delay=".3s"
                style={{ width: "416px" }}
              >
                <div class="profile-img-top">
                  {" "}
                  <img src={profile6} alt="" />
                </div>{" "}
                <div class="profile-body text-center">
                  <h5 class="profile-title mb-0">MOTAHARUL JANAN</h5>
                  <small>Managing Director</small>
                </div>
                <div className="profile-social">
                  <Link className="px-2" to="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link className="px-2" to="#">
                    <i class="fa-brands fa-github"></i>
                  </Link>
                  <Link className="px-2" to="#">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link className="px-2" to="#">
                    <i class="fa-solid fa-envelope"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsTeam;
