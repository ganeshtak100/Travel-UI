import * as React from 'react';
import Svg, {
  ClipPath,
  Defs,
  G,
  Image,
  Path,
  Pattern,
  RadialGradient,
  Rect,
  Stop,
  SvgProps,
  Use,
} from 'react-native-svg';

export interface ISvgProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
  xmlnsXlink?: string;
  xmlSpace?: string;
  xmlns?: string;
}
export function Home({width = 26, height = 26, ...props}: Readonly<ISvgProps>) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      {...props}>
      <Path
        d="M23.951 4a1.5 1.5 0 00-.879.322L8.86 15.52A7.504 7.504 0 006 21.41V40.5C6 41.864 7.136 43 8.5 43h10c1.364 0 2.5-1.136 2.5-2.5v-10c0-.295.205-.5.5-.5h5c.295 0 .5.205.5.5v10c0 1.364 1.136 2.5 2.5 2.5h10c1.364 0 2.5-1.136 2.5-2.5V21.41a7.504 7.504 0 00-2.86-5.89L24.929 4.322A1.5 1.5 0 0023.95 4zM24 7.41l13.285 10.467A4.494 4.494 0 0139 21.41V40h-9v-9.5c0-1.915-1.585-3.5-3.5-3.5h-5c-1.915 0-3.5 1.585-3.5 3.5V40H9V21.41c0-1.38.63-2.679 1.715-3.533L24 7.41z"
        fill={props.color}
      />
    </Svg>
  );
}
export function Explore({
  width = 26,
  height = 26,
  ...props
}: Readonly<ISvgProps>) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      width={width}
      height={height}>
      <G data-name="19.Compass">
        <Path
          d="M12 24a12 12 0 1112-12 12.013 12.013 0 01-12 12zm0-22a10 10 0 1010 10A10.011 10.011 0 0012 2z"
          fill={props.color}
        />
        <Path
          d="M7.591 16.41L9.8 9.8l6.614-2.2-2.2 6.615zm3.786-5.034l-.624 1.871 1.87-.623.624-1.871z"
          fill={props.color}
        />
      </G>
    </Svg>
  );
}
export function Event({
  width = 26,
  height = 26,
  ...props
}: Readonly<ISvgProps>) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
      width={width}
      height={height}>
      <Defs></Defs>
      <G id="ticket">
        <Path
          className="cls-1"
          d="M28.46 9H27a1 1 0 000 2h1v12H12a2 2 0 000-.35 1 1 0 00-2 0 .35.35 0 01-.35.35h-5.3a.35.35 0 01-.35-.35v-11.3a.35.35 0 01.35-.35h5.3a.35.35 0 01.35.35 1 1 0 102 0 2 2 0 000-.35h11a1 1 0 000-2H11a1 1 0 00-.51.16A2.32 2.32 0 009.65 9h-5.3A2.35 2.35 0 002 11.35v11.3A2.35 2.35 0 004.35 25h5.3a2.32 2.32 0 00.84-.16A1 1 0 0011 25h17.46A1.54 1.54 0 0030 23.46V10.54A1.54 1.54 0 0028.46 9z"
          fill={props.color}
        />
        <Path
          className="cls-1"
          d="M11 15a1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1 1 1 0 001 1zm-1 2.11a1 1 0 002 0V17a1 1 0 00-2 0zM11 21a1 1 0 000-2 1 1 0 000 2zm9-3a1 1 0 001 1h4a1 1 0 000-2h-4a1 1 0 00-1 1zm5 2h-7a1 1 0 000 2h7a1 1 0 000-2z"
          fill={props.color}
        />
      </G>
    </Svg>
  );
}
export function Saved({
  width = 26,
  height = 26,
  ...props
}: Readonly<ISvgProps>) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={width}
      height={height}
      {...props}>
      <Path
        fill={props.color}
        d="M100.832 141.398c-1.4 0-2.8-.6-3.8-1.6l-37.2-37.2c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l37.2 37.2c.5.5 1.4.5 2 0l37.2-37.2c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8l-37.2 37.2c-1 1-2.4 1.6-3.8 1.6zm-46-54.4c-1.1 0-2-.9-2-2 0-14.9 12.1-27 27-27 8.7 0 17 4.3 22 11.4.6.9.4 2.2-.5 2.8s-2.1.4-2.8-.5c-4.2-6.1-11.3-9.7-18.7-9.7-12.7 0-23 10.3-23 23 0 1.1-.9 2-2 2z"
      />
      <Path
        fill={props.color}
        d="M145.832 86.998c-1.1 0-2-.9-2-2 0-12.7-10.3-23-23-23-7.4 0-14.5 3.6-18.8 9.7-.6.9-1.9 1.1-2.8.5-.9-.6-1.1-1.9-.5-2.8 5.1-7.1 13.3-11.4 22.1-11.4 14.9 0 27 12.1 27 27 0 1.1-.9 2-2 2z"
      />
    </Svg>
  );
}
export function Profile({
  width = 26,
  height = 26,
  ...props
}: Readonly<ISvgProps>) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      width={width}
      height={height}
      {...props}>
      <Path
        d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm11 30a1 1 0 01-1-1v-6.115a6.95 6.95 0 00-6.942-6.943h-6.116A6.95 6.95 0 006 24.885V31a1 1 0 11-2 0v-6.115c0-4.93 4.012-8.943 8.942-8.943h6.116c4.93 0 8.942 4.012 8.942 8.943V31a1 1 0 01-1 1z"
        fill={props.color}
      />
    </Svg>
  );
}
export function LinearLine({
  width = 50,
  height = 18,
  ...props
}: Readonly<ISvgProps>) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill={props.color}
      width={width}
      height={height}
      {...props}>
      <Path d="M15.5 7.5v1H.5v-1z" fillRule="evenodd" fill={props.color} />
    </Svg>
  );
}
