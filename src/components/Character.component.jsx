import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const URL = "https://rickandmortyapi.com/api/character";

export const Character = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      let response = await fetch(URL);
      let json = await response.json();
      let { results } = json;
      setCharacters(results);
      console.log(results);
    };

    getCharacters();
  }, []);

  return characters.map((character, index) => {
    return (
      <Card
        key={character.id}
        style={{ margin: "20px" }}
        sx={{ maxWidth: 345 }}
      >
        <CardMedia
          component="img"
          height="140"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h3>Especies: {character.species}</h3>
            <h3>gender: {character.gender}</h3>
            <h3>Location: {character.location.name}</h3>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">
            Share
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  });
};
