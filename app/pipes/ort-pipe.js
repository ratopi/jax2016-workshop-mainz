System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var OrtPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // {{ f.abflugort | ort:'short' }}
            OrtPipe = (function () {
                function OrtPipe() {
                }
                OrtPipe.prototype.transform = function (value, args) {
                    var NAMES = {
                        'Graz': {
                            long: "Flughafen Graz-Thalerhof",
                            short: "GRZ"
                        },
                        'Hamburg': {
                            long: "Airport Hamburg",
                            short: "HAM"
                        },
                        'Frankfurt': {
                            long: "Airport Frankfurt Rhein-Main",
                            short: "FRA"
                        }
                    };
                    var fmt = args[0]; // short, long
                    console.log(args);
                    var o = NAMES[value];
                    var result = o ? o[fmt] : value;
                    result = result ? result : value;
                    console.log(result);
                    console.log(fmt);
                    console.log(o);
                    return result;
                };
                OrtPipe = __decorate([
                    core_1.Pipe({
                        name: 'ort'
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrtPipe);
                return OrtPipe;
            }());
            exports_1("OrtPipe", OrtPipe);
        }
    }
});
//# sourceMappingURL=ort-pipe.js.map