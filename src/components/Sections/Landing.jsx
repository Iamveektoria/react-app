import React from "react";
import { Input } from "@mantine/core";
import { Icon12Hours } from "@tabler/icons-react";

const Landing = () => {
  return (
    <div className="landing">
      <div className="header">
        <div className="logo">Logo</div>
        <div className="search_bar">
          <Input iconRIght={<Icon12Hours />} />
        </div>
        <nav className="nav_link">Nav</nav>
      </div>

      <div className="description_container">
        <div className="description">Desc</div>
      </div>
    </div>
  );
};

export default Landing;
