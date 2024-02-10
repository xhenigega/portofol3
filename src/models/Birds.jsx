/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../../dist/assets/bird-PTTIblfv.glb";

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
export default function Birds ({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());
  
    if (actions['ArmatureAction.001']) { 
      actions['ArmatureAction.001'].play();
    }
  }, [actions, currentAnimation]);
  
  

  return (
    <group ref={group} {...props} dispose={null}>
    <group name="Sketchfab_Scene">
    <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.7}>
      <group name="Root">
        <group name="Armature" position={[-1.849, -0.058, 0.175]}>
          <primitive object={nodes.Armature_rootJoint} />
          <skinnedMesh
            name="Plane_0"
            geometry={nodes.Plane_0.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Plane_0.skeleton}
          />
          <group name="Plane" position={[1.849, 0.058, -0.175]}>
            <mesh
              name="Plane_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane_1.geometry}
              material={materials["Material.003"]}
            />
          </group>
        </group>
      </group>
    </group>
  </group>
    </group>
  );
}

useGLTF.preload(scene);