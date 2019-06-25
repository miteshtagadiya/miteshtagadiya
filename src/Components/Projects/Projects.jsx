import React, { Component } from "react";
import MyProfile from "../../assets/myprofile/myprofile.png";
import MyProfile1 from "../../assets/myprofile/MyProfile1.png";
import MyProfileUser1 from "../../assets/myprofile/MyProfile User1.png";
import MyProfileUser2 from "../../assets/myprofile/MyProfile User2.png";
import MyProfileSubAdmin1 from "../../assets/myprofile/MyProfileSubAdmin1.png";
import MyProfileSubAdmin2 from "../../assets/myprofile/MyProfileSubAdmin2.png";
import MyProfileSubAdmin3 from "../../assets/myprofile/MyProfileSubAdmin3.png";
import MyProfileSubAdmin4 from "../../assets/myprofile/MyProfileSubAdmin4.png";
import MyProfileSubAdmin5 from "../../assets/myprofile/MyProfileSubAdmin5.png";
import MyProfileSubAdmin6 from "../../assets/myprofile/MyProfileSubAdmin6.png";
import MyProfileSubAdmin7 from "../../assets/myprofile/MyProfileSubAdmin7.png";
import MyProfileSubAdmin8 from "../../assets/myprofile/MyProfileSubAdmin8.png";
import MyProfileAdmin1 from "../../assets/myprofile/MyProfileAdmin1.png";
import MyProfile12 from "../../assets/myprofile/MyProfile12.png";
import MyProfileAdmin3 from "../../assets/myprofile/MyProfileAdmin3.png";
import MyProfileAdmin4 from "../../assets/myprofile/MyProfileAdmin4.png";
import MyProfileAdmin5 from "../../assets/myprofile/MyProfileAdmin5.png";
import AutoAttendance1 from "../../assets/autoattendance/AutoAttendance1.png";
import AutoAttendance2 from "../../assets/autoattendance/AutoAttendance2.png";
import AutoAttendance3 from "../../assets/autoattendance/AutoAttendance3.png";
import AutoAttendance4 from "../../assets/autoattendance/AutoAttendance4.png";
import AutoAttendance5 from "../../assets/autoattendance/AutoAttendance5.png";
import AutoAttendance6 from "../../assets/autoattendance/AutoAttendance6.png";
import kruma1 from "../../assets/kruma/Kruma1.png";
import kruma2 from "../../assets/kruma/Kruma2.png";
import kruma3 from "../../assets/kruma/Kruma3.png";
import kruma4 from "../../assets/kruma/Kruma4.png";
import kruma5 from "../../assets/kruma/Kruma5.png";
import kruma6 from "../../assets/kruma/Kruma6.png";
import kruma7 from "../../assets/kruma/Kruma7.png";
import kruma8 from "../../assets/kruma/Kruma8.jpg";
import Table1 from "../../assets/Table/Table1.png";
import Table2 from "../../assets/Table/Table2.png";
import Table3 from "../../assets/Table/Table3.png";
import Delimiter from "../../assets/delimiter.png";
import Validate from "../../assets/validate.png";
import npm from "../../assets/npm1.jpg";
import Qr from "../../assets/Qr/Qr.png";
import Qr1 from "../../assets/Qr/QR1.png";
import ReactJson from "react-json-view";
import "./Projects.sass";
import ProjectCard from "./ProjectCard/ProjectCard";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLabel: false,
    };
  }

  onMouseEnter = () => {
    this.setState({
      showLabel: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      showLabel: false,
    });
  };

  render() {
    let myProfileDetails = (
      <React.Fragment>
        <label>
          The project is based on multiple skills search on a single platform,
          Users can search multiple skills and it displays related to that
          skills. If user wants any engineer for build software, if a user wants
          any architecture or if users want any electricians etc. then users can
          go to our website and search the skill or person which they want and
          our system displays all registered persons details and description and
          user can find them and contact directly.
        </label>
        <label>The project is divided into three parts:</label>
        <br />
        <label style={{ fontWeight: "bold", color: "#fcca7b" }}>1. User</label>
        <br />
        <label style={{ fontWeight: "bold", color: "#fcca7b" }}>
          2. SubAdmin
        </label>
        <br />
        <label style={{ fontWeight: "bold", color: "#fcca7b" }}>
          3. SuperAdmin
        </label>
        <br />
        <label>
          In the home page of the system, an Only search bar is provided and the
          user can log in and registers from the homepage.
        </label>
        <br />
        <label>
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>1.User:</span>{" "}
          The user can search skill or person by name and our system is displays
          the details of all the registered users of that particular skill. the
          user can also visit their website which is built in our system and
          contact them by their details provided on their website. Users can
          also view that person's past portfolio and their education details
          also.
        </label>
        <br />
        <label>
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            {" "}
            2.SubAdmin:
          </span>{" "}
          One of the major parts in this system is sub admin. SubAdmin is the
          person who has a particular skill in particular area, If that person
          wants the work based on their skill than they Will register in our
          system and add the details.If Super Admin Approve that person then
          that person can add it's details into the system, SubAdmin can add
          following Details into the system.
        </label>
        <br />
        <label>
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            1. Profile:
          </span>{" "}
          They can add their profile picture or details.
          <br />{" "}
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            2. Education:{" "}
          </span>
          They can add their education details and degree details and also
          updates and delete the educations. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            3. Skill:
          </span>{" "}
          Users(SubAdmin) can add their skills. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            4. Portfolio:
          </span>{" "}
          Users can add their Portfolio details, In this user can add their past
          work or experience details with images. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            5. Portfolio Image:{" "}
          </span>
          Users can add their particular portfolio images, User can add 10
          images at a time. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            6. ContactUs:
          </span>{" "}
          Users can add Contact details and add their location also. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            7. Keyword:{" "}
          </span>
          User can add the keyword for Searching.This is used and help us to
          find the particular skill. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            8. Theme:{" "}
          </span>
          User can select and apply theme for his/her choice, This theme
          displays all details about that particular user(SubAdmin) and the user
          can also preview that theme. this theme is used for building a website
          for that particular user when end user searches that person than the
          end user can view this website for the view that person details.
        </label>
        <br />
        <label>
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            3.SuperAdmin:
          </span>{" "}
          SuperAdmin is Handle all the User who is registered in the system,
          SuperAdmin can approve, Disapprove and suspend the existing users and
          also view the details about how many users are registered today, how
          many users are active now, and how many users are suspended. these
          details are displayed in the dashboard of the admin side. Super admin
          can Add the Following Details:
        </label>
        <br />
        <label>
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            1. Category:
          </span>{" "}
          SuperAdmin can Add and Update category.This is used in the subAdmin
          side.Subadmin can select that category. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            2. Field:
          </span>{" "}
          SuperAdmin can Add Fields For particular category and also updates the
          fields. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            3. Type:
          </span>{" "}
          SuperAdmin can Add and update user type (Employee, CEO,etc.). <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            4. Theme:
          </span>{" "}
          SuperAdmin can Add and Update Theme for providing to sub admin.
        </label>
      </React.Fragment>
    );

    let autoAttendanceDetails = (
      <React.Fragment>
        <label>
          The purpose of this system is to provide a better way of taking
          attendance during lecture. A solution that will take less time and
          effort on faculty side as well as the student side .The system will
          help them in keeping track of attendance and make it easier for
          faculty to check for grading.
          <br />
          The scope of the project is DAIICT in which the software would be
          installed by Admin as well as Students. The project is developed as an
          Android Application, Web Application. The project would operate only
          under the boundaries of DAIICT.
        </label>

        <label>
          My role in this project is create a web application for
          AutoAttendance.
        </label>
        <br />

        <label>
          By using this application faculty will login to the system and select
          the course and session period for QR code, and then QR code is
          displayed on the screen, students will scan QR code in their mobiles,
          student must scan 70% of QR that are displayed in the screen, after
          session time is over faculty closes the attendance.
        </label>
      </React.Fragment>
    );

    let krumaDetails = (
      <React.Fragment>
        <label>
          Kruma Chemicals is manufacturing a wide range of nutritional protein
          powder and weight gainer and related to the food product. I develop an
          Ionic app For Kruma Chemicals. This app is related to product list and
          price list of the company's product.
        </label>
      </React.Fragment>
    );

    let TableDetails = (
      <React.Fragment>
        <label>Responsive Data Table with Searching, Sorting, Pagination</label>
        <br />
        <label>
          Following Props are included in Table: <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>data - </span>
          You have to pass data and head objects in data prop. head is for
          Header. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            tableStyle -
          </span>{" "}
          Bootstrap Table class name <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            style -
          </span>{" "}
          Style for Table Header <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            pages -
          </span>{" "}
          Boolean. Shows Pages Option to display number of records per
          page.[5,10,20,25,50]
          <br />{" "}
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            pagination -
          </span>{" "}
          Boolean. Shows Pagination if true.
          <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            page -
          </span>{" "}
          Boolean. Shows Current page out of total pages if true. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            title -
          </span>{" "}
          String. Title for Table. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            search -
          </span>{" "}
          Boolean. Shows Searchbar if true.
          <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            size -
          </span>{" "}
          Number Of Records that Shows in single page. You can Onle use
          5,10,20,25,50. <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            errormsg -
          </span>{" "}
          Error message.(Default is Error. . .)
          <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            loadingmsg -
          </span>{" "}
          Loading message. (Default is Loading. . .) <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            isLoading -
          </span>{" "}
          Boolean. Default is false <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            sort -
          </span>{" "}
          Boolean. <br />{" "}
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            onRowClick -
          </span>{" "}
          Function. You can redirect to another page by onRowClick, you can call
          any function by onRowClick, You can also get Row Data by onRowClick
          using "(row => console.log(row))".
        </label>
      </React.Fragment>
    );

    let delimiterDetails = (
      <React.Fragment>
        <label>
          Array Delimiter(Deliminate last number or string with "and" or "or").
        </label>
        <br />
        <label>
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            Props Details:{" "}
          </span>
        </label>
        <br />

        <label>
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>array -</span>{" "}
          Array of Numbers or Strings
          <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            String -
          </span>{" "}
          String (Deliminate number or string by this string)
        </label>
        <br />
        <label>
          <table style={{ border: "1px solid #7ef0ff" }}>
            <th style={{ border: "1px solid #7ef0ff" }}>
              <td>Input</td>
            </th>
            <th style={{ border: "1px solid #7ef0ff" }}>
              <td>Output</td>
            </th>
            <tr style={{ border: "1px solid #7ef0ff" }}>
              <td style={{ border: "1px solid #7ef0ff" }}>
                delimiter([1, 2, 3], "and")
              </td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"1, 2 and 3"}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #7ef0ff" }}>
                delimiter([1, 2, 3], "or")
              </td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"1, 2 or 3"}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #7ef0ff" }}>
                delimiter([1, 2], "or")
              </td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"1 or 2"}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #7ef0ff" }}>
                delimiter([1, 2], "and")
              </td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"1 and 2"}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #7ef0ff" }}>
                delimiter([1], "or")
              </td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"1"}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #7ef0ff" }}>
                delimiter([1], "and")
              </td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"1"}</td>
            </tr>
          </table>
        </label>
      </React.Fragment>
    );

    let validateDetails = (
      <React.Fragment>
        <label>
          Input validation for null, undefined, Infinity and NaN values.{" "}
        </label>
        <br />
        <label>
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>
            Props Details:
          </span>
          <br />
          <span style={{ fontWeight: "bold", color: "#fcca7b" }}>value: </span>
          Number or String
          <br />
        </label>
        <br />
        <label>
          <table style={{ border: "1px solid #7ef0ff" }}>
            <th style={{ border: "1px solid #7ef0ff" }}>
              <td>Input</td>
            </th>
            <th style={{ border: "1px solid #7ef0ff" }}>
              <td>Output</td>
            </th>
            <tr style={{ border: "1px solid #7ef0ff" }}>
              <td style={{ border: "1px solid #7ef0ff" }}>validate(123)</td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"123"}</td>
            </tr>
            <tr style={{ border: "1px solid #7ef0ff" }}>
              <td style={{ border: "1px solid #7ef0ff" }}>
                validate(undefined)
              </td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"N/A"}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #7ef0ff" }}>validate(null)</td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"N/A"}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #7ef0ff" }}>
                validate(Infinity)
              </td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"-"}</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #7ef0ff" }}>validate(NaN)</td>
              <td style={{ border: "1px solid #7ef0ff" }}>{"N/A"}</td>
            </tr>
          </table>
        </label>
      </React.Fragment>
    );

    let packageDetails = (
      <React.Fragment>
        <label>Creates React component and publish it on npm.</label>
        <br />
        <label>
          BoilerPlate code is created by Create React App 1, Follow Instructions
          given to github pages for create package.
        </label>
        <br />
        <label style={{ fontWeight: "bold", color: "#fcca7b" }}>
          package.json
        </label>
        <label>
          <ReactJson
            theme="monokai"
            src={[
              {
                name: "boilerplate",
                version: "0.1.0",
                private: true,
                dependencies: {
                  "react-scripts": "1.1.4",
                },
                scripts: {
                  start: "webpack-dev-server --mode development",
                  test: "react-scripts test --env=jsdom",
                  eject: "react-scripts eject",
                  transpile: "babel src -d dist --copy-files",
                  prepublishOnly: "npm run transpile",
                  build: "webpack --mode production",
                  deploy: "gh-pages -d examples/dist",
                  "publish-demo": "npm run build && npm run deploy",
                },
                description:
                  "This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).",
                main: "dist/index.js",
                peerDependencies: {
                  react: "^16.3.0",
                  "react-dom": "^16.3.0",
                },
                devDependencies: {
                  "babel-cli": "^6.26.0",
                  "babel-core": "^6.26.3",
                  "babel-loader": "^7.1.4",
                  "babel-preset-env": "^1.7.0",
                  "babel-preset-react": "^6.24.1",
                  "css-loader": "^0.28.11",
                  "gh-pages": "^1.2.0",
                  "html-webpack-plugin": "^3.2.0",
                  react: "^16.4.1",
                  "react-dom": "^16.4.1",
                  "style-loader": "^0.21.0",
                  webpack: "^4.15.0",
                  "webpack-cli": "^3.0.8",
                  "webpack-dev-server": "^3.1.4",
                },
                repository: {
                  type: "git",
                  url:
                    "git+https://github.com/miteshtagadiya/package-boilerplate.git",
                },
                keywords: ["boilerplate", "code", "for", "package"],
                author: "Mitesh Tagadiya",
                license: "MIT",
                bugs: {
                  url:
                    "https://github.com/miteshtagadiya/package-boilerplate/issues",
                },
                homepage:
                  "https://github.com/miteshtagadiya/package-boilerplate#readme",
              },
            ]}
          />
        </label>
      </React.Fragment>
    );

    let QrDetails = (
      <React.Fragment>
        <label>Generate Qr code by user input.</label>
      </React.Fragment>
    );
    return (
      <div
        className="container-fluid Projects"
        style={{ marginTop: 70, height: "75vh", overflowY: "scroll" }}
      >
        <div className="row" style={{ justifyContent: "space-around" }}>
          <ProjectCard
            img={MyProfile}
            images={[
              MyProfile,
              MyProfile1,
              MyProfileUser1,
              MyProfileUser2,
              MyProfileSubAdmin1,
              MyProfileSubAdmin2,
              MyProfileSubAdmin3,
              MyProfileSubAdmin4,
              MyProfileSubAdmin5,
              MyProfileSubAdmin6,
              MyProfileSubAdmin7,
              MyProfileSubAdmin8,
              MyProfileAdmin1,
              MyProfile12,
              MyProfileAdmin3,
              MyProfileAdmin4,
              MyProfileAdmin5,
            ]}
            tech="PHP, MySql, CKeditor, jQuery, javaScript, Bootstrap,
                        HTML, CSS"
            isSocial
            header="MyProfile"
            github="https://github.com/miteshtagadiya/MyProfile"
            demo="https://myprofiledemo.000webhostapp.com/"
            program="Bachelors Program"
            projectYear="April, 2016 - June, 2016"
            projectDetails={myProfileDetails}
          />

          <ProjectCard
            img={AutoAttendance1}
            images={[
              AutoAttendance1,
              AutoAttendance2,
              AutoAttendance3,
              AutoAttendance4,
              AutoAttendance5,
              AutoAttendance6,
            ]}
            tech="PHP, MySql, jQuery, javaScript, Bootstrap,
                        HTML, CSS"
            isSocial
            header="AutoAttendance"
            github="https://github.com/miteshtagadiya/AutoAttendance"
            demo="http://autoattendance.000webhostapp.com/"
            program="Masters Program"
            projectYear="September, 2017 - November, 2017"
            members="11 members"
            projectDetails={autoAttendanceDetails}
          />

          <ProjectCard
            img={kruma1}
            images={[
              kruma1,
              kruma2,
              kruma3,
              kruma4,
              kruma5,
              kruma6,
              kruma7,
              kruma8,
            ]}
            tech="Ionic Framework, Angular1, Css"
            isSocial={false}
            header="Kruma Chemicals"
            program="Masters Program"
            projectYear="May, 2017 - July, 2017"
            projectDetails={krumaDetails}
          />

          <ProjectCard
            img={npm}
            images={[Table1, Table2, Table3]}
            tech="ReactJs, BootStrap, JavaScript"
            isSocial
            header="React Responsive Data Table"
            program="Personal"
            github="https://github.com/miteshtagadiya/react-responsive-data-table"
            demo="https://miteshtagadiya.github.io/react-responsive-data-table/"
            projectYear="June-2018"
            projectDetails={TableDetails}
          />

          <ProjectCard
            img={npm}
            images={[Delimiter]}
            tech="ReactJs, JavaScript"
            isSocial
            header="React Delimiter"
            program="Personal"
            github="https://github.com/miteshtagadiya/react-delimiter"
            demo="https://miteshtagadiya.github.io/react-delimiter/"
            projectYear="September-2018"
            projectDetails={delimiterDetails}
          />

          <ProjectCard
            img={npm}
            images={[Validate]}
            tech="ReactJs, JavaScript"
            isSocial
            header="React Input Validate"
            program="Personal"
            github="https://github.com/miteshtagadiya/react-input-validate"
            demo="https://miteshtagadiya.github.io/react-input-validate/"
            projectYear="September-2018"
            projectDetails={validateDetails}
          />

          <ProjectCard
            img={npm}
            images={[npm]}
            tech="ReactJs, JavaScript, Create-React-App"
            isSocial
            header="Package Boilerplate"
            program="Personal"
            github="https://github.com/miteshtagadiya/package-boilerplate"
            demo="https://github.com/miteshtagadiya/package-boilerplate"
            projectYear="August-2018"
            projectDetails={packageDetails}
          />

          <ProjectCard
            img={Qr}
            images={[Qr, Qr1]}
            tech="Php, Bootstrap, HTML, CSS"
            isSocial
            header="Qr Code As a Service"
            program="Personal"
            github="https://github.com/miteshtagadiya/Qrcode-as-a-service"
            demo="https://myprofiledemo.000webhostapp.com/QRCode/index.php"
            projectYear="December-2018"
            projectDetails={QrDetails}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
