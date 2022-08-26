import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { AiOutlineMail, AiFillPhone, AiFillLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import "./User.css";
import { getdata, iconIndex, dataLoader } from "../redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Card, Alert } from "@mui/material";
import Text from "./Text";
import { Rings } from "react-loader-spinner";
import DataTable from "./DataTable";
import { useState } from "react";

function User() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const data = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);

  const loading = useSelector((state) => state.isLoading);
  console.log(data, "data");

  const dataHandler = () => {
    dispatch(getdata(setError));
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
        <Card
          sx={{
            width: 750,
            backgroundColor: "rgb(235, 245, 245)",
            margin: "auto",
            marginBottom: 10,
          }}
        >
          <h2 style={{ padding: "20", marginTop: "5%" }}>
            Click the button to get random users
          </h2>
          <Button
            style={{ padding: "20", marginBottom: "5%" }}
            variant="primary"
            onClick={dataHandler}
          >
            Get User
          </Button>
        </Card>
      </div>
      {error ? (
        <div style={{ width: 750, margin: "auto" }}>
          <Alert severity="error">
            <h4>{error}</h4>
          </Alert>
        </div>
      ) : loading ? (
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
        users.length > 0 && (
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
                  src={data.picture}
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
            <DataTable />
          </div>
        )
      )}
    </div>
  );
}

export default User;
