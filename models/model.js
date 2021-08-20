'use strict';

var characters = [];

var families = [];


module.exports = {
  reset: function () {
    // No es necesario modificar esta función (Ya está completa)
    characters = [];
    families = [];
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listCharacter: function (family, pluckName) {
    // Devuelve un arreglo con todos los personajes
    // Si recibe un nombre de familia como parámetro debería filtrar solo los personajes de ella
    // Si recibe un segundo parámetro en true debe devolver únicamente los nombres de los personajes

    if (family && (!pluckName || pluckName === undefined)) {
      return characters.filter(charr => {
        return charr.family === family
      })
    }

    if (pluckName) {
      const arrayName = characters.filter(charr => {
        return charr.family === family
      })

      return arrayName.map(per => {
        var p = per.name;
        return p
      })

    }
    return characters;
  },
  addFamily: function (name) {
    // Agrega el apellido de una nueva familia verificando que no exista
    // Debe retornar el nombre de la familia agregado o existente
    if (!families.includes(name)) {
      families.push(name);

    }

  },
  listFamilies: function () {
    // Devuelve un arreglo con todas las familias
    return families;
  },
  addCharacter: function (name, age, family) {
    // Agrega un nuevo personaje, inicialmente sus frases (quotes) deben estar "vacias"
    // Adicionalmente va a ser necesario guardar el número de familia y no su nombre
    // El número de familia debe empezar desde 1 y no desde 0.
    // Debe retornar el personaje creado
    if (families.includes(family)) {

      var index = families.indexOf(family)
      const family_ = {
        quotes: [],
        name,
        age,
        family,
        familyId: ++index
      }
      characters.push(family_);
    }


  },
  addQuote: function (name, quote) {
    // Agrega una nueva frase a un personaje en particular con el formato:
    // {text: "Este es el texto de la frase", season: 3}
    if (quote.hasOwnProperty("text") && quote.text !== "") {
      if (quote.hasOwnProperty("season")) {
        characters.find(charr => {
          return charr.name === name
        }).quotes.push(quote);
      }else{
        characters.find(charr => {
          return charr.name === name
        }).quotes.push({...quote,season:false});
      }


    }
  },
  showQuotes: function (name) {
    // Devuelve todas las frases de un personaje en particular
    if (characters.find(charr => charr.name === name)) {

      return characters.find(charr => {
        return charr.name === name
      }).quotes;



    }
    return []

  },
};
