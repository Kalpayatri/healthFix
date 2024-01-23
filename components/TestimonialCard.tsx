import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export default function TestimonialCard() {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: '16px', position: 'relative' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/assets/images/8629258.jpg"
        style={{ borderRadius: '16px 16px 0 0' }}
      />
      <div
        style={{
          transform: 'translateX(-50%)',
          backgroundColor: '#fff',
          padding: '4px',
          borderRadius: '50%',
        }}
      >
      </div>
      <CardContent style={{ position: 'relative', zIndex: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          Patient Testimonials
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
