# Mod de Alternar Pantalla Completa para Shapez.io

## Descripción

Este mod permite alternar el modo de pantalla completa en Shapez.io usando la tecla F11 (o una tecla configurable). Intercepta correctamente el evento de tecla y utiliza la API nativa del juego para cambiar el modo de pantalla completa. Compatible con las versiones Steam, web y standalone con Electron del juego.

------

## Características

- Alterna pantalla completa con la tecla F11 (tecla predeterminada).
- Intercepta correctamente la tecla para evitar el comportamiento predeterminado del navegador.
- Usa la API nativa del juego para máxima compatibilidad.
- Soporta múltiples idiomas (traducciones incluidas, aunque pueden mejorarse).
- Funciona sin problemas en Steam, web y versiones standalone con Electron.
- Registra la combinación de teclas en el juego con nombre y descripción localizados.

------

## Instalación

1. Descarga o clona este repositorio.
2. Coloca la carpeta del mod dentro del directorio `mods` de tu instalación de Shapez.io.
3. Inicia Shapez.io; el mod se cargará automáticamente al iniciar la interfaz.

------

## Configuración

Actualmente, la tecla para alternar pantalla completa está fija en F11. En futuras versiones se permitirá configurar esta tecla desde la interfaz o ajustes del juego.

------

## Uso

Presiona **F11** mientras juegas para alternar el modo de pantalla completa.

------

## Desarrollo y Contribuciones

Siéntete libre de hacer fork del repositorio y enviar pull requests con mejoras o correcciones. Algunas áreas de mejora posibles incluyen:

- Tecla de toggle configurable.
- Mejor detección y soporte para wrappers de plataformas.
- Manejo más robusto de errores relacionados con permisos para pantalla completa.
- Integración más sólida para eventos de cambio de idioma.
- Persistencia del estado de pantalla completa entre sesiones.
- Añadir o mejorar traducciones y soporte para idiomas dinámicos.

------

## Nota Final

El mod, tal como está implementado actualmente, funciona de forma fiable en Steam, web y versiones standalone con Electron.
 Aunque las traducciones requieren ajustes, el mod cuenta con una base sólida y estable.
 Se puede usar la tecla F11 para alternar pantalla completa si el mod se coloca en el directorio de mods de Shapez.io y se carga al iniciar la interfaz.
