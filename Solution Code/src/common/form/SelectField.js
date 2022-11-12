import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 240,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    }
  }));

const SelectField = (props) => {
  const classes = useStyles();
  const { menudata, handleSelection, selectedValue, label, variant, name } = props
    return <FormControl variant={variant} className={classes.formControl}>
      {label && <InputLabel id="demo-simple-select-label">{label}</InputLabel>}
    <Select
      value={selectedValue}
      onChange={handleSelection}
      name={name}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      { menudata && menudata.length>0 &&
        menudata.map((value, index) => {
          return <MenuItem key={`menu_item_${index}`}value={value}>{value}</MenuItem>
        })
      }
    </Select>
  </FormControl>
}

export default SelectField