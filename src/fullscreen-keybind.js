// @ts-nocheck
const METADATA = {
    website: "https://t.me/aimc6594",
    author: "aimc6594",
    name: "Fullscreen Toggle",
    version: "1.7.0",
    id: "fullscreen-keybinding",
    description: "Allows toggling fullscreen mode via a dedicated keybinding, properly intercepting the key and using the game's native API. Compatible with web and Steam versions.",
    minimumGameVersion: ">=1.5.0",
    doesNotAffectSavegame: true,
    translations: {
        en: {
            name: "Fullscreen Toggle",
            description: "Allows toggling fullscreen mode via a dedicated keybinding, properly intercepting the key and using the game's native API. Compatible with web and Steam versions.",
        },
        es: {
            name: "Alternar pantalla completa",
            description: "Permite alternar el modo de pantalla completa mediante una tecla dedicada, interceptando correctamente la tecla y utilizando la API nativa del juego. Compatible con versiones web y Steam.",
        },
        "es-419": {
            name: "Alternar pantalla completa",
            description: "Permite alternar el modo de pantalla completa mediante una tecla dedicada, interceptando correctamente la tecla y utilizando la API nativa del juego. Compatible con versiones web y Steam.",
        },
        fr: {
            name: "Plein écran",
            description: "Permet de passer en mode plein écran via une touche dédiée, en interceptant correctement la touche et en utilisant l'API native du jeu. Compatible avec les versions Web et Steam.",
        },
        de: {
            name: "Vollbild umschalten",
            description: "Ermöglicht das Umschalten in den Vollbildmodus über eine dedizierte Taste, indem die Taste korrekt abgefangen und die native API des Spiels verwendet wird. Kompatibel mit Web- und Steam-Versionen.",
        },
        it: {
            name: "Schermo intero",
            description: "Consente di attivare la modalità a schermo intero tramite un tasto dedicato, intercettando correttamente il tasto e utilizzando l'API nativa del gioco. Compatibile con le versioni Web e Steam.",
        },
        pt: {
            name: "Alternar Tela Cheia",
            description: "Permite alternar o modo tela cheia através de uma tecla dedicada, interceptando corretamente a tecla e utilizando a API nativa do jogo. Compatível com as versões Web e Steam.",
        },
        "pt-BR": {
            name: "Alternar Tela Cheia",
            description: "Permite alternar o modo de tela cheia através de uma tecla dedicada, interceptando corretamente a tecla e utilizando a API nativa do jogo. Compatível com versões Web e Steam.",
        },
        "pt-PT": {
            name: "Alternar Ecrã Completo",
            description: "Permite alternar o modo de ecrã completo através de uma tecla dedicada, interceptando corretamente a tecla e utilizando a API nativa do jogo. Compatível com versões Web e Steam.",
        },
        ja: {
            name: "フルスクリーン切り替え",
            description: "専用のキーでフルスクリーンモードを切り替えることができます。キーを正しくインターセプトし、ゲームのネイティブAPIを使用します。Web版とSteam版に対応しています。",
        },
        "zh-CN": {
            name: "切换全屏",
            description: "允许通过专用按键切换全屏模式，正确拦截按键并使用游戏的原生 API。兼容网页和 Steam 版本。",
        },
        "zh-TW": {
            name: "切換全螢幕",
            description: "允許使用專用按鍵切換全螢幕模式，正確攔截按鍵並使用遊戲的原生 API。相容於 Web 和 Steam 版本。",
        },
        kor: {
            name: "전체 화면 전환",
            description: "전용 키를 사용하여 전체 화면 모드를 전환할 수 있으며, 키를 올바르게 가로채고 게임의 기본 API를 사용합니다. 웹 및 Steam 버전과 호환됩니다.",
        },
        cs: {
            name: "Přepnout celou obrazovku",
            description: "Umožňuje přepnout režim celé obrazovky pomocí vyhrazené klávesy, správně zachycuje klávesu a používá nativní API hry. Kompatibilní s webovou i Steam verzí.",
        },
        da: {
            name: "Skift til fuld skærm",
            description: "Gør det muligt at skifte til fuldskærmstilstand via en dedikeret tast ved korrekt at opfange tasten og bruge spillets indbyggede API. Kompatibel med web- og Steam-versioner.",
        },
        nl: {
            name: "Volledig scherm wisselen",
            description: "Schakel de modus voor volledig scherm in via een speciale toets, waarbij de toets correct wordt onderschept en de native API van het spel wordt gebruikt. Compatibel met web- en Steam-versies.",
        },
        no: {
            name: "Bytt til fullskjerm",
            description: "Lar deg bytte til fullskjermmodus via en dedikert tast ved å fange opp tasten riktig og bruke spillets opprinnelige API. Kompatibel med web- og Steam-versjoner.",
        },
        pl: {
            name: "Przełącz pełny ekran",
            description: "Umożliwia przełączanie trybu pełnoekranowego za pomocą dedykowanego klawisza, przechwytując klawisz i używając natywnego API gry. Kompatybilny z wersjami internetowymi i Steam.",
        },
        ro: {
            name: "Comută ecran complet",
            description: "Permite comutarea modului ecran complet printr-o tastă dedicată, interceptând corect tasta și folosind API-ul nativ al jocului. Compatibil cu versiunile web și Steam.",
        },
        ru: {
            name: "Переключение на полный экран",
            description: "Позволяет переключать полноэкранный режим с помощью выделенной клавиши, правильно перехватывая клавишу и используя нативный API игры. Совместимо с веб- и Steam-версиями.",
        },
        fi: {
            name: "Vaihda kokoruudun tilaan",
            description: "Mahdollistaa siirtymisen koko näytön tilaan dedikoidulla näppäimellä sieppaamalla painalluksen oikein ja käyttämällä pelin omaa API:a. Yhteensopiva verkko- ja Steam-versioiden kanssa.",
        },
        sv: {
            name: "Växla helskärmsläge",
            description: "Tillåter växling till helskärmsläge via en dedikerad tangent genom att korrekt fånga upp tangenten och använda spelets inbyggda API. Kompatibel med webb- och Steam-versioner.",
        },
        tr: {
            name: "Tam ekranı değiştir",
            description: "Özel bir tuşla tam ekran modunu değiştirmeye olanak tanır. Tuşu doğru şekilde yakalar ve oyunun yerel API'sini kullanır. Web ve Steam sürümleriyle uyumludur.",
        },
        uk: {
            name: "Перемикання на повний екран",
            description: "Дозволяє перемикати повноекранний режим за допомогою виділеної клавіші, правильно перехоплюючи клавішу та використовуючи рідний API гри. Сумісний з веб- і Steam-версіями.",
        },
        hu: {
            name: "Teljes képernyő váltása",
            description: "Lehetővé teszi a teljes képernyős mód dedikált billentyűvel történő váltását, helyesen elfogva a billentyűt, és a játék natív API-ját használva. Kompatibilis a webes és a Steam verzióval.",
        },
        he: {
            name: "החלף למסך מלא",
            description: "מאפשר להחליף למצב מסך מלא באמצעות מקש ייעודי, תוך יירוט נכון של המקשים ושימוש ב-API המקורי של המשחק. תואם לגרסת האינטרנט ו-Steam.",
        },
    },
};

class Mod extends shapez.Mod {
    init() {
        this.keybindingId = "mod_fullscreen";

        // Inyectar Material Icons por CDN
        const iconsLink = document.createElement("link");
        iconsLink.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        iconsLink.rel = "stylesheet";
        document.head.appendChild(iconsLink);

        // Inyectar Materialize JS desde CDN
        const jsScript = document.createElement("script");
        jsScript.src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
        document.body.appendChild(jsScript);

        // Registrar estilos personalizados para los toasts (Materialize y fallback)
        this.modInterface.registerCss(`
            .mod-toast, .mod-mz-toast {
                position: fixed !important;
                top: $scaled(30px) !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                background: rgba(0, 0, 0, 0.85) !important;
                color: white !important;
                padding: $scaled(6px) $scaled(12px);
                border-radius: $scaled(6px);
                font-size: $scaled(12px);
                z-index: 10000 !important;
                display: flex !important;
                align-items: center !important;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
            }

            .mod-toast.show {
                opacity: 1;
            }

            .mod-toast-icon {
                font-family: 'Material Icons';
                font-size: $scaled(16px);
                margin-right: $scaled(6px);
                line-height: 1;
            }
        `);

        // Esperar a que se cargue el script de Materialize
        jsScript.onload = async () => {
            // Esperar a que las fuentes estén completamente listas
            await document.fonts?.ready;

            const hasIcons = document.fonts.check("1em 'Material Icons'");
            const hasMaterial = !!window.M?.toast;

            // Mostrar un toast con retardo si Materialize no está presente (para evitar superposición inicial)
            const showDelayedToast = (message, icon) => {
                const delay = (!hasIcons || !hasMaterial) ? 5000 : 0;
                setTimeout(() => this.showToast(message, icon), delay);
            };

            // Notificar disponibilidad de Materialize
            if (hasMaterial) {
                M.toast({
                    html: `<i class="material-icons left">check_circle</i>Materialize disponible`,
                    classes: "mod-mz-toast"
                });
            } else {
                showDelayedToast("Materialize no disponible", "error");
            }

            // Notificar disponibilidad de Material Icons
            if (hasIcons) {
                showDelayedToast("Material Icons disponibles", "check_circle");
            } else {
                showDelayedToast("Material Icons no disponibles", "error");
            }
        };

        // Retrasar inicialización para asegurar que todo el entorno esté cargado
        queueMicrotask(() => {
            setTimeout(() => {
                const app = this.app;

                // Buscar el wrapper de plataforma si no está definido
                let wrapper = app?.platformWrapper;
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

                    // Asignar wrapper si fue encontrado
                    if (wrapper) {
                        app.platformWrapper = wrapper;
                        this.showToast("Wrapper compatible encontrado", "check_circle");
                    } else {
                        const warnMsg = "Mod pantalla completa: no se pudo encontrar un wrapper compatible.";
                        console.warn(warnMsg);
                        this.showToast(warnMsg, "error");
                    }
                }

                // Interceptar la tecla F11 para alternar fullscreen y mostrar toast
                window.addEventListener("keydown", (ev) => {
                    if (ev.key === "F11") {
                        ev.preventDefault();
                        const isFull = app.settings.getSetting("fullscreen");
                        app.settings.updateSetting("fullscreen", !isFull);
                        this.showToast(`F11 ${!isFull ? "activado" : "desactivado"}`, "fullscreen");
                    }
                }, { passive: false });

                // Registrar atajo de teclado en la interfaz del juego
                this.modInterface.registerIngameKeybinding({
                    id: this.keybindingId,
                    keyCode: 122,
                    translation: this.getLocalizedMeta("name"),
                    handler: () => {
                        const isFull = this.app.settings.getSetting("fullscreen");
                        this.app.settings.updateSetting("fullscreen", !isFull);
                        const toastMsg = `F11 ${!isFull ? "activado" : "desactivado"}`;
                        this.showToast(toastMsg, "fullscreen");
                        console.log(toastMsg); // Log para depuración
                        return shapez.STOP_PROPAGATION;
                    },
                });

                // Actualizar traducciones del metadata si se soporta
                if (this.modInterface.setModMetadata) {
                    this.modInterface.setModMetadata({
                        ...METADATA,
                        name: this.getLocalizedMeta("name"),
                        description: this.getLocalizedMeta("description"),
                    });
                }

                // Enlazar el watcher de idioma
                this.hookLanguageWatcher();
            }, 100);
        });
    }

    /**
     * Muestra un toast adaptado al entorno (Materialize o fallback).
     */
    showToast(message, icon = "info", duration = 2500) {
        const hasMaterialize = typeof M !== "undefined" && !!M.toast;
        const hasIcons = document.fonts?.check("1em 'Material Icons'");

        if (hasMaterialize) {
            const html = hasIcons
                ? `<i class="material-icons left">${icon}</i>${message}`
                : message;

            M.toast({
                html,
                displayLength: duration,
                classes: "mod-mz-toast"
            });
            return;
        }

        // Fallback sin Materialize
        const toast = document.createElement("div");
        toast.className = "mod-toast";
        toast.innerHTML = hasIcons
            ? `<span class="mod-toast-icon">${icon}</span>${message}`
            : message;
        document.body.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add("show"));

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }

    /**
     * Obtiene un valor localizado desde el bloque METADATA
     */
    getLocalizedMeta(key) {
        const lang = this.app?.settings?.getLanguage?.() || "en";
        const translationBlock = METADATA.translations?.[lang];
        return translationBlock?.[key] || METADATA[key] || "";
    }

    /**
     * Actualiza el texto del keybinding y el metadata cuando cambia el idioma
     */
    updateTranslation() {
        if (this.modInterface && this.keybindingId) {
            const newText = this.getLocalizedMeta("name");
            this.modInterface.updateIngameKeybindingTranslation(this.keybindingId, newText);
        }

        if (this.modInterface.setModMetadata) {
            this.modInterface.setModMetadata({
                ...METADATA,
                name: this.getLocalizedMeta("name"),
                description: this.getLocalizedMeta("description"),
            });
        }
    }

    /**
     * Enlaza un watcher para detectar cambios de idioma dinámicamente
     */
    hookLanguageWatcher() {
        const settings = this.app?.settings;
        if (!settings || !settings.updateSetting) return;

        const originalUpdate = settings.updateSetting.bind(settings);

        settings.updateSetting = (key, value) => {
            const prevLang = settings.getLanguage?.();
            const result = originalUpdate(key, value);

            if (key === "language") {
                const newLang = value;
                if (newLang !== prevLang) {
                    this.updateTranslation();
                }
            }

            return result;
        };
    }
}

/*
Possible improvements / Mejoras posibles:
*/

/* 1. Hacer configurable la tecla de toggle fullscreen desde UI o configuración. */
/* (Allow configuring the fullscreen toggle key via UI or settings.) */

/* Ejemplo: guardar y leer la tecla desde settings, y usar esa tecla en el listener y keybinding. */
/*
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
*/

/* 2. Añadir soporte para diferentes wrappers de plataformas, detectando más tipos o permitiendo inyección directa. */
/* (Add support for different platform wrappers by detecting more types or allowing direct injection.) */

/* Ejemplo: hacer que el método que busca el wrapper sea más genérico y permita inyección externa. */
/*
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
*/

/* 3. Manejar mejor errores y estados (fullscreen bloqueado, errores de permisos, etc.). */
/* (Better handle errors and states, e.g., fullscreen blocked or permission errors.) */

/* Ejemplo: detectar errores y mostrar aviso o fallback. */
/*
   try {
       wrapper.setFullscreen(true);
   } catch (error) {
       console.error("Error al activar pantalla completa:", error);
       // Mostrar mensaje al usuario o revertir estado
       this.app.settings.updateSetting("fullscreen", false);
       alert("No se pudo activar pantalla completa, puede que el navegador lo haya bloqueado.");
   }
*/

/* 4. Integrar un sistema de eventos para cambios de idioma en vez de parchar métodos. */
/* (Integrate an event system for language changes instead of patching methods.) */

/* Ejemplo: usar un event listener si el juego tiene soporte, o crear uno propio. */
/*
   this.app.events?.on("languageChanged", () => {
       this.updateTranslation();
   });
   // En caso de no existir, crear un event emitter en settings o modInterface para emitir cambios.
*/

/* 5. Extender el mod para guardar el estado fullscreen en almacenamiento local o perfil. */
/* (Extend the mod to save fullscreen state in local storage or user profile.) */

/* Ejemplo: guardar en localStorage y cargar al iniciar mod. */
/*
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
*/

/* 6. Añadir más traducciones o soporte para idiomas dinámicos. */
/* (Add more translations or support for dynamic languages.) */

/* Ejemplo: permitir cargar traducciones externas o desde JSON dinámico. */
/*
   loadExternalTranslations(jsonData) {
       Object.assign(METADATA.translations, jsonData);
       this.updateTranslation();
   }
*/


/*
Nota final / Final note:

El mod, tal como está, funciona correctamente en las versiones de Steam, web y standalone con Electron.
Aunque las traducciones requieren ajustes, la base del mod es sólida y confiable.
La tecla F11 puede utilizarse para activar el modo pantalla completa siempre que el mod
se coloque en el directorio de mods de Shapez.io y se cargue al iniciar la interfaz.

The mod, as currently implemented, works reliably on Steam, web, and standalone Electron versions.
While translations need refinement, the mod has a solid and dependable foundation.
The F11 key can be used to toggle fullscreen mode if the mod is placed in the Shapez.io mods directory
and loaded at interface startup.
*/
