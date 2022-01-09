import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useAnimationOnEnterViewport from "../hooks/useAnimationOnEnterViewport";
import Header from "./header.component";

const BlockSpan = styled.span`
  display: inline-block;
  opacity: 0;
`;

const left = { textAlign: "left" };
const right = { textAlign: "right" };
const ioOptions = { threshold: 1, rootMargin: "0px 0px -800px 0px" }; // require entire object in FOV
const onEnter = { duration: 1.5, opacity: 1, y: 0 };
const onLeave = { duration: 1.5, opacity: 0, y: 20 };
const animateOnce = { onEnter, onLeave, ioOptions, onlyOnce: true };

const OldHero = () => {
  const [cRef1, eleRef1] = useAnimationOnEnterViewport(animateOnce);
  const [cRef2, eleRef2] = useAnimationOnEnterViewport(animateOnce);
  const [cRef3, eleRef3] = useAnimationOnEnterViewport(animateOnce);
  const [cRef4, eleRef4] = useAnimationOnEnterViewport(animateOnce);

  return (
    <>
      <Header style={left}>Hello CodeSandbox</Header>
      <Header as="h2" style={left}>
        Start editing
      </Header>
      <Header as="h2">to see</Header>
      <Header as="h2">some magic</Header>
      <Header as="h2" style={right} ref={cRef4}>
        <BlockSpan ref={eleRef4}>happen!</BlockSpan>
      </Header>
      <Header as="h2" style={right} ref={cRef3}>
        <BlockSpan ref={eleRef3}>right</BlockSpan>
      </Header>
      <Header as="h2" style={right} ref={cRef2}>
        <BlockSpan ref={eleRef2}>before</BlockSpan>
      </Header>
      <Header ref={cRef1} as="h2" style={right}>
        <BlockSpan ref={eleRef1}>your eyes</BlockSpan>
      </Header>
    </>
  );
};

export default OldHero;
