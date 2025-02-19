function gerarCoordenadasAleatorias() {
    const latitude = (Math.random() * 180 - 90).toFixed(6); // Entre -90 e 90
    const longitude = (Math.random() * 360 - 180).toFixed(6); // Entre -180 e 180
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`
    document.getElementById('latitude').value = latitude
    document.getElementById('longitude').value = longitude
    document.getElementById('map_link').href = url
    document.getElementById('map_link').text = `https://www.google.com/maps?q=${latitude},${longitude}`
}