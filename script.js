const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/400,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth*0.7,400)

document.getElementById("game3d").appendChild(renderer.domElement)

camera.position.z = 6

const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(5,10,5)
scene.add(light)

const geometry = new THREE.BoxGeometry()

for(let x=-5;x<5;x++){
for(let z=-5;z<5;z++){

const material = new THREE.MeshStandardMaterial({
color:Math.random()*0xffffff
})

const cube = new THREE.Mesh(geometry,material)

cube.position.set(x,0,z)

scene.add(cube)

}
}

function animate(){

requestAnimationFrame(animate)

scene.rotation.y+=0.002

renderer.render(scene,camera)

}

animate()

function signup(){
alert("Signup system coming soon!")
}

function goBrowse(){
alert("Browse page coming soon!")
}

function goCatalog(){
alert("Catalog page coming soon!")
}
