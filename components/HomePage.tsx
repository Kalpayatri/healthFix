import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Grid,
  TextField,
  Container,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";
import { Formik, Field, Form } from "formik";
import headerImage from "../public/assets/images/8629258.jpg";
import { validationSchema } from "../utils/validationSchema";
import TestimonialCard from "./TestimonialCard";
import { useRouter } from "next/router";

const HomePage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState(null);
  const router = useRouter();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNextStep = () => {
    setFormStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const handleBooking = (values: any) => {
    setFormData(values);
    console.log("Booking form opened", values);
  };

  const handleFormSubmit = () => {
    console.log("Form submitted with data:", formData);
    router.push("/doctor-list");
  };

  const initialValues = {
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: "",
    doctors: "",
  };
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/api/doctors");
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <Box>
      <Image
        src={headerImage}
        alt="Healthcare Hero Image"
        layout="fill"
        objectFit="cover"
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "left",
          color: "black",
          width: "90%",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Take Care of Your Health
        </Typography>
        <div>
          <Typography variant="body1" paragraph>
            Some small information about taking <br /> care of your health goes
            here.
          </Typography>
          <Button
            variant="contained"
            color="success"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ position: "absolute", top: "110vh", width: "100%" }}>
        <Container
          maxWidth="md"
          component="main"
          style={{ marginBottom: "10rem" }}
        >
          <Grid container spacing={3}>
            {[1, 2, 3].map((index) => (
              <Grid item key={index} xs={12} md={4}>
                <TestimonialCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      <Container maxWidth="sm" component="main" sx={{ mt: 4 }}>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
          <DialogTitle>
            <Typography variant="h5">Book an Appointment</Typography>
          </DialogTitle>
          <DialogContent>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleBooking(values);
                handleNextStep();
              }}
            >
              {({ touched, errors, isValid ,values}) => (
                <Form>
                  <Grid container spacing={2}>
                    {formStep === 1 && (
                      <>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="name"
                            label="First Name"
                            variant="filled"
                            fullWidth
                            focused
                            color="success"
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="phoneNumber"
                            label="Phone Number"
                            variant="filled"
                            fullWidth
                            focused
                            color="success"
                            error={
                              touched.phoneNumber && Boolean(errors.phoneNumber)
                            }
                            helperText={
                              touched.phoneNumber && errors.phoneNumber
                            }
                          />
                        </Grid>
                      </>
                    )}

                    {formStep === 2 && (
                      <>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="age"
                            label="Age"
                            variant="filled"
                            fullWidth
                            focused
                            color="success"
                            error={touched.age && Boolean(errors.age)}
                            helperText={touched.age && errors.age}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Field
                            as={TextField}
                            name="city"
                            label="City"
                            variant="filled"
                            fullWidth
                            focused
                            color="success"
                            error={touched.city && Boolean(errors.city)}
                            helperText={touched.city && errors.city}
                          />
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <Field
                            as={TextField}
                            name="company"
                            label="Company"
                            variant="filled"
                            fullWidth
                            focused
                            color="success"
                            error={touched.company && Boolean(errors.company)}
                            helperText={touched.company && errors.company}
                          />
                        </Grid>
                      </>
                    )}

                    {formStep === 3 && (
                      <Grid item xs={12} md={12}>
                        <Field
                          as={TextField}
                          name="chiefComplaints"
                          label="Chief Complaints"
                          variant="filled"
                          fullWidth
                          focused
                          multiline
                          rows={2}
                          color="success"
                          error={
                            touched.chiefComplaints &&
                            Boolean(errors.chiefComplaints)
                          }
                          helperText={
                            touched.chiefComplaints && errors.chiefComplaints
                          }
                        />
                      </Grid>
                    )}

                    {formStep === 4 && (
                      <Grid item xs={12} md={12}>
                         {parseInt(values.age) < 40 ? null : (
                          <Field
                            as={TextField}
                            name="previousExperience"
                            label="Any previous experience with physiotherapy"
                            variant="filled"
                            fullWidth
                            focused
                            multiline
                            rows={2}
                            color="success"
                            error={
                              touched.previousExperience &&
                              Boolean(errors.previousExperience)
                            }
                            helperText={
                              touched.previousExperience &&
                              errors.previousExperience
                            }
                          />
                        )}
                      </Grid>
                    )}

                    <Grid item xs={12} md={12}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: isSmallScreen
                            ? "center"
                            : "space-between",
                        }}
                      >
                        {formStep > 1 && (
                          <Button
                            type="button"
                            color="success"
                            variant="outlined"
                            fullWidth={isSmallScreen}
                            onClick={handleBackStep}
                          >
                            Back
                          </Button>
                        )}
                        {formStep < 4 ? (
                          <Button
                            type="button"
                            color="success"
                            variant="contained"
                            fullWidth={isSmallScreen}
                            onClick={handleNextStep}
                          >
                            Next
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            color="success"
                            variant="contained"
                            fullWidth={isSmallScreen}
                            onClick={handleFormSubmit}
                            disabled={!isValid}
                          >
                            Book
                          </Button>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </DialogContent>
          <DialogActions>
            <Grid item xs={12} md={12}>
              <Button
                type="button"
                color="error"
                variant="text"
                fullWidth
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>
          </DialogActions>
        </Dialog>
      </Container>

      {/* AppBar */}
      <AppBar position="relative" color="success">
        <Toolbar>
          <Button style={{ color: "white" }}>Home</Button>
          <Button onClick={handleOpen} style={{ color: "white" }}>
            Book Appointment
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HomePage;
