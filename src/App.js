import "./App.css";
import profile from "./images/IMG_5423.png";
import secodaLogo from "./images/secoda.png";
import { Group, Stack, Box, List } from "@mantine/core";
import commandPalette from "./images/commandPalette.png";
import CardItem from "./components/CardItem";
import Jira from "./images/Jira.png";
import mssql from "./images/mssql.png";
import powerbi from "./images/powerbi.png";
import uw from "./images/uw.png";
import goose from "./images/goose.png";
import spotify from "./images/spotify.png";
import map from "./images/map.png";
import mail from "./images/mail.png";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import PhoneIcon from "@mui/icons-material/Phone";
function App() {
  const mailto = "mailto:elai.mizrahi@gmail.com";
  return (
    <div className="App">
      <header className="App-header">
        <header className="App-header">
          <Stack style={{ paddingTop: "0px", width: "50%" }}>
            <Group style={{ paddingBottom: "50px" }}>
              <img
                src={profile}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  border: "5px solid",
                }}
                alt="Profile"
              ></img>
              <h1>Elai Mizrahi 👋</h1>
            </Group>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.colors.dark[3],
                textAlign: "center",
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                fontSize: theme.fontSizes.xl,
              })}
            >
              <div>
                {" "}
                19 y/o software engineer, student, and aspiring founder
              </div>
              <div
                style={{
                  paddingTop: "20px",
                  textAlign: "center",
                  display: "flex",
                  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                I am currently entering my second year of studying Software
                Engineering at the University of Waterloo. Most recently, I
                completed a co-op term at Secoda, a YC S21 company, developing
                fullstack features for the engineering team. I am now looking
                for a Winter 2024 co-op position in software engineering or a
                related field. You can reach me at emizrahi@uwaterloo.ca, or
                click any of the links at the bottom of the page.
              </div>
            </Box>
            <h2 style={{ textAlign: "left", marginBottom: 0 }}>
              👨‍💻 Experience{" "}
            </h2>
            <Box
              sx={(theme) => ({
                textAlign: "center",
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                fontSize: theme.fontSizes.xl,
                marginTop: 0,
              })}
            >
              <Group>
                <img
                  src={secodaLogo}
                  alt=""
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: "25%",
                  }}
                />
                <div>
                  <h3 style={{ marginBottom: 0 }}>Secoda (YC S21)</h3>
                  <h6
                    style={{
                      marginTop: 0,
                      textAlign: "left",
                      color: "lightgray",
                    }}
                  >
                    Software Engineer Intern
                  </h6>
                </div>
              </Group>
              <Group style={{ width: "1000px" }}>
                <CardItem
                  title="Command Palette"
                  type="feature"
                  description="With the command palette feature, users are able to quickly search through their workspace, create new resources, and navigate through Secoda."
                  image={commandPalette}
                  link={
                    "https://docs.secoda.co/secoda-change-log#august-2-2023-release-7.4.7"
                  }
                  buttonLabel="View in Changelog"
                />
                <CardItem
                  title="Jira Integration"
                  type="feature"
                  description="Secoda's Jira integration allows for users to pull their Jira issues into Secoda as questions, allowing for a seamless connection between the two workspaces"
                  image={Jira}
                  link={
                    "https://docs.secoda.co/integrations/productivity-tools/jira#h_448e650cba"
                  }
                  buttonLabel="View in Documentation"
                />
              </Group>
              <Group style={{ width: "1000px" }}>
                <CardItem
                  title="Power BI Authentication"
                  type="improvement"
                  description="Developed new Power BI Authentication to enable non-admin users to extract reports, datasets, and workflows, importing them into Secoda"
                  image={powerbi}
                  link={
                    "https://docs.secoda.co/integrations/data-visualization-tools/power-bi"
                  }
                  buttonLabel="View in Documentation"
                />
                <CardItem
                  title="MS SQL Stored Procedures"
                  type="feature"
                  description="Developed new MS SQL Stored Procedures to extract lineage MS SQL table's lineage, assigning  responsible queries to their respective lineages"
                  image={mssql}
                  link={
                    "https://docs.secoda.co/integrations/databases/microsoft-sql-server7"
                  }
                  buttonLabel="View in Documentation"
                />
              </Group>
            </Box>
            <Group>
              <img
                src={uw}
                alt=""
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: "25%",
                }}
              />
              <div>
                <h4 style={{ marginBottom: 0 }}>
                  UWaterloo EcoCar Design Team
                </h4>
                <h6
                  style={{
                    marginTop: 0,
                    textAlign: "left",
                    color: "lightgray",
                  }}
                >
                  Software Team
                </h6>
              </div>
              <List
                size={18}
                style={{ color: "white", textAlign: "left", paddingLeft: 100 }}
              >
                <List.Item>
                  Researched methods of creating 3D model of automotive
                  interiors using Blender and Python
                </List.Item>
                <List.Item>
                  Worked in software team, completing tasks in a timely manner
                  to prepare design team for upcoming integration with Cadillac
                  Lyric
                </List.Item>
                <List.Item>
                  Used Git and Github tooling to ensure high quality code
                  production and reviews in an agile development environment
                </List.Item>
              </List>
            </Group>

            <h2 style={{ textAlign: "left" }}>🛠️ Projects </h2>
          </Stack>
          <Group style={{ width: 1500, justifyContent: "center" }}>
            <CardItem
              title="Self Driving RC Car"
              description="Connected a Raspberry Pi Zero to the Raspberry Pi OS, TensorFlow, and Python, detecting objects using their location to control
the car's movement"
              type="Software Engineering 101 Project"
              link="https://drive.google.com/file/d/1Hg6L83-5mZvX0KASZwBild1oKAhvDJ1o/view"
              buttonLabel="View Demo"
              image={goose}
            />
            <CardItem
              title="Encore"
              description="Developed React application to pull user's current listening data from spotify, allowing the user to then review and save each song. Used the Spotify API, React, and MongoDB."
              type="Personal Project"
              link="https://github.com/elaimizrahi/spotify"
              buttonLabel="Github"
              image={spotify}
            />{" "}
            <CardItem
              style={{ alignSelf: "center" }}
              title="MemoryMap (WIP)"
              description="Developed web app to create a ”Memory Map” for users using a React and Typescript front end and a MongoDB and Python
                  back‑end"
              type="Personal Project"
              link="https://github.com/elaimizrahi/spotify"
              buttonLabel="Github"
              image={map}
            />{" "}
          </Group>{" "}
          <Group
            width={1000}
            style={{ justifyContent: "space-around" }}
          ></Group>
          <Stack style={{ paddingTop: "0px", width: "50%" }}>
            <h2 style={{ textAlign: "left" }}>🪐 Skills </h2>
            <Box
              sx={(theme) => ({
                backgroundColor: theme.colors.dark[3],
                textAlign: "left",
                padding: theme.spacing.md,
                paddingTop: 0,
                borderRadius: theme.radius.md,
                fontSize: theme.fontSizes.xl,
              })}
            >
              <Stack spacing={0}>
                <h4 style={{ alignSelf: "left", paddingTop: 0 }}>Languages:</h4>
                <div style={{ fontStyle: "italic", fontSize: "18px" }}>
                  TypeScript, Python, C++, Java, C, Javascript, HTML, CSS, SQL,
                  MSSQL, VHDL
                </div>
                <h4 style={{ alignSelf: "left", padding: 0 }}>
                  Tools and Frameworks:
                </h4>
                <div
                  style={{ fontStyle: "italic", fontSize: "18px", padding: 0 }}
                >
                  React, MongoDB, Django, Firebase, Tensorflow, Node.js, Vite,
                  Postgres, Docker, Tensorflow, REST API's, and more!
                </div>
              </Stack>
            </Box>
            <h2 style={{ textAlign: "left" }}>📞 Contact Me </h2>
            <Group style={{ justifyContent: "space-around" }}>
              <a href={mailto}>
                <img src={mail} height={50} width={75} />
              </a>
              <a href={"https://github.com/elaimizrahi"}>
                <img src={github} height={60} width={60} />
              </a>
              <a href={"https://linkedin.com/in/elai-mizrahi"}>
                <img src={linkedin} height={60} width={60} />
              </a>
              <a href={"tel:2269882795"}>
                <PhoneIcon style={{ color: "white", width: 65, height: 65 }} />
              </a>
            </Group>
          </Stack>
        </header>
      </header>
    </div>
  );
}

export default App;
