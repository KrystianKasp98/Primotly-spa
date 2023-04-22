import { useState } from 'react';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Typography } from '@mui/material';

import {
  PublicIcon,
  PersonIcon,
  CalendarMonthIcon,
  MovieIcon
} from 'components/common/icons';

import { CharacterProp } from './Characters.styled';
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
        <CardContent style={{ overflowY: 'auto', height: '200px' }}>
          <Typography gutterBottom variant="h5" component="div">
            {name || <Skeleton width={250} />}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {homeWorldName ? (
              <CharacterProp>
                <PublicIcon />
                {homeWorldName}
              </CharacterProp>
            ) : (
              <Skeleton width={250} />
            )}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {homeWorldPopulation ? (
              <CharacterProp>
                <PersonIcon />
                {homeWorldPopulation}
              </CharacterProp>
            ) : (
              <Skeleton width={250} />
            )}
          </Typography>
          {isExtended && films ? (
            <div>
              <MovieIcon />
              {films.map(film => (
                <>
                  <br />
                  <CharacterProp variant="h6" color="text.secondary">
                    {film.title}
                  </CharacterProp>
                  <CharacterProp variant="body1" color="text.secondary">
                    <CalendarMonthIcon /> {film.release_date}
                  </CharacterProp>
                  <Typography variant="body1" color="text.secondary">
                    {film.opening_crawl}
                  </Typography>
                  <hr />
                </>
              ))}
            </div>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
