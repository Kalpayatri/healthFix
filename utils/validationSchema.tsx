import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Phone Number must contain only numbers')
    .required('Phone Number is required'),
  age: Yup.string().matches(/^[0-9]+$/, 'Age must contain only numbers').required('Age is required'),
  city: Yup.string().required('City is required'),
  company: Yup.string().required('Company is required'),
  chiefComplaints: Yup.string().required('Chief Complaints are required'),
  previousExperience: Yup.string(),
});
