const temp = document.getElementById('temperature');
const output2 = document.getElementById('output');

$("#sub").on('click', async() => {
  const model =  await tf.loadLayersModel('./model.json')
  const prediction = model.predict(tf.tensor2d([parseInt(temp.value)], [1, 1]))
  output2.innerHTML = `Max Temp: ${parseInt(prediction.dataSync()[0])}°F`
})
