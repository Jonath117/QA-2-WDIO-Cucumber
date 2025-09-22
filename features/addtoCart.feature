Feature: Agregando un producto

@AgregandoProducto
Scenario: Adicion exitosa
    Given esta el usuario en la pagina inventario
    When haga click en el boton add
    Then deberia haber un item en el carrito
