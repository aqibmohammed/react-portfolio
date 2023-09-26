import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth =useGLTF("./need_some_space/scene.gltf");
  return (
    <primitive 
    object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />

    );
};
const EarthCanvas=()=>{
  return(
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer:true}}
    camera={{}}
    >
      <Suspense 
      fallback={<CanvasLoader/>}
      >
        <OrbitControls
         autoRotate
         enableZoom={false}
         maxPolarAngle={Math.PI/2}
         minPolarAngle={Math.pI/2}
        />
        <Earth/>
        </Suspense>
        <Preload al/>
    </Canvas>
  )
}
export default EarthCanvas
