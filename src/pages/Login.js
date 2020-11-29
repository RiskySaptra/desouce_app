import React from "react";
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  left: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  container: {
    [theme.breakpoints.down("md")]: {
      padding: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
}));

const Login = () => {
  const history = useHistory();
  const gotoHome = () => history.push("/home");

  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: "100vh" }}
          className={classes.container}
        >
          <Paper elevation={3} style={{ height: "65%", width: "100%" }}>
            <Grid
              container
              direction="row"
              alignItems="stretch"
              style={{ height: "100%" }}
            >
              <Grid item xs={8} className={classes.left}>
                <Grid style={{ height: "100%" }}>
                  <h1>Banner Promo & introduction product "Carousell"</h1>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid style={{ height: "100%" }}>
                  <Grid
                    container
                    direction="column"
                    style={{
                      width: "100%",
                      paddingLeft: "5%",
                      paddingRight: "5%",
                      paddingTop: "15%",
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      Welcome Back !
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Login
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    style={{
                      width: "100%",
                      paddingLeft: "5%",
                      paddingRight: "5%",
                      paddingBottom: "5%",
                    }}
                  >
                    <TextField
                      label="Email"
                      type="email"
                      variant="outlined"
                      color="secondary"
                      fullwidth
                      margin="dense"
                    />
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      color="secondary"
                      fullwidth
                      margin="dense"
                    />
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    style={{ width: "100%", padding: "5%" }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={gotoHome}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
