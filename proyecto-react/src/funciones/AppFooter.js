import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2019 Exercise
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}

export default Footer;