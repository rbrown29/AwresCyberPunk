import React from "react";
import { AppTheme } from '@arwes/theme';

const Header = () => {
  const t = AppTheme();

  return (
    <header
      style={{
        padding: t.space(4),
        textAlign: "center",
        background: t.colors.primary.ol(5),
        color: t.colors.primary.ol(5),
        height: "100%",
      }}
    >
      <h1 style={{ margin: 0 }}>CyberPunk Universe</h1>
    </header>
  );
};

export default Header;
