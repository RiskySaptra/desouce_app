import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { CustomAppBar, CustomList, CustomDrawer } from "../component/index";
import { Dashboard, Purchaseorder, Salesorder } from "./Index";

const Home = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path } = useRouteMatch();
  return (
    <>
      <CustomAppBar
        handleDrawerToggle={handleDrawerToggle}
        drawer={
          <CustomDrawer
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          >
            <CustomList />
          </CustomDrawer>
        }
      >
        <Switch>
          <Route exact path={`${path}`} component={Dashboard} />
          <Route path={`${path}/salesorder`} component={Salesorder} />
          <Route path={`${path}/purchaseorder`} component={Purchaseorder} />
        </Switch>
      </CustomAppBar>
    </>
  );
};
export default Home;
