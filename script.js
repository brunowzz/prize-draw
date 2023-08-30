const generateNumber = () => {
  const inputMin = Math.ceil(document.querySelector(".input-min").value);
  const inputMax = Math.floor(document.querySelector(".input-max").value);
  const paragraphResult = document.querySelector(".result");

  const result = Math.floor(
    Math.random() * (inputMax - inputMin + 1) + inputMin
  );

  paragraphResult.innerHTML = `Resultado: ${result}`;
};
