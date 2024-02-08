// /**
//  * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
//  * Before we can configure or animate our model’s meshes, we need to iterate through
//  * each part of our model’s meshes and save them separately.
//  *
//  * But luckily there is an app that turns gltf or glb files into jsx components
//  * For this model, visit https://gltf.pmnd.rs/
//  * And get the code. And then add the rest of the things.
//  * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
//  */

// import React, { useRef, useEffect } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";

// // import scene from "../assets/astroman.glb";

// // 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
// export default function Astroman({ currentAnimation, ...props }) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF(scene);
//   const { actions } = useAnimations(animations, group);

//   // This effect will run whenever the currentAnimation prop changes
//   useEffect(() => {
//     Object.values(actions).forEach((action) => action.stop());

//     if (actions[currentAnimation]) {
//       actions[currentAnimation].play();
//     }
//   }, [actions, currentAnimation]);

//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Sketchfab_Scene">
//         <group
//           name="Sketchfab_model"
//           position={[0.012, -0.062, -0.089]}
//           rotation={[-Math.PI / 2, 0, -0.194]}
//           scale={1.315}
//         >
//           <group name="root">
//             <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
//               <group name="RootNode0_0" scale={0.01}>
//                 <group name="skeletal3_6">
//                   <group name="GLTF_created_0">
//                     <primitive object={nodes.GLTF_created_0_rootJoint} />
//                     <skinnedMesh
//                       name="Object_99"
//                       geometry={nodes.Object_99.geometry}
//                       material={materials.material_0}
//                       skeleton={nodes.Object_99.skeleton}
//                     />
//                     <skinnedMesh
//                       name="Object_100"
//                       geometry={nodes.Object_100.geometry}
//                       material={materials.material_0}
//                       skeleton={nodes.Object_100.skeleton}
//                     />
//                     <skinnedMesh
//                       name="Object_103"
//                       geometry={nodes.Object_103.geometry}
//                       material={materials.material_1}
//                       skeleton={nodes.Object_103.skeleton}
//                     />
//                     <skinnedMesh
//                       name="Object_106"
//                       geometry={nodes.Object_106.geometry}
//                       material={materials.material_2}
//                       skeleton={nodes.Object_106.skeleton}
//                     />
//                     <group name="_3_correction">
//                       <group name="_3" />
//                     </group>
//                     <group name="_4_correction">
//                       <group name="_4" />
//                     </group>
//                     <group name="_5_correction">
//                       <group name="_5" />
//                     </group>
//                   </group>
//                 </group>
//               </group>
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload(scene);