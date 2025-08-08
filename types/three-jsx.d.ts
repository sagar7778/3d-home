/// <reference types="@react-three/fiber" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      planeGeometry: any;
      group: any;
      ambientLight: any;
      directionalLight: any;
      Canvas: any;
      OrbitControls: any;
      Environment: any;
    }
  }
}
