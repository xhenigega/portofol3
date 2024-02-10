import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import skyScene from "../../dist/assets//sky-FLbHqf4g.glb";

const Sky = ({ isRotating }) => {
  const skyRef = useRef(); 

  const { scene } = useGLTF(skyScene);
  scene.scale.set(3, 3, 3); 
  scene.position.set(0, -13, 0);

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.15 * delta; 
    }
  });

  return (
    <primitive object={scene} ref={skyRef} /> 
  );
};

export default Sky;
