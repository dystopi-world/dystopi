import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, Suspense, useState } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import styles from "./scene.module.scss";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/3d/coin/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.45, 0]} rotation={[0, props.mouseX, -0.04]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Cylinder015_Gold_0.geometry}
              material={materials.Gold}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");

function Camera(props) {
  const cameraRef = useRef();
  const { setDefaultCamera } = useThree();
  // This makes sure that size-related calculations are proper
  // Every call to useThree will return this camera instead of the default camera
  useEffect(() => void setDefaultCamera(ref.current), []);
  return <perspectiveCamera ref={cameraRef} {...props} />;
}

function Scene() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  function showCoords(event) {
    setMouseX(event.clientX / 600);
  }

  const [isGrabbing, setIsGrabbing] = useState(false);
  const cursorStyle = {
    cursor: isGrabbing ? "grabbing" : "grab",
  };

  return (
    <div
      className={styles.Scene}
      style={cursorStyle}
      onMouseMove={(event) => showCoords(event)}
      onMouseDown={() => {
        setIsGrabbing(true);
      }}
      onMouseUp={() => {
        setIsGrabbing(false);
      }}
    >
      <Canvas camera={{ position: [0, 0, 1.1] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight
            intensity={0.9}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Model mouseX={mouseX} mouseY={mouseY} />
          <OrbitControls
            enablePan={true}
            enableZoom={false}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
