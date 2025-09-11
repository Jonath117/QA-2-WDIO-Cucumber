Feature: Scroll infinito en heroku

@ScrollValido
Scenario: Scroll infinito exitoso
  Given estoy en la página de scroll infinito
  When hago scroll hasta el final de la página
  Then debería ver que se han cargado más elementos

@ScrollInvalido
Scenario: Scroll infinito sin cargar mas elementos
  Given estoy en la página de scroll infinito
  When no hago scroll
  Then debería mantenerse la misma cantidad de elementos
