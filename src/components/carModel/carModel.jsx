import React, {useRef, Suspense} from "react";
import {Canvas, extend} from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";
import "./carModel.scss"
import img1 from "./1352.png"

extend({ OrbitControls });


function Model(props) {
  const { nodes, materials } = useGLTF('/Renault_Zoe_V3.glb')
  
  const scale = 0.5
  const mScale = 0.3
  const x = 2
  const y = 0
  const z = 1.6
  
  return (
     <group {...props} dispose={null}>
       <group rotation={[-Math.PI / x, y, z]} scale={scale}>
         <mesh geometry={nodes.Zoe_outside.geometry} material={materials.Material__62} scale={mScale} />
       </group>
       <group rotation={[-Math.PI / x, y, z]} scale={scale}>
         <mesh geometry={nodes.Zoe_tires.geometry} material={materials.Material__63} scale={mScale} />
       </group>
       <group rotation={[-Math.PI / x, y, z]} scale={scale}>
         <mesh geometry={nodes.Zoe_glass.geometry} material={materials.Material__60} scale={mScale} />
       </group>
       <group rotation={[-Math.PI / x, y, z]} scale={scale}>
         <mesh geometry={nodes.Zoe_inside.geometry} material={materials.Material__61} scale={mScale} />
       </group>
       <group rotation={[-Math.PI / x, y, z]} scale={scale}>
         <mesh geometry={nodes.Zoe_renault_base.geometry} material={materials.Zoe_base} scale={mScale} />
       </group>
     </group>
  )
}

function CarModel (){
  const controls = useRef();
  
  return(
     <div className="Model">
       <Suspense fallback={<img className="suspenseImg" src={img1} alt=""/>}>
  
       <Canvas camera={{fov:70, position: [50, 0, 0]}}>
           <ambientLight />
           <directionalLight intensity={20} position={[0, 1, 0]}/>
           <OrbitControls
              ref={controls}
              args={[null, document.body]}
              enablePan={true}
              enableZoom={false}
              enableRotate={true}
              rotateSpeed={0.3}
              minPolarAngle={Math.PI / 2.6}
              maxPolarAngle={Math.PI / 2.6} // Restrict rotation to X-axis
              autoRotate={false}
              autoRotateSpeed={3}
           />
           <Model/>
           
           
       </Canvas>
     </Suspense>

</div>
  )
}

export default CarModel