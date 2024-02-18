// ==UserScript==
// @name        AgmaBetterFeatures
// @namespace   https://github.com/luanon404/AgmaBetterFeatures
// @version     0.0.3
// @description Another script that make agma better ✨
// @author      GnU-Chan
// @match       https://agma.io/*
// @icon        data:image/gif;base64,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
// @downloadURL https://raw.githubusercontent.com/luanon404/AgmaBetterFeatures/main/AgmaBetterFeatures.user.js
// @require     https://unpkg.com/compare-versions/lib/umd/index.js
// @run-at      document-end
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       unsafeWindow
// ==/UserScript==

(function () {
    "use strict";

    // ===== Thư viện =====

    const { compare } = window.compareVersions;

    // ===== Hàm hỗ trợ =====

    const ABF_Utils = {
        gnLog: function (mode, ...messages) {
            const modes = {
                e: console.error,
                w: console.warn,
                i: console.info,
            };
            const _console = modes[mode.toLowerCase()] || console.log;
            _console("[-AgmaBetterFeatures-]", ...(messages || mode));
        },
        keyboardMap: {
            AltLeft: "AltLeft",
            AltRight: "AltRight",
            ArrowDown: "ArrowDown",
            ArrowLeft: "ArrowLeft",
            ArrowRight: "ArrowRight",
            ArrowUp: "ArrowUp",
            Backquote: "Backquote",
            Backslash: "Backslash",
            Backspace: "Backspace",
            BracketLeft: "BracketLeft",
            BracketRight: "BracketRight",
            CapsLock: "CapsLock",
            Comma: "Comma",
            ContextMenu: "ContextMenu",
            ControlLeft: "ControlLeft",
            ControlRight: "ControlRight",
            Digit0: "Digit0",
            Digit1: "Digit1",
            Digit2: "Digit2",
            Digit3: "Digit3",
            Digit4: "Digit4",
            Digit5: "Digit5",
            Digit6: "Digit6",
            Digit7: "Digit7",
            Digit8: "Digit8",
            Digit9: "Digit9",
            Enter: "Enter",
            Equal: "Equal",
            Escape: "Escape",
            F1: "F1",
            F2: "F2",
            F3: "F3",
            F4: "F4",
            F6: "F6",
            F7: "F7",
            F8: "F8",
            F9: "F9",
            F10: "F10",
            F11: "F11",
            F12: "F12",
            KeyA: "KeyA",
            KeyB: "KeyB",
            KeyC: "KeyC",
            KeyD: "KeyD",
            KeyE: "KeyE",
            KeyF: "KeyF",
            KeyG: "KeyG",
            KeyH: "KeyH",
            KeyI: "KeyI",
            KeyJ: "KeyJ",
            KeyK: "KeyK",
            KeyL: "KeyL",
            KeyM: "KeyM",
            KeyN: "KeyN",
            KeyO: "KeyO",
            KeyP: "KeyP",
            KeyQ: "KeyQ",
            KeyR: "KeyR",
            KeyS: "KeyS",
            KeyT: "KeyT",
            KeyU: "KeyU",
            KeyV: "KeyV",
            KeyW: "KeyW",
            KeyX: "KeyX",
            KeyY: "KeyY",
            KeyZ: "KeyZ",
            MetaLeft: "MetaLeft",
            Minus: "Minus",
            NumLock: "NumLock",
            Numpad0: "Numpad0",
            Numpad1: "Numpad1",
            Numpad2: "Numpad2",
            Numpad3: "Numpad3",
            Numpad4: "Numpad4",
            Numpad5: "Numpad5",
            Numpad6: "Numpad6",
            Numpad7: "Numpad7",
            Numpad8: "Numpad8",
            Numpad9: "Numpad9",
            NumpadAdd: "NumpadAdd",
            NumpadDecimal: "NumpadDecimal",
            NumpadDivide: "NumpadDivide",
            NumpadEnter: "NumpadEnter",
            NumpadMultiply: "NumpadMultiply",
            NumpadSubtract: "NumpadSubtract",
            Period: "Period",
            Quote: "Quote",
            Semicolon: "Semicolon",
            ShiftLeft: "ShiftLeft",
            ShiftRight: "ShiftRight",
            Slash: "Slash",
            Space: "Space",
            Tab: "Tab",
        },
        draggableDiv: function (key, container, handle) {
            let movable = handle || container;

            const startDrag = (e) => {
                let startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
                let startY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

                let offsetX = startX - parseInt(getComputedStyle(container).left);
                let offsetY = startY - parseInt(getComputedStyle(container).top);

                const mouseMoveHandler = (e) => {
                    let clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
                    let clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

                    let newX = clientX - offsetX;
                    let newY = clientY - offsetY;

                    newX = Math.max(0, newX);
                    newY = Math.max(0, newY);
                    newX = Math.min(window.innerWidth - container.offsetWidth, newX);
                    newY = Math.min(window.innerHeight - container.offsetHeight, newY);

                    container.style.left = newX + "px";
                    container.style.top = newY + "px";

                    updateConfig(key, { x: newX, y: newY });
                };

                const endDrag = () => {
                    document.removeEventListener("mousemove", mouseMoveHandler);
                    document.removeEventListener("mouseup", endDrag);
                    document.removeEventListener("touchmove", mouseMoveHandler);
                    document.removeEventListener("touchend", endDrag);
                };

                document.addEventListener("mousemove", mouseMoveHandler);
                document.addEventListener("mouseup", endDrag);
                document.addEventListener("touchmove", mouseMoveHandler, { passive: false });
                document.addEventListener("touchend", endDrag);
            };

            movable.addEventListener("mousedown", startDrag);
            movable.addEventListener("touchstart", startDrag, { passive: false });
        },
        isWritingText: function () {
            return ["text", "password", "textarea"].includes(document.activeElement.type);
        },
        getDateTime: function () {
            let date = new Date();
            let now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
            return new Date(now_utc);
        },
        fonts: {
            serifItalic: function (charCode) {
                if (charCode === 104) {
                    return String.fromCodePoint(0x1d629); // h
                } else if (charCode >= 65 && charCode <= 90) {
                    return String.fromCodePoint(0x1d434 + charCode - 65);
                } else if (charCode >= 97 && charCode <= 122) {
                    return String.fromCodePoint(0x1d44e + charCode - 97);
                } else {
                    return String.fromCharCode(charCode);
                }
            },
        },
        useUnicodeFont: function (text, font) {
            let regexResults;
            let emojiPositions = [];
            let emojiRegex = /:\w+:/g;
            while ((regexResults = emojiRegex.exec(text)) !== null) {
                emojiPositions.push(regexResults.index);
            }

            let converted = "",
                convert = true;
            for (let i = 0; i < text.length; i++) {
                if (!convert && text.charAt(i) === ":") {
                    convert = true;
                }
                if (emojiPositions.indexOf(i) !== -1) {
                    convert = false;
                }
                if (convert) {
                    converted += this.fonts[font](text.charCodeAt(i));
                } else {
                    converted += text.charAt(i);
                }
            }

            return converted;
        },
        getSkinUrl: function (sourceSelector) {
            if (sourceSelector === undefined) {
                sourceSelector = "#skinExampleMenu";
            }
            let skinUrlRaw = $(sourceSelector).css("background-image");
            let parts = skinUrlRaw.split('"');
            if (parts.length !== 3) {
                return null;
            } else {
                return parts[1];
            }
        },
        useWearables: function (wearables, dropCurrent) {
            if (dropCurrent === undefined) {
                dropCurrent = true;
            }
            unsafeWindow.azad(true);
            setTimeout(function () {
                $("#skinExampleMenu").click();
                setTimeout(function () {
                    $("#wearablesTab a").click();
                    setTimeout(function () {
                        if (dropCurrent) {
                            let oldWearables = [ABF_Utils.extractWearableId($("#wearExampleShop1").attr("style")), ABF_Utils.extractWearableId($("#wearExampleShop2").attr("style")), ABF_Utils.extractWearableId($("#wearExampleShop3").attr("style")), ABF_Utils.extractWearableId($("#wearExampleShop4").attr("style")), ABF_Utils.extractWearableId($("#wearExampleShop5").attr("style"))];
                            oldWearables.forEach(function (id) {
                                $("#wearableUseBtn" + id).click();
                            });
                        }
                        wearables.forEach(function (id) {
                            $("#wearableUseBtn" + id).click();
                        });
                        setTimeout(function () {
                            $("#shopModalDialog button.close").click();
                            setTimeout(function () {
                                unsafeWindow.setNick(document.getElementById("nick").value);
                            }, 200);
                        }, 200);
                    }, 1000);
                }, 200);
            }, 200);
        },
        extractWearableId: function (style) {
            if (style === undefined) {
                return null;
            }
            let pos = style.indexOf('background-image: url("wearables/');
            if (pos === -1) {
                return null;
            }
            return parseInt(style.substr(pos + 33));
        },
        useSkin: function (skinId) {
            unsafeWindow.azad(true);
            setTimeout(function () {
                $("#skinExampleMenu").click();
                let checkLoaded = function () {
                    let loaded = $("#skinsFree tr").length > 1;
                    if (loaded) {
                        unsafeWindow.toggleSkin(skinId);
                        setTimeout(function () {
                            $("#shopModalDialog button.close").click();
                            setTimeout(function () {
                                unsafeWindow.setNick(document.getElementById("nick").value);
                            }, 200);
                        }, 200);
                    } else {
                        setTimeout(checkLoaded, 300);
                    }
                };
                checkLoaded();
            }, 200);
        },
    };

    // ===== Cấu hình =====

    const githubURL = "https://raw.githubusercontent.com/luanon404/AgmaBetterFeatures/main/AgmaBetterFeatures.user.js";

    const _ABF_DefaultConfig = {
        ignoreUpdate: {
            version: "",
            active: false,
        },
        skinChangeTime: 0,
        wearableChangeTime: 0,
        mouseCoordinates: {
            x: 0,
            y: 0,
            time: 0,
        },
        menuClientCoordinates: {
            x: 50,
            y: 50,
            originWidth: 300,
            originHeight: 300,
            width: 300,
            height: 300,
            open: true,
        },
        menuLogCoordinates: {
            x: 400,
            y: 50,
            originWidth: 400,
            originHeight: 300,
            width: 400,
            height: 300,
            open: true,
        },
        lineSplitHelper: {
            active: false,
            binding: ABF_Utils.keyboardMap.KeyI,
            color: "#FF6666",
            lineWidth: 2,
        },
        halt: {
            active: false,
            binding: ABF_Utils.keyboardMap.KeyH,
        },
    };

    const ABF_Config = (function () {
        let config = GM_getValue("config");

        if (!config) {
            ABF_Utils.gnLog("i", "Chưa có cấu hình, sử dụng cấu hình mặc định");
            config = _ABF_DefaultConfig;
        } else {
            ABF_Utils.gnLog("i", "Sử dụng cấu hình đã lưu");

            let compareConfig = function (newConfig, oldConfig) {
                for (let key in newConfig) {
                    if (typeof newConfig[key] === "object" && newConfig[key] !== null && oldConfig[key] !== undefined) {
                        compareConfig(newConfig[key], oldConfig[key]);
                    } else if (oldConfig[key] === undefined) {
                        ABF_Utils.gnLog("w", "Cấu hình mới có thêm key:", key, "với giá trị:", newConfig[key]);
                        oldConfig[key] = newConfig[key];
                    }
                }
            };

            compareConfig(_ABF_DefaultConfig, config);
        }
        return config;
    })();

    GM_setValue("config", ABF_Config);

    const updateConfig = function (key, value) {
        try {
            if (typeof value !== "object" || value === null) {
                ABF_Config[key] = value;
            } else {
                ABF_Config[key] = { ...ABF_Config[key], ...value };
            }
            GM_setValue("config", ABF_Config);
        } catch (error) {
            ABF_Utils.gnLog("e", "Lỗi khi cập nhật cấu hình:", error);
        }
    };

    // Kiểm tra cập nhật trước
    // Rồi làm gì thì làm

    fetch(githubURL)
        .then((response) => response.text())
        .then((data) => {
            const remoteVersion = data.match(/@version\s+([0-9.]+)/)[1];
            const localVersion = GM_info.script.version;
            if (compare(localVersion, remoteVersion, ">=")) return;

            if (ABF_Config.ignoreUpdate.active && compare(remoteVersion, ABF_Config.ignoreUpdate.version, "=")) return;

            if (confirm("Có phiên bản mới, cập nhật ngay?")) {
                updateConfig("ignoreUpdate", _ABF_DefaultConfig.ignoreUpdate);
                location.href = githubURL;
                alert("Cập nhật thành công, vui lòng làm mới trang!");
                location.reload();
            } else {
                updateConfig("ignoreUpdate", { version: remoteVersion, active: true });
            }
        })
        .catch((err) => ABF_Utils.gnLog("e", "Lỗi khi kiểm tra cập nhật:", err));

    // ===== Control Layout =====

    const $menuControlLayout = document.createElement("div");
    $menuControlLayout.style.position = "fixed";
    $menuControlLayout.style.right = "10px";
    $menuControlLayout.style.top = "330px";
    $menuControlLayout.style.width = "200px";
    $menuControlLayout.style.height = "230px";
    $menuControlLayout.style.border = "3px solid #00D2FF";
    $menuControlLayout.style.zIndex = "9999";
    $menuControlLayout.style.fontFamily = "Tahoma, sans-serif";
    $menuControlLayout.style.fontWeight = "bold";

    const $menuControlLayoutHeader = document.createElement("div");
    $menuControlLayoutHeader.style.width = "100%";
    $menuControlLayoutHeader.style.height = "30px";
    $menuControlLayoutHeader.style.background = "#00D2FF";
    $menuControlLayoutHeader.style.textAlign = "left";
    $menuControlLayoutHeader.style.padding = "5px";
    $menuControlLayoutHeader.style.color = "#FFFFFF";
    $menuControlLayoutHeader.style.display = "inline-flex";
    $menuControlLayoutHeader.style.alignItems = "center";
    $menuControlLayoutHeader.style.justifyContent = "center";
    $menuControlLayoutHeader.textContent = "ABF - Control Layout";

    const $menuControlLayoutContent = document.createElement("div");
    $menuControlLayoutContent.style.width = "100%";
    $menuControlLayoutContent.style.height = "calc(100% - 30px)";
    $menuControlLayoutContent.style.padding = "10px";
    $menuControlLayoutContent.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    $menuControlLayoutContent.style.overflow = "auto";

    // ===== Console Log Option =====

    const $consoleLogOption = document.createElement("div");
    $consoleLogOption.style.display = "flex";
    $consoleLogOption.style.justifyContent = "space-between";
    $consoleLogOption.style.alignItems = "center";
    $consoleLogOption.style.marginBottom = "10px";

    const $consoleLogText = document.createElement("div");
    $consoleLogText.textContent = "Console Log";
    $consoleLogText.style.flex = "1";
    $consoleLogText.style.fontSize = "16px";
    $consoleLogText.style.paddingLeft = "5px";
    $consoleLogText.style.paddingRight = "5px";
    $consoleLogText.style.color = "green";

    const $consoleLogCheckButton = document.createElement("input");
    $consoleLogCheckButton.type = "checkbox";
    $consoleLogCheckButton.style.flex = "0 0 auto";
    $consoleLogCheckButton.style.transform = "scale(1.25)";
    $consoleLogCheckButton.style.cursor = "pointer";
    $consoleLogCheckButton.style.marginLeft = "5px";
    $consoleLogCheckButton.checked = ABF_Config.menuLogCoordinates.open;

    $consoleLogCheckButton.addEventListener("change", function () {
        ABF_Config.menuLogCoordinates.open = !ABF_Config.menuLogCoordinates.open;
        $menuLog.style.display = ABF_Config.menuLogCoordinates.open ? "block" : "none";
        $menuLog.style.pointerEvents = ABF_Config.menuLogCoordinates.open ? "auto" : "none";
        updateConfig("menuLogCoordinates", { open: ABF_Config.menuLogCoordinates.open });
    });

    $consoleLogOption.appendChild($consoleLogText);
    $consoleLogOption.appendChild($consoleLogCheckButton);

    // ===== Client Menu Option =====

    const $clientMenuOption = document.createElement("div");
    $clientMenuOption.style.display = "flex";
    $clientMenuOption.style.justifyContent = "space-between";
    $clientMenuOption.style.alignItems = "center";
    $clientMenuOption.style.marginBottom = "10px";

    const $clientMenuText = document.createElement("div");
    $clientMenuText.textContent = "Client Menu";
    $clientMenuText.style.flex = "1";
    $clientMenuText.style.fontSize = "16px";
    $clientMenuText.style.paddingLeft = "5px";
    $clientMenuText.style.paddingRight = "5px";
    $clientMenuText.style.color = "green";

    const $clientCheckButton = document.createElement("input");
    $clientCheckButton.type = "checkbox";
    $clientCheckButton.style.flex = "0 0 auto";
    $clientCheckButton.style.transform = "scale(1.25)";
    $clientCheckButton.style.marginLeft = "5px";
    $clientCheckButton.style.cursor = "pointer";
    $clientCheckButton.checked = ABF_Config.menuClientCoordinates.open;

    $clientCheckButton.addEventListener("change", function () {
        ABF_Config.menuClientCoordinates.open = !ABF_Config.menuClientCoordinates.open;
        $menuClient.style.display = ABF_Config.menuClientCoordinates.open ? "block" : "none";
        $menuClient.style.pointerEvents = ABF_Config.menuClientCoordinates.open ? "auto" : "none";
        updateConfig("menuClientCoordinates", { open: ABF_Config.menuClientCoordinates.open });
    });

    $clientMenuOption.appendChild($clientMenuText);
    $clientMenuOption.appendChild($clientCheckButton);

    $menuControlLayoutContent.appendChild($consoleLogOption);
    $menuControlLayoutContent.appendChild($clientMenuOption);

    $menuControlLayout.appendChild($menuControlLayoutHeader);
    $menuControlLayout.appendChild($menuControlLayoutContent);

    const $leaderboard = document.querySelector("#leaderboard");
    $leaderboard.parentNode.insertBefore($menuControlLayout, $leaderboard.nextSibling);

    // ===== Menu chính =====

    const $menu = document.createElement("div");
    $menu.style.position = "fixed";
    $menu.style.zIndex = "9999";
    $menu.style.width = "100%";
    $menu.style.height = "100%";
    $menu.style.pointerEvents = "none";
    $menu.style.fontFamily = "Tahoma, sans-serif";
    $menu.style.fontWeight = "bold";

    // ===== Menu Log =====

    const $menuLog = document.createElement("div");
    $menuLog.style.position = "absolute";
    $menuLog.style.left = ABF_Config.menuLogCoordinates.x + "px";
    $menuLog.style.top = ABF_Config.menuLogCoordinates.y + "px";
    $menuLog.style.width = ABF_Config.menuLogCoordinates.width + "px";
    $menuLog.style.height = ABF_Config.menuLogCoordinates.height + "px";
    $menuLog.style.minWidth = ABF_Config.menuLogCoordinates.originWidth + "px";
    $menuLog.style.minHeight = ABF_Config.menuLogCoordinates.originHeight + "px";
    $menuLog.style.resize = "both";
    $menuLog.style.overflow = "auto";
    $menuLog.style.display = ABF_Config.menuLogCoordinates.open ? "block" : "none";
    $menuLog.style.pointerEvents = ABF_Config.menuLogCoordinates.open ? "auto" : "none";

    new ResizeObserver((entries) => {
        let { width, height } = entries[0].contentRect;
        updateConfig("menuLogCoordinates", { width, height });
    }).observe($menuLog);

    const $menuLogHeader = document.createElement("div");
    $menuLogHeader.style.width = "100%";
    $menuLogHeader.style.height = "30px";
    $menuLogHeader.style.background = "#00D2FF";
    $menuLogHeader.style.textAlign = "left";
    $menuLogHeader.style.padding = "5px";
    $menuLogHeader.style.cursor = "move";
    $menuLogHeader.style.color = "#FFFFFF";
    $menuLogHeader.style.display = "inline-flex";
    $menuLogHeader.style.alignItems = "center";
    $menuLogHeader.style.justifyContent = "center";
    $menuLogHeader.textContent = "ABF - Console Log";

    const $menuLogMinimize = document.createElement("span");
    $menuLogMinimize.style.cursor = "pointer";
    $menuLogMinimize.style.position = "absolute";
    $menuLogMinimize.style.right = "0px";
    $menuLogMinimize.style.top = "-2px";
    $menuLogMinimize.style.color = "#FFFFFF";
    $menuLogMinimize.style.fontSize = "20px";
    $menuLogMinimize.style.width = "50px";
    $menuLogMinimize.style.height = "30px";
    $menuLogMinimize.style.display = "inline-flex";
    $menuLogMinimize.style.alignItems = "center";
    $menuLogMinimize.style.justifyContent = "center";
    $menuLogMinimize.textContent = "━━";

    $menuLogMinimize.addEventListener("click", function () {
        ABF_Config.menuLogCoordinates.open = !ABF_Config.menuLogCoordinates.open;
        $menuLog.style.display = ABF_Config.menuLogCoordinates.open ? "block" : "none";
        $menuLog.style.pointerEvents = ABF_Config.menuLogCoordinates.open ? "auto" : "none";
        $consoleLogCheckButton.checked = ABF_Config.menuLogCoordinates.open;
        updateConfig("menuLogCoordinates", { open: ABF_Config.menuLogCoordinates.open });
    });

    const $menuLogContent = document.createElement("div");
    $menuLogContent.style.width = "100%";
    $menuLogContent.style.height = "calc(100% - 30px)";
    $menuLogContent.style.padding = "5px";
    $menuLogContent.style.overflow = "scroll";
    $menuLogContent.style.userSelect = "text";
    $menuLogContent.style.backgroundColor = "rgba(255, 255, 255, 0.7)";

    const gnlog = function (mode, ...messages) {
        let modes = {
            e: "red",
            w: "yellow",
            i: "green",
        };
        let color = modes[mode.toLowerCase()] || "black";
        let message =
            messages
                .map((message) => {
                    if (typeof message === "boolean") {
                        return `<span style="color: ${message ? "blue" : "purple"}">${message}</span>`;
                    }
                    if (typeof message === "object") {
                        return `<span style="color: ${color}">${JSON.stringify(message)}</span>`;
                    }
                    if (typeof message === "number") {
                        return `<span style="color: blue">${message}</span>`;
                    }
                    return message;
                })
                .join(" ") || mode;

        let logMessage = document.createElement("div");
        logMessage.style.color = color;

        let date = ABF_Utils.getDateTime();
        let formattedTime = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;

        logMessage.innerHTML = `${formattedTime} - ${message}`;
        $menuLogContent.appendChild(logMessage);
        $menuLogContent.scrollTop = $menuLogContent.scrollHeight;
    };
    gnlog("i", "Khởi tạo thành công console log.");

    const $menuLogScrollTo = document.createElement("span");
    $menuLogScrollTo.style.cursor = "pointer";
    $menuLogScrollTo.style.position = "absolute";
    $menuLogScrollTo.style.right = "50px";
    $menuLogScrollTo.style.top = "0px";
    $menuLogScrollTo.style.color = "#FFFFFF";
    $menuLogScrollTo.style.fontSize = "20px";
    $menuLogScrollTo.style.backgroundColor = "gray";
    $menuLogScrollTo.style.width = "50px";
    $menuLogScrollTo.style.height = "30px";
    $menuLogScrollTo.style.display = "inline-flex";
    $menuLogScrollTo.style.alignItems = "center";
    $menuLogScrollTo.style.justifyContent = "center";
    $menuLogScrollTo.textContent = "⬇";

    $menuLogScrollTo.addEventListener("click", function () {
        $menuLogContent.scrollTop = $menuLogContent.scrollHeight;
    });

    $menuLogHeader.appendChild($menuLogMinimize);
    $menuLogHeader.appendChild($menuLogScrollTo);
    $menuLog.appendChild($menuLogHeader);
    $menuLog.appendChild($menuLogContent);
    ABF_Utils.draggableDiv("menuLogCoordinates", $menuLog, $menuLogHeader);

    // ===== Menu Client =====

    const $menuClient = document.createElement("div");
    $menuClient.style.position = "absolute";
    $menuClient.style.left = ABF_Config.menuClientCoordinates.x + "px";
    $menuClient.style.top = ABF_Config.menuClientCoordinates.y + "px";
    $menuClient.style.width = ABF_Config.menuClientCoordinates.width + "px";
    $menuClient.style.height = ABF_Config.menuClientCoordinates.height + "px";
    $menuClient.style.minWidth = ABF_Config.menuClientCoordinates.originWidth + "px";
    $menuClient.style.minHeight = ABF_Config.menuClientCoordinates.originHeight + "px";
    $menuClient.style.resize = "both";
    $menuClient.style.overflow = "auto";
    $menuClient.style.display = ABF_Config.menuClientCoordinates.open ? "block" : "none";
    $menuClient.style.pointerEvents = ABF_Config.menuClientCoordinates.open ? "auto" : "none";

    new ResizeObserver((entries) => {
        let { width, height } = entries[0].contentRect;
        updateConfig("menuLogCoordinates", { width, height });
    }).observe($menuLog);

    const $menuClientHeader = document.createElement("div");
    $menuClientHeader.style.width = "100%";
    $menuClientHeader.style.height = "30px";
    $menuClientHeader.style.background = "#00D2FF";
    $menuClientHeader.style.textAlign = "left";
    $menuClientHeader.style.padding = "5px";
    $menuClientHeader.style.cursor = "move";
    $menuClientHeader.style.color = "#FFFFFF";
    $menuClientHeader.style.display = "inline-flex";
    $menuClientHeader.style.alignItems = "center";
    $menuClientHeader.style.justifyContent = "center";
    $menuClientHeader.textContent = "ABF - Menu Client";

    const $menuClientMinimize = document.createElement("span");
    $menuClientMinimize.style.cursor = "pointer";
    $menuClientMinimize.style.position = "absolute";
    $menuClientMinimize.style.right = "0px";
    $menuClientMinimize.style.top = "-2px";
    $menuClientMinimize.style.color = "#FFFFFF";
    $menuClientMinimize.style.fontSize = "20px";
    $menuClientMinimize.style.width = "50px";
    $menuClientMinimize.style.height = "30px";
    $menuClientMinimize.style.display = "inline-flex";
    $menuClientMinimize.style.alignItems = "center";
    $menuClientMinimize.style.justifyContent = "center";
    $menuClientMinimize.textContent = "━━";

    $menuClientMinimize.addEventListener("click", function () {
        ABF_Config.menuClientCoordinates.open = !ABF_Config.menuClientCoordinates.open;
        $menuClient.style.display = ABF_Config.menuClientCoordinates.open ? "block" : "none";
        $menuClient.style.pointerEvents = ABF_Config.menuClientCoordinates.open ? "auto" : "none";
        $clientCheckButton.checked = ABF_Config.menuClientCoordinates.open;
        updateConfig("menuClientCoordinates", { open: ABF_Config.menuClientCoordinates.open });
    });

    const $menuClientContent = document.createElement("div");
    $menuClientContent.style.width = "100%";
    $menuClientContent.style.height = "calc(100% - 30px)";
    $menuClientContent.style.padding = "5px";
    $menuClientContent.style.overflow = "scroll";
    $menuClientContent.style.userSelect = "text";
    $menuClientContent.style.backgroundColor = "rgba(255, 255, 255, 0.7)";

    $menuClientHeader.appendChild($menuClientMinimize);
    $menuClient.appendChild($menuClientHeader);
    $menuClient.appendChild($menuClientContent);
    ABF_Utils.draggableDiv("menuClientCoordinates", $menuClient, $menuClientHeader);

    $menu.appendChild($menuClient);
    $menu.appendChild($menuLog);
    document.body.appendChild($menu);

    // ===== Event =====

    const ABF_Events = {
        keyup: function (event) {
            if (ABF_Utils.isWritingText()) {
                return;
            }

            switch (event.code) {
                case ABF_Config.lineSplitHelper.binding:
                    ABF_Config.lineSplitHelper.active = !ABF_Config.lineSplitHelper.active;
                    gnlog("i", "lineSplitHelper-keybind:", ABF_Config.lineSplitHelper.active);
                    break;
                case ABF_Config.halt.binding:
                    ABF_Config.halt.active = !ABF_Config.halt.active;
                    gnlog("i", "halt-keybind:", ABF_Config.halt.active);
                    ABF_Main.halt.apply(this);
                    break;
                case "KeyP":
                    window.chatblock = !window.chatblock;
                    gnlog("i", "chatblock:", window.chatblock);
                    break;
            }
            GM_setValue("config", ABF_Config);
        },
        commandEvent: function (commandEvent) {
            gnlog("i", "commandEvent:", commandEvent);
            unsafeWindow.setFPS(1);

            let pingRating = "";
            let $pingElement = document.querySelector("#ping");
            let ping = $pingElement.innerText || $pingElement.textContent;

            let fpsRating = "";
            let $fpsElement = document.querySelector("#fps");
            let fps = $fpsElement.innerText || $fpsElement.textContent;

            let $chatBox = document.querySelector("#chtbox");

            switch (commandEvent.command) {
                case "/about":
                    $chatBox.value = `${ABF_Utils.useUnicodeFont("AgmaBetterFeatures", "serifItalic")} - [${GM_info.script.version}] - [GnU-Chan]`;
                    $chatBox.focus();
                    break;
                case "ping":
                case "/ping":
                case "/p":
                    if (commandEvent.command === "ping" && commandEvent.messages.length > 0) break;
                    if (parseInt(ping) > 0) {
                        let pingValue = parseInt(ping);
                        if (pingValue >= 0 && pingValue < 40) {
                            pingRating = "Ổn vcl :shamrock:";
                        } else if (pingValue >= 40 && pingValue < 70) {
                            pingRating = "Tạm ổn :shamrock:";
                        } else {
                            pingRating = "Chịu rồi :rage:";
                        }
                    } else {
                        ping = "???";
                        pingRating = "Ảo ma lazada :dizzy_face:";
                    }
                    $chatBox.value = `${ABF_Utils.useUnicodeFont("Ping hiện tại - [", "serifItalic")}${ping}${ABF_Utils.useUnicodeFont("] - " + pingRating, "serifItalic")}`;
                    $chatBox.focus();
                    break;
                case "fps":
                case "/fps":
                    if (commandEvent.command === "fps" && commandEvent.messages.length > 0) break;
                    if (parseInt(fps) > 0) {
                        let fpsValue = parseInt(fps);
                        if (fpsValue < 10) {
                            fpsRating = "Chịu rồi :rage:";
                        } else if (fpsValue >= 10 && fpsValue < 60) {
                            fpsRating = "Tạm ổn :shamrock:";
                        } else {
                            fpsRating = "Ổn vcl :shamrock:";
                        }
                    } else {
                        fps = "???";
                        fpsRating = "Ảo ma lazada :dizzy_face:";
                    }
                    $chatBox.value = `${ABF_Utils.useUnicodeFont("Fps hiện tại - [", "serifItalic")}${fps}${ABF_Utils.useUnicodeFont("] - " + fpsRating, "serifItalic")}`;
                    $chatBox.focus();
                    break;
                case "/halt":
                    $chatBox.value = "";
                    $chatBox.focus();
                    ABF_Config.halt.active = !ABF_Config.halt.active;
                    gnlog("i", "halt-command:", ABF_Config.halt.active);
                    ABF_Main.halt.apply(this);
                    break;
                // Funniest command
                case "pig":
                case "/pig":
                    if (commandEvent.command === "pig" && commandEvent.messages.length > 0) break;
                    window.pigs = window.pigs || ["🐷", "🐖", "🐽", ":pig:"];
                    window.pigs.push(window.pigs.shift());
                    let name = commandEvent.messages.length > 0 ? commandEvent.messages.join(" ") : "arc";
                    $chatBox.value = name + " <= " + window.pigs[0];
                    $chatBox.focus();
                    break;
            }
        },
    };

    // ===== Hàm chính =====

    const $mCanvas = document.querySelector("#canvas"),
        $mContext = $mCanvas.getContext("2d"),
        originalRequestFrame = window.requestAnimationFrame;

    const ABF_Main = {
        lineSplitHelper: () => {
            unsafeWindow.requestAnimationFrame = (callback) =>
                originalRequestFrame(() => {
                    callback();
                    const { active, lineWidth, color } = ABF_Config.lineSplitHelper;
                    if (active) {
                        const { width, height } = $mCanvas.getBoundingClientRect();
                        $mContext.lineWidth = lineWidth;
                        $mContext.strokeStyle = color;
                        $mContext.globalAlpha = 1;
                        $mContext.beginPath();
                        $mContext.moveTo(0, height / 2 - lineWidth / 2);
                        $mContext.lineTo(width, height / 2 - lineWidth / 2);
                        $mContext.moveTo(width / 2 - lineWidth / 2, 0);
                        $mContext.lineTo(width / 2 - lineWidth / 2, height);
                        $mContext.stroke();
                    }
                });
        },
        halt: () => {
            const overlays = document.querySelector("#overlays"),
                advert = document.querySelector("#advert"),
                { innerWidth, innerHeight, requestAnimationFrame } = window,
                { mouseCoordinates, halt } = ABF_Config;
            if ((overlays && overlays.style.display !== "none") || (advert && advert.style.display !== "none")) {
                halt.active = !halt.active;
                gnlog("i", "halt-menu:", halt.active);
            }
            const angle = (Math.atan2(innerHeight / 2 - mouseCoordinates.y, innerWidth / 2 - mouseCoordinates.x) * 180) / Math.PI + 270,
                distance = 9999,
                posX = innerWidth / 2 + Math.cos((angle * Math.PI) / 180) * distance,
                posY = innerHeight / 2 + Math.sin((angle * Math.PI) / 180) * distance;
            $mCanvas.dispatchEvent(new MouseEvent("mousemove", { clientX: posX, clientY: posY, bubbles: true }));
            halt.active && requestAnimationFrame(ABF_Main.halt);
        },
        nameCopier: function () {
            let copyNameItem = document.createElement("li");
            copyNameItem.className = "contextmenu-item enabled";

            let iconDiv = document.createElement("div");
            iconDiv.className = "context-icon";
            let icon = document.createElement("i");
            icon.className = "fa fa-copy";
            icon.style.fontSize = "2em";
            iconDiv.appendChild(icon);

            let textP = document.createElement("p");
            textP.textContent = "Copy Name To Chat";

            copyNameItem.appendChild(iconDiv);
            copyNameItem.appendChild(textP);

            let contextSpectate = document.querySelector("#contextSpectate");
            contextSpectate.parentNode.insertBefore(copyNameItem, contextSpectate.nextSibling);

            copyNameItem.addEventListener("click", function () {
                let contextPlayerName = document.querySelector("#contextPlayerName").textContent.trim();
                if (contextPlayerName === "(no player selected)") {
                    let curser = document.querySelector("#curser");
                    curser.textContent = "Không có người chơi nào được chọn 🚫";
                    curser.style.display = "block";
                    curser.style.color = "rgb(255, 0, 0)";
                    window.setTimeout(function () {
                        curser.style.display = "none";
                    }, 5000);
                } else {
                    gnlog("i", "Copy name to chat:", contextPlayerName);
                    let chtbox = document.querySelector("#chtbox");
                    chtbox.value = chtbox.value + contextPlayerName;
                    chtbox.focus();
                    let settingsBtn = document.querySelector("#settingsBtn");
                    settingsBtn.click();
                    setTimeout(function () {
                        settingsBtn.click();
                    }, 20);
                }
            });
        },
        skinApplier: function () {
            let useWearablesItem = document.createElement("li");
            useWearablesItem.className = "contextmenu-item enabled";
            let wearablesIconDiv = document.createElement("div");
            wearablesIconDiv.className = "context-icon";
            let wearablesIcon = document.createElement("i");
            wearablesIcon.className = "fa fa-graduation-cap";
            wearablesIcon.style.fontSize = "2em";
            let wearablesTextP = document.createElement("p");
            wearablesTextP.textContent = "Use Player's Wearables";
            wearablesIconDiv.appendChild(wearablesIcon);
            useWearablesItem.appendChild(wearablesIconDiv);
            useWearablesItem.appendChild(wearablesTextP);

            let contextPlayer = document.querySelector("#contextPlayer");
            contextPlayer.parentNode.insertBefore(useWearablesItem, contextPlayer.nextSibling);

            let useSkinItem = document.createElement("li");
            useSkinItem.className = "contextmenu-item enabled";
            let skinIconDiv = document.createElement("div");
            skinIconDiv.className = "context-icon";
            let skinIcon = document.createElement("i");
            skinIcon.className = "fa fa-eye";
            skinIcon.style.fontSize = "2em";
            let skinTextP = document.createElement("p");
            skinTextP.textContent = "Use Player's Skin";
            skinIconDiv.appendChild(skinIcon);
            useSkinItem.appendChild(skinIconDiv);
            useSkinItem.appendChild(skinTextP);

            contextPlayer.parentNode.insertBefore(useSkinItem, contextPlayer.nextSibling);

            useSkinItem.addEventListener("click", function () {
                let skinUrl = ABF_Utils.getSkinUrl("#contextPlayerSkin");
                if (skinUrl === null) {
                    let curser = document.querySelector("#curser");
                    curser.textContent = "Người chơi này không có skin 🚫";
                    curser.style.display = "block";
                    curser.style.color = "rgb(255, 0, 0)";
                    window.setTimeout(function () {
                        curser.style.display = "none";
                    }, 5000);
                } else {
                    let skinId = parseInt(skinUrl.substr(22));
                    let currentTime = Date.now();
                    if (currentTime - ABF_Config.skinChangeTime < 5000) {
                        let curser = document.querySelector("#curser");
                        curser.textContent = "Vui lòng chờ 5 giây sau mỗi lần thay đổi skin 🕒";
                        curser.style.display = "block";
                        curser.style.color = "rgb(255, 0, 0)";
                        window.setTimeout(function () {
                            curser.style.display = "none";
                        }, 5000);
                    } else {
                        ABF_Config.skinChangeTime = currentTime;
                        updateConfig("skinChangeTime", ABF_Config.skinChangeTime);
                        gnlog("i", "Use skinId:", skinId);
                        ABF_Utils.useSkin(skinId);
                    }
                }
            });

            useWearablesItem.addEventListener("click", function () {
                let wearables = [ABF_Utils.extractWearableId(document.querySelector("#contextPlayerWear1").style.backgroundImage), ABF_Utils.extractWearableId(document.querySelector("#contextPlayerWear2").style.backgroundImage), ABF_Utils.extractWearableId(document.querySelector("#contextPlayerWear3").style.backgroundImage), ABF_Utils.extractWearableId(document.querySelector("#contextPlayerWear4").style.backgroundImage), ABF_Utils.extractWearableId(document.querySelector("#contextPlayerWear5").style.backgroundImage)];
                if (wearables.every((wearable) => wearable === null)) {
                    let curser = document.querySelector("#curser");
                    curser.textContent = "Người chơi này không có wearables 🚫";
                    curser.style.display = "block";
                    curser.style.color = "rgb(255, 0, 0)";
                    window.setTimeout(function () {
                        curser.style.display = "none";
                    }, 5000);
                } else {
                    let currentTime = Date.now();
                    if (currentTime - ABF_Config.wearableChangeTime < 5000) {
                        let curser = document.querySelector("#curser");
                        curser.textContent = "Vui lòng chờ 5 giây sau mỗi lần thay đổi wearables 🕒";
                        curser.style.display = "block";
                        curser.style.color = "rgb(255, 0, 0)";
                        window.setTimeout(function () {
                            curser.style.display = "none";
                        }, 5000);
                    } else {
                        ABF_Config.wearableChangeTime = currentTime;
                        updateConfig("wearableChangeTime", ABF_Config.wearableChangeTime);
                        gnlog("i", "Use wearables:", wearables);
                        unsafeWindow.useWearables(wearables);
                    }
                }
            });
        },
        pig: function () {
            let pigItem = document.createElement("li");
            pigItem.className = "contextmenu-item enabled";

            let iconDiv = document.createElement("div");
            iconDiv.className = "context-icon";
            let icon = document.createElement("i");
            icon.textContent = "🐷";
            icon.style.fontSize = "2em";
            iconDiv.appendChild(icon);

            let textP = document.createElement("p");
            textP.textContent = "PIG";

            pigItem.appendChild(iconDiv);
            pigItem.appendChild(textP);

            let contextSpectate = document.querySelector("#contextSpectate");
            contextSpectate.parentNode.insertBefore(pigItem, contextSpectate.nextSibling);

            pigItem.addEventListener("click", function () {
                let contextPlayerName = document.querySelector("#contextPlayerName").textContent.trim();
                if (contextPlayerName === "(no player selected)") {
                    let curser = document.querySelector("#curser");
                    curser.textContent = "Không có người chơi nào được chọn 🚫";
                    curser.style.display = "block";
                    curser.style.color = "rgb(255, 0, 0)";
                    window.setTimeout(function () {
                        curser.style.display = "none";
                    }, 5000);
                } else {
                    let $chtbox = document.querySelector("#chtbox");
                    let name = contextPlayerName;
                    $chtbox.value = "/pig " + name;
                    $chtbox.focus();

                    let settingsBtn = document.querySelector("#settingsBtn");
                    settingsBtn.click();
                    setTimeout(function () {
                        settingsBtn.click();
                    }, 20);

                    // setInterval(function () {
                    //     var ev = new KeyboardEvent("keydown", { altKey: false, bubbles: true, cancelBubble: false, cancelable: true, charCode: 0, code: "Enter", composed: true, ctrlKey: false, currentTarget: null, defaultPrevented: true, detail: 0, eventPhase: 0, isComposing: false, isTrusted: true, key: "Enter", keyCode: 13, location: 0, metaKey: false, repeat: false, returnValue: false, shiftKey: false, type: "keydown", which: 13 });

                    //     $chtbox.dispatchEvent(new KeyboardEvent("keydown", ev));
                    // }, 10000);
                }
            });
        },
    };

    // ===== Init =====

    window.chatblock = false;

    unsafeWindow.onmessagesetter = Object.getOwnPropertyDescriptor(WebSocket.prototype, "onmessage").set;
    Object.defineProperty(unsafeWindow.WebSocket.prototype, "onmessage", {
        set() {
            let old = arguments[0];
            arguments[0] = function (messageEvent) {
                let data = messageEvent.data;
                if (data instanceof ArrayBuffer) {
                    if (data.byteLength % 2 === 0) {
                        data = new Uint16Array(data);
                        if (data[0] === 1123 || data[0] == 33891) {
                            data = data.slice(data[0] == 1123 ? 7 : 9, -1);
                            let index = data.indexOf(0);
                            let username = String.fromCharCode.apply(null, data.slice(0, index));
                            if (username != "Spectator" && document.getElementById("nick").value != username) {
                                let messages = String.fromCharCode.apply(null, data.slice(index + 1)).split(" ");
                                let command = messages.shift();
                                let $chatBox = document.querySelector("#chtbox");
                                if (command === "/pig") {
                                    window.pigs = window.pigs || ["🐷", "🐖", "🐽", ":pig:"];
                                    window.pigs.push(window.pigs.shift());
                                    $chatBox.value = messages.join("") + " <= " + window.pigs[0];
                                    $chatBox.focus();
                                }
                                if (command === "pig") {
                                    window.pigs = window.pigs || ["🐷", "🐖", "🐽", ":pig:"];
                                    window.pigs.push(window.pigs.shift());
                                    $chatBox.value = "arc" + " <= " + window.pigs[0];
                                    $chatBox.focus();
                                }
                                if (window.chatblock) {
                                    window.pigs = window.pigs || ["🐷", "🐖", "🐽", ":pig:"];
                                    window.pigs.push(window.pigs.shift());
                                    $chatBox.value = username + " <= " + window.pigs[0];
                                    $chatBox.focus();
                                }
                            } else {
                                console.log("i", "WebSocket message:", data[0]);
                                console.log("i", "WebSocket message:", String.fromCharCode.apply(null, data));
                            }
                        }
                    }
                }
                old.apply(this, arguments);
            };
            return unsafeWindow.onmessagesetter.apply(this, arguments);
        },
    });

    updateConfig("mouseCoordinates", _ABF_DefaultConfig.mouseCoordinates);
    document.querySelector("body").addEventListener("mousemove", function (event) {
        ABF_Config.mouseCoordinates.x = event.clientX;
        ABF_Config.mouseCoordinates.y = event.clientY;
        ABF_Config.mouseCoordinates.time = Date.now();
    });

    document.querySelector("#chtbox").addEventListener("keydown", ({ code, target }) => {
        const { Enter, NumpadEnter } = ABF_Utils.keyboardMap;
        if (code === Enter || code === NumpadEnter) {
            let messages = target.value.split(" "),
                commandEvent = new Event("commandEvent", { bubbles: true });
            messages = messages.filter((message) => message !== "" && message !== "\t" && message !== "\n" && message !== "\r");
            commandEvent.command = messages.shift();
            commandEvent.messages = messages.map((message) => message.trim());
            window.dispatchEvent(commandEvent);
        }
    });

    ABF_Main.lineSplitHelper();
    updateConfig("halt", _ABF_DefaultConfig.halt);

    updateConfig("skinChangeTime", _ABF_DefaultConfig.skinChangeTime);
    updateConfig("wearableChangeTime", _ABF_DefaultConfig.wearableChangeTime);
    ABF_Main.nameCopier();
    ABF_Main.skinApplier();
    ABF_Main.pig();

    window.addEventListener("keyup", ABF_Events.keyup);
    window.addEventListener("commandEvent", ABF_Events.commandEvent);
    gnlog("i", "Khởi tạo thành công");
})();
