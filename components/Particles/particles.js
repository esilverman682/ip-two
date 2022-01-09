import React, { Component } from 'react';
import Particles from 'react-particles-js';

var style = {
    width: "100vw",
    height: "100vh",
};

export default function ParticlesBackground() { 
  
        return (
            <div style={style}>
            <Particles
                params={{
                    "particles": {
                    "number": {
                    "value": 90
                    },
                    "size": {
                    "value": 2.5
                    }
                },
                    "interactivity": {
                    "events": {
                    "onhover": {
                    "enable": true,
                    "mode": "repulse"
                    }
                    }
                    }
                }}/>
            </div>
            )
    }
 

   