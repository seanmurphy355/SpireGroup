"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

function SpireLogo() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  const spireShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 3.0);
    shape.lineTo(0.35, -1.4);
    shape.quadraticCurveTo(0.2, -1.8, 0, -1.9);
    shape.quadraticCurveTo(-0.2, -1.8, -0.35, -1.4);
    shape.lineTo(0, 3.0);
    return shape;
  }, []);

  const spireGeometry = useMemo(() => {
    const geo = new THREE.ExtrudeGeometry(spireShape, {
      depth: 0.08,
      bevelEnabled: false,
    });
    geo.center();
    return geo;
  }, [spireShape]);

  const ringPoints = useMemo(() => {
    const curve = new THREE.EllipseCurve(
      0, 0, 2.2, 2.2,
      0.15, Math.PI * 1.92,
      false, -Math.PI * 0.55
    );
    return curve.getPoints(128).map((p) => new THREE.Vector3(p.x, p.y, 0));
  }, []);

  return (
    <group ref={groupRef} position={[0, 0.1, 0]} scale={0.5}>
      <mesh geometry={spireGeometry}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.035} />
      </mesh>

      <Line
        points={ringPoints}
        color="#ffffff"
        transparent
        opacity={0.06}
        lineWidth={0.8}
      />
    </group>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * 0.08,
        0.02
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.08,
        0.02
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function SpireScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 7], fov: 35 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      <Rig>
        <SpireLogo />
      </Rig>
    </Canvas>
  );
}
