import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FormControl, FormLabel, TextField } from "@material-ui/core";
import { useNode, Element } from "@craftjs/core";
import { Container } from "./Container";
function TabPanel(props) {
  const { children, value, index, itemnames, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function TabBar({ background, padding, children, itemnames, ...props }) {
  const [value, setValue] = React.useState(0);
  const {
    connectors: { connect, drag },
  } = useNode();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label={itemnames[0]} {...a11yProps(0)} />
            <Tab label={itemnames[1]} {...a11yProps(1)} />
            <Tab label={itemnames[2]} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Element
            canvas
            is={Container}
            id="hi1"
            padding={6}
            background="#999999"
            data-cy="frame-container"
          ></Element>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Element
            canvas
            is={Container}
            id="hi2"
            padding={6}
            background="#999999"
            data-cy="frame-container"
          ></Element>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Element
            canvas
            is={Container}
            id="hi3"
            padding={6}
            background="#999999"
            data-cy="frame-container"
          ></Element>
        </TabPanel>
      </Box>
    </div>
  );
}

export const TabBarSettings = () => {
  const {
    itemnames,
    actions: { setProp },
  } = useNode((node) => ({
    itemnames:node.data.props.itemnames
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <Box sx={{ pb: 3 }}>
          <TextField
            size="small"
            id="Item_One"
            defaultValue={itemnames[0]}
            onChange={(e) => {
              setProp((props) => (props.itemnames[0] = e.target.value), 500);
            }}
            label="First Tab"
            variant="outlined"
          />
        </Box>
        <Box sx={{ pb: 3 }}>
          <TextField
            size="small"
            id="Item_Two"
            defaultValue={itemnames[1]}
            onChange={(e) => {
              setProp((props) => (props.itemnames[1] = e.target.value), 500);
            }}
            label="Second Tab"
            variant="outlined"
          />
        </Box>
        <Box sx={{ pb: 3 }}>
          <TextField
            id="Item_Three"
            size="small"
            defaultValue={itemnames[2]}
            onChange={(e) => {
              setProp((props) => (props.itemnames[2] = e.target.value), 500);
            }}
            label="Third Tab"
            variant="outlined"
          />
        </Box>
      </FormControl>
    </div>
  );
};
export const TabDefaultProps = {
  background: "#ffffff",
  padding: 3,
  itemnames: ["item One", "item Two", "Item Three"],
};

TabBar.craft = {
  props: TabDefaultProps,
  related: {
    settings: TabBarSettings,
  },
};
