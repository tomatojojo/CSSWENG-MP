"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const order_1 = __importDefault(require("../controllers/order"));
const enum_1 = require("../models/enum");
const roleValidation_1 = __importDefault(require("../middleware/roleValidation"));
const authValidation_1 = __importDefault(require("../middleware/authValidation"));
const router = express.Router();
router.get('/all', authValidation_1.default, roleValidation_1.default(enum_1.ALL_ROLES), order_1.default.all);
router.get('/id', authValidation_1.default, roleValidation_1.default(enum_1.ALL_ROLES), order_1.default.id);
router.post('/create', authValidation_1.default, roleValidation_1.default([enum_1.Roles.ADMIN, enum_1.Roles.VIEW_EDIT]), order_1.default.create);
router.post('/update', authValidation_1.default, roleValidation_1.default([enum_1.Roles.ADMIN, enum_1.Roles.VIEW_EDIT]), order_1.default.update);
router.delete('/delete', authValidation_1.default, roleValidation_1.default([enum_1.Roles.ADMIN, enum_1.Roles.VIEW_EDIT]), order_1.default.remove);
router.get('/filter', authValidation_1.default, roleValidation_1.default(enum_1.ALL_ROLES), order_1.default.filter);
router.post('/verify', authValidation_1.default, roleValidation_1.default([enum_1.Roles.ADMIN]), order_1.default.verify);
exports.default = router;
