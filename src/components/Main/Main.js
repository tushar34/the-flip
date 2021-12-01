import React from "react";
import Box from "./Box";
import CardSection from "./CardSection";
import "./Main.scss";
export default function Main() {
  return (
    <div>
      <div
        className="section1"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(79, 63, 165, 0.7),rgba(79, 63, 165, 0.7)),url('/Images/13.jpg')",
        }}
      >
        <div className="container">
          <div className="main_section">
            {/* div-1 */}
            <div className="heading">
              <span>
                A joint venture by TimberBox Renovations Inc. and EVT Capital
                Inc
              </span>
            </div>
            {/* div-2 */}
          </div>
        </div>
      </div>
      <div className="section2" id="whatwedo">
        <div className="container">
          <div className="sect_2">
            {/* 0st div */}
            <div className="imagedescription">
              {/* div-1 */}
              <div className="h_image">
                <img className="heading_image" src="/Images/1.jpg" />
              </div>
              {/* div-2 */}
              <div className="description">
                <h5>why not you? it costs $0</h5>
                <h2>
                  Professional Home Flippers are earning $100k after buying your
                  home.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, amet debitis! Ab perspiciatis necessitatibus, nemo
                  recusandae labore earum dolorum quam doloremque ipsam deserunt
                  pariatur hic laborum debitis eos similique eum.
                </p>
              </div>
            </div>
            {/* 1st div */}
            <div className="title">
              <h5>Don't let others flip your home</h5>
              <h2>This how we can help!</h2>
            </div>
            {/* 2nd div */}
            <div className="row-box">
              <Box
                img="/Images/2.jpg"
                p1="affordable"
                h4="No upfront costs."
                p2="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rem suscipit, quis placeat ab iure numquam maxime ea eveniet
                    itaque odit."
              />
              <Box
                img="/Images/3.jpg"
                p1="Strees Free"
                h4="we'll do the worrying"
                p2="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rem suscipit, quis placeat ab iure numquam maxime ea eveniet
                    itaque odit."
              />
              <Box
                img="/Images/4.jpg"
                p1="profitable"
                h4="Investment maximized"
                p2="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rem suscipit, quis placeat ab iure numquam maxime ea eveniet
                    itaque odit."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <div className="sect_3">
            {/* 1st div */}
            <div className="title sec3_info">
              <h5>inclusive Add-On</h5>
              <h2>We understand</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur in inventore totam excepturi ducimus adipisci
                aspernatur non ipsa labore. Ex cum ipsa esse? Totam, voluptas
                nam repellat quo eligendi neque?
              </p>
            </div>

            {/* 2nd div */}
            <div className="sec3_image">
              <div
                className="s3_image"
                style={{
                  backgroundImage:
                    "linear-gradient(to right,rgba(79, 63, 165, 0.7),rgba(79, 63, 165, 0.7)),url('http://localhost:3000/Images/14.jpg')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section4" id="aboutus">
        <div className="container">
          <div className="sect_4">
            <CardSection
              img="/Images/7.jpg"
              h4="Home Inspection"
              p="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!"
            />
            <CardSection
              img="/Images/8.jpg"
              h4="Decluttering"
              p="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!"
            />
            <CardSection
              img="/Images/9.jpg"
              h4="Staging"
              p="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!"
            />
            <CardSection
              img="/Images/10.jpg"
              h4="Appraisal"
              p="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!"
            />
            <CardSection
              img="/Images/11.jpg"
              h4="moving"
              p="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!"
            />
            <CardSection
              img="/Images/12.jpg"
              h4="Legal Fees"
              p="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!"
            />

            {/* <div className="sec_4_box">
              <img src="/Images/7.jpg" alt="loading" />
              <h4>Home Inspection</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!
              </p>
            </div>
            <div className="sec_4_box">
              <img src="/Images/8.jpg" alt="loading" />
              <h4>Home Inspection</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!
              </p>
            </div>
            <div className="sec_4_box">
              <img src="/Images/9.jpg" alt="loading" />
              <h4>Home Inspection</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!
              </p>
            </div>
            <div className="sec_4_box">
              <img src="/Images/10.jpg" alt="loading" />
              <h4>Home Inspection</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!
              </p>
            </div>
            <div className="sec_4_box">
              <img src="/Images/11.jpg" alt="loading" />
              <h4>Home Inspection</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!
              </p>
            </div>
            <div className="sec_4_box">
              <img src="/Images/12.jpg" alt="loading" />
              <h4>Home Inspection</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                doloribus, ullam sunt consectetur culpa numquam!
              </p>
            
            
            
            
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
