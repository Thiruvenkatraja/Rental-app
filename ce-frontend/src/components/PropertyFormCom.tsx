import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Grid, MenuItem } from "@mui/material";
import {
  FormControl,
  PropertyFormInputs,
  listingType,
  propertyType,
} from "../constants";
import { PropertyFormLogics } from "../Utils/PropertyFormLogics";

const PropertyFormCom = () => {
  const { handleChange, values, handleCheckbox, handleSubmit } =
    PropertyFormLogics();

  const theme = useTheme();
  const TypographStyles = {
    fontFamily: "Poppins",
    fontWeight: "650",
    color: "inherit",
    textDecoration: "none",
  };

  const TextValidatorStyle = {
    "& .MuiOutlinedInput-root": {
      background: "#F6F6F6",
      boxShadow: "none",
      marginTop: "0.5rem",
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      background: "#F6F6F6",
      borderRadius: "12px",
    },
    "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#84342d",
    },
  };
  return (
    <Paper
      elevation={3}
      style={{
        position: "relative",
        width: "650px",
        borderRadius: "12px",
        margin: "4rem",
      }}
    >
      <ValidatorForm
        // instantValidate
        onSubmit={handleSubmit}
        onError={(errors: any) => console.log(errors)}
      >
        <Grid
          container
          spacing={2}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              height: "54px",
            },
            "& .MuiTextValidator-root": {
              width: "30ch",
            },
            padding: "2rem 2rem 2rem 3rem",
          }}
        >
          <Grid item xs={12}>
            <Typography style={TypographStyles}>Property Title</Typography>
            <TextValidator
              placeholder="Tittle"
              id="outlined-basic"
              variant="outlined"
              name="Property_Title"
              value={values.Property_Title}
              required={true}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  boxShadow: "none",
                  marginTop: "0.5rem",
                  width: "34rem",
                },
                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  background: "#F6F6F6",
                  borderRadius: "12px",
                },
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: 0,
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#84342d",
                  },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographStyles}>Property Type</Typography>
            <TextValidator
              variant="outlined"
              name="Property_Type"
              value={values.Property_Type}
              onChange={handleChange}
              sx={TextValidatorStyle}
              style={{ marginTop: "5px", width: "15.5rem" }}
              id="outlined-select-type"
              required={true}
              select
              defaultValue="Select"
            >
              {propertyType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextValidator>
          </Grid>
          <Grid item xs={6}>
            <Typography style={TypographStyles}>Listing Type</Typography>
            <TextValidator
              variant="outlined"
              name="Listing_Type"
              value={values.Listing_Type}
              required={true}
              onChange={handleChange}
              sx={TextValidatorStyle}
              style={{ marginTop: "5px", width: "15.5rem" }}
              id="outlined-select-type"
              select
              defaultValue="Select"
            >
              {listingType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextValidator>
          </Grid>
          {PropertyFormInputs.map((inputs) => (
            <Grid item xs={6}>
              <Typography style={TypographStyles}>{inputs.label}</Typography>
              <TextValidator
                placeholder={inputs.placeholder}
                id="outlined-basic"
                variant="outlined"
                value={values[inputs.name]}
                onChange={handleChange}
                name={inputs.name}
                required={true}
                style={{
                  width: "250px",
                  marginTop: "0.5rem",
                }}
                sx={TextValidatorStyle}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography style={TypographStyles}>Property amenities</Typography>
          </Grid>

          <FormGroup
            sx={{
              flexDirection: "row",
              justifyContent: " flex-start",
              padding: "1rem 0 0 1.5rem",
            }}
          >
            {FormControl.map((check) => (
              <FormControlLabel
                sx={{
                  marginLeft: "-5px",
                  marginRight: "10px",
                  width: "11.5rem",
                }}
                onChange={handleCheckbox}
                control={<Checkbox />}
                label={check.label}
                name={check.name}
                value={check.name}
              />
            ))}
          </FormGroup>

          <Grid item xs={12}>
            <Typography style={TypographStyles}>Listing images</Typography>
            <p>
              Please share a Google Drive or Imgur link of your listing images
            </p>
            <TextValidator
              placeholder="ex. Drive.google.com/..."
              id="outlined-basic"
              variant="outlined"
              name="ImgURL"
              required={true}
              value={values.ImgURL}
              onChange={handleChange}
              style={{
                width: "34rem",
                marginTop: "0.5rem",
              }}
              sx={TextValidatorStyle}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              type="submit"
              style={{
                fontWeight: "1000",
                color: theme.palette.secondary.main,
                backgroundColor: theme.palette.primary.main,
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
    </Paper>
  );
};

export default PropertyFormCom;
