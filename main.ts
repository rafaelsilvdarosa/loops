let imgLargura = scene.screenWidth()
let imgAltura = scene.screenHeight()
let imagem = image.create(imgLargura, imgAltura)

let espacamento = 22
let espFrutas = 24

let frutas = [
    assets.image`morango`,
    assets.image`cereja`,
    assets.image`maca`,
    assets.image`limao`
]

let acessoFruta = Math.floor(Math.random() * 3)
console.log(acessoFruta)

for (let x = 0; x < 20; x++) {
    imagem.drawLine(x * espacamento, 0,x * espacamento, imgAltura, 2)
}

for (let y = 0; y < 15; y++) {
    imagem.drawLine(0, y * espacamento, imgLargura, y * espacamento, 2)
}

for (let x = 0; x < imgLargura; x+=espFrutas) {
    for (let y = 0; y < imgAltura; y+=espFrutas) {
        imagem.drawImage(frutas[acessoFruta], x, y)
    }
}


scene.setBackgroundImage(imagem)