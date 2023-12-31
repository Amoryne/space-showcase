/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/InvocationContext.ts":
/*!**********************************!*\
  !*** ./src/InvocationContext.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InvocationContext_userLogHandler, _InvocationContextExtraInputs_inputs, _InvocationContextExtraOutputs_outputs;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvocationContext = void 0;
class InvocationContext {
    constructor(init) {
        var _a, _b, _c, _d;
        _InvocationContext_userLogHandler.set(this, void 0);
        init = init || {};
        const fallbackString = 'unknown';
        this.invocationId = init.invocationId || fallbackString;
        this.functionName = init.functionName || fallbackString;
        this.extraInputs = new InvocationContextExtraInputs();
        this.extraOutputs = new InvocationContextExtraOutputs();
        this.retryContext = init.retryContext;
        this.traceContext = init.traceContext;
        this.triggerMetadata = init.triggerMetadata;
        this.options = {
            trigger: ((_a = init.options) === null || _a === void 0 ? void 0 : _a.trigger) || {
                name: fallbackString,
                type: fallbackString,
            },
            return: (_b = init.options) === null || _b === void 0 ? void 0 : _b.return,
            extraInputs: ((_c = init.options) === null || _c === void 0 ? void 0 : _c.extraInputs) || [],
            extraOutputs: ((_d = init.options) === null || _d === void 0 ? void 0 : _d.extraOutputs) || [],
        };
        __classPrivateFieldSet(this, _InvocationContext_userLogHandler, init.logHandler || fallbackLogHandler, "f");
    }
    log(...args) {
        __classPrivateFieldGet(this, _InvocationContext_userLogHandler, "f").call(this, 'information', ...args);
    }
    trace(...args) {
        __classPrivateFieldGet(this, _InvocationContext_userLogHandler, "f").call(this, 'trace', ...args);
    }
    debug(...args) {
        __classPrivateFieldGet(this, _InvocationContext_userLogHandler, "f").call(this, 'debug', ...args);
    }
    info(...args) {
        __classPrivateFieldGet(this, _InvocationContext_userLogHandler, "f").call(this, 'information', ...args);
    }
    warn(...args) {
        __classPrivateFieldGet(this, _InvocationContext_userLogHandler, "f").call(this, 'warning', ...args);
    }
    error(...args) {
        __classPrivateFieldGet(this, _InvocationContext_userLogHandler, "f").call(this, 'error', ...args);
    }
}
exports.InvocationContext = InvocationContext;
_InvocationContext_userLogHandler = new WeakMap();
class InvocationContextExtraInputs {
    constructor() {
        _InvocationContextExtraInputs_inputs.set(this, {});
    }
    get(inputOrName) {
        const name = typeof inputOrName === 'string' ? inputOrName : inputOrName.name;
        return __classPrivateFieldGet(this, _InvocationContextExtraInputs_inputs, "f")[name];
    }
    set(inputOrName, value) {
        const name = typeof inputOrName === 'string' ? inputOrName : inputOrName.name;
        __classPrivateFieldGet(this, _InvocationContextExtraInputs_inputs, "f")[name] = value;
    }
}
_InvocationContextExtraInputs_inputs = new WeakMap();
class InvocationContextExtraOutputs {
    constructor() {
        _InvocationContextExtraOutputs_outputs.set(this, {});
    }
    get(outputOrName) {
        const name = typeof outputOrName === 'string' ? outputOrName : outputOrName.name;
        return __classPrivateFieldGet(this, _InvocationContextExtraOutputs_outputs, "f")[name];
    }
    set(outputOrName, value) {
        const name = typeof outputOrName === 'string' ? outputOrName : outputOrName.name;
        __classPrivateFieldGet(this, _InvocationContextExtraOutputs_outputs, "f")[name] = value;
    }
}
_InvocationContextExtraOutputs_outputs = new WeakMap();
function fallbackLogHandler(level, ...args) {
    switch (level) {
        case 'trace':
            console.trace(...args);
            break;
        case 'debug':
            console.debug(...args);
            break;
        case 'information':
            console.info(...args);
            break;
        case 'warning':
            console.warn(...args);
            break;
        case 'critical':
        case 'error':
            console.error(...args);
            break;
        default:
            console.log(...args);
    }
}


/***/ }),

/***/ "./src/InvocationModel.ts":
/*!********************************!*\
  !*** ./src/InvocationModel.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InvocationModel_instances, _InvocationModel_isDone, _InvocationModel_coreCtx, _InvocationModel_functionName, _InvocationModel_bindings, _InvocationModel_triggerType, _InvocationModel_convertOutput, _InvocationModel_log, _InvocationModel_systemLog, _InvocationModel_userLog;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvocationModel = void 0;
const util_1 = __webpack_require__(/*! util */ "util");
const InvocationContext_1 = __webpack_require__(/*! ./InvocationContext */ "./src/InvocationContext.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
const fromRpcBindings_1 = __webpack_require__(/*! ./converters/fromRpcBindings */ "./src/converters/fromRpcBindings.ts");
const fromRpcContext_1 = __webpack_require__(/*! ./converters/fromRpcContext */ "./src/converters/fromRpcContext.ts");
const fromRpcTriggerMetadata_1 = __webpack_require__(/*! ./converters/fromRpcTriggerMetadata */ "./src/converters/fromRpcTriggerMetadata.ts");
const fromRpcTypedData_1 = __webpack_require__(/*! ./converters/fromRpcTypedData */ "./src/converters/fromRpcTypedData.ts");
const toCamelCase_1 = __webpack_require__(/*! ./converters/toCamelCase */ "./src/converters/toCamelCase.ts");
const toRpcHttp_1 = __webpack_require__(/*! ./converters/toRpcHttp */ "./src/converters/toRpcHttp.ts");
const toRpcTypedData_1 = __webpack_require__(/*! ./converters/toRpcTypedData */ "./src/converters/toRpcTypedData.ts");
const isTrigger_1 = __webpack_require__(/*! ./utils/isTrigger */ "./src/utils/isTrigger.ts");
const nonNull_1 = __webpack_require__(/*! ./utils/nonNull */ "./src/utils/nonNull.ts");
class InvocationModel {
    constructor(coreCtx) {
        _InvocationModel_instances.add(this);
        _InvocationModel_isDone.set(this, false);
        _InvocationModel_coreCtx.set(this, void 0);
        _InvocationModel_functionName.set(this, void 0);
        _InvocationModel_bindings.set(this, void 0);
        _InvocationModel_triggerType.set(this, void 0);
        __classPrivateFieldSet(this, _InvocationModel_coreCtx, coreCtx, "f");
        __classPrivateFieldSet(this, _InvocationModel_functionName, (0, nonNull_1.nonNullProp)(coreCtx.metadata, 'name'), "f");
        __classPrivateFieldSet(this, _InvocationModel_bindings, (0, nonNull_1.nonNullProp)(coreCtx.metadata, 'bindings'), "f");
        const triggerBinding = (0, nonNull_1.nonNullValue)(Object.values(__classPrivateFieldGet(this, _InvocationModel_bindings, "f")).find((b) => (0, isTrigger_1.isTrigger)(b.type)), 'triggerBinding');
        __classPrivateFieldSet(this, _InvocationModel_triggerType, (0, nonNull_1.nonNullProp)(triggerBinding, 'type'), "f");
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    getArguments() {
        return __awaiter(this, void 0, void 0, function* () {
            const req = __classPrivateFieldGet(this, _InvocationModel_coreCtx, "f").request;
            const context = new InvocationContext_1.InvocationContext({
                invocationId: (0, nonNull_1.nonNullProp)(__classPrivateFieldGet(this, _InvocationModel_coreCtx, "f"), 'invocationId'),
                functionName: __classPrivateFieldGet(this, _InvocationModel_functionName, "f"),
                logHandler: (level, ...args) => __classPrivateFieldGet(this, _InvocationModel_instances, "m", _InvocationModel_userLog).call(this, level, ...args),
                retryContext: (0, fromRpcContext_1.fromRpcRetryContext)(req.retryContext),
                traceContext: (0, fromRpcContext_1.fromRpcTraceContext)(req.traceContext),
                triggerMetadata: (0, fromRpcTriggerMetadata_1.fromRpcTriggerMetadata)(req.triggerMetadata, __classPrivateFieldGet(this, _InvocationModel_triggerType, "f")),
                options: (0, fromRpcBindings_1.fromRpcBindings)(__classPrivateFieldGet(this, _InvocationModel_bindings, "f")),
            });
            const inputs = [];
            if (req.inputData) {
                for (const binding of req.inputData) {
                    const bindingName = (0, nonNull_1.nonNullProp)(binding, 'name');
                    let input = (0, fromRpcTypedData_1.fromRpcTypedData)(binding.data);
                    const bindingType = __classPrivateFieldGet(this, _InvocationModel_bindings, "f")[bindingName].type;
                    if ((0, isTrigger_1.isTimerTrigger)(bindingType)) {
                        input = (0, toCamelCase_1.toCamelCaseValue)(input);
                    }
                    if ((0, isTrigger_1.isTrigger)(bindingType)) {
                        inputs.push(input);
                    }
                    else {
                        context.extraInputs.set(bindingName, input);
                    }
                }
            }
            return { context, inputs };
        });
    }
    invokeFunction(context, inputs, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return yield Promise.resolve(handler(inputs[0], context));
            }
            finally {
                __classPrivateFieldSet(this, _InvocationModel_isDone, true, "f");
            }
        });
    }
    getResponse(context, result) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = { invocationId: __classPrivateFieldGet(this, _InvocationModel_coreCtx, "f").invocationId };
            response.outputData = [];
            let usedReturnValue = false;
            for (const [name, binding] of Object.entries(__classPrivateFieldGet(this, _InvocationModel_bindings, "f"))) {
                if (binding.direction === 'out') {
                    if (name === constants_1.returnBindingKey) {
                        response.returnValue = yield __classPrivateFieldGet(this, _InvocationModel_instances, "m", _InvocationModel_convertOutput).call(this, binding, result);
                        usedReturnValue = true;
                    }
                    else {
                        const outputValue = yield __classPrivateFieldGet(this, _InvocationModel_instances, "m", _InvocationModel_convertOutput).call(this, binding, context.extraOutputs.get(name));
                        if ((0, nonNull_1.isDefined)(outputValue)) {
                            response.outputData.push({ name, data: outputValue });
                        }
                    }
                }
            }
            // This allows the return value of non-HTTP triggered functions to be passed back
            // to the host, even if no explicit output binding is set. In most cases, this is ignored,
            // but e.g., Durable uses this to pass orchestrator state back to the Durable extension, w/o
            // an explicit output binding. See here for more details: https://github.com/Azure/azure-functions-nodejs-library/pull/25
            if (!usedReturnValue && !(0, isTrigger_1.isHttpTrigger)(__classPrivateFieldGet(this, _InvocationModel_triggerType, "f"))) {
                response.returnValue = (0, toRpcTypedData_1.toRpcTypedData)(result);
            }
            return response;
        });
    }
}
exports.InvocationModel = InvocationModel;
_InvocationModel_isDone = new WeakMap(), _InvocationModel_coreCtx = new WeakMap(), _InvocationModel_functionName = new WeakMap(), _InvocationModel_bindings = new WeakMap(), _InvocationModel_triggerType = new WeakMap(), _InvocationModel_instances = new WeakSet(), _InvocationModel_convertOutput = function _InvocationModel_convertOutput(binding, value) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (((_a = binding.type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'http') {
            return (0, toRpcHttp_1.toRpcHttp)(value);
        }
        else {
            return (0, toRpcTypedData_1.toRpcTypedData)(value);
        }
    });
}, _InvocationModel_log = function _InvocationModel_log(level, logCategory, ...args) {
    __classPrivateFieldGet(this, _InvocationModel_coreCtx, "f").log(level, logCategory, (0, util_1.format)(...args));
}, _InvocationModel_systemLog = function _InvocationModel_systemLog(level, ...args) {
    __classPrivateFieldGet(this, _InvocationModel_instances, "m", _InvocationModel_log).call(this, level, 'system', ...args);
}, _InvocationModel_userLog = function _InvocationModel_userLog(level, ...args) {
    if (__classPrivateFieldGet(this, _InvocationModel_isDone, "f") && __classPrivateFieldGet(this, _InvocationModel_coreCtx, "f").state !== 'postInvocationHooks') {
        let badAsyncMsg = "Warning: Unexpected call to 'log' on the context object after function execution has completed. Please check for asynchronous calls that are not awaited. ";
        badAsyncMsg += `Function name: ${__classPrivateFieldGet(this, _InvocationModel_functionName, "f")}. Invocation Id: ${__classPrivateFieldGet(this, _InvocationModel_coreCtx, "f").invocationId}.`;
        __classPrivateFieldGet(this, _InvocationModel_instances, "m", _InvocationModel_systemLog).call(this, 'warning', badAsyncMsg);
    }
    __classPrivateFieldGet(this, _InvocationModel_instances, "m", _InvocationModel_log).call(this, level, 'user', ...args);
};


/***/ }),

/***/ "./src/addBindingName.ts":
/*!*******************************!*\
  !*** ./src/addBindingName.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addBindingName = exports.InvocationContext = exports.HttpResponse = exports.HttpRequest = void 0;
var HttpRequest_1 = __webpack_require__(/*! ./http/HttpRequest */ "./src/http/HttpRequest.ts");
Object.defineProperty(exports, "HttpRequest", ({ enumerable: true, get: function () { return HttpRequest_1.HttpRequest; } }));
var HttpResponse_1 = __webpack_require__(/*! ./http/HttpResponse */ "./src/http/HttpResponse.ts");
Object.defineProperty(exports, "HttpResponse", ({ enumerable: true, get: function () { return HttpResponse_1.HttpResponse; } }));
var InvocationContext_1 = __webpack_require__(/*! ./InvocationContext */ "./src/InvocationContext.ts");
Object.defineProperty(exports, "InvocationContext", ({ enumerable: true, get: function () { return InvocationContext_1.InvocationContext; } }));
const bindingCounts = {};
/**
 * If the host spawns multiple workers, it expects the metadata (including binding name) to be the same accross workers
 * That means we need to generate binding names in a deterministic fashion, so we'll do that using a count
 * There's a tiny risk users register bindings in a non-deterministic order (i.e. async race conditions), but it's okay considering the following:
 * 1. We will track the count individually for each binding type. This makes the names more readable and reduces the chances a race condition will matter
 * 2. Users can manually specify the name themselves (aka if they're doing weird async stuff) and we will respect that
 * More info here: https://github.com/Azure/azure-functions-nodejs-worker/issues/638
 */
function addBindingName(binding, suffix) {
    if (!binding.name) {
        let bindingType = binding.type;
        if (!bindingType.toLowerCase().endsWith(suffix.toLowerCase())) {
            bindingType += suffix;
        }
        let count = bindingCounts[bindingType] || 0;
        count += 1;
        bindingCounts[bindingType] = count;
        binding.name = bindingType + count.toString();
    }
    return binding;
}
exports.addBindingName = addBindingName;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generic = exports.cosmosDB = exports.eventGrid = exports.eventHub = exports.serviceBusTopic = exports.serviceBusQueue = exports.storageQueue = exports.storageBlob = exports.timer = exports.http = exports.deleteRequest = exports.patch = exports.post = exports.put = exports.get = void 0;
const InvocationModel_1 = __webpack_require__(/*! ./InvocationModel */ "./src/InvocationModel.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
const toRpcDuration_1 = __webpack_require__(/*! ./converters/toRpcDuration */ "./src/converters/toRpcDuration.ts");
const output = __webpack_require__(/*! ./output */ "./src/output.ts");
const trigger = __webpack_require__(/*! ./trigger */ "./src/trigger.ts");
const isTrigger_1 = __webpack_require__(/*! ./utils/isTrigger */ "./src/utils/isTrigger.ts");
let coreApi;
function tryGetCoreApiLazy() {
    if (coreApi === undefined) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            coreApi = __webpack_require__(/*! @azure/functions-core */ "@azure/functions-core");
        }
        catch (_a) {
            coreApi = null;
        }
    }
    return coreApi;
}
class ProgrammingModel {
    constructor() {
        this.name = '@azure/functions';
        this.version = constants_1.version;
    }
    getInvocationModel(coreCtx) {
        return new InvocationModel_1.InvocationModel(coreCtx);
    }
}
let hasSetup = false;
function setup() {
    const coreApi = tryGetCoreApiLazy();
    if (!coreApi) {
        console.warn('WARNING: Failed to detect the Azure Functions runtime. Switching "@azure/functions" package to test mode - not all features are supported.');
    }
    else {
        coreApi.setProgrammingModel(new ProgrammingModel());
    }
    hasSetup = true;
}
function convertToHttpOptions(optionsOrHandler, method) {
    const options = typeof optionsOrHandler === 'function' ? { handler: optionsOrHandler } : optionsOrHandler;
    options.methods = [method];
    return options;
}
function convertToGenericOptions(options, triggerMethod) {
    const { handler, return: ret, trigger, extraInputs, extraOutputs } = options, triggerOptions = __rest(options, ["handler", "return", "trigger", "extraInputs", "extraOutputs"]);
    return {
        trigger: trigger !== null && trigger !== void 0 ? trigger : triggerMethod(triggerOptions),
        return: ret,
        extraInputs,
        extraOutputs,
        handler,
    };
}
function get(name, optionsOrHandler) {
    http(name, convertToHttpOptions(optionsOrHandler, 'GET'));
}
exports.get = get;
function put(name, optionsOrHandler) {
    http(name, convertToHttpOptions(optionsOrHandler, 'PUT'));
}
exports.put = put;
function post(name, optionsOrHandler) {
    http(name, convertToHttpOptions(optionsOrHandler, 'POST'));
}
exports.post = post;
function patch(name, optionsOrHandler) {
    http(name, convertToHttpOptions(optionsOrHandler, 'PATCH'));
}
exports.patch = patch;
function deleteRequest(name, optionsOrHandler) {
    http(name, convertToHttpOptions(optionsOrHandler, 'DELETE'));
}
exports.deleteRequest = deleteRequest;
function http(name, options) {
    options.return || (options.return = output.http({}));
    generic(name, convertToGenericOptions(options, trigger.http));
}
exports.http = http;
function timer(name, options) {
    generic(name, convertToGenericOptions(options, trigger.timer));
}
exports.timer = timer;
function storageBlob(name, options) {
    generic(name, convertToGenericOptions(options, trigger.storageBlob));
}
exports.storageBlob = storageBlob;
function storageQueue(name, options) {
    generic(name, convertToGenericOptions(options, trigger.storageQueue));
}
exports.storageQueue = storageQueue;
function serviceBusQueue(name, options) {
    generic(name, convertToGenericOptions(options, trigger.serviceBusQueue));
}
exports.serviceBusQueue = serviceBusQueue;
function serviceBusTopic(name, options) {
    generic(name, convertToGenericOptions(options, trigger.serviceBusTopic));
}
exports.serviceBusTopic = serviceBusTopic;
function eventHub(name, options) {
    generic(name, convertToGenericOptions(options, trigger.eventHub));
}
exports.eventHub = eventHub;
function eventGrid(name, options) {
    generic(name, convertToGenericOptions(options, trigger.eventGrid));
}
exports.eventGrid = eventGrid;
function cosmosDB(name, options) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    generic(name, convertToGenericOptions(options, trigger.cosmosDB));
}
exports.cosmosDB = cosmosDB;
function generic(name, options) {
    if (!hasSetup) {
        setup();
    }
    const bindings = {};
    const trigger = options.trigger;
    bindings[trigger.name] = Object.assign(Object.assign({}, trigger), { direction: 'in', type: (0, isTrigger_1.isTrigger)(trigger.type) ? trigger.type : trigger.type + 'Trigger' });
    if (options.extraInputs) {
        for (const input of options.extraInputs) {
            bindings[input.name] = Object.assign(Object.assign({}, input), { direction: 'in' });
        }
    }
    if (options.return) {
        options.return.name = constants_1.returnBindingKey;
        bindings[options.return.name] = Object.assign(Object.assign({}, options.return), { direction: 'out' });
    }
    if (options.extraOutputs) {
        for (const output of options.extraOutputs) {
            bindings[output.name] = Object.assign(Object.assign({}, output), { direction: 'out' });
        }
    }
    let retryOptions;
    if (options.retry) {
        retryOptions = Object.assign(Object.assign({}, options.retry), { retryStrategy: options.retry.strategy, delayInterval: (0, toRpcDuration_1.toRpcDuration)(options.retry.delayInterval, 'retry.delayInterval'), maximumInterval: (0, toRpcDuration_1.toRpcDuration)(options.retry.maximumInterval, 'retry.maximumInterval'), minimumInterval: (0, toRpcDuration_1.toRpcDuration)(options.retry.minimumInterval, 'retry.minimumInterval') });
    }
    const coreApi = tryGetCoreApiLazy();
    if (!coreApi) {
        console.warn(`WARNING: Skipping call to register function "${name}" because the "@azure/functions" package is in test mode.`);
    }
    else {
        coreApi.registerFunction({ name, bindings, retryOptions }, options.handler);
    }
}
exports.generic = generic;


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.returnBindingKey = exports.version = void 0;
exports.version = '4.0.1';
exports.returnBindingKey = '$return';


/***/ }),

/***/ "./src/converters/fromRpcBindings.ts":
/*!*******************************************!*\
  !*** ./src/converters/fromRpcBindings.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromRpcBindings = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
const isTrigger_1 = __webpack_require__(/*! ../utils/isTrigger */ "./src/utils/isTrigger.ts");
const nonNull_1 = __webpack_require__(/*! ../utils/nonNull */ "./src/utils/nonNull.ts");
function fromRpcBindings(bindings) {
    let trigger;
    let returnBinding;
    const extraInputs = [];
    const extraOutputs = [];
    for (const [name, binding] of Object.entries((0, nonNull_1.nonNullValue)(bindings, 'bindings'))) {
        if ((0, isTrigger_1.isTrigger)(binding.type)) {
            trigger = fromRpcBinding(name, binding);
        }
        else if (name === constants_1.returnBindingKey) {
            returnBinding = fromRpcBinding(name, binding);
        }
        else if (binding.direction === 'in') {
            extraInputs.push(fromRpcBinding(name, binding));
        }
        else if (binding.direction === 'out') {
            extraOutputs.push(fromRpcBinding(name, binding));
        }
    }
    return {
        trigger: (0, nonNull_1.nonNullValue)(trigger, 'trigger'),
        return: returnBinding,
        extraInputs,
        extraOutputs,
    };
}
exports.fromRpcBindings = fromRpcBindings;
function fromRpcBinding(name, binding) {
    return Object.assign(Object.assign({}, binding), { type: (0, nonNull_1.nonNullProp)(binding, 'type'), name });
}


/***/ }),

/***/ "./src/converters/fromRpcContext.ts":
/*!******************************************!*\
  !*** ./src/converters/fromRpcContext.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromRpcTraceContext = exports.fromRpcRetryContext = void 0;
const nonNull_1 = __webpack_require__(/*! ../utils/nonNull */ "./src/utils/nonNull.ts");
function fromRpcRetryContext(retryContext) {
    if (!retryContext) {
        return undefined;
    }
    else {
        const result = {
            retryCount: (0, nonNull_1.nonNullProp)(retryContext, 'retryCount'),
            maxRetryCount: (0, nonNull_1.nonNullProp)(retryContext, 'maxRetryCount'),
        };
        if (retryContext.exception) {
            result.exception = fromRpcException(retryContext.exception);
        }
        return result;
    }
}
exports.fromRpcRetryContext = fromRpcRetryContext;
function fromRpcException(exception) {
    const result = {};
    (0, nonNull_1.copyPropIfDefined)(exception, result, 'message');
    (0, nonNull_1.copyPropIfDefined)(exception, result, 'source');
    (0, nonNull_1.copyPropIfDefined)(exception, result, 'stackTrace');
    return result;
}
function fromRpcTraceContext(traceContext) {
    if (!traceContext) {
        return undefined;
    }
    else {
        const result = {};
        (0, nonNull_1.copyPropIfDefined)(traceContext, result, 'traceParent');
        (0, nonNull_1.copyPropIfDefined)(traceContext, result, 'traceState');
        if (traceContext.attributes) {
            result.attributes = traceContext.attributes;
        }
        return result;
    }
}
exports.fromRpcTraceContext = fromRpcTraceContext;


/***/ }),

/***/ "./src/converters/fromRpcNullable.ts":
/*!*******************************************!*\
  !*** ./src/converters/fromRpcNullable.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromNullableMapping = void 0;
function fromNullableMapping(nullableMapping, originalMapping) {
    let converted = {};
    if (nullableMapping && Object.keys(nullableMapping).length > 0) {
        for (const key in nullableMapping) {
            converted[key] = nullableMapping[key].value || '';
        }
    }
    else if (originalMapping && Object.keys(originalMapping).length > 0) {
        converted = originalMapping;
    }
    return converted;
}
exports.fromNullableMapping = fromNullableMapping;


/***/ }),

/***/ "./src/converters/fromRpcTriggerMetadata.ts":
/*!**************************************************!*\
  !*** ./src/converters/fromRpcTriggerMetadata.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromRpcTriggerMetadata = void 0;
const isTrigger_1 = __webpack_require__(/*! ../utils/isTrigger */ "./src/utils/isTrigger.ts");
const fromRpcTypedData_1 = __webpack_require__(/*! ./fromRpcTypedData */ "./src/converters/fromRpcTypedData.ts");
const toCamelCase_1 = __webpack_require__(/*! ./toCamelCase */ "./src/converters/toCamelCase.ts");
function fromRpcTriggerMetadata(triggerMetadata, triggerType) {
    // For http and timer triggers, we will avoid using `triggerMetadata` for a few reasons:
    // 1. It uses `toCamelCase` methods, which can lead to weird casing bugs
    // 2. It's generally a large medley of properties that is difficult for us to document/type
    // 3. We can represent that information on the request & timer objects instead
    if (!triggerMetadata || (0, isTrigger_1.isHttpTrigger)(triggerType) || (0, isTrigger_1.isTimerTrigger)(triggerType)) {
        return undefined;
    }
    else {
        const result = {};
        for (const [key, value] of Object.entries(triggerMetadata)) {
            result[(0, toCamelCase_1.toCamelCaseKey)(key)] = (0, toCamelCase_1.toCamelCaseValue)((0, fromRpcTypedData_1.fromRpcTypedData)(value));
        }
        return result;
    }
}
exports.fromRpcTriggerMetadata = fromRpcTriggerMetadata;


/***/ }),

/***/ "./src/converters/fromRpcTypedData.ts":
/*!********************************************!*\
  !*** ./src/converters/fromRpcTypedData.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromRpcTypedData = void 0;
const HttpRequest_1 = __webpack_require__(/*! ../http/HttpRequest */ "./src/http/HttpRequest.ts");
const nonNull_1 = __webpack_require__(/*! ../utils/nonNull */ "./src/utils/nonNull.ts");
function fromRpcTypedData(data) {
    if (!data) {
        return undefined;
    }
    else if ((0, nonNull_1.isDefined)(data.string)) {
        return tryJsonParse(data.string);
    }
    else if ((0, nonNull_1.isDefined)(data.json)) {
        return JSON.parse(data.json);
    }
    else if ((0, nonNull_1.isDefined)(data.bytes)) {
        return Buffer.from(data.bytes);
    }
    else if ((0, nonNull_1.isDefined)(data.stream)) {
        return Buffer.from(data.stream);
    }
    else if ((0, nonNull_1.isDefined)(data.http)) {
        return new HttpRequest_1.HttpRequest(data.http);
    }
    else if ((0, nonNull_1.isDefined)(data.int)) {
        return data.int;
    }
    else if ((0, nonNull_1.isDefined)(data.double)) {
        return data.double;
    }
    else if (data.collectionBytes && (0, nonNull_1.isDefined)(data.collectionBytes.bytes)) {
        return data.collectionBytes.bytes.map((d) => Buffer.from(d));
    }
    else if (data.collectionString && (0, nonNull_1.isDefined)(data.collectionString.string)) {
        return data.collectionString.string.map(tryJsonParse);
    }
    else if (data.collectionDouble && (0, nonNull_1.isDefined)(data.collectionDouble.double)) {
        return data.collectionDouble.double;
    }
    else if (data.collectionSint64 && (0, nonNull_1.isDefined)(data.collectionSint64.sint64)) {
        return data.collectionSint64.sint64;
    }
    else {
        return undefined;
    }
}
exports.fromRpcTypedData = fromRpcTypedData;
function tryJsonParse(data) {
    try {
        return JSON.parse(data);
    }
    catch (_a) {
        return data;
    }
}


/***/ }),

/***/ "./src/converters/toCamelCase.ts":
/*!***************************************!*\
  !*** ./src/converters/toCamelCase.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCamelCaseKey = exports.toCamelCaseValue = void 0;
function toCamelCaseValue(data) {
    if (typeof data !== 'object' || data === null) {
        return data;
    }
    else if (Array.isArray(data)) {
        return data.map(toCamelCaseValue);
    }
    else {
        const result = {};
        for (const [key, value] of Object.entries(data)) {
            result[toCamelCaseKey(key)] = toCamelCaseValue(value);
        }
        return result;
    }
}
exports.toCamelCaseValue = toCamelCaseValue;
function toCamelCaseKey(key) {
    return key.charAt(0).toLowerCase() + key.slice(1);
}
exports.toCamelCaseKey = toCamelCaseKey;


/***/ }),

/***/ "./src/converters/toRpcDuration.ts":
/*!*****************************************!*\
  !*** ./src/converters/toRpcDuration.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toRpcDuration = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./src/errors.ts");
const nonNull_1 = __webpack_require__(/*! ../utils/nonNull */ "./src/utils/nonNull.ts");
function toRpcDuration(dateTime, propertyName) {
    if ((0, nonNull_1.isDefined)(dateTime)) {
        try {
            let timeInMilliseconds;
            if (typeof dateTime === 'object') {
                const minutes = (dateTime.minutes || 0) + (dateTime.hours || 0) * 60;
                const seconds = (dateTime.seconds || 0) + minutes * 60;
                timeInMilliseconds = (dateTime.milliseconds || 0) + seconds * 1000;
            }
            else if (typeof dateTime === 'number') {
                timeInMilliseconds = dateTime;
            }
            if ((0, nonNull_1.isDefined)(timeInMilliseconds) && timeInMilliseconds >= 0) {
                return {
                    seconds: Math.round(timeInMilliseconds / 1000),
                };
            }
        }
        catch (_a) {
            // fall through
        }
        throw new errors_1.AzFuncSystemError(`A 'number' or 'Duration' object was expected instead of a '${typeof dateTime}'. Cannot parse value of '${propertyName}'.`);
    }
    return undefined;
}
exports.toRpcDuration = toRpcDuration;


/***/ }),

/***/ "./src/converters/toRpcHttp.ts":
/*!*************************************!*\
  !*** ./src/converters/toRpcHttp.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toRpcHttp = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./src/errors.ts");
const HttpResponse_1 = __webpack_require__(/*! ../http/HttpResponse */ "./src/http/HttpResponse.ts");
const toRpcHttpCookie_1 = __webpack_require__(/*! ./toRpcHttpCookie */ "./src/converters/toRpcHttpCookie.ts");
const toRpcTypedData_1 = __webpack_require__(/*! ./toRpcTypedData */ "./src/converters/toRpcTypedData.ts");
function toRpcHttp(data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (data === null || data === undefined) {
            return data;
        }
        else if (typeof data !== 'object') {
            throw new errors_1.AzFuncSystemError('The HTTP response must be an object with optional properties "body", "status", "headers", and "cookies".');
        }
        const response = data instanceof HttpResponse_1.HttpResponse ? data : new HttpResponse_1.HttpResponse(data);
        const rpcResponse = {};
        rpcResponse.statusCode = response.status.toString();
        rpcResponse.headers = {};
        for (const [key, value] of response.headers.entries()) {
            rpcResponse.headers[key] = value;
        }
        rpcResponse.cookies = [];
        for (const cookie of response.cookies) {
            rpcResponse.cookies.push((0, toRpcHttpCookie_1.toRpcHttpCookie)(cookie));
        }
        rpcResponse.enableContentNegotiation = response.enableContentNegotiation;
        const bodyBytes = yield response.arrayBuffer();
        rpcResponse.body = (0, toRpcTypedData_1.toRpcTypedData)(bodyBytes);
        return { http: rpcResponse };
    });
}
exports.toRpcHttp = toRpcHttp;


/***/ }),

/***/ "./src/converters/toRpcHttpCookie.ts":
/*!*******************************************!*\
  !*** ./src/converters/toRpcHttpCookie.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toRpcHttpCookie = void 0;
const toRpcNullable_1 = __webpack_require__(/*! ./toRpcNullable */ "./src/converters/toRpcNullable.ts");
/**
 * From RFC specifications for 'Set-Cookie' response header: https://www.rfc-editor.org/rfc/rfc6265.txt
 * @param inputCookie
 */
function toRpcHttpCookie(inputCookie) {
    // Resolve RpcHttpCookie.SameSite enum, a one-off
    let rpcSameSite = 'none';
    if (inputCookie && inputCookie.sameSite) {
        const sameSite = inputCookie.sameSite.toLocaleLowerCase();
        if (sameSite === 'lax') {
            rpcSameSite = 'lax';
        }
        else if (sameSite === 'strict') {
            rpcSameSite = 'strict';
        }
        else if (sameSite === 'none') {
            rpcSameSite = 'explicitNone';
        }
    }
    const rpcCookie = {
        name: inputCookie && (0, toRpcNullable_1.toRpcString)(inputCookie.name, 'cookie.name'),
        value: inputCookie && (0, toRpcNullable_1.toRpcString)(inputCookie.value, 'cookie.value'),
        domain: (0, toRpcNullable_1.toNullableString)(inputCookie && inputCookie.domain, 'cookie.domain'),
        path: (0, toRpcNullable_1.toNullableString)(inputCookie && inputCookie.path, 'cookie.path'),
        expires: (0, toRpcNullable_1.toNullableTimestamp)(inputCookie && inputCookie.expires, 'cookie.expires'),
        secure: (0, toRpcNullable_1.toNullableBool)(inputCookie && inputCookie.secure, 'cookie.secure'),
        httpOnly: (0, toRpcNullable_1.toNullableBool)(inputCookie && inputCookie.httpOnly, 'cookie.httpOnly'),
        sameSite: rpcSameSite,
        maxAge: (0, toRpcNullable_1.toNullableDouble)(inputCookie && inputCookie.maxAge, 'cookie.maxAge'),
    };
    return rpcCookie;
}
exports.toRpcHttpCookie = toRpcHttpCookie;


/***/ }),

/***/ "./src/converters/toRpcNullable.ts":
/*!*****************************************!*\
  !*** ./src/converters/toRpcNullable.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toNullableTimestamp = exports.toNullableString = exports.toRpcString = exports.toNullableDouble = exports.toNullableBool = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./src/errors.ts");
const nonNull_1 = __webpack_require__(/*! ../utils/nonNull */ "./src/utils/nonNull.ts");
/**
 * Converts boolean input to an 'INullableBool' to be sent through the RPC layer.
 * Input that is not a boolean but is also not null or undefined logs a function app level warning.
 * @param nullable Input to be converted to an INullableBool if it is a valid boolean
 * @param propertyName The name of the property that the caller will assign the output to. Used for debugging.
 */
function toNullableBool(nullable, propertyName) {
    if (typeof nullable === 'boolean') {
        return {
            value: nullable,
        };
    }
    if ((0, nonNull_1.isDefined)(nullable)) {
        throw new errors_1.AzFuncSystemError(`A 'boolean' type was expected instead of a '${typeof nullable}' type. Cannot parse value of '${propertyName}'.`);
    }
    return undefined;
}
exports.toNullableBool = toNullableBool;
/**
 * Converts number or string that parses to a number to an 'INullableDouble' to be sent through the RPC layer.
 * Input that is not a valid number but is also not null or undefined logs a function app level warning.
 * @param nullable Input to be converted to an INullableDouble if it is a valid number
 * @param propertyName The name of the property that the caller will assign the output to. Used for debugging.
 */
function toNullableDouble(nullable, propertyName) {
    if (typeof nullable === 'number') {
        return {
            value: nullable,
        };
    }
    else if (typeof nullable === 'string') {
        if (!isNaN(Number(nullable))) {
            const parsedNumber = parseFloat(nullable);
            return {
                value: parsedNumber,
            };
        }
    }
    if ((0, nonNull_1.isDefined)(nullable)) {
        throw new errors_1.AzFuncSystemError(`A 'number' type was expected instead of a '${typeof nullable}' type. Cannot parse value of '${propertyName}'.`);
    }
    return undefined;
}
exports.toNullableDouble = toNullableDouble;
/**
 * Converts string input to an 'INullableString' to be sent through the RPC layer.
 * Input that is not a string but is also not null or undefined logs a function app level warning.
 * @param nullable Input to be converted to an INullableString if it is a valid string
 * @param propertyName The name of the property that the caller will assign the output to. Used for debugging.
 */
function toRpcString(nullable, propertyName) {
    if (typeof nullable === 'string') {
        return nullable;
    }
    if ((0, nonNull_1.isDefined)(nullable)) {
        throw new errors_1.AzFuncSystemError(`A 'string' type was expected instead of a '${typeof nullable}' type. Cannot parse value of '${propertyName}'.`);
    }
    return '';
}
exports.toRpcString = toRpcString;
/**
 * Converts string input to an 'INullableString' to be sent through the RPC layer.
 * Input that is not a string but is also not null or undefined logs a function app level warning.
 * @param nullable Input to be converted to an INullableString if it is a valid string
 * @param propertyName The name of the property that the caller will assign the output to. Used for debugging.
 */
function toNullableString(nullable, propertyName) {
    if (typeof nullable === 'string') {
        return {
            value: nullable,
        };
    }
    if ((0, nonNull_1.isDefined)(nullable)) {
        throw new errors_1.AzFuncSystemError(`A 'string' type was expected instead of a '${typeof nullable}' type. Cannot parse value of '${propertyName}'.`);
    }
    return undefined;
}
exports.toNullableString = toNullableString;
/**
 * Converts Date or number input to an 'INullableTimestamp' to be sent through the RPC layer.
 * Input that is not a Date or number but is also not null or undefined logs a function app level warning.
 * @param nullable Input to be converted to an INullableTimestamp if it is valid input
 * @param propertyName The name of the property that the caller will assign the output to. Used for debugging.
 */
function toNullableTimestamp(dateTime, propertyName) {
    if ((0, nonNull_1.isDefined)(dateTime)) {
        try {
            const timeInMilliseconds = typeof dateTime === 'number' ? dateTime : dateTime.getTime();
            if (timeInMilliseconds && timeInMilliseconds >= 0) {
                return {
                    value: {
                        seconds: Math.round(timeInMilliseconds / 1000),
                    },
                };
            }
        }
        catch (_a) {
            throw new errors_1.AzFuncSystemError(`A 'number' or 'Date' input was expected instead of a '${typeof dateTime}'. Cannot parse value of '${propertyName}'.`);
        }
    }
    return undefined;
}
exports.toNullableTimestamp = toNullableTimestamp;


/***/ }),

/***/ "./src/converters/toRpcTypedData.ts":
/*!******************************************!*\
  !*** ./src/converters/toRpcTypedData.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toRpcTypedData = void 0;
function toRpcTypedData(data) {
    if (data === null || data === undefined) {
        return data;
    }
    else if (typeof data === 'string') {
        return { string: data };
    }
    else if (Buffer.isBuffer(data)) {
        return { bytes: data };
    }
    else if (ArrayBuffer.isView(data)) {
        const bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        return { bytes: bytes };
    }
    else if (data instanceof ArrayBuffer) {
        const bytes = new Uint8Array(data);
        return { bytes: bytes };
    }
    else if (typeof data === 'number') {
        if (Number.isInteger(data)) {
            return { int: data };
        }
        else {
            return { double: data };
        }
    }
    else {
        return { json: JSON.stringify(data) };
    }
}
exports.toRpcTypedData = toRpcTypedData;


/***/ }),

/***/ "./src/errors.ts":
/*!***********************!*\
  !*** ./src/errors.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isError = exports.ensureErrorType = exports.ReadOnlyError = exports.AzFuncRangeError = exports.AzFuncTypeError = exports.AzFuncSystemError = void 0;
class AzFuncSystemError extends Error {
    constructor() {
        super(...arguments);
        this.isAzureFunctionsSystemError = true;
    }
}
exports.AzFuncSystemError = AzFuncSystemError;
class AzFuncTypeError extends TypeError {
    constructor() {
        super(...arguments);
        this.isAzureFunctionsSystemError = true;
    }
}
exports.AzFuncTypeError = AzFuncTypeError;
class AzFuncRangeError extends RangeError {
    constructor() {
        super(...arguments);
        this.isAzureFunctionsSystemError = true;
    }
}
exports.AzFuncRangeError = AzFuncRangeError;
class ReadOnlyError extends AzFuncTypeError {
    constructor(propertyName) {
        super(`Cannot assign to read only property '${propertyName}'`);
    }
}
exports.ReadOnlyError = ReadOnlyError;
function ensureErrorType(err) {
    if (err instanceof Error) {
        return err;
    }
    else {
        let message;
        if (err === undefined || err === null) {
            message = 'Unknown error';
        }
        else if (typeof err === 'string') {
            message = err;
        }
        else if (typeof err === 'object') {
            message = JSON.stringify(err);
        }
        else {
            message = String(err);
        }
        return new Error(message);
    }
}
exports.ensureErrorType = ensureErrorType;
/**
 * This is mostly for callbacks where `null` or `undefined` indicates there is no error
 * By contrast, anything thrown/caught is assumed to be an error regardless of what it is
 */
function isError(err) {
    return err !== null && err !== undefined;
}
exports.isError = isError;


/***/ }),

/***/ "./src/http/HttpRequest.ts":
/*!*********************************!*\
  !*** ./src/http/HttpRequest.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HttpRequest_cachedUser, _HttpRequest_uReq, _HttpRequest_body;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpRequest = void 0;
const undici_1 = __webpack_require__(/*! undici */ "undici");
const url_1 = __webpack_require__(/*! url */ "url");
const fromRpcNullable_1 = __webpack_require__(/*! ../converters/fromRpcNullable */ "./src/converters/fromRpcNullable.ts");
const nonNull_1 = __webpack_require__(/*! ../utils/nonNull */ "./src/utils/nonNull.ts");
const extractHttpUserFromHeaders_1 = __webpack_require__(/*! ./extractHttpUserFromHeaders */ "./src/http/extractHttpUserFromHeaders.ts");
class HttpRequest {
    constructor(rpcHttp) {
        var _a, _b, _c;
        _HttpRequest_cachedUser.set(this, void 0);
        _HttpRequest_uReq.set(this, void 0);
        _HttpRequest_body.set(this, void 0);
        const url = (0, nonNull_1.nonNullProp)(rpcHttp, 'url');
        if ((_a = rpcHttp.body) === null || _a === void 0 ? void 0 : _a.bytes) {
            __classPrivateFieldSet(this, _HttpRequest_body, Buffer.from((_b = rpcHttp.body) === null || _b === void 0 ? void 0 : _b.bytes), "f");
        }
        else if ((_c = rpcHttp.body) === null || _c === void 0 ? void 0 : _c.string) {
            __classPrivateFieldSet(this, _HttpRequest_body, rpcHttp.body.string, "f");
        }
        __classPrivateFieldSet(this, _HttpRequest_uReq, new undici_1.Request(url, {
            body: __classPrivateFieldGet(this, _HttpRequest_body, "f"),
            method: (0, nonNull_1.nonNullProp)(rpcHttp, 'method'),
            headers: (0, fromRpcNullable_1.fromNullableMapping)(rpcHttp.nullableHeaders, rpcHttp.headers),
        }), "f");
        this.query = new url_1.URLSearchParams((0, fromRpcNullable_1.fromNullableMapping)(rpcHttp.nullableQuery, rpcHttp.query));
        this.params = (0, fromRpcNullable_1.fromNullableMapping)(rpcHttp.nullableParams, rpcHttp.params);
    }
    get url() {
        return __classPrivateFieldGet(this, _HttpRequest_uReq, "f").url;
    }
    get method() {
        return __classPrivateFieldGet(this, _HttpRequest_uReq, "f").method;
    }
    get headers() {
        return __classPrivateFieldGet(this, _HttpRequest_uReq, "f").headers;
    }
    get user() {
        if (__classPrivateFieldGet(this, _HttpRequest_cachedUser, "f") === undefined) {
            __classPrivateFieldSet(this, _HttpRequest_cachedUser, (0, extractHttpUserFromHeaders_1.extractHttpUserFromHeaders)(this.headers), "f");
        }
        return __classPrivateFieldGet(this, _HttpRequest_cachedUser, "f");
    }
    get body() {
        return __classPrivateFieldGet(this, _HttpRequest_uReq, "f").body;
    }
    get bodyUsed() {
        return __classPrivateFieldGet(this, _HttpRequest_uReq, "f").bodyUsed;
    }
    arrayBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _HttpRequest_uReq, "f").arrayBuffer();
        });
    }
    blob() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _HttpRequest_uReq, "f").blob();
        });
    }
    formData() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _HttpRequest_uReq, "f").formData();
        });
    }
    json() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _HttpRequest_uReq, "f").json();
        });
    }
    text() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _HttpRequest_uReq, "f").text();
        });
    }
}
exports.HttpRequest = HttpRequest;
_HttpRequest_cachedUser = new WeakMap(), _HttpRequest_uReq = new WeakMap(), _HttpRequest_body = new WeakMap();


/***/ }),

/***/ "./src/http/HttpResponse.ts":
/*!**********************************!*\
  !*** ./src/http/HttpResponse.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HttpResponse_uRes;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpResponse = void 0;
const undici_1 = __webpack_require__(/*! undici */ "undici");
const nonNull_1 = __webpack_require__(/*! ../utils/nonNull */ "./src/utils/nonNull.ts");
class HttpResponse {
    constructor(resInit) {
        _HttpResponse_uRes.set(this, void 0);
        const uResInit = { status: resInit === null || resInit === void 0 ? void 0 : resInit.status, headers: resInit === null || resInit === void 0 ? void 0 : resInit.headers };
        if ((0, nonNull_1.isDefined)(resInit === null || resInit === void 0 ? void 0 : resInit.jsonBody)) {
            __classPrivateFieldSet(this, _HttpResponse_uRes, undici_1.Response.json(resInit === null || resInit === void 0 ? void 0 : resInit.jsonBody, uResInit), "f");
        }
        else {
            __classPrivateFieldSet(this, _HttpResponse_uRes, new undici_1.Response(resInit === null || resInit === void 0 ? void 0 : resInit.body, uResInit), "f");
        }
        this.cookies = (resInit === null || resInit === void 0 ? void 0 : resInit.cookies) || [];
        this.enableContentNegotiation = !!(resInit === null || resInit === void 0 ? void 0 : resInit.enableContentNegotiation);
    }
    get status() {
        return __classPrivateFieldGet(this, _HttpResponse_uRes, "f").status;
    }
    get headers() {
        return __classPrivateFieldGet(this, _HttpResponse_uRes, "f").headers;
    }
    get body() {
        return __classPrivateFieldGet(this, _HttpResponse_uRes, "f").body;
    }
    get bodyUsed() {
        return __classPrivateFieldGet(this, _HttpResponse_uRes, "f").bodyUsed;
    }
    arrayBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _HttpResponse_uRes, "f").arrayBuffer();
        });
    }
    blob() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _HttpResponse_uRes, "f").blob();
        });
    }
    formData() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _HttpResponse_uRes, "f").formData();
        });
    }
    json() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _HttpResponse_uRes, "f").json();
        });
    }
    text() {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _HttpResponse_uRes, "f").text();
        });
    }
}
exports.HttpResponse = HttpResponse;
_HttpResponse_uRes = new WeakMap();


/***/ }),

/***/ "./src/http/extractHttpUserFromHeaders.ts":
/*!************************************************!*\
  !*** ./src/http/extractHttpUserFromHeaders.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractHttpUserFromHeaders = void 0;
const nonNull_1 = __webpack_require__(/*! ../utils/nonNull */ "./src/utils/nonNull.ts");
/* grandfathered in. Should fix when possible */
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access */
function extractHttpUserFromHeaders(headers) {
    let user = null;
    const clientPrincipal = headers.get('x-ms-client-principal');
    if (clientPrincipal) {
        const claimsPrincipalData = JSON.parse(Buffer.from(clientPrincipal, 'base64').toString('utf-8'));
        if (claimsPrincipalData['identityProvider']) {
            user = {
                type: 'StaticWebApps',
                id: claimsPrincipalData['userId'],
                username: claimsPrincipalData['userDetails'],
                identityProvider: claimsPrincipalData['identityProvider'],
                claimsPrincipalData,
            };
        }
        else {
            user = {
                type: 'AppService',
                id: (0, nonNull_1.nonNullValue)(headers.get('x-ms-client-principal-id'), 'user-id'),
                username: (0, nonNull_1.nonNullValue)(headers.get('x-ms-client-principal-name'), 'user-name'),
                identityProvider: (0, nonNull_1.nonNullValue)(headers.get('x-ms-client-principal-idp'), 'user-idp'),
                claimsPrincipalData,
            };
        }
    }
    return user;
}
exports.extractHttpUserFromHeaders = extractHttpUserFromHeaders;


/***/ }),

/***/ "./src/input.ts":
/*!**********************!*\
  !*** ./src/input.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generic = exports.sql = exports.cosmosDB = exports.table = exports.storageBlob = void 0;
const addBindingName_1 = __webpack_require__(/*! ./addBindingName */ "./src/addBindingName.ts");
function storageBlob(options) {
    return addInputBindingName(Object.assign(Object.assign({}, options), { type: 'blob' }));
}
exports.storageBlob = storageBlob;
function table(options) {
    return addInputBindingName(Object.assign(Object.assign({}, options), { type: 'table' }));
}
exports.table = table;
function cosmosDB(options) {
    return addInputBindingName(Object.assign(Object.assign({}, options), { type: 'cosmosDB' }));
}
exports.cosmosDB = cosmosDB;
function sql(options) {
    return addInputBindingName(Object.assign(Object.assign({}, options), { type: 'sql' }));
}
exports.sql = sql;
function generic(options) {
    return addInputBindingName(options);
}
exports.generic = generic;
function addInputBindingName(binding) {
    return (0, addBindingName_1.addBindingName)(binding, 'Input');
}


/***/ }),

/***/ "./src/output.ts":
/*!***********************!*\
  !*** ./src/output.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generic = exports.sql = exports.cosmosDB = exports.eventGrid = exports.eventHub = exports.serviceBusTopic = exports.serviceBusQueue = exports.storageQueue = exports.table = exports.storageBlob = exports.http = void 0;
const addBindingName_1 = __webpack_require__(/*! ./addBindingName */ "./src/addBindingName.ts");
function http(options) {
    return addOutputBindingName(Object.assign(Object.assign({}, options), { type: 'http' }));
}
exports.http = http;
function storageBlob(options) {
    return addOutputBindingName(Object.assign(Object.assign({}, options), { type: 'blob' }));
}
exports.storageBlob = storageBlob;
function table(options) {
    return addOutputBindingName(Object.assign(Object.assign({}, options), { type: 'table' }));
}
exports.table = table;
function storageQueue(options) {
    return addOutputBindingName(Object.assign(Object.assign({}, options), { type: 'queue' }));
}
exports.storageQueue = storageQueue;
function serviceBusQueue(options) {
    return addOutputBindingName(Object.assign(Object.assign({}, options), { type: 'serviceBus' }));
}
exports.serviceBusQueue = serviceBusQueue;
function serviceBusTopic(options) {
    return addOutputBindingName(Object.assign(Object.assign({}, options), { type: 'serviceBus' }));
}
exports.serviceBusTopic = serviceBusTopic;
function eventHub(options) {
    return addOutputBindingName(Object.assign(Object.assign({}, options), { type: 'eventHub' }));
}
exports.eventHub = eventHub;
function eventGrid(options) {
    return addOutputBindingName(Object.assign(Object.assign({}, options), { type: 'eventGrid' }));
}
exports.eventGrid = eventGrid;
function cosmosDB(options) {
    return addOutputBindingName(Object.assign(Object.assign({}, options), { type: 'cosmosDB' }));
}
exports.cosmosDB = cosmosDB;
function sql(options) {
    return addOutputBindingName(Object.assign(Object.assign({}, options), { type: 'sql' }));
}
exports.sql = sql;
function generic(options) {
    return addOutputBindingName(options);
}
exports.generic = generic;
function addOutputBindingName(binding) {
    return (0, addBindingName_1.addBindingName)(binding, 'Output');
}


/***/ }),

/***/ "./src/trigger.ts":
/*!************************!*\
  !*** ./src/trigger.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generic = exports.cosmosDB = exports.eventGrid = exports.eventHub = exports.serviceBusTopic = exports.serviceBusQueue = exports.storageQueue = exports.storageBlob = exports.timer = exports.http = void 0;
const addBindingName_1 = __webpack_require__(/*! ./addBindingName */ "./src/addBindingName.ts");
function http(options) {
    return addTriggerBindingName(Object.assign(Object.assign({}, options), { authLevel: options.authLevel || 'anonymous', methods: options.methods || ['GET', 'POST'], type: 'httpTrigger' }));
}
exports.http = http;
function timer(options) {
    return addTriggerBindingName(Object.assign(Object.assign({}, options), { type: 'timerTrigger' }));
}
exports.timer = timer;
function storageBlob(options) {
    return addTriggerBindingName(Object.assign(Object.assign({}, options), { type: 'blobTrigger' }));
}
exports.storageBlob = storageBlob;
function storageQueue(options) {
    return addTriggerBindingName(Object.assign(Object.assign({}, options), { type: 'queueTrigger' }));
}
exports.storageQueue = storageQueue;
function serviceBusQueue(options) {
    return addTriggerBindingName(Object.assign(Object.assign({}, options), { type: 'serviceBusTrigger' }));
}
exports.serviceBusQueue = serviceBusQueue;
function serviceBusTopic(options) {
    return addTriggerBindingName(Object.assign(Object.assign({}, options), { type: 'serviceBusTrigger' }));
}
exports.serviceBusTopic = serviceBusTopic;
function eventHub(options) {
    return addTriggerBindingName(Object.assign(Object.assign({}, options), { type: 'eventHubTrigger' }));
}
exports.eventHub = eventHub;
function eventGrid(options) {
    return addTriggerBindingName(Object.assign(Object.assign({}, options), { type: 'eventGridTrigger' }));
}
exports.eventGrid = eventGrid;
function cosmosDB(options) {
    return addTriggerBindingName(Object.assign(Object.assign({}, options), { type: 'cosmosDBTrigger' }));
}
exports.cosmosDB = cosmosDB;
function generic(options) {
    return addTriggerBindingName(options);
}
exports.generic = generic;
function addTriggerBindingName(binding) {
    return (0, addBindingName_1.addBindingName)(binding, 'Trigger');
}


/***/ }),

/***/ "./src/utils/isTrigger.ts":
/*!********************************!*\
  !*** ./src/utils/isTrigger.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isTimerTrigger = exports.isHttpTrigger = exports.isTrigger = void 0;
function isTrigger(typeName) {
    return !!typeName && /trigger$/i.test(typeName);
}
exports.isTrigger = isTrigger;
function isHttpTrigger(typeName) {
    return (typeName === null || typeName === void 0 ? void 0 : typeName.toLowerCase()) === 'httptrigger';
}
exports.isHttpTrigger = isHttpTrigger;
function isTimerTrigger(typeName) {
    return (typeName === null || typeName === void 0 ? void 0 : typeName.toLowerCase()) === 'timertrigger';
}
exports.isTimerTrigger = isTimerTrigger;


/***/ }),

/***/ "./src/utils/nonNull.ts":
/*!******************************!*\
  !*** ./src/utils/nonNull.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isDefined = exports.copyPropIfDefined = exports.nonNullValue = exports.nonNullProp = void 0;
const errors_1 = __webpack_require__(/*! ../errors */ "./src/errors.ts");
/**
 * Retrieves a property by name from an object and checks that it's not null and not undefined.  It is strongly typed
 * for the property and will give a compile error if the given name is not a property of the source.
 */
function nonNullProp(source, name) {
    const value = source[name];
    return nonNullValue(value, name);
}
exports.nonNullProp = nonNullProp;
/**
 * Validates that a given value is not null and not undefined.
 */
function nonNullValue(value, propertyNameOrMessage) {
    if (value === null || value === undefined) {
        throw new errors_1.AzFuncSystemError('Internal error: Expected value to be neither null nor undefined' +
            (propertyNameOrMessage ? `: ${propertyNameOrMessage}` : ''));
    }
    return value;
}
exports.nonNullValue = nonNullValue;
function copyPropIfDefined(source, destination, key) {
    if (source[key] !== null && source[key] !== undefined) {
        destination[key] = source[key];
    }
}
exports.copyPropIfDefined = copyPropIfDefined;
function isDefined(data) {
    return data !== null && data !== undefined;
}
exports.isDefined = isDefined;


/***/ }),

/***/ "@azure/functions-core":
/*!****************************************!*\
  !*** external "@azure/functions-core" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@azure/functions-core");

/***/ }),

/***/ "undici":
/*!*************************!*\
  !*** external "undici" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("undici");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.trigger = exports.output = exports.InvocationContext = exports.input = exports.HttpResponse = exports.HttpRequest = exports.app = void 0;
exports.app = __webpack_require__(/*! ./app */ "./src/app.ts");
var HttpRequest_1 = __webpack_require__(/*! ./http/HttpRequest */ "./src/http/HttpRequest.ts");
Object.defineProperty(exports, "HttpRequest", ({ enumerable: true, get: function () { return HttpRequest_1.HttpRequest; } }));
var HttpResponse_1 = __webpack_require__(/*! ./http/HttpResponse */ "./src/http/HttpResponse.ts");
Object.defineProperty(exports, "HttpResponse", ({ enumerable: true, get: function () { return HttpResponse_1.HttpResponse; } }));
exports.input = __webpack_require__(/*! ./input */ "./src/input.ts");
var InvocationContext_1 = __webpack_require__(/*! ./InvocationContext */ "./src/InvocationContext.ts");
Object.defineProperty(exports, "InvocationContext", ({ enumerable: true, get: function () { return InvocationContext_1.InvocationContext; } }));
exports.output = __webpack_require__(/*! ./output */ "./src/output.ts");
exports.trigger = __webpack_require__(/*! ./trigger */ "./src/trigger.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=azure-functions.js.map