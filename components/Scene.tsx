// @ts-nocheck
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

// Wall component
function Wall({
  position,
  size,
  color = "#8B4513",
}: {
  position: [number, number, number];
  size: [number, number, number];
  color?: string;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// Window component
function Window({
  position,
  size,
}: {
  position: [number, number, number];
  size: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} />
    </mesh>
  );
}

// Door component
function Door({
  position,
  size,
}: {
  position: [number, number, number];
  size: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  );
}

// Furniture component
function Furniture({
  position,
  size,
  color = "#A0522D",
}: {
  position: [number, number, number];
  size: [number, number, number];
  color?: string;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// Roof component
function Roof({
  position,
  size,
}: {
  position: [number, number, number];
  size: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#654321" />
    </mesh>
  );
}

// Ground component
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#90EE90" />
    </mesh>
  );
}

// Tree component
function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Tree trunk */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.6, 4, 0.6]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Tree leaves */}
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </group>
  );
}

// 3D Home component
function Home3D() {
  return (
    <group>
      {/* Ground */}
      <Ground />

      {/* Trees around the house */}
      <Tree position={[-8, 0, -8]} />
      <Tree position={[8, 0, -8]} />
      <Tree position={[-8, 0, 8]} />
      <Tree position={[8, 0, 8]} />
      <Tree position={[-12, 0, 0]} />
      <Tree position={[12, 0, 0]} />

      {/* House base/foundation */}
      <Wall position={[0, -2, 0]} size={[12, 1, 12]} color="#696969" />

      {/* House walls */}
      {/* Back wall */}
      <Wall position={[0, 2, -6]} size={[12, 4, 0.4]} />
      {/* Front wall with door */}
      <Wall position={[-3, 2, 6]} size={[6, 4, 0.4]} />
      <Wall position={[3, 2, 6]} size={[6, 4, 0.4]} />
      {/* Left wall */}
      <Wall position={[-6, 2, 0]} size={[0.4, 4, 12]} />
      {/* Right wall with windows */}
      <Wall position={[6, 2, -2]} size={[0.4, 4, 8]} />
      <Wall position={[6, 2, 4]} size={[0.4, 4, 4]} />

      {/* Windows */}
      <Window position={[6, 2, 0]} size={[0.2, 2, 2]} />
      <Window position={[6, 2, 2]} size={[0.2, 2, 2]} />

      {/* Door */}
      <Door position={[0, 1, 6]} size={[2, 2, 0.2]} />

      {/* Roof */}
      <Roof position={[0, 6, 0]} size={[13, 0.6, 13]} />

      {/* Interior furniture */}
      {/* Bed */}
      <Furniture position={[-4, 0, -2]} size={[3, 0.6, 4]} color="#8B4513" />
      <Furniture position={[-4, 0.6, -2]} size={[3, 0.2, 4]} color="#F5F5DC" />

      {/* Table */}
      <Furniture position={[2, 0, 0]} size={[3, 0.2, 2]} color="#8B4513" />
      <Furniture position={[2, 1, 0]} size={[0.2, 2, 0.2]} color="#8B4513" />

      {/* Chair */}
      <Furniture position={[2, 0, 2]} size={[1, 1, 1]} color="#8B4513" />

      {/* Cabinet */}
      <Furniture position={[4, 1, -4]} size={[1.6, 2, 1.6]} color="#8B4513" />

      {/* Stove */}
      <Furniture position={[-2, 0, 2]} size={[1.6, 0.6, 1.6]} color="#696969" />

      {/* Sink */}
      <Furniture position={[0, 0, 2]} size={[1.2, 0.6, 1.2]} color="#C0C0C0" />

      {/* Refrigerator */}
      <Furniture position={[4, 1, 2]} size={[1.6, 2, 1.6]} color="#F0F0F0" />

      {/* Additional furniture */}
      {/* Bookshelf */}
      <Furniture position={[-4, 1, 4]} size={[1.6, 2, 0.4]} color="#8B4513" />

      {/* TV Stand */}
      <Furniture position={[0, 0, -4]} size={[3, 0.4, 1]} color="#8B4513" />
      <Furniture position={[0, 0.4, -4]} size={[2, 1, 0.2]} color="#000000" />

      {/* Coffee Table */}
      <Furniture position={[0, 0, 0]} size={[2, 0.3, 1]} color="#8B4513" />

      {/* Path to door */}
      <mesh position={[0, -3.9, 8]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 4]} />
        <meshStandardMaterial color="#8B7355" />
      </mesh>

      {/* Garage */}
      <Wall position={[8, 1, 0]} size={[4, 2, 6]} color="#696969" />
      <Roof position={[8, 3, 0]} size={[4.5, 0.4, 6.5]} />
      <Door position={[8, 0.5, 0]} size={[2, 1, 0.2]} />
    </group>
  );
}

export default function Scene() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      <Canvas camera={{ position: [16, 16, 16], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[20, 20, 10]} intensity={1} />
        <directionalLight position={[-20, -20, -10]} intensity={0.3} />

        <Home3D />

        <Environment preset="sunset" />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={6}
          maxDistance={40}
        />
      </Canvas>
    </div>
  );
}
