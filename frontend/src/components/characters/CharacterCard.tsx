import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { CharacterCardProps } from './Character.types';

export const CharacterCard = ({
  name,
  homeWorldName,
  homeWorldPopulation
}: CharacterCardProps) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Home world: {homeWorldName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Home world population: {homeWorldPopulation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
