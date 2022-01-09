import React from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";
import gsap from "gsap";
import Header from "./header.component";

const HeaderLine = styled(Header)`
  opacity: 0;
  transform: translateY(-40);
`;

const RedHeaderLine = styled(Header)`
  color: red;
`;

const toId = (str) => str.replace(" ", "-");

const behaviour = ({ perm }) => {
  if (perm) {
    return "play none none none";
  }
  return "restart none none reverse";
};

const Page = styled.div`
  ${RedHeaderLine} {
    color: blue;
  }
`;
const animation = ({ v, perm, i }) => ({
  y: -20,
  opacity: 1,
  duration: perm ? 3 : 1,
  delay: perm ? i * 2 : 0,
  scrollTrigger: {
    markers: false,
    trigger: `#${toId(v)}`,
    start: "20px 70%",
    end: "100% 30%",
    scrub: perm ? false : true,
    // onLeaveBack: ({ progress, direction, isActive }) =>
    //   console.log(`#${toId(v)} has triggered onLeaveBack()`, {
    //     progress,
    //     direction,
    //     isActive
    //   }),
    toggleActions: behaviour({ perm })
  }
});

const Hero = () => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  const text = [
    { v: "Our Our Our Our Our", align: "left", perm: "true"},
    { v: "Goals", align: "left" },
    { v: "when", align: "left" },
    { v: "As", align: "left" },
    { v: "But", align: "left", color: "red" },
    { v: "So", align: "left" },
    { v: "that", align: "left" },
    { v: "eyes", align: "left" }
  ];

  React.useEffect(() => {
    text.forEach(({ v, perm }, index) => {
      gsap.to(`#${toId(v)}`, animation({ v, perm, i: index }));
    });
  }, []);

  return (
    <Page>
      {text.map(({ v, align, color }) => (
        <HeaderLine
          as={color === "red" ? RedHeaderLine : null}
          key={v}
          id={toId(v)}
          style={{ textAlign: align }}
        >
          {v}
        </HeaderLine>
      ))}
    </Page>
  );
};

export default Hero;
