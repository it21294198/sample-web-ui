import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class Three extends Component {
  constructor(props) {
    super(props);
    this.refContainer = React.createRef();
  }

  componentDidMount() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.refContainer.current && this.refContainer.current.appendChild(this.renderer.domElement);

    this.camera.position.z = 5;

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load(
      '/rover.glb', // Path to your .glb file
      (gltf) => {
        this.model = gltf.scene;
        this.scene.add(this.model);
        this.animate();
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the GLTF model', error);
      }
    );
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    this.renderer.dispose();
  }

  animate = () => {
    this.frameId = requestAnimationFrame(this.animate);
    if (this.model) {
      this.model.rotation.x += 0.01;
      this.model.rotation.y += 0.01;
    }
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div ref={this.refContainer}></div>
    );
  }
}

export default Three;
