Feature: Login en Swag labs
    
@loginValido
Scenario: Login exitoso con credenciales válidas
    Given estoy en la página de login
    When ingreso "standard_user" y "secret_sauce"
    Then deberia ver los productos disponibles
    Then deberia ver al menos un producto


@loginInvalido  
Scenario: Login fallido con credenciales inválidas
    Given estoy en la página de login
    When ingreso "usuario_invalido" y "clave_invalida"
    Then debería ver el mensaje "Your username is invalid!"