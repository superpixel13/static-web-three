import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

const Cards = ({ title, description }) => (
  <React.Fragment>
    <CardContent style={{ backgroundColor: "#121212", height: "10rem" }}>
      <Typography sx={{ mt: 2 }} variant="h5" component="div">
        {title}
      </Typography>

      <Typography sx={{ mt: 2 }} variant="body2">
        {description}
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
)

export default function CardComponent({ title, description }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <Cards title={title} description={description} />
      </Card>
    </Box>
  )
}
