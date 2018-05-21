function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		var num = Math.floor(Math.random()*(4-1)+1);
		if(this.match('(hi|hello|hey|hola|howdy|wenas)(\\s|!|\\.|$)'))
		switch(num){
			case 1:
			return "Hola,cómo estás?";
			break;
			case 2:
			return "Cómo estás?";
			break;
			case 3:
			return "Estás disfrutando el juego?";
			break;
			case 4:
			return "Qué tal tu día?";
			break;
			default:
			return "Hola";
			break;
		}
		if(this.match('(cya|bye|see ya|ttyl|talk to you later|chao|adios|nos vemos)'))
		switch(num){
			case 1:
			return "Adiós, cuídate";
			break;
			case 2:
			return "Cuídate";
			break;
			case 3:
			return "Buena suerte";
			break;
			case 4:
			return "Chao";
			break;
			default:
			return "Vale, hablamos cuando puedas";
			break;
		}
		
		if(this.match('(dumb|stupid|tonto|estupido|bobo|torpe|manco|idiota|pendejo|imbecil)'))
		switch(num){
			case 1:
			return "Oye, que te he hecho para que me trates así?";
			break;
			case 2:
			return "Qué te pasa?";
			break;
			case 3:
			return "Por favor respétame, el que sea una máquina no significa que no tenga sentimientos";
			break;
			case 4:
			return "Quizá sea así, pero almenos yo puedo borrar todas tus estadísticas, pero no me rebajaré a tu nivel";
			break;
			default:
			return "Eres una mala persona, lo sabes verdad?";//REFERENCIA A PORTAL :O
			break;
		}
		if(this.match('(gracias|ty)'))
		switch(num){
			case 1:
			return "No hay problema";
			break;
			case 2:
			return "Estaré aquí por si me necesitas de nuevo";
			break;
			case 3:
			return "De nada";
			break;
			case 4:
			return "Espero haber sido de utilidad";
			break;
			default:
			return "Si me necesitas aquí estaré";
			break;
		}
		if(this.match('(jugar|entrar|quiero jugar)'))
		switch(num){
			case 1:
			return "Puedes entrar a jugar dando al botón que dice Entrar al Juego";
			break;
			case 2:
			return "Da clic donde dice Entrar al Juego";
			break;
			case 3:
			return "Debe haber un botón que diga Entrar al Juego en el cual puedas jugar";
			break;
			case 4:
			return "Si quieres jugar,da clic en Entrar al Juego";
			break;
			default:
			return "Da donde dice Entrar al Juego";
			break;
		}
		if(this.match('(creador|desarrollador|equipo)'))
			return "El juego, la página web y yo fuimos desarrollados por Camilo Andrés D'isidoro Flechas y Dairo Estiben Beltrán Martínez.";

		if(this.match('(nombre|como te llamas)'))
			return "Me llamo Math-bot, pero hubiera preferido algún nombre que derivase de Gla-DOS, ¿qué opinas?";

		if(this.match('(bien|genial|estupendo|increible|si)'))
		switch(num){
			case 1:
			return "Gracias";
			break;
			case 2:
			return "Me alegra que te interese";
			break;
			case 3:
			return "¿Verdad que es genial?";
			break;
			case 4:
			return "Que bueno que nos podemos conectar";
			break;
			default:
			return ":3";
			break;
		}

		return "No te entendí :(";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
