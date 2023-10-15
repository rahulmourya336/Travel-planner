import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import TrainIcon from "@mui/icons-material/Train";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import Tooltip from "@mui/material/Tooltip";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import HikingIcon from "@mui/icons-material/Hiking";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Checkbox from "@mui/material/Checkbox";
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist";
// circular progress bar
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const WA_GROUP_LINK = "https://chat.whatsapp.com/GgaRfiF5nY25s432vpqByk";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "lightgray",
        borderRadius: "55px"
      }}
    >
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const itineraries = [
  {
    _id: "a",
    date: "4 Nov (Sat)",
    from: "vadodara",
    to: "ahemdabad",
    title: "Vadodara - Ahmedabad",
    notes: ["03:50 PM - 05:25 PM (1h 35m)"],
    people: ["R", "R"],
    icon: TrainIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "b",
    date: "4 Nov (Sat)",
    from: "AHMEDABAD",
    to: "delhi",
    notes: ["06:50 PM - 07:30 AM (12h)", `🍴 Meals Included +4`],
    people: [],
    icon: TrainIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "c",
    date: "5 Nov (Sun)",
    from: "delhi",
    to: "rishikesh",
    fromTooltip: `R.K. Ashram Marg - IntrCity Lounge
    Opp Metro Pillar No.9, R.K. Ashram
    Marg Metro Station Panchkuian Marg
    (Delhi)`,
    toTooltip: `Nepali Farm - Under New Flyover`,
    notes: [
      "10:15 AM - 04:30 PM (6h)",
      "BUS: UK-07-PA-7999 (OTP: 973912)",
      "SEAT: 2E, 2D, 2G, 2F"
    ],
    ticketLink: WA_GROUP_LINK,
    icon: DirectionsBusIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "d",
    date: "5 Nov (Sun)",
    from: "rishikesh",
    notes: [
      "OVERNIGHT STAY",
      "Note: Travel Booking on day before journey (₹800 - ₹1000)"
    ],
    ticketLink: WA_GROUP_LINK,
    icon: NightsStayIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "e",
    date: "6 Nov (Mon)",
    from: "rishikesh",
    to: "sonprayag",
    fromTooltip: "Natraj Chowk (DDN)",
    toTooltip: `Sitapur Bus Stand`,
    notes: [
      "6:30 AM - 05:30 PM (11h)",
      "** On-Spot Transport Booking",
      "Route: Rishikesh - Devprayag - Srinagar - Rudraprayag - Augustmuni - Guptkashi -  Sonprayag"
    ],
    icon: DirectionsBusIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "f",
    date: "6 Nov (Mon)",
    from: "gaurikund",
    notes: ["OVERNIGHT STAY", "Note: Locker (Cloakroom)- early exit"],
    ticketLink: WA_GROUP_LINK,
    icon: NightsStayIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "g",
    date: "7 Nov (Tue)",
    from: "gaurikund",
    to: "KEDARNATH",
    notes: [
      "6:00 AM - 5:30 PM (12h)",
      "Daily, Temple opens at 7 am, closes around lunch, then opens at 5 pm, the evening Aarti starts around 6-6:30 after that temple closes. "
    ],
    icon: HikingIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "h",
    date: "7 Nov (Tue)",
    from: "kedarnath",
    notes: ["OVERNIGHT STAY"],
    ticketLink: WA_GROUP_LINK,
    icon: NightsStayIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "hh",
    date: "8 Nov (Wed)",
    from: "kedarnath Jyotirlinga",
    notes: ["Temple Darshan"],
    ticketLink: WA_GROUP_LINK,
    icon: TempleBuddhistIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "i",
    date: "8 Nov (Wed)",
    from: "kedarnath",
    to: "gaurikund",
    notes: ["9:00 AM to 6:00 PM (7h)"],
    icon: HikingIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "j",
    date: "8 Nov (Wed)",
    from: "sonprayag",
    notes: ["OVERNIGHT STAY", "** On-spot booking"],
    ticketLink: WA_GROUP_LINK,
    icon: NightsStayIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "k",
    date: "9 Nov (Thu)",
    to: "haridwar",
    from: "SONPRAYAG",
    notes: ["7:30 AM - 07:30 PM (12h)", "** On-spot booking"],
    icon: DirectionsBusIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "l",
    date: "9 Nov (Thu)",
    from: "HARIDWAR",
    notes: ["OVERNIGHT STAY", "** On-spot booking"],
    icon: NightsStayIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "m",
    date: "10 Nov (Fri)",
    from: "Relax Day!",
    icon: WbSunnyIcon,
    style: { paddingTop: "20px", textTransform: "uppercase" }
  },
  {
    _id: "n",
    date: "11 Nov (Sat)",
    from: "haridwar",
    to: "delhi",
    fromTooltip: "Haridwar Railway Station",
    toTooltip: `(ANVT) Anand Vihar Terminus`,
    notes: ["08:04 AM - 11:45 AM (3h 37m)", "🍴 Meals Included +2"],
    icon: DirectionsBusIcon,
    style: { textTransform: "uppercase" }
  },
  {
    _id: "o",
    date: "11 Nov (Sat)",
    from: "DELHI (DEL)",
    to: "Jaipur",
    fromTooltip: "Old Delhi Railway Station",
    toTooltip: `Jaipur Jn`,
    notes: ["03:20 PM - 08:15 PM (5h)", " No Meals Included"],
    icon: TrainIcon,
    people: ["S"],
    style: { textTransform: "uppercase" }
  },
  {
    _id: "p",
    date: "11 Nov (Sat)",
    from: "DELHI(NZH)",
    to: "Vadodara",
    fromTooltip: "Hazrat Nizamuddin railway station",
    toTooltip: `Vadodara Jn`,
    notes: ["05:15 PM - 04:30 AM (11h)", " No Meals Included"],
    icon: TrainIcon,
    people: ["R", "R", "H"],
    style: { textTransform: "uppercase" }
  }
];

export default function CustomizedTimeline() {
  const [tripProgress, setTripProgress] = React.useState(0);
  React.useEffect(() => {
    updateView();
  }, []);

  const updateView = () => {
    const itenaryMap = getItenaryObject();
    Object.keys(itenaryMap)?.map((x) => {
      toggleVisibility(itenaryMap[x], x);
      console.log("Update view", itenaryMap[x], x);
    });
    updateTripProgress();
  };

  const getItenaryObject = (filterOnlyChecked = false) => {
    const data = Object.keys(localStorage);
    const blackList = ["running", "__test__"];
    const itenaryMap = {};

    for (let i = 0; i < data.length; i++) {
      const _e = data[i];
      if (!blackList.includes(_e)) {
        const checked =
          localStorage?.getItem(_e) === "true" ? true : false || false;
        if (filterOnlyChecked) {
          if (checked) {
            itenaryMap[_e] = checked;
          }
        } else {
          itenaryMap[_e] = checked;
        }
      }
    }
    return itenaryMap;
  };

  const updateTripProgress = () => {
    const itenaryMap = getItenaryObject(true);
    const itenariesCount = itineraries.length;
    const completedItenaryCount = Object.keys(itenaryMap)?.length || 0;
    const currentProgressCount = Math.ceil(
      (completedItenaryCount / itenariesCount) * 100
    );
    setTripProgress(currentProgressCount);
  };

  const handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  const toggleVisibility = (checked, main) => {
    console.log(
      `CHK: ${checked}, MAIN: ${main}, SUB: ${main + "a"}, TRI: ${main + "b"}`
    );
    const ele1 = document.getElementById(main);
    const ele2 = document.getElementById(main + "a");
    const ele3 = document.getElementById(main + "b");
    console.log(ele1, ele2, ele3);
    if (ele1 && ele2 && ele3) {
      if (checked) {
        ele1.style.opacity = "0.4";
        ele2.style.visibility = "hidden";
        ele3.style.visibility = "hidden";
        localStorage.setItem(main, true);
      } else {
        ele1.style.opacity = "1";
        ele2.style.visibility = "visible";
        ele3.style.visibility = "visible";
        localStorage.setItem(main, false);
      }
      updateTripProgress();
    } else {
      console.info("element is blank");
    }
  };

  return (
    <>
      <Timeline>
        <Typography variant="body2" sx={{ margin: "10px 40px 10px 0px" }}>
          START OF JOURNEY
          <CircularProgressWithLabel value={tripProgress} />
        </Typography>

        {itineraries?.map((itinary, idx) => (
          <>
            <TimelineItem id={itinary._id}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
                padding="5px"
              >
                <Checkbox
                  size="small"
                  onChange={(e) =>
                    toggleVisibility(e.target.checked, itinary._id)
                  }
                />
                {itinary.date}
              </TimelineOppositeContent>
              <TimelineSeparator id={itinary._id + "a"}>
                <TimelineConnector />
                <TimelineDot>{<itinary.icon />}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{ py: "12px", minWidth: "175px" }}
                id={itinary._id + "b"}
              >
                {itinary.fromTooltip || itinary.toTooltip ? (
                  <>
                    <Tooltip
                      title={itinary.fromTooltip}
                      arrow
                      sx={{
                        padding: "0px",
                        justifyContent: "left",
                        minWidth: "0",
                        marginRight: "3px"
                      }}
                      leaveDelay={1500}
                    >
                      <Button>{itinary.from}</Button>
                    </Tooltip>
                    -
                    <Tooltip
                      title={itinary.toTooltip}
                      arrow
                      sx={{
                        padding: "0px",
                        justifyContent: "left",
                        marginLeft: "3px"
                      }}
                      leaveDelay={2500}
                    >
                      <Button>{itinary.to}</Button>
                    </Tooltip>
                  </>
                ) : (
                  <Typography
                    variant="subtitle2"
                    component="span"
                    style={itinary.style}
                  >
                    {itinary.from ? itinary.from : null}
                    {itinary.to ? " - " + itinary.to : null}
                  </Typography>
                )}
                <br />

                {itinary?.notes?.map((note, idx) => (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      display: "block",
                      margin: "4px 0"
                    }}
                    component="span"
                    key={idx}
                  >
                    {note}
                  </Typography>
                ))}

                {itinary.ticketLink ? (
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                    component="span"
                  >
                    <a
                      href={itinary.ticketLink}
                      style={{ textDecoration: "none" }}
                    >
                      Ticket Link{" "}
                      <ArrowOutwardIcon
                        variant="small"
                        sx={{ fontSize: "10px" }}
                      />
                    </a>
                  </Typography>
                ) : null}

                {itinary?.people?.length ? (
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{ color: "text.secondary" }}
                  >
                    <Stack direction="row" sx={{ marginTop: "6px" }}>
                      {itinary?.people?.map((people, idx) => (
                        <Chip
                          key={idx}
                          label={people}
                          variant="outlined"
                          size="small"
                          color="default"
                          sx={{
                            color: "text.secondary",
                            fontSize: "10px",
                            marginRight: "5px"
                          }}
                        />
                      ))}
                    </Stack>
                  </Typography>
                ) : null}
              </TimelineContent>
            </TimelineItem>
          </>
        ))}

        <Typography variant="body2" sx={{ margin: "10px 40px 10px 0px" }}>
          <span role="img" aria-label="emoji">
            🪔
          </span>{" "}
          END OF JOURNEY. HAPPY DIWALI{" "}
          <span role="img" aria-label="emoji">
            🪔
          </span>
        </Typography>
        <Typography
          variant="overline"
          sx={{ margin: "80px 40px 10px 0px", cursor: "pointer" }}
          color="text.warning"
          onClick={() => handleReset()}
          role="button"
        >
          RESET STORAGE
        </Typography>
      </Timeline>
    </>
  );
}
