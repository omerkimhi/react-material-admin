import React, { useState } from "react";
import { Drawer, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  BorderAll as TableIcon,
 
} from "@material-ui/icons";

import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  
  } from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  
  { id: 1, label: "Tables", link: "/app/tables", icon: <TableIcon /> },
];

function Sidebar({ location }) {
  var classes = useStyles();
  
  // global
  var { isSidebarOpened } = useLayoutState();
 
  // local
  var [isPermanent] = useState(true);
  
  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

}

export default withRouter(Sidebar);
