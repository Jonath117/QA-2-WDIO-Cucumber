Feature: Haciendo el checkout

@CheckoutValido
Scenario:
    Given el usuario tenga productos en su carrito
    When quiera hacer el checkout
    Then ingreso "Jonathan Enzo" "Rocha Contreras" "12314" para poder hacer el checkout
    Then debera ver el mensaje "Thank you for your order!"