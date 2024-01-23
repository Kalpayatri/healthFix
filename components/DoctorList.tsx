import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

interface Doctor {
  id: number;
  name: string;
  expertise: string;
  city: string;
  imageUrl: string;
}

interface DoctorListProps {
  doctors: Doctor[];
}

const DoctorList: React.FC<DoctorListProps> = ({ doctors }) => {
  return (
    <Grid container spacing={2}>
      {doctors.map((doctor) => (
        <Grid item key={doctor.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt={doctor.name}
              image={doctor.imageUrl}
              style={{ objectFit: 'cover', borderRadius: '16px 16px 0 0' }}
            />
            <CardContent>
              <Typography variant="h6">{doctor.name}</Typography>
              <Typography color="textSecondary">{doctor.expertise}</Typography>
              <Typography color="textSecondary">{doctor.city}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DoctorList;
