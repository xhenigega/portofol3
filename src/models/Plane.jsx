import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../../dist/assets//plane-nMyvN8Xb.glb";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();

  const { scene } = useGLTF(planeScene);

  return (
    <mesh {...props} ref={ref} position = {[-1, -0.6, 1.5]} scale={0.004}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
