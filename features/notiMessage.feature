Feature: Probar notificaciones en heroku

@NotiMessageValido
Scenario:
    Given estoy en la pagina de mensajes de notificacion
    When hago clic en el botón para cargar una nueva notificacion
    Then deberia ver un mensaje de notificacion valido

    
@NotiMessageInvalido
Scenario:
    Given estoy en la pagina de mensajes
    When este esperando el mensaje
    Then este no aparece, por como se carga la pagina 