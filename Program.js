define(["require", "exports", "./Scene"], function (require, exports, Scene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Playground: https://plnkr.co/edit/yICv96E7lTK8xu7DohJB?p=preview
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var scene = new Scene_1.Scene();
            scene.Init();
            scene.Animate();
        };
        return Program;
    }());
    Program.Main();
});
//# sourceMappingURL=Program.js.map