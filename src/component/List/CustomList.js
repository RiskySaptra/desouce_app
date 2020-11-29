import React from "react";
import { useHistory } from "react-router-dom";

// import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import useStyles from "./style";

const CustomList = () => {
  const history = useHistory();
  const classes = useStyles();
  const [action, setAction] = React.useState({
    index: 0,
    childIndex: null,
    open: false,
  });

  const fields = [
    {
      icon: <SendIcon />,
      title: "Dashboard",
      path: "/home",
    },
    {
      icon: <SendIcon />,
      title: "Sales Order",
      path: "/home/salesorder",
    },
    {
      icon: <SendIcon />,
      title: "Purchase Order",
      path: "/home/purchaseorder",
    },
    {
      icon: <InboxIcon />,
      title: "Warehouse",
      children: [
        { icon: <SendIcon />, title: "child Sales Order" },
        { icon: <SendIcon />, title: "child Sales Order" },
      ],
    },
    {
      icon: <InboxIcon />,
      title: "Warehouse 2",
      children: [{ icon: <SendIcon />, title: "child Sales Order" }],
    },
  ];

  const handleClick = (props) => {
    setAction({ ...action, index: props.index });
    if (props.field.children) {
      setAction({
        ...action,
        open: !(props.index === action.index && action.open),
        index: props.index,
        childIndex: null,
      });
    }
    history.push(props.field.path);
  };

  const handleClickChild = (props) => {
    setAction({ ...action, childIndex: props.childIndex });
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {fields.map((field, index) => {
        return (
          <>
            <ListItem
              button
              selected={index === action.index}
              onClick={() => handleClick({ index, field })}
              key={index}
            >
              <ListItemIcon>{field.icon}</ListItemIcon>
              <ListItemText primary={field.title} />
              {field.children && (
                <>
                  {action.open && index === action.index ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </>
              )}
            </ListItem>
            {field.children && (
              <Collapse
                in={action.open && index === action.index}
                timeout="auto"
                unmountOnExit
              >
                {field.children.map((child, childIndex) => {
                  return (
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        className={classes.nested}
                        selected={childIndex === action.childIndex}
                        onClick={() => handleClickChild({ childIndex, child })}
                      >
                        <ListItemIcon>{/* <StarBorder /> */}</ListItemIcon>
                        <ListItemText primary={child.title} />
                      </ListItem>
                    </List>
                  );
                })}
              </Collapse>
            )}
          </>
        );
      })}
    </List>
  );
};

export default CustomList;
