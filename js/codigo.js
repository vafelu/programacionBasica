var opciones = ["Piedra", "Papel", "Tijera", "Largarto", "Spock"];

function jugar(opcion)
{
	var numeroMaquina = opcionMaquina();
	var numeroUsuario = document.getElementById("juego").value;
	
	if(numeroUsuario == numeroMaquina)
	{
		var msn = "Empate!";
		var colores = "blue";
	}
	else if (numeroUsuario == 0 && (numeroMaquina == 2 || numeroMaquina == 3))
	{
		var msn = "Ganaste!";
		var colores = "green";
	}
	else if(numeroUsuario == 1 && (numeroMaquina == 0 || numeroMaquina == 4))
	{
		var msn = "Ganaste!";
		var colores = "green";
	}
	else if(numeroUsuario == 2 && (numeroMaquina == 1 || numeroMaquina == 3))
	{
		var msn = "Ganaste!";
		var colores = "green";
	}
	else if(numeroUsuario == 3 && (numeroMaquina == 1 || numeroMaquina == 4))
	{
		var msn = "Ganaste!";
		var colores = "green";
	}
	else if(numeroUsuario == 4 && (numeroMaquina == 0 || numeroMaquina == 2))
	{
		var msn = "Ganaste!";
		var colores = "green";
	}
	else
	{
		var msn = "Pierdes!";
		var colores = "red";
	}
	
	document.getElementById("mensaje").innerHTML = ("<h3>Maquina: " + opciones[numeroMaquina] + "</h3><h2 id='msn'>" + msn + "</h2>");
	document.getElementById("msn").style.color = colores;
	document.getElementById("mensaje").style.display = "block";
}

function opcionMaquina()
{
	return Math.floor(Math.random() * (4 - 0 + 1) - 0);
}