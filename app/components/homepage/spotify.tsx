import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import bg from "../../../public/artist.jpg"

interface SpotifyCardProps {
  title: string;
  artist: string;
}

const SpotifyCard: React.FC<SpotifyCardProps> = ({ title, artist }) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 300,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Image
        src={bg}
        alt="artist"
        width={100}
        height={100}
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
