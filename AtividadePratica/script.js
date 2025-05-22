function changeImage() {
    const img = document.getElementById("myImage");//Aqui conseguimos pegar o elemento do HTML, o img//
    const currentSrc = img.getAttribute("src"); //Aqui pegamos o atributo SRC da imagem//
    console.log(currentSrc);

    if (currentSrc === "img/tigre.jpg") {
        img.setAttribute("src", "img/vavalo.jpg"); //Se a origem atual da imagem foi tigre.jpg, pegue o atributo src e mude para vavalo.jpg//
        img.setAttribute("alt", "Imagem de um Vavalo");
    } else {
        img.setAttribute("src", "img/tigre.jpg");
        img.setAttribute("alt", "Imagem de um tigre");
    }
}
