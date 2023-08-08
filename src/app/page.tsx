"use client";

import { Flex, Grid, Theme, ThemeOptions } from "@radix-ui/themes";
import { Component } from "@/app/Component";
import { useState } from "react";


export default function Home() {
  const [appearance, setAppearance] = useState<ThemeOptions["appearance"]>("light");

  const themeOne: ThemeOptions = {
    appearance: appearance,
    accentColor: "tomato",
    radius: "full",
    grayColor: "olive",
    panelBackground: "translucent",
    scaling: "105%",
  };

  const themeTwo: ThemeOptions = {
    appearance: appearance,
    accentColor: "indigo",
    radius: "small",
    grayColor: "slate",
    panelBackground: "translucent",
    scaling: "100%",
  };

  const themeThree: ThemeOptions = {
    appearance: appearance,
    accentColor: "grass",
    radius: "large",
    grayColor: "sand",
    panelBackground: "translucent",
    scaling: "90%",
  };

  const themeFour: ThemeOptions = {
    appearance: appearance,
    accentColor: "indigo",
    radius: "small",
    grayColor: "sand",
    panelBackground: "translucent",
    scaling: "100%",
  };

  return (
    <Grid width="100%" rows="1" columns="3">
      <Theme {...themeOne} className="theme-one">
        <Component appearance={appearance} setAppearance={setAppearance} />
      </Theme>
      <Theme {...themeTwo} className="theme-two">
        <Component appearance={appearance} setAppearance={setAppearance} />
      </Theme>
      <Theme {...themeThree} className="theme-three">
        <Component appearance={appearance} setAppearance={setAppearance} />
      </Theme>
      {/*<Theme {...themeFour} className="theme-four">*/}
      {/*  <Component appearance={appearance} setAppearance={setAppearance} />*/}
      {/*</Theme>*/}
    </Grid>
  );
}
