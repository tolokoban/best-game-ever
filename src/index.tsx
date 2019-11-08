import React from 'react'
import ReactDOM from 'react-dom'
import FlatLand from 'flat-land-gl'
import Canvas from './canvas'

ReactDOM.render(<Canvas init={init}/>, document.getElementById('root'));

/**
 * Here is the code for your wonderful game!
 */
function init(canvas: HTMLCanvasElement) {
    // Create a Scene for the canvas.
    const scene = new FlatLand.Scene(canvas)
    // Add a simple painter.
    new FlatLand.Painter.Clear("background", scene)
    // Start rendering.
    scene.start()
}
