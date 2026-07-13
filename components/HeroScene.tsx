"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 1800;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi) - 1;
    }
    return pos;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.04 + mouse.x * 0.05;
      ref.current.rotation.x = mouse.y * 0.04;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00D4FF"
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const octRef = useRef<THREE.Mesh>(null!);
  const sphereRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    if (octRef.current) {
      octRef.current.rotation.x = t * 0.35 + mouse.y * 0.4;
      octRef.current.rotation.y = t * 0.55 + mouse.x * 0.4;
      octRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.7;
      sphereRef.current.rotation.y = t * 0.4;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3;
      torusRef.current.rotation.z = t * 0.2 + mouse.x * 0.3;
      torusRef.current.position.y = Math.cos(t * 0.4) * 0.1;
    }
  });

  return (
    <>
      {/* Main octahedron */}
      <mesh ref={octRef}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#7B2FFF" wireframe transparent opacity={0.2} />
      </mesh>

      {/* Inner sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[0.65, 24, 24]} />
        <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.08} />
      </mesh>

      {/* Outer torus */}
      <mesh ref={torusRef}>
        <torusGeometry args={[2.2, 0.015, 8, 80]} />
        <meshBasicMaterial color="#00D4FF" transparent opacity={0.12} />
      </mesh>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ParticleField />
      <FloatingGeometry />
    </Canvas>
  );
}
