import React from "react";
import { useHistory } from "react-router-dom";

// import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import useStyles from "./style";
import Typography from "@material-ui/core/Typography";

const CustomList = (props) => {
  const { fields } = props;
  const history = useHistory();
  const classes = useStyles();
  const [action, setAction] = React.useState({
    index: 0,
    childIndex: null,
    open: false,
  });

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
    if (!props.field.children) {
      history.push(props.field.path);
    }
  };

  const handleClickChild = (props) => {
    setAction({ ...action, childIndex: props.childIndex });
  };

  return (
    <List
      component="nav"
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
