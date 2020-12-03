import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { CustomAppBar, CustomList, CustomDrawer } from "../component/index";
import { Dashboard, Purchaseorder, Salesorder, Products } from "./Index";

import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";

// import StarBorder from "@material-ui/icons/StarBorder";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import SendIcon from "@material-ui/icons/Send";

const fields = [
  {
    icon: <DashboardIcon />,
    title: "Dashboard",
    path: "/home",
  },
  {
    icon: <DescriptionIcon />,
    title: "Products",
    path: "/home/products",
  },
  {
    icon: <HomeIcon />,
    title: "Warehouse",
    children: [
      { icon: <SendIcon />, title: "Warehouse 1" },
      { icon: <SendIcon />, title: "Warehouse 2" },
    ],
  },
  // {
  //   icon: <InboxIcon />,
  //   title: "Warehouse 2",
  //   children: [{ icon: <SendIcon />, title: "child Sales Order" }],
  // },
];

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
            <CustomList fields={fields} />
          </CustomDrawer>
        }
      >
        <Switch>
          <Route exact path={`${path}`} component={Dashboard} />
          <Route path={`${path}/products`} component={Products} />
          <Route path={`${path}/salesorder`} component={Salesorder} />
          <Route path={`${path}/purchaseorder`} component={Purchaseorder} />
        </Switch>
      </CustomAppBar>
    </>
  );
};
export default Home;
