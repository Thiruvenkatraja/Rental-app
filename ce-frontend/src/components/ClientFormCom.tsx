import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  BHK,
  FormControl,
  Status,
  listingType,
  oneTwoThree,
  propertyType,
} from "../constants";
import { ClientFormLogics } from "../utils/ClientFormLogics";

const ClientFormCom = () => {
  const { handleChange, handleCheckbox, values, handleSubmit } =
    ClientFormLogics();
  const theme = useTheme();
  const TextFieldStyle = {
    "& .MuiOutlinedInput-root": {
      boxShadow: "none",
      background: "#F6F6F6",
      marginTop: "0.5rem",
    },
    "& .MuiTextField-root": {
      backgroundColor: "#F6F6F6",
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
  const TypographyStyles = {
    fontFamily: "Poppins",
    fontWeight: "650",
    color: "inherit",
    textDecoration: "none",
  };
  return (
    <Paper
      elevation={3}
      style={{
        position: "relative",
        width: "650px",
        height: "1528px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            height: "54px",
            boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
            "& .MuiOutlinedInput-notchedOutline": {},
          },
          "& .MuiInputBase-input": {},
          "& .MuiTextField-root": {
            width: "30ch",
          },
          padding: "2rem",
        }}
      >
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Full name</Typography>
          <TextField
            name="Client_Name"
            value={values.Client_Name}
            onChange={handleChange}
            placeholder="John Joe"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Email</Typography>
          <TextField
            name="Client_EMail"
            value={values.Client_EMail}
            onChange={handleChange}
            placeholder="example@mail.com"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Mobile number</Typography>
          <TextField
            name="Client_MobileNumber"
            value={values.Client_MobileNumber}
            onChange={handleChange}
            placeholder="+91 9012121212"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography style={TypographyStyles}>Property Title</Typography>
          <TextField
            name="Client_PropertyTitle"
            value={values.Client_PropertyTitle}
            onChange={handleChange}
            placeholder="Tittle"
            id="outlined-basic"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                boxShadow: "none",
                marginTop: "0.5rem",
                width: "551px",
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
          <Typography style={TypographyStyles}>Property Type</Typography>
          <TextField
            name="Client_PropertyType"
            value={values.Client_PropertyType}
            onChange={handleChange}
            variant="outlined"
            sx={TextFieldStyle}
            style={{ marginTop: "5px" }}
            id="outlined-select-type"
            select
            defaultValue="Select"
          >
            {propertyType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Listing Type</Typography>
          <TextField
            name="Client_ListingType"
            value={values.Client_ListingType}
            onChange={handleChange}
            variant="outlined"
            sx={TextFieldStyle}
            style={{ marginTop: "5px" }}
            id="outlined-select-type"
            select
            defaultValue="Select"
          >
            {listingType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Location</Typography>
          <TextField
            name="Client_Location"
            value={values.Client_Location}
            onChange={handleChange}
            placeholder="ex. Chennai"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Address</Typography>
          <TextField
            name="Client_Address"
            value={values.Client_Address}
            onChange={handleChange}
            placeholder="ex. No 1, street, etc.,"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Listing Price</Typography>
          <TextField
            name="Client_ListingPrice"
            value={values.Client_ListingPrice}
            onChange={handleChange}
            placeholder="$ 1000"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>BHK</Typography>
          <TextField
            name="Client_BHK"
            value={values.Client_BHK}
            onChange={handleChange}
            variant="outlined"
            sx={TextFieldStyle}
            style={{ marginTop: "5px" }}
            id="outlined-select-type"
            select
            defaultValue="Select"
          >
            {BHK.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Status</Typography>
          <TextField
            name="Client_Status"
            value={values.Client_Status}
            onChange={handleChange}
            variant="outlined"
            sx={TextFieldStyle}
            style={{ marginTop: "5px" }}
            id="outlined-select-type"
            select
            defaultValue="Select"
          >
            {Status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Parking Lots</Typography>
          <TextField
            name="Client_ParkingLot"
            value={values.Client_ParkingLot}
            onChange={handleChange}
            variant="outlined"
            sx={TextFieldStyle}
            style={{ marginTop: "5px" }}
            id="outlined-select-type"
            select
            defaultValue="Select"
          >
            {oneTwoThree.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Construction sqft.</Typography>
          <TextField
            name="Client_ConstructionSqft"
            value={values.Client_ConstructionSqft}
            onChange={handleChange}
            placeholder="ex. 2000 sqft"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography style={TypographyStyles}>Land sqft.</Typography>
          <TextField
            name="Client_LandSqft"
            value={values.Client_LandSqft}
            onChange={handleChange}
            placeholder="ex. 2000 sqft"
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "250px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography style={TypographyStyles}>
            Listing short description
          </Typography>
          <TextField
            name="Client_ShortDesc"
            value={values.Client_ShortDesc}
            onChange={handleChange}
            placeholder="Please enter up to 240 characters."
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "552px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography style={TypographyStyles}>
            Listing long description
          </Typography>
          <TextField
            name="Client_LongDesc"
            value={values.Client_LongDesc}
            onChange={handleChange}
            placeholder="Please enter up to 4000 characters."
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "552px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography style={TypographyStyles}>Property amenities</Typography>
        </Grid>
        <FormGroup sx={{ flexDirection: "row", justifyContent: "center" }}>
          {FormControl.map((check) => (
            <FormControlLabel
              sx={{ width: "8.1rem" }}
              onChange={handleCheckbox}
              control={<Checkbox />}
              label={check.label}
              name={check.name}
              value={check.name}
            />
          ))}
        </FormGroup>
        <Grid item xs={12}>
          <Typography
            style={{
              marginTop: "1rem",
              fontFamily: "Poppins",
              fontWeight: "650",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Listing images
          </Typography>
          <p>
            Please share a Google Drive or Imgur link of your listing images
          </p>
          <TextField
            name="Client_ImgURL"
            value={values.Client_ImgURL}
            onChange={handleChange}
            placeholder="ex. Drive.google.com/..."
            id="outlined-basic"
            variant="outlined"
            style={{
              width: "551px",
              marginTop: "0.5rem",
            }}
            sx={TextFieldStyle}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={handleSubmit}
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
    </Paper>
  );
};

export default ClientFormCom;
