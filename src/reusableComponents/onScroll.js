import React from "react";

const styleFixed = {
  position: "fixed",
  maxWidth: "14%"
};

const styleStatic = {
  position: "static"
};

const OnScroll = props => {
  const [sticky, setSticky] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", stickyView, false);

    return () => {
      window.removeEventListener("scroll", stickyView, false);
    };
  }, []);

  const stickyView = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos > 50;
    setSticky(visible);
  };

  return <div style={sticky ? styleFixed : styleStatic}>{props.children}</div>;
};

export default OnScroll;
