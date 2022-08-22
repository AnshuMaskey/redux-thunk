import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import { AiOutlineMail, AiFillPhone, AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import "./User.css";
import {
  getdata,
  iconIndex,
  dataLoader,
  dataReplace,
} from "../redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Card } from "@mui/material";
import Text from "./Text";
import { Rings } from "react-loader-spinner";

function User() {
  const dispatch = useDispatch();
  // const index = useSelector((state) => state.activeIcon);
  // console.log(index, "index");
  const data = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.isLoading);
  console.log(data, "data");

  const dataHandler = () => {
    dispatch(getdata());
    dispatch(dataLoader(true));
  };

  const activeHandler = (e) => {
    // dispatch(iconIndex(index));
    const key = e.currentTarget.name;
    console.log(key);

    if (key === "name") {
      dispatch(iconIndex(0));
    } else if (key === "mail") {
      dispatch(iconIndex(1));
    } else if (key === "birth") {
      dispatch(iconIndex(2));
    } else if (key === "map") {
      dispatch(iconIndex(3));
    } else if (key === "phone") {
      dispatch(iconIndex(4));
    } else if (key === "lock") {
      dispatch(iconIndex(5));
    }
  };
  return (
    <div className="m-5 ">
      <div className="m-4">
        <Button variant="primary" onClick={dataHandler}>
          Get User
        </Button>
      </div>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15%",
          }}
        >
          <Rings
            height="250"
            width="250"
            color="#4fa94d"
            radius="6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rings-loading"
          />
        </div>
      ) : (
        Object.keys(data).length > 0 && (
          <div>
            <Card
              sx={{
                width: 750,
                backgroundColor: "rgb(235, 245, 245)",
                margin: "auto",
                marginBottom: 10,
              }}
            >
              <div className="m-3 ">
                <Image
                  roundedCircle
                  thumbnail
                  src={data.picture.large}
                  align="center"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h3>
                  <Text user={data} />
                </h3>
              </div>
              <div className="iconsConatiner">
                <div className="icons">
                  <IconButton
                    className="icon"
                    name="name"
                    onMouseEnter={activeHandler}
                  >
                    <BsFillPersonFill size={35} />
                  </IconButton>
                  <IconButton
                    className="icon"
                    name="mail"
                    onMouseEnter={activeHandler}
                  >
                    <AiOutlineMail size={35} />
                  </IconButton>
                  <IconButton
                    className="icon"
                    name="birth"
                    onMouseEnter={activeHandler}
                  >
                    <RiCalendarTodoFill size={35} />
                  </IconButton>
                  <IconButton
                    className="icon"
                    name="map"
                    onMouseEnter={activeHandler}
                  >
                    <FaMapMarkedAlt size={35} />
                  </IconButton>
                  <IconButton
                    className="icon"
                    name="phone"
                    onMouseEnter={activeHandler}
                  >
                    <AiFillPhone size={35} />
                  </IconButton>
                  <IconButton
                    className="icon"
                    name="lock"
                    onMouseEnter={activeHandler}
                  >
                    <AiFillLock size={35} />
                  </IconButton>
                </div>
              </div>
            </Card>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Birthdate</th>
                  <th>Address</th>
                  <th>Phone No.</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((row, index) => {
                    return (
                      <tr onClick={() => dispatch(dataReplace(users[index]))}>
                        <td>
                          {row.name.first} {row.name.last}
                        </td>
                        <td> {row.email}</td>
                        <td>{row.dob.date.slice(0, 10)}</td>
                        <td>
                          {row.location.postcode}, {row.location.city},{" "}
                          {row.location.country}
                        </td>
                        <td>{row.phone}</td>
                        <td> {row.login.password}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        )
      )}
    </div>
  );
}

export default User;
