import { Text, Sparkles, Environment, ScrollControls, useScroll, OrbitControls, Scroll,AdaptiveDpr, Html, Clouds, Cloud, Stars, MeshWobbleMaterial  } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React, { Suspense, useState, useRef, useEffect } from 'react';
import Placeholder from './Placeholder';
import { ToneMapping, ChromaticAberration, Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';

import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig, enviromentConfig } from '../js/scene_config';
import Cbl from './testnweb';

import VideoTextureCBLUNA from './video';
import { TextComponents } from './text/maintext';
import RiveComponent from '../../../components/global/animations/riveComponent.jsx';
import Scenestyles from "./sceneStyle.module.css";
import * as THREE from 'three';


import TopStart from '../../../components/index/TopStart.jsx';
import IndexSeccion1 from '../../../components/index/Secciones/IndexSeccion1.jsx';
import IndexSeccion2 from '../../../components/index/Secciones/IndexSeccion2.jsx';
import IndexSeccion3 from '../../../components/index/Secciones/IndexSeccion3.jsx';
import IndexSeccion4 from '../../../components/index/Secciones/IndexSeccion4.jsx';
import IndexSeccion5 from '../../../components/index/Secciones/IndexSeccion5.jsx';
/* import IndexSeccion5 from '../../../components/index/Secciones/DividerNeon2.jsx'; */
import DividerNeon2 from '../../index/DividerRive1.jsx';



export default function Experienc(props) {


  return (
<>
<AdaptiveDpr pixelated /> 
  <Perf position="top-left" />
  <color attach="background" args={['#17171e']} />
      <Suspense fallback={null}>
        <EffectComposer multisampling={1}>
          <ToneMapping {...toneMappingConfig} />
          <Vignette {...vignetteConfig} />
          <ChromaticAberration {...chromaticAberrationConfig} />
          <Bloom {...bloomConfig} />
          <Noise {...noiseConfig} />
        </EffectComposer>
      </Suspense>
{/*   <Environment {...enviromentConfig} /> */}
  <ambientLight intensity={7} color={'#5d5d5d'} />

  
  <Suspense fallback={<Placeholder position-y={0} scale={[2, 3, 2]} />}>
    <ScrollControls 
    pages={6} 
    distance={0.5}
    maxSpeed={10}
    prepend={false}

    >
      <Scroll

      >

        
  {/*       <TextComponents /> */}

        <Sparkles color={"#003aff"} count={150} speed={0.1} position={[0,-25,0]} scale={10} size={10} />
        <Sparkles color={"#00FFF8"} count={50} speed={0.1} position={[0,-30,0]} scale={30} size={50} />
        <Sparkles color={"#003aff"} count={150} speed={0.1} position={[0,-40,-10]} scale={40} size={30} />
  <Clouds position={[0,-20,0]} material={THREE.MeshBasicMaterial}>
  <Cloud segments={40} bounds={[0, 10, 2]} volume={10} color="blue" fade={100}/>
  <Cloud seed={1} scale={2} volume={5} color="#bd00ff" fade={100} />
  <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

</Clouds>
   
       {/*    <Cbl position={[0, -45, 0]} /> */}
   
       {/*  <VideoTextureCBLUNA scale={1}/> */}

{/*       <Html occlude={false} wrapperClass="htmlScreen" position={[0,0,-10]}  prepend distanceFactor={ 1.17 }  transform scale={10}  rotation={ [ 0, 0, 0 ] }>
 
              </Html> */}
      </Scroll>

  <Scroll  html={true} style={{  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw",  height: "auto" }}>


<TopStart />
	  <IndexSeccion1 />
	  <IndexSeccion2 />
	  <IndexSeccion3 />
	  <DividerNeon2 />
	  <IndexSeccion4 />
	  <IndexSeccion5 />
  </Scroll>

    </ScrollControls>
  </Suspense>

</>
  );
}