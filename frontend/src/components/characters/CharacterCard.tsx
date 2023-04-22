import { useState } from 'react';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { CharacterCardProps } from './Character.types';

export const CharacterCard = ({
  name,
  homeWorldName,
  homeWorldPopulation,
  films
}: CharacterCardProps) => {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  return (
    <Card
      sx={{ width: 300 }}
      onMouseLeave={() => setIsExtended(false)}
      onClick={() => setIsExtended(prev => !prev)}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name || <Skeleton />}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {homeWorldName ? `Home world name: ${homeWorldName}` : <Skeleton />}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {homeWorldPopulation ? (
              `Home world population: ${homeWorldPopulation}`
            ) : (
              <Skeleton />
            )}
          </Typography>
          {isExtended && films
            ? films.map(film => (
                <>
                  <Typography variant="body2" color="text.secondary">
                    {film.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {film.release_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {film.opening_crawl}
                  </Typography>
                </>
              ))
            : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
