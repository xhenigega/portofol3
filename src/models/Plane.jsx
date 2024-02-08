import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  const { scene } = useGLTF(planeScene);

  return (
    <mesh {...props} ref={ref} position = {[-3, -2, 0]} scale={0.01}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
