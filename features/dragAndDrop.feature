Feature: drag and drop en heroku

@DragAndDropValido
Scenario:
    Given estoy en la pagina de drag and drop
    When arrastro el elemento A y lo suelto en la posicion del elemento B
    Then deberia ver que el elemento A ha cambiado a la posicion del elemento B


@DragAndDropInvalido
Scenario:
    Given estoy en la pagina de drag and drop
    When intento arrastrar el elemento A fuera del area designada
    Then deberia ver que el elemento A no se mueve y permanece en su posicion original