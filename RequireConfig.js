requirejs.config({
    baseUrl: ".",
    paths: {
        "three": "https://cdnjs.cloudflare.com/ajax/libs/three.js/99/three.min",
        "orbit": "three-orbitcontrols-ts"
    }
});
requirejs(["Program"], function (Program) {
});
//# sourceMappingURL=RequireConfig.js.map