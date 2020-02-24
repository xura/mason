"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const entity_service_1 = require("./entity.service");
const entity_resolver_1 = require("./entity.resolver");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const entity_model_1 = require("./entity.model");
let EntityModule = class EntityModule {
};
EntityModule = __decorate([
    common_1.Module({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([entity_model_1.Entity])
        ],
        providers: [entity_service_1.EntityService, entity_resolver_1.EntityResolver]
    })
], EntityModule);
exports.EntityModule = EntityModule;
//# sourceMappingURL=entity.module.js.map