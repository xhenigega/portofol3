import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  const { scene } = useGLTF(planeScene);

  return (
    <mesh {...props} ref={ref} position = {[-2.6, -2.5, 0]} scale={0.009}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
