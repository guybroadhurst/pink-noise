let nl
let totalX
let totalY
let density

function setup() {
  createCanvas(windowWidth, windowHeight)
  background("#000000")
  nl = 0.0025
  density = 6
  
  totalX = windowWidth
  totalY = windowHeight

  let c1 = color("#efd7e6")
  let c2 = color("#f4450f")

  for (let x = 0; x < totalX; x = x + 1) {
    for (let y = 0; y < totalY; y = y +1) {
      let n = noise(x * nl, y * nl)
      let rn = n * density - floor(n * density)

      let d = map(rn, 0, 0.5, 0, 1)
      if (rn > 0.5) {
        d = map(rn, 0.5, 1, 1, 0)
      }

      let finalColor = lerpColor(c2, c1, d)
      set(x, y, finalColor)
    }
  }

  updatePixels()
}

function draw() {
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}