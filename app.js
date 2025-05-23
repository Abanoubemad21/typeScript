"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathOperations = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        Employee.count++;
        this.address = address;
        this.username = username;
    }
    Employee.getEmployeeCount = function () {
        return Employee.count;
    };
    Employee.prototype.getUsername = function () {
        return this.username;
    };
    Employee.count = 0;
    return Employee;
}());
var emp1 = new Employee(1, "abanoub", "bebo", "abanoub@gmalk.com", { street: "st1", suite: "s1", city: "cairo", zipcode: "12345", geo: { lat: "12.3", lng: "45.6" } });
var emp2 = new Employee(2, "danial", "dani", "abanousab@gmalk.com", { street: "st2", suite: "s2", city: "fayium", zipcode: "121315", geo: { lat: "12.3", lng: "45.6" } });
console.log(emp1);
console.log(emp2);
console.log(Employee.getEmployeeCount());
//2,3
function log(classname) {
    var getdate = new Date().toLocaleString();
    console.log("creaTed At :", getdate, ", Class :", classname.name);
}
var Manager = function () {
    var _classDecorators = [log];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Employee;
    var Manager = _classThis = /** @class */ (function (_super) {
        __extends(Manager_1, _super);
        function Manager_1(id, name, username, email, address) {
            return _super.call(this, id, name, username, email, address) || this;
        }
        Manager_1.prototype.getAddress = function () {
            return this.address;
        };
        return Manager_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Manager");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Manager = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Manager = _classThis;
}();
var emp3 = new Manager(3, "adam", "bebo", "sdsad@ff", { street: "st22", suite: "s22", city: "cairo", zipcode: "1231345", geo: { lat: "122.3", lng: "451.6" } });
console.log(emp3.getAddress());
//4
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
})(MathOperations || (exports.MathOperations = MathOperations = {}));
