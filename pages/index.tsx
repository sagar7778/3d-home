import Head from "next/head";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("../components/Scene"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>3D Cube Home Design</title>
      </Head>
      <main className="w-screen h-screen bg-black text-white">
        <div className="absolute top-4 left-4 z-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            3D Cube Home Design
          </h1>
          <p className="text-sm text-gray-300 mt-2 max-w-xs">
            Explore a complete 3D home made entirely of cubes. 
            Use mouse to rotate, zoom, and pan around the scene.
          </p>
        </div>
        <div className="w-full h-full">
          <Scene />
        </div>
        <div className="absolute bottom-4 left-4 text-xs text-gray-400">
          <p>Controls: Left click + drag to rotate • Scroll to zoom • Right click + drag to pan</p>
        </div>
      </main>
    </>
  );
}