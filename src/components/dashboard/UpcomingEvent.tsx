import { Box } from "@chakra-ui/react";
import React from "react";
import Typography from "../common/Typograph";
import CreateEvent from "../modals/CreateEvent";
import UpcomingEventDisplay from "./UpcomingEventDisplay";

const UpcomingEvent = () => {
  // const [isEvent, setIsEvent] = useState<boolean>(false);
  // const handleEvent = () => {
  //     setIsEvent(!isEvent);
  // };
  const isEvent = true;
  return (
    <Box
      maxW="22rem"
      // maxH="10rem"
      overflowY={"hidden"}
      py="1.34rem"
      px="1.36rem"
      rounded={"0.54844rem"}
      style={{ border: "0.8px solid #DEEBFD" }}
      bgColor={"white"}
      boxShadow={
        "-7.02019px 10.53028px 15.79542px 0px rgba(218, 222, 232, 0.50)"
      }
    >
      <Typography fontSize={"0.9375rem"} fontWeight={"600"}>
        {" "}
        {isEvent ? "Upcoming event" : "Got an Upcoming event?"}
      </Typography>

      {/* Event Section */}
      {isEvent ? <UpcomingEventDisplay /> : <CreateEvent />}
    </Box>
  );
};

export default UpcomingEvent;
