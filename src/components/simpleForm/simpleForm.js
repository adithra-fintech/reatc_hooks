import React from 'react';
import { Avatar, Box, Card, Chip, Divider, IconButton, Stack, Switch, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from '@mui/material/colors';
import Edit from '@mui/icons-material/Edit';

const SimpleForm = () => (
  <Card>
    <Box sx={{ p: 2, display: 'flex' }}>
      <Avatar variant="rounded" src="avatar1.jpg" />
      <Stack spacing={0.5}>
        <Typography fontWeight={700}>Michael Scott</Typography>
        <Typography variant="body2" color="text.secondary">
          <LocationOnIcon sx={{ color: grey[500] }} /> Scranton, PA
        </Typography>
      </Stack>
      <IconButton>
        <Edit sx={{ fontSize: 14 }} />
      </IconButton>
    </Box>
    <Divider />
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
    >
      <Chip>Active account</Chip>
      <Switch />
    </Stack>
  </Card>
);

SimpleForm.propTypes = {};

SimpleForm.defaultProps = {};

export default SimpleForm;
