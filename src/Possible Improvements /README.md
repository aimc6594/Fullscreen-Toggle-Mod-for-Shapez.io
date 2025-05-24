# 💡 Possible Improvements / Mejoras Posibles

------

## 1. Hacer configurable la tecla de toggle fullscreen desde UI o configuración

**(Allow configuring the fullscreen toggle key via UI or settings.)**

**Ejemplo:** guardar y leer la tecla desde settings, y usar esa tecla en el listener y keybinding.

```js
// En init(), leer tecla de config o fallback a F11 (keyCode 122)
this.toggleKeyCode = this.app.settings.getSetting("fullscreenToggleKey") || 122;

// Al registrar keybinding y evento keydown, usar this.toggleKeyCode
window.addEventListener("keydown", (ev) => {
    if (ev.keyCode === this.toggleKeyCode) {
        ev.preventDefault();
        const isFull = this.app.settings.getSetting("fullscreen");
        this.app.settings.updateSetting("fullscreen", !isFull);
    }
}, { passive: false });

this.modInterface.registerIngameKeybinding({
    id: this.keybindingId,
    keyCode: this.toggleKeyCode,
    translation: this.getLocalizedMeta("name"),
    handler: () => {
        const isFull = this.app.settings.getSetting("fullscreen");
        this.app.settings.updateSetting("fullscreen", !isFull);
        return shapez.STOP_PROPAGATION;
    },
});
```

------

## 2. Añadir soporte para diferentes wrappers de plataformas

**(Add support for different platform wrappers by detecting more types or allowing direct injection.)**

**Ejemplo:** hacer que el método que busca el wrapper sea más genérico y permita inyección externa.

```js
findWrapper() {
    let wrapper = this.app?.platformWrapper;
    if (!wrapper || !wrapper.setFullscreen) {
        const candidates = Object.values(globalThis).filter(v =>
            typeof v === "function" && v.name?.toLowerCase().includes("platform")
        );
        for (const candidate of candidates) {
            try {
                const inst = new candidate();
                if ("setFullscreen" in inst && "getIsFullscreen" in inst) {
                    wrapper = inst;
                    break;
                }
            } catch (_) {}
        }
    }
    this.app.platformWrapper = wrapper;
    return wrapper;
}

// Permitir también inyección directa:
setWrapper(wrapperInstance) {
    this.app.platformWrapper = wrapperInstance;
}
```

------

## 3. Manejar mejor errores y estados

**(Better handle errors and states, e.g., fullscreen blocked or permission errors.)**

**Ejemplo:** detectar errores y mostrar aviso o fallback.

```js
try {
    wrapper.setFullscreen(true);
} catch (error) {
    console.error("Error al activar pantalla completa:", error);
    this.app.settings.updateSetting("fullscreen", false);
    alert("No se pudo activar pantalla completa, puede que el navegador lo haya bloqueado.");
}
```

------

## 4. Integrar un sistema de eventos para cambios de idioma

**(Integrate an event system for language changes instead of patching methods.)**

**Ejemplo:** usar un event listener si el juego tiene soporte, o crear uno propio.

```js
this.app.events?.on("languageChanged", () => {
    this.updateTranslation();
});

// En caso de no existir, crear un event emitter en settings o modInterface para emitir cambios.
```

------

## 5. Guardar el estado fullscreen en almacenamiento local o perfil

**(Save fullscreen state in local storage or user profile.)**

**Ejemplo:** guardar en `localStorage` y cargar al iniciar el mod.

```js
init() {
    const savedFullscreen = localStorage.getItem("mod_fullscreen_enabled") === "true";
    this.app.settings.updateSetting("fullscreen", savedFullscreen);

    this.app.settings.updateSetting = ((orig) => (key, value) => {
        const result = orig(key, value);
        if (key === "fullscreen") {
            localStorage.setItem("mod_fullscreen_enabled", value);
        }
        return result;
    })(this.app.settings.updateSetting.bind(this.app.settings));

    // resto init...
}
```

------

## 6. Añadir más traducciones o soporte para idiomas dinámicos

**(Add more translations or support for dynamic languages.)**

**Ejemplo:** permitir cargar traducciones externas o desde JSON dinámico.

```js
loadExternalTranslations(jsonData) {
    Object.assign(METADATA.translations, jsonData);
    this.updateTranslation();
}
```
