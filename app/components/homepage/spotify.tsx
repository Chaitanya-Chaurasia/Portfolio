import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface SpotifyCardProps {
  title: string;
  artist: string;
  image: string;
}

const SpotifyCard: React.FC<SpotifyCardProps> = ({ title, artist, image }) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 300,
        margin: "auto",
        marginTop: 20,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        src={image}
        title="Spotify Album"
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          margin: 10,
        }}
      />
      <div
        style={{
          flex: "1 0 auto",
        }}
      >
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {artist}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default SpotifyCard;
