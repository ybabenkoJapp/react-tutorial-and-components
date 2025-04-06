import { Grid, Typography } from "@mui/material";
import * as React from "react";
import BasicCard from "./BasicCard";
import BasicInput from "./BasicInput";
import BasicFormControl from "./BasicFormControl";
import ButtonsItems from "./ButtonsItems";
import RatingItems from "./RatingItems";
import BasicImageAvatar from "./BasicImageAvatar";
import BasicBadge from "./BasicBadge";
import BasicIcons from "./BasicIcons";

export default function CardsItems() {
  return (
    <Grid container spacing={2} rowSpacing={1}>
      <Grid size={6}>
        <BasicCard>
          <Typography variant="h6" component="div">
            Basic Inputs
          </Typography>
          <BasicInput />
        </BasicCard>
      </Grid>
      <Grid size={6}>
        <BasicCard>
          <Typography variant="h6" component="div">
            Basic Radio Group
          </Typography>
          <BasicFormControl />
        </BasicCard>
      </Grid>
      <Grid size={6}>
        <BasicCard>
          <Typography variant="h6" component="div">
            Basic buttons
          </Typography>
          <ButtonsItems />
        </BasicCard>
      </Grid>
      <Grid size={6}>
        <BasicCard>
          <Typography variant="h6" component="div">
            Basic Ratings
          </Typography>
          <RatingItems />
        </BasicCard>
      </Grid>
      <Grid size={6}>
        <BasicCard>
          <Typography variant="h6" component="div">
            Basic Image avatar
          </Typography>
          <BasicImageAvatar />
        </BasicCard>
      </Grid>
      <Grid size={6}>
        <BasicCard>
          <Typography variant="h6" component="div">
            Basic Badge
          </Typography>
          <BasicBadge />
        </BasicCard>
      </Grid>
      <Grid size={6}>
        <BasicCard>
          <Typography variant="h6" component="div">
            Basic Icons
          </Typography>
          <BasicIcons />
        </BasicCard>
      </Grid>
    </Grid>
  );
}
