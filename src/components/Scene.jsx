/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'

export function Scene(props) {
    const { nodes, materials } = useGLTF('./models/desk01.glb')
    const screenRef = useRef()
    const monitorRef = useRef()
    const { gl } = useThree()
    const groupRef = useRef();
    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        setTimeout(() => setZoom(true), 4000);
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            const { camera } = state;
            if (zoom) {
                camera.position.lerp({ x: 0, y: 1, z: 5 }, 0.05);
                camera.lookAt(groupRef.current.position);
            } else {
                camera.position.lerp({ x: 0, y: 1, z: 10 }, 0.05);
                camera.lookAt(groupRef.current.position);
            }
        }
    });

    const handleClick = (url) => {
        window.open(url, '_blank')
    }
    return (
        <group {...props} dispose={null} ref={groupRef}>
            <motion.group position={[-1.561, 0.083, 0.862]} rotation={[0, 0.196, 0]} scale={0.436}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={materials['keyboard base_2']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials['keyboard base']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_2.geometry}
                    material={materials['keyboard base_3']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_3.geometry}
                    material={materials.foams}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_4.geometry}
                    material={materials.letter_01}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_5.geometry}
                    material={materials.esc}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_6.geometry}
                    material={materials.letter02}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_7.geometry}
                    material={materials.letter03}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_8.geometry}
                    material={materials.letter04}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_9.geometry}
                    material={materials.letter05}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_10.geometry}
                    material={materials.letter06}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_11.geometry}
                    material={materials.letter07}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_12.geometry}
                    material={materials.letter08}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_13.geometry}
                    material={materials.letter09}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_14.geometry}
                    material={materials.letter10}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_15.geometry}
                    material={materials.letter11}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_16.geometry}
                    material={materials.letter12}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_17.geometry}
                    material={materials.letter_13}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_18.geometry}
                    material={materials.letter_14}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_19.geometry}
                    material={materials.letter_15}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_20.geometry}
                    material={materials.letter_16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_21.geometry}
                    material={materials.letter_17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_22.geometry}
                    material={materials.letter_18}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_23.geometry}
                    material={materials.letter_19}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_24.geometry}
                    material={materials.letter_20}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_25.geometry}
                    material={materials.letter_21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_26.geometry}
                    material={materials.letter_22}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_27.geometry}
                    material={materials.letter_23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_28.geometry}
                    material={materials.letter_24}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_29.geometry}
                    material={materials.letter_25}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_30.geometry}
                    material={materials.letter_26}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_31.geometry}
                    material={materials.letter_27}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_32.geometry}
                    material={materials.letter_28}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_33.geometry}
                    material={materials.letter_29}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_34.geometry}
                    material={materials.letter_30}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_35.geometry}
                    material={materials.letter_31}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_36.geometry}
                    material={materials.letter_32}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_37.geometry}
                    material={materials.letter_33}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_38.geometry}
                    material={materials.letter_34}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_39.geometry}
                    material={materials.letter_35}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_40.geometry}
                    material={materials.letter_36}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_41.geometry}
                    material={materials.letter_37}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_42.geometry}
                    material={materials.letter_38}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_43.geometry}
                    material={materials.letter_39}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_44.geometry}
                    material={materials.letter_40}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_45.geometry}
                    material={materials.letter_41}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_46.geometry}
                    material={materials.letter_42}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_47.geometry}
                    material={materials.letter_43}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_48.geometry}
                    material={materials.letter_44}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_49.geometry}
                    material={materials.letter_45}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_50.geometry}
                    material={materials.letter_46}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_51.geometry}
                    material={materials.letter_47}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_52.geometry}
                    material={materials['bigger shift']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_53.geometry}
                    material={materials['bloq mayus']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_54.geometry}
                    material={materials.enter}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_55.geometry}
                    material={materials['space bar']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_56.geometry}
                    material={materials.retro}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_57.geometry}
                    material={materials.tab}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_58.geometry}
                    material={materials.shift}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_59.geometry}
                    material={materials.ctrl}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_60.geometry}
                    material={materials.alt}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_61.geometry}
                    material={materials.win}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_62.geometry}
                    material={materials.fn}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_63.geometry}
                    material={materials.notes}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_64.geometry}
                    material={materials.usb}
                />
            </motion.group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cable.geometry}
                material={materials.cable}
                position={[-1.998, 0.071, 1.148]}
                rotation={[0, -1.326, 0]}
                scale={0.051}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tabletop.geometry}
                material={materials.DeskMat}
                position={[-0.425, -0.009, 0.345]}
                rotation={[0, 1.557, 0]}
                scale={[1.435, 3.069, 2.263]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.LegUpper_left.geometry}
                material={materials.DeskMat}
                position={[0.441, -0.009, 0.345]}
                rotation={[0, 1.557, 0]}
                scale={1.435}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.LegLower_left.geometry}
                material={materials.DeskMat}
                position={[0.441, -0.009, 0.345]}
                rotation={[0, 1.557, 0]}
                scale={1.435}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.LegUpper_right.geometry}
                material={materials.DeskMat}
                position={[-1.173, -0.009, 0.345]}
                rotation={[0, 1.557, 0]}
                scale={1.435}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.LegLower_right.geometry}
                material={materials.DeskMat}
                position={[-1.173, -0.009, 0.345]}
                rotation={[0, 1.557, 0]}
                scale={1.435}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Control_Box.geometry}
                material={materials.DeskMat}
                position={[1.51, -0.002, -1.094]}
                rotation={[0, 1.557, 1.571]}
                scale={0.145}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.legFoot_01.geometry}
                material={nodes.legFoot_01.material}
                position={[0.888, -2.903, -0.598]}
                rotation={[0, 1.557, 0]}
                scale={[0.086, 0.125, 0.086]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.legFoot_02.geometry}
                material={nodes.legFoot_02.material}
                position={[0.861, -2.903, 1.324]}
                rotation={[0, 1.557, 0]}
                scale={[0.086, 0.125, 0.086]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.carpet_low001.geometry}
                material={materials['01___Default']}
                position={[-0.334, -2.867, 3.525]}
                scale={[3.062, 1.656, 1.947]}
            />
            <group position={[0.069, 0.08, 1.44]} rotation={[-1.582, 0, 0]} scale={5.063}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone.geometry}
                    material={materials.Ip14pmx_lens1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone_1.geometry}
                    material={materials.Ip14pmx_lens2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone_2.geometry}
                    material={materials.Ip14pmx_lens}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone_3.geometry}
                    material={materials.Ip14pmx_lense_metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone_4.geometry}
                    material={materials.Ip14pmx_lens4}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone_5.geometry}
                    material={materials.Ip14pmx_flash_glass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone_6.geometry}
                    material={materials.Ip14pmx_flash}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone_7.geometry}
                    material={materials.Ip14pmx_flash_metal}
                />
            </group>
            <group position={[0.069, 0.08, 1.44]} rotation={[-1.582, 0, 0]} scale={5.063}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone001.geometry}
                    material={materials.Ip14pmx_back_metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone001_1.geometry}
                    material={materials.Ip14pmx_back_metal2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone001_2.geometry}
                    material={materials.Ip14pmx_logo}
                />
            </group>
            <group position={[0.069, 0.08, 1.44]} rotation={[-1.582, 0, 0]} scale={5.063}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone003.geometry}
                    material={materials.Ip14pmx_back_metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone003_1.geometry}
                    material={materials.Ip14pmx_metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone003_2.geometry}
                    material={materials.Ip14pmx_insulator}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone003_3.geometry}
                    material={materials.Ip14pmx_white_metal}
                />
            </group>
            <group position={[0.069, 0.08, 1.44]} rotation={[-1.582, 0, 0]} scale={5.063}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone002.geometry}
                    material={materials.Ip14pmx_black_screen}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone002_1.geometry}
                    material={materials.Ip14pmx_screen}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone002_2.geometry}
                    material={materials.Ip14pmx_lens}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone002_3.geometry}
                    material={materials.Ip14pmx_speeker}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone002_4.geometry}
                    material={materials.Ip14pmx_lens4}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ip14pmx_lens_glass.geometry}
                material={materials.Ip14pmx_lens_glass}
                position={[0.069, 0.08, 1.44]}
                rotation={[-1.582, 0, 0]}
                scale={5.063}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ip14pmx_screen_glass.geometry}
                material={materials.Ip14pmx_screen_glass}
                position={[0.069, 0.08, 1.44]}
                rotation={[-1.582, 0, 0]}
                scale={5.063}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ip14pmx_camglass.geometry}
                material={materials.Ip14pmx_camglass}
                position={[0.069, 0.08, 1.44]}
                rotation={[-1.582, 0, 0]}
                scale={5.063}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002.geometry}
                material={nodes.Plane002.material}
                position={[0.069, 0.103, 1.039]}
                rotation={[0.008, 0, -Math.PI]}
                scale={[-0.176, -0.048, -0.356]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.StandLowerPart001.geometry}
                material={materials['MonitorMain.001']}
                position={[-2.109, 0.549, -0.764]}
                rotation={[-Math.PI, 1.18, 0]}
                scale={[-0.593, -3.326, -1.079]}
            />
            <group
                position={[-2.055, 0.73, -0.786]}
                rotation={[0, -1.18, -Math.PI / 2]}
                scale={[1.871, 3.326, 3.326]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane007.geometry}
                    material={materials['MonitorMain.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane007_1.geometry}
                    material={materials['MonitorTrim.001']}
                />
                <mesh
                    ref={screenRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane007_2.geometry}
                    material={materials['ScreenPanel.001']}
                    onClick={() => handleClick('https://instagram.com')}
                />
                <Html position={[0, 0, 0.5]} scale={0.5} transform occlude>
                    <div className="screen-text">Instagram</div>
                </Html>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bakrest_Plane000.geometry}
                material={materials['Leathe_office_chair.002']}
                position={[-0.83, -2.981, 4.247]}
                rotation={[Math.PI / 2, 0, -3.076]}
                scale={3.037}
            />
            <group
                position={[0.796, 0.73, -0.278]}
                rotation={[Math.PI, -0.974, Math.PI / 2]}
                scale={[1.871, 3.326, 3.326]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004.geometry}
                    material={materials.MonitorMain}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_1.geometry}
                    material={materials.MonitorTrim}
                />
                <mesh
                    ref={monitorRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_2.geometry}
                    material={materials.ScreenPanel}
                />
                <Html position={[0, 0, 0.5]} scale={0.5} rotation={[0, 0, 0]} transform occlude>
                    <div className="text-3xl font-bold monitor-text">Next</div>
                </Html>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RearPanel.geometry}
                    material={materials.MonitorMain}
                    position={[-0.128, 0.045, 0.018]}
                    scale={[1.778, 1, 1]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.StandUpperPart.geometry}
                        material={materials.MonitorMain}
                        position={[0, -0.065, 0]}
                        rotation={[0, 0, Math.PI / 2]}>
                        <group
                            position={[0.02, -0.072, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                            scale={[1, 0.733, 1]}>
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Cylinder.geometry}
                                material={materials.MonitorTrim}
                            />
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes.Cylinder_1.geometry}
                                material={materials.MonitorMain}
                            />
                        </group>
                    </mesh>
                </mesh>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.StandLowerPart.geometry}
                material={materials.MonitorMain}
                position={[0.746, 0.549, -0.311]}
                rotation={[0, 0.974, -Math.PI]}
                scale={[-0.593, -3.326, -1.079]}
            />
        </group>
    )
}

useGLTF.preload('./models/desk01.glb')