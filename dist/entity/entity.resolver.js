"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const entity_model_1 = require("./entity.model");
const entity_service_1 = require("./entity.service");
const entity_input_1 = require("./entity.input");
let EntityResolver = class EntityResolver {
    constructor(entityService) {
        this.entityService = entityService;
    }
    async entities() {
        return this.entityService.findAll();
    }
    async findByName(name) {
        return this.entityService.findByName(name);
    }
    async createEntity(input) {
        return this.entityService.create(input);
    }
};
__decorate([
    graphql_1.Query(() => [entity_model_1.Entity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntityResolver.prototype, "entities", null);
__decorate([
    graphql_1.Query(() => [entity_model_1.Entity]),
    __param(0, graphql_1.Args({ name: 'name', type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EntityResolver.prototype, "findByName", null);
__decorate([
    graphql_1.Mutation(() => entity_model_1.Entity),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_input_1.EntityInput]),
    __metadata("design:returntype", Promise)
], EntityResolver.prototype, "createEntity", null);
EntityResolver = __decorate([
    graphql_1.Resolver(of => entity_model_1.Entity),
    __metadata("design:paramtypes", [entity_service_1.EntityService])
], EntityResolver);
exports.EntityResolver = EntityResolver;
//# sourceMappingURL=entity.resolver.js.map