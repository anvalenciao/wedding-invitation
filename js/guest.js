fetch("js/guest.json")
  .then(response => response.json())
  .then(function(json) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const resultado = json.find( guest => guest.code === parseInt(urlParams.get('code')) );

    if (resultado != null) {
      console.log(resultado);
      document.getElementById("guest").style.display = "block";
      document.getElementById("guest-name").textContent=resultado.name;
    }
  });