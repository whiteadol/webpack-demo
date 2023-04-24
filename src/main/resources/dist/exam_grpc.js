"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod2) => function __require2() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));

  // node_modules/axios/dist/browser/axios.cjs
  var require_axios = __commonJS({
    "node_modules/axios/dist/browser/axios.cjs"(exports2, module2) {
      "use strict";
      function bind(fn, thisArg) {
        return function wrap() {
          return fn.apply(thisArg, arguments);
        };
      }
      var { toString } = Object.prototype;
      var { getPrototypeOf } = Object;
      var kindOf = ((cache) => (thing) => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      })(/* @__PURE__ */ Object.create(null));
      var kindOfTest = (type) => {
        type = type.toLowerCase();
        return (thing) => kindOf(thing) === type;
      };
      var typeOfTest = (type) => (thing) => typeof thing === type;
      var { isArray } = Array;
      var isUndefined = typeOfTest("undefined");
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
      }
      var isArrayBuffer = kindOfTest("ArrayBuffer");
      function isArrayBufferView(val) {
        let result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && isArrayBuffer(val.buffer);
        }
        return result;
      }
      var isString = typeOfTest("string");
      var isFunction = typeOfTest("function");
      var isNumber = typeOfTest("number");
      var isObject = (thing) => thing !== null && typeof thing === "object";
      var isBoolean = (thing) => thing === true || thing === false;
      var isPlainObject = (val) => {
        if (kindOf(val) !== "object") {
          return false;
        }
        const prototype2 = getPrototypeOf(val);
        return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
      };
      var isDate = kindOfTest("Date");
      var isFile = kindOfTest("File");
      var isBlob = kindOfTest("Blob");
      var isFileList = kindOfTest("FileList");
      var isStream = (val) => isObject(val) && isFunction(val.pipe);
      var isFormData = (thing) => {
        let kind;
        return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
        kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
      };
      var isURLSearchParams = kindOfTest("URLSearchParams");
      var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      function forEach(obj, fn, { allOwnKeys = false } = {}) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        let i;
        let l;
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
          const len = keys.length;
          let key;
          for (i = 0; i < len; i++) {
            key = keys[i];
            fn.call(null, obj[key], key, obj);
          }
        }
      }
      function findKey(obj, key) {
        key = key.toLowerCase();
        const keys = Object.keys(obj);
        let i = keys.length;
        let _key;
        while (i-- > 0) {
          _key = keys[i];
          if (key === _key.toLowerCase()) {
            return _key;
          }
        }
        return null;
      }
      var _global = (() => {
        if (typeof globalThis !== "undefined")
          return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
      })();
      var isContextDefined = (context) => !isUndefined(context) && context !== _global;
      function merge() {
        const { caseless } = isContextDefined(this) && this || {};
        const result = {};
        const assignValue = (val, key) => {
          const targetKey = caseless && findKey(result, key) || key;
          if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
            result[targetKey] = merge(result[targetKey], val);
          } else if (isPlainObject(val)) {
            result[targetKey] = merge({}, val);
          } else if (isArray(val)) {
            result[targetKey] = val.slice();
          } else {
            result[targetKey] = val;
          }
        };
        for (let i = 0, l = arguments.length; i < l; i++) {
          arguments[i] && forEach(arguments[i], assignValue);
        }
        return result;
      }
      var extend = (a2, b2, thisArg, { allOwnKeys } = {}) => {
        forEach(b2, (val, key) => {
          if (thisArg && isFunction(val)) {
            a2[key] = bind(val, thisArg);
          } else {
            a2[key] = val;
          }
        }, { allOwnKeys });
        return a2;
      };
      var stripBOM = (content) => {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      };
      var inherits = (constructor, superConstructor, props, descriptors2) => {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
        constructor.prototype.constructor = constructor;
        Object.defineProperty(constructor, "super", {
          value: superConstructor.prototype
        });
        props && Object.assign(constructor.prototype, props);
      };
      var toFlatObject = (sourceObj, destObj, filter, propFilter) => {
        let props;
        let i;
        let prop;
        const merged = {};
        destObj = destObj || {};
        if (sourceObj == null)
          return destObj;
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = filter !== false && getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      };
      var endsWith = (str, searchString, position) => {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        const lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
      var toArray = (thing) => {
        if (!thing)
          return null;
        if (isArray(thing))
          return thing;
        let i = thing.length;
        if (!isNumber(i))
          return null;
        const arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      };
      var isTypedArray = ((TypedArray) => {
        return (thing) => {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
      var forEachEntry = (obj, fn) => {
        const generator = obj && obj[Symbol.iterator];
        const iterator = generator.call(obj);
        let result;
        while ((result = iterator.next()) && !result.done) {
          const pair = result.value;
          fn.call(obj, pair[0], pair[1]);
        }
      };
      var matchAll = (regExp, str) => {
        let matches;
        const arr = [];
        while ((matches = regExp.exec(str)) !== null) {
          arr.push(matches);
        }
        return arr;
      };
      var isHTMLForm = kindOfTest("HTMLFormElement");
      var toCamelCase = (str) => {
        return str.toLowerCase().replace(
          /[-_\s]([a-z\d])(\w*)/g,
          function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
          }
        );
      };
      var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
      var isRegExp = kindOfTest("RegExp");
      var reduceDescriptors = (obj, reducer) => {
        const descriptors2 = Object.getOwnPropertyDescriptors(obj);
        const reducedDescriptors = {};
        forEach(descriptors2, (descriptor, name) => {
          if (reducer(descriptor, name, obj) !== false) {
            reducedDescriptors[name] = descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      var freezeMethods = (obj) => {
        reduceDescriptors(obj, (descriptor, name) => {
          if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
            return false;
          }
          const value = obj[name];
          if (!isFunction(value))
            return;
          descriptor.enumerable = false;
          if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
          }
          if (!descriptor.set) {
            descriptor.set = () => {
              throw Error("Can not rewrite read-only method '" + name + "'");
            };
          }
        });
      };
      var toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};
        const define2 = (arr) => {
          arr.forEach((value) => {
            obj[value] = true;
          });
        };
        isArray(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
        return obj;
      };
      var noop = () => {
      };
      var toFiniteNumber = (value, defaultValue) => {
        value = +value;
        return Number.isFinite(value) ? value : defaultValue;
      };
      var ALPHA = "abcdefghijklmnopqrstuvwxyz";
      var DIGIT = "0123456789";
      var ALPHABET = {
        DIGIT,
        ALPHA,
        ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
      };
      var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
        let str = "";
        const { length } = alphabet;
        while (size--) {
          str += alphabet[Math.random() * length | 0];
        }
        return str;
      };
      function isSpecCompliantForm(thing) {
        return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
      }
      var toJSONObject = (obj) => {
        const stack = new Array(10);
        const visit = (source, i) => {
          if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
              return;
            }
            if (!("toJSON" in source)) {
              stack[i] = source;
              const target = isArray(source) ? [] : {};
              forEach(source, (value, key) => {
                const reducedValue = visit(value, i + 1);
                !isUndefined(reducedValue) && (target[key] = reducedValue);
              });
              stack[i] = void 0;
              return target;
            }
          }
          return source;
        };
        return visit(obj, 0);
      };
      var utils = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isBoolean,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isRegExp,
        isFunction,
        isStream,
        isURLSearchParams,
        isTypedArray,
        isFileList,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        forEachEntry,
        matchAll,
        isHTMLForm,
        hasOwnProperty,
        hasOwnProp: hasOwnProperty,
        // an alias to avoid ESLint no-prototype-builtins detection
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase,
        noop,
        toFiniteNumber,
        findKey,
        global: _global,
        isContextDefined,
        ALPHABET,
        generateString,
        isSpecCompliantForm,
        toJSONObject
      };
      function AxiosError(message, code, config, request, response) {
        Error.call(this);
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        } else {
          this.stack = new Error().stack;
        }
        this.message = message;
        this.name = "AxiosError";
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        response && (this.response = response);
      }
      utils.inherits(AxiosError, Error, {
        toJSON: function toJSON() {
          return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: utils.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        }
      });
      var prototype$1 = AxiosError.prototype;
      var descriptors = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
        // eslint-disable-next-line func-names
      ].forEach((code) => {
        descriptors[code] = { value: code };
      });
      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype$1, "isAxiosError", { value: true });
      AxiosError.from = (error, code, config, request, response, customProps) => {
        const axiosError = Object.create(prototype$1);
        utils.toFlatObject(error, axiosError, function filter(obj) {
          return obj !== Error.prototype;
        }, (prop) => {
          return prop !== "isAxiosError";
        });
        AxiosError.call(axiosError, error.message, code, config, request, response);
        axiosError.cause = error;
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
      };
      var httpAdapter = null;
      function isVisitable(thing) {
        return utils.isPlainObject(thing) || utils.isArray(thing);
      }
      function removeBrackets(key) {
        return utils.endsWith(key, "[]") ? key.slice(0, -2) : key;
      }
      function renderKey(path, key, dots) {
        if (!path)
          return key;
        return path.concat(key).map(function each(token, i) {
          token = removeBrackets(token);
          return !dots && i ? "[" + token + "]" : token;
        }).join(dots ? "." : "");
      }
      function isFlatArray(arr) {
        return utils.isArray(arr) && !arr.some(isVisitable);
      }
      var predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
        return /^is[A-Z]/.test(prop);
      });
      function toFormData(obj, formData, options) {
        if (!utils.isObject(obj)) {
          throw new TypeError("target must be an object");
        }
        formData = formData || new FormData();
        options = utils.toFlatObject(options, {
          metaTokens: true,
          dots: false,
          indexes: false
        }, false, function defined(option, source) {
          return !utils.isUndefined(source[option]);
        });
        const metaTokens = options.metaTokens;
        const visitor = options.visitor || defaultVisitor;
        const dots = options.dots;
        const indexes = options.indexes;
        const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
        const useBlob = _Blob && utils.isSpecCompliantForm(formData);
        if (!utils.isFunction(visitor)) {
          throw new TypeError("visitor must be a function");
        }
        function convertValue(value) {
          if (value === null)
            return "";
          if (utils.isDate(value)) {
            return value.toISOString();
          }
          if (!useBlob && utils.isBlob(value)) {
            throw new AxiosError("Blob is not supported. Use a Buffer instead.");
          }
          if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
            return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
          }
          return value;
        }
        function defaultVisitor(value, key, path) {
          let arr = value;
          if (value && !path && typeof value === "object") {
            if (utils.endsWith(key, "{}")) {
              key = metaTokens ? key : key.slice(0, -2);
              value = JSON.stringify(value);
            } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, "[]")) && (arr = utils.toArray(value))) {
              key = removeBrackets(key);
              arr.forEach(function each(el, index) {
                !(utils.isUndefined(el) || el === null) && formData.append(
                  // eslint-disable-next-line no-nested-ternary
                  indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
                  convertValue(el)
                );
              });
              return false;
            }
          }
          if (isVisitable(value)) {
            return true;
          }
          formData.append(renderKey(path, key, dots), convertValue(value));
          return false;
        }
        const stack = [];
        const exposedHelpers = Object.assign(predicates, {
          defaultVisitor,
          convertValue,
          isVisitable
        });
        function build(value, path) {
          if (utils.isUndefined(value))
            return;
          if (stack.indexOf(value) !== -1) {
            throw Error("Circular reference detected in " + path.join("."));
          }
          stack.push(value);
          utils.forEach(value, function each(el, key) {
            const result = !(utils.isUndefined(el) || el === null) && visitor.call(
              formData,
              el,
              utils.isString(key) ? key.trim() : key,
              path,
              exposedHelpers
            );
            if (result === true) {
              build(el, path ? path.concat(key) : [key]);
            }
          });
          stack.pop();
        }
        if (!utils.isObject(obj)) {
          throw new TypeError("data must be an object");
        }
        build(obj);
        return formData;
      }
      function encode$1(str) {
        const charMap = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0"
        };
        return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
          return charMap[match];
        });
      }
      function AxiosURLSearchParams(params, options) {
        this._pairs = [];
        params && toFormData(params, this, options);
      }
      var prototype = AxiosURLSearchParams.prototype;
      prototype.append = function append(name, value) {
        this._pairs.push([name, value]);
      };
      prototype.toString = function toString2(encoder) {
        const _encode = encoder ? function(value) {
          return encoder.call(this, value, encode$1);
        } : encode$1;
        return this._pairs.map(function each(pair) {
          return _encode(pair[0]) + "=" + _encode(pair[1]);
        }, "").join("&");
      };
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      function buildURL(url, params, options) {
        if (!params) {
          return url;
        }
        const _encode = options && options.encode || encode;
        const serializeFn = options && options.serialize;
        let serializedParams;
        if (serializeFn) {
          serializedParams = serializeFn(params, options);
        } else {
          serializedParams = utils.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
        }
        if (serializedParams) {
          const hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      }
      var InterceptorManager = class {
        constructor() {
          this.handlers = [];
        }
        /**
         * Add a new interceptor to the stack
         *
         * @param {Function} fulfilled The function to handle `then` for a `Promise`
         * @param {Function} rejected The function to handle `reject` for a `Promise`
         *
         * @return {Number} An ID used to remove interceptor later
         */
        use(fulfilled, rejected, options) {
          this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          });
          return this.handlers.length - 1;
        }
        /**
         * Remove an interceptor from the stack
         *
         * @param {Number} id The ID that was returned by `use`
         *
         * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
         */
        eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        }
        /**
         * Clear all interceptors from the stack
         *
         * @returns {void}
         */
        clear() {
          if (this.handlers) {
            this.handlers = [];
          }
        }
        /**
         * Iterate over all the registered interceptors
         *
         * This method is particularly useful for skipping over any
         * interceptors that may have become `null` calling `eject`.
         *
         * @param {Function} fn The function to call for each interceptor
         *
         * @returns {void}
         */
        forEach(fn) {
          utils.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
              fn(h);
            }
          });
        }
      };
      var InterceptorManager$1 = InterceptorManager;
      var transitionalDefaults = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
      var URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
      var FormData$1 = typeof FormData !== "undefined" ? FormData : null;
      var Blob$1 = typeof Blob !== "undefined" ? Blob : null;
      var isStandardBrowserEnv = (() => {
        let product;
        if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      })();
      var isStandardBrowserWebWorkerEnv = (() => {
        return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
        self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
      })();
      var platform = {
        isBrowser: true,
        classes: {
          URLSearchParams: URLSearchParams$1,
          FormData: FormData$1,
          Blob: Blob$1
        },
        isStandardBrowserEnv,
        isStandardBrowserWebWorkerEnv,
        protocols: ["http", "https", "file", "blob", "url", "data"]
      };
      function toURLEncodedForm(data, options) {
        return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
          visitor: function(value, key, path, helpers) {
            if (platform.isNode && utils.isBuffer(value)) {
              this.append(key, value.toString("base64"));
              return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
          }
        }, options));
      }
      function parsePropPath(name) {
        return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
          return match[0] === "[]" ? "" : match[1] || match[0];
        });
      }
      function arrayToObject(arr) {
        const obj = {};
        const keys = Object.keys(arr);
        let i;
        const len = keys.length;
        let key;
        for (i = 0; i < len; i++) {
          key = keys[i];
          obj[key] = arr[key];
        }
        return obj;
      }
      function formDataToJSON(formData) {
        function buildPath(path, value, target, index) {
          let name = path[index++];
          const isNumericKey = Number.isFinite(+name);
          const isLast = index >= path.length;
          name = !name && utils.isArray(target) ? target.length : name;
          if (isLast) {
            if (utils.hasOwnProp(target, name)) {
              target[name] = [target[name], value];
            } else {
              target[name] = value;
            }
            return !isNumericKey;
          }
          if (!target[name] || !utils.isObject(target[name])) {
            target[name] = [];
          }
          const result = buildPath(path, value, target[name], index);
          if (result && utils.isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
          }
          return !isNumericKey;
        }
        if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
          const obj = {};
          utils.forEachEntry(formData, (name, value) => {
            buildPath(parsePropPath(name), value, obj, 0);
          });
          return obj;
        }
        return null;
      }
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": void 0
      };
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e2) {
            if (e2.name !== "SyntaxError") {
              throw e2;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: transitionalDefaults,
        adapter: ["xhr", "http"],
        transformRequest: [function transformRequest(data, headers) {
          const contentType = headers.getContentType() || "";
          const hasJSONContentType = contentType.indexOf("application/json") > -1;
          const isObjectPayload = utils.isObject(data);
          if (isObjectPayload && utils.isHTMLForm(data)) {
            data = new FormData(data);
          }
          const isFormData2 = utils.isFormData(data);
          if (isFormData2) {
            if (!hasJSONContentType) {
              return data;
            }
            return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
          }
          if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
            return data.toString();
          }
          let isFileList2;
          if (isObjectPayload) {
            if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
              return toURLEncodedForm(data, this.formSerializer).toString();
            }
            if ((isFileList2 = utils.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
              const _FormData = this.env && this.env.FormData;
              return toFormData(
                isFileList2 ? { "files[]": data } : data,
                _FormData && new _FormData(),
                this.formSerializer
              );
            }
          }
          if (isObjectPayload || hasJSONContentType) {
            headers.setContentType("application/json", false);
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          const transitional = this.transitional || defaults.transitional;
          const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          const JSONRequested = this.responseType === "json";
          if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
            const silentJSONParsing = transitional && transitional.silentJSONParsing;
            const strictJSONParsing = !silentJSONParsing && JSONRequested;
            try {
              return JSON.parse(data);
            } catch (e2) {
              if (strictJSONParsing) {
                if (e2.name === "SyntaxError") {
                  throw AxiosError.from(e2, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                }
                throw e2;
              }
            }
          }
          return data;
        }],
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a
         * timeout is not created.
         */
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: platform.classes.FormData,
          Blob: platform.classes.Blob
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      var defaults$1 = defaults;
      var ignoreDuplicateOf = utils.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ]);
      var parseHeaders = (rawHeaders) => {
        const parsed = {};
        let key;
        let val;
        let i;
        rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
          i = line.indexOf(":");
          key = line.substring(0, i).trim().toLowerCase();
          val = line.substring(i + 1).trim();
          if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
          }
          if (key === "set-cookie") {
            if (parsed[key]) {
              parsed[key].push(val);
            } else {
              parsed[key] = [val];
            }
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        });
        return parsed;
      };
      var $internals = Symbol("internals");
      function normalizeHeader(header) {
        return header && String(header).trim().toLowerCase();
      }
      function normalizeValue(value) {
        if (value === false || value == null) {
          return value;
        }
        return utils.isArray(value) ? value.map(normalizeValue) : String(value);
      }
      function parseTokens(str) {
        const tokens = /* @__PURE__ */ Object.create(null);
        const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let match;
        while (match = tokensRE.exec(str)) {
          tokens[match[1]] = match[2];
        }
        return tokens;
      }
      var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
      function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
        if (utils.isFunction(filter)) {
          return filter.call(this, value, header);
        }
        if (isHeaderNameFilter) {
          value = header;
        }
        if (!utils.isString(value))
          return;
        if (utils.isString(filter)) {
          return value.indexOf(filter) !== -1;
        }
        if (utils.isRegExp(filter)) {
          return filter.test(value);
        }
      }
      function formatHeader(header) {
        return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
          return char.toUpperCase() + str;
        });
      }
      function buildAccessors(obj, header) {
        const accessorName = utils.toCamelCase(" " + header);
        ["get", "set", "has"].forEach((methodName) => {
          Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
              return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
          });
        });
      }
      var AxiosHeaders = class {
        constructor(headers) {
          headers && this.set(headers);
        }
        set(header, valueOrRewrite, rewrite) {
          const self2 = this;
          function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
              throw new Error("header name must be a non-empty string");
            }
            const key = utils.findKey(self2, lHeader);
            if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
              self2[key || _header] = normalizeValue(_value);
            }
          }
          const setHeaders = (headers, _rewrite) => utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
          if (utils.isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
          } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders(parseHeaders(header), valueOrRewrite);
          } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
          }
          return this;
        }
        get(header, parser) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils.findKey(this, header);
            if (key) {
              const value = this[key];
              if (!parser) {
                return value;
              }
              if (parser === true) {
                return parseTokens(value);
              }
              if (utils.isFunction(parser)) {
                return parser.call(this, value, key);
              }
              if (utils.isRegExp(parser)) {
                return parser.exec(value);
              }
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(header, matcher) {
          header = normalizeHeader(header);
          if (header) {
            const key = utils.findKey(this, header);
            return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
          }
          return false;
        }
        delete(header, matcher) {
          const self2 = this;
          let deleted = false;
          function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
              const key = utils.findKey(self2, _header);
              if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
                delete self2[key];
                deleted = true;
              }
            }
          }
          if (utils.isArray(header)) {
            header.forEach(deleteHeader);
          } else {
            deleteHeader(header);
          }
          return deleted;
        }
        clear(matcher) {
          const keys = Object.keys(this);
          let i = keys.length;
          let deleted = false;
          while (i--) {
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
              delete this[key];
              deleted = true;
            }
          }
          return deleted;
        }
        normalize(format) {
          const self2 = this;
          const headers = {};
          utils.forEach(this, (value, header) => {
            const key = utils.findKey(headers, header);
            if (key) {
              self2[key] = normalizeValue(value);
              delete self2[header];
              return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
              delete self2[header];
            }
            self2[normalized] = normalizeValue(value);
            headers[normalized] = true;
          });
          return this;
        }
        concat(...targets) {
          return this.constructor.concat(this, ...targets);
        }
        toJSON(asStrings) {
          const obj = /* @__PURE__ */ Object.create(null);
          utils.forEach(this, (value, header) => {
            value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(", ") : value);
          });
          return obj;
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(thing) {
          return thing instanceof this ? thing : new this(thing);
        }
        static concat(first, ...targets) {
          const computed = new this(first);
          targets.forEach((target) => computed.set(target));
          return computed;
        }
        static accessor(header) {
          const internals = this[$internals] = this[$internals] = {
            accessors: {}
          };
          const accessors = internals.accessors;
          const prototype2 = this.prototype;
          function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
              buildAccessors(prototype2, _header);
              accessors[lHeader] = true;
            }
          }
          utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
          return this;
        }
      };
      AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
      utils.freezeMethods(AxiosHeaders.prototype);
      utils.freezeMethods(AxiosHeaders);
      var AxiosHeaders$1 = AxiosHeaders;
      function transformData(fns, response) {
        const config = this || defaults$1;
        const context = response || config;
        const headers = AxiosHeaders$1.from(context.headers);
        let data = context.data;
        utils.forEach(fns, function transform(fn) {
          data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
        });
        headers.normalize();
        return data;
      }
      function isCancel(value) {
        return !!(value && value.__CANCEL__);
      }
      function CanceledError(message, config, request) {
        AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
        this.name = "CanceledError";
      }
      utils.inherits(CanceledError, AxiosError, {
        __CANCEL__: true
      });
      function settle(resolve, reject, response) {
        const validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(new AxiosError(
            "Request failed with status code " + response.status,
            [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
            response.config,
            response.request,
            response
          ));
        }
      }
      var cookies = platform.isStandardBrowserEnv ? (
        // Standard browser envs support document.cookie
        function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              const cookie = [];
              cookie.push(name + "=" + encodeURIComponent(value));
              if (utils.isNumber(expires)) {
                cookie.push("expires=" + new Date(expires).toGMTString());
              }
              if (utils.isString(path)) {
                cookie.push("path=" + path);
              }
              if (utils.isString(domain)) {
                cookie.push("domain=" + domain);
              }
              if (secure === true) {
                cookie.push("secure");
              }
              document.cookie = cookie.join("; ");
            },
            read: function read(name) {
              const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, "", Date.now() - 864e5);
            }
          };
        }()
      ) : (
        // Non standard browser env (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return {
            write: function write() {
            },
            read: function read() {
              return null;
            },
            remove: function remove() {
            }
          };
        }()
      );
      function isAbsoluteURL(url) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      }
      function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      }
      function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      }
      var isURLSameOrigin = platform.isStandardBrowserEnv ? (
        // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        function standardBrowserEnv() {
          const msie = /(msie|trident)/i.test(navigator.userAgent);
          const urlParsingNode = document.createElement("a");
          let originURL;
          function resolveURL(url) {
            let href = url;
            if (msie) {
              urlParsingNode.setAttribute("href", href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
            };
          }
          originURL = resolveURL(window.location.href);
          return function isURLSameOrigin2(requestURL) {
            const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }()
      ) : (
        // Non standard browser envs (web workers, react-native) lack needed support.
        function nonStandardBrowserEnv() {
          return function isURLSameOrigin2() {
            return true;
          };
        }()
      );
      function parseProtocol(url) {
        const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
        return match && match[1] || "";
      }
      function speedometer(samplesCount, min) {
        samplesCount = samplesCount || 10;
        const bytes = new Array(samplesCount);
        const timestamps = new Array(samplesCount);
        let head = 0;
        let tail = 0;
        let firstSampleTS;
        min = min !== void 0 ? min : 1e3;
        return function push(chunkLength) {
          const now = Date.now();
          const startedAt = timestamps[tail];
          if (!firstSampleTS) {
            firstSampleTS = now;
          }
          bytes[head] = chunkLength;
          timestamps[head] = now;
          let i = tail;
          let bytesCount = 0;
          while (i !== head) {
            bytesCount += bytes[i++];
            i = i % samplesCount;
          }
          head = (head + 1) % samplesCount;
          if (head === tail) {
            tail = (tail + 1) % samplesCount;
          }
          if (now - firstSampleTS < min) {
            return;
          }
          const passed = startedAt && now - startedAt;
          return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
        };
      }
      function progressEventReducer(listener, isDownloadStream) {
        let bytesNotified = 0;
        const _speedometer = speedometer(50, 250);
        return (e2) => {
          const loaded = e2.loaded;
          const total = e2.lengthComputable ? e2.total : void 0;
          const progressBytes = loaded - bytesNotified;
          const rate = _speedometer(progressBytes);
          const inRange = loaded <= total;
          bytesNotified = loaded;
          const data = {
            loaded,
            total,
            progress: total ? loaded / total : void 0,
            bytes: progressBytes,
            rate: rate ? rate : void 0,
            estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
            event: e2
          };
          data[isDownloadStream ? "download" : "upload"] = true;
          listener(data);
        };
      }
      var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
      var xhrAdapter = isXHRAdapterSupported && function(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          let requestData = config.data;
          const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
          const responseType = config.responseType;
          let onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          if (utils.isFormData(requestData) && (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv)) {
            requestHeaders.setContentType(false);
          }
          let request = new XMLHttpRequest();
          if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
          }
          const fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            const responseHeaders = AxiosHeaders$1.from(
              "getAllResponseHeaders" in request && request.getAllResponseHeaders()
            );
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(new AxiosError(
              timeoutErrorMessage,
              transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
              config,
              request
            ));
            request = null;
          };
          if (platform.isStandardBrowserEnv) {
            const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
            if (xsrfValue) {
              requestHeaders.set(config.xsrfHeaderName, xsrfValue);
            }
          }
          requestData === void 0 && requestHeaders.setContentType(null);
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
              request.setRequestHeader(key, val);
            });
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
          }
          if (config.cancelToken || config.signal) {
            onCanceled = (cancel) => {
              if (!request) {
                return;
              }
              reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          const protocol = parseProtocol(fullPath);
          if (protocol && platform.protocols.indexOf(protocol) === -1) {
            reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
            return;
          }
          request.send(requestData || null);
        });
      };
      var knownAdapters = {
        http: httpAdapter,
        xhr: xhrAdapter
      };
      utils.forEach(knownAdapters, (fn, value) => {
        if (fn) {
          try {
            Object.defineProperty(fn, "name", { value });
          } catch (e2) {
          }
          Object.defineProperty(fn, "adapterName", { value });
        }
      });
      var adapters = {
        getAdapter: (adapters2) => {
          adapters2 = utils.isArray(adapters2) ? adapters2 : [adapters2];
          const { length } = adapters2;
          let nameOrAdapter;
          let adapter;
          for (let i = 0; i < length; i++) {
            nameOrAdapter = adapters2[i];
            if (adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
              break;
            }
          }
          if (!adapter) {
            if (adapter === false) {
              throw new AxiosError(
                `Adapter ${nameOrAdapter} is not supported by the environment`,
                "ERR_NOT_SUPPORT"
              );
            }
            throw new Error(
              utils.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
            );
          }
          if (!utils.isFunction(adapter)) {
            throw new TypeError("adapter is not a function");
          }
          return adapter;
        },
        adapters: knownAdapters
      };
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new CanceledError(null, config);
        }
      }
      function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = AxiosHeaders$1.from(config.headers);
        config.data = transformData.call(
          config,
          config.transformRequest
        );
        if (["post", "put", "patch"].indexOf(config.method) !== -1) {
          config.headers.setContentType("application/x-www-form-urlencoded", false);
        }
        const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(
            config,
            config.transformResponse,
            response
          );
          response.headers = AxiosHeaders$1.from(response.headers);
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(
                config,
                config.transformResponse,
                reason.response
              );
              reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
            }
          }
          return Promise.reject(reason);
        });
      }
      var headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
      function mergeConfig(config1, config2) {
        config2 = config2 || {};
        const config = {};
        function getMergedValue(target, source, caseless) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge.call({ caseless }, target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(a2, b2, caseless) {
          if (!utils.isUndefined(b2)) {
            return getMergedValue(a2, b2, caseless);
          } else if (!utils.isUndefined(a2)) {
            return getMergedValue(void 0, a2, caseless);
          }
        }
        function valueFromConfig2(a2, b2) {
          if (!utils.isUndefined(b2)) {
            return getMergedValue(void 0, b2);
          }
        }
        function defaultToConfig2(a2, b2) {
          if (!utils.isUndefined(b2)) {
            return getMergedValue(void 0, b2);
          } else if (!utils.isUndefined(a2)) {
            return getMergedValue(void 0, a2);
          }
        }
        function mergeDirectKeys(a2, b2, prop) {
          if (prop in config2) {
            return getMergedValue(a2, b2);
          } else if (prop in config1) {
            return getMergedValue(void 0, a2);
          }
        }
        const mergeMap = {
          url: valueFromConfig2,
          method: valueFromConfig2,
          data: valueFromConfig2,
          baseURL: defaultToConfig2,
          transformRequest: defaultToConfig2,
          transformResponse: defaultToConfig2,
          paramsSerializer: defaultToConfig2,
          timeout: defaultToConfig2,
          timeoutMessage: defaultToConfig2,
          withCredentials: defaultToConfig2,
          adapter: defaultToConfig2,
          responseType: defaultToConfig2,
          xsrfCookieName: defaultToConfig2,
          xsrfHeaderName: defaultToConfig2,
          onUploadProgress: defaultToConfig2,
          onDownloadProgress: defaultToConfig2,
          decompress: defaultToConfig2,
          maxContentLength: defaultToConfig2,
          maxBodyLength: defaultToConfig2,
          beforeRedirect: defaultToConfig2,
          transport: defaultToConfig2,
          httpAgent: defaultToConfig2,
          httpsAgent: defaultToConfig2,
          cancelToken: defaultToConfig2,
          socketPath: defaultToConfig2,
          responseEncoding: defaultToConfig2,
          validateStatus: mergeDirectKeys,
          headers: (a2, b2) => mergeDeepProperties(headersToObject(a2), headersToObject(b2), true)
        };
        utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
          const merge2 = mergeMap[prop] || mergeDeepProperties;
          const configValue = merge2(config1[prop], config2[prop], prop);
          utils.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
        });
        return config;
      }
      var VERSION = "1.3.6";
      var validators$1 = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
        validators$1[type] = function validator2(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators$1.transitional = function transitional(validator2, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return (value, opt, opts) => {
          if (validator2 === false) {
            throw new AxiosError(
              formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
              AxiosError.ERR_DEPRECATED
            );
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator2 ? validator2(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
        }
        const keys = Object.keys(options);
        let i = keys.length;
        while (i-- > 0) {
          const opt = keys[i];
          const validator2 = schema[opt];
          if (validator2) {
            const value = options[opt];
            const result = value === void 0 || validator2(value, opt, options);
            if (result !== true) {
              throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
          }
        }
      }
      var validator = {
        assertOptions,
        validators: validators$1
      };
      var validators = validator.validators;
      var Axios2 = class {
        constructor(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager$1(),
            response: new InterceptorManager$1()
          };
        }
        /**
         * Dispatch a request
         *
         * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
         * @param {?Object} config
         *
         * @returns {Promise} The Promise to be fulfilled
         */
        request(configOrUrl, config) {
          if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          const { transitional, paramsSerializer, headers } = config;
          if (transitional !== void 0) {
            validator.assertOptions(transitional, {
              silentJSONParsing: validators.transitional(validators.boolean),
              forcedJSONParsing: validators.transitional(validators.boolean),
              clarifyTimeoutError: validators.transitional(validators.boolean)
            }, false);
          }
          if (paramsSerializer != null) {
            if (utils.isFunction(paramsSerializer)) {
              config.paramsSerializer = {
                serialize: paramsSerializer
              };
            } else {
              validator.assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
              }, true);
            }
          }
          config.method = (config.method || this.defaults.method || "get").toLowerCase();
          let contextHeaders;
          contextHeaders = headers && utils.merge(
            headers.common,
            headers[config.method]
          );
          contextHeaders && utils.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (method) => {
              delete headers[method];
            }
          );
          config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
          const requestInterceptorChain = [];
          let synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
              return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          const responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          let promise;
          let i = 0;
          let len;
          if (!synchronousRequestInterceptors) {
            const chain = [dispatchRequest.bind(this), void 0];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while (i < len) {
              promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
          }
          len = requestInterceptorChain.length;
          let newConfig = config;
          i = 0;
          while (i < len) {
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected.call(this, error);
              break;
            }
          }
          try {
            promise = dispatchRequest.call(this, newConfig);
          } catch (error) {
            return Promise.reject(error);
          }
          i = 0;
          len = responseInterceptorChain.length;
          while (i < len) {
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
          }
          return promise;
        }
        getUri(config) {
          config = mergeConfig(this.defaults, config);
          const fullPath = buildFullPath(config.baseURL, config.url);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        }
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios2.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              headers: isForm ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url,
              data
            }));
          };
        }
        Axios2.prototype[method] = generateHTTPMethod();
        Axios2.prototype[method + "Form"] = generateHTTPMethod(true);
      });
      var Axios$1 = Axios2;
      var CancelToken = class {
        constructor(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
          }
          let resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          const token = this;
          this.promise.then((cancel) => {
            if (!token._listeners)
              return;
            let i = token._listeners.length;
            while (i-- > 0) {
              token._listeners[i](cancel);
            }
            token._listeners = null;
          });
          this.promise.then = (onfulfilled) => {
            let _resolve;
            const promise = new Promise((resolve) => {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };
            return promise;
          };
          executor(function cancel(message, config, request) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError(message, config, request);
            resolvePromise(token.reason);
          });
        }
        /**
         * Throws a `CanceledError` if cancellation has been requested.
         */
        throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        }
        /**
         * Subscribe to the cancel signal
         */
        subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }
          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        }
        /**
         * Unsubscribe from the cancel signal
         */
        unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          const index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        }
        /**
         * Returns an object that contains a new `CancelToken` and a function that, when called,
         * cancels the `CancelToken`.
         */
        static source() {
          let cancel;
          const token = new CancelToken(function executor(c2) {
            cancel = c2;
          });
          return {
            token,
            cancel
          };
        }
      };
      var CancelToken$1 = CancelToken;
      function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      }
      function isAxiosError(payload) {
        return utils.isObject(payload) && payload.isAxiosError === true;
      }
      var HttpStatusCode = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
      };
      Object.entries(HttpStatusCode).forEach(([key, value]) => {
        HttpStatusCode[value] = key;
      });
      var HttpStatusCode$1 = HttpStatusCode;
      function createInstance(defaultConfig) {
        const context = new Axios$1(defaultConfig);
        const instance = bind(Axios$1.prototype.request, context);
        utils.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
        utils.extend(instance, context, null, { allOwnKeys: true });
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios3 = createInstance(defaults$1);
      axios3.Axios = Axios$1;
      axios3.CanceledError = CanceledError;
      axios3.CancelToken = CancelToken$1;
      axios3.isCancel = isCancel;
      axios3.VERSION = VERSION;
      axios3.toFormData = toFormData;
      axios3.AxiosError = AxiosError;
      axios3.Cancel = axios3.CanceledError;
      axios3.all = function all(promises) {
        return Promise.all(promises);
      };
      axios3.spread = spread;
      axios3.isAxiosError = isAxiosError;
      axios3.mergeConfig = mergeConfig;
      axios3.AxiosHeaders = AxiosHeaders$1;
      axios3.formToJSON = (thing) => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
      axios3.HttpStatusCode = HttpStatusCode$1;
      axios3.default = axios3;
      module2.exports = axios3;
    }
  });

  // node_modules/google-protobuf/google-protobuf.js
  var require_google_protobuf = __commonJS({
    "node_modules/google-protobuf/google-protobuf.js"(exports, module) {
      var $jscomp = $jscomp || {};
      $jscomp.scope = {};
      $jscomp.findInternal = function(a2, b2, c2) {
        a2 instanceof String && (a2 = String(a2));
        for (var d2 = a2.length, e2 = 0; e2 < d2; e2++) {
          var f2 = a2[e2];
          if (b2.call(c2, f2, e2, a2))
            return { i: e2, v: f2 };
        }
        return { i: -1, v: void 0 };
      };
      $jscomp.ASSUME_ES5 = false;
      $jscomp.ASSUME_NO_NATIVE_MAP = false;
      $jscomp.ASSUME_NO_NATIVE_SET = false;
      $jscomp.SIMPLE_FROUND_POLYFILL = false;
      $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a2, b2, c2) {
        a2 != Array.prototype && a2 != Object.prototype && (a2[b2] = c2.value);
      };
      $jscomp.getGlobal = function(a2) {
        return "undefined" != typeof window && window === a2 ? a2 : "undefined" != typeof global && null != global ? global : a2;
      };
      $jscomp.global = $jscomp.getGlobal(exports);
      $jscomp.polyfill = function(a2, b2, c2, d2) {
        if (b2) {
          c2 = $jscomp.global;
          a2 = a2.split(".");
          for (d2 = 0; d2 < a2.length - 1; d2++) {
            var e2 = a2[d2];
            e2 in c2 || (c2[e2] = {});
            c2 = c2[e2];
          }
          a2 = a2[a2.length - 1];
          d2 = c2[a2];
          b2 = b2(d2);
          b2 != d2 && null != b2 && $jscomp.defineProperty(c2, a2, { configurable: true, writable: true, value: b2 });
        }
      };
      $jscomp.polyfill("Array.prototype.findIndex", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          return $jscomp.findInternal(this, a3, c2).i;
        };
      }, "es6", "es3");
      $jscomp.checkStringArgs = function(a2, b2, c2) {
        if (null == a2)
          throw new TypeError("The 'this' value for String.prototype." + c2 + " must not be null or undefined");
        if (b2 instanceof RegExp)
          throw new TypeError("First argument to String.prototype." + c2 + " must not be a regular expression");
        return a2 + "";
      };
      $jscomp.polyfill("String.prototype.endsWith", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          var b2 = $jscomp.checkStringArgs(this, a3, "endsWith");
          a3 += "";
          void 0 === c2 && (c2 = b2.length);
          c2 = Math.max(0, Math.min(c2 | 0, b2.length));
          for (var e2 = a3.length; 0 < e2 && 0 < c2; )
            if (b2[--c2] != a3[--e2])
              return false;
          return 0 >= e2;
        };
      }, "es6", "es3");
      $jscomp.polyfill("Array.prototype.find", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          return $jscomp.findInternal(this, a3, c2).v;
        };
      }, "es6", "es3");
      $jscomp.polyfill("String.prototype.startsWith", function(a2) {
        return a2 ? a2 : function(a3, c2) {
          var b2 = $jscomp.checkStringArgs(this, a3, "startsWith");
          a3 += "";
          var e2 = b2.length, f2 = a3.length;
          c2 = Math.max(0, Math.min(c2 | 0, b2.length));
          for (var g = 0; g < f2 && c2 < e2; )
            if (b2[c2++] != a3[g++])
              return false;
          return g >= f2;
        };
      }, "es6", "es3");
      $jscomp.polyfill("String.prototype.repeat", function(a2) {
        return a2 ? a2 : function(a3) {
          var b2 = $jscomp.checkStringArgs(this, null, "repeat");
          if (0 > a3 || 1342177279 < a3)
            throw new RangeError("Invalid count value");
          a3 |= 0;
          for (var d2 = ""; a3; )
            if (a3 & 1 && (d2 += b2), a3 >>>= 1)
              b2 += b2;
          return d2;
        };
      }, "es6", "es3");
      var COMPILED = true;
      var goog = goog || {};
      goog.global = exports || self;
      goog.exportPath_ = function(a2, b2, c2) {
        a2 = a2.split(".");
        c2 = c2 || goog.global;
        a2[0] in c2 || "undefined" == typeof c2.execScript || c2.execScript("var " + a2[0]);
        for (var d2; a2.length && (d2 = a2.shift()); )
          a2.length || void 0 === b2 ? c2 = c2[d2] && c2[d2] !== Object.prototype[d2] ? c2[d2] : c2[d2] = {} : c2[d2] = b2;
      };
      goog.define = function(a2, b2) {
        if (!COMPILED) {
          var c2 = goog.global.CLOSURE_UNCOMPILED_DEFINES, d2 = goog.global.CLOSURE_DEFINES;
          c2 && void 0 === c2.nodeType && Object.prototype.hasOwnProperty.call(c2, a2) ? b2 = c2[a2] : d2 && void 0 === d2.nodeType && Object.prototype.hasOwnProperty.call(d2, a2) && (b2 = d2[a2]);
        }
        return b2;
      };
      goog.FEATURESET_YEAR = 2012;
      goog.DEBUG = true;
      goog.LOCALE = "en";
      goog.TRUSTED_SITE = true;
      goog.STRICT_MODE_COMPATIBLE = false;
      goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
      goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = false;
      goog.provide = function(a2) {
        if (goog.isInModuleLoader_())
          throw Error("goog.provide cannot be used within a module.");
        if (!COMPILED && goog.isProvided_(a2))
          throw Error('Namespace "' + a2 + '" already declared.');
        goog.constructNamespace_(a2);
      };
      goog.constructNamespace_ = function(a2, b2) {
        if (!COMPILED) {
          delete goog.implicitNamespaces_[a2];
          for (var c2 = a2; (c2 = c2.substring(0, c2.lastIndexOf("."))) && !goog.getObjectByName(c2); )
            goog.implicitNamespaces_[c2] = true;
        }
        goog.exportPath_(a2, b2);
      };
      goog.getScriptNonce = function(a2) {
        if (a2 && a2 != goog.global)
          return goog.getScriptNonce_(a2.document);
        null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
        return goog.cspNonce_;
      };
      goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
      goog.cspNonce_ = null;
      goog.getScriptNonce_ = function(a2) {
        return (a2 = a2.querySelector && a2.querySelector("script[nonce]")) && (a2 = a2.nonce || a2.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a2) ? a2 : "";
      };
      goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
      goog.module = function(a2) {
        if ("string" !== typeof a2 || !a2 || -1 == a2.search(goog.VALID_MODULE_RE_))
          throw Error("Invalid module identifier");
        if (!goog.isInGoogModuleLoader_())
          throw Error("Module " + a2 + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (goog.moduleLoaderState_.moduleName)
          throw Error("goog.module may only be called once per module.");
        goog.moduleLoaderState_.moduleName = a2;
        if (!COMPILED) {
          if (goog.isProvided_(a2))
            throw Error('Namespace "' + a2 + '" already declared.');
          delete goog.implicitNamespaces_[a2];
        }
      };
      goog.module.get = function(a2) {
        return goog.module.getInternal_(a2);
      };
      goog.module.getInternal_ = function(a2) {
        if (!COMPILED) {
          if (a2 in goog.loadedModules_)
            return goog.loadedModules_[a2].exports;
          if (!goog.implicitNamespaces_[a2])
            return a2 = goog.getObjectByName(a2), null != a2 ? a2 : null;
        }
        return null;
      };
      goog.ModuleType = { ES6: "es6", GOOG: "goog" };
      goog.moduleLoaderState_ = null;
      goog.isInModuleLoader_ = function() {
        return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
      };
      goog.isInGoogModuleLoader_ = function() {
        return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
      };
      goog.isInEs6ModuleLoader_ = function() {
        if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
          return true;
        var a2 = goog.global.$jscomp;
        return a2 ? "function" != typeof a2.getCurrentModulePath ? false : !!a2.getCurrentModulePath() : false;
      };
      goog.module.declareLegacyNamespace = function() {
        if (!COMPILED && !goog.isInGoogModuleLoader_())
          throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
        if (!COMPILED && !goog.moduleLoaderState_.moduleName)
          throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
        goog.moduleLoaderState_.declareLegacyNamespace = true;
      };
      goog.declareModuleId = function(a2) {
        if (!COMPILED) {
          if (!goog.isInEs6ModuleLoader_())
            throw Error("goog.declareModuleId may only be called from within an ES6 module");
          if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
            throw Error("goog.declareModuleId may only be called once per module.");
          if (a2 in goog.loadedModules_)
            throw Error('Module with namespace "' + a2 + '" already exists.');
        }
        if (goog.moduleLoaderState_)
          goog.moduleLoaderState_.moduleName = a2;
        else {
          var b2 = goog.global.$jscomp;
          if (!b2 || "function" != typeof b2.getCurrentModulePath)
            throw Error('Module with namespace "' + a2 + '" has been loaded incorrectly.');
          b2 = b2.require(b2.getCurrentModulePath());
          goog.loadedModules_[a2] = { exports: b2, type: goog.ModuleType.ES6, moduleId: a2 };
        }
      };
      goog.setTestOnly = function(a2) {
        if (goog.DISALLOW_TEST_ONLY_CODE)
          throw a2 = a2 || "", Error("Importing test-only code into non-debug environment" + (a2 ? ": " + a2 : "."));
      };
      goog.forwardDeclare = function(a2) {
      };
      COMPILED || (goog.isProvided_ = function(a2) {
        return a2 in goog.loadedModules_ || !goog.implicitNamespaces_[a2] && null != goog.getObjectByName(a2);
      }, goog.implicitNamespaces_ = { "goog.module": true });
      goog.getObjectByName = function(a2, b2) {
        a2 = a2.split(".");
        b2 = b2 || goog.global;
        for (var c2 = 0; c2 < a2.length; c2++)
          if (b2 = b2[a2[c2]], null == b2)
            return null;
        return b2;
      };
      goog.globalize = function(a2, b2) {
        b2 = b2 || goog.global;
        for (var c2 in a2)
          b2[c2] = a2[c2];
      };
      goog.addDependency = function(a2, b2, c2, d2) {
        !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a2, b2, c2, d2);
      };
      goog.ENABLE_DEBUG_LOADER = true;
      goog.logToConsole_ = function(a2) {
        goog.global.console && goog.global.console.error(a2);
      };
      goog.require = function(a2) {
        if (!COMPILED) {
          goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a2);
          if (goog.isProvided_(a2)) {
            if (goog.isInModuleLoader_())
              return goog.module.getInternal_(a2);
          } else if (goog.ENABLE_DEBUG_LOADER) {
            var b2 = goog.moduleLoaderState_;
            goog.moduleLoaderState_ = null;
            try {
              goog.debugLoader_.load_(a2);
            } finally {
              goog.moduleLoaderState_ = b2;
            }
          }
          return null;
        }
      };
      goog.requireType = function(a2) {
        return {};
      };
      goog.basePath = "";
      goog.nullFunction = function() {
      };
      goog.abstractMethod = function() {
        throw Error("unimplemented abstract method");
      };
      goog.addSingletonGetter = function(a2) {
        a2.instance_ = void 0;
        a2.getInstance = function() {
          if (a2.instance_)
            return a2.instance_;
          goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a2);
          return a2.instance_ = new a2();
        };
      };
      goog.instantiatedSingletons_ = [];
      goog.LOAD_MODULE_USING_EVAL = true;
      goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
      goog.loadedModules_ = {};
      goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
      goog.TRANSPILE = "detect";
      goog.ASSUME_ES_MODULES_TRANSPILED = false;
      goog.TRANSPILE_TO_LANGUAGE = "";
      goog.TRANSPILER = "transpile.js";
      goog.hasBadLetScoping = null;
      goog.useSafari10Workaround = function() {
        if (null == goog.hasBadLetScoping) {
          try {
            var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
          } catch (b2) {
            a = false;
          }
          goog.hasBadLetScoping = a;
        }
        return goog.hasBadLetScoping;
      };
      goog.workaroundSafari10EvalBug = function(a2) {
        return "(function(){" + a2 + "\n;})();\n";
      };
      goog.loadModule = function(a2) {
        var b2 = goog.moduleLoaderState_;
        try {
          goog.moduleLoaderState_ = { moduleName: "", declareLegacyNamespace: false, type: goog.ModuleType.GOOG };
          if (goog.isFunction(a2))
            var c2 = a2.call(void 0, {});
          else if ("string" === typeof a2)
            goog.useSafari10Workaround() && (a2 = goog.workaroundSafari10EvalBug(a2)), c2 = goog.loadModuleFromSource_.call(void 0, a2);
          else
            throw Error("Invalid module definition");
          var d2 = goog.moduleLoaderState_.moduleName;
          if ("string" === typeof d2 && d2)
            goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(
              d2,
              c2
            ) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof c2 && null != c2 && Object.seal(c2), goog.loadedModules_[d2] = { exports: c2, type: goog.ModuleType.GOOG, moduleId: goog.moduleLoaderState_.moduleName };
          else
            throw Error('Invalid module name "' + d2 + '"');
        } finally {
          goog.moduleLoaderState_ = b2;
        }
      };
      goog.loadModuleFromSource_ = function(a) {
        eval(a);
        return {};
      };
      goog.normalizePath_ = function(a2) {
        a2 = a2.split("/");
        for (var b2 = 0; b2 < a2.length; )
          "." == a2[b2] ? a2.splice(b2, 1) : b2 && ".." == a2[b2] && a2[b2 - 1] && ".." != a2[b2 - 1] ? a2.splice(--b2, 2) : b2++;
        return a2.join("/");
      };
      goog.loadFileSync_ = function(a2) {
        if (goog.global.CLOSURE_LOAD_FILE_SYNC)
          return goog.global.CLOSURE_LOAD_FILE_SYNC(a2);
        try {
          var b2 = new goog.global.XMLHttpRequest();
          b2.open("get", a2, false);
          b2.send();
          return 0 == b2.status || 200 == b2.status ? b2.responseText : null;
        } catch (c2) {
          return null;
        }
      };
      goog.transpile_ = function(a2, b2, c2) {
        var d2 = goog.global.$jscomp;
        d2 || (goog.global.$jscomp = d2 = {});
        var e2 = d2.transpile;
        if (!e2) {
          var f2 = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f2);
          if (g) {
            (function() {
              (0, eval)(g + "\n//# sourceURL=" + f2);
            }).call(goog.global);
            if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
              throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
            goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
            d2 = goog.global.$jscomp;
            e2 = d2.transpile;
          }
        }
        e2 || (e2 = d2.transpile = function(a3, b3) {
          goog.logToConsole_(b3 + " requires transpilation but no transpiler was found.");
          return a3;
        });
        return e2(a2, b2, c2);
      };
      goog.typeOf = function(a2) {
        var b2 = typeof a2;
        if ("object" == b2)
          if (a2) {
            if (a2 instanceof Array)
              return "array";
            if (a2 instanceof Object)
              return b2;
            var c2 = Object.prototype.toString.call(a2);
            if ("[object Window]" == c2)
              return "object";
            if ("[object Array]" == c2 || "number" == typeof a2.length && "undefined" != typeof a2.splice && "undefined" != typeof a2.propertyIsEnumerable && !a2.propertyIsEnumerable("splice"))
              return "array";
            if ("[object Function]" == c2 || "undefined" != typeof a2.call && "undefined" != typeof a2.propertyIsEnumerable && !a2.propertyIsEnumerable("call"))
              return "function";
          } else
            return "null";
        else if ("function" == b2 && "undefined" == typeof a2.call)
          return "object";
        return b2;
      };
      goog.isArray = function(a2) {
        return "array" == goog.typeOf(a2);
      };
      goog.isArrayLike = function(a2) {
        var b2 = goog.typeOf(a2);
        return "array" == b2 || "object" == b2 && "number" == typeof a2.length;
      };
      goog.isDateLike = function(a2) {
        return goog.isObject(a2) && "function" == typeof a2.getFullYear;
      };
      goog.isFunction = function(a2) {
        return "function" == goog.typeOf(a2);
      };
      goog.isObject = function(a2) {
        var b2 = typeof a2;
        return "object" == b2 && null != a2 || "function" == b2;
      };
      goog.getUid = function(a2) {
        return Object.prototype.hasOwnProperty.call(a2, goog.UID_PROPERTY_) && a2[goog.UID_PROPERTY_] || (a2[goog.UID_PROPERTY_] = ++goog.uidCounter_);
      };
      goog.hasUid = function(a2) {
        return !!a2[goog.UID_PROPERTY_];
      };
      goog.removeUid = function(a2) {
        null !== a2 && "removeAttribute" in a2 && a2.removeAttribute(goog.UID_PROPERTY_);
        try {
          delete a2[goog.UID_PROPERTY_];
        } catch (b2) {
        }
      };
      goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
      goog.uidCounter_ = 0;
      goog.getHashCode = goog.getUid;
      goog.removeHashCode = goog.removeUid;
      goog.cloneObject = function(a2) {
        var b2 = goog.typeOf(a2);
        if ("object" == b2 || "array" == b2) {
          if ("function" === typeof a2.clone)
            return a2.clone();
          b2 = "array" == b2 ? [] : {};
          for (var c2 in a2)
            b2[c2] = goog.cloneObject(a2[c2]);
          return b2;
        }
        return a2;
      };
      goog.bindNative_ = function(a2, b2, c2) {
        return a2.call.apply(a2.bind, arguments);
      };
      goog.bindJs_ = function(a2, b2, c2) {
        if (!a2)
          throw Error();
        if (2 < arguments.length) {
          var d2 = Array.prototype.slice.call(arguments, 2);
          return function() {
            var c3 = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c3, d2);
            return a2.apply(b2, c3);
          };
        }
        return function() {
          return a2.apply(b2, arguments);
        };
      };
      goog.bind = function(a2, b2, c2) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
        return goog.bind.apply(null, arguments);
      };
      goog.partial = function(a2, b2) {
        var c2 = Array.prototype.slice.call(arguments, 1);
        return function() {
          var b3 = c2.slice();
          b3.push.apply(b3, arguments);
          return a2.apply(this, b3);
        };
      };
      goog.mixin = function(a2, b2) {
        for (var c2 in b2)
          a2[c2] = b2[c2];
      };
      goog.now = goog.TRUSTED_SITE && Date.now || function() {
        return +/* @__PURE__ */ new Date();
      };
      goog.globalEval = function(a2) {
        if (goog.global.execScript)
          goog.global.execScript(a2, "JavaScript");
        else if (goog.global.eval) {
          if (null == goog.evalWorksForGlobals_) {
            try {
              goog.global.eval("var _evalTest_ = 1;");
            } catch (d2) {
            }
            if ("undefined" != typeof goog.global._evalTest_) {
              try {
                delete goog.global._evalTest_;
              } catch (d2) {
              }
              goog.evalWorksForGlobals_ = true;
            } else
              goog.evalWorksForGlobals_ = false;
          }
          if (goog.evalWorksForGlobals_)
            goog.global.eval(a2);
          else {
            var b2 = goog.global.document, c2 = b2.createElement("script");
            c2.type = "text/javascript";
            c2.defer = false;
            c2.appendChild(b2.createTextNode(a2));
            b2.head.appendChild(c2);
            b2.head.removeChild(c2);
          }
        } else
          throw Error("goog.globalEval not available");
      };
      goog.evalWorksForGlobals_ = null;
      goog.getCssName = function(a2, b2) {
        if ("." == String(a2).charAt(0))
          throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a2);
        var c2 = function(a3) {
          return goog.cssNameMapping_[a3] || a3;
        }, d2 = function(a3) {
          a3 = a3.split("-");
          for (var b3 = [], d3 = 0; d3 < a3.length; d3++)
            b3.push(c2(a3[d3]));
          return b3.join("-");
        };
        d2 = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c2 : d2 : function(a3) {
          return a3;
        };
        a2 = b2 ? a2 + "-" + d2(b2) : d2(a2);
        return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a2) : a2;
      };
      goog.setCssNameMapping = function(a2, b2) {
        goog.cssNameMapping_ = a2;
        goog.cssNameMappingStyle_ = b2;
      };
      !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
      goog.getMsg = function(a2, b2, c2) {
        c2 && c2.html && (a2 = a2.replace(/</g, "&lt;"));
        b2 && (a2 = a2.replace(/\{\$([^}]+)}/g, function(a3, c3) {
          return null != b2 && c3 in b2 ? b2[c3] : a3;
        }));
        return a2;
      };
      goog.getMsgWithFallback = function(a2, b2) {
        return a2;
      };
      goog.exportSymbol = function(a2, b2, c2) {
        goog.exportPath_(a2, b2, c2);
      };
      goog.exportProperty = function(a2, b2, c2) {
        a2[b2] = c2;
      };
      goog.inherits = function(a2, b2) {
        function c2() {
        }
        c2.prototype = b2.prototype;
        a2.superClass_ = b2.prototype;
        a2.prototype = new c2();
        a2.prototype.constructor = a2;
        a2.base = function(a3, c3, f2) {
          for (var d2 = Array(arguments.length - 2), e2 = 2; e2 < arguments.length; e2++)
            d2[e2 - 2] = arguments[e2];
          return b2.prototype[c3].apply(a3, d2);
        };
      };
      goog.scope = function(a2) {
        if (goog.isInModuleLoader_())
          throw Error("goog.scope is not supported within a module.");
        a2.call(goog.global);
      };
      COMPILED || (goog.global.COMPILED = COMPILED);
      goog.defineClass = function(a2, b2) {
        var c2 = b2.constructor, d2 = b2.statics;
        c2 && c2 != Object.prototype.constructor || (c2 = function() {
          throw Error("cannot instantiate an interface (no constructor defined).");
        });
        c2 = goog.defineClass.createSealingConstructor_(c2, a2);
        a2 && goog.inherits(c2, a2);
        delete b2.constructor;
        delete b2.statics;
        goog.defineClass.applyProperties_(c2.prototype, b2);
        null != d2 && (d2 instanceof Function ? d2(c2) : goog.defineClass.applyProperties_(c2, d2));
        return c2;
      };
      goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
      goog.defineClass.createSealingConstructor_ = function(a2, b2) {
        if (!goog.defineClass.SEAL_CLASS_INSTANCES)
          return a2;
        var c2 = !goog.defineClass.isUnsealable_(b2), d2 = function() {
          var b3 = a2.apply(this, arguments) || this;
          b3[goog.UID_PROPERTY_] = b3[goog.UID_PROPERTY_];
          this.constructor === d2 && c2 && Object.seal instanceof Function && Object.seal(b3);
          return b3;
        };
        return d2;
      };
      goog.defineClass.isUnsealable_ = function(a2) {
        return a2 && a2.prototype && a2.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
      };
      goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      goog.defineClass.applyProperties_ = function(a2, b2) {
        for (var c2 in b2)
          Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
        for (var d2 = 0; d2 < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d2++)
          c2 = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d2], Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
      };
      goog.tagUnsealableClass = function(a2) {
        !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a2.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true);
      };
      goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
      !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
        var a2 = goog.global.document;
        return null != a2 && "write" in a2;
      }, goog.isDocumentLoading_ = function() {
        var a2 = goog.global.document;
        return a2.attachEvent ? "complete" != a2.readyState : "loading" == a2.readyState;
      }, goog.findBasePath_ = function() {
        if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH)
          goog.basePath = goog.global.CLOSURE_BASE_PATH;
        else if (goog.inHtmlDocument_()) {
          var a2 = goog.global.document, b2 = a2.currentScript;
          a2 = b2 ? [b2] : a2.getElementsByTagName("SCRIPT");
          for (b2 = a2.length - 1; 0 <= b2; --b2) {
            var c2 = a2[b2].src, d2 = c2.lastIndexOf("?");
            d2 = -1 == d2 ? c2.length : d2;
            if ("base.js" == c2.substr(d2 - 7, 7)) {
              goog.basePath = c2.substr(0, d2 - 7);
              break;
            }
          }
        }
      }, goog.findBasePath_(), goog.Transpiler = function() {
        this.requiresTranspilation_ = null;
        this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
      }, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
        function a(a2, b2) {
          e ? d[a2] = true : b2() ? (c = a2, d[a2] = false) : e = d[a2] = true;
        }
        function b(a) {
          try {
            return !!eval(a);
          } catch (h) {
            return false;
          }
        }
        var c = "es3", d = { es3: false }, e = false, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
        a("es5", function() {
          return b("[1,].length==1");
        });
        a("es6", function() {
          return f.match(/Edge\/(\d+)(\.\d)*/i) ? false : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
        });
        a("es7", function() {
          return b("2 ** 2 == 4");
        });
        a("es8", function() {
          return b("async () => 1, true");
        });
        a("es9", function() {
          return b("({...rest} = {}), true");
        });
        a("es_next", function() {
          return false;
        });
        return { target: c, map: d };
      }, goog.Transpiler.prototype.needsTranspile = function(a2, b2) {
        if ("always" == goog.TRANSPILE)
          return true;
        if ("never" == goog.TRANSPILE)
          return false;
        if (!this.requiresTranspilation_) {
          var c2 = this.createRequiresTranspilation_();
          this.requiresTranspilation_ = c2.map;
          this.transpilationTarget_ = this.transpilationTarget_ || c2.target;
        }
        if (a2 in this.requiresTranspilation_)
          return this.requiresTranspilation_[a2] ? true : !goog.inHtmlDocument_() || "es6" != b2 || "noModule" in goog.global.document.createElement("script") ? false : true;
        throw Error("Unknown language mode: " + a2);
      }, goog.Transpiler.prototype.transpile = function(a2, b2) {
        return goog.transpile_(a2, b2, this.transpilationTarget_);
      }, goog.transpiler_ = new goog.Transpiler(), goog.protectScriptTag_ = function(a2) {
        return a2.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
      }, goog.DebugLoader_ = function() {
        this.dependencies_ = {};
        this.idToPath_ = {};
        this.written_ = {};
        this.loadingDeps_ = [];
        this.depsToLoad_ = [];
        this.paused_ = false;
        this.factory_ = new goog.DependencyFactory(goog.transpiler_);
        this.deferredCallbacks_ = {};
        this.deferredQueue_ = [];
      }, goog.DebugLoader_.prototype.bootstrap = function(a2, b2) {
        function c2() {
          d2 && (goog.global.setTimeout(d2, 0), d2 = null);
        }
        var d2 = b2;
        if (a2.length) {
          b2 = [];
          for (var e2 = 0; e2 < a2.length; e2++) {
            var f2 = this.getPathFromDeps_(a2[e2]);
            if (!f2)
              throw Error("Unregonized namespace: " + a2[e2]);
            b2.push(this.dependencies_[f2]);
          }
          f2 = goog.require;
          var g = 0;
          for (e2 = 0; e2 < a2.length; e2++)
            f2(a2[e2]), b2[e2].onLoad(function() {
              ++g == a2.length && c2();
            });
        } else
          c2();
      }, goog.DebugLoader_.prototype.loadClosureDeps = function() {
        this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, false));
        this.loadDeps_();
      }, goog.DebugLoader_.prototype.requested = function(a2, b2) {
        (a2 = this.getPathFromDeps_(a2)) && (b2 || this.areDepsLoaded_(this.dependencies_[a2].requires)) && (b2 = this.deferredCallbacks_[a2]) && (delete this.deferredCallbacks_[a2], b2());
      }, goog.DebugLoader_.prototype.setDependencyFactory = function(a2) {
        this.factory_ = a2;
      }, goog.DebugLoader_.prototype.load_ = function(a2) {
        if (this.getPathFromDeps_(a2)) {
          var b2 = this, c2 = [], d2 = function(a3) {
            var e2 = b2.getPathFromDeps_(a3);
            if (!e2)
              throw Error("Bad dependency path or symbol: " + a3);
            if (!b2.written_[e2]) {
              b2.written_[e2] = true;
              a3 = b2.dependencies_[e2];
              for (e2 = 0; e2 < a3.requires.length; e2++)
                goog.isProvided_(a3.requires[e2]) || d2(a3.requires[e2]);
              c2.push(a3);
            }
          };
          d2(a2);
          a2 = !!this.depsToLoad_.length;
          this.depsToLoad_ = this.depsToLoad_.concat(c2);
          this.paused_ || a2 || this.loadDeps_();
        } else
          throw a2 = "goog.require could not find: " + a2, goog.logToConsole_(a2), Error(a2);
      }, goog.DebugLoader_.prototype.loadDeps_ = function() {
        for (var a2 = this, b2 = this.paused_; this.depsToLoad_.length && !b2; )
          (function() {
            var c2 = false, d2 = a2.depsToLoad_.shift(), e2 = false;
            a2.loading_(d2);
            var f2 = { pause: function() {
              if (c2)
                throw Error("Cannot call pause after the call to load.");
              b2 = true;
            }, resume: function() {
              c2 ? a2.resume_() : b2 = false;
            }, loaded: function() {
              if (e2)
                throw Error("Double call to loaded.");
              e2 = true;
              a2.loaded_(d2);
            }, pending: function() {
              for (var b3 = [], c3 = 0; c3 < a2.loadingDeps_.length; c3++)
                b3.push(a2.loadingDeps_[c3]);
              return b3;
            }, setModuleState: function(a3) {
              goog.moduleLoaderState_ = { type: a3, moduleName: "", declareLegacyNamespace: false };
            }, registerEs6ModuleExports: function(a3, b3, c3) {
              c3 && (goog.loadedModules_[c3] = { exports: b3, type: goog.ModuleType.ES6, moduleId: c3 || "" });
            }, registerGoogModuleExports: function(a3, b3) {
              goog.loadedModules_[a3] = { exports: b3, type: goog.ModuleType.GOOG, moduleId: a3 };
            }, clearModuleState: function() {
              goog.moduleLoaderState_ = null;
            }, defer: function(b3) {
              if (c2)
                throw Error("Cannot register with defer after the call to load.");
              a2.defer_(
                d2,
                b3
              );
            }, areDepsLoaded: function() {
              return a2.areDepsLoaded_(d2.requires);
            } };
            try {
              d2.load(f2);
            } finally {
              c2 = true;
            }
          })();
        b2 && this.pause_();
      }, goog.DebugLoader_.prototype.pause_ = function() {
        this.paused_ = true;
      }, goog.DebugLoader_.prototype.resume_ = function() {
        this.paused_ && (this.paused_ = false, this.loadDeps_());
      }, goog.DebugLoader_.prototype.loading_ = function(a2) {
        this.loadingDeps_.push(a2);
      }, goog.DebugLoader_.prototype.loaded_ = function(a2) {
        for (var b2 = 0; b2 < this.loadingDeps_.length; b2++)
          if (this.loadingDeps_[b2] == a2) {
            this.loadingDeps_.splice(b2, 1);
            break;
          }
        for (b2 = 0; b2 < this.deferredQueue_.length; b2++)
          if (this.deferredQueue_[b2] == a2.path) {
            this.deferredQueue_.splice(b2, 1);
            break;
          }
        if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
          for (; this.deferredQueue_.length; )
            this.requested(this.deferredQueue_.shift(), true);
        a2.loaded();
      }, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a2) {
        for (var b2 = 0; b2 < a2.length; b2++) {
          var c2 = this.getPathFromDeps_(a2[b2]);
          if (!c2 || !(c2 in this.deferredCallbacks_ || goog.isProvided_(a2[b2])))
            return false;
        }
        return true;
      }, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a2) {
        return a2 in this.idToPath_ ? this.idToPath_[a2] : a2 in this.dependencies_ ? a2 : null;
      }, goog.DebugLoader_.prototype.defer_ = function(a2, b2) {
        this.deferredCallbacks_[a2.path] = b2;
        this.deferredQueue_.push(a2.path);
      }, goog.LoadController = function() {
      }, goog.LoadController.prototype.pause = function() {
      }, goog.LoadController.prototype.resume = function() {
      }, goog.LoadController.prototype.loaded = function() {
      }, goog.LoadController.prototype.pending = function() {
      }, goog.LoadController.prototype.registerEs6ModuleExports = function(a2, b2, c2) {
      }, goog.LoadController.prototype.setModuleState = function(a2) {
      }, goog.LoadController.prototype.clearModuleState = function() {
      }, goog.LoadController.prototype.defer = function(a2) {
      }, goog.LoadController.prototype.areDepsLoaded = function() {
      }, goog.Dependency = function(a2, b2, c2, d2, e2) {
        this.path = a2;
        this.relativePath = b2;
        this.provides = c2;
        this.requires = d2;
        this.loadFlags = e2;
        this.loaded_ = false;
        this.loadCallbacks_ = [];
      }, goog.Dependency.prototype.getPathName = function() {
        var a2 = this.path, b2 = a2.indexOf("://");
        0 <= b2 && (a2 = a2.substring(b2 + 3), b2 = a2.indexOf("/"), 0 <= b2 && (a2 = a2.substring(b2 + 1)));
        return a2;
      }, goog.Dependency.prototype.onLoad = function(a2) {
        this.loaded_ ? a2() : this.loadCallbacks_.push(a2);
      }, goog.Dependency.prototype.loaded = function() {
        this.loaded_ = true;
        var a2 = this.loadCallbacks_;
        this.loadCallbacks_ = [];
        for (var b2 = 0; b2 < a2.length; b2++)
          a2[b2]();
      }, goog.Dependency.defer_ = false, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a2) {
        var b2 = Math.random().toString(32);
        goog.Dependency.callbackMap_[b2] = a2;
        return b2;
      }, goog.Dependency.unregisterCallback_ = function(a2) {
        delete goog.Dependency.callbackMap_[a2];
      }, goog.Dependency.callback_ = function(a2, b2) {
        if (a2 in goog.Dependency.callbackMap_) {
          for (var c2 = goog.Dependency.callbackMap_[a2], d2 = [], e2 = 1; e2 < arguments.length; e2++)
            d2.push(arguments[e2]);
          c2.apply(void 0, d2);
        } else
          throw Error("Callback key " + a2 + " does not exist (was base.js loaded more than once?).");
      }, goog.Dependency.prototype.load = function(a2) {
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
        else if (goog.inHtmlDocument_()) {
          var b2 = goog.global.document;
          if ("complete" == b2.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
            if (/\bdeps.js$/.test(this.path)) {
              a2.loaded();
              return;
            }
            throw Error('Cannot write "' + this.path + '" after document load');
          }
          if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
            var c2 = goog.Dependency.registerCallback_(function(b3) {
              goog.DebugLoader_.IS_OLD_IE_ && "complete" != b3.readyState || (goog.Dependency.unregisterCallback_(c2), a2.loaded());
            }), d2 = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
            d2 = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + `="goog.Dependency.callback_('` + c2 + `', this)" type="text/javascript" ` + (goog.Dependency.defer_ ? "defer" : "") + d2 + "><\/script>";
            b2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d2) : d2);
          } else {
            var e2 = b2.createElement("script");
            e2.defer = goog.Dependency.defer_;
            e2.async = false;
            e2.type = "text/javascript";
            (d2 = goog.getScriptNonce()) && e2.setAttribute("nonce", d2);
            goog.DebugLoader_.IS_OLD_IE_ ? (a2.pause(), e2.onreadystatechange = function() {
              if ("loaded" == e2.readyState || "complete" == e2.readyState)
                a2.loaded(), a2.resume();
            }) : e2.onload = function() {
              e2.onload = null;
              a2.loaded();
            };
            e2.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
            b2.head.appendChild(e2);
          }
        } else
          goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a2.loaded()) : a2.pause();
      }, goog.Es6ModuleDependency = function(a2, b2, c2, d2, e2) {
        goog.Dependency.call(this, a2, b2, c2, d2, e2);
      }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a2) {
        function b2(a3, b3) {
          a3 = b3 ? '<script type="module" crossorigin>' + b3 + "<\/script>" : '<script type="module" crossorigin src="' + a3 + '"><\/script>';
          d2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(a3) : a3);
        }
        function c2(a3, b3) {
          var c3 = d2.createElement("script");
          c3.defer = true;
          c3.async = false;
          c3.type = "module";
          c3.setAttribute("crossorigin", true);
          var e3 = goog.getScriptNonce();
          e3 && c3.setAttribute("nonce", e3);
          b3 ? c3.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(b3) : b3 : c3.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(a3) : a3;
          d2.head.appendChild(c3);
        }
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
        else if (goog.inHtmlDocument_()) {
          var d2 = goog.global.document, e2 = this;
          if (goog.isDocumentLoading_()) {
            var f2 = b2;
            goog.Dependency.defer_ = true;
          } else
            f2 = c2;
          var g = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(g);
            a2.setModuleState(goog.ModuleType.ES6);
          });
          f2(void 0, 'goog.Dependency.callback_("' + g + '")');
          f2(this.path, void 0);
          var h = goog.Dependency.registerCallback_(function(b3) {
            goog.Dependency.unregisterCallback_(h);
            a2.registerEs6ModuleExports(e2.path, b3, goog.moduleLoaderState_.moduleName);
          });
          f2(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
          var k = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(k);
            a2.clearModuleState();
            a2.loaded();
          });
          f2(void 0, 'goog.Dependency.callback_("' + k + '")');
        } else
          goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a2.pause();
      }, goog.TransformedDependency = function(a2, b2, c2, d2, e2) {
        goog.Dependency.call(this, a2, b2, c2, d2, e2);
        this.contents_ = null;
        this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
      }, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a2) {
        function b2() {
          e2.contents_ = goog.loadFileSync_(e2.path);
          e2.contents_ && (e2.contents_ = e2.transform(e2.contents_), e2.contents_ && (e2.contents_ += "\n//# sourceURL=" + e2.path));
        }
        function c2() {
          e2.lazyFetch_ && b2();
          if (e2.contents_) {
            f2 && a2.setModuleState(goog.ModuleType.ES6);
            try {
              var c3 = e2.contents_;
              e2.contents_ = null;
              goog.globalEval(c3);
              if (f2)
                var d3 = goog.moduleLoaderState_.moduleName;
            } finally {
              f2 && a2.clearModuleState();
            }
            f2 && goog.global.$jscomp.require.ensure([e2.getPathName()], function() {
              a2.registerEs6ModuleExports(
                e2.path,
                goog.global.$jscomp.require(e2.getPathName()),
                d3
              );
            });
            a2.loaded();
          }
        }
        function d2() {
          var a3 = goog.global.document, b3 = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(b3);
            c2();
          }), d3 = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + b3 + '");') + "<\/script>";
          a3.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d3) : d3);
        }
        var e2 = this;
        if (goog.global.CLOSURE_IMPORT_SCRIPT)
          b2(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a2.loaded()) : a2.pause();
        else {
          var f2 = this.loadFlags.module == goog.ModuleType.ES6;
          this.lazyFetch_ || b2();
          var g = 1 < a2.pending().length, h = g && goog.DebugLoader_.IS_OLD_IE_;
          g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
          if (h || g)
            a2.defer(function() {
              c2();
            });
          else {
            var k = goog.global.document;
            h = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
            if (f2 && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
              goog.Dependency.defer_ = true;
              a2.pause();
              var l = k.onreadystatechange;
              k.onreadystatechange = function() {
                "interactive" == k.readyState && (k.onreadystatechange = l, c2(), a2.resume());
                goog.isFunction(l) && l.apply(void 0, arguments);
              };
            } else
              !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d2() : c2();
          }
        }
      }, goog.TransformedDependency.prototype.transform = function(a2) {
      }, goog.TranspiledDependency = function(a2, b2, c2, d2, e2, f2) {
        goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
        this.transpiler = f2;
      }, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(a2) {
        return this.transpiler.transpile(a2, this.getPathName());
      }, goog.PreTranspiledEs6ModuleDependency = function(a2, b2, c2, d2, e2) {
        goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
      }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a2) {
        return a2;
      }, goog.GoogModuleDependency = function(a2, b2, c2, d2, e2, f2, g) {
        goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
        this.needsTranspile_ = f2;
        this.transpiler_ = g;
      }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a2) {
        this.needsTranspile_ && (a2 = this.transpiler_.transpile(a2, this.getPathName()));
        return goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON ? "goog.loadModule(" + goog.global.JSON.stringify(a2 + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a2 + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
      }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a2, b2, c2, d2) {
        b2 = b2 || [];
        a2 = a2.replace(/\\/g, "/");
        var e2 = goog.normalizePath_(goog.basePath + a2);
        d2 && "boolean" !== typeof d2 || (d2 = d2 ? { module: goog.ModuleType.GOOG } : {});
        c2 = this.factory_.createDependency(e2, a2, b2, c2, d2, goog.transpiler_.needsTranspile(d2.lang || "es3", d2.module));
        this.dependencies_[e2] = c2;
        for (c2 = 0; c2 < b2.length; c2++)
          this.idToPath_[b2[c2]] = e2;
        this.idToPath_[a2] = e2;
      }, goog.DependencyFactory = function(a2) {
        this.transpiler = a2;
      }, goog.DependencyFactory.prototype.createDependency = function(a2, b2, c2, d2, e2, f2) {
        return e2.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(
          a2,
          b2,
          c2,
          d2,
          e2,
          f2,
          this.transpiler
        ) : f2 ? new goog.TranspiledDependency(a2, b2, c2, d2, e2, this.transpiler) : e2.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Es6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Dependency(a2, b2, c2, d2, e2);
      }, goog.debugLoader_ = new goog.DebugLoader_(), goog.loadClosureDeps = function() {
        goog.debugLoader_.loadClosureDeps();
      }, goog.setDependencyFactory = function(a2) {
        goog.debugLoader_.setDependencyFactory(a2);
      }, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a2, b2) {
        goog.debugLoader_.bootstrap(a2, b2);
      });
      goog.TRUSTED_TYPES_POLICY_NAME = "";
      goog.identity_ = function(a2) {
        return a2;
      };
      goog.createTrustedTypesPolicy = function(a2) {
        var b2 = null, c2 = goog.global.trustedTypes || goog.global.TrustedTypes;
        if (!c2 || !c2.createPolicy)
          return b2;
        try {
          b2 = c2.createPolicy(a2, { createHTML: goog.identity_, createScript: goog.identity_, createScriptURL: goog.identity_, createURL: goog.identity_ });
        } catch (d2) {
          goog.logToConsole_(d2.message);
        }
        return b2;
      };
      goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
      goog.object = {};
      goog.object.is = function(a2, b2) {
        return a2 === b2 ? 0 !== a2 || 1 / a2 === 1 / b2 : a2 !== a2 && b2 !== b2;
      };
      goog.object.forEach = function(a2, b2, c2) {
        for (var d2 in a2)
          b2.call(c2, a2[d2], d2, a2);
      };
      goog.object.filter = function(a2, b2, c2) {
        var d2 = {}, e2;
        for (e2 in a2)
          b2.call(c2, a2[e2], e2, a2) && (d2[e2] = a2[e2]);
        return d2;
      };
      goog.object.map = function(a2, b2, c2) {
        var d2 = {}, e2;
        for (e2 in a2)
          d2[e2] = b2.call(c2, a2[e2], e2, a2);
        return d2;
      };
      goog.object.some = function(a2, b2, c2) {
        for (var d2 in a2)
          if (b2.call(c2, a2[d2], d2, a2))
            return true;
        return false;
      };
      goog.object.every = function(a2, b2, c2) {
        for (var d2 in a2)
          if (!b2.call(c2, a2[d2], d2, a2))
            return false;
        return true;
      };
      goog.object.getCount = function(a2) {
        var b2 = 0, c2;
        for (c2 in a2)
          b2++;
        return b2;
      };
      goog.object.getAnyKey = function(a2) {
        for (var b2 in a2)
          return b2;
      };
      goog.object.getAnyValue = function(a2) {
        for (var b2 in a2)
          return a2[b2];
      };
      goog.object.contains = function(a2, b2) {
        return goog.object.containsValue(a2, b2);
      };
      goog.object.getValues = function(a2) {
        var b2 = [], c2 = 0, d2;
        for (d2 in a2)
          b2[c2++] = a2[d2];
        return b2;
      };
      goog.object.getKeys = function(a2) {
        var b2 = [], c2 = 0, d2;
        for (d2 in a2)
          b2[c2++] = d2;
        return b2;
      };
      goog.object.getValueByKeys = function(a2, b2) {
        var c2 = goog.isArrayLike(b2), d2 = c2 ? b2 : arguments;
        for (c2 = c2 ? 0 : 1; c2 < d2.length; c2++) {
          if (null == a2)
            return;
          a2 = a2[d2[c2]];
        }
        return a2;
      };
      goog.object.containsKey = function(a2, b2) {
        return null !== a2 && b2 in a2;
      };
      goog.object.containsValue = function(a2, b2) {
        for (var c2 in a2)
          if (a2[c2] == b2)
            return true;
        return false;
      };
      goog.object.findKey = function(a2, b2, c2) {
        for (var d2 in a2)
          if (b2.call(c2, a2[d2], d2, a2))
            return d2;
      };
      goog.object.findValue = function(a2, b2, c2) {
        return (b2 = goog.object.findKey(a2, b2, c2)) && a2[b2];
      };
      goog.object.isEmpty = function(a2) {
        for (var b2 in a2)
          return false;
        return true;
      };
      goog.object.clear = function(a2) {
        for (var b2 in a2)
          delete a2[b2];
      };
      goog.object.remove = function(a2, b2) {
        var c2;
        (c2 = b2 in a2) && delete a2[b2];
        return c2;
      };
      goog.object.add = function(a2, b2, c2) {
        if (null !== a2 && b2 in a2)
          throw Error('The object already contains the key "' + b2 + '"');
        goog.object.set(a2, b2, c2);
      };
      goog.object.get = function(a2, b2, c2) {
        return null !== a2 && b2 in a2 ? a2[b2] : c2;
      };
      goog.object.set = function(a2, b2, c2) {
        a2[b2] = c2;
      };
      goog.object.setIfUndefined = function(a2, b2, c2) {
        return b2 in a2 ? a2[b2] : a2[b2] = c2;
      };
      goog.object.setWithReturnValueIfNotSet = function(a2, b2, c2) {
        if (b2 in a2)
          return a2[b2];
        c2 = c2();
        return a2[b2] = c2;
      };
      goog.object.equals = function(a2, b2) {
        for (var c2 in a2)
          if (!(c2 in b2) || a2[c2] !== b2[c2])
            return false;
        for (var d2 in b2)
          if (!(d2 in a2))
            return false;
        return true;
      };
      goog.object.clone = function(a2) {
        var b2 = {}, c2;
        for (c2 in a2)
          b2[c2] = a2[c2];
        return b2;
      };
      goog.object.unsafeClone = function(a2) {
        var b2 = goog.typeOf(a2);
        if ("object" == b2 || "array" == b2) {
          if (goog.isFunction(a2.clone))
            return a2.clone();
          b2 = "array" == b2 ? [] : {};
          for (var c2 in a2)
            b2[c2] = goog.object.unsafeClone(a2[c2]);
          return b2;
        }
        return a2;
      };
      goog.object.transpose = function(a2) {
        var b2 = {}, c2;
        for (c2 in a2)
          b2[a2[c2]] = c2;
        return b2;
      };
      goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
      goog.object.extend = function(a2, b2) {
        for (var c2, d2, e2 = 1; e2 < arguments.length; e2++) {
          d2 = arguments[e2];
          for (c2 in d2)
            a2[c2] = d2[c2];
          for (var f2 = 0; f2 < goog.object.PROTOTYPE_FIELDS_.length; f2++)
            c2 = goog.object.PROTOTYPE_FIELDS_[f2], Object.prototype.hasOwnProperty.call(d2, c2) && (a2[c2] = d2[c2]);
        }
      };
      goog.object.create = function(a2) {
        var b2 = arguments.length;
        if (1 == b2 && Array.isArray(arguments[0]))
          return goog.object.create.apply(null, arguments[0]);
        if (b2 % 2)
          throw Error("Uneven number of arguments");
        for (var c2 = {}, d2 = 0; d2 < b2; d2 += 2)
          c2[arguments[d2]] = arguments[d2 + 1];
        return c2;
      };
      goog.object.createSet = function(a2) {
        var b2 = arguments.length;
        if (1 == b2 && Array.isArray(arguments[0]))
          return goog.object.createSet.apply(null, arguments[0]);
        for (var c2 = {}, d2 = 0; d2 < b2; d2++)
          c2[arguments[d2]] = true;
        return c2;
      };
      goog.object.createImmutableView = function(a2) {
        var b2 = a2;
        Object.isFrozen && !Object.isFrozen(a2) && (b2 = Object.create(a2), Object.freeze(b2));
        return b2;
      };
      goog.object.isImmutableView = function(a2) {
        return !!Object.isFrozen && Object.isFrozen(a2);
      };
      goog.object.getAllPropertyNames = function(a2, b2, c2) {
        if (!a2)
          return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
          return goog.object.getKeys(a2);
        for (var d2 = {}; a2 && (a2 !== Object.prototype || b2) && (a2 !== Function.prototype || c2); ) {
          for (var e2 = Object.getOwnPropertyNames(a2), f2 = 0; f2 < e2.length; f2++)
            d2[e2[f2]] = true;
          a2 = Object.getPrototypeOf(a2);
        }
        return goog.object.getKeys(d2);
      };
      goog.object.getSuperClass = function(a2) {
        return (a2 = Object.getPrototypeOf(a2.prototype)) && a2.constructor;
      };
      var jspb = { asserts: {} };
      jspb.asserts.doAssertFailure = function(a2, b2, c2, d2) {
        var e2 = "Assertion failed";
        if (c2) {
          e2 += ": " + c2;
          var f2 = d2;
        } else
          a2 && (e2 += ": " + a2, f2 = b2);
        throw Error("" + e2, f2 || []);
      };
      jspb.asserts.assert = function(a2, b2, c2) {
        for (var d2 = [], e2 = 2; e2 < arguments.length; ++e2)
          d2[e2 - 2] = arguments[e2];
        a2 || jspb.asserts.doAssertFailure("", null, b2, d2);
        return a2;
      };
      jspb.asserts.assertString = function(a2, b2, c2) {
        for (var d2 = [], e2 = 2; e2 < arguments.length; ++e2)
          d2[e2 - 2] = arguments[e2];
        "string" !== typeof a2 && jspb.asserts.doAssertFailure("Expected string but got %s: %s.", [goog.typeOf(a2), a2], b2, d2);
        return a2;
      };
      jspb.asserts.assertArray = function(a2, b2, c2) {
        for (var d2 = [], e2 = 2; e2 < arguments.length; ++e2)
          d2[e2 - 2] = arguments[e2];
        Array.isArray(a2) || jspb.asserts.doAssertFailure("Expected array but got %s: %s.", [goog.typeOf(a2), a2], b2, d2);
        return a2;
      };
      jspb.asserts.fail = function(a2, b2) {
        for (var c2 = [], d2 = 1; d2 < arguments.length; ++d2)
          c2[d2 - 1] = arguments[d2];
        throw Error("Failure" + (a2 ? ": " + a2 : ""), c2);
      };
      jspb.asserts.assertInstanceof = function(a2, b2, c2, d2) {
        for (var e2 = [], f2 = 3; f2 < arguments.length; ++f2)
          e2[f2 - 3] = arguments[f2];
        a2 instanceof b2 || jspb.asserts.doAssertFailure("Expected instanceof %s but got %s.", [jspb.asserts.getType(b2), jspb.asserts.getType(a2)], c2, e2);
        return a2;
      };
      jspb.asserts.getType = function(a2) {
        return a2 instanceof Function ? a2.displayName || a2.name || "unknown type name" : a2 instanceof Object ? a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2) : null === a2 ? "null" : typeof a2;
      };
      jspb.BinaryConstants = {};
      jspb.ConstBinaryMessage = function() {
      };
      jspb.BinaryMessage = function() {
      };
      jspb.BinaryConstants.FieldType = { INVALID: -1, DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18, FHASH64: 30, VHASH64: 31 };
      jspb.BinaryConstants.WireType = { INVALID: -1, VARINT: 0, FIXED64: 1, DELIMITED: 2, START_GROUP: 3, END_GROUP: 4, FIXED32: 5 };
      jspb.BinaryConstants.FieldTypeToWireType = function(a2) {
        var b2 = jspb.BinaryConstants.FieldType, c2 = jspb.BinaryConstants.WireType;
        switch (a2) {
          case b2.INT32:
          case b2.INT64:
          case b2.UINT32:
          case b2.UINT64:
          case b2.SINT32:
          case b2.SINT64:
          case b2.BOOL:
          case b2.ENUM:
          case b2.VHASH64:
            return c2.VARINT;
          case b2.DOUBLE:
          case b2.FIXED64:
          case b2.SFIXED64:
          case b2.FHASH64:
            return c2.FIXED64;
          case b2.STRING:
          case b2.MESSAGE:
          case b2.BYTES:
            return c2.DELIMITED;
          case b2.FLOAT:
          case b2.FIXED32:
          case b2.SFIXED32:
            return c2.FIXED32;
          default:
            return c2.INVALID;
        }
      };
      jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1;
      jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60;
      jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54;
      jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22;
      jspb.BinaryConstants.FLOAT64_EPS = 5e-324;
      jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324;
      jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292;
      jspb.BinaryConstants.TWO_TO_20 = 1048576;
      jspb.BinaryConstants.TWO_TO_23 = 8388608;
      jspb.BinaryConstants.TWO_TO_31 = 2147483648;
      jspb.BinaryConstants.TWO_TO_32 = 4294967296;
      jspb.BinaryConstants.TWO_TO_52 = 4503599627370496;
      jspb.BinaryConstants.TWO_TO_63 = 9223372036854776e3;
      jspb.BinaryConstants.TWO_TO_64 = 18446744073709552e3;
      jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0";
      goog.debug = {};
      goog.debug.Error = function(a2) {
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, goog.debug.Error);
        else {
          var b2 = Error().stack;
          b2 && (this.stack = b2);
        }
        a2 && (this.message = String(a2));
        this.reportErrorToServer = true;
      };
      goog.inherits(goog.debug.Error, Error);
      goog.debug.Error.prototype.name = "CustomError";
      goog.dom = {};
      goog.dom.NodeType = { ELEMENT: 1, ATTRIBUTE: 2, TEXT: 3, CDATA_SECTION: 4, ENTITY_REFERENCE: 5, ENTITY: 6, PROCESSING_INSTRUCTION: 7, COMMENT: 8, DOCUMENT: 9, DOCUMENT_TYPE: 10, DOCUMENT_FRAGMENT: 11, NOTATION: 12 };
      goog.asserts = {};
      goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
      goog.asserts.AssertionError = function(a2, b2) {
        goog.debug.Error.call(this, goog.asserts.subs_(a2, b2));
        this.messagePattern = a2;
      };
      goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
      goog.asserts.AssertionError.prototype.name = "AssertionError";
      goog.asserts.DEFAULT_ERROR_HANDLER = function(a2) {
        throw a2;
      };
      goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
      goog.asserts.subs_ = function(a2, b2) {
        a2 = a2.split("%s");
        for (var c2 = "", d2 = a2.length - 1, e2 = 0; e2 < d2; e2++)
          c2 += a2[e2] + (e2 < b2.length ? b2[e2] : "%s");
        return c2 + a2[d2];
      };
      goog.asserts.doAssertFailure_ = function(a2, b2, c2, d2) {
        var e2 = "Assertion failed";
        if (c2) {
          e2 += ": " + c2;
          var f2 = d2;
        } else
          a2 && (e2 += ": " + a2, f2 = b2);
        a2 = new goog.asserts.AssertionError("" + e2, f2 || []);
        goog.asserts.errorHandler_(a2);
      };
      goog.asserts.setErrorHandler = function(a2) {
        goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a2);
      };
      goog.asserts.assert = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !a2 && goog.asserts.doAssertFailure_("", null, b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertExists = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && null == a2 && goog.asserts.doAssertFailure_("Expected to exist: %s.", [a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.fail = function(a2, b2) {
        goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a2 ? ": " + a2 : ""), Array.prototype.slice.call(arguments, 1)));
      };
      goog.asserts.assertNumber = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && "number" !== typeof a2 && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertString = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && "string" !== typeof a2 && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertFunction = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a2) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertObject = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !goog.isObject(a2) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertArray = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && !Array.isArray(a2) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertBoolean = function(a2, b2, c2) {
        goog.asserts.ENABLE_ASSERTS && "boolean" !== typeof a2 && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertElement = function(a2, b2, c2) {
        !goog.asserts.ENABLE_ASSERTS || goog.isObject(a2) && a2.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertInstanceof = function(a2, b2, c2, d2) {
        !goog.asserts.ENABLE_ASSERTS || a2 instanceof b2 || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b2), goog.asserts.getType_(a2)], c2, Array.prototype.slice.call(arguments, 3));
        return a2;
      };
      goog.asserts.assertFinite = function(a2, b2, c2) {
        !goog.asserts.ENABLE_ASSERTS || "number" == typeof a2 && isFinite(a2) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a2], b2, Array.prototype.slice.call(arguments, 2));
        return a2;
      };
      goog.asserts.assertObjectPrototypeIsIntact = function() {
        for (var a2 in Object.prototype)
          goog.asserts.fail(a2 + " should not be enumerable in Object.prototype.");
      };
      goog.asserts.getType_ = function(a2) {
        return a2 instanceof Function ? a2.displayName || a2.name || "unknown type name" : a2 instanceof Object ? a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2) : null === a2 ? "null" : typeof a2;
      };
      goog.array = {};
      goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
      goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
      goog.array.peek = function(a2) {
        return a2[a2.length - 1];
      };
      goog.array.last = goog.array.peek;
      goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(a2, b2, c2) {
        goog.asserts.assert(null != a2.length);
        return Array.prototype.indexOf.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        c2 = null == c2 ? 0 : 0 > c2 ? Math.max(0, a2.length + c2) : c2;
        if ("string" === typeof a2)
          return "string" !== typeof b2 || 1 != b2.length ? -1 : a2.indexOf(b2, c2);
        for (; c2 < a2.length; c2++)
          if (c2 in a2 && a2[c2] === b2)
            return c2;
        return -1;
      };
      goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(a2, b2, c2) {
        goog.asserts.assert(null != a2.length);
        return Array.prototype.lastIndexOf.call(a2, b2, null == c2 ? a2.length - 1 : c2);
      } : function(a2, b2, c2) {
        c2 = null == c2 ? a2.length - 1 : c2;
        0 > c2 && (c2 = Math.max(0, a2.length + c2));
        if ("string" === typeof a2)
          return "string" !== typeof b2 || 1 != b2.length ? -1 : a2.lastIndexOf(b2, c2);
        for (; 0 <= c2; c2--)
          if (c2 in a2 && a2[c2] === b2)
            return c2;
        return -1;
      };
      goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(a2, b2, c2) {
        goog.asserts.assert(null != a2.length);
        Array.prototype.forEach.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          f2 in e2 && b2.call(c2, e2[f2], f2, a2);
      };
      goog.array.forEachRight = function(a2, b2, c2) {
        var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2;
        for (--d2; 0 <= d2; --d2)
          d2 in e2 && b2.call(c2, e2[d2], d2, a2);
      };
      goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(a2, b2, c2) {
        goog.asserts.assert(null != a2.length);
        return Array.prototype.filter.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = [], f2 = 0, g = "string" === typeof a2 ? a2.split("") : a2, h = 0; h < d2; h++)
          if (h in g) {
            var k = g[h];
            b2.call(c2, k, h, a2) && (e2[f2++] = k);
          }
        return e2;
      };
      goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(a2, b2, c2) {
        goog.asserts.assert(null != a2.length);
        return Array.prototype.map.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = Array(d2), f2 = "string" === typeof a2 ? a2.split("") : a2, g = 0; g < d2; g++)
          g in f2 && (e2[g] = b2.call(c2, f2[g], g, a2));
        return e2;
      };
      goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(a2, b2, c2, d2) {
        goog.asserts.assert(null != a2.length);
        d2 && (b2 = goog.bind(b2, d2));
        return Array.prototype.reduce.call(a2, b2, c2);
      } : function(a2, b2, c2, d2) {
        var e2 = c2;
        goog.array.forEach(a2, function(c3, g) {
          e2 = b2.call(d2, e2, c3, g, a2);
        });
        return e2;
      };
      goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(a2, b2, c2, d2) {
        goog.asserts.assert(null != a2.length);
        goog.asserts.assert(null != b2);
        d2 && (b2 = goog.bind(b2, d2));
        return Array.prototype.reduceRight.call(a2, b2, c2);
      } : function(a2, b2, c2, d2) {
        var e2 = c2;
        goog.array.forEachRight(a2, function(c3, g) {
          e2 = b2.call(d2, e2, c3, g, a2);
        });
        return e2;
      };
      goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(a2, b2, c2) {
        goog.asserts.assert(null != a2.length);
        return Array.prototype.some.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
            return true;
        return false;
      };
      goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(a2, b2, c2) {
        goog.asserts.assert(null != a2.length);
        return Array.prototype.every.call(a2, b2, c2);
      } : function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          if (f2 in e2 && !b2.call(c2, e2[f2], f2, a2))
            return false;
        return true;
      };
      goog.array.count = function(a2, b2, c2) {
        var d2 = 0;
        goog.array.forEach(a2, function(a3, f2, g) {
          b2.call(c2, a3, f2, g) && ++d2;
        }, c2);
        return d2;
      };
      goog.array.find = function(a2, b2, c2) {
        b2 = goog.array.findIndex(a2, b2, c2);
        return 0 > b2 ? null : "string" === typeof a2 ? a2.charAt(b2) : a2[b2];
      };
      goog.array.findIndex = function(a2, b2, c2) {
        for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
          if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
            return f2;
        return -1;
      };
      goog.array.findRight = function(a2, b2, c2) {
        b2 = goog.array.findIndexRight(a2, b2, c2);
        return 0 > b2 ? null : "string" === typeof a2 ? a2.charAt(b2) : a2[b2];
      };
      goog.array.findIndexRight = function(a2, b2, c2) {
        var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2;
        for (--d2; 0 <= d2; d2--)
          if (d2 in e2 && b2.call(c2, e2[d2], d2, a2))
            return d2;
        return -1;
      };
      goog.array.contains = function(a2, b2) {
        return 0 <= goog.array.indexOf(a2, b2);
      };
      goog.array.isEmpty = function(a2) {
        return 0 == a2.length;
      };
      goog.array.clear = function(a2) {
        if (!Array.isArray(a2))
          for (var b2 = a2.length - 1; 0 <= b2; b2--)
            delete a2[b2];
        a2.length = 0;
      };
      goog.array.insert = function(a2, b2) {
        goog.array.contains(a2, b2) || a2.push(b2);
      };
      goog.array.insertAt = function(a2, b2, c2) {
        goog.array.splice(a2, c2, 0, b2);
      };
      goog.array.insertArrayAt = function(a2, b2, c2) {
        goog.partial(goog.array.splice, a2, c2, 0).apply(null, b2);
      };
      goog.array.insertBefore = function(a2, b2, c2) {
        var d2;
        2 == arguments.length || 0 > (d2 = goog.array.indexOf(a2, c2)) ? a2.push(b2) : goog.array.insertAt(a2, b2, d2);
      };
      goog.array.remove = function(a2, b2) {
        b2 = goog.array.indexOf(a2, b2);
        var c2;
        (c2 = 0 <= b2) && goog.array.removeAt(a2, b2);
        return c2;
      };
      goog.array.removeLast = function(a2, b2) {
        b2 = goog.array.lastIndexOf(a2, b2);
        return 0 <= b2 ? (goog.array.removeAt(a2, b2), true) : false;
      };
      goog.array.removeAt = function(a2, b2) {
        goog.asserts.assert(null != a2.length);
        return 1 == Array.prototype.splice.call(a2, b2, 1).length;
      };
      goog.array.removeIf = function(a2, b2, c2) {
        b2 = goog.array.findIndex(a2, b2, c2);
        return 0 <= b2 ? (goog.array.removeAt(a2, b2), true) : false;
      };
      goog.array.removeAllIf = function(a2, b2, c2) {
        var d2 = 0;
        goog.array.forEachRight(a2, function(e2, f2) {
          b2.call(c2, e2, f2, a2) && goog.array.removeAt(a2, f2) && d2++;
        });
        return d2;
      };
      goog.array.concat = function(a2) {
        return Array.prototype.concat.apply([], arguments);
      };
      goog.array.join = function(a2) {
        return Array.prototype.concat.apply([], arguments);
      };
      goog.array.toArray = function(a2) {
        var b2 = a2.length;
        if (0 < b2) {
          for (var c2 = Array(b2), d2 = 0; d2 < b2; d2++)
            c2[d2] = a2[d2];
          return c2;
        }
        return [];
      };
      goog.array.clone = goog.array.toArray;
      goog.array.extend = function(a2, b2) {
        for (var c2 = 1; c2 < arguments.length; c2++) {
          var d2 = arguments[c2];
          if (goog.isArrayLike(d2)) {
            var e2 = a2.length || 0, f2 = d2.length || 0;
            a2.length = e2 + f2;
            for (var g = 0; g < f2; g++)
              a2[e2 + g] = d2[g];
          } else
            a2.push(d2);
        }
      };
      goog.array.splice = function(a2, b2, c2, d2) {
        goog.asserts.assert(null != a2.length);
        return Array.prototype.splice.apply(a2, goog.array.slice(arguments, 1));
      };
      goog.array.slice = function(a2, b2, c2) {
        goog.asserts.assert(null != a2.length);
        return 2 >= arguments.length ? Array.prototype.slice.call(a2, b2) : Array.prototype.slice.call(a2, b2, c2);
      };
      goog.array.removeDuplicates = function(a2, b2, c2) {
        b2 = b2 || a2;
        var d2 = function(a3) {
          return goog.isObject(a3) ? "o" + goog.getUid(a3) : (typeof a3).charAt(0) + a3;
        };
        c2 = c2 || d2;
        d2 = {};
        for (var e2 = 0, f2 = 0; f2 < a2.length; ) {
          var g = a2[f2++], h = c2(g);
          Object.prototype.hasOwnProperty.call(d2, h) || (d2[h] = true, b2[e2++] = g);
        }
        b2.length = e2;
      };
      goog.array.binarySearch = function(a2, b2, c2) {
        return goog.array.binarySearch_(a2, c2 || goog.array.defaultCompare, false, b2);
      };
      goog.array.binarySelect = function(a2, b2, c2) {
        return goog.array.binarySearch_(a2, b2, true, void 0, c2);
      };
      goog.array.binarySearch_ = function(a2, b2, c2, d2, e2) {
        for (var f2 = 0, g = a2.length, h; f2 < g; ) {
          var k = f2 + (g - f2 >>> 1);
          var l = c2 ? b2.call(e2, a2[k], k, a2) : b2(d2, a2[k]);
          0 < l ? f2 = k + 1 : (g = k, h = !l);
        }
        return h ? f2 : -f2 - 1;
      };
      goog.array.sort = function(a2, b2) {
        a2.sort(b2 || goog.array.defaultCompare);
      };
      goog.array.stableSort = function(a2, b2) {
        for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
          c2[d2] = { index: d2, value: a2[d2] };
        var e2 = b2 || goog.array.defaultCompare;
        goog.array.sort(c2, function(a3, b3) {
          return e2(a3.value, b3.value) || a3.index - b3.index;
        });
        for (d2 = 0; d2 < a2.length; d2++)
          a2[d2] = c2[d2].value;
      };
      goog.array.sortByKey = function(a2, b2, c2) {
        var d2 = c2 || goog.array.defaultCompare;
        goog.array.sort(a2, function(a3, c3) {
          return d2(b2(a3), b2(c3));
        });
      };
      goog.array.sortObjectsByKey = function(a2, b2, c2) {
        goog.array.sortByKey(a2, function(a3) {
          return a3[b2];
        }, c2);
      };
      goog.array.isSorted = function(a2, b2, c2) {
        b2 = b2 || goog.array.defaultCompare;
        for (var d2 = 1; d2 < a2.length; d2++) {
          var e2 = b2(a2[d2 - 1], a2[d2]);
          if (0 < e2 || 0 == e2 && c2)
            return false;
        }
        return true;
      };
      goog.array.equals = function(a2, b2, c2) {
        if (!goog.isArrayLike(a2) || !goog.isArrayLike(b2) || a2.length != b2.length)
          return false;
        var d2 = a2.length;
        c2 = c2 || goog.array.defaultCompareEquality;
        for (var e2 = 0; e2 < d2; e2++)
          if (!c2(a2[e2], b2[e2]))
            return false;
        return true;
      };
      goog.array.compare3 = function(a2, b2, c2) {
        c2 = c2 || goog.array.defaultCompare;
        for (var d2 = Math.min(a2.length, b2.length), e2 = 0; e2 < d2; e2++) {
          var f2 = c2(a2[e2], b2[e2]);
          if (0 != f2)
            return f2;
        }
        return goog.array.defaultCompare(a2.length, b2.length);
      };
      goog.array.defaultCompare = function(a2, b2) {
        return a2 > b2 ? 1 : a2 < b2 ? -1 : 0;
      };
      goog.array.inverseDefaultCompare = function(a2, b2) {
        return -goog.array.defaultCompare(a2, b2);
      };
      goog.array.defaultCompareEquality = function(a2, b2) {
        return a2 === b2;
      };
      goog.array.binaryInsert = function(a2, b2, c2) {
        c2 = goog.array.binarySearch(a2, b2, c2);
        return 0 > c2 ? (goog.array.insertAt(a2, b2, -(c2 + 1)), true) : false;
      };
      goog.array.binaryRemove = function(a2, b2, c2) {
        b2 = goog.array.binarySearch(a2, b2, c2);
        return 0 <= b2 ? goog.array.removeAt(a2, b2) : false;
      };
      goog.array.bucket = function(a2, b2, c2) {
        for (var d2 = {}, e2 = 0; e2 < a2.length; e2++) {
          var f2 = a2[e2], g = b2.call(c2, f2, e2, a2);
          void 0 !== g && (d2[g] || (d2[g] = [])).push(f2);
        }
        return d2;
      };
      goog.array.toObject = function(a2, b2, c2) {
        var d2 = {};
        goog.array.forEach(a2, function(e2, f2) {
          d2[b2.call(c2, e2, f2, a2)] = e2;
        });
        return d2;
      };
      goog.array.range = function(a2, b2, c2) {
        var d2 = [], e2 = 0, f2 = a2;
        c2 = c2 || 1;
        void 0 !== b2 && (e2 = a2, f2 = b2);
        if (0 > c2 * (f2 - e2))
          return [];
        if (0 < c2)
          for (a2 = e2; a2 < f2; a2 += c2)
            d2.push(a2);
        else
          for (a2 = e2; a2 > f2; a2 += c2)
            d2.push(a2);
        return d2;
      };
      goog.array.repeat = function(a2, b2) {
        for (var c2 = [], d2 = 0; d2 < b2; d2++)
          c2[d2] = a2;
        return c2;
      };
      goog.array.flatten = function(a2) {
        for (var b2 = [], c2 = 0; c2 < arguments.length; c2++) {
          var d2 = arguments[c2];
          if (Array.isArray(d2))
            for (var e2 = 0; e2 < d2.length; e2 += 8192) {
              var f2 = goog.array.slice(d2, e2, e2 + 8192);
              f2 = goog.array.flatten.apply(null, f2);
              for (var g = 0; g < f2.length; g++)
                b2.push(f2[g]);
            }
          else
            b2.push(d2);
        }
        return b2;
      };
      goog.array.rotate = function(a2, b2) {
        goog.asserts.assert(null != a2.length);
        a2.length && (b2 %= a2.length, 0 < b2 ? Array.prototype.unshift.apply(a2, a2.splice(-b2, b2)) : 0 > b2 && Array.prototype.push.apply(a2, a2.splice(0, -b2)));
        return a2;
      };
      goog.array.moveItem = function(a2, b2, c2) {
        goog.asserts.assert(0 <= b2 && b2 < a2.length);
        goog.asserts.assert(0 <= c2 && c2 < a2.length);
        b2 = Array.prototype.splice.call(a2, b2, 1);
        Array.prototype.splice.call(a2, c2, 0, b2[0]);
      };
      goog.array.zip = function(a2) {
        if (!arguments.length)
          return [];
        for (var b2 = [], c2 = arguments[0].length, d2 = 1; d2 < arguments.length; d2++)
          arguments[d2].length < c2 && (c2 = arguments[d2].length);
        for (d2 = 0; d2 < c2; d2++) {
          for (var e2 = [], f2 = 0; f2 < arguments.length; f2++)
            e2.push(arguments[f2][d2]);
          b2.push(e2);
        }
        return b2;
      };
      goog.array.shuffle = function(a2, b2) {
        b2 = b2 || Math.random;
        for (var c2 = a2.length - 1; 0 < c2; c2--) {
          var d2 = Math.floor(b2() * (c2 + 1)), e2 = a2[c2];
          a2[c2] = a2[d2];
          a2[d2] = e2;
        }
      };
      goog.array.copyByIndex = function(a2, b2) {
        var c2 = [];
        goog.array.forEach(b2, function(b3) {
          c2.push(a2[b3]);
        });
        return c2;
      };
      goog.array.concatMap = function(a2, b2, c2) {
        return goog.array.concat.apply([], goog.array.map(a2, b2, c2));
      };
      goog.crypt = {};
      goog.crypt.stringToByteArray = function(a2) {
        for (var b2 = [], c2 = 0, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charCodeAt(d2);
          255 < e2 && (b2[c2++] = e2 & 255, e2 >>= 8);
          b2[c2++] = e2;
        }
        return b2;
      };
      goog.crypt.byteArrayToString = function(a2) {
        if (8192 >= a2.length)
          return String.fromCharCode.apply(null, a2);
        for (var b2 = "", c2 = 0; c2 < a2.length; c2 += 8192) {
          var d2 = goog.array.slice(a2, c2, c2 + 8192);
          b2 += String.fromCharCode.apply(null, d2);
        }
        return b2;
      };
      goog.crypt.byteArrayToHex = function(a2, b2) {
        return goog.array.map(a2, function(a3) {
          a3 = a3.toString(16);
          return 1 < a3.length ? a3 : "0" + a3;
        }).join(b2 || "");
      };
      goog.crypt.hexToByteArray = function(a2) {
        goog.asserts.assert(0 == a2.length % 2, "Key string length must be multiple of 2");
        for (var b2 = [], c2 = 0; c2 < a2.length; c2 += 2)
          b2.push(parseInt(a2.substring(c2, c2 + 2), 16));
        return b2;
      };
      goog.crypt.stringToUtf8ByteArray = function(a2) {
        for (var b2 = [], c2 = 0, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charCodeAt(d2);
          128 > e2 ? b2[c2++] = e2 : (2048 > e2 ? b2[c2++] = e2 >> 6 | 192 : (55296 == (e2 & 64512) && d2 + 1 < a2.length && 56320 == (a2.charCodeAt(d2 + 1) & 64512) ? (e2 = 65536 + ((e2 & 1023) << 10) + (a2.charCodeAt(++d2) & 1023), b2[c2++] = e2 >> 18 | 240, b2[c2++] = e2 >> 12 & 63 | 128) : b2[c2++] = e2 >> 12 | 224, b2[c2++] = e2 >> 6 & 63 | 128), b2[c2++] = e2 & 63 | 128);
        }
        return b2;
      };
      goog.crypt.utf8ByteArrayToString = function(a2) {
        for (var b2 = [], c2 = 0, d2 = 0; c2 < a2.length; ) {
          var e2 = a2[c2++];
          if (128 > e2)
            b2[d2++] = String.fromCharCode(e2);
          else if (191 < e2 && 224 > e2) {
            var f2 = a2[c2++];
            b2[d2++] = String.fromCharCode((e2 & 31) << 6 | f2 & 63);
          } else if (239 < e2 && 365 > e2) {
            f2 = a2[c2++];
            var g = a2[c2++], h = a2[c2++];
            e2 = ((e2 & 7) << 18 | (f2 & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
            b2[d2++] = String.fromCharCode(55296 + (e2 >> 10));
            b2[d2++] = String.fromCharCode(56320 + (e2 & 1023));
          } else
            f2 = a2[c2++], g = a2[c2++], b2[d2++] = String.fromCharCode((e2 & 15) << 12 | (f2 & 63) << 6 | g & 63);
        }
        return b2.join("");
      };
      goog.crypt.xorByteArray = function(a2, b2) {
        goog.asserts.assert(a2.length == b2.length, "XOR array lengths must match");
        for (var c2 = [], d2 = 0; d2 < a2.length; d2++)
          c2.push(a2[d2] ^ b2[d2]);
        return c2;
      };
      goog.dom.asserts = {};
      goog.dom.asserts.assertIsLocation = function(a2) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var b2 = goog.dom.asserts.getWindow_(a2);
          b2 && (!a2 || !(a2 instanceof b2.Location) && a2 instanceof b2.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a2));
        }
        return a2;
      };
      goog.dom.asserts.assertIsElementType_ = function(a2, b2) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var c2 = goog.dom.asserts.getWindow_(a2);
          c2 && "undefined" != typeof c2[b2] && (a2 && (a2 instanceof c2[b2] || !(a2 instanceof c2.Location || a2 instanceof c2.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b2, goog.dom.asserts.debugStringForType_(a2)));
        }
        return a2;
      };
      goog.dom.asserts.assertIsHTMLAnchorElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLAnchorElement");
      };
      goog.dom.asserts.assertIsHTMLButtonElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLButtonElement");
      };
      goog.dom.asserts.assertIsHTMLLinkElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLLinkElement");
      };
      goog.dom.asserts.assertIsHTMLImageElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLImageElement");
      };
      goog.dom.asserts.assertIsHTMLAudioElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLAudioElement");
      };
      goog.dom.asserts.assertIsHTMLVideoElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLVideoElement");
      };
      goog.dom.asserts.assertIsHTMLInputElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLInputElement");
      };
      goog.dom.asserts.assertIsHTMLTextAreaElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLTextAreaElement");
      };
      goog.dom.asserts.assertIsHTMLCanvasElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLCanvasElement");
      };
      goog.dom.asserts.assertIsHTMLEmbedElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLEmbedElement");
      };
      goog.dom.asserts.assertIsHTMLFormElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLFormElement");
      };
      goog.dom.asserts.assertIsHTMLFrameElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLFrameElement");
      };
      goog.dom.asserts.assertIsHTMLIFrameElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLIFrameElement");
      };
      goog.dom.asserts.assertIsHTMLObjectElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLObjectElement");
      };
      goog.dom.asserts.assertIsHTMLScriptElement = function(a2) {
        return goog.dom.asserts.assertIsElementType_(a2, "HTMLScriptElement");
      };
      goog.dom.asserts.debugStringForType_ = function(a2) {
        if (goog.isObject(a2))
          try {
            return a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2);
          } catch (b2) {
            return "<object could not be stringified>";
          }
        else
          return void 0 === a2 ? "undefined" : null === a2 ? "null" : typeof a2;
      };
      goog.dom.asserts.getWindow_ = function(a2) {
        try {
          var b2 = a2 && a2.ownerDocument, c2 = b2 && (b2.defaultView || b2.parentWindow);
          c2 = c2 || goog.global;
          if (c2.Element && c2.Location)
            return c2;
        } catch (d2) {
        }
        return null;
      };
      goog.functions = {};
      goog.functions.constant = function(a2) {
        return function() {
          return a2;
        };
      };
      goog.functions.FALSE = function() {
        return false;
      };
      goog.functions.TRUE = function() {
        return true;
      };
      goog.functions.NULL = function() {
        return null;
      };
      goog.functions.identity = function(a2, b2) {
        return a2;
      };
      goog.functions.error = function(a2) {
        return function() {
          throw Error(a2);
        };
      };
      goog.functions.fail = function(a2) {
        return function() {
          throw a2;
        };
      };
      goog.functions.lock = function(a2, b2) {
        b2 = b2 || 0;
        return function() {
          return a2.apply(this, Array.prototype.slice.call(arguments, 0, b2));
        };
      };
      goog.functions.nth = function(a2) {
        return function() {
          return arguments[a2];
        };
      };
      goog.functions.partialRight = function(a2, b2) {
        var c2 = Array.prototype.slice.call(arguments, 1);
        return function() {
          var b3 = Array.prototype.slice.call(arguments);
          b3.push.apply(b3, c2);
          return a2.apply(this, b3);
        };
      };
      goog.functions.withReturnValue = function(a2, b2) {
        return goog.functions.sequence(a2, goog.functions.constant(b2));
      };
      goog.functions.equalTo = function(a2, b2) {
        return function(c2) {
          return b2 ? a2 == c2 : a2 === c2;
        };
      };
      goog.functions.compose = function(a2, b2) {
        var c2 = arguments, d2 = c2.length;
        return function() {
          var a3;
          d2 && (a3 = c2[d2 - 1].apply(this, arguments));
          for (var b3 = d2 - 2; 0 <= b3; b3--)
            a3 = c2[b3].call(this, a3);
          return a3;
        };
      };
      goog.functions.sequence = function(a2) {
        var b2 = arguments, c2 = b2.length;
        return function() {
          for (var a3, e2 = 0; e2 < c2; e2++)
            a3 = b2[e2].apply(this, arguments);
          return a3;
        };
      };
      goog.functions.and = function(a2) {
        var b2 = arguments, c2 = b2.length;
        return function() {
          for (var a3 = 0; a3 < c2; a3++)
            if (!b2[a3].apply(this, arguments))
              return false;
          return true;
        };
      };
      goog.functions.or = function(a2) {
        var b2 = arguments, c2 = b2.length;
        return function() {
          for (var a3 = 0; a3 < c2; a3++)
            if (b2[a3].apply(this, arguments))
              return true;
          return false;
        };
      };
      goog.functions.not = function(a2) {
        return function() {
          return !a2.apply(this, arguments);
        };
      };
      goog.functions.create = function(a2, b2) {
        var c2 = function() {
        };
        c2.prototype = a2.prototype;
        c2 = new c2();
        a2.apply(c2, Array.prototype.slice.call(arguments, 1));
        return c2;
      };
      goog.functions.CACHE_RETURN_VALUE = true;
      goog.functions.cacheReturnValue = function(a2) {
        var b2 = false, c2;
        return function() {
          if (!goog.functions.CACHE_RETURN_VALUE)
            return a2();
          b2 || (c2 = a2(), b2 = true);
          return c2;
        };
      };
      goog.functions.once = function(a2) {
        var b2 = a2;
        return function() {
          if (b2) {
            var a3 = b2;
            b2 = null;
            a3();
          }
        };
      };
      goog.functions.debounce = function(a2, b2, c2) {
        var d2 = 0;
        return function(e2) {
          goog.global.clearTimeout(d2);
          var f2 = arguments;
          d2 = goog.global.setTimeout(function() {
            a2.apply(c2, f2);
          }, b2);
        };
      };
      goog.functions.throttle = function(a2, b2, c2) {
        var d2 = 0, e2 = false, f2 = [], g = function() {
          d2 = 0;
          e2 && (e2 = false, h());
        }, h = function() {
          d2 = goog.global.setTimeout(g, b2);
          a2.apply(c2, f2);
        };
        return function(a3) {
          f2 = arguments;
          d2 ? e2 = true : h();
        };
      };
      goog.functions.rateLimit = function(a2, b2, c2) {
        var d2 = 0, e2 = function() {
          d2 = 0;
        };
        return function(f2) {
          d2 || (d2 = goog.global.setTimeout(e2, b2), a2.apply(c2, arguments));
        };
      };
      goog.dom.HtmlElement = function() {
      };
      goog.dom.TagName = function(a2) {
        this.tagName_ = a2;
      };
      goog.dom.TagName.prototype.toString = function() {
        return this.tagName_;
      };
      goog.dom.TagName.A = new goog.dom.TagName("A");
      goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
      goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
      goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
      goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
      goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
      goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
      goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
      goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
      goog.dom.TagName.B = new goog.dom.TagName("B");
      goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
      goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
      goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
      goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
      goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
      goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
      goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
      goog.dom.TagName.BR = new goog.dom.TagName("BR");
      goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
      goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
      goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
      goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
      goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
      goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
      goog.dom.TagName.COL = new goog.dom.TagName("COL");
      goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
      goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
      goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
      goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
      goog.dom.TagName.DD = new goog.dom.TagName("DD");
      goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
      goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
      goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
      goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
      goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
      goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
      goog.dom.TagName.DL = new goog.dom.TagName("DL");
      goog.dom.TagName.DT = new goog.dom.TagName("DT");
      goog.dom.TagName.EM = new goog.dom.TagName("EM");
      goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
      goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
      goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
      goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
      goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
      goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
      goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
      goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
      goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
      goog.dom.TagName.H1 = new goog.dom.TagName("H1");
      goog.dom.TagName.H2 = new goog.dom.TagName("H2");
      goog.dom.TagName.H3 = new goog.dom.TagName("H3");
      goog.dom.TagName.H4 = new goog.dom.TagName("H4");
      goog.dom.TagName.H5 = new goog.dom.TagName("H5");
      goog.dom.TagName.H6 = new goog.dom.TagName("H6");
      goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
      goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
      goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
      goog.dom.TagName.HR = new goog.dom.TagName("HR");
      goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
      goog.dom.TagName.I = new goog.dom.TagName("I");
      goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
      goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
      goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
      goog.dom.TagName.INS = new goog.dom.TagName("INS");
      goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
      goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
      goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
      goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
      goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
      goog.dom.TagName.LI = new goog.dom.TagName("LI");
      goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
      goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN");
      goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
      goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
      goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
      goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
      goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM");
      goog.dom.TagName.META = new goog.dom.TagName("META");
      goog.dom.TagName.METER = new goog.dom.TagName("METER");
      goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
      goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
      goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
      goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
      goog.dom.TagName.OL = new goog.dom.TagName("OL");
      goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
      goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
      goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
      goog.dom.TagName.P = new goog.dom.TagName("P");
      goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
      goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE");
      goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
      goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
      goog.dom.TagName.Q = new goog.dom.TagName("Q");
      goog.dom.TagName.RP = new goog.dom.TagName("RP");
      goog.dom.TagName.RT = new goog.dom.TagName("RT");
      goog.dom.TagName.RTC = new goog.dom.TagName("RTC");
      goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
      goog.dom.TagName.S = new goog.dom.TagName("S");
      goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
      goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
      goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
      goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
      goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
      goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
      goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
      goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
      goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
      goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
      goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
      goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
      goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
      goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
      goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
      goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
      goog.dom.TagName.TD = new goog.dom.TagName("TD");
      goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
      goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
      goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
      goog.dom.TagName.TH = new goog.dom.TagName("TH");
      goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
      goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
      goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
      goog.dom.TagName.TR = new goog.dom.TagName("TR");
      goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
      goog.dom.TagName.TT = new goog.dom.TagName("TT");
      goog.dom.TagName.U = new goog.dom.TagName("U");
      goog.dom.TagName.UL = new goog.dom.TagName("UL");
      goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
      goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
      goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
      goog.dom.tags = {};
      goog.dom.tags.VOID_TAGS_ = { area: true, base: true, br: true, col: true, command: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
      goog.dom.tags.isVoidTag = function(a2) {
        return true === goog.dom.tags.VOID_TAGS_[a2];
      };
      goog.html = {};
      goog.html.trustedtypes = {};
      goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null;
      goog.string = {};
      goog.string.TypedString = function() {
      };
      goog.string.Const = function(a2, b2) {
        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a2 === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
        this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
      };
      goog.string.Const.prototype.implementsGoogStringTypedString = true;
      goog.string.Const.prototype.getTypedStringValue = function() {
        return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
      };
      goog.DEBUG && (goog.string.Const.prototype.toString = function() {
        return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
      });
      goog.string.Const.unwrap = function(a2) {
        if (a2 instanceof goog.string.Const && a2.constructor === goog.string.Const && a2.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_)
          return a2.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
        goog.asserts.fail("expected object of type Const, got '" + a2 + "'");
        return "type_error:Const";
      };
      goog.string.Const.from = function(a2) {
        return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a2);
      };
      goog.string.Const.TYPE_MARKER_ = {};
      goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
      goog.string.Const.EMPTY = goog.string.Const.from("");
      goog.html.SafeScript = function() {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
        this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeScript.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeScript.fromConstant = function(a2) {
        a2 = goog.string.Const.unwrap(a2);
        return 0 === a2.length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeScript.fromConstantAndArgs = function(a2, b2) {
        for (var c2 = [], d2 = 1; d2 < arguments.length; d2++)
          c2.push(goog.html.SafeScript.stringify_(arguments[d2]));
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(a2) + ")(" + c2.join(", ") + ");");
      };
      goog.html.SafeScript.fromJson = function(a2) {
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a2));
      };
      goog.html.SafeScript.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
      };
      goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
        return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
      });
      goog.html.SafeScript.unwrap = function(a2) {
        return goog.html.SafeScript.unwrapTrustedScript(a2).toString();
      };
      goog.html.SafeScript.unwrapTrustedScript = function(a2) {
        if (a2 instanceof goog.html.SafeScript && a2.constructor === goog.html.SafeScript && a2.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeScriptWrappedValue_;
        goog.asserts.fail("expected object of type SafeScript, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeScript";
      };
      goog.html.SafeScript.stringify_ = function(a2) {
        return JSON.stringify(a2).replace(/</g, "\\x3c");
      };
      goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(a2) {
        return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(a2);
      };
      goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a2) : a2;
        return this;
      };
      goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
      goog.fs = {};
      goog.fs.url = {};
      goog.fs.url.createObjectUrl = function(a2) {
        return goog.fs.url.getUrlObject_().createObjectURL(a2);
      };
      goog.fs.url.revokeObjectUrl = function(a2) {
        goog.fs.url.getUrlObject_().revokeObjectURL(a2);
      };
      goog.fs.url.UrlObject_ = function() {
      };
      goog.fs.url.UrlObject_.prototype.createObjectURL = function(a2) {
      };
      goog.fs.url.UrlObject_.prototype.revokeObjectURL = function(a2) {
      };
      goog.fs.url.getUrlObject_ = function() {
        var a2 = goog.fs.url.findUrlObject_();
        if (null != a2)
          return a2;
        throw Error("This browser doesn't seem to support blob URLs");
      };
      goog.fs.url.findUrlObject_ = function() {
        return void 0 !== goog.global.URL && void 0 !== goog.global.URL.createObjectURL ? goog.global.URL : void 0 !== goog.global.webkitURL && void 0 !== goog.global.webkitURL.createObjectURL ? goog.global.webkitURL : void 0 !== goog.global.createObjectURL ? goog.global : null;
      };
      goog.fs.url.browserSupportsObjectUrls = function() {
        return null != goog.fs.url.findUrlObject_();
      };
      goog.fs.blob = {};
      goog.fs.blob.getBlob = function(a2) {
        var b2 = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
        if (void 0 !== b2) {
          b2 = new b2();
          for (var c2 = 0; c2 < arguments.length; c2++)
            b2.append(arguments[c2]);
          return b2.getBlob();
        }
        return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments));
      };
      goog.fs.blob.getBlobWithProperties = function(a2, b2, c2) {
        var d2 = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
        if (void 0 !== d2) {
          d2 = new d2();
          for (var e2 = 0; e2 < a2.length; e2++)
            d2.append(a2[e2], c2);
          return d2.getBlob(b2);
        }
        if (void 0 !== goog.global.Blob)
          return d2 = {}, b2 && (d2.type = b2), c2 && (d2.endings = c2), new Blob(a2, d2);
        throw Error("This browser doesn't seem to support creating Blobs");
      };
      goog.i18n = {};
      goog.i18n.bidi = {};
      goog.i18n.bidi.FORCE_RTL = false;
      goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(
        3,
        7
      ).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase());
      goog.i18n.bidi.Format = { LRE: "\u202A", RLE: "\u202B", PDF: "\u202C", LRM: "\u200E", RLM: "\u200F" };
      goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 };
      goog.i18n.bidi.RIGHT = "right";
      goog.i18n.bidi.LEFT = "left";
      goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
      goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
      goog.i18n.bidi.toDir = function(a2, b2) {
        return "number" == typeof a2 ? 0 < a2 ? goog.i18n.bidi.Dir.LTR : 0 > a2 ? goog.i18n.bidi.Dir.RTL : b2 ? null : goog.i18n.bidi.Dir.NEUTRAL : null == a2 ? null : a2 ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
      };
      goog.i18n.bidi.ltrChars_ = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0900-\u1FFF\u200E\u2C00-\uD801\uD804-\uD839\uD83C-\uDBFF\uF900-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
      goog.i18n.bidi.rtlChars_ = "\u0591-\u06EF\u06FA-\u08FF\u200F\uD802-\uD803\uD83A-\uD83B\uFB1D-\uFDFF\uFE70-\uFEFC";
      goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
      goog.i18n.bidi.stripHtmlIfNeeded_ = function(a2, b2) {
        return b2 ? a2.replace(goog.i18n.bidi.htmlSkipReg_, "") : a2;
      };
      goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.hasAnyRtl = function(a2, b2) {
        return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
      goog.i18n.bidi.hasAnyLtr = function(a2, b2) {
        return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.isRtlChar = function(a2) {
        return goog.i18n.bidi.rtlRe_.test(a2);
      };
      goog.i18n.bidi.isLtrChar = function(a2) {
        return goog.i18n.bidi.ltrRe_.test(a2);
      };
      goog.i18n.bidi.isNeutralChar = function(a2) {
        return !goog.i18n.bidi.isLtrChar(a2) && !goog.i18n.bidi.isRtlChar(a2);
      };
      goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
      goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
      goog.i18n.bidi.startsWithRtl = function(a2, b2) {
        return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
      goog.i18n.bidi.startsWithLtr = function(a2, b2) {
        return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
      goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
      goog.i18n.bidi.isNeutralText = function(a2, b2) {
        a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2);
        return goog.i18n.bidi.isRequiredLtrRe_.test(a2) || !goog.i18n.bidi.hasAnyLtr(a2) && !goog.i18n.bidi.hasAnyRtl(a2);
      };
      goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
      goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
      goog.i18n.bidi.endsWithLtr = function(a2, b2) {
        return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
      goog.i18n.bidi.endsWithRtl = function(a2, b2) {
        return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
      };
      goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
      goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
      goog.i18n.bidi.isRtlLanguage = function(a2) {
        return goog.i18n.bidi.rtlLocalesRe_.test(a2);
      };
      goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
      goog.i18n.bidi.guardBracketInText = function(a2, b2) {
        b2 = (void 0 === b2 ? goog.i18n.bidi.hasAnyRtl(a2) : b2) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
        return a2.replace(goog.i18n.bidi.bracketGuardTextRe_, b2 + "$&" + b2);
      };
      goog.i18n.bidi.enforceRtlInHtml = function(a2) {
        return "<" == a2.charAt(0) ? a2.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a2 + "</span>";
      };
      goog.i18n.bidi.enforceRtlInText = function(a2) {
        return goog.i18n.bidi.Format.RLE + a2 + goog.i18n.bidi.Format.PDF;
      };
      goog.i18n.bidi.enforceLtrInHtml = function(a2) {
        return "<" == a2.charAt(0) ? a2.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a2 + "</span>";
      };
      goog.i18n.bidi.enforceLtrInText = function(a2) {
        return goog.i18n.bidi.Format.LRE + a2 + goog.i18n.bidi.Format.PDF;
      };
      goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
      goog.i18n.bidi.leftRe_ = /left/gi;
      goog.i18n.bidi.rightRe_ = /right/gi;
      goog.i18n.bidi.tempRe_ = /%%%%/g;
      goog.i18n.bidi.mirrorCSS = function(a2) {
        return a2.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
      };
      goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
      goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
      goog.i18n.bidi.normalizeHebrewQuote = function(a2) {
        return a2.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05F4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05F3");
      };
      goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
      goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
      goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
      goog.i18n.bidi.estimateDirection = function(a2, b2) {
        var c2 = 0, d2 = 0, e2 = false;
        a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2).split(goog.i18n.bidi.wordSeparatorRe_);
        for (b2 = 0; b2 < a2.length; b2++) {
          var f2 = a2[b2];
          goog.i18n.bidi.startsWithRtl(f2) ? (c2++, d2++) : goog.i18n.bidi.isRequiredLtrRe_.test(f2) ? e2 = true : goog.i18n.bidi.hasAnyLtr(f2) ? d2++ : goog.i18n.bidi.hasNumeralsRe_.test(f2) && (e2 = true);
        }
        return 0 == d2 ? e2 ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c2 / d2 > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
      };
      goog.i18n.bidi.detectRtlDirectionality = function(a2, b2) {
        return goog.i18n.bidi.estimateDirection(a2, b2) == goog.i18n.bidi.Dir.RTL;
      };
      goog.i18n.bidi.setElementDirAndAlign = function(a2, b2) {
        a2 && (b2 = goog.i18n.bidi.toDir(b2)) && (a2.style.textAlign = b2 == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a2.dir = b2 == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
      };
      goog.i18n.bidi.setElementDirByTextDirectionality = function(a2, b2) {
        switch (goog.i18n.bidi.estimateDirection(b2)) {
          case goog.i18n.bidi.Dir.LTR:
            a2.dir = "ltr";
            break;
          case goog.i18n.bidi.Dir.RTL:
            a2.dir = "rtl";
            break;
          default:
            a2.removeAttribute("dir");
        }
      };
      goog.i18n.bidi.DirectionalString = function() {
      };
      goog.html.TrustedResourceUrl = function(a2, b2) {
        this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = a2 === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
        this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
      goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
      };
      goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.TrustedResourceUrl.prototype.getDirection = function() {
        return goog.i18n.bidi.Dir.LTR;
      };
      goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(a2, b2) {
        var c2 = goog.html.TrustedResourceUrl.unwrap(this);
        c2 = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c2);
        var d2 = c2[3] || "";
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c2[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c2[2] || "", a2) + goog.html.TrustedResourceUrl.stringifyParams_("#", d2, b2));
      };
      goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
      });
      goog.html.TrustedResourceUrl.unwrap = function(a2) {
        return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a2).toString();
      };
      goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(a2) {
        if (a2 instanceof goog.html.TrustedResourceUrl && a2.constructor === goog.html.TrustedResourceUrl && a2.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
        goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:TrustedResourceUrl";
      };
      goog.html.TrustedResourceUrl.format = function(a2, b2) {
        var c2 = goog.string.Const.unwrap(a2);
        if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c2))
          throw Error("Invalid TrustedResourceUrl format: " + c2);
        a2 = c2.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(a3, e2) {
          if (!Object.prototype.hasOwnProperty.call(b2, e2))
            throw Error('Found marker, "' + e2 + '", in format string, "' + c2 + '", but no valid label mapping found in args: ' + JSON.stringify(b2));
          a3 = b2[e2];
          return a3 instanceof goog.string.Const ? goog.string.Const.unwrap(a3) : encodeURIComponent(String(a3));
        });
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
      goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
      goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
      goog.html.TrustedResourceUrl.formatWithParams = function(a2, b2, c2, d2) {
        return goog.html.TrustedResourceUrl.format(a2, b2).cloneWithParams(c2, d2);
      };
      goog.html.TrustedResourceUrl.fromConstant = function(a2) {
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
      };
      goog.html.TrustedResourceUrl.fromConstants = function(a2) {
        for (var b2 = "", c2 = 0; c2 < a2.length; c2++)
          b2 += goog.string.Const.unwrap(a2[c2]);
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.TrustedResourceUrl.fromSafeScript = function(a2) {
        a2 = goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(a2)], "text/javascript");
        a2 = goog.fs.url.createObjectUrl(a2);
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
        a2 = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a2) : a2;
        return new goog.html.TrustedResourceUrl(goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_, a2);
      };
      goog.html.TrustedResourceUrl.stringifyParams_ = function(a2, b2, c2) {
        if (null == c2)
          return b2;
        if ("string" === typeof c2)
          return c2 ? a2 + encodeURIComponent(c2) : "";
        for (var d2 in c2) {
          var e2 = c2[d2];
          e2 = Array.isArray(e2) ? e2 : [e2];
          for (var f2 = 0; f2 < e2.length; f2++) {
            var g = e2[f2];
            null != g && (b2 || (b2 = a2), b2 += (b2.length > a2.length ? "&" : "") + encodeURIComponent(d2) + "=" + encodeURIComponent(String(g)));
          }
        }
        return b2;
      };
      goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
      goog.string.internal = {};
      goog.string.internal.startsWith = function(a2, b2) {
        return 0 == a2.lastIndexOf(b2, 0);
      };
      goog.string.internal.endsWith = function(a2, b2) {
        var c2 = a2.length - b2.length;
        return 0 <= c2 && a2.indexOf(b2, c2) == c2;
      };
      goog.string.internal.caseInsensitiveStartsWith = function(a2, b2) {
        return 0 == goog.string.internal.caseInsensitiveCompare(b2, a2.substr(0, b2.length));
      };
      goog.string.internal.caseInsensitiveEndsWith = function(a2, b2) {
        return 0 == goog.string.internal.caseInsensitiveCompare(b2, a2.substr(a2.length - b2.length, b2.length));
      };
      goog.string.internal.caseInsensitiveEquals = function(a2, b2) {
        return a2.toLowerCase() == b2.toLowerCase();
      };
      goog.string.internal.isEmptyOrWhitespace = function(a2) {
        return /^[\s\xa0]*$/.test(a2);
      };
      goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a2) {
        return a2.trim();
      } : function(a2) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a2)[1];
      };
      goog.string.internal.caseInsensitiveCompare = function(a2, b2) {
        a2 = String(a2).toLowerCase();
        b2 = String(b2).toLowerCase();
        return a2 < b2 ? -1 : a2 == b2 ? 0 : 1;
      };
      goog.string.internal.newLineToBr = function(a2, b2) {
        return a2.replace(/(\r\n|\r|\n)/g, b2 ? "<br />" : "<br>");
      };
      goog.string.internal.htmlEscape = function(a2, b2) {
        if (b2)
          a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
        else {
          if (!goog.string.internal.ALL_RE_.test(a2))
            return a2;
          -1 != a2.indexOf("&") && (a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;"));
          -1 != a2.indexOf("<") && (a2 = a2.replace(
            goog.string.internal.LT_RE_,
            "&lt;"
          ));
          -1 != a2.indexOf(">") && (a2 = a2.replace(goog.string.internal.GT_RE_, "&gt;"));
          -1 != a2.indexOf('"') && (a2 = a2.replace(goog.string.internal.QUOT_RE_, "&quot;"));
          -1 != a2.indexOf("'") && (a2 = a2.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
          -1 != a2.indexOf("\0") && (a2 = a2.replace(goog.string.internal.NULL_RE_, "&#0;"));
        }
        return a2;
      };
      goog.string.internal.AMP_RE_ = /&/g;
      goog.string.internal.LT_RE_ = /</g;
      goog.string.internal.GT_RE_ = />/g;
      goog.string.internal.QUOT_RE_ = /"/g;
      goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
      goog.string.internal.NULL_RE_ = /\x00/g;
      goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
      goog.string.internal.whitespaceEscape = function(a2, b2) {
        return goog.string.internal.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
      };
      goog.string.internal.contains = function(a2, b2) {
        return -1 != a2.indexOf(b2);
      };
      goog.string.internal.caseInsensitiveContains = function(a2, b2) {
        return goog.string.internal.contains(a2.toLowerCase(), b2.toLowerCase());
      };
      goog.string.internal.compareVersions = function(a2, b2) {
        var c2 = 0;
        a2 = goog.string.internal.trim(String(a2)).split(".");
        b2 = goog.string.internal.trim(String(b2)).split(".");
        for (var d2 = Math.max(a2.length, b2.length), e2 = 0; 0 == c2 && e2 < d2; e2++) {
          var f2 = a2[e2] || "", g = b2[e2] || "";
          do {
            f2 = /(\d*)(\D*)(.*)/.exec(f2) || ["", "", "", ""];
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            if (0 == f2[0].length && 0 == g[0].length)
              break;
            c2 = 0 == f2[1].length ? 0 : parseInt(f2[1], 10);
            var h = 0 == g[1].length ? 0 : parseInt(g[1], 10);
            c2 = goog.string.internal.compareElements_(c2, h) || goog.string.internal.compareElements_(0 == f2[2].length, 0 == g[2].length) || goog.string.internal.compareElements_(f2[2], g[2]);
            f2 = f2[3];
            g = g[3];
          } while (0 == c2);
        }
        return c2;
      };
      goog.string.internal.compareElements_ = function(a2, b2) {
        return a2 < b2 ? -1 : a2 > b2 ? 1 : 0;
      };
      goog.html.SafeUrl = function(a2, b2) {
        this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = a2 === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
        this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
      goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeUrl.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
      };
      goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.SafeUrl.prototype.getDirection = function() {
        return goog.i18n.bidi.Dir.LTR;
      };
      goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
        return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}";
      });
      goog.html.SafeUrl.unwrap = function(a2) {
        if (a2 instanceof goog.html.SafeUrl && a2.constructor === goog.html.SafeUrl && a2.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeUrlWrappedValue_;
        goog.asserts.fail("expected object of type SafeUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeUrl";
      };
      goog.html.SafeUrl.fromConstant = function(a2) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
      };
      goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;
      goog.html.SafeUrl.isSafeMimeType = function(a2) {
        return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a2);
      };
      goog.html.SafeUrl.fromBlob = function(a2) {
        a2 = goog.html.SafeUrl.isSafeMimeType(a2.type) ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.fromMediaSource = function(a2) {
        goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource");
        a2 = a2 instanceof MediaSource ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
      goog.html.SafeUrl.fromDataUrl = function(a2) {
        a2 = a2.replace(/(%0A|%0D)/g, "");
        var b2 = a2.match(goog.html.DATA_URL_PATTERN_);
        b2 = b2 && goog.html.SafeUrl.isSafeMimeType(b2[1]);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2 ? a2 : goog.html.SafeUrl.INNOCUOUS_STRING);
      };
      goog.html.SafeUrl.fromTelUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "tel:") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
      goog.html.SafeUrl.fromSipUrl = function(a2) {
        goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a2)) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.fromFacebookMessengerUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "fb-messenger://share") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.fromWhatsAppUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "whatsapp://send") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.fromSmsUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.isSmsUrlBodyValid_ = function(a2) {
        var b2 = a2.indexOf("#");
        0 < b2 && (a2 = a2.substring(0, b2));
        b2 = a2.match(/[?&]body=/gi);
        if (!b2)
          return true;
        if (1 < b2.length)
          return false;
        a2 = a2.match(/[?&]body=([^&]*)/)[1];
        if (!a2)
          return true;
        try {
          decodeURIComponent(a2);
        } catch (c2) {
          return false;
        }
        return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a2);
      };
      goog.html.SafeUrl.fromSshUrl = function(a2) {
        goog.string.internal.caseInsensitiveStartsWith(a2, "ssh://") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(a2, b2) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a2, b2);
      };
      goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(a2, b2) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a2, b2);
      };
      goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(a2, b2) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a2, b2);
      };
      goog.html.SafeUrl.sanitizeExtensionUrl_ = function(a2, b2, c2) {
        (a2 = a2.exec(b2)) ? (a2 = a2[1], -1 == (c2 instanceof goog.string.Const ? [goog.string.Const.unwrap(c2)] : c2.map(function(a3) {
          return goog.string.Const.unwrap(a3);
        })).indexOf(a2) && (b2 = goog.html.SafeUrl.INNOCUOUS_STRING)) : b2 = goog.html.SafeUrl.INNOCUOUS_STRING;
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.SafeUrl.fromTrustedResourceUrl = function(a2) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a2));
      };
      goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
      goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
      goog.html.SafeUrl.sanitize = function(a2) {
        if (a2 instanceof goog.html.SafeUrl)
          return a2;
        a2 = "object" == typeof a2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
        goog.html.SAFE_URL_PATTERN_.test(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.sanitizeAssertUnchanged = function(a2, b2) {
        if (a2 instanceof goog.html.SafeUrl)
          return a2;
        a2 = "object" == typeof a2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
        if (b2 && /^data:/i.test(a2) && (b2 = goog.html.SafeUrl.fromDataUrl(a2), b2.getTypedStringValue() == a2))
          return b2;
        goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a2), "%s does not match the safe URL pattern", a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
        return new goog.html.SafeUrl(goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_, a2);
      };
      goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
      goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
      goog.html.SafeStyle = function() {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
        this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeStyle.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeStyle.fromConstant = function(a2) {
        a2 = goog.string.Const.unwrap(a2);
        if (0 === a2.length)
          return goog.html.SafeStyle.EMPTY;
        goog.asserts.assert(goog.string.internal.endsWith(a2, ";"), "Last character of style string is not ';': " + a2);
        goog.asserts.assert(goog.string.internal.contains(a2, ":"), `Style string must contain at least one ':', to specify a "name: value" pair: ` + a2);
        return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeStyle.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
      };
      goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
        return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
      });
      goog.html.SafeStyle.unwrap = function(a2) {
        if (a2 instanceof goog.html.SafeStyle && a2.constructor === goog.html.SafeStyle && a2.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeStyleWrappedValue_;
        goog.asserts.fail("expected object of type SafeStyle, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeStyle";
      };
      goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(a2) {
        return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(a2);
      };
      goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
        this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a2;
        return this;
      };
      goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
      goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
      goog.html.SafeStyle.create = function(a2) {
        var b2 = "", c2;
        for (c2 in a2) {
          if (!/^[-_a-zA-Z0-9]+$/.test(c2))
            throw Error("Name allows only [-_a-zA-Z0-9], got: " + c2);
          var d2 = a2[c2];
          null != d2 && (d2 = Array.isArray(d2) ? goog.array.map(d2, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(d2), b2 += c2 + ":" + d2 + ";");
        }
        return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
      };
      goog.html.SafeStyle.sanitizePropertyValue_ = function(a2) {
        if (a2 instanceof goog.html.SafeUrl)
          return 'url("' + goog.html.SafeUrl.unwrap(a2).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        a2 = a2 instanceof goog.string.Const ? goog.string.Const.unwrap(a2) : goog.html.SafeStyle.sanitizePropertyValueString_(String(a2));
        if (/[{;}]/.test(a2))
          throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [a2]);
        return a2;
      };
      goog.html.SafeStyle.sanitizePropertyValueString_ = function(a2) {
        var b2 = a2.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
        if (goog.html.SafeStyle.VALUE_RE_.test(b2)) {
          if (goog.html.SafeStyle.COMMENT_RE_.test(a2))
            return goog.asserts.fail("String value disallows comments, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
          if (!goog.html.SafeStyle.hasBalancedQuotes_(a2))
            return goog.asserts.fail("String value requires balanced quotes, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
          if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(a2))
            return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
        } else
          return goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
        return goog.html.SafeStyle.sanitizeUrl_(a2);
      };
      goog.html.SafeStyle.hasBalancedQuotes_ = function(a2) {
        for (var b2 = true, c2 = true, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charAt(d2);
          "'" == e2 && c2 ? b2 = !b2 : '"' == e2 && b2 && (c2 = !c2);
        }
        return b2 && c2;
      };
      goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(a2) {
        for (var b2 = true, c2 = /^[-_a-zA-Z0-9]$/, d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2.charAt(d2);
          if ("]" == e2) {
            if (b2)
              return false;
            b2 = true;
          } else if ("[" == e2) {
            if (!b2)
              return false;
            b2 = false;
          } else if (!b2 && !c2.test(e2))
            return false;
        }
        return b2;
      };
      goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = `[-,."'%_!# a-zA-Z0-9\\[\\]]`;
      goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
      goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
      goog.html.SafeStyle.ALLOWED_FUNCTIONS_ = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" ");
      goog.html.SafeStyle.FUNCTIONS_RE_ = new RegExp("\\b(" + goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g");
      goog.html.SafeStyle.COMMENT_RE_ = /\/\*/;
      goog.html.SafeStyle.sanitizeUrl_ = function(a2) {
        return a2.replace(goog.html.SafeStyle.URL_RE_, function(a3, c2, d2, e2) {
          var b2 = "";
          d2 = d2.replace(/^(['"])(.*)\1$/, function(a4, c3, d3) {
            b2 = c3;
            return d3;
          });
          a3 = goog.html.SafeUrl.sanitize(d2).getTypedStringValue();
          return c2 + b2 + a3 + b2 + e2;
        });
      };
      goog.html.SafeStyle.concat = function(a2) {
        var b2 = "", c2 = function(a3) {
          Array.isArray(a3) ? goog.array.forEach(a3, c2) : b2 += goog.html.SafeStyle.unwrap(a3);
        };
        goog.array.forEach(arguments, c2);
        return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
      };
      goog.html.SafeStyleSheet = function() {
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
        this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
      };
      goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeStyleSheet.createRule = function(a2, b2) {
        if (goog.string.internal.contains(a2, "<"))
          throw Error("Selector does not allow '<', got: " + a2);
        var c2 = a2.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c2))
          throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a2);
        if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(c2))
          throw Error("() and [] in selector must be balanced, got: " + a2);
        b2 instanceof goog.html.SafeStyle || (b2 = goog.html.SafeStyle.create(b2));
        a2 = a2 + "{" + goog.html.SafeStyle.unwrap(b2).replace(/</g, "\\3C ") + "}";
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(a2) {
        for (var b2 = { "(": ")", "[": "]" }, c2 = [], d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2[d2];
          if (b2[e2])
            c2.push(b2[e2]);
          else if (goog.object.contains(b2, e2) && c2.pop() != e2)
            return false;
        }
        return 0 == c2.length;
      };
      goog.html.SafeStyleSheet.concat = function(a2) {
        var b2 = "", c2 = function(a3) {
          Array.isArray(a3) ? goog.array.forEach(a3, c2) : b2 += goog.html.SafeStyleSheet.unwrap(a3);
        };
        goog.array.forEach(arguments, c2);
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.SafeStyleSheet.fromConstant = function(a2) {
        a2 = goog.string.Const.unwrap(a2);
        if (0 === a2.length)
          return goog.html.SafeStyleSheet.EMPTY;
        goog.asserts.assert(!goog.string.internal.contains(a2, "<"), "Forbidden '<' character in style sheet string: " + a2);
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
      };
      goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
      };
      goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
        return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
      });
      goog.html.SafeStyleSheet.unwrap = function(a2) {
        if (a2 instanceof goog.html.SafeStyleSheet && a2.constructor === goog.html.SafeStyleSheet && a2.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
        goog.asserts.fail("expected object of type SafeStyleSheet, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeStyleSheet";
      };
      goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(a2) {
        return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(a2);
      };
      goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
        this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a2;
        return this;
      };
      goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
      goog.labs = {};
      goog.labs.userAgent = {};
      goog.labs.userAgent.util = {};
      goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
        var a2 = goog.labs.userAgent.util.getNavigator_();
        return a2 && (a2 = a2.userAgent) ? a2 : "";
      };
      goog.labs.userAgent.util.getNavigator_ = function() {
        return goog.global.navigator;
      };
      goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
      goog.labs.userAgent.util.setUserAgent = function(a2) {
        goog.labs.userAgent.util.userAgent_ = a2 || goog.labs.userAgent.util.getNativeUserAgentString_();
      };
      goog.labs.userAgent.util.getUserAgent = function() {
        return goog.labs.userAgent.util.userAgent_;
      };
      goog.labs.userAgent.util.matchUserAgent = function(a2) {
        var b2 = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.contains(b2, a2);
      };
      goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a2) {
        var b2 = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.caseInsensitiveContains(b2, a2);
      };
      goog.labs.userAgent.util.extractVersionTuples = function(a2) {
        for (var b2 = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c2 = [], d2; d2 = b2.exec(a2); )
          c2.push([d2[1], d2[2], d2[3] || void 0]);
        return c2;
      };
      goog.labs.userAgent.browser = {};
      goog.labs.userAgent.browser.matchOpera_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Opera");
      };
      goog.labs.userAgent.browser.matchIE_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
      };
      goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edge");
      };
      goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edg/");
      };
      goog.labs.userAgent.browser.matchOperaChromium_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("OPR");
      };
      goog.labs.userAgent.browser.matchFirefox_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
      };
      goog.labs.userAgent.browser.matchSafari_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
      };
      goog.labs.userAgent.browser.matchCoast_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Coast");
      };
      goog.labs.userAgent.browser.matchIosWebview_ = function() {
        return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
      };
      goog.labs.userAgent.browser.matchChrome_ = function() {
        return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_();
      };
      goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
        return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
      };
      goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
      goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
      goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_;
      goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_;
      goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_;
      goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
      goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
      goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
      goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
      goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
      goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
      goog.labs.userAgent.browser.isSilk = function() {
        return goog.labs.userAgent.util.matchUserAgent("Silk");
      };
      goog.labs.userAgent.browser.getVersion = function() {
        function a2(a3) {
          a3 = goog.array.find(a3, d2);
          return c2[a3] || "";
        }
        var b2 = goog.labs.userAgent.util.getUserAgent();
        if (goog.labs.userAgent.browser.isIE())
          return goog.labs.userAgent.browser.getIEVersion_(b2);
        b2 = goog.labs.userAgent.util.extractVersionTuples(b2);
        var c2 = {};
        goog.array.forEach(b2, function(a3) {
          c2[a3[0]] = a3[1];
        });
        var d2 = goog.partial(goog.object.containsKey, c2);
        return goog.labs.userAgent.browser.isOpera() ? a2(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? a2(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? a2(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? a2(["Chrome", "CriOS", "HeadlessChrome"]) : (b2 = b2[2]) && b2[1] || "";
      };
      goog.labs.userAgent.browser.isVersionOrHigher = function(a2) {
        return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), a2);
      };
      goog.labs.userAgent.browser.getIEVersion_ = function(a2) {
        var b2 = /rv: *([\d\.]*)/.exec(a2);
        if (b2 && b2[1])
          return b2[1];
        b2 = "";
        var c2 = /MSIE +([\d\.]+)/.exec(a2);
        if (c2 && c2[1])
          if (a2 = /Trident\/(\d.\d)/.exec(a2), "7.0" == c2[1])
            if (a2 && a2[1])
              switch (a2[1]) {
                case "4.0":
                  b2 = "8.0";
                  break;
                case "5.0":
                  b2 = "9.0";
                  break;
                case "6.0":
                  b2 = "10.0";
                  break;
                case "7.0":
                  b2 = "11.0";
              }
            else
              b2 = "7.0";
          else
            b2 = c2[1];
        return b2;
      };
      goog.html.SafeHtml = function() {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
        this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
        this.dir_ = null;
      };
      goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG;
      goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = true;
      goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = true;
      goog.html.SafeHtml.prototype.getDirection = function() {
        return this.dir_;
      };
      goog.html.SafeHtml.prototype.implementsGoogStringTypedString = true;
      goog.html.SafeHtml.prototype.getTypedStringValue = function() {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
      };
      goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
        return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
      });
      goog.html.SafeHtml.unwrap = function(a2) {
        return goog.html.SafeHtml.unwrapTrustedHTML(a2).toString();
      };
      goog.html.SafeHtml.unwrapTrustedHTML = function(a2) {
        if (a2 instanceof goog.html.SafeHtml && a2.constructor === goog.html.SafeHtml && a2.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_)
          return a2.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
        goog.asserts.fail("expected object of type SafeHtml, got '" + a2 + "' of type " + goog.typeOf(a2));
        return "type_error:SafeHtml";
      };
      goog.html.SafeHtml.htmlEscape = function(a2) {
        if (a2 instanceof goog.html.SafeHtml)
          return a2;
        var b2 = "object" == typeof a2, c2 = null;
        b2 && a2.implementsGoogI18nBidiDirectionalString && (c2 = a2.getDirection());
        a2 = b2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a2), c2);
      };
      goog.html.SafeHtml.htmlEscapePreservingNewlines = function(a2) {
        if (a2 instanceof goog.html.SafeHtml)
          return a2;
        a2 = goog.html.SafeHtml.htmlEscape(a2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
      };
      goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(a2) {
        if (a2 instanceof goog.html.SafeHtml)
          return a2;
        a2 = goog.html.SafeHtml.htmlEscape(a2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
      };
      goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
      goog.html.SafeHtml.comment = function(a2) {
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!--" + goog.string.internal.htmlEscape(a2) + "-->", null);
      };
      goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
      goog.html.SafeHtml.URL_ATTRIBUTES_ = { action: true, cite: true, data: true, formaction: true, href: true, manifest: true, poster: true, src: true };
      goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = { APPLET: true, BASE: true, EMBED: true, IFRAME: true, LINK: true, MATH: true, META: true, OBJECT: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
      goog.html.SafeHtml.create = function(a2, b2, c2) {
        goog.html.SafeHtml.verifyTagName(String(a2));
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a2), b2, c2);
      };
      goog.html.SafeHtml.verifyTagName = function(a2) {
        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a2))
          throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + a2 + ">." : "");
        if (a2.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
          throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + a2 + "> is not allowed for SafeHtml." : "");
      };
      goog.html.SafeHtml.createIframe = function(a2, b2, c2, d2) {
        a2 && goog.html.TrustedResourceUrl.unwrap(a2);
        var e2 = {};
        e2.src = a2 || null;
        e2.srcdoc = b2 && goog.html.SafeHtml.unwrap(b2);
        a2 = goog.html.SafeHtml.combineAttributes(e2, { sandbox: "" }, c2);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
      };
      goog.html.SafeHtml.createSandboxIframe = function(a2, b2, c2, d2) {
        if (!goog.html.SafeHtml.canUseSandboxIframe())
          throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
        var e2 = {};
        e2.src = a2 ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2)) : null;
        e2.srcdoc = b2 || null;
        e2.sandbox = "";
        a2 = goog.html.SafeHtml.combineAttributes(e2, {}, c2);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
      };
      goog.html.SafeHtml.canUseSandboxIframe = function() {
        return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
      };
      goog.html.SafeHtml.createScriptSrc = function(a2, b2) {
        goog.html.TrustedResourceUrl.unwrap(a2);
        a2 = goog.html.SafeHtml.combineAttributes({ src: a2 }, {}, b2);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a2);
      };
      goog.html.SafeHtml.createScript = function(a2, b2) {
        for (var c2 in b2) {
          var d2 = c2.toLowerCase();
          if ("language" == d2 || "src" == d2 || "text" == d2 || "type" == d2)
            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + d2 + '" attribute' : "");
        }
        c2 = "";
        a2 = goog.array.concat(a2);
        for (d2 = 0; d2 < a2.length; d2++)
          c2 += goog.html.SafeScript.unwrap(a2[d2]);
        a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", b2, a2);
      };
      goog.html.SafeHtml.createStyle = function(a2, b2) {
        b2 = goog.html.SafeHtml.combineAttributes({ type: "text/css" }, {}, b2);
        var c2 = "";
        a2 = goog.array.concat(a2);
        for (var d2 = 0; d2 < a2.length; d2++)
          c2 += goog.html.SafeStyleSheet.unwrap(a2[d2]);
        a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b2, a2);
      };
      goog.html.SafeHtml.createMetaRefresh = function(a2, b2) {
        a2 = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2));
        (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(a2, ";") && (a2 = "'" + a2.replace(/'/g, "%27") + "'");
        return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", { "http-equiv": "refresh", content: (b2 || 0) + "; url=" + a2 });
      };
      goog.html.SafeHtml.getAttrNameAndValue_ = function(a2, b2, c2) {
        if (c2 instanceof goog.string.Const)
          c2 = goog.string.Const.unwrap(c2);
        else if ("style" == b2.toLowerCase())
          if (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
            c2 = goog.html.SafeHtml.getStyleValue_(c2);
          else
            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
        else {
          if (/^on/i.test(b2))
            throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + b2 + '" requires goog.string.Const value, "' + c2 + '" given.' : "");
          if (b2.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
            if (c2 instanceof goog.html.TrustedResourceUrl)
              c2 = goog.html.TrustedResourceUrl.unwrap(c2);
            else if (c2 instanceof goog.html.SafeUrl)
              c2 = goog.html.SafeUrl.unwrap(c2);
            else if ("string" === typeof c2)
              c2 = goog.html.SafeUrl.sanitize(c2).getTypedStringValue();
            else
              throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + b2 + '" on tag "' + a2 + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + c2 + '" given.' : "");
        }
        c2.implementsGoogStringTypedString && (c2 = c2.getTypedStringValue());
        goog.asserts.assert("string" === typeof c2 || "number" === typeof c2, "String or number value expected, got " + typeof c2 + " with value: " + c2);
        return b2 + '="' + goog.string.internal.htmlEscape(String(c2)) + '"';
      };
      goog.html.SafeHtml.getStyleValue_ = function(a2) {
        if (!goog.isObject(a2))
          throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a2 + " given: " + a2 : "");
        a2 instanceof goog.html.SafeStyle || (a2 = goog.html.SafeStyle.create(a2));
        return goog.html.SafeStyle.unwrap(a2);
      };
      goog.html.SafeHtml.createWithDir = function(a2, b2, c2, d2) {
        b2 = goog.html.SafeHtml.create(b2, c2, d2);
        b2.dir_ = a2;
        return b2;
      };
      goog.html.SafeHtml.join = function(a2, b2) {
        a2 = goog.html.SafeHtml.htmlEscape(a2);
        var c2 = a2.getDirection(), d2 = [], e2 = function(a3) {
          Array.isArray(a3) ? goog.array.forEach(a3, e2) : (a3 = goog.html.SafeHtml.htmlEscape(a3), d2.push(goog.html.SafeHtml.unwrap(a3)), a3 = a3.getDirection(), c2 == goog.i18n.bidi.Dir.NEUTRAL ? c2 = a3 : a3 != goog.i18n.bidi.Dir.NEUTRAL && c2 != a3 && (c2 = null));
        };
        goog.array.forEach(b2, e2);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d2.join(goog.html.SafeHtml.unwrap(a2)), c2);
      };
      goog.html.SafeHtml.concat = function(a2) {
        return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
      };
      goog.html.SafeHtml.concatWithDir = function(a2, b2) {
        var c2 = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
        c2.dir_ = a2;
        return c2;
      };
      goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {};
      goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(a2, b2) {
        return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(a2, b2);
      };
      goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2, b2) {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a2) : a2;
        this.dir_ = b2;
        return this;
      };
      goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(a2, b2, c2) {
        var d2 = null;
        var e2 = "<" + a2 + goog.html.SafeHtml.stringifyAttributes(a2, b2);
        null == c2 ? c2 = [] : Array.isArray(c2) || (c2 = [c2]);
        goog.dom.tags.isVoidTag(a2.toLowerCase()) ? (goog.asserts.assert(!c2.length, "Void tag <" + a2 + "> does not allow content."), e2 += ">") : (d2 = goog.html.SafeHtml.concat(c2), e2 += ">" + goog.html.SafeHtml.unwrap(d2) + "</" + a2 + ">", d2 = d2.getDirection());
        (a2 = b2 && b2.dir) && (d2 = /^(ltr|rtl|auto)$/i.test(a2) ? goog.i18n.bidi.Dir.NEUTRAL : null);
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          e2,
          d2
        );
      };
      goog.html.SafeHtml.stringifyAttributes = function(a2, b2) {
        var c2 = "";
        if (b2)
          for (var d2 in b2) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d2))
              throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + d2 + '".' : "");
            var e2 = b2[d2];
            null != e2 && (c2 += " " + goog.html.SafeHtml.getAttrNameAndValue_(a2, d2, e2));
          }
        return c2;
      };
      goog.html.SafeHtml.combineAttributes = function(a2, b2, c2) {
        var d2 = {}, e2;
        for (e2 in a2)
          goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = a2[e2];
        for (e2 in b2)
          goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = b2[e2];
        if (c2)
          for (e2 in c2) {
            var f2 = e2.toLowerCase();
            if (f2 in a2)
              throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + f2 + '" attribute, got "' + e2 + '" with value "' + c2[e2] + '"' : "");
            f2 in b2 && delete d2[f2];
            d2[e2] = c2[e2];
          }
        return d2;
      };
      goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
      goog.html.uncheckedconversions = {};
      goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(a2, b2, c2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b2, c2 || null);
      };
      goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
        goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
        goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
      };
      goog.dom.safe = {};
      goog.dom.safe.InsertAdjacentHtmlPosition = { AFTERBEGIN: "afterbegin", AFTEREND: "afterend", BEFOREBEGIN: "beforebegin", BEFOREEND: "beforeend" };
      goog.dom.safe.insertAdjacentHtml = function(a2, b2, c2) {
        a2.insertAdjacentHTML(b2, goog.html.SafeHtml.unwrapTrustedHTML(c2));
      };
      goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = { MATH: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
      goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
        if (goog.DEBUG && "undefined" === typeof document)
          return false;
        var a2 = document.createElement("div"), b2 = document.createElement("div");
        b2.appendChild(document.createElement("div"));
        a2.appendChild(b2);
        if (goog.DEBUG && !a2.firstChild)
          return false;
        b2 = a2.firstChild.firstChild;
        a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
        return !b2.parentElement;
      });
      goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(a2, b2) {
        if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
          for (; a2.lastChild; )
            a2.removeChild(a2.lastChild);
        a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
      };
      goog.dom.safe.setInnerHtml = function(a2, b2) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var c2 = a2.tagName.toUpperCase();
          if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c2])
            throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a2.tagName + ".");
        }
        goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a2, b2);
      };
      goog.dom.safe.setOuterHtml = function(a2, b2) {
        a2.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
      };
      goog.dom.safe.setFormElementAction = function(a2, b2) {
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        goog.dom.asserts.assertIsHTMLFormElement(a2).action = goog.html.SafeUrl.unwrap(b2);
      };
      goog.dom.safe.setButtonFormAction = function(a2, b2) {
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        goog.dom.asserts.assertIsHTMLButtonElement(a2).formAction = goog.html.SafeUrl.unwrap(b2);
      };
      goog.dom.safe.setInputFormAction = function(a2, b2) {
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        goog.dom.asserts.assertIsHTMLInputElement(a2).formAction = goog.html.SafeUrl.unwrap(b2);
      };
      goog.dom.safe.setStyle = function(a2, b2) {
        a2.style.cssText = goog.html.SafeStyle.unwrap(b2);
      };
      goog.dom.safe.documentWrite = function(a2, b2) {
        a2.write(goog.html.SafeHtml.unwrapTrustedHTML(b2));
      };
      goog.dom.safe.setAnchorHref = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLAnchorElement(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.href = goog.html.SafeUrl.unwrap(b2);
      };
      goog.dom.safe.setImageSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLImageElement(a2);
        if (!(b2 instanceof goog.html.SafeUrl)) {
          var c2 = /^data:image\//i.test(b2);
          b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
        }
        a2.src = goog.html.SafeUrl.unwrap(b2);
      };
      goog.dom.safe.setAudioSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLAudioElement(a2);
        if (!(b2 instanceof goog.html.SafeUrl)) {
          var c2 = /^data:audio\//i.test(b2);
          b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
        }
        a2.src = goog.html.SafeUrl.unwrap(b2);
      };
      goog.dom.safe.setVideoSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLVideoElement(a2);
        if (!(b2 instanceof goog.html.SafeUrl)) {
          var c2 = /^data:video\//i.test(b2);
          b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
        }
        a2.src = goog.html.SafeUrl.unwrap(b2);
      };
      goog.dom.safe.setEmbedSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLEmbedElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
      };
      goog.dom.safe.setFrameSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLFrameElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrap(b2);
      };
      goog.dom.safe.setIframeSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLIFrameElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrap(b2);
      };
      goog.dom.safe.setIframeSrcdoc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLIFrameElement(a2);
        a2.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(b2);
      };
      goog.dom.safe.setLinkHrefAndRel = function(a2, b2, c2) {
        goog.dom.asserts.assertIsHTMLLinkElement(a2);
        a2.rel = c2;
        goog.string.internal.caseInsensitiveContains(c2, "stylesheet") ? (goog.asserts.assert(b2 instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a2.href = goog.html.TrustedResourceUrl.unwrap(b2)) : a2.href = b2 instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrap(b2) : b2 instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrap(b2) : goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(b2));
      };
      goog.dom.safe.setObjectData = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLObjectElement(a2);
        a2.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
      };
      goog.dom.safe.setScriptSrc = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLScriptElement(a2);
        a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
        (b2 = goog.getScriptNonce()) && a2.setAttribute("nonce", b2);
      };
      goog.dom.safe.setScriptContent = function(a2, b2) {
        goog.dom.asserts.assertIsHTMLScriptElement(a2);
        a2.text = goog.html.SafeScript.unwrapTrustedScript(b2);
        (b2 = goog.getScriptNonce()) && a2.setAttribute("nonce", b2);
      };
      goog.dom.safe.setLocationHref = function(a2, b2) {
        goog.dom.asserts.assertIsLocation(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.href = goog.html.SafeUrl.unwrap(b2);
      };
      goog.dom.safe.assignLocation = function(a2, b2) {
        goog.dom.asserts.assertIsLocation(a2);
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.assign(goog.html.SafeUrl.unwrap(b2));
      };
      goog.dom.safe.replaceLocation = function(a2, b2) {
        b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
        a2.replace(goog.html.SafeUrl.unwrap(b2));
      };
      goog.dom.safe.openInWindow = function(a2, b2, c2, d2, e2) {
        a2 = a2 instanceof goog.html.SafeUrl ? a2 : goog.html.SafeUrl.sanitizeAssertUnchanged(a2);
        b2 = b2 || goog.global;
        c2 = c2 instanceof goog.string.Const ? goog.string.Const.unwrap(c2) : c2 || "";
        return b2.open(goog.html.SafeUrl.unwrap(a2), c2, d2, e2);
      };
      goog.dom.safe.parseFromStringHtml = function(a2, b2) {
        return goog.dom.safe.parseFromString(a2, b2, "text/html");
      };
      goog.dom.safe.parseFromString = function(a2, b2, c2) {
        return a2.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b2), c2);
      };
      goog.dom.safe.createImageFromBlob = function(a2) {
        if (!/^image\/.*/g.test(a2.type))
          throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
        var b2 = goog.global.URL.createObjectURL(a2);
        a2 = new goog.global.Image();
        a2.onload = function() {
          goog.global.URL.revokeObjectURL(b2);
        };
        goog.dom.safe.setImageSrc(a2, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), b2));
        return a2;
      };
      goog.string.DETECT_DOUBLE_ESCAPING = false;
      goog.string.FORCE_NON_DOM_HTML_UNESCAPING = false;
      goog.string.Unicode = { NBSP: "\xA0" };
      goog.string.startsWith = goog.string.internal.startsWith;
      goog.string.endsWith = goog.string.internal.endsWith;
      goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
      goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
      goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
      goog.string.subs = function(a2, b2) {
        for (var c2 = a2.split("%s"), d2 = "", e2 = Array.prototype.slice.call(arguments, 1); e2.length && 1 < c2.length; )
          d2 += c2.shift() + e2.shift();
        return d2 + c2.join("%s");
      };
      goog.string.collapseWhitespace = function(a2) {
        return a2.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
      };
      goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
      goog.string.isEmptyString = function(a2) {
        return 0 == a2.length;
      };
      goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
      goog.string.isEmptyOrWhitespaceSafe = function(a2) {
        return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a2));
      };
      goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
      goog.string.isBreakingWhitespace = function(a2) {
        return !/[^\t\n\r ]/.test(a2);
      };
      goog.string.isAlpha = function(a2) {
        return !/[^a-zA-Z]/.test(a2);
      };
      goog.string.isNumeric = function(a2) {
        return !/[^0-9]/.test(a2);
      };
      goog.string.isAlphaNumeric = function(a2) {
        return !/[^a-zA-Z0-9]/.test(a2);
      };
      goog.string.isSpace = function(a2) {
        return " " == a2;
      };
      goog.string.isUnicodeChar = function(a2) {
        return 1 == a2.length && " " <= a2 && "~" >= a2 || "\x80" <= a2 && "\uFFFD" >= a2;
      };
      goog.string.stripNewlines = function(a2) {
        return a2.replace(/(\r\n|\r|\n)+/g, " ");
      };
      goog.string.canonicalizeNewlines = function(a2) {
        return a2.replace(/(\r\n|\r|\n)/g, "\n");
      };
      goog.string.normalizeWhitespace = function(a2) {
        return a2.replace(/\xa0|\s/g, " ");
      };
      goog.string.normalizeSpaces = function(a2) {
        return a2.replace(/\xa0|[ \t]+/g, " ");
      };
      goog.string.collapseBreakingSpaces = function(a2) {
        return a2.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
      };
      goog.string.trim = goog.string.internal.trim;
      goog.string.trimLeft = function(a2) {
        return a2.replace(/^[\s\xa0]+/, "");
      };
      goog.string.trimRight = function(a2) {
        return a2.replace(/[\s\xa0]+$/, "");
      };
      goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
      goog.string.numberAwareCompare_ = function(a2, b2, c2) {
        if (a2 == b2)
          return 0;
        if (!a2)
          return -1;
        if (!b2)
          return 1;
        for (var d2 = a2.toLowerCase().match(c2), e2 = b2.toLowerCase().match(c2), f2 = Math.min(d2.length, e2.length), g = 0; g < f2; g++) {
          c2 = d2[g];
          var h = e2[g];
          if (c2 != h)
            return a2 = parseInt(c2, 10), !isNaN(a2) && (b2 = parseInt(h, 10), !isNaN(b2) && a2 - b2) ? a2 - b2 : c2 < h ? -1 : 1;
        }
        return d2.length != e2.length ? d2.length - e2.length : a2 < b2 ? -1 : 1;
      };
      goog.string.intAwareCompare = function(a2, b2) {
        return goog.string.numberAwareCompare_(a2, b2, /\d+|\D+/g);
      };
      goog.string.floatAwareCompare = function(a2, b2) {
        return goog.string.numberAwareCompare_(a2, b2, /\d+|\.\d+|\D+/g);
      };
      goog.string.numerateCompare = goog.string.floatAwareCompare;
      goog.string.urlEncode = function(a2) {
        return encodeURIComponent(String(a2));
      };
      goog.string.urlDecode = function(a2) {
        return decodeURIComponent(a2.replace(/\+/g, " "));
      };
      goog.string.newLineToBr = goog.string.internal.newLineToBr;
      goog.string.htmlEscape = function(a2, b2) {
        a2 = goog.string.internal.htmlEscape(a2, b2);
        goog.string.DETECT_DOUBLE_ESCAPING && (a2 = a2.replace(goog.string.E_RE_, "&#101;"));
        return a2;
      };
      goog.string.E_RE_ = /e/g;
      goog.string.unescapeEntities = function(a2) {
        return goog.string.contains(a2, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a2) : goog.string.unescapePureXmlEntities_(a2) : a2;
      };
      goog.string.unescapeEntitiesWithDocument = function(a2, b2) {
        return goog.string.contains(a2, "&") ? goog.string.unescapeEntitiesUsingDom_(a2, b2) : a2;
      };
      goog.string.unescapeEntitiesUsingDom_ = function(a2, b2) {
        var c2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
        var d2 = b2 ? b2.createElement("div") : goog.global.document.createElement("div");
        return a2.replace(goog.string.HTML_ENTITY_PATTERN_, function(a3, b3) {
          var e2 = c2[a3];
          if (e2)
            return e2;
          "#" == b3.charAt(0) && (b3 = Number("0" + b3.substr(1)), isNaN(b3) || (e2 = String.fromCharCode(b3)));
          e2 || (goog.dom.safe.setInnerHtml(d2, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
            goog.string.Const.from("Single HTML entity."),
            a3 + " "
          )), e2 = d2.firstChild.nodeValue.slice(0, -1));
          return c2[a3] = e2;
        });
      };
      goog.string.unescapePureXmlEntities_ = function(a2) {
        return a2.replace(/&([^;]+);/g, function(a3, c2) {
          switch (c2) {
            case "amp":
              return "&";
            case "lt":
              return "<";
            case "gt":
              return ">";
            case "quot":
              return '"';
            default:
              return "#" != c2.charAt(0) || (c2 = Number("0" + c2.substr(1)), isNaN(c2)) ? a3 : String.fromCharCode(c2);
          }
        });
      };
      goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
      goog.string.whitespaceEscape = function(a2, b2) {
        return goog.string.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
      };
      goog.string.preserveSpaces = function(a2) {
        return a2.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
      };
      goog.string.stripQuotes = function(a2, b2) {
        for (var c2 = b2.length, d2 = 0; d2 < c2; d2++) {
          var e2 = 1 == c2 ? b2 : b2.charAt(d2);
          if (a2.charAt(0) == e2 && a2.charAt(a2.length - 1) == e2)
            return a2.substring(1, a2.length - 1);
        }
        return a2;
      };
      goog.string.truncate = function(a2, b2, c2) {
        c2 && (a2 = goog.string.unescapeEntities(a2));
        a2.length > b2 && (a2 = a2.substring(0, b2 - 3) + "...");
        c2 && (a2 = goog.string.htmlEscape(a2));
        return a2;
      };
      goog.string.truncateMiddle = function(a2, b2, c2, d2) {
        c2 && (a2 = goog.string.unescapeEntities(a2));
        if (d2 && a2.length > b2) {
          d2 > b2 && (d2 = b2);
          var e2 = a2.length - d2;
          a2 = a2.substring(0, b2 - d2) + "..." + a2.substring(e2);
        } else
          a2.length > b2 && (d2 = Math.floor(b2 / 2), e2 = a2.length - d2, a2 = a2.substring(0, d2 + b2 % 2) + "..." + a2.substring(e2));
        c2 && (a2 = goog.string.htmlEscape(a2));
        return a2;
      };
      goog.string.specialEscapeChars_ = { "\0": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" };
      goog.string.jsEscapeCache_ = { "'": "\\'" };
      goog.string.quote = function(a2) {
        a2 = String(a2);
        for (var b2 = ['"'], c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2.charAt(c2), e2 = d2.charCodeAt(0);
          b2[c2 + 1] = goog.string.specialEscapeChars_[d2] || (31 < e2 && 127 > e2 ? d2 : goog.string.escapeChar(d2));
        }
        b2.push('"');
        return b2.join("");
      };
      goog.string.escapeString = function(a2) {
        for (var b2 = [], c2 = 0; c2 < a2.length; c2++)
          b2[c2] = goog.string.escapeChar(a2.charAt(c2));
        return b2.join("");
      };
      goog.string.escapeChar = function(a2) {
        if (a2 in goog.string.jsEscapeCache_)
          return goog.string.jsEscapeCache_[a2];
        if (a2 in goog.string.specialEscapeChars_)
          return goog.string.jsEscapeCache_[a2] = goog.string.specialEscapeChars_[a2];
        var b2 = a2.charCodeAt(0);
        if (31 < b2 && 127 > b2)
          var c2 = a2;
        else {
          if (256 > b2) {
            if (c2 = "\\x", 16 > b2 || 256 < b2)
              c2 += "0";
          } else
            c2 = "\\u", 4096 > b2 && (c2 += "0");
          c2 += b2.toString(16).toUpperCase();
        }
        return goog.string.jsEscapeCache_[a2] = c2;
      };
      goog.string.contains = goog.string.internal.contains;
      goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
      goog.string.countOf = function(a2, b2) {
        return a2 && b2 ? a2.split(b2).length - 1 : 0;
      };
      goog.string.removeAt = function(a2, b2, c2) {
        var d2 = a2;
        0 <= b2 && b2 < a2.length && 0 < c2 && (d2 = a2.substr(0, b2) + a2.substr(b2 + c2, a2.length - b2 - c2));
        return d2;
      };
      goog.string.remove = function(a2, b2) {
        return a2.replace(b2, "");
      };
      goog.string.removeAll = function(a2, b2) {
        b2 = new RegExp(goog.string.regExpEscape(b2), "g");
        return a2.replace(b2, "");
      };
      goog.string.replaceAll = function(a2, b2, c2) {
        b2 = new RegExp(goog.string.regExpEscape(b2), "g");
        return a2.replace(b2, c2.replace(/\$/g, "$$$$"));
      };
      goog.string.regExpEscape = function(a2) {
        return String(a2).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
      };
      goog.string.repeat = String.prototype.repeat ? function(a2, b2) {
        return a2.repeat(b2);
      } : function(a2, b2) {
        return Array(b2 + 1).join(a2);
      };
      goog.string.padNumber = function(a2, b2, c2) {
        a2 = void 0 !== c2 ? a2.toFixed(c2) : String(a2);
        c2 = a2.indexOf(".");
        -1 == c2 && (c2 = a2.length);
        return goog.string.repeat("0", Math.max(0, b2 - c2)) + a2;
      };
      goog.string.makeSafe = function(a2) {
        return null == a2 ? "" : String(a2);
      };
      goog.string.buildString = function(a2) {
        return Array.prototype.join.call(arguments, "");
      };
      goog.string.getRandomString = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
      };
      goog.string.compareVersions = goog.string.internal.compareVersions;
      goog.string.hashCode = function(a2) {
        for (var b2 = 0, c2 = 0; c2 < a2.length; ++c2)
          b2 = 31 * b2 + a2.charCodeAt(c2) >>> 0;
        return b2;
      };
      goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
      goog.string.createUniqueString = function() {
        return "goog_" + goog.string.uniqueStringCounter_++;
      };
      goog.string.toNumber = function(a2) {
        var b2 = Number(a2);
        return 0 == b2 && goog.string.isEmptyOrWhitespace(a2) ? NaN : b2;
      };
      goog.string.isLowerCamelCase = function(a2) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(a2);
      };
      goog.string.isUpperCamelCase = function(a2) {
        return /^([A-Z][a-z]*)+$/.test(a2);
      };
      goog.string.toCamelCase = function(a2) {
        return String(a2).replace(/\-([a-z])/g, function(a3, c2) {
          return c2.toUpperCase();
        });
      };
      goog.string.toSelectorCase = function(a2) {
        return String(a2).replace(/([A-Z])/g, "-$1").toLowerCase();
      };
      goog.string.toTitleCase = function(a2, b2) {
        b2 = "string" === typeof b2 ? goog.string.regExpEscape(b2) : "\\s";
        return a2.replace(new RegExp("(^" + (b2 ? "|[" + b2 + "]+" : "") + ")([a-z])", "g"), function(a3, b3, e2) {
          return b3 + e2.toUpperCase();
        });
      };
      goog.string.capitalize = function(a2) {
        return String(a2.charAt(0)).toUpperCase() + String(a2.substr(1)).toLowerCase();
      };
      goog.string.parseInt = function(a2) {
        isFinite(a2) && (a2 = String(a2));
        return "string" === typeof a2 ? /^\s*-?0x/i.test(a2) ? parseInt(a2, 16) : parseInt(a2, 10) : NaN;
      };
      goog.string.splitLimit = function(a2, b2, c2) {
        a2 = a2.split(b2);
        for (var d2 = []; 0 < c2 && a2.length; )
          d2.push(a2.shift()), c2--;
        a2.length && d2.push(a2.join(b2));
        return d2;
      };
      goog.string.lastComponent = function(a2, b2) {
        if (b2)
          "string" == typeof b2 && (b2 = [b2]);
        else
          return a2;
        for (var c2 = -1, d2 = 0; d2 < b2.length; d2++)
          if ("" != b2[d2]) {
            var e2 = a2.lastIndexOf(b2[d2]);
            e2 > c2 && (c2 = e2);
          }
        return -1 == c2 ? a2 : a2.slice(c2 + 1);
      };
      goog.string.editDistance = function(a2, b2) {
        var c2 = [], d2 = [];
        if (a2 == b2)
          return 0;
        if (!a2.length || !b2.length)
          return Math.max(a2.length, b2.length);
        for (var e2 = 0; e2 < b2.length + 1; e2++)
          c2[e2] = e2;
        for (e2 = 0; e2 < a2.length; e2++) {
          d2[0] = e2 + 1;
          for (var f2 = 0; f2 < b2.length; f2++)
            d2[f2 + 1] = Math.min(d2[f2] + 1, c2[f2 + 1] + 1, c2[f2] + Number(a2[e2] != b2[f2]));
          for (f2 = 0; f2 < c2.length; f2++)
            c2[f2] = d2[f2];
        }
        return d2[b2.length];
      };
      goog.labs.userAgent.engine = {};
      goog.labs.userAgent.engine.isPresto = function() {
        return goog.labs.userAgent.util.matchUserAgent("Presto");
      };
      goog.labs.userAgent.engine.isTrident = function() {
        return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
      };
      goog.labs.userAgent.engine.isEdge = function() {
        return goog.labs.userAgent.util.matchUserAgent("Edge");
      };
      goog.labs.userAgent.engine.isWebKit = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
      };
      goog.labs.userAgent.engine.isGecko = function() {
        return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
      };
      goog.labs.userAgent.engine.getVersion = function() {
        var a2 = goog.labs.userAgent.util.getUserAgent();
        if (a2) {
          a2 = goog.labs.userAgent.util.extractVersionTuples(a2);
          var b2 = goog.labs.userAgent.engine.getEngineTuple_(a2);
          if (b2)
            return "Gecko" == b2[0] ? goog.labs.userAgent.engine.getVersionForKey_(a2, "Firefox") : b2[1];
          a2 = a2[0];
          var c2;
          if (a2 && (c2 = a2[2]) && (c2 = /Trident\/([^\s;]+)/.exec(c2)))
            return c2[1];
        }
        return "";
      };
      goog.labs.userAgent.engine.getEngineTuple_ = function(a2) {
        if (!goog.labs.userAgent.engine.isEdge())
          return a2[1];
        for (var b2 = 0; b2 < a2.length; b2++) {
          var c2 = a2[b2];
          if ("Edge" == c2[0])
            return c2;
        }
      };
      goog.labs.userAgent.engine.isVersionOrHigher = function(a2) {
        return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), a2);
      };
      goog.labs.userAgent.engine.getVersionForKey_ = function(a2, b2) {
        return (a2 = goog.array.find(a2, function(a3) {
          return b2 == a3[0];
        })) && a2[1] || "";
      };
      goog.labs.userAgent.platform = {};
      goog.labs.userAgent.platform.isAndroid = function() {
        return goog.labs.userAgent.util.matchUserAgent("Android");
      };
      goog.labs.userAgent.platform.isIpod = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPod");
      };
      goog.labs.userAgent.platform.isIphone = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
      };
      goog.labs.userAgent.platform.isIpad = function() {
        return goog.labs.userAgent.util.matchUserAgent("iPad");
      };
      goog.labs.userAgent.platform.isIos = function() {
        return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
      };
      goog.labs.userAgent.platform.isMacintosh = function() {
        return goog.labs.userAgent.util.matchUserAgent("Macintosh");
      };
      goog.labs.userAgent.platform.isLinux = function() {
        return goog.labs.userAgent.util.matchUserAgent("Linux");
      };
      goog.labs.userAgent.platform.isWindows = function() {
        return goog.labs.userAgent.util.matchUserAgent("Windows");
      };
      goog.labs.userAgent.platform.isChromeOS = function() {
        return goog.labs.userAgent.util.matchUserAgent("CrOS");
      };
      goog.labs.userAgent.platform.isChromecast = function() {
        return goog.labs.userAgent.util.matchUserAgent("CrKey");
      };
      goog.labs.userAgent.platform.isKaiOS = function() {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
      };
      goog.labs.userAgent.platform.getVersion = function() {
        var a2 = goog.labs.userAgent.util.getUserAgent(), b2 = "";
        goog.labs.userAgent.platform.isWindows() ? (b2 = /Windows (?:NT|Phone) ([0-9.]+)/, b2 = (a2 = b2.exec(a2)) ? a2[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? (b2 = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b2 = (a2 = b2.exec(a2)) && a2[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? (b2 = /Mac OS X ([0-9_.]+)/, b2 = (a2 = b2.exec(a2)) ? a2[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isKaiOS() ? (b2 = /(?:KaiOS)\/(\S+)/i, b2 = (a2 = b2.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isAndroid() ? (b2 = /Android\s+([^\);]+)(\)|;)/, b2 = (a2 = b2.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isChromeOS() && (b2 = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b2 = (a2 = b2.exec(a2)) && a2[1]);
        return b2 || "";
      };
      goog.labs.userAgent.platform.isVersionOrHigher = function(a2) {
        return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), a2);
      };
      goog.reflect = {};
      goog.reflect.object = function(a2, b2) {
        return b2;
      };
      goog.reflect.objectProperty = function(a2, b2) {
        return a2;
      };
      goog.reflect.sinkValue = function(a2) {
        goog.reflect.sinkValue[" "](a2);
        return a2;
      };
      goog.reflect.sinkValue[" "] = goog.nullFunction;
      goog.reflect.canAccessProperty = function(a2, b2) {
        try {
          return goog.reflect.sinkValue(a2[b2]), true;
        } catch (c2) {
        }
        return false;
      };
      goog.reflect.cache = function(a2, b2, c2, d2) {
        d2 = d2 ? d2(b2) : b2;
        return Object.prototype.hasOwnProperty.call(a2, d2) ? a2[d2] : a2[d2] = c2(b2);
      };
      goog.userAgent = {};
      goog.userAgent.ASSUME_IE = false;
      goog.userAgent.ASSUME_EDGE = false;
      goog.userAgent.ASSUME_GECKO = false;
      goog.userAgent.ASSUME_WEBKIT = false;
      goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
      goog.userAgent.ASSUME_OPERA = false;
      goog.userAgent.ASSUME_ANY_VERSION = false;
      goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
      goog.userAgent.getUserAgentString = function() {
        return goog.labs.userAgent.util.getUserAgent();
      };
      goog.userAgent.getNavigatorTyped = function() {
        return goog.global.navigator || null;
      };
      goog.userAgent.getNavigator = function() {
        return goog.userAgent.getNavigatorTyped();
      };
      goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
      goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
      goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
      goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
      goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
      goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
      goog.userAgent.isMobile_ = function() {
        return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
      };
      goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
      goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
      goog.userAgent.determinePlatform_ = function() {
        var a2 = goog.userAgent.getNavigatorTyped();
        return a2 && a2.platform || "";
      };
      goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
      goog.userAgent.ASSUME_MAC = false;
      goog.userAgent.ASSUME_WINDOWS = false;
      goog.userAgent.ASSUME_LINUX = false;
      goog.userAgent.ASSUME_X11 = false;
      goog.userAgent.ASSUME_ANDROID = false;
      goog.userAgent.ASSUME_IPHONE = false;
      goog.userAgent.ASSUME_IPAD = false;
      goog.userAgent.ASSUME_IPOD = false;
      goog.userAgent.ASSUME_KAIOS = false;
      goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
      goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
      goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
      goog.userAgent.isLegacyLinux_ = function() {
        return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
      };
      goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
      goog.userAgent.isX11_ = function() {
        var a2 = goog.userAgent.getNavigatorTyped();
        return !!a2 && goog.string.contains(a2.appVersion || "", "X11");
      };
      goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
      goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
      goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
      goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
      goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
      goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
      goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
      goog.userAgent.determineVersion_ = function() {
        var a2 = "", b2 = goog.userAgent.getVersionRegexResult_();
        b2 && (a2 = b2 ? b2[1] : "");
        return goog.userAgent.IE && (b2 = goog.userAgent.getDocumentMode_(), null != b2 && b2 > parseFloat(a2)) ? String(b2) : a2;
      };
      goog.userAgent.getVersionRegexResult_ = function() {
        var a2 = goog.userAgent.getUserAgentString();
        if (goog.userAgent.GECKO)
          return /rv:([^\);]+)(\)|;)/.exec(a2);
        if (goog.userAgent.EDGE)
          return /Edge\/([\d\.]+)/.exec(a2);
        if (goog.userAgent.IE)
          return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a2);
        if (goog.userAgent.WEBKIT)
          return /WebKit\/(\S+)/.exec(a2);
        if (goog.userAgent.OPERA)
          return /(?:Version)[ \/]?(\S+)/.exec(a2);
      };
      goog.userAgent.getDocumentMode_ = function() {
        var a2 = goog.global.document;
        return a2 ? a2.documentMode : void 0;
      };
      goog.userAgent.VERSION = goog.userAgent.determineVersion_();
      goog.userAgent.compare = function(a2, b2) {
        return goog.string.compareVersions(a2, b2);
      };
      goog.userAgent.isVersionOrHigherCache_ = {};
      goog.userAgent.isVersionOrHigher = function(a2) {
        return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, a2, function() {
          return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a2);
        });
      };
      goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
      goog.userAgent.isDocumentModeOrHigher = function(a2) {
        return Number(goog.userAgent.DOCUMENT_MODE) >= a2;
      };
      goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
      goog.userAgent.DOCUMENT_MODE = function() {
        if (goog.global.document && goog.userAgent.IE) {
          var a2 = goog.userAgent.getDocumentMode_();
          return a2 ? a2 : parseInt(goog.userAgent.VERSION, 10) || void 0;
        }
      }();
      goog.userAgent.product = {};
      goog.userAgent.product.ASSUME_FIREFOX = false;
      goog.userAgent.product.ASSUME_IPHONE = false;
      goog.userAgent.product.ASSUME_IPAD = false;
      goog.userAgent.product.ASSUME_ANDROID = false;
      goog.userAgent.product.ASSUME_CHROME = false;
      goog.userAgent.product.ASSUME_SAFARI = false;
      goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
      goog.userAgent.product.OPERA = goog.userAgent.OPERA;
      goog.userAgent.product.IE = goog.userAgent.IE;
      goog.userAgent.product.EDGE = goog.userAgent.EDGE;
      goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
      goog.userAgent.product.isIphoneOrIpod_ = function() {
        return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
      };
      goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
      goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
      goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
      goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
      goog.userAgent.product.isSafariDesktop_ = function() {
        return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
      };
      goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
      goog.crypt.base64 = {};
      goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
      goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
      goog.crypt.base64.Alphabet = { DEFAULT: 0, NO_PADDING: 1, WEBSAFE: 2, WEBSAFE_DOT_PADDING: 3, WEBSAFE_NO_PADDING: 4 };
      goog.crypt.base64.paddingChars_ = "=.";
      goog.crypt.base64.isPadding_ = function(a2) {
        return goog.string.contains(goog.crypt.base64.paddingChars_, a2);
      };
      goog.crypt.base64.byteToCharMaps_ = {};
      goog.crypt.base64.charToByteMap_ = null;
      goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
      goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa;
      goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob;
      goog.crypt.base64.encodeByteArray = function(a2, b2) {
        goog.asserts.assert(goog.isArrayLike(a2), "encodeByteArray takes an array as a parameter");
        void 0 === b2 && (b2 = goog.crypt.base64.Alphabet.DEFAULT);
        goog.crypt.base64.init_();
        b2 = goog.crypt.base64.byteToCharMaps_[b2];
        for (var c2 = [], d2 = 0; d2 < a2.length; d2 += 3) {
          var e2 = a2[d2], f2 = d2 + 1 < a2.length, g = f2 ? a2[d2 + 1] : 0, h = d2 + 2 < a2.length, k = h ? a2[d2 + 2] : 0, l = e2 >> 2;
          e2 = (e2 & 3) << 4 | g >> 4;
          g = (g & 15) << 2 | k >> 6;
          k &= 63;
          h || (k = 64, f2 || (g = 64));
          c2.push(b2[l], b2[e2], b2[g] || "", b2[k] || "");
        }
        return c2.join("");
      };
      goog.crypt.base64.encodeString = function(a2, b2) {
        return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !b2 ? goog.global.btoa(a2) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a2), b2);
      };
      goog.crypt.base64.decodeString = function(a2, b2) {
        if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !b2)
          return goog.global.atob(a2);
        var c2 = "";
        goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
          c2 += String.fromCharCode(a3);
        });
        return c2;
      };
      goog.crypt.base64.decodeStringToByteArray = function(a2, b2) {
        var c2 = [];
        goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
          c2.push(a3);
        });
        return c2;
      };
      goog.crypt.base64.decodeStringToUint8Array = function(a2) {
        goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
        var b2 = a2.length, c2 = 3 * b2 / 4;
        c2 % 3 ? c2 = Math.floor(c2) : goog.crypt.base64.isPadding_(a2[b2 - 1]) && (c2 = goog.crypt.base64.isPadding_(a2[b2 - 2]) ? c2 - 2 : c2 - 1);
        var d2 = new Uint8Array(c2), e2 = 0;
        goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
          d2[e2++] = a3;
        });
        return d2.subarray(0, e2);
      };
      goog.crypt.base64.decodeStringInternal_ = function(a2, b2) {
        function c2(b3) {
          for (; d2 < a2.length; ) {
            var c3 = a2.charAt(d2++), e3 = goog.crypt.base64.charToByteMap_[c3];
            if (null != e3)
              return e3;
            if (!goog.string.isEmptyOrWhitespace(c3))
              throw Error("Unknown base64 encoding at char: " + c3);
          }
          return b3;
        }
        goog.crypt.base64.init_();
        for (var d2 = 0; ; ) {
          var e2 = c2(-1), f2 = c2(0), g = c2(64), h = c2(64);
          if (64 === h && -1 === e2)
            break;
          b2(e2 << 2 | f2 >> 4);
          64 != g && (b2(f2 << 4 & 240 | g >> 2), 64 != h && b2(g << 6 & 192 | h));
        }
      };
      goog.crypt.base64.init_ = function() {
        if (!goog.crypt.base64.charToByteMap_) {
          goog.crypt.base64.charToByteMap_ = {};
          for (var a2 = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), b2 = ["+/=", "+/", "-_=", "-_.", "-_"], c2 = 0; 5 > c2; c2++) {
            var d2 = a2.concat(b2[c2].split(""));
            goog.crypt.base64.byteToCharMaps_[c2] = d2;
            for (var e2 = 0; e2 < d2.length; e2++) {
              var f2 = d2[e2], g = goog.crypt.base64.charToByteMap_[f2];
              void 0 === g ? goog.crypt.base64.charToByteMap_[f2] = e2 : goog.asserts.assert(g === e2);
            }
          }
        }
      };
      jspb.utils = {};
      jspb.utils.split64Low = 0;
      jspb.utils.split64High = 0;
      jspb.utils.splitUint64 = function(a2) {
        var b2 = a2 >>> 0;
        a2 = Math.floor((a2 - b2) / jspb.BinaryConstants.TWO_TO_32) >>> 0;
        jspb.utils.split64Low = b2;
        jspb.utils.split64High = a2;
      };
      jspb.utils.splitInt64 = function(a2) {
        var b2 = 0 > a2;
        a2 = Math.abs(a2);
        var c2 = a2 >>> 0;
        a2 = Math.floor((a2 - c2) / jspb.BinaryConstants.TWO_TO_32);
        a2 >>>= 0;
        b2 && (a2 = ~a2 >>> 0, c2 = (~c2 >>> 0) + 1, 4294967295 < c2 && (c2 = 0, a2++, 4294967295 < a2 && (a2 = 0)));
        jspb.utils.split64Low = c2;
        jspb.utils.split64High = a2;
      };
      jspb.utils.splitZigzag64 = function(a2) {
        var b2 = 0 > a2;
        a2 = 2 * Math.abs(a2);
        jspb.utils.splitUint64(a2);
        a2 = jspb.utils.split64Low;
        var c2 = jspb.utils.split64High;
        b2 && (0 == a2 ? 0 == c2 ? c2 = a2 = 4294967295 : (c2--, a2 = 4294967295) : a2--);
        jspb.utils.split64Low = a2;
        jspb.utils.split64High = c2;
      };
      jspb.utils.splitFloat32 = function(a2) {
        var b2 = 0 > a2 ? 1 : 0;
        a2 = b2 ? -a2 : a2;
        if (0 === a2)
          0 < 1 / a2 ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648);
        else if (isNaN(a2))
          jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647;
        else if (a2 > jspb.BinaryConstants.FLOAT32_MAX)
          jspb.utils.split64High = 0, jspb.utils.split64Low = (b2 << 31 | 2139095040) >>> 0;
        else if (a2 < jspb.BinaryConstants.FLOAT32_MIN)
          a2 = Math.round(a2 / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (b2 << 31 | a2) >>> 0;
        else {
          var c2 = Math.floor(Math.log(a2) / Math.LN2);
          a2 *= Math.pow(2, -c2);
          a2 = Math.round(a2 * jspb.BinaryConstants.TWO_TO_23);
          16777216 <= a2 && ++c2;
          jspb.utils.split64High = 0;
          jspb.utils.split64Low = (b2 << 31 | c2 + 127 << 23 | a2 & 8388607) >>> 0;
        }
      };
      jspb.utils.splitFloat64 = function(a2) {
        var b2 = 0 > a2 ? 1 : 0;
        a2 = b2 ? -a2 : a2;
        if (0 === a2)
          jspb.utils.split64High = 0 < 1 / a2 ? 0 : 2147483648, jspb.utils.split64Low = 0;
        else if (isNaN(a2))
          jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295;
        else if (a2 > jspb.BinaryConstants.FLOAT64_MAX)
          jspb.utils.split64High = (b2 << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0;
        else if (a2 < jspb.BinaryConstants.FLOAT64_MIN) {
          var c2 = a2 / Math.pow(2, -1074);
          a2 = c2 / jspb.BinaryConstants.TWO_TO_32;
          jspb.utils.split64High = (b2 << 31 | a2) >>> 0;
          jspb.utils.split64Low = c2 >>> 0;
        } else {
          c2 = a2;
          var d2 = 0;
          if (2 <= c2)
            for (; 2 <= c2 && 1023 > d2; )
              d2++, c2 /= 2;
          else
            for (; 1 > c2 && -1022 < d2; )
              c2 *= 2, d2--;
          c2 = a2 * Math.pow(2, -d2);
          a2 = c2 * jspb.BinaryConstants.TWO_TO_20 & 1048575;
          c2 = c2 * jspb.BinaryConstants.TWO_TO_52 >>> 0;
          jspb.utils.split64High = (b2 << 31 | d2 + 1023 << 20 | a2) >>> 0;
          jspb.utils.split64Low = c2;
        }
      };
      jspb.utils.splitHash64 = function(a2) {
        var b2 = a2.charCodeAt(0), c2 = a2.charCodeAt(1), d2 = a2.charCodeAt(2), e2 = a2.charCodeAt(3), f2 = a2.charCodeAt(4), g = a2.charCodeAt(5), h = a2.charCodeAt(6);
        a2 = a2.charCodeAt(7);
        jspb.utils.split64Low = b2 + (c2 << 8) + (d2 << 16) + (e2 << 24) >>> 0;
        jspb.utils.split64High = f2 + (g << 8) + (h << 16) + (a2 << 24) >>> 0;
      };
      jspb.utils.joinUint64 = function(a2, b2) {
        return b2 * jspb.BinaryConstants.TWO_TO_32 + (a2 >>> 0);
      };
      jspb.utils.joinInt64 = function(a2, b2) {
        var c2 = b2 & 2147483648;
        c2 && (a2 = ~a2 + 1 >>> 0, b2 = ~b2 >>> 0, 0 == a2 && (b2 = b2 + 1 >>> 0));
        a2 = jspb.utils.joinUint64(a2, b2);
        return c2 ? -a2 : a2;
      };
      jspb.utils.toZigzag64 = function(a2, b2, c2) {
        var d2 = b2 >> 31;
        return c2(a2 << 1 ^ d2, (b2 << 1 | a2 >>> 31) ^ d2);
      };
      jspb.utils.joinZigzag64 = function(a2, b2) {
        return jspb.utils.fromZigzag64(a2, b2, jspb.utils.joinInt64);
      };
      jspb.utils.fromZigzag64 = function(a2, b2, c2) {
        var d2 = -(a2 & 1);
        return c2((a2 >>> 1 | b2 << 31) ^ d2, b2 >>> 1 ^ d2);
      };
      jspb.utils.joinFloat32 = function(a2, b2) {
        b2 = 2 * (a2 >> 31) + 1;
        var c2 = a2 >>> 23 & 255;
        a2 &= 8388607;
        return 255 == c2 ? a2 ? NaN : Infinity * b2 : 0 == c2 ? b2 * Math.pow(2, -149) * a2 : b2 * Math.pow(2, c2 - 150) * (a2 + Math.pow(2, 23));
      };
      jspb.utils.joinFloat64 = function(a2, b2) {
        var c2 = 2 * (b2 >> 31) + 1, d2 = b2 >>> 20 & 2047;
        a2 = jspb.BinaryConstants.TWO_TO_32 * (b2 & 1048575) + a2;
        return 2047 == d2 ? a2 ? NaN : Infinity * c2 : 0 == d2 ? c2 * Math.pow(2, -1074) * a2 : c2 * Math.pow(2, d2 - 1075) * (a2 + jspb.BinaryConstants.TWO_TO_52);
      };
      jspb.utils.joinHash64 = function(a2, b2) {
        return String.fromCharCode(a2 >>> 0 & 255, a2 >>> 8 & 255, a2 >>> 16 & 255, a2 >>> 24 & 255, b2 >>> 0 & 255, b2 >>> 8 & 255, b2 >>> 16 & 255, b2 >>> 24 & 255);
      };
      jspb.utils.DIGITS = "0123456789abcdef".split("");
      jspb.utils.ZERO_CHAR_CODE_ = 48;
      jspb.utils.A_CHAR_CODE_ = 97;
      jspb.utils.joinUnsignedDecimalString = function(a2, b2) {
        function c2(a3, b3) {
          a3 = a3 ? String(a3) : "";
          return b3 ? "0000000".slice(a3.length) + a3 : a3;
        }
        if (2097151 >= b2)
          return "" + jspb.utils.joinUint64(a2, b2);
        var d2 = (a2 >>> 24 | b2 << 8) >>> 0 & 16777215;
        b2 = b2 >> 16 & 65535;
        a2 = (a2 & 16777215) + 6777216 * d2 + 6710656 * b2;
        d2 += 8147497 * b2;
        b2 *= 2;
        1e7 <= a2 && (d2 += Math.floor(a2 / 1e7), a2 %= 1e7);
        1e7 <= d2 && (b2 += Math.floor(d2 / 1e7), d2 %= 1e7);
        return c2(b2, 0) + c2(d2, b2) + c2(a2, 1);
      };
      jspb.utils.joinSignedDecimalString = function(a2, b2) {
        var c2 = b2 & 2147483648;
        c2 && (a2 = ~a2 + 1 >>> 0, b2 = ~b2 + (0 == a2 ? 1 : 0) >>> 0);
        a2 = jspb.utils.joinUnsignedDecimalString(a2, b2);
        return c2 ? "-" + a2 : a2;
      };
      jspb.utils.hash64ToDecimalString = function(a2, b2) {
        jspb.utils.splitHash64(a2);
        a2 = jspb.utils.split64Low;
        var c2 = jspb.utils.split64High;
        return b2 ? jspb.utils.joinSignedDecimalString(a2, c2) : jspb.utils.joinUnsignedDecimalString(a2, c2);
      };
      jspb.utils.hash64ArrayToDecimalStrings = function(a2, b2) {
        for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
          c2[d2] = jspb.utils.hash64ToDecimalString(a2[d2], b2);
        return c2;
      };
      jspb.utils.decimalStringToHash64 = function(a2) {
        function b2(a3, b3) {
          for (var c3 = 0; 8 > c3 && (1 !== a3 || 0 < b3); c3++)
            b3 = a3 * e2[c3] + b3, e2[c3] = b3 & 255, b3 >>>= 8;
        }
        function c2() {
          for (var a3 = 0; 8 > a3; a3++)
            e2[a3] = ~e2[a3] & 255;
        }
        jspb.asserts.assert(0 < a2.length);
        var d2 = false;
        "-" === a2[0] && (d2 = true, a2 = a2.slice(1));
        for (var e2 = [0, 0, 0, 0, 0, 0, 0, 0], f2 = 0; f2 < a2.length; f2++)
          b2(10, a2.charCodeAt(f2) - jspb.utils.ZERO_CHAR_CODE_);
        d2 && (c2(), b2(1, 1));
        return goog.crypt.byteArrayToString(e2);
      };
      jspb.utils.splitDecimalString = function(a2) {
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a2));
      };
      jspb.utils.toHexDigit_ = function(a2) {
        return String.fromCharCode(10 > a2 ? jspb.utils.ZERO_CHAR_CODE_ + a2 : jspb.utils.A_CHAR_CODE_ - 10 + a2);
      };
      jspb.utils.fromHexCharCode_ = function(a2) {
        return a2 >= jspb.utils.A_CHAR_CODE_ ? a2 - jspb.utils.A_CHAR_CODE_ + 10 : a2 - jspb.utils.ZERO_CHAR_CODE_;
      };
      jspb.utils.hash64ToHexString = function(a2) {
        var b2 = Array(18);
        b2[0] = "0";
        b2[1] = "x";
        for (var c2 = 0; 8 > c2; c2++) {
          var d2 = a2.charCodeAt(7 - c2);
          b2[2 * c2 + 2] = jspb.utils.toHexDigit_(d2 >> 4);
          b2[2 * c2 + 3] = jspb.utils.toHexDigit_(d2 & 15);
        }
        return b2.join("");
      };
      jspb.utils.hexStringToHash64 = function(a2) {
        a2 = a2.toLowerCase();
        jspb.asserts.assert(18 == a2.length);
        jspb.asserts.assert("0" == a2[0]);
        jspb.asserts.assert("x" == a2[1]);
        for (var b2 = "", c2 = 0; 8 > c2; c2++) {
          var d2 = jspb.utils.fromHexCharCode_(a2.charCodeAt(2 * c2 + 2)), e2 = jspb.utils.fromHexCharCode_(a2.charCodeAt(2 * c2 + 3));
          b2 = String.fromCharCode(16 * d2 + e2) + b2;
        }
        return b2;
      };
      jspb.utils.hash64ToNumber = function(a2, b2) {
        jspb.utils.splitHash64(a2);
        a2 = jspb.utils.split64Low;
        var c2 = jspb.utils.split64High;
        return b2 ? jspb.utils.joinInt64(a2, c2) : jspb.utils.joinUint64(a2, c2);
      };
      jspb.utils.numberToHash64 = function(a2) {
        jspb.utils.splitInt64(a2);
        return jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.utils.countVarints = function(a2, b2, c2) {
        for (var d2 = 0, e2 = b2; e2 < c2; e2++)
          d2 += a2[e2] >> 7;
        return c2 - b2 - d2;
      };
      jspb.utils.countVarintFields = function(a2, b2, c2, d2) {
        var e2 = 0;
        d2 = 8 * d2 + jspb.BinaryConstants.WireType.VARINT;
        if (128 > d2)
          for (; b2 < c2 && a2[b2++] == d2; )
            for (e2++; ; ) {
              var f2 = a2[b2++];
              if (0 == (f2 & 128))
                break;
            }
        else
          for (; b2 < c2; ) {
            for (f2 = d2; 128 < f2; ) {
              if (a2[b2] != (f2 & 127 | 128))
                return e2;
              b2++;
              f2 >>= 7;
            }
            if (a2[b2++] != f2)
              break;
            for (e2++; f2 = a2[b2++], 0 != (f2 & 128); )
              ;
          }
        return e2;
      };
      jspb.utils.countFixedFields_ = function(a2, b2, c2, d2, e2) {
        var f2 = 0;
        if (128 > d2)
          for (; b2 < c2 && a2[b2++] == d2; )
            f2++, b2 += e2;
        else
          for (; b2 < c2; ) {
            for (var g = d2; 128 < g; ) {
              if (a2[b2++] != (g & 127 | 128))
                return f2;
              g >>= 7;
            }
            if (a2[b2++] != g)
              break;
            f2++;
            b2 += e2;
          }
        return f2;
      };
      jspb.utils.countFixed32Fields = function(a2, b2, c2, d2) {
        return jspb.utils.countFixedFields_(a2, b2, c2, 8 * d2 + jspb.BinaryConstants.WireType.FIXED32, 4);
      };
      jspb.utils.countFixed64Fields = function(a2, b2, c2, d2) {
        return jspb.utils.countFixedFields_(a2, b2, c2, 8 * d2 + jspb.BinaryConstants.WireType.FIXED64, 8);
      };
      jspb.utils.countDelimitedFields = function(a2, b2, c2, d2) {
        var e2 = 0;
        for (d2 = 8 * d2 + jspb.BinaryConstants.WireType.DELIMITED; b2 < c2; ) {
          for (var f2 = d2; 128 < f2; ) {
            if (a2[b2++] != (f2 & 127 | 128))
              return e2;
            f2 >>= 7;
          }
          if (a2[b2++] != f2)
            break;
          e2++;
          for (var g = 0, h = 1; f2 = a2[b2++], g += (f2 & 127) * h, h *= 128, 0 != (f2 & 128); )
            ;
          b2 += g;
        }
        return e2;
      };
      jspb.utils.debugBytesToTextFormat = function(a2) {
        var b2 = '"';
        if (a2) {
          a2 = jspb.utils.byteSourceToUint8Array(a2);
          for (var c2 = 0; c2 < a2.length; c2++)
            b2 += "\\x", 16 > a2[c2] && (b2 += "0"), b2 += a2[c2].toString(16);
        }
        return b2 + '"';
      };
      jspb.utils.debugScalarToTextFormat = function(a2) {
        return "string" === typeof a2 ? goog.string.quote(a2) : a2.toString();
      };
      jspb.utils.stringToByteArray = function(a2) {
        for (var b2 = new Uint8Array(a2.length), c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2.charCodeAt(c2);
          if (255 < d2)
            throw Error("Conversion error: string contains codepoint outside of byte range");
          b2[c2] = d2;
        }
        return b2;
      };
      jspb.utils.byteSourceToUint8Array = function(a2) {
        if (a2.constructor === Uint8Array)
          return a2;
        if (a2.constructor === ArrayBuffer || a2.constructor === Array)
          return new Uint8Array(a2);
        if (a2.constructor === String)
          return goog.crypt.base64.decodeStringToUint8Array(a2);
        if (a2 instanceof Uint8Array)
          return new Uint8Array(a2.buffer, a2.byteOffset, a2.byteLength);
        jspb.asserts.fail("Type not convertible to Uint8Array.");
        return new Uint8Array(0);
      };
      jspb.BinaryDecoder = function(a2, b2, c2) {
        this.bytes_ = null;
        this.cursor_ = this.end_ = this.start_ = 0;
        this.error_ = false;
        a2 && this.setBlock(a2, b2, c2);
      };
      jspb.BinaryDecoder.instanceCache_ = [];
      jspb.BinaryDecoder.alloc = function(a2, b2, c2) {
        if (jspb.BinaryDecoder.instanceCache_.length) {
          var d2 = jspb.BinaryDecoder.instanceCache_.pop();
          a2 && d2.setBlock(a2, b2, c2);
          return d2;
        }
        return new jspb.BinaryDecoder(a2, b2, c2);
      };
      jspb.BinaryDecoder.prototype.free = function() {
        this.clear();
        100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this);
      };
      jspb.BinaryDecoder.prototype.clone = function() {
        return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_);
      };
      jspb.BinaryDecoder.prototype.clear = function() {
        this.bytes_ = null;
        this.cursor_ = this.end_ = this.start_ = 0;
        this.error_ = false;
      };
      jspb.BinaryDecoder.prototype.getBuffer = function() {
        return this.bytes_;
      };
      jspb.BinaryDecoder.prototype.setBlock = function(a2, b2, c2) {
        this.bytes_ = jspb.utils.byteSourceToUint8Array(a2);
        this.start_ = void 0 !== b2 ? b2 : 0;
        this.end_ = void 0 !== c2 ? this.start_ + c2 : this.bytes_.length;
        this.cursor_ = this.start_;
      };
      jspb.BinaryDecoder.prototype.getEnd = function() {
        return this.end_;
      };
      jspb.BinaryDecoder.prototype.setEnd = function(a2) {
        this.end_ = a2;
      };
      jspb.BinaryDecoder.prototype.reset = function() {
        this.cursor_ = this.start_;
      };
      jspb.BinaryDecoder.prototype.getCursor = function() {
        return this.cursor_;
      };
      jspb.BinaryDecoder.prototype.setCursor = function(a2) {
        this.cursor_ = a2;
      };
      jspb.BinaryDecoder.prototype.advance = function(a2) {
        this.cursor_ += a2;
        jspb.asserts.assert(this.cursor_ <= this.end_);
      };
      jspb.BinaryDecoder.prototype.atEnd = function() {
        return this.cursor_ == this.end_;
      };
      jspb.BinaryDecoder.prototype.pastEnd = function() {
        return this.cursor_ > this.end_;
      };
      jspb.BinaryDecoder.prototype.getError = function() {
        return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
      };
      jspb.BinaryDecoder.prototype.readSplitVarint64 = function(a2) {
        for (var b2 = 128, c2 = 0, d2 = 0, e2 = 0; 4 > e2 && 128 <= b2; e2++)
          b2 = this.bytes_[this.cursor_++], c2 |= (b2 & 127) << 7 * e2;
        128 <= b2 && (b2 = this.bytes_[this.cursor_++], c2 |= (b2 & 127) << 28, d2 |= (b2 & 127) >> 4);
        if (128 <= b2)
          for (e2 = 0; 5 > e2 && 128 <= b2; e2++)
            b2 = this.bytes_[this.cursor_++], d2 |= (b2 & 127) << 7 * e2 + 3;
        if (128 > b2)
          return a2(c2 >>> 0, d2 >>> 0);
        jspb.asserts.fail("Failed to read varint, encoding is invalid.");
        this.error_ = true;
      };
      jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(a2) {
        return this.readSplitVarint64(function(b2, c2) {
          return jspb.utils.fromZigzag64(b2, c2, a2);
        });
      };
      jspb.BinaryDecoder.prototype.readSplitFixed64 = function(a2) {
        var b2 = this.bytes_, c2 = this.cursor_;
        this.cursor_ += 8;
        for (var d2 = 0, e2 = 0, f2 = c2 + 7; f2 >= c2; f2--)
          d2 = d2 << 8 | b2[f2], e2 = e2 << 8 | b2[f2 + 4];
        return a2(d2, e2);
      };
      jspb.BinaryDecoder.prototype.skipVarint = function() {
        for (; this.bytes_[this.cursor_] & 128; )
          this.cursor_++;
        this.cursor_++;
      };
      jspb.BinaryDecoder.prototype.unskipVarint = function(a2) {
        for (; 128 < a2; )
          this.cursor_--, a2 >>>= 7;
        this.cursor_--;
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
        var a2 = this.bytes_;
        var b2 = a2[this.cursor_ + 0];
        var c2 = b2 & 127;
        if (128 > b2)
          return this.cursor_ += 1, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 1];
        c2 |= (b2 & 127) << 7;
        if (128 > b2)
          return this.cursor_ += 2, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 2];
        c2 |= (b2 & 127) << 14;
        if (128 > b2)
          return this.cursor_ += 3, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 3];
        c2 |= (b2 & 127) << 21;
        if (128 > b2)
          return this.cursor_ += 4, jspb.asserts.assert(this.cursor_ <= this.end_), c2;
        b2 = a2[this.cursor_ + 4];
        c2 |= (b2 & 15) << 28;
        if (128 > b2)
          return this.cursor_ += 5, jspb.asserts.assert(this.cursor_ <= this.end_), c2 >>> 0;
        this.cursor_ += 5;
        128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && 128 <= a2[this.cursor_++] && jspb.asserts.assert(false);
        jspb.asserts.assert(this.cursor_ <= this.end_);
        return c2;
      };
      jspb.BinaryDecoder.prototype.readSignedVarint32 = function() {
        return ~~this.readUnsignedVarint32();
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
        return this.readUnsignedVarint32().toString();
      };
      jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
        return this.readSignedVarint32().toString();
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
        var a2 = this.readUnsignedVarint32();
        return a2 >>> 1 ^ -(a2 & 1);
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinUint64);
      };
      jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
        return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinInt64);
      };
      jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
        return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
        return this.readSplitVarint64(jspb.utils.joinZigzag64);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
        return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
      };
      jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
        return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString);
      };
      jspb.BinaryDecoder.prototype.readUint8 = function() {
        var a2 = this.bytes_[this.cursor_ + 0];
        this.cursor_ += 1;
        jspb.asserts.assert(this.cursor_ <= this.end_);
        return a2;
      };
      jspb.BinaryDecoder.prototype.readUint16 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1];
        this.cursor_ += 2;
        jspb.asserts.assert(this.cursor_ <= this.end_);
        return a2 << 0 | b2 << 8;
      };
      jspb.BinaryDecoder.prototype.readUint32 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1], c2 = this.bytes_[this.cursor_ + 2], d2 = this.bytes_[this.cursor_ + 3];
        this.cursor_ += 4;
        jspb.asserts.assert(this.cursor_ <= this.end_);
        return (a2 << 0 | b2 << 8 | c2 << 16 | d2 << 24) >>> 0;
      };
      jspb.BinaryDecoder.prototype.readUint64 = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinUint64(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readUint64String = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinUnsignedDecimalString(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readInt8 = function() {
        var a2 = this.bytes_[this.cursor_ + 0];
        this.cursor_ += 1;
        jspb.asserts.assert(this.cursor_ <= this.end_);
        return a2 << 24 >> 24;
      };
      jspb.BinaryDecoder.prototype.readInt16 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1];
        this.cursor_ += 2;
        jspb.asserts.assert(this.cursor_ <= this.end_);
        return (a2 << 0 | b2 << 8) << 16 >> 16;
      };
      jspb.BinaryDecoder.prototype.readInt32 = function() {
        var a2 = this.bytes_[this.cursor_ + 0], b2 = this.bytes_[this.cursor_ + 1], c2 = this.bytes_[this.cursor_ + 2], d2 = this.bytes_[this.cursor_ + 3];
        this.cursor_ += 4;
        jspb.asserts.assert(this.cursor_ <= this.end_);
        return a2 << 0 | b2 << 8 | c2 << 16 | d2 << 24;
      };
      jspb.BinaryDecoder.prototype.readInt64 = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinInt64(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readInt64String = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinSignedDecimalString(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readFloat = function() {
        var a2 = this.readUint32();
        return jspb.utils.joinFloat32(a2, 0);
      };
      jspb.BinaryDecoder.prototype.readDouble = function() {
        var a2 = this.readUint32(), b2 = this.readUint32();
        return jspb.utils.joinFloat64(a2, b2);
      };
      jspb.BinaryDecoder.prototype.readBool = function() {
        return !!this.bytes_[this.cursor_++];
      };
      jspb.BinaryDecoder.prototype.readEnum = function() {
        return this.readSignedVarint32();
      };
      jspb.BinaryDecoder.prototype.readString = function(a2) {
        var b2 = this.bytes_, c2 = this.cursor_;
        a2 = c2 + a2;
        for (var d2 = [], e2 = ""; c2 < a2; ) {
          var f2 = b2[c2++];
          if (128 > f2)
            d2.push(f2);
          else if (192 > f2)
            continue;
          else if (224 > f2) {
            var g = b2[c2++];
            d2.push((f2 & 31) << 6 | g & 63);
          } else if (240 > f2) {
            g = b2[c2++];
            var h = b2[c2++];
            d2.push((f2 & 15) << 12 | (g & 63) << 6 | h & 63);
          } else if (248 > f2) {
            g = b2[c2++];
            h = b2[c2++];
            var k = b2[c2++];
            f2 = (f2 & 7) << 18 | (g & 63) << 12 | (h & 63) << 6 | k & 63;
            f2 -= 65536;
            d2.push((f2 >> 10 & 1023) + 55296, (f2 & 1023) + 56320);
          }
          8192 <= d2.length && (e2 += String.fromCharCode.apply(null, d2), d2.length = 0);
        }
        e2 += goog.crypt.byteArrayToString(d2);
        this.cursor_ = c2;
        return e2;
      };
      jspb.BinaryDecoder.prototype.readStringWithLength = function() {
        var a2 = this.readUnsignedVarint32();
        return this.readString(a2);
      };
      jspb.BinaryDecoder.prototype.readBytes = function(a2) {
        if (0 > a2 || this.cursor_ + a2 > this.bytes_.length)
          return this.error_ = true, jspb.asserts.fail("Invalid byte length!"), new Uint8Array(0);
        var b2 = this.bytes_.subarray(this.cursor_, this.cursor_ + a2);
        this.cursor_ += a2;
        jspb.asserts.assert(this.cursor_ <= this.end_);
        return b2;
      };
      jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
        return this.readSplitVarint64(jspb.utils.joinHash64);
      };
      jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
        var a2 = this.bytes_, b2 = this.cursor_, c2 = a2[b2 + 0], d2 = a2[b2 + 1], e2 = a2[b2 + 2], f2 = a2[b2 + 3], g = a2[b2 + 4], h = a2[b2 + 5], k = a2[b2 + 6];
        a2 = a2[b2 + 7];
        this.cursor_ += 8;
        return String.fromCharCode(c2, d2, e2, f2, g, h, k, a2);
      };
      jspb.BinaryReader = function(a2, b2, c2) {
        this.decoder_ = jspb.BinaryDecoder.alloc(a2, b2, c2);
        this.fieldCursor_ = this.decoder_.getCursor();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
        this.error_ = false;
        this.readCallbacks_ = null;
      };
      jspb.BinaryReader.instanceCache_ = [];
      jspb.BinaryReader.alloc = function(a2, b2, c2) {
        if (jspb.BinaryReader.instanceCache_.length) {
          var d2 = jspb.BinaryReader.instanceCache_.pop();
          a2 && d2.decoder_.setBlock(a2, b2, c2);
          return d2;
        }
        return new jspb.BinaryReader(a2, b2, c2);
      };
      jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc;
      jspb.BinaryReader.prototype.free = function() {
        this.decoder_.clear();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
        this.error_ = false;
        this.readCallbacks_ = null;
        100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this);
      };
      jspb.BinaryReader.prototype.getFieldCursor = function() {
        return this.fieldCursor_;
      };
      jspb.BinaryReader.prototype.getCursor = function() {
        return this.decoder_.getCursor();
      };
      jspb.BinaryReader.prototype.getBuffer = function() {
        return this.decoder_.getBuffer();
      };
      jspb.BinaryReader.prototype.getFieldNumber = function() {
        return this.nextField_;
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "getFieldNumber", jspb.BinaryReader.prototype.getFieldNumber);
      jspb.BinaryReader.prototype.getWireType = function() {
        return this.nextWireType_;
      };
      jspb.BinaryReader.prototype.isDelimited = function() {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "isDelimited", jspb.BinaryReader.prototype.isDelimited);
      jspb.BinaryReader.prototype.isEndGroup = function() {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "isEndGroup", jspb.BinaryReader.prototype.isEndGroup);
      jspb.BinaryReader.prototype.getError = function() {
        return this.error_ || this.decoder_.getError();
      };
      jspb.BinaryReader.prototype.setBlock = function(a2, b2, c2) {
        this.decoder_.setBlock(a2, b2, c2);
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      };
      jspb.BinaryReader.prototype.reset = function() {
        this.decoder_.reset();
        this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
        this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
      };
      jspb.BinaryReader.prototype.advance = function(a2) {
        this.decoder_.advance(a2);
      };
      jspb.BinaryReader.prototype.nextField = function() {
        if (this.decoder_.atEnd())
          return false;
        if (this.getError())
          return jspb.asserts.fail("Decoder hit an error"), false;
        this.fieldCursor_ = this.decoder_.getCursor();
        var a2 = this.decoder_.readUnsignedVarint32(), b2 = a2 >>> 3;
        a2 &= 7;
        if (a2 != jspb.BinaryConstants.WireType.VARINT && a2 != jspb.BinaryConstants.WireType.FIXED32 && a2 != jspb.BinaryConstants.WireType.FIXED64 && a2 != jspb.BinaryConstants.WireType.DELIMITED && a2 != jspb.BinaryConstants.WireType.START_GROUP && a2 != jspb.BinaryConstants.WireType.END_GROUP)
          return jspb.asserts.fail(
            "Invalid wire type: %s (at position %s)",
            a2,
            this.fieldCursor_
          ), this.error_ = true, false;
        this.nextField_ = b2;
        this.nextWireType_ = a2;
        return true;
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "nextField", jspb.BinaryReader.prototype.nextField);
      jspb.BinaryReader.prototype.unskipHeader = function() {
        this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_);
      };
      jspb.BinaryReader.prototype.skipMatchingFields = function() {
        var a2 = this.nextField_;
        for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == a2; )
          this.skipField();
        this.decoder_.atEnd() || this.unskipHeader();
      };
      jspb.BinaryReader.prototype.skipVarintField = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (jspb.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint();
      };
      jspb.BinaryReader.prototype.skipDelimitedField = function() {
        if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
          jspb.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
        else {
          var a2 = this.decoder_.readUnsignedVarint32();
          this.decoder_.advance(a2);
        }
      };
      jspb.BinaryReader.prototype.skipFixed32Field = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (jspb.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4);
      };
      jspb.BinaryReader.prototype.skipFixed64Field = function() {
        this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (jspb.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8);
      };
      jspb.BinaryReader.prototype.skipGroup = function() {
        var a2 = this.nextField_;
        do {
          if (!this.nextField()) {
            jspb.asserts.fail("Unmatched start-group tag: stream EOF");
            this.error_ = true;
            break;
          }
          if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
            this.nextField_ != a2 && (jspb.asserts.fail("Unmatched end-group tag"), this.error_ = true);
            break;
          }
          this.skipField();
        } while (1);
      };
      jspb.BinaryReader.prototype.skipField = function() {
        switch (this.nextWireType_) {
          case jspb.BinaryConstants.WireType.VARINT:
            this.skipVarintField();
            break;
          case jspb.BinaryConstants.WireType.FIXED64:
            this.skipFixed64Field();
            break;
          case jspb.BinaryConstants.WireType.DELIMITED:
            this.skipDelimitedField();
            break;
          case jspb.BinaryConstants.WireType.FIXED32:
            this.skipFixed32Field();
            break;
          case jspb.BinaryConstants.WireType.START_GROUP:
            this.skipGroup();
            break;
          default:
            jspb.asserts.fail("Invalid wire encoding for field.");
        }
      };
      jspb.BinaryReader.prototype.registerReadCallback = function(a2, b2) {
        null === this.readCallbacks_ && (this.readCallbacks_ = {});
        jspb.asserts.assert(!this.readCallbacks_[a2]);
        this.readCallbacks_[a2] = b2;
      };
      jspb.BinaryReader.prototype.runReadCallback = function(a2) {
        jspb.asserts.assert(null !== this.readCallbacks_);
        a2 = this.readCallbacks_[a2];
        jspb.asserts.assert(a2);
        return a2(this);
      };
      jspb.BinaryReader.prototype.readAny = function(a2) {
        this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(a2);
        var b2 = jspb.BinaryConstants.FieldType;
        switch (a2) {
          case b2.DOUBLE:
            return this.readDouble();
          case b2.FLOAT:
            return this.readFloat();
          case b2.INT64:
            return this.readInt64();
          case b2.UINT64:
            return this.readUint64();
          case b2.INT32:
            return this.readInt32();
          case b2.FIXED64:
            return this.readFixed64();
          case b2.FIXED32:
            return this.readFixed32();
          case b2.BOOL:
            return this.readBool();
          case b2.STRING:
            return this.readString();
          case b2.GROUP:
            jspb.asserts.fail("Group field type not supported in readAny()");
          case b2.MESSAGE:
            jspb.asserts.fail("Message field type not supported in readAny()");
          case b2.BYTES:
            return this.readBytes();
          case b2.UINT32:
            return this.readUint32();
          case b2.ENUM:
            return this.readEnum();
          case b2.SFIXED32:
            return this.readSfixed32();
          case b2.SFIXED64:
            return this.readSfixed64();
          case b2.SINT32:
            return this.readSint32();
          case b2.SINT64:
            return this.readSint64();
          case b2.FHASH64:
            return this.readFixedHash64();
          case b2.VHASH64:
            return this.readVarintHash64();
          default:
            jspb.asserts.fail("Invalid field type in readAny()");
        }
        return 0;
      };
      jspb.BinaryReader.prototype.readMessage = function(a2, b2) {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var c2 = this.decoder_.getEnd(), d2 = this.decoder_.readUnsignedVarint32();
        d2 = this.decoder_.getCursor() + d2;
        this.decoder_.setEnd(d2);
        b2(a2, this);
        this.decoder_.setCursor(d2);
        this.decoder_.setEnd(c2);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readMessage", jspb.BinaryReader.prototype.readMessage);
      jspb.BinaryReader.prototype.readGroup = function(a2, b2, c2) {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP);
        jspb.asserts.assert(this.nextField_ == a2);
        c2(b2, this);
        this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (jspb.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = true);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readGroup", jspb.BinaryReader.prototype.readGroup);
      jspb.BinaryReader.prototype.getFieldDecoder = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a2 = this.decoder_.readUnsignedVarint32(), b2 = this.decoder_.getCursor(), c2 = b2 + a2;
        a2 = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), b2, a2);
        this.decoder_.setCursor(c2);
        return a2;
      };
      jspb.BinaryReader.prototype.readInt32 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint32();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readInt32", jspb.BinaryReader.prototype.readInt32);
      jspb.BinaryReader.prototype.readInt32String = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint32String();
      };
      jspb.BinaryReader.prototype.readInt64 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readInt64", jspb.BinaryReader.prototype.readInt64);
      jspb.BinaryReader.prototype.readInt64String = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64String();
      };
      jspb.BinaryReader.prototype.readUint32 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint32();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readUint32", jspb.BinaryReader.prototype.readUint32);
      jspb.BinaryReader.prototype.readUint32String = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint32String();
      };
      jspb.BinaryReader.prototype.readUint64 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint64();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readUint64", jspb.BinaryReader.prototype.readUint64);
      jspb.BinaryReader.prototype.readUint64String = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readUnsignedVarint64String();
      };
      jspb.BinaryReader.prototype.readSint32 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint32();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readSint32", jspb.BinaryReader.prototype.readSint32);
      jspb.BinaryReader.prototype.readSint64 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint64();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readSint64", jspb.BinaryReader.prototype.readSint64);
      jspb.BinaryReader.prototype.readSint64String = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarint64String();
      };
      jspb.BinaryReader.prototype.readFixed32 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readUint32();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readFixed32", jspb.BinaryReader.prototype.readFixed32);
      jspb.BinaryReader.prototype.readFixed64 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readUint64();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readFixed64", jspb.BinaryReader.prototype.readFixed64);
      jspb.BinaryReader.prototype.readFixed64String = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readUint64String();
      };
      jspb.BinaryReader.prototype.readSfixed32 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readInt32();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed32", jspb.BinaryReader.prototype.readSfixed32);
      jspb.BinaryReader.prototype.readSfixed32String = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readInt32().toString();
      };
      jspb.BinaryReader.prototype.readSfixed64 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readInt64();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readSfixed64", jspb.BinaryReader.prototype.readSfixed64);
      jspb.BinaryReader.prototype.readSfixed64String = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readInt64String();
      };
      jspb.BinaryReader.prototype.readFloat = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
        return this.decoder_.readFloat();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readFloat", jspb.BinaryReader.prototype.readFloat);
      jspb.BinaryReader.prototype.readDouble = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readDouble();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readDouble", jspb.BinaryReader.prototype.readDouble);
      jspb.BinaryReader.prototype.readBool = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return !!this.decoder_.readUnsignedVarint32();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readBool", jspb.BinaryReader.prototype.readBool);
      jspb.BinaryReader.prototype.readEnum = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSignedVarint64();
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readEnum", jspb.BinaryReader.prototype.readEnum);
      jspb.BinaryReader.prototype.readString = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a2 = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readString(a2);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readString", jspb.BinaryReader.prototype.readString);
      jspb.BinaryReader.prototype.readBytes = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var a2 = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readBytes(a2);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readBytes", jspb.BinaryReader.prototype.readBytes);
      jspb.BinaryReader.prototype.readVarintHash64 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readVarintHash64();
      };
      jspb.BinaryReader.prototype.readSintHash64 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readZigzagVarintHash64();
      };
      jspb.BinaryReader.prototype.readSplitVarint64 = function(a2) {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSplitVarint64(a2);
      };
      jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(a2) {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
        return this.decoder_.readSplitVarint64(function(b2, c2) {
          return jspb.utils.fromZigzag64(b2, c2, a2);
        });
      };
      jspb.BinaryReader.prototype.readFixedHash64 = function() {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readFixedHash64();
      };
      jspb.BinaryReader.prototype.readSplitFixed64 = function(a2) {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
        return this.decoder_.readSplitFixed64(a2);
      };
      jspb.BinaryReader.prototype.readPackedField_ = function(a2) {
        jspb.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
        var b2 = this.decoder_.readUnsignedVarint32();
        b2 = this.decoder_.getCursor() + b2;
        for (var c2 = []; this.decoder_.getCursor() < b2; )
          c2.push(a2.call(this.decoder_));
        return c2;
      };
      jspb.BinaryReader.prototype.readPackedInt32 = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint32);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt32", jspb.BinaryReader.prototype.readPackedInt32);
      jspb.BinaryReader.prototype.readPackedInt32String = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint32String);
      };
      jspb.BinaryReader.prototype.readPackedInt64 = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint64);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedInt64", jspb.BinaryReader.prototype.readPackedInt64);
      jspb.BinaryReader.prototype.readPackedInt64String = function() {
        return this.readPackedField_(this.decoder_.readSignedVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedUint32 = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint32", jspb.BinaryReader.prototype.readPackedUint32);
      jspb.BinaryReader.prototype.readPackedUint32String = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
      };
      jspb.BinaryReader.prototype.readPackedUint64 = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedUint64", jspb.BinaryReader.prototype.readPackedUint64);
      jspb.BinaryReader.prototype.readPackedUint64String = function() {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedSint32 = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint32);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint32", jspb.BinaryReader.prototype.readPackedSint32);
      jspb.BinaryReader.prototype.readPackedSint64 = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint64);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSint64", jspb.BinaryReader.prototype.readPackedSint64);
      jspb.BinaryReader.prototype.readPackedSint64String = function() {
        return this.readPackedField_(this.decoder_.readZigzagVarint64String);
      };
      jspb.BinaryReader.prototype.readPackedFixed32 = function() {
        return this.readPackedField_(this.decoder_.readUint32);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed32", jspb.BinaryReader.prototype.readPackedFixed32);
      jspb.BinaryReader.prototype.readPackedFixed64 = function() {
        return this.readPackedField_(this.decoder_.readUint64);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFixed64", jspb.BinaryReader.prototype.readPackedFixed64);
      jspb.BinaryReader.prototype.readPackedFixed64String = function() {
        return this.readPackedField_(this.decoder_.readUint64String);
      };
      jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
        return this.readPackedField_(this.decoder_.readInt32);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed32", jspb.BinaryReader.prototype.readPackedSfixed32);
      jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
        return this.readPackedField_(this.decoder_.readInt64);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedSfixed64", jspb.BinaryReader.prototype.readPackedSfixed64);
      jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
        return this.readPackedField_(this.decoder_.readInt64String);
      };
      jspb.BinaryReader.prototype.readPackedFloat = function() {
        return this.readPackedField_(this.decoder_.readFloat);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedFloat", jspb.BinaryReader.prototype.readPackedFloat);
      jspb.BinaryReader.prototype.readPackedDouble = function() {
        return this.readPackedField_(this.decoder_.readDouble);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedDouble", jspb.BinaryReader.prototype.readPackedDouble);
      jspb.BinaryReader.prototype.readPackedBool = function() {
        return this.readPackedField_(this.decoder_.readBool);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedBool", jspb.BinaryReader.prototype.readPackedBool);
      jspb.BinaryReader.prototype.readPackedEnum = function() {
        return this.readPackedField_(this.decoder_.readEnum);
      };
      goog.exportProperty(jspb.BinaryReader.prototype, "readPackedEnum", jspb.BinaryReader.prototype.readPackedEnum);
      jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
        return this.readPackedField_(this.decoder_.readVarintHash64);
      };
      jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
        return this.readPackedField_(this.decoder_.readFixedHash64);
      };
      jspb.BinaryEncoder = function() {
        this.buffer_ = [];
      };
      jspb.BinaryEncoder.prototype.length = function() {
        return this.buffer_.length;
      };
      jspb.BinaryEncoder.prototype.end = function() {
        var a2 = this.buffer_;
        this.buffer_ = [];
        return a2;
      };
      jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(a2, b2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(b2 == Math.floor(b2));
        jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
        for (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32); 0 < b2 || 127 < a2; )
          this.buffer_.push(a2 & 127 | 128), a2 = (a2 >>> 7 | b2 << 25) >>> 0, b2 >>>= 7;
        this.buffer_.push(a2);
      };
      jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(a2, b2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(b2 == Math.floor(b2));
        jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
        jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32);
        this.writeUint32(a2);
        this.writeUint32(b2);
      };
      jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        for (jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32); 127 < a2; )
          this.buffer_.push(a2 & 127 | 128), a2 >>>= 7;
        this.buffer_.push(a2);
      };
      jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        if (0 <= a2)
          this.writeUnsignedVarint32(a2);
        else {
          for (var b2 = 0; 9 > b2; b2++)
            this.buffer_.push(a2 & 127 | 128), a2 >>= 7;
          this.buffer_.push(1);
        }
      };
      jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_64);
        jspb.utils.splitInt64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitInt64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        this.writeUnsignedVarint32((a2 << 1 ^ a2 >> 31) >>> 0);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitZigzag64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(a2) {
        this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a2));
      };
      jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(a2) {
        var b2 = this;
        jspb.utils.splitHash64(a2);
        jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, function(a3, d2) {
          b2.writeSplitVarint64(a3 >>> 0, d2 >>> 0);
        });
      };
      jspb.BinaryEncoder.prototype.writeUint8 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(0 <= a2 && 256 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint16 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(0 <= a2 && 65536 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint32 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_32);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
        this.buffer_.push(a2 >>> 16 & 255);
        this.buffer_.push(a2 >>> 24 & 255);
      };
      jspb.BinaryEncoder.prototype.writeUint64 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(0 <= a2 && a2 < jspb.BinaryConstants.TWO_TO_64);
        jspb.utils.splitUint64(a2);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeInt8 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(-128 <= a2 && 128 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt16 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(-32768 <= a2 && 32768 > a2);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt32 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        this.buffer_.push(a2 >>> 0 & 255);
        this.buffer_.push(a2 >>> 8 & 255);
        this.buffer_.push(a2 >>> 16 & 255);
        this.buffer_.push(a2 >>> 24 & 255);
      };
      jspb.BinaryEncoder.prototype.writeInt64 = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_63 && a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitInt64(a2);
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeInt64String = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(+a2 >= -jspb.BinaryConstants.TWO_TO_63 && +a2 < jspb.BinaryConstants.TWO_TO_63);
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a2));
        this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeFloat = function(a2) {
        jspb.asserts.assert(Infinity === a2 || -Infinity === a2 || isNaN(a2) || a2 >= -jspb.BinaryConstants.FLOAT32_MAX && a2 <= jspb.BinaryConstants.FLOAT32_MAX);
        jspb.utils.splitFloat32(a2);
        this.writeUint32(jspb.utils.split64Low);
      };
      jspb.BinaryEncoder.prototype.writeDouble = function(a2) {
        jspb.asserts.assert(Infinity === a2 || -Infinity === a2 || isNaN(a2) || a2 >= -jspb.BinaryConstants.FLOAT64_MAX && a2 <= jspb.BinaryConstants.FLOAT64_MAX);
        jspb.utils.splitFloat64(a2);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeBool = function(a2) {
        jspb.asserts.assert("boolean" === typeof a2 || "number" === typeof a2);
        this.buffer_.push(a2 ? 1 : 0);
      };
      jspb.BinaryEncoder.prototype.writeEnum = function(a2) {
        jspb.asserts.assert(a2 == Math.floor(a2));
        jspb.asserts.assert(a2 >= -jspb.BinaryConstants.TWO_TO_31 && a2 < jspb.BinaryConstants.TWO_TO_31);
        this.writeSignedVarint32(a2);
      };
      jspb.BinaryEncoder.prototype.writeBytes = function(a2) {
        this.buffer_.push.apply(this.buffer_, a2);
      };
      jspb.BinaryEncoder.prototype.writeVarintHash64 = function(a2) {
        jspb.utils.splitHash64(a2);
        this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeFixedHash64 = function(a2) {
        jspb.utils.splitHash64(a2);
        this.writeUint32(jspb.utils.split64Low);
        this.writeUint32(jspb.utils.split64High);
      };
      jspb.BinaryEncoder.prototype.writeString = function(a2) {
        var b2 = this.buffer_.length;
        jspb.asserts.assertString(a2);
        for (var c2 = 0; c2 < a2.length; c2++) {
          var d2 = a2.charCodeAt(c2);
          if (128 > d2)
            this.buffer_.push(d2);
          else if (2048 > d2)
            this.buffer_.push(d2 >> 6 | 192), this.buffer_.push(d2 & 63 | 128);
          else if (65536 > d2)
            if (55296 <= d2 && 56319 >= d2 && c2 + 1 < a2.length) {
              var e2 = a2.charCodeAt(c2 + 1);
              56320 <= e2 && 57343 >= e2 && (d2 = 1024 * (d2 - 55296) + e2 - 56320 + 65536, this.buffer_.push(d2 >> 18 | 240), this.buffer_.push(d2 >> 12 & 63 | 128), this.buffer_.push(d2 >> 6 & 63 | 128), this.buffer_.push(d2 & 63 | 128), c2++);
            } else
              this.buffer_.push(d2 >> 12 | 224), this.buffer_.push(d2 >> 6 & 63 | 128), this.buffer_.push(d2 & 63 | 128);
        }
        return this.buffer_.length - b2;
      };
      jspb.arith = {};
      jspb.arith.UInt64 = function(a2, b2) {
        this.lo = a2;
        this.hi = b2;
      };
      jspb.arith.UInt64.prototype.cmp = function(a2) {
        return this.hi < a2.hi || this.hi == a2.hi && this.lo < a2.lo ? -1 : this.hi == a2.hi && this.lo == a2.lo ? 0 : 1;
      };
      jspb.arith.UInt64.prototype.rightShift = function() {
        return new jspb.arith.UInt64((this.lo >>> 1 | (this.hi & 1) << 31) >>> 0, this.hi >>> 1 >>> 0);
      };
      jspb.arith.UInt64.prototype.leftShift = function() {
        return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0);
      };
      jspb.arith.UInt64.prototype.msb = function() {
        return !!(this.hi & 2147483648);
      };
      jspb.arith.UInt64.prototype.lsb = function() {
        return !!(this.lo & 1);
      };
      jspb.arith.UInt64.prototype.zero = function() {
        return 0 == this.lo && 0 == this.hi;
      };
      jspb.arith.UInt64.prototype.add = function(a2) {
        return new jspb.arith.UInt64((this.lo + a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a2.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.UInt64.prototype.sub = function(a2) {
        return new jspb.arith.UInt64((this.lo - a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a2.hi & 4294967295) >>> 0) - (0 > this.lo - a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.UInt64.mul32x32 = function(a2, b2) {
        var c2 = a2 & 65535;
        a2 >>>= 16;
        var d2 = b2 & 65535, e2 = b2 >>> 16;
        b2 = c2 * d2 + 65536 * (c2 * e2 & 65535) + 65536 * (a2 * d2 & 65535);
        for (c2 = a2 * e2 + (c2 * e2 >>> 16) + (a2 * d2 >>> 16); 4294967296 <= b2; )
          b2 -= 4294967296, c2 += 1;
        return new jspb.arith.UInt64(b2 >>> 0, c2 >>> 0);
      };
      jspb.arith.UInt64.prototype.mul = function(a2) {
        var b2 = jspb.arith.UInt64.mul32x32(this.lo, a2);
        a2 = jspb.arith.UInt64.mul32x32(this.hi, a2);
        a2.hi = a2.lo;
        a2.lo = 0;
        return b2.add(a2);
      };
      jspb.arith.UInt64.prototype.div = function(a2) {
        if (0 == a2)
          return [];
        var b2 = new jspb.arith.UInt64(0, 0), c2 = new jspb.arith.UInt64(this.lo, this.hi);
        a2 = new jspb.arith.UInt64(a2, 0);
        for (var d2 = new jspb.arith.UInt64(1, 0); !a2.msb(); )
          a2 = a2.leftShift(), d2 = d2.leftShift();
        for (; !d2.zero(); )
          0 >= a2.cmp(c2) && (b2 = b2.add(d2), c2 = c2.sub(a2)), a2 = a2.rightShift(), d2 = d2.rightShift();
        return [b2, c2];
      };
      jspb.arith.UInt64.prototype.toString = function() {
        for (var a2 = "", b2 = this; !b2.zero(); ) {
          b2 = b2.div(10);
          var c2 = b2[0];
          a2 = b2[1].lo + a2;
          b2 = c2;
        }
        "" == a2 && (a2 = "0");
        return a2;
      };
      jspb.arith.UInt64.fromString = function(a2) {
        for (var b2 = new jspb.arith.UInt64(0, 0), c2 = new jspb.arith.UInt64(0, 0), d2 = 0; d2 < a2.length; d2++) {
          if ("0" > a2[d2] || "9" < a2[d2])
            return null;
          var e2 = parseInt(a2[d2], 10);
          c2.lo = e2;
          b2 = b2.mul(10).add(c2);
        }
        return b2;
      };
      jspb.arith.UInt64.prototype.clone = function() {
        return new jspb.arith.UInt64(this.lo, this.hi);
      };
      jspb.arith.Int64 = function(a2, b2) {
        this.lo = a2;
        this.hi = b2;
      };
      jspb.arith.Int64.prototype.add = function(a2) {
        return new jspb.arith.Int64((this.lo + a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a2.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.Int64.prototype.sub = function(a2) {
        return new jspb.arith.Int64((this.lo - a2.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a2.hi & 4294967295) >>> 0) - (0 > this.lo - a2.lo ? 1 : 0) >>> 0);
      };
      jspb.arith.Int64.prototype.clone = function() {
        return new jspb.arith.Int64(this.lo, this.hi);
      };
      jspb.arith.Int64.prototype.toString = function() {
        var a2 = 0 != (this.hi & 2147483648), b2 = new jspb.arith.UInt64(this.lo, this.hi);
        a2 && (b2 = new jspb.arith.UInt64(0, 0).sub(b2));
        return (a2 ? "-" : "") + b2.toString();
      };
      jspb.arith.Int64.fromString = function(a2) {
        var b2 = 0 < a2.length && "-" == a2[0];
        b2 && (a2 = a2.substring(1));
        a2 = jspb.arith.UInt64.fromString(a2);
        if (null === a2)
          return null;
        b2 && (a2 = new jspb.arith.UInt64(0, 0).sub(a2));
        return new jspb.arith.Int64(a2.lo, a2.hi);
      };
      jspb.BinaryWriter = function() {
        this.blocks_ = [];
        this.totalLength_ = 0;
        this.encoder_ = new jspb.BinaryEncoder();
        this.bookmarks_ = [];
      };
      jspb.BinaryWriter.prototype.appendUint8Array_ = function(a2) {
        var b2 = this.encoder_.end();
        this.blocks_.push(b2);
        this.blocks_.push(a2);
        this.totalLength_ += b2.length + a2.length;
      };
      jspb.BinaryWriter.prototype.beginDelimited_ = function(a2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED);
        a2 = this.encoder_.end();
        this.blocks_.push(a2);
        this.totalLength_ += a2.length;
        a2.push(this.totalLength_);
        return a2;
      };
      jspb.BinaryWriter.prototype.endDelimited_ = function(a2) {
        var b2 = a2.pop();
        b2 = this.totalLength_ + this.encoder_.length() - b2;
        for (jspb.asserts.assert(0 <= b2); 127 < b2; )
          a2.push(b2 & 127 | 128), b2 >>>= 7, this.totalLength_++;
        a2.push(b2);
        this.totalLength_++;
      };
      jspb.BinaryWriter.prototype.writeSerializedMessage = function(a2, b2, c2) {
        this.appendUint8Array_(a2.subarray(b2, c2));
      };
      jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(a2, b2, c2) {
        null != a2 && null != b2 && null != c2 && this.writeSerializedMessage(a2, b2, c2);
      };
      jspb.BinaryWriter.prototype.reset = function() {
        this.blocks_ = [];
        this.encoder_.end();
        this.totalLength_ = 0;
        this.bookmarks_ = [];
      };
      jspb.BinaryWriter.prototype.getResultBuffer = function() {
        jspb.asserts.assert(0 == this.bookmarks_.length);
        for (var a2 = new Uint8Array(this.totalLength_ + this.encoder_.length()), b2 = this.blocks_, c2 = b2.length, d2 = 0, e2 = 0; e2 < c2; e2++) {
          var f2 = b2[e2];
          a2.set(f2, d2);
          d2 += f2.length;
        }
        b2 = this.encoder_.end();
        a2.set(b2, d2);
        d2 += b2.length;
        jspb.asserts.assert(d2 == a2.length);
        this.blocks_ = [a2];
        return a2;
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "getResultBuffer", jspb.BinaryWriter.prototype.getResultBuffer);
      jspb.BinaryWriter.prototype.getResultBase64String = function(a2) {
        return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), a2);
      };
      jspb.BinaryWriter.prototype.beginSubMessage = function(a2) {
        this.bookmarks_.push(this.beginDelimited_(a2));
      };
      jspb.BinaryWriter.prototype.endSubMessage = function() {
        jspb.asserts.assert(0 <= this.bookmarks_.length);
        this.endDelimited_(this.bookmarks_.pop());
      };
      jspb.BinaryWriter.prototype.writeFieldHeader_ = function(a2, b2) {
        jspb.asserts.assert(1 <= a2 && a2 == Math.floor(a2));
        this.encoder_.writeUnsignedVarint32(8 * a2 + b2);
      };
      jspb.BinaryWriter.prototype.writeAny = function(a2, b2, c2) {
        var d2 = jspb.BinaryConstants.FieldType;
        switch (a2) {
          case d2.DOUBLE:
            this.writeDouble(b2, c2);
            break;
          case d2.FLOAT:
            this.writeFloat(b2, c2);
            break;
          case d2.INT64:
            this.writeInt64(b2, c2);
            break;
          case d2.UINT64:
            this.writeUint64(b2, c2);
            break;
          case d2.INT32:
            this.writeInt32(b2, c2);
            break;
          case d2.FIXED64:
            this.writeFixed64(b2, c2);
            break;
          case d2.FIXED32:
            this.writeFixed32(b2, c2);
            break;
          case d2.BOOL:
            this.writeBool(b2, c2);
            break;
          case d2.STRING:
            this.writeString(b2, c2);
            break;
          case d2.GROUP:
            jspb.asserts.fail("Group field type not supported in writeAny()");
            break;
          case d2.MESSAGE:
            jspb.asserts.fail("Message field type not supported in writeAny()");
            break;
          case d2.BYTES:
            this.writeBytes(b2, c2);
            break;
          case d2.UINT32:
            this.writeUint32(b2, c2);
            break;
          case d2.ENUM:
            this.writeEnum(b2, c2);
            break;
          case d2.SFIXED32:
            this.writeSfixed32(b2, c2);
            break;
          case d2.SFIXED64:
            this.writeSfixed64(b2, c2);
            break;
          case d2.SINT32:
            this.writeSint32(b2, c2);
            break;
          case d2.SINT64:
            this.writeSint64(b2, c2);
            break;
          case d2.FHASH64:
            this.writeFixedHash64(b2, c2);
            break;
          case d2.VHASH64:
            this.writeVarintHash64(b2, c2);
            break;
          default:
            jspb.asserts.fail("Invalid field type in writeAny()");
        }
      };
      jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(a2, b2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(a2, b2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(a2, b2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(b2));
      };
      jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(a2, b2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(a2, b2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(a2, b2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(a2, b2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(b2));
      };
      jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(a2, b2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(b2));
      };
      jspb.BinaryWriter.prototype.writeInt32 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a2, b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt32", jspb.BinaryWriter.prototype.writeInt32);
      jspb.BinaryWriter.prototype.writeInt32String = function(a2, b2) {
        null != b2 && (b2 = parseInt(b2, 10), jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeInt64 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(a2, b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeInt64", jspb.BinaryWriter.prototype.writeInt64);
      jspb.BinaryWriter.prototype.writeInt64String = function(a2, b2) {
        null != b2 && (b2 = jspb.arith.Int64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeUint32 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a2, b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint32", jspb.BinaryWriter.prototype.writeUint32);
      jspb.BinaryWriter.prototype.writeUint32String = function(a2, b2) {
        null != b2 && (b2 = parseInt(b2, 10), jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a2, b2));
      };
      jspb.BinaryWriter.prototype.writeUint64 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(a2, b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeUint64", jspb.BinaryWriter.prototype.writeUint64);
      jspb.BinaryWriter.prototype.writeUint64String = function(a2, b2) {
        null != b2 && (b2 = jspb.arith.UInt64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeSint32 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(a2, b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint32", jspb.BinaryWriter.prototype.writeSint32);
      jspb.BinaryWriter.prototype.writeSint64 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(a2, b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeSint64", jspb.BinaryWriter.prototype.writeSint64);
      jspb.BinaryWriter.prototype.writeSintHash64 = function(a2, b2) {
        null != b2 && this.writeZigzagVarintHash64_(a2, b2);
      };
      jspb.BinaryWriter.prototype.writeSint64String = function(a2, b2) {
        null != b2 && this.writeZigzagVarint64String_(a2, b2);
      };
      jspb.BinaryWriter.prototype.writeFixed32 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed32", jspb.BinaryWriter.prototype.writeFixed32);
      jspb.BinaryWriter.prototype.writeFixed64 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(0 <= b2 && b2 < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeFixed64", jspb.BinaryWriter.prototype.writeFixed64);
      jspb.BinaryWriter.prototype.writeFixed64String = function(a2, b2) {
        null != b2 && (b2 = jspb.arith.UInt64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeSfixed32 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed32", jspb.BinaryWriter.prototype.writeSfixed32);
      jspb.BinaryWriter.prototype.writeSfixed64 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_63 && b2 < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeSfixed64", jspb.BinaryWriter.prototype.writeSfixed64);
      jspb.BinaryWriter.prototype.writeSfixed64String = function(a2, b2) {
        null != b2 && (b2 = jspb.arith.Int64.fromString(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b2.lo, b2.hi));
      };
      jspb.BinaryWriter.prototype.writeFloat = function(a2, b2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeFloat", jspb.BinaryWriter.prototype.writeFloat);
      jspb.BinaryWriter.prototype.writeDouble = function(a2, b2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeDouble", jspb.BinaryWriter.prototype.writeDouble);
      jspb.BinaryWriter.prototype.writeBool = function(a2, b2) {
        null != b2 && (jspb.asserts.assert("boolean" === typeof b2 || "number" === typeof b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeBool", jspb.BinaryWriter.prototype.writeBool);
      jspb.BinaryWriter.prototype.writeEnum = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(b2 >= -jspb.BinaryConstants.TWO_TO_31 && b2 < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeEnum", jspb.BinaryWriter.prototype.writeEnum);
      jspb.BinaryWriter.prototype.writeString = function(a2, b2) {
        null != b2 && (a2 = this.beginDelimited_(a2), this.encoder_.writeString(b2), this.endDelimited_(a2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeString", jspb.BinaryWriter.prototype.writeString);
      jspb.BinaryWriter.prototype.writeBytes = function(a2, b2) {
        null != b2 && (b2 = jspb.utils.byteSourceToUint8Array(b2), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b2.length), this.appendUint8Array_(b2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeBytes", jspb.BinaryWriter.prototype.writeBytes);
      jspb.BinaryWriter.prototype.writeMessage = function(a2, b2, c2) {
        null != b2 && (a2 = this.beginDelimited_(a2), c2(b2, this), this.endDelimited_(a2));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeMessage", jspb.BinaryWriter.prototype.writeMessage);
      jspb.BinaryWriter.prototype.writeMessageSet = function(a2, b2, c2) {
        null != b2 && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(a2), a2 = this.beginDelimited_(3), c2(b2, this), this.endDelimited_(a2), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
      };
      jspb.BinaryWriter.prototype.writeGroup = function(a2, b2, c2) {
        null != b2 && (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.START_GROUP), c2(b2, this), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.END_GROUP));
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeGroup", jspb.BinaryWriter.prototype.writeGroup);
      jspb.BinaryWriter.prototype.writeFixedHash64 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(8 == b2.length), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(b2));
      };
      jspb.BinaryWriter.prototype.writeVarintHash64 = function(a2, b2) {
        null != b2 && (jspb.asserts.assert(8 == b2.length), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(b2));
      };
      jspb.BinaryWriter.prototype.writeSplitFixed64 = function(a2, b2, c2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.FIXED64);
        this.encoder_.writeSplitFixed64(b2, c2);
      };
      jspb.BinaryWriter.prototype.writeSplitVarint64 = function(a2, b2, c2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT);
        this.encoder_.writeSplitVarint64(b2, c2);
      };
      jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(a2, b2, c2) {
        this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.VARINT);
        var d2 = this.encoder_;
        jspb.utils.toZigzag64(b2, c2, function(a3, b3) {
          d2.writeSplitVarint64(a3 >>> 0, b3 >>> 0);
        });
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSignedVarint32_(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt32", jspb.BinaryWriter.prototype.writeRepeatedInt32);
      jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeInt32String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSignedVarint64_(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedInt64", jspb.BinaryWriter.prototype.writeRepeatedInt64);
      jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(a2, b2, c2, d2) {
        if (null != b2)
          for (var e2 = 0; e2 < b2.length; e2++)
            this.writeSplitFixed64(a2, c2(b2[e2]), d2(b2[e2]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(a2, b2, c2, d2) {
        if (null != b2)
          for (var e2 = 0; e2 < b2.length; e2++)
            this.writeSplitVarint64(a2, c2(b2[e2]), d2(b2[e2]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(a2, b2, c2, d2) {
        if (null != b2)
          for (var e2 = 0; e2 < b2.length; e2++)
            this.writeSplitZigzagVarint64(a2, c2(b2[e2]), d2(b2[e2]));
      };
      jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeInt64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUnsignedVarint32_(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint32", jspb.BinaryWriter.prototype.writeRepeatedUint32);
      jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUint32String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUnsignedVarint64_(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedUint64", jspb.BinaryWriter.prototype.writeRepeatedUint64);
      jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeUint64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarint32_(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint32", jspb.BinaryWriter.prototype.writeRepeatedSint32);
      jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarint64_(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSint64", jspb.BinaryWriter.prototype.writeRepeatedSint64);
      jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarint64String_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeZigzagVarintHash64_(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixed32(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed32", jspb.BinaryWriter.prototype.writeRepeatedFixed32);
      jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixed64(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64", jspb.BinaryWriter.prototype.writeRepeatedFixed64);
      jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixed64String(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFixed64String", jspb.BinaryWriter.prototype.writeRepeatedFixed64String);
      jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSfixed32(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed32", jspb.BinaryWriter.prototype.writeRepeatedSfixed32);
      jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSfixed64(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedSfixed64", jspb.BinaryWriter.prototype.writeRepeatedSfixed64);
      jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeSfixed64String(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedFloat = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFloat(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedFloat", jspb.BinaryWriter.prototype.writeRepeatedFloat);
      jspb.BinaryWriter.prototype.writeRepeatedDouble = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeDouble(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedDouble", jspb.BinaryWriter.prototype.writeRepeatedDouble);
      jspb.BinaryWriter.prototype.writeRepeatedBool = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeBool(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBool", jspb.BinaryWriter.prototype.writeRepeatedBool);
      jspb.BinaryWriter.prototype.writeRepeatedEnum = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeEnum(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedEnum", jspb.BinaryWriter.prototype.writeRepeatedEnum);
      jspb.BinaryWriter.prototype.writeRepeatedString = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeString(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedString", jspb.BinaryWriter.prototype.writeRepeatedString);
      jspb.BinaryWriter.prototype.writeRepeatedBytes = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeBytes(a2, b2[c2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedBytes", jspb.BinaryWriter.prototype.writeRepeatedBytes);
      jspb.BinaryWriter.prototype.writeRepeatedMessage = function(a2, b2, c2) {
        if (null != b2)
          for (var d2 = 0; d2 < b2.length; d2++) {
            var e2 = this.beginDelimited_(a2);
            c2(b2[d2], this);
            this.endDelimited_(e2);
          }
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedMessage", jspb.BinaryWriter.prototype.writeRepeatedMessage);
      jspb.BinaryWriter.prototype.writeRepeatedGroup = function(a2, b2, c2) {
        if (null != b2)
          for (var d2 = 0; d2 < b2.length; d2++)
            this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.START_GROUP), c2(b2[d2], this), this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.END_GROUP);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writeRepeatedGroup", jspb.BinaryWriter.prototype.writeRepeatedGroup);
      jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeFixedHash64(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(a2, b2) {
        if (null != b2)
          for (var c2 = 0; c2 < b2.length; c2++)
            this.writeVarintHash64(a2, b2[c2]);
      };
      jspb.BinaryWriter.prototype.writePackedInt32 = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeSignedVarint32(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt32", jspb.BinaryWriter.prototype.writePackedInt32);
      jspb.BinaryWriter.prototype.writePackedInt32String = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeSignedVarint32(parseInt(b2[c2], 10));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt64 = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeSignedVarint64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedInt64", jspb.BinaryWriter.prototype.writePackedInt64);
      jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(a2, b2, c2, d2) {
        if (null != b2) {
          a2 = this.beginDelimited_(a2);
          for (var e2 = 0; e2 < b2.length; e2++)
            this.encoder_.writeSplitFixed64(c2(b2[e2]), d2(b2[e2]));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(a2, b2, c2, d2) {
        if (null != b2) {
          a2 = this.beginDelimited_(a2);
          for (var e2 = 0; e2 < b2.length; e2++)
            this.encoder_.writeSplitVarint64(c2(b2[e2]), d2(b2[e2]));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(a2, b2, c2, d2) {
        if (null != b2) {
          a2 = this.beginDelimited_(a2);
          for (var e2 = this.encoder_, f2 = 0; f2 < b2.length; f2++)
            jspb.utils.toZigzag64(c2(b2[f2]), d2(b2[f2]), function(a3, b3) {
              e2.writeSplitVarint64(a3 >>> 0, b3 >>> 0);
            });
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedInt64String = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++) {
            var d2 = jspb.arith.Int64.fromString(b2[c2]);
            this.encoder_.writeSplitVarint64(d2.lo, d2.hi);
          }
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint32 = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeUnsignedVarint32(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint32", jspb.BinaryWriter.prototype.writePackedUint32);
      jspb.BinaryWriter.prototype.writePackedUint32String = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeUnsignedVarint32(parseInt(b2[c2], 10));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedUint64 = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeUnsignedVarint64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedUint64", jspb.BinaryWriter.prototype.writePackedUint64);
      jspb.BinaryWriter.prototype.writePackedUint64String = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++) {
            var d2 = jspb.arith.UInt64.fromString(b2[c2]);
            this.encoder_.writeSplitVarint64(d2.lo, d2.hi);
          }
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSint32 = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarint32(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint32", jspb.BinaryWriter.prototype.writePackedSint32);
      jspb.BinaryWriter.prototype.writePackedSint64 = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarint64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSint64", jspb.BinaryWriter.prototype.writePackedSint64);
      jspb.BinaryWriter.prototype.writePackedSint64String = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b2[c2]));
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedSintHash64 = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeZigzagVarintHash64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.BinaryWriter.prototype.writePackedFixed32 = function(a2, b2) {
        if (null != b2 && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeUint32(b2[a2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed32", jspb.BinaryWriter.prototype.writePackedFixed32);
      jspb.BinaryWriter.prototype.writePackedFixed64 = function(a2, b2) {
        if (null != b2 && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeUint64(b2[a2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFixed64", jspb.BinaryWriter.prototype.writePackedFixed64);
      jspb.BinaryWriter.prototype.writePackedFixed64String = function(a2, b2) {
        if (null != b2 && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++) {
            var c2 = jspb.arith.UInt64.fromString(b2[a2]);
            this.encoder_.writeSplitFixed64(c2.lo, c2.hi);
          }
      };
      jspb.BinaryWriter.prototype.writePackedSfixed32 = function(a2, b2) {
        if (null != b2 && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeInt32(b2[a2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed32", jspb.BinaryWriter.prototype.writePackedSfixed32);
      jspb.BinaryWriter.prototype.writePackedSfixed64 = function(a2, b2) {
        if (null != b2 && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeInt64(b2[a2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedSfixed64", jspb.BinaryWriter.prototype.writePackedSfixed64);
      jspb.BinaryWriter.prototype.writePackedSfixed64String = function(a2, b2) {
        if (null != b2 && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeInt64String(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedFloat = function(a2, b2) {
        if (null != b2 && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeFloat(b2[a2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedFloat", jspb.BinaryWriter.prototype.writePackedFloat);
      jspb.BinaryWriter.prototype.writePackedDouble = function(a2, b2) {
        if (null != b2 && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeDouble(b2[a2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedDouble", jspb.BinaryWriter.prototype.writePackedDouble);
      jspb.BinaryWriter.prototype.writePackedBool = function(a2, b2) {
        if (null != b2 && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeBool(b2[a2]);
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedBool", jspb.BinaryWriter.prototype.writePackedBool);
      jspb.BinaryWriter.prototype.writePackedEnum = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeEnum(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      goog.exportProperty(jspb.BinaryWriter.prototype, "writePackedEnum", jspb.BinaryWriter.prototype.writePackedEnum);
      jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(a2, b2) {
        if (null != b2 && b2.length)
          for (this.writeFieldHeader_(a2, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b2.length), a2 = 0; a2 < b2.length; a2++)
            this.encoder_.writeFixedHash64(b2[a2]);
      };
      jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(a2, b2) {
        if (null != b2 && b2.length) {
          a2 = this.beginDelimited_(a2);
          for (var c2 = 0; c2 < b2.length; c2++)
            this.encoder_.writeVarintHash64(b2[c2]);
          this.endDelimited_(a2);
        }
      };
      jspb.Map = function(a2, b2) {
        this.arr_ = a2;
        this.valueCtor_ = b2;
        this.map_ = {};
        this.arrClean = true;
        0 < this.arr_.length && this.loadFromArray_();
      };
      goog.exportSymbol("jspb.Map", jspb.Map);
      jspb.Map.prototype.loadFromArray_ = function() {
        for (var a2 = 0; a2 < this.arr_.length; a2++) {
          var b2 = this.arr_[a2], c2 = b2[0];
          this.map_[c2.toString()] = new jspb.Map.Entry_(c2, b2[1]);
        }
        this.arrClean = true;
      };
      jspb.Map.prototype.toArray = function() {
        if (this.arrClean) {
          if (this.valueCtor_) {
            var a2 = this.map_, b2;
            for (b2 in a2)
              if (Object.prototype.hasOwnProperty.call(a2, b2)) {
                var c2 = a2[b2].valueWrapper;
                c2 && c2.toArray();
              }
          }
        } else {
          this.arr_.length = 0;
          a2 = this.stringKeys_();
          a2.sort();
          for (b2 = 0; b2 < a2.length; b2++) {
            var d2 = this.map_[a2[b2]];
            (c2 = d2.valueWrapper) && c2.toArray();
            this.arr_.push([d2.key, d2.value]);
          }
          this.arrClean = true;
        }
        return this.arr_;
      };
      goog.exportProperty(jspb.Map.prototype, "toArray", jspb.Map.prototype.toArray);
      jspb.Map.prototype.toObject = function(a2, b2) {
        for (var c2 = this.toArray(), d2 = [], e2 = 0; e2 < c2.length; e2++) {
          var f2 = this.map_[c2[e2][0].toString()];
          this.wrapEntry_(f2);
          var g = f2.valueWrapper;
          g ? (jspb.asserts.assert(b2), d2.push([f2.key, b2(a2, g)])) : d2.push([f2.key, f2.value]);
        }
        return d2;
      };
      goog.exportProperty(jspb.Map.prototype, "toObject", jspb.Map.prototype.toObject);
      jspb.Map.fromObject = function(a2, b2, c2) {
        b2 = new jspb.Map([], b2);
        for (var d2 = 0; d2 < a2.length; d2++) {
          var e2 = a2[d2][0], f2 = c2(a2[d2][1]);
          b2.set(e2, f2);
        }
        return b2;
      };
      goog.exportProperty(jspb.Map, "fromObject", jspb.Map.fromObject);
      jspb.Map.ArrayIteratorIterable_ = function(a2) {
        this.idx_ = 0;
        this.arr_ = a2;
      };
      jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
        return this.idx_ < this.arr_.length ? { done: false, value: this.arr_[this.idx_++] } : { done: true, value: void 0 };
      };
      "undefined" != typeof Symbol && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
        return this;
      });
      jspb.Map.prototype.getLength = function() {
        return this.stringKeys_().length;
      };
      goog.exportProperty(jspb.Map.prototype, "getLength", jspb.Map.prototype.getLength);
      jspb.Map.prototype.clear = function() {
        this.map_ = {};
        this.arrClean = false;
      };
      goog.exportProperty(jspb.Map.prototype, "clear", jspb.Map.prototype.clear);
      jspb.Map.prototype.del = function(a2) {
        a2 = a2.toString();
        var b2 = this.map_.hasOwnProperty(a2);
        delete this.map_[a2];
        this.arrClean = false;
        return b2;
      };
      goog.exportProperty(jspb.Map.prototype, "del", jspb.Map.prototype.del);
      jspb.Map.prototype.getEntryList = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++) {
          var d2 = this.map_[b2[c2]];
          a2.push([d2.key, d2.value]);
        }
        return a2;
      };
      goog.exportProperty(jspb.Map.prototype, "getEntryList", jspb.Map.prototype.getEntryList);
      jspb.Map.prototype.entries = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++) {
          var d2 = this.map_[b2[c2]];
          a2.push([d2.key, this.wrapEntry_(d2)]);
        }
        return new jspb.Map.ArrayIteratorIterable_(a2);
      };
      goog.exportProperty(jspb.Map.prototype, "entries", jspb.Map.prototype.entries);
      jspb.Map.prototype.keys = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++)
          a2.push(this.map_[b2[c2]].key);
        return new jspb.Map.ArrayIteratorIterable_(a2);
      };
      goog.exportProperty(jspb.Map.prototype, "keys", jspb.Map.prototype.keys);
      jspb.Map.prototype.values = function() {
        var a2 = [], b2 = this.stringKeys_();
        b2.sort();
        for (var c2 = 0; c2 < b2.length; c2++)
          a2.push(this.wrapEntry_(this.map_[b2[c2]]));
        return new jspb.Map.ArrayIteratorIterable_(a2);
      };
      goog.exportProperty(jspb.Map.prototype, "values", jspb.Map.prototype.values);
      jspb.Map.prototype.forEach = function(a2, b2) {
        var c2 = this.stringKeys_();
        c2.sort();
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = this.map_[c2[d2]];
          a2.call(b2, this.wrapEntry_(e2), e2.key, this);
        }
      };
      goog.exportProperty(jspb.Map.prototype, "forEach", jspb.Map.prototype.forEach);
      jspb.Map.prototype.set = function(a2, b2) {
        var c2 = new jspb.Map.Entry_(a2);
        this.valueCtor_ ? (c2.valueWrapper = b2, c2.value = b2.toArray()) : c2.value = b2;
        this.map_[a2.toString()] = c2;
        this.arrClean = false;
        return this;
      };
      goog.exportProperty(jspb.Map.prototype, "set", jspb.Map.prototype.set);
      jspb.Map.prototype.wrapEntry_ = function(a2) {
        return this.valueCtor_ ? (a2.valueWrapper || (a2.valueWrapper = new this.valueCtor_(a2.value)), a2.valueWrapper) : a2.value;
      };
      jspb.Map.prototype.get = function(a2) {
        if (a2 = this.map_[a2.toString()])
          return this.wrapEntry_(a2);
      };
      goog.exportProperty(jspb.Map.prototype, "get", jspb.Map.prototype.get);
      jspb.Map.prototype.has = function(a2) {
        return a2.toString() in this.map_;
      };
      goog.exportProperty(jspb.Map.prototype, "has", jspb.Map.prototype.has);
      jspb.Map.prototype.serializeBinary = function(a2, b2, c2, d2, e2) {
        var f2 = this.stringKeys_();
        f2.sort();
        for (var g = 0; g < f2.length; g++) {
          var h = this.map_[f2[g]];
          b2.beginSubMessage(a2);
          c2.call(b2, 1, h.key);
          this.valueCtor_ ? d2.call(b2, 2, this.wrapEntry_(h), e2) : d2.call(b2, 2, h.value);
          b2.endSubMessage();
        }
      };
      goog.exportProperty(jspb.Map.prototype, "serializeBinary", jspb.Map.prototype.serializeBinary);
      jspb.Map.deserializeBinary = function(a2, b2, c2, d2, e2, f2, g) {
        for (; b2.nextField() && !b2.isEndGroup(); ) {
          var h = b2.getFieldNumber();
          1 == h ? f2 = c2.call(b2) : 2 == h && (a2.valueCtor_ ? (jspb.asserts.assert(e2), g || (g = new a2.valueCtor_()), d2.call(b2, g, e2)) : g = d2.call(b2));
        }
        jspb.asserts.assert(void 0 != f2);
        jspb.asserts.assert(void 0 != g);
        a2.set(f2, g);
      };
      goog.exportProperty(jspb.Map, "deserializeBinary", jspb.Map.deserializeBinary);
      jspb.Map.prototype.stringKeys_ = function() {
        var a2 = this.map_, b2 = [], c2;
        for (c2 in a2)
          Object.prototype.hasOwnProperty.call(a2, c2) && b2.push(c2);
        return b2;
      };
      jspb.Map.Entry_ = function(a2, b2) {
        this.key = a2;
        this.value = b2;
        this.valueWrapper = void 0;
      };
      jspb.ExtensionFieldInfo = function(a2, b2, c2, d2, e2) {
        this.fieldIndex = a2;
        this.fieldName = b2;
        this.ctor = c2;
        this.toObjectFn = d2;
        this.isRepeated = e2;
      };
      goog.exportSymbol("jspb.ExtensionFieldInfo", jspb.ExtensionFieldInfo);
      jspb.ExtensionFieldBinaryInfo = function(a2, b2, c2, d2, e2, f2) {
        this.fieldInfo = a2;
        this.binaryReaderFn = b2;
        this.binaryWriterFn = c2;
        this.binaryMessageSerializeFn = d2;
        this.binaryMessageDeserializeFn = e2;
        this.isPacked = f2;
      };
      goog.exportSymbol("jspb.ExtensionFieldBinaryInfo", jspb.ExtensionFieldBinaryInfo);
      jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
        return !!this.ctor;
      };
      goog.exportProperty(jspb.ExtensionFieldInfo.prototype, "isMessageType", jspb.ExtensionFieldInfo.prototype.isMessageType);
      jspb.Message = function() {
      };
      goog.exportSymbol("jspb.Message", jspb.Message);
      jspb.Message.GENERATE_TO_OBJECT = true;
      goog.exportProperty(jspb.Message, "GENERATE_TO_OBJECT", jspb.Message.GENERATE_TO_OBJECT);
      jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE;
      goog.exportProperty(jspb.Message, "GENERATE_FROM_OBJECT", jspb.Message.GENERATE_FROM_OBJECT);
      jspb.Message.GENERATE_TO_STRING = true;
      jspb.Message.ASSUME_LOCAL_ARRAYS = false;
      jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = true;
      jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array;
      jspb.Message.prototype.getJsPbMessageId = function() {
        return this.messageId_;
      };
      goog.exportProperty(jspb.Message.prototype, "getJsPbMessageId", jspb.Message.prototype.getJsPbMessageId);
      jspb.Message.getIndex_ = function(a2, b2) {
        return b2 + a2.arrayIndexOffset_;
      };
      jspb.Message.hiddenES6Property_ = function() {
      };
      jspb.Message.getFieldNumber_ = function(a2, b2) {
        return b2 - a2.arrayIndexOffset_;
      };
      jspb.Message.initialize = function(a2, b2, c2, d2, e2, f2) {
        a2.wrappers_ = null;
        b2 || (b2 = c2 ? [c2] : []);
        a2.messageId_ = c2 ? String(c2) : void 0;
        a2.arrayIndexOffset_ = 0 === c2 ? -1 : 0;
        a2.array = b2;
        jspb.Message.initPivotAndExtensionObject_(a2, d2);
        a2.convertedPrimitiveFields_ = {};
        jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (a2.repeatedFields = e2);
        if (e2)
          for (b2 = 0; b2 < e2.length; b2++)
            c2 = e2[b2], c2 < a2.pivot_ ? (c2 = jspb.Message.getIndex_(a2, c2), a2.array[c2] = a2.array[c2] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(a2), a2.extensionObject_[c2] = a2.extensionObject_[c2] || jspb.Message.EMPTY_LIST_SENTINEL_);
        if (f2 && f2.length)
          for (b2 = 0; b2 < f2.length; b2++)
            jspb.Message.computeOneofCase(a2, f2[b2]);
      };
      goog.exportProperty(jspb.Message, "initialize", jspb.Message.initialize);
      jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [];
      jspb.Message.isArray_ = function(a2) {
        return jspb.Message.ASSUME_LOCAL_ARRAYS ? a2 instanceof Array : Array.isArray(a2);
      };
      jspb.Message.isExtensionObject_ = function(a2) {
        return null !== a2 && "object" == typeof a2 && !jspb.Message.isArray_(a2) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array);
      };
      jspb.Message.initPivotAndExtensionObject_ = function(a2, b2) {
        var c2 = a2.array.length, d2 = -1;
        if (c2 && (d2 = c2 - 1, c2 = a2.array[d2], jspb.Message.isExtensionObject_(c2))) {
          a2.pivot_ = jspb.Message.getFieldNumber_(a2, d2);
          a2.extensionObject_ = c2;
          return;
        }
        -1 < b2 ? (a2.pivot_ = Math.max(b2, jspb.Message.getFieldNumber_(a2, d2 + 1)), a2.extensionObject_ = null) : a2.pivot_ = Number.MAX_VALUE;
      };
      jspb.Message.maybeInitEmptyExtensionObject_ = function(a2) {
        var b2 = jspb.Message.getIndex_(a2, a2.pivot_);
        a2.array[b2] || (a2.extensionObject_ = a2.array[b2] = {});
      };
      jspb.Message.toObjectList = function(a2, b2, c2) {
        for (var d2 = [], e2 = 0; e2 < a2.length; e2++)
          d2[e2] = b2.call(a2[e2], c2, a2[e2]);
        return d2;
      };
      goog.exportProperty(jspb.Message, "toObjectList", jspb.Message.toObjectList);
      jspb.Message.toObjectExtension = function(a2, b2, c2, d2, e2) {
        for (var f2 in c2) {
          var g = c2[f2], h = d2.call(a2, g);
          if (null != h) {
            for (var k in g.fieldName)
              if (g.fieldName.hasOwnProperty(k))
                break;
            b2[k] = g.toObjectFn ? g.isRepeated ? jspb.Message.toObjectList(h, g.toObjectFn, e2) : g.toObjectFn(e2, h) : h;
          }
        }
      };
      goog.exportProperty(jspb.Message, "toObjectExtension", jspb.Message.toObjectExtension);
      jspb.Message.serializeBinaryExtensions = function(a2, b2, c2, d2) {
        for (var e2 in c2) {
          var f2 = c2[e2], g = f2.fieldInfo;
          if (!f2.binaryWriterFn)
            throw Error("Message extension present that was generated without binary serialization support");
          var h = d2.call(a2, g);
          if (null != h)
            if (g.isMessageType())
              if (f2.binaryMessageSerializeFn)
                f2.binaryWriterFn.call(b2, g.fieldIndex, h, f2.binaryMessageSerializeFn);
              else
                throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
            else
              f2.binaryWriterFn.call(b2, g.fieldIndex, h);
        }
      };
      goog.exportProperty(jspb.Message, "serializeBinaryExtensions", jspb.Message.serializeBinaryExtensions);
      jspb.Message.readBinaryExtension = function(a2, b2, c2, d2, e2) {
        var f2 = c2[b2.getFieldNumber()];
        if (f2) {
          c2 = f2.fieldInfo;
          if (!f2.binaryReaderFn)
            throw Error("Deserializing extension whose generated code does not support binary format");
          if (c2.isMessageType()) {
            var g = new c2.ctor();
            f2.binaryReaderFn.call(b2, g, f2.binaryMessageDeserializeFn);
          } else
            g = f2.binaryReaderFn.call(b2);
          c2.isRepeated && !f2.isPacked ? (b2 = d2.call(a2, c2)) ? b2.push(g) : e2.call(a2, c2, [g]) : e2.call(a2, c2, g);
        } else
          b2.skipField();
      };
      goog.exportProperty(jspb.Message, "readBinaryExtension", jspb.Message.readBinaryExtension);
      jspb.Message.getField = function(a2, b2) {
        if (b2 < a2.pivot_) {
          b2 = jspb.Message.getIndex_(a2, b2);
          var c2 = a2.array[b2];
          return c2 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a2.array[b2] = [] : c2;
        }
        if (a2.extensionObject_)
          return c2 = a2.extensionObject_[b2], c2 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a2.extensionObject_[b2] = [] : c2;
      };
      goog.exportProperty(jspb.Message, "getField", jspb.Message.getField);
      jspb.Message.getRepeatedField = function(a2, b2) {
        return jspb.Message.getField(a2, b2);
      };
      goog.exportProperty(jspb.Message, "getRepeatedField", jspb.Message.getRepeatedField);
      jspb.Message.getOptionalFloatingPointField = function(a2, b2) {
        a2 = jspb.Message.getField(a2, b2);
        return null == a2 ? a2 : +a2;
      };
      goog.exportProperty(jspb.Message, "getOptionalFloatingPointField", jspb.Message.getOptionalFloatingPointField);
      jspb.Message.getBooleanField = function(a2, b2) {
        a2 = jspb.Message.getField(a2, b2);
        return null == a2 ? a2 : !!a2;
      };
      goog.exportProperty(jspb.Message, "getBooleanField", jspb.Message.getBooleanField);
      jspb.Message.getRepeatedFloatingPointField = function(a2, b2) {
        var c2 = jspb.Message.getRepeatedField(a2, b2);
        a2.convertedPrimitiveFields_ || (a2.convertedPrimitiveFields_ = {});
        if (!a2.convertedPrimitiveFields_[b2]) {
          for (var d2 = 0; d2 < c2.length; d2++)
            c2[d2] = +c2[d2];
          a2.convertedPrimitiveFields_[b2] = true;
        }
        return c2;
      };
      goog.exportProperty(jspb.Message, "getRepeatedFloatingPointField", jspb.Message.getRepeatedFloatingPointField);
      jspb.Message.getRepeatedBooleanField = function(a2, b2) {
        var c2 = jspb.Message.getRepeatedField(a2, b2);
        a2.convertedPrimitiveFields_ || (a2.convertedPrimitiveFields_ = {});
        if (!a2.convertedPrimitiveFields_[b2]) {
          for (var d2 = 0; d2 < c2.length; d2++)
            c2[d2] = !!c2[d2];
          a2.convertedPrimitiveFields_[b2] = true;
        }
        return c2;
      };
      goog.exportProperty(jspb.Message, "getRepeatedBooleanField", jspb.Message.getRepeatedBooleanField);
      jspb.Message.bytesAsB64 = function(a2) {
        if (null == a2 || "string" === typeof a2)
          return a2;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array)
          return goog.crypt.base64.encodeByteArray(a2);
        jspb.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(a2));
        return null;
      };
      goog.exportProperty(jspb.Message, "bytesAsB64", jspb.Message.bytesAsB64);
      jspb.Message.bytesAsU8 = function(a2) {
        if (null == a2 || a2 instanceof Uint8Array)
          return a2;
        if ("string" === typeof a2)
          return goog.crypt.base64.decodeStringToUint8Array(a2);
        jspb.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(a2));
        return null;
      };
      goog.exportProperty(jspb.Message, "bytesAsU8", jspb.Message.bytesAsU8);
      jspb.Message.bytesListAsB64 = function(a2) {
        jspb.Message.assertConsistentTypes_(a2);
        return a2.length && "string" !== typeof a2[0] ? goog.array.map(a2, jspb.Message.bytesAsB64) : a2;
      };
      goog.exportProperty(jspb.Message, "bytesListAsB64", jspb.Message.bytesListAsB64);
      jspb.Message.bytesListAsU8 = function(a2) {
        jspb.Message.assertConsistentTypes_(a2);
        return !a2.length || a2[0] instanceof Uint8Array ? a2 : goog.array.map(a2, jspb.Message.bytesAsU8);
      };
      goog.exportProperty(jspb.Message, "bytesListAsU8", jspb.Message.bytesListAsU8);
      jspb.Message.assertConsistentTypes_ = function(a2) {
        if (goog.DEBUG && a2 && 1 < a2.length) {
          var b2 = goog.typeOf(a2[0]);
          goog.array.forEach(a2, function(a3) {
            goog.typeOf(a3) != b2 && jspb.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(a3) + " expected " + b2);
          });
        }
      };
      jspb.Message.getFieldWithDefault = function(a2, b2, c2) {
        a2 = jspb.Message.getField(a2, b2);
        return null == a2 ? c2 : a2;
      };
      goog.exportProperty(jspb.Message, "getFieldWithDefault", jspb.Message.getFieldWithDefault);
      jspb.Message.getBooleanFieldWithDefault = function(a2, b2, c2) {
        a2 = jspb.Message.getBooleanField(a2, b2);
        return null == a2 ? c2 : a2;
      };
      goog.exportProperty(jspb.Message, "getBooleanFieldWithDefault", jspb.Message.getBooleanFieldWithDefault);
      jspb.Message.getFloatingPointFieldWithDefault = function(a2, b2, c2) {
        a2 = jspb.Message.getOptionalFloatingPointField(a2, b2);
        return null == a2 ? c2 : a2;
      };
      goog.exportProperty(jspb.Message, "getFloatingPointFieldWithDefault", jspb.Message.getFloatingPointFieldWithDefault);
      jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault;
      goog.exportProperty(jspb.Message, "getFieldProto3", jspb.Message.getFieldProto3);
      jspb.Message.getMapField = function(a2, b2, c2, d2) {
        a2.wrappers_ || (a2.wrappers_ = {});
        if (b2 in a2.wrappers_)
          return a2.wrappers_[b2];
        var e2 = jspb.Message.getField(a2, b2);
        if (!e2) {
          if (c2)
            return;
          e2 = [];
          jspb.Message.setField(a2, b2, e2);
        }
        return a2.wrappers_[b2] = new jspb.Map(e2, d2);
      };
      goog.exportProperty(jspb.Message, "getMapField", jspb.Message.getMapField);
      jspb.Message.setField = function(a2, b2, c2) {
        jspb.asserts.assertInstanceof(a2, jspb.Message);
        b2 < a2.pivot_ ? a2.array[jspb.Message.getIndex_(a2, b2)] = c2 : (jspb.Message.maybeInitEmptyExtensionObject_(a2), a2.extensionObject_[b2] = c2);
        return a2;
      };
      goog.exportProperty(jspb.Message, "setField", jspb.Message.setField);
      jspb.Message.setProto3IntField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
      };
      goog.exportProperty(jspb.Message, "setProto3IntField", jspb.Message.setProto3IntField);
      jspb.Message.setProto3FloatField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
      };
      goog.exportProperty(jspb.Message, "setProto3FloatField", jspb.Message.setProto3FloatField);
      jspb.Message.setProto3BooleanField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, false);
      };
      goog.exportProperty(jspb.Message, "setProto3BooleanField", jspb.Message.setProto3BooleanField);
      jspb.Message.setProto3StringField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "");
      };
      goog.exportProperty(jspb.Message, "setProto3StringField", jspb.Message.setProto3StringField);
      jspb.Message.setProto3BytesField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "");
      };
      goog.exportProperty(jspb.Message, "setProto3BytesField", jspb.Message.setProto3BytesField);
      jspb.Message.setProto3EnumField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, 0);
      };
      goog.exportProperty(jspb.Message, "setProto3EnumField", jspb.Message.setProto3EnumField);
      jspb.Message.setProto3StringIntField = function(a2, b2, c2) {
        return jspb.Message.setFieldIgnoringDefault_(a2, b2, c2, "0");
      };
      goog.exportProperty(jspb.Message, "setProto3StringIntField", jspb.Message.setProto3StringIntField);
      jspb.Message.setFieldIgnoringDefault_ = function(a2, b2, c2, d2) {
        jspb.asserts.assertInstanceof(a2, jspb.Message);
        c2 !== d2 ? jspb.Message.setField(a2, b2, c2) : b2 < a2.pivot_ ? a2.array[jspb.Message.getIndex_(a2, b2)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(a2), delete a2.extensionObject_[b2]);
        return a2;
      };
      jspb.Message.addToRepeatedField = function(a2, b2, c2, d2) {
        jspb.asserts.assertInstanceof(a2, jspb.Message);
        b2 = jspb.Message.getRepeatedField(a2, b2);
        void 0 != d2 ? b2.splice(d2, 0, c2) : b2.push(c2);
        return a2;
      };
      goog.exportProperty(jspb.Message, "addToRepeatedField", jspb.Message.addToRepeatedField);
      jspb.Message.setOneofField = function(a2, b2, c2, d2) {
        jspb.asserts.assertInstanceof(a2, jspb.Message);
        (c2 = jspb.Message.computeOneofCase(a2, c2)) && c2 !== b2 && void 0 !== d2 && (a2.wrappers_ && c2 in a2.wrappers_ && (a2.wrappers_[c2] = void 0), jspb.Message.setField(a2, c2, void 0));
        return jspb.Message.setField(a2, b2, d2);
      };
      goog.exportProperty(jspb.Message, "setOneofField", jspb.Message.setOneofField);
      jspb.Message.computeOneofCase = function(a2, b2) {
        for (var c2, d2, e2 = 0; e2 < b2.length; e2++) {
          var f2 = b2[e2], g = jspb.Message.getField(a2, f2);
          null != g && (c2 = f2, d2 = g, jspb.Message.setField(a2, f2, void 0));
        }
        return c2 ? (jspb.Message.setField(a2, c2, d2), c2) : 0;
      };
      goog.exportProperty(jspb.Message, "computeOneofCase", jspb.Message.computeOneofCase);
      jspb.Message.getWrapperField = function(a2, b2, c2, d2) {
        a2.wrappers_ || (a2.wrappers_ = {});
        if (!a2.wrappers_[c2]) {
          var e2 = jspb.Message.getField(a2, c2);
          if (d2 || e2)
            a2.wrappers_[c2] = new b2(e2);
        }
        return a2.wrappers_[c2];
      };
      goog.exportProperty(jspb.Message, "getWrapperField", jspb.Message.getWrapperField);
      jspb.Message.getRepeatedWrapperField = function(a2, b2, c2) {
        jspb.Message.wrapRepeatedField_(a2, b2, c2);
        b2 = a2.wrappers_[c2];
        b2 == jspb.Message.EMPTY_LIST_SENTINEL_ && (b2 = a2.wrappers_[c2] = []);
        return b2;
      };
      goog.exportProperty(jspb.Message, "getRepeatedWrapperField", jspb.Message.getRepeatedWrapperField);
      jspb.Message.wrapRepeatedField_ = function(a2, b2, c2) {
        a2.wrappers_ || (a2.wrappers_ = {});
        if (!a2.wrappers_[c2]) {
          for (var d2 = jspb.Message.getRepeatedField(a2, c2), e2 = [], f2 = 0; f2 < d2.length; f2++)
            e2[f2] = new b2(d2[f2]);
          a2.wrappers_[c2] = e2;
        }
      };
      jspb.Message.setWrapperField = function(a2, b2, c2) {
        jspb.asserts.assertInstanceof(a2, jspb.Message);
        a2.wrappers_ || (a2.wrappers_ = {});
        var d2 = c2 ? c2.toArray() : c2;
        a2.wrappers_[b2] = c2;
        return jspb.Message.setField(a2, b2, d2);
      };
      goog.exportProperty(jspb.Message, "setWrapperField", jspb.Message.setWrapperField);
      jspb.Message.setOneofWrapperField = function(a2, b2, c2, d2) {
        jspb.asserts.assertInstanceof(a2, jspb.Message);
        a2.wrappers_ || (a2.wrappers_ = {});
        var e2 = d2 ? d2.toArray() : d2;
        a2.wrappers_[b2] = d2;
        return jspb.Message.setOneofField(a2, b2, c2, e2);
      };
      goog.exportProperty(jspb.Message, "setOneofWrapperField", jspb.Message.setOneofWrapperField);
      jspb.Message.setRepeatedWrapperField = function(a2, b2, c2) {
        jspb.asserts.assertInstanceof(a2, jspb.Message);
        a2.wrappers_ || (a2.wrappers_ = {});
        c2 = c2 || [];
        for (var d2 = [], e2 = 0; e2 < c2.length; e2++)
          d2[e2] = c2[e2].toArray();
        a2.wrappers_[b2] = c2;
        return jspb.Message.setField(a2, b2, d2);
      };
      goog.exportProperty(jspb.Message, "setRepeatedWrapperField", jspb.Message.setRepeatedWrapperField);
      jspb.Message.addToRepeatedWrapperField = function(a2, b2, c2, d2, e2) {
        jspb.Message.wrapRepeatedField_(a2, d2, b2);
        var f2 = a2.wrappers_[b2];
        f2 || (f2 = a2.wrappers_[b2] = []);
        c2 = c2 ? c2 : new d2();
        a2 = jspb.Message.getRepeatedField(a2, b2);
        void 0 != e2 ? (f2.splice(e2, 0, c2), a2.splice(e2, 0, c2.toArray())) : (f2.push(c2), a2.push(c2.toArray()));
        return c2;
      };
      goog.exportProperty(jspb.Message, "addToRepeatedWrapperField", jspb.Message.addToRepeatedWrapperField);
      jspb.Message.toMap = function(a2, b2, c2, d2) {
        for (var e2 = {}, f2 = 0; f2 < a2.length; f2++)
          e2[b2.call(a2[f2])] = c2 ? c2.call(a2[f2], d2, a2[f2]) : a2[f2];
        return e2;
      };
      goog.exportProperty(jspb.Message, "toMap", jspb.Message.toMap);
      jspb.Message.prototype.syncMapFields_ = function() {
        if (this.wrappers_)
          for (var a2 in this.wrappers_) {
            var b2 = this.wrappers_[a2];
            if (Array.isArray(b2))
              for (var c2 = 0; c2 < b2.length; c2++)
                b2[c2] && b2[c2].toArray();
            else
              b2 && b2.toArray();
          }
      };
      jspb.Message.prototype.toArray = function() {
        this.syncMapFields_();
        return this.array;
      };
      goog.exportProperty(jspb.Message.prototype, "toArray", jspb.Message.prototype.toArray);
      jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
        this.syncMapFields_();
        return this.array.toString();
      });
      jspb.Message.prototype.getExtension = function(a2) {
        if (this.extensionObject_) {
          this.wrappers_ || (this.wrappers_ = {});
          var b2 = a2.fieldIndex;
          if (a2.isRepeated) {
            if (a2.isMessageType())
              return this.wrappers_[b2] || (this.wrappers_[b2] = goog.array.map(this.extensionObject_[b2] || [], function(b3) {
                return new a2.ctor(b3);
              })), this.wrappers_[b2];
          } else if (a2.isMessageType())
            return !this.wrappers_[b2] && this.extensionObject_[b2] && (this.wrappers_[b2] = new a2.ctor(this.extensionObject_[b2])), this.wrappers_[b2];
          return this.extensionObject_[b2];
        }
      };
      goog.exportProperty(jspb.Message.prototype, "getExtension", jspb.Message.prototype.getExtension);
      jspb.Message.prototype.setExtension = function(a2, b2) {
        this.wrappers_ || (this.wrappers_ = {});
        jspb.Message.maybeInitEmptyExtensionObject_(this);
        var c2 = a2.fieldIndex;
        a2.isRepeated ? (b2 = b2 || [], a2.isMessageType() ? (this.wrappers_[c2] = b2, this.extensionObject_[c2] = goog.array.map(b2, function(a3) {
          return a3.toArray();
        })) : this.extensionObject_[c2] = b2) : a2.isMessageType() ? (this.wrappers_[c2] = b2, this.extensionObject_[c2] = b2 ? b2.toArray() : b2) : this.extensionObject_[c2] = b2;
        return this;
      };
      goog.exportProperty(jspb.Message.prototype, "setExtension", jspb.Message.prototype.setExtension);
      jspb.Message.difference = function(a2, b2) {
        if (!(a2 instanceof b2.constructor))
          throw Error("Messages have different types.");
        var c2 = a2.toArray();
        b2 = b2.toArray();
        var d2 = [], e2 = 0, f2 = c2.length > b2.length ? c2.length : b2.length;
        a2.getJsPbMessageId() && (d2[0] = a2.getJsPbMessageId(), e2 = 1);
        for (; e2 < f2; e2++)
          jspb.Message.compareFields(c2[e2], b2[e2]) || (d2[e2] = b2[e2]);
        return new a2.constructor(d2);
      };
      goog.exportProperty(jspb.Message, "difference", jspb.Message.difference);
      jspb.Message.equals = function(a2, b2) {
        return a2 == b2 || !(!a2 || !b2) && a2 instanceof b2.constructor && jspb.Message.compareFields(a2.toArray(), b2.toArray());
      };
      goog.exportProperty(jspb.Message, "equals", jspb.Message.equals);
      jspb.Message.compareExtensions = function(a2, b2) {
        a2 = a2 || {};
        b2 = b2 || {};
        var c2 = {}, d2;
        for (d2 in a2)
          c2[d2] = 0;
        for (d2 in b2)
          c2[d2] = 0;
        for (d2 in c2)
          if (!jspb.Message.compareFields(a2[d2], b2[d2]))
            return false;
        return true;
      };
      goog.exportProperty(jspb.Message, "compareExtensions", jspb.Message.compareExtensions);
      jspb.Message.compareFields = function(a2, b2) {
        if (a2 == b2)
          return true;
        if (!goog.isObject(a2) || !goog.isObject(b2))
          return "number" === typeof a2 && isNaN(a2) || "number" === typeof b2 && isNaN(b2) ? String(a2) == String(b2) : false;
        if (a2.constructor != b2.constructor)
          return false;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2.constructor === Uint8Array) {
          if (a2.length != b2.length)
            return false;
          for (var c2 = 0; c2 < a2.length; c2++)
            if (a2[c2] != b2[c2])
              return false;
          return true;
        }
        if (a2.constructor === Array) {
          var d2 = void 0, e2 = void 0, f2 = Math.max(a2.length, b2.length);
          for (c2 = 0; c2 < f2; c2++) {
            var g = a2[c2], h = b2[c2];
            g && g.constructor == Object && (jspb.asserts.assert(void 0 === d2), jspb.asserts.assert(c2 === a2.length - 1), d2 = g, g = void 0);
            h && h.constructor == Object && (jspb.asserts.assert(void 0 === e2), jspb.asserts.assert(c2 === b2.length - 1), e2 = h, h = void 0);
            if (!jspb.Message.compareFields(g, h))
              return false;
          }
          return d2 || e2 ? (d2 = d2 || {}, e2 = e2 || {}, jspb.Message.compareExtensions(d2, e2)) : true;
        }
        if (a2.constructor === Object)
          return jspb.Message.compareExtensions(a2, b2);
        throw Error("Invalid type in JSPB array");
      };
      goog.exportProperty(jspb.Message, "compareFields", jspb.Message.compareFields);
      jspb.Message.prototype.cloneMessage = function() {
        return jspb.Message.cloneMessage(this);
      };
      goog.exportProperty(jspb.Message.prototype, "cloneMessage", jspb.Message.prototype.cloneMessage);
      jspb.Message.prototype.clone = function() {
        return jspb.Message.cloneMessage(this);
      };
      goog.exportProperty(jspb.Message.prototype, "clone", jspb.Message.prototype.clone);
      jspb.Message.clone = function(a2) {
        return jspb.Message.cloneMessage(a2);
      };
      goog.exportProperty(jspb.Message, "clone", jspb.Message.clone);
      jspb.Message.cloneMessage = function(a2) {
        return new a2.constructor(jspb.Message.clone_(a2.toArray()));
      };
      jspb.Message.copyInto = function(a2, b2) {
        jspb.asserts.assertInstanceof(a2, jspb.Message);
        jspb.asserts.assertInstanceof(b2, jspb.Message);
        jspb.asserts.assert(a2.constructor == b2.constructor, "Copy source and target message should have the same type.");
        a2 = jspb.Message.clone(a2);
        for (var c2 = b2.toArray(), d2 = a2.toArray(), e2 = c2.length = 0; e2 < d2.length; e2++)
          c2[e2] = d2[e2];
        b2.wrappers_ = a2.wrappers_;
        b2.extensionObject_ = a2.extensionObject_;
      };
      goog.exportProperty(jspb.Message, "copyInto", jspb.Message.copyInto);
      jspb.Message.clone_ = function(a2) {
        if (Array.isArray(a2)) {
          for (var b2 = Array(a2.length), c2 = 0; c2 < a2.length; c2++) {
            var d2 = a2[c2];
            null != d2 && (b2[c2] = "object" == typeof d2 ? jspb.Message.clone_(jspb.asserts.assert(d2)) : d2);
          }
          return b2;
        }
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a2 instanceof Uint8Array)
          return new Uint8Array(a2);
        b2 = {};
        for (c2 in a2)
          d2 = a2[c2], null != d2 && (b2[c2] = "object" == typeof d2 ? jspb.Message.clone_(jspb.asserts.assert(d2)) : d2);
        return b2;
      };
      jspb.Message.registerMessageType = function(a2, b2) {
        b2.messageId = a2;
      };
      goog.exportProperty(jspb.Message, "registerMessageType", jspb.Message.registerMessageType);
      jspb.Message.messageSetExtensions = {};
      jspb.Message.messageSetExtensionsBinary = {};
      jspb.Export = {};
      "object" === typeof exports && (exports.Map = jspb.Map, exports.Message = jspb.Message, exports.BinaryReader = jspb.BinaryReader, exports.BinaryWriter = jspb.BinaryWriter, exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo, exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo, exports.exportSymbol = goog.exportSymbol, exports.inherits = goog.inherits, exports.object = { extend: goog.object.extend }, exports.typeOf = goog.typeOf);
    }
  });

  // js/util/grpc/exam_answer_pb.js
  var require_exam_answer_pb = __commonJS({
    "js/util/grpc/exam_answer_pb.js"(exports2) {
      var jspb2 = require_google_protobuf();
      var goog2 = jspb2;
      var global2 = function() {
        return this || window || global2 || self || Function("return this")();
      }.call(null);
      goog2.exportSymbol("proto.ExamAnswer", null, global2);
      goog2.exportSymbol("proto.ExamAnswerParams", null, global2);
      goog2.exportSymbol("proto.ResponseStatus", null, global2);
      proto.ExamAnswer = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.ExamAnswer, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.ExamAnswer.displayName = "proto.ExamAnswer";
      }
      proto.ResponseStatus = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, null, null);
      };
      goog2.inherits(proto.ResponseStatus, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.ResponseStatus.displayName = "proto.ResponseStatus";
      }
      proto.ExamAnswerParams = function(opt_data) {
        jspb2.Message.initialize(this, opt_data, 0, -1, proto.ExamAnswerParams.repeatedFields_, null);
      };
      goog2.inherits(proto.ExamAnswerParams, jspb2.Message);
      if (goog2.DEBUG && !COMPILED) {
        proto.ExamAnswerParams.displayName = "proto.ExamAnswerParams";
      }
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.ExamAnswer.prototype.toObject = function(opt_includeInstance) {
          return proto.ExamAnswer.toObject(opt_includeInstance, this);
        };
        proto.ExamAnswer.toObject = function(includeInstance, msg) {
          var f2, obj = {
            id: jspb2.Message.getFieldWithDefault(msg, 1, 0),
            answer: jspb2.Message.getFieldWithDefault(msg, 2, "")
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.ExamAnswer.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.ExamAnswer();
        return proto.ExamAnswer.deserializeBinaryFromReader(msg, reader);
      };
      proto.ExamAnswer.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = (
                /** @type {number} */
                reader.readInt32()
              );
              msg.setId(value);
              break;
            case 2:
              var value = (
                /** @type {string} */
                reader.readString()
              );
              msg.setAnswer(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.ExamAnswer.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.ExamAnswer.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.ExamAnswer.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getId();
        if (f2 !== 0) {
          writer.writeInt32(
            1,
            f2
          );
        }
        f2 = message.getAnswer();
        if (f2.length > 0) {
          writer.writeString(
            2,
            f2
          );
        }
      };
      proto.ExamAnswer.prototype.getId = function() {
        return (
          /** @type {number} */
          jspb2.Message.getFieldWithDefault(this, 1, 0)
        );
      };
      proto.ExamAnswer.prototype.setId = function(value) {
        return jspb2.Message.setProto3IntField(this, 1, value);
      };
      proto.ExamAnswer.prototype.getAnswer = function() {
        return (
          /** @type {string} */
          jspb2.Message.getFieldWithDefault(this, 2, "")
        );
      };
      proto.ExamAnswer.prototype.setAnswer = function(value) {
        return jspb2.Message.setProto3StringField(this, 2, value);
      };
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.ResponseStatus.prototype.toObject = function(opt_includeInstance) {
          return proto.ResponseStatus.toObject(opt_includeInstance, this);
        };
        proto.ResponseStatus.toObject = function(includeInstance, msg) {
          var f2, obj = {
            issuccess: jspb2.Message.getBooleanFieldWithDefault(msg, 1, false),
            message: jspb2.Message.getFieldWithDefault(msg, 2, "")
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.ResponseStatus.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.ResponseStatus();
        return proto.ResponseStatus.deserializeBinaryFromReader(msg, reader);
      };
      proto.ResponseStatus.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = (
                /** @type {boolean} */
                reader.readBool()
              );
              msg.setIssuccess(value);
              break;
            case 2:
              var value = (
                /** @type {string} */
                reader.readString()
              );
              msg.setMessage(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.ResponseStatus.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.ResponseStatus.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.ResponseStatus.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getIssuccess();
        if (f2) {
          writer.writeBool(
            1,
            f2
          );
        }
        f2 = message.getMessage();
        if (f2.length > 0) {
          writer.writeString(
            2,
            f2
          );
        }
      };
      proto.ResponseStatus.prototype.getIssuccess = function() {
        return (
          /** @type {boolean} */
          jspb2.Message.getBooleanFieldWithDefault(this, 1, false)
        );
      };
      proto.ResponseStatus.prototype.setIssuccess = function(value) {
        return jspb2.Message.setProto3BooleanField(this, 1, value);
      };
      proto.ResponseStatus.prototype.getMessage = function() {
        return (
          /** @type {string} */
          jspb2.Message.getFieldWithDefault(this, 2, "")
        );
      };
      proto.ResponseStatus.prototype.setMessage = function(value) {
        return jspb2.Message.setProto3StringField(this, 2, value);
      };
      proto.ExamAnswerParams.repeatedFields_ = [1];
      if (jspb2.Message.GENERATE_TO_OBJECT) {
        proto.ExamAnswerParams.prototype.toObject = function(opt_includeInstance) {
          return proto.ExamAnswerParams.toObject(opt_includeInstance, this);
        };
        proto.ExamAnswerParams.toObject = function(includeInstance, msg) {
          var f2, obj = {
            listList: jspb2.Message.toObjectList(
              msg.getListList(),
              proto.ExamAnswer.toObject,
              includeInstance
            )
          };
          if (includeInstance) {
            obj.$jspbMessageInstance = msg;
          }
          return obj;
        };
      }
      proto.ExamAnswerParams.deserializeBinary = function(bytes) {
        var reader = new jspb2.BinaryReader(bytes);
        var msg = new proto.ExamAnswerParams();
        return proto.ExamAnswerParams.deserializeBinaryFromReader(msg, reader);
      };
      proto.ExamAnswerParams.deserializeBinaryFromReader = function(msg, reader) {
        while (reader.nextField()) {
          if (reader.isEndGroup()) {
            break;
          }
          var field = reader.getFieldNumber();
          switch (field) {
            case 1:
              var value = new proto.ExamAnswer();
              reader.readMessage(value, proto.ExamAnswer.deserializeBinaryFromReader);
              msg.addList(value);
              break;
            default:
              reader.skipField();
              break;
          }
        }
        return msg;
      };
      proto.ExamAnswerParams.prototype.serializeBinary = function() {
        var writer = new jspb2.BinaryWriter();
        proto.ExamAnswerParams.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      };
      proto.ExamAnswerParams.serializeBinaryToWriter = function(message, writer) {
        var f2 = void 0;
        f2 = message.getListList();
        if (f2.length > 0) {
          writer.writeRepeatedMessage(
            1,
            f2,
            proto.ExamAnswer.serializeBinaryToWriter
          );
        }
      };
      proto.ExamAnswerParams.prototype.getListList = function() {
        return (
          /** @type{!Array<!proto.ExamAnswer>} */
          jspb2.Message.getRepeatedWrapperField(this, proto.ExamAnswer, 1)
        );
      };
      proto.ExamAnswerParams.prototype.setListList = function(value) {
        return jspb2.Message.setRepeatedWrapperField(this, 1, value);
      };
      proto.ExamAnswerParams.prototype.addList = function(opt_value, opt_index) {
        return jspb2.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ExamAnswer, opt_index);
      };
      proto.ExamAnswerParams.prototype.clearListList = function() {
        return this.setListList([]);
      };
      goog2.object.extend(exports2, proto);
    }
  });

  // node_modules/notiflix/dist/notiflix-aio-3.2.6.min.js
  var require_notiflix_aio_3_2_6_min = __commonJS({
    "node_modules/notiflix/dist/notiflix-aio-3.2.6.min.js"(exports2, module2) {
      (function(t, e2) {
        "function" == typeof define && define.amd ? define([], function() {
          return e2(t);
        }) : "object" == typeof module2 && "object" == typeof module2.exports ? module2.exports = e2(t) : t.Notiflix = e2(t);
      })("undefined" == typeof global ? "undefined" == typeof window ? exports2 : window : global, function(t) {
        "use strict";
        if ("undefined" == typeof t && "undefined" == typeof t.document)
          return false;
        var e2, i, a2, n, o, r = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation", s = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', l = { Success: "Success", Failure: "Failure", Warning: "Warning", Info: "Info" }, m = { wrapID: "NotiflixNotifyWrap", overlayID: "NotiflixNotifyOverlay", width: "280px", position: "right-top", distance: "10px", opacity: 1, borderRadius: "5px", rtl: false, timeout: 3e3, messageMaxLength: 110, backOverlay: false, backOverlayColor: "rgba(0,0,0,0.5)", plainText: true, showOnlyTheLastOne: false, clickToClose: false, pauseOnHover: true, ID: "NotiflixNotify", className: "notiflix-notify", zindex: 4001, fontFamily: "Quicksand", fontSize: "13px", cssAnimation: true, cssAnimationDuration: 400, cssAnimationStyle: "fade", closeButton: false, useIcon: true, useFontAwesome: false, fontAwesomeIconStyle: "basic", fontAwesomeIconSize: "34px", success: { background: "#32c682", textColor: "#fff", childClassName: "notiflix-notify-success", notiflixIconColor: "rgba(0,0,0,0.2)", fontAwesomeClassName: "fas fa-check-circle", fontAwesomeIconColor: "rgba(0,0,0,0.2)", backOverlayColor: "rgba(50,198,130,0.2)" }, failure: { background: "#ff5549", textColor: "#fff", childClassName: "notiflix-notify-failure", notiflixIconColor: "rgba(0,0,0,0.2)", fontAwesomeClassName: "fas fa-times-circle", fontAwesomeIconColor: "rgba(0,0,0,0.2)", backOverlayColor: "rgba(255,85,73,0.2)" }, warning: { background: "#eebf31", textColor: "#fff", childClassName: "notiflix-notify-warning", notiflixIconColor: "rgba(0,0,0,0.2)", fontAwesomeClassName: "fas fa-exclamation-circle", fontAwesomeIconColor: "rgba(0,0,0,0.2)", backOverlayColor: "rgba(238,191,49,0.2)" }, info: { background: "#26c0d3", textColor: "#fff", childClassName: "notiflix-notify-info", notiflixIconColor: "rgba(0,0,0,0.2)", fontAwesomeClassName: "fas fa-info-circle", fontAwesomeIconColor: "rgba(0,0,0,0.2)", backOverlayColor: "rgba(38,192,211,0.2)" } }, c2 = { Success: "Success", Failure: "Failure", Warning: "Warning", Info: "Info" }, p = { ID: "NotiflixReportWrap", className: "notiflix-report", width: "320px", backgroundColor: "#f8f8f8", borderRadius: "25px", rtl: false, zindex: 4002, backOverlay: true, backOverlayColor: "rgba(0,0,0,0.5)", backOverlayClickToClose: false, fontFamily: "Quicksand", svgSize: "110px", plainText: true, titleFontSize: "16px", titleMaxLength: 34, messageFontSize: "13px", messageMaxLength: 400, buttonFontSize: "14px", buttonMaxLength: 34, cssAnimation: true, cssAnimationDuration: 360, cssAnimationStyle: "fade", success: { svgColor: "#32c682", titleColor: "#1e1e1e", messageColor: "#242424", buttonBackground: "#32c682", buttonColor: "#fff", backOverlayColor: "rgba(50,198,130,0.2)" }, failure: { svgColor: "#ff5549", titleColor: "#1e1e1e", messageColor: "#242424", buttonBackground: "#ff5549", buttonColor: "#fff", backOverlayColor: "rgba(255,85,73,0.2)" }, warning: { svgColor: "#eebf31", titleColor: "#1e1e1e", messageColor: "#242424", buttonBackground: "#eebf31", buttonColor: "#fff", backOverlayColor: "rgba(238,191,49,0.2)" }, info: { svgColor: "#26c0d3", titleColor: "#1e1e1e", messageColor: "#242424", buttonBackground: "#26c0d3", buttonColor: "#fff", backOverlayColor: "rgba(38,192,211,0.2)" } }, f2 = { Show: "Show", Ask: "Ask", Prompt: "Prompt" }, d2 = { ID: "NotiflixConfirmWrap", className: "notiflix-confirm", width: "300px", zindex: 4003, position: "center", distance: "10px", backgroundColor: "#f8f8f8", borderRadius: "25px", backOverlay: true, backOverlayColor: "rgba(0,0,0,0.5)", rtl: false, fontFamily: "Quicksand", cssAnimation: true, cssAnimationDuration: 300, cssAnimationStyle: "fade", plainText: true, titleColor: "#32c682", titleFontSize: "16px", titleMaxLength: 34, messageColor: "#1e1e1e", messageFontSize: "14px", messageMaxLength: 110, buttonsFontSize: "15px", buttonsMaxLength: 34, okButtonColor: "#f8f8f8", okButtonBackground: "#32c682", cancelButtonColor: "#f8f8f8", cancelButtonBackground: "#a9a9a9" }, x = { Standard: "Standard", Hourglass: "Hourglass", Circle: "Circle", Arrows: "Arrows", Dots: "Dots", Pulse: "Pulse", Custom: "Custom", Notiflix: "Notiflix" }, g = { ID: "NotiflixLoadingWrap", className: "notiflix-loading", zindex: 4e3, backgroundColor: "rgba(0,0,0,0.8)", rtl: false, fontFamily: "Quicksand", cssAnimation: true, cssAnimationDuration: 400, clickToClose: false, customSvgUrl: null, customSvgCode: null, svgSize: "80px", svgColor: "#32c682", messageID: "NotiflixLoadingMessage", messageFontSize: "15px", messageMaxLength: 34, messageColor: "#dcdcdc" }, b2 = { Standard: "Standard", Hourglass: "Hourglass", Circle: "Circle", Arrows: "Arrows", Dots: "Dots", Pulse: "Pulse" }, u = { ID: "NotiflixBlockWrap", querySelectorLimit: 200, className: "notiflix-block", position: "absolute", zindex: 1e3, backgroundColor: "rgba(255,255,255,0.9)", rtl: false, fontFamily: "Quicksand", cssAnimation: true, cssAnimationDuration: 300, svgSize: "45px", svgColor: "#383838", messageFontSize: "14px", messageMaxLength: 34, messageColor: "#383838" }, y = function(t2) {
          return console.error("%c Notiflix Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + t2 + r);
        }, k = function(t2) {
          return console.log("%c Notiflix Info ", "padding:2px;border-radius:20px;color:#fff;background:#26c0d3", "\n" + t2 + r);
        }, w = function(e3) {
          return e3 || (e3 = "head"), null !== t.document[e3] || (y('\nNotiflix needs to be appended to the "<' + e3 + '>" element, but you called it before the "<' + e3 + '>" element has been created.'), false);
        }, h = function(e3, i2) {
          if (!w("head"))
            return false;
          if (null !== e3() && !t.document.getElementById(i2)) {
            var a3 = t.document.createElement("style");
            a3.id = i2, a3.innerHTML = e3(), t.document.head.appendChild(a3);
          }
        }, v = function() {
          var t2 = {}, e3 = false, a3 = 0;
          "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e3 = arguments[0], a3++);
          for (var n2 = function(i2) {
            for (var a4 in i2)
              Object.prototype.hasOwnProperty.call(i2, a4) && (t2[a4] = e3 && "[object Object]" === Object.prototype.toString.call(i2[a4]) ? v(t2[a4], i2[a4]) : i2[a4]);
          }; a3 < arguments.length; a3++)
            n2(arguments[a3]);
          return t2;
        }, N = function(e3) {
          var i2 = t.document.createElement("div");
          return i2.innerHTML = e3, i2.textContent || i2.innerText || "";
        }, C = function(t2, e3) {
          t2 || (t2 = "110px"), e3 || (e3 = "#32c682");
          var i2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + t2 + '" height="' + t2 + '" fill="' + e3 + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
          return i2;
        }, z = function(t2, e3) {
          t2 || (t2 = "110px"), e3 || (e3 = "#ff5549");
          var i2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + t2 + '" height="' + t2 + '" fill="' + e3 + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
          return i2;
        }, S = function(t2, e3) {
          t2 || (t2 = "110px"), e3 || (e3 = "#eebf31");
          var i2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + t2 + '" height="' + t2 + '" fill="' + e3 + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
          return i2;
        }, L = function(t2, e3) {
          t2 || (t2 = "110px"), e3 || (e3 = "#26c0d3");
          var i2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + t2 + '" height="' + t2 + '" fill="' + e3 + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
          return i2;
        }, W = function(t2, e3) {
          t2 || (t2 = "60px"), e3 || (e3 = "#32c682");
          var i2 = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e3 + '" width="' + t2 + '" height="' + t2 + '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';
          return i2;
        }, I = function(t2, e3) {
          t2 || (t2 = "60px"), e3 || (e3 = "#32c682");
          var i2 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' + e3 + '" width="' + t2 + '" height="' + t2 + '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';
          return i2;
        }, R = function(t2, e3) {
          t2 || (t2 = "60px"), e3 || (e3 = "#32c682");
          var i2 = '<svg xmlns="http://www.w3.org/2000/svg" width="' + t2 + '" height="' + t2 + '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' + t2 + ";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:" + t2 + ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' + e3 + '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';
          return i2;
        }, A = function(t2, e3) {
          t2 || (t2 = "60px"), e3 || (e3 = "#32c682");
          var i2 = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e3 + '" width="' + t2 + '" height="' + t2 + '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';
          return i2;
        }, M = function(t2, e3) {
          t2 || (t2 = "60px"), e3 || (e3 = "#32c682");
          var i2 = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e3 + '" width="' + t2 + '" height="' + t2 + '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';
          return i2;
        }, B = function(t2, e3) {
          t2 || (t2 = "60px"), e3 || (e3 = "#32c682");
          var i2 = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e3 + '" width="' + t2 + '" height="' + t2 + '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';
          return i2;
        }, X = function(t2, e3, i2) {
          t2 || (t2 = "60px"), e3 || (e3 = "#f8f8f8"), i2 || (i2 = "#32c682");
          var a3 = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' + t2 + '" height="' + t2 + '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:' + e3 + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' + i2 + '" stroke="' + i2 + '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';
          return a3;
        }, D = function() {
          return '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
        }, T = 0, F = function(a3, n2, o2, r2) {
          if (!w("body"))
            return false;
          e2 || G.Notify.init({});
          var c3 = v(true, e2, {});
          if ("object" == typeof o2 && !Array.isArray(o2) || "object" == typeof r2 && !Array.isArray(r2)) {
            var p2 = {};
            "object" == typeof o2 ? p2 = o2 : "object" == typeof r2 && (p2 = r2), e2 = v(true, e2, p2);
          }
          var f3 = e2[a3.toLocaleLowerCase("en")];
          T++, "string" != typeof n2 && (n2 = "Notiflix " + a3), e2.plainText && (n2 = N(n2)), !e2.plainText && n2.length > e2.messageMaxLength && (e2 = v(true, e2, { closeButton: true, messageMaxLength: 150 }), n2 = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'), n2.length > e2.messageMaxLength && (n2 = n2.substring(0, e2.messageMaxLength) + "..."), "shadow" === e2.fontAwesomeIconStyle && (f3.fontAwesomeIconColor = f3.background), e2.cssAnimation || (e2.cssAnimationDuration = 0);
          var d3 = t.document.getElementById(m.wrapID) || t.document.createElement("div");
          if (d3.id = m.wrapID, d3.style.width = e2.width, d3.style.zIndex = e2.zindex, d3.style.opacity = e2.opacity, "center-center" === e2.position ? (d3.style.left = e2.distance, d3.style.top = e2.distance, d3.style.right = e2.distance, d3.style.bottom = e2.distance, d3.style.margin = "auto", d3.classList.add("nx-flex-center-center"), d3.style.maxHeight = "calc((100vh - " + e2.distance + ") - " + e2.distance + ")", d3.style.display = "flex", d3.style.flexWrap = "wrap", d3.style.flexDirection = "column", d3.style.justifyContent = "center", d3.style.alignItems = "center", d3.style.pointerEvents = "none") : "center-top" === e2.position ? (d3.style.left = e2.distance, d3.style.right = e2.distance, d3.style.top = e2.distance, d3.style.bottom = "auto", d3.style.margin = "auto") : "center-bottom" === e2.position ? (d3.style.left = e2.distance, d3.style.right = e2.distance, d3.style.bottom = e2.distance, d3.style.top = "auto", d3.style.margin = "auto") : "right-bottom" === e2.position ? (d3.style.right = e2.distance, d3.style.bottom = e2.distance, d3.style.top = "auto", d3.style.left = "auto") : "left-top" === e2.position ? (d3.style.left = e2.distance, d3.style.top = e2.distance, d3.style.right = "auto", d3.style.bottom = "auto") : "left-bottom" === e2.position ? (d3.style.left = e2.distance, d3.style.bottom = e2.distance, d3.style.top = "auto", d3.style.right = "auto") : (d3.style.right = e2.distance, d3.style.top = e2.distance, d3.style.left = "auto", d3.style.bottom = "auto"), e2.backOverlay) {
            var x2 = t.document.getElementById(m.overlayID) || t.document.createElement("div");
            x2.id = m.overlayID, x2.style.width = "100%", x2.style.height = "100%", x2.style.position = "fixed", x2.style.zIndex = e2.zindex - 1, x2.style.left = 0, x2.style.top = 0, x2.style.right = 0, x2.style.bottom = 0, x2.style.background = f3.backOverlayColor || e2.backOverlayColor, x2.className = e2.cssAnimation ? "nx-with-animation" : "", x2.style.animationDuration = e2.cssAnimation ? e2.cssAnimationDuration + "ms" : "", t.document.getElementById(m.overlayID) || t.document.body.appendChild(x2);
          }
          t.document.getElementById(m.wrapID) || t.document.body.appendChild(d3);
          var g2 = t.document.createElement("div");
          g2.id = e2.ID + "-" + T, g2.className = e2.className + " " + f3.childClassName + " " + (e2.cssAnimation ? "nx-with-animation" : "") + " " + (e2.useIcon ? "nx-with-icon" : "") + " nx-" + e2.cssAnimationStyle + " " + (e2.closeButton && "function" != typeof o2 ? "nx-with-close-button" : "") + " " + ("function" == typeof o2 ? "nx-with-callback" : "") + " " + (e2.clickToClose ? "nx-notify-click-to-close" : ""), g2.style.fontSize = e2.fontSize, g2.style.color = f3.textColor, g2.style.background = f3.background, g2.style.borderRadius = e2.borderRadius, g2.style.pointerEvents = "all", e2.rtl && (g2.setAttribute("dir", "rtl"), g2.classList.add("nx-rtl-on")), g2.style.fontFamily = '"' + e2.fontFamily + '", ' + s, e2.cssAnimation && (g2.style.animationDuration = e2.cssAnimationDuration + "ms");
          var b3 = "";
          if (e2.closeButton && "function" != typeof o2 && (b3 = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + f3.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'), !e2.useIcon)
            g2.innerHTML = '<span class="nx-message">' + n2 + "</span>" + (e2.closeButton ? b3 : "");
          else if (e2.useFontAwesome)
            g2.innerHTML = '<i style="color:' + f3.fontAwesomeIconColor + "; font-size:" + e2.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + f3.fontAwesomeClassName + " " + ("shadow" === e2.fontAwesomeIconStyle ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + n2 + "</span>" + (e2.closeButton ? b3 : "");
          else {
            var u2 = "";
            a3 === l.Success ? u2 = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f3.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>' : a3 === l.Failure ? u2 = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f3.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>' : a3 === l.Warning ? u2 = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f3.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>' : a3 === l.Info && (u2 = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f3.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'), g2.innerHTML = u2 + '<span class="nx-message nx-with-icon">' + n2 + "</span>" + (e2.closeButton ? b3 : "");
          }
          if ("left-bottom" === e2.position || "right-bottom" === e2.position) {
            var y2 = t.document.getElementById(m.wrapID);
            y2.insertBefore(g2, y2.firstChild);
          } else
            t.document.getElementById(m.wrapID).appendChild(g2);
          var k2 = t.document.getElementById(g2.id);
          if (k2) {
            var h2, C2, z2 = function() {
              k2.classList.add("nx-remove");
              var e3 = t.document.getElementById(m.overlayID);
              e3 && 0 >= d3.childElementCount && e3.classList.add("nx-remove"), clearTimeout(h2);
            }, S2 = function() {
              if (k2 && null !== k2.parentNode && k2.parentNode.removeChild(k2), 0 >= d3.childElementCount && null !== d3.parentNode) {
                d3.parentNode.removeChild(d3);
                var e3 = t.document.getElementById(m.overlayID);
                e3 && null !== e3.parentNode && e3.parentNode.removeChild(e3);
              }
              clearTimeout(C2);
            };
            if (e2.closeButton && "function" != typeof o2) {
              var L2 = t.document.getElementById(g2.id).querySelector("span.nx-close-button");
              L2.addEventListener("click", function() {
                z2();
                var t2 = setTimeout(function() {
                  S2(), clearTimeout(t2);
                }, e2.cssAnimationDuration);
              });
            }
            if (("function" == typeof o2 || e2.clickToClose) && k2.addEventListener("click", function() {
              "function" == typeof o2 && o2(), z2();
              var t2 = setTimeout(function() {
                S2(), clearTimeout(t2);
              }, e2.cssAnimationDuration);
            }), !e2.closeButton && "function" != typeof o2) {
              var W2 = function() {
                h2 = setTimeout(function() {
                  z2();
                }, e2.timeout), C2 = setTimeout(function() {
                  S2();
                }, e2.timeout + e2.cssAnimationDuration);
              };
              W2(), e2.pauseOnHover && (k2.addEventListener("mouseenter", function() {
                k2.classList.add("nx-paused"), clearTimeout(h2), clearTimeout(C2);
              }), k2.addEventListener("mouseleave", function() {
                k2.classList.remove("nx-paused"), W2();
              }));
            }
          }
          if (e2.showOnlyTheLastOne && 0 < T)
            for (var I2, R2 = t.document.querySelectorAll("[id^=" + e2.ID + "-]:not([id=" + e2.ID + "-" + T + "])"), A2 = 0; A2 < R2.length; A2++)
              I2 = R2[A2], null !== I2.parentNode && I2.parentNode.removeChild(I2);
          e2 = v(true, e2, c3);
        }, E = function() {
          return '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
        }, j = function(e3, a3, n2, o2, r2, l2) {
          if (!w("body"))
            return false;
          i || G.Report.init({});
          var m2 = {};
          if ("object" == typeof r2 && !Array.isArray(r2) || "object" == typeof l2 && !Array.isArray(l2)) {
            var f3 = {};
            "object" == typeof r2 ? f3 = r2 : "object" == typeof l2 && (f3 = l2), m2 = v(true, i, {}), i = v(true, i, f3);
          }
          var d3 = i[e3.toLocaleLowerCase("en")];
          "string" != typeof a3 && (a3 = "Notiflix " + e3), "string" != typeof n2 && (e3 === c2.Success ? n2 = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein' : e3 === c2.Failure ? n2 = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford' : e3 === c2.Warning ? n2 = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk' : e3 === c2.Info && (n2 = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')), "string" != typeof o2 && (o2 = "Okay"), i.plainText && (a3 = N(a3), n2 = N(n2), o2 = N(o2)), i.plainText || (a3.length > i.titleMaxLength && (a3 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.', o2 = "Okay"), n2.length > i.messageMaxLength && (a3 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.', o2 = "Okay"), o2.length > i.buttonMaxLength && (a3 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.', o2 = "Okay")), a3.length > i.titleMaxLength && (a3 = a3.substring(0, i.titleMaxLength) + "..."), n2.length > i.messageMaxLength && (n2 = n2.substring(0, i.messageMaxLength) + "..."), o2.length > i.buttonMaxLength && (o2 = o2.substring(0, i.buttonMaxLength) + "..."), i.cssAnimation || (i.cssAnimationDuration = 0);
          var x2 = t.document.createElement("div");
          x2.id = p.ID, x2.className = i.className, x2.style.zIndex = i.zindex, x2.style.borderRadius = i.borderRadius, x2.style.fontFamily = '"' + i.fontFamily + '", ' + s, i.rtl && (x2.setAttribute("dir", "rtl"), x2.classList.add("nx-rtl-on")), x2.style.display = "flex", x2.style.flexWrap = "wrap", x2.style.flexDirection = "column", x2.style.alignItems = "center", x2.style.justifyContent = "center";
          var g2 = "", b3 = true === i.backOverlayClickToClose;
          i.backOverlay && (g2 = '<div class="' + i.className + "-overlay" + (i.cssAnimation ? " nx-with-animation" : "") + (b3 ? " nx-report-click-to-close" : "") + '" style="background:' + (d3.backOverlayColor || i.backOverlayColor) + ";animation-duration:" + i.cssAnimationDuration + 'ms;"></div>');
          var u2 = "";
          if (e3 === c2.Success ? u2 = C(i.svgSize, d3.svgColor) : e3 === c2.Failure ? u2 = z(i.svgSize, d3.svgColor) : e3 === c2.Warning ? u2 = S(i.svgSize, d3.svgColor) : e3 === c2.Info && (u2 = L(i.svgSize, d3.svgColor)), x2.innerHTML = g2 + '<div class="' + i.className + "-content" + (i.cssAnimation ? " nx-with-animation " : "") + " nx-" + i.cssAnimationStyle + '" style="width:' + i.width + "; background:" + i.backgroundColor + "; animation-duration:" + i.cssAnimationDuration + 'ms;"><div style="width:' + i.svgSize + "; height:" + i.svgSize + ';" class="' + i.className + '-icon">' + u2 + '</div><h5 class="' + i.className + '-title" style="font-weight:500; font-size:' + i.titleFontSize + "; color:" + d3.titleColor + ';">' + a3 + '</h5><p class="' + i.className + '-message" style="font-size:' + i.messageFontSize + "; color:" + d3.messageColor + ';">' + n2 + '</p><a id="NXReportButton" class="' + i.className + '-button" style="font-weight:500; font-size:' + i.buttonFontSize + "; background:" + d3.buttonBackground + "; color:" + d3.buttonColor + ';">' + o2 + "</a></div>", !t.document.getElementById(x2.id)) {
            t.document.body.appendChild(x2);
            var y2 = function() {
              var e4 = t.document.getElementById(x2.id);
              e4.classList.add("nx-remove");
              var a4 = setTimeout(function() {
                null !== e4.parentNode && e4.parentNode.removeChild(e4), clearTimeout(a4);
              }, i.cssAnimationDuration);
            }, k2 = t.document.getElementById("NXReportButton");
            if (k2.addEventListener("click", function() {
              "function" == typeof r2 && r2(), y2();
            }), g2 && b3) {
              var h2 = t.document.querySelector(".nx-report-click-to-close");
              h2.addEventListener("click", function() {
                y2();
              });
            }
          }
          i = v(true, i, m2);
        }, O = function() {
          return '[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
        }, H = function(e3, i2, n2, o2, r2, l2, m2, c3, p2) {
          if (!w("body"))
            return false;
          a2 || G.Confirm.init({});
          var x2 = v(true, a2, {});
          "object" != typeof p2 || Array.isArray(p2) || (a2 = v(true, a2, p2)), "string" != typeof i2 && (i2 = "Notiflix Confirm"), "string" != typeof n2 && (n2 = "Do you agree with me?"), "string" != typeof r2 && (r2 = "Yes"), "string" != typeof l2 && (l2 = "No"), "function" != typeof m2 && (m2 = void 0), "function" != typeof c3 && (c3 = void 0), a2.plainText && (i2 = N(i2), n2 = N(n2), r2 = N(r2), l2 = N(l2)), a2.plainText || (i2.length > a2.titleMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.', r2 = "Okay", l2 = "..."), n2.length > a2.messageMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.', r2 = "Okay", l2 = "..."), (r2.length || l2.length) > a2.buttonsMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.', r2 = "Okay", l2 = "...")), i2.length > a2.titleMaxLength && (i2 = i2.substring(0, a2.titleMaxLength) + "..."), n2.length > a2.messageMaxLength && (n2 = n2.substring(0, a2.messageMaxLength) + "..."), r2.length > a2.buttonsMaxLength && (r2 = r2.substring(0, a2.buttonsMaxLength) + "..."), l2.length > a2.buttonsMaxLength && (l2 = l2.substring(0, a2.buttonsMaxLength) + "..."), a2.cssAnimation || (a2.cssAnimationDuration = 0);
          var g2 = t.document.createElement("div");
          g2.id = d2.ID, g2.className = a2.className + (a2.cssAnimation ? " nx-with-animation nx-" + a2.cssAnimationStyle : ""), g2.style.zIndex = a2.zindex, g2.style.padding = a2.distance, a2.rtl && (g2.setAttribute("dir", "rtl"), g2.classList.add("nx-rtl-on"));
          var b3 = "string" == typeof a2.position ? a2.position.trim() : "center";
          g2.classList.add("nx-position-" + b3), g2.style.fontFamily = '"' + a2.fontFamily + '", ' + s;
          var u2 = "";
          a2.backOverlay && (u2 = '<div class="' + a2.className + "-overlay" + (a2.cssAnimation ? " nx-with-animation" : "") + '" style="background:' + a2.backOverlayColor + ";animation-duration:" + a2.cssAnimationDuration + 'ms;"></div>');
          var y2 = "";
          "function" == typeof m2 && (y2 = '<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:' + a2.cancelButtonColor + ";background:" + a2.cancelButtonBackground + ";font-size:" + a2.buttonsFontSize + ';">' + l2 + "</a>");
          var k2 = "", h2 = null, C2 = void 0;
          if (e3 === f2.Ask || e3 === f2.Prompt) {
            h2 = o2 || "";
            var z2 = e3 === f2.Ask ? Math.ceil(1.5 * h2.length) : 200 < h2.length ? Math.ceil(1.5 * h2.length) : 250, S2 = e3 === f2.Prompt ? 'value="' + h2 + '"' : "";
            k2 = '<div><input id="NXConfirmValidationInput" type="text" ' + S2 + ' maxlength="' + z2 + '" style="font-size:' + a2.messageFontSize + ";border-radius: " + a2.borderRadius + ';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>';
          }
          if (g2.innerHTML = u2 + '<div class="' + a2.className + '-content" style="width:' + a2.width + "; background:" + a2.backgroundColor + "; animation-duration:" + a2.cssAnimationDuration + "ms; border-radius: " + a2.borderRadius + ';"><div class="' + a2.className + '-head"><h5 style="color:' + a2.titleColor + ";font-size:" + a2.titleFontSize + ';">' + i2 + '</h5><div style="color:' + a2.messageColor + ";font-size:" + a2.messageFontSize + ';">' + n2 + k2 + '</div></div><div class="' + a2.className + '-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok' + ("function" == typeof m2 ? "" : " nx-full") + '" style="color:' + a2.okButtonColor + ";background:" + a2.okButtonBackground + ";font-size:" + a2.buttonsFontSize + ';">' + r2 + "</a>" + y2 + "</div></div>", !t.document.getElementById(g2.id)) {
            t.document.body.appendChild(g2);
            var L2 = t.document.getElementById(g2.id), W2 = t.document.getElementById("NXConfirmButtonOk"), I2 = t.document.getElementById("NXConfirmValidationInput");
            if (I2 && (I2.focus(), I2.setSelectionRange(0, (I2.value || "").length), I2.addEventListener("keyup", function(t2) {
              var i3 = t2.target.value;
              if (e3 === f2.Ask && i3 !== h2)
                t2.preventDefault(), I2.classList.add("nx-validation-failure"), I2.classList.remove("nx-validation-success");
              else {
                e3 === f2.Ask && (I2.classList.remove("nx-validation-failure"), I2.classList.add("nx-validation-success"));
                var a3 = "enter" === (t2.key || "").toLocaleLowerCase("en") || 13 === t2.keyCode;
                a3 && W2.dispatchEvent(new Event("click"));
              }
            })), W2.addEventListener("click", function(t2) {
              if (e3 === f2.Ask && h2 && I2) {
                var i3 = (I2.value || "").toString();
                if (i3 !== h2)
                  return I2.focus(), I2.classList.add("nx-validation-failure"), t2.stopPropagation(), t2.preventDefault(), t2.returnValue = false, t2.cancelBubble = true, false;
                I2.classList.remove("nx-validation-failure");
              }
              "function" == typeof m2 && (e3 === f2.Prompt && I2 && (C2 = I2.value || ""), m2(C2)), L2.classList.add("nx-remove");
              var n3 = setTimeout(function() {
                null !== L2.parentNode && (L2.parentNode.removeChild(L2), clearTimeout(n3));
              }, a2.cssAnimationDuration);
            }), "function" == typeof m2) {
              var R2 = t.document.getElementById("NXConfirmButtonCancel");
              R2.addEventListener("click", function() {
                "function" == typeof c3 && (e3 === f2.Prompt && I2 && (C2 = I2.value || ""), c3(C2)), L2.classList.add("nx-remove");
                var t2 = setTimeout(function() {
                  null !== L2.parentNode && (L2.parentNode.removeChild(L2), clearTimeout(t2));
                }, a2.cssAnimationDuration);
              });
            }
          }
          a2 = v(true, a2, x2);
        }, P = function() {
          return '[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';
        }, U = function(e3, i2, a3, o2, r2) {
          if (!w("body"))
            return false;
          n || G.Loading.init({});
          var l2 = v(true, n, {});
          if ("object" == typeof i2 && !Array.isArray(i2) || "object" == typeof a3 && !Array.isArray(a3)) {
            var m2 = {};
            "object" == typeof i2 ? m2 = i2 : "object" == typeof a3 && (m2 = a3), n = v(true, n, m2);
          }
          var c3 = "";
          if ("string" == typeof i2 && 0 < i2.length && (c3 = i2), o2) {
            c3 = c3.length > n.messageMaxLength ? N(c3).toString().substring(0, n.messageMaxLength) + "..." : N(c3).toString();
            var p2 = "";
            0 < c3.length && (p2 = '<p id="' + n.messageID + '" class="nx-loading-message" style="color:' + n.messageColor + ";font-size:" + n.messageFontSize + ';">' + c3 + "</p>"), n.cssAnimation || (n.cssAnimationDuration = 0);
            var f3 = "";
            if (e3 === x.Standard)
              f3 = W(n.svgSize, n.svgColor);
            else if (e3 === x.Hourglass)
              f3 = I(n.svgSize, n.svgColor);
            else if (e3 === x.Circle)
              f3 = R(n.svgSize, n.svgColor);
            else if (e3 === x.Arrows)
              f3 = A(n.svgSize, n.svgColor);
            else if (e3 === x.Dots)
              f3 = M(n.svgSize, n.svgColor);
            else if (e3 === x.Pulse)
              f3 = B(n.svgSize, n.svgColor);
            else if (e3 === x.Custom && null !== n.customSvgCode && null === n.customSvgUrl)
              f3 = n.customSvgCode || "";
            else if (e3 === x.Custom && null !== n.customSvgUrl && null === n.customSvgCode)
              f3 = '<img class="nx-custom-loading-icon" width="' + n.svgSize + '" height="' + n.svgSize + '" src="' + n.customSvgUrl + '" alt="Notiflix">';
            else {
              if (e3 === x.Custom && (null === n.customSvgUrl || null === n.customSvgCode))
                return y('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'), false;
              f3 = X(n.svgSize, "#f8f8f8", "#32c682");
            }
            var d3 = parseInt((n.svgSize || "").replace(/[^0-9]/g, "")), b3 = t.innerWidth, u2 = d3 >= b3 ? b3 - 40 + "px" : d3 + "px", k2 = '<div style="width:' + u2 + "; height:" + u2 + ';" class="' + n.className + "-icon" + (0 < c3.length ? " nx-with-message" : "") + '">' + f3 + "</div>", h2 = t.document.createElement("div");
            if (h2.id = g.ID, h2.className = n.className + (n.cssAnimation ? " nx-with-animation" : "") + (n.clickToClose ? " nx-loading-click-to-close" : ""), h2.style.zIndex = n.zindex, h2.style.background = n.backgroundColor, h2.style.animationDuration = n.cssAnimationDuration + "ms", h2.style.fontFamily = '"' + n.fontFamily + '", ' + s, h2.style.display = "flex", h2.style.flexWrap = "wrap", h2.style.flexDirection = "column", h2.style.alignItems = "center", h2.style.justifyContent = "center", n.rtl && (h2.setAttribute("dir", "rtl"), h2.classList.add("nx-rtl-on")), h2.innerHTML = k2 + p2, !t.document.getElementById(h2.id) && (t.document.body.appendChild(h2), n.clickToClose)) {
              var C2 = t.document.getElementById(h2.id);
              C2.addEventListener("click", function() {
                h2.classList.add("nx-remove");
                var t2 = setTimeout(function() {
                  null !== h2.parentNode && (h2.parentNode.removeChild(h2), clearTimeout(t2));
                }, n.cssAnimationDuration);
              });
            }
          } else if (t.document.getElementById(g.ID))
            var z2 = t.document.getElementById(g.ID), S2 = setTimeout(function() {
              z2.classList.add("nx-remove");
              var t2 = setTimeout(function() {
                null !== z2.parentNode && (z2.parentNode.removeChild(z2), clearTimeout(t2));
              }, n.cssAnimationDuration);
              clearTimeout(S2);
            }, r2);
          n = v(true, n, l2);
        }, V = function(e3) {
          "string" != typeof e3 && (e3 = "");
          var i2 = t.document.getElementById(g.ID);
          if (i2)
            if (0 < e3.length) {
              e3 = e3.length > n.messageMaxLength ? N(e3).substring(0, n.messageMaxLength) + "..." : N(e3);
              var a3 = i2.getElementsByTagName("p")[0];
              if (a3)
                a3.innerHTML = e3;
              else {
                var o2 = t.document.createElement("p");
                o2.id = n.messageID, o2.className = "nx-loading-message nx-loading-message-new", o2.style.color = n.messageColor, o2.style.fontSize = n.messageFontSize, o2.innerHTML = e3, i2.appendChild(o2);
              }
            } else
              y("Where is the new message?");
        }, q = function() {
          return '[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}';
        }, Q = 0, Y = function(e3, i2, a3, n2, r2, l2) {
          var m2;
          if (Array.isArray(a3)) {
            if (1 > a3.length)
              return y("Array of HTMLElements should contains at least one HTMLElement."), false;
            m2 = a3;
          } else if (Object.prototype.isPrototypeOf.call(NodeList.prototype, a3)) {
            if (1 > a3.length)
              return y("NodeListOf<HTMLElement> should contains at least one HTMLElement."), false;
            m2 = Array.prototype.slice.call(a3);
          } else {
            var c3 = "string" != typeof a3 || 1 > (a3 || "").length || 1 === (a3 || "").length && ("#" === (a3 || "")[0] || "." === (a3 || "")[0]);
            if (c3)
              return y("The selector parameter must be a string and matches a specified CSS selector(s)."), false;
            var p2 = t.document.querySelectorAll(a3);
            if (1 > p2.length)
              return y('You called the "Notiflix.Block..." function with "' + a3 + '" selector, but there is no such element(s) in the document.'), false;
            m2 = p2;
          }
          o || G.Block.init({});
          var f3 = v(true, o, {});
          if ("object" == typeof n2 && !Array.isArray(n2) || "object" == typeof r2 && !Array.isArray(r2)) {
            var d3 = {};
            "object" == typeof n2 ? d3 = n2 : "object" == typeof r2 && (d3 = r2), o = v(true, o, d3);
          }
          var x2 = "";
          "string" == typeof n2 && 0 < n2.length && (x2 = n2), o.cssAnimation || (o.cssAnimationDuration = 0);
          var g2 = u.className;
          "string" == typeof o.className && (g2 = o.className.trim());
          var h2 = "number" == typeof o.querySelectorLimit ? o.querySelectorLimit : 200, C2 = (m2 || []).length >= h2 ? h2 : m2.length, z2 = "nx-block-temporary-position";
          if (e3) {
            for (var S2, L2 = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr", "html", "head", "title", "script", "style", "iframe"], X2 = 0; X2 < C2; X2++)
              if (S2 = m2[X2], S2) {
                if (-1 < L2.indexOf(S2.tagName.toLocaleLowerCase("en")))
                  break;
                var D2 = S2.querySelectorAll("[id^=" + u.ID + "]");
                if (1 > D2.length) {
                  var T2 = "";
                  i2 && (i2 === b2.Hourglass ? T2 = I(o.svgSize, o.svgColor) : i2 === b2.Circle ? T2 = R(o.svgSize, o.svgColor) : i2 === b2.Arrows ? T2 = A(o.svgSize, o.svgColor) : i2 === b2.Dots ? T2 = M(o.svgSize, o.svgColor) : i2 === b2.Pulse ? T2 = B(o.svgSize, o.svgColor) : T2 = W(o.svgSize, o.svgColor));
                  var F2 = '<span class="' + g2 + '-icon" style="width:' + o.svgSize + ";height:" + o.svgSize + ';">' + T2 + "</span>", E2 = "";
                  0 < x2.length && (x2 = x2.length > o.messageMaxLength ? N(x2).substring(0, o.messageMaxLength) + "..." : N(x2), E2 = '<span style="font-size:' + o.messageFontSize + ";color:" + o.messageColor + ';" class="' + g2 + '-message">' + x2 + "</span>"), Q++;
                  var j2 = t.document.createElement("div");
                  j2.id = u.ID + "-" + Q, j2.className = g2 + (o.cssAnimation ? " nx-with-animation" : ""), j2.style.position = o.position, j2.style.zIndex = o.zindex, j2.style.background = o.backgroundColor, j2.style.animationDuration = o.cssAnimationDuration + "ms", j2.style.fontFamily = '"' + o.fontFamily + '", ' + s, j2.style.display = "flex", j2.style.flexWrap = "wrap", j2.style.flexDirection = "column", j2.style.alignItems = "center", j2.style.justifyContent = "center", o.rtl && (j2.setAttribute("dir", "rtl"), j2.classList.add("nx-rtl-on")), j2.innerHTML = F2 + E2;
                  var O2 = t.getComputedStyle(S2).getPropertyValue("position"), H2 = "string" == typeof O2 ? O2.toLocaleLowerCase("en") : "relative", P2 = Math.round(1.25 * parseInt(o.svgSize)) + 40, U2 = S2.offsetHeight || 0, V2 = "";
                  P2 > U2 && (V2 = "min-height:" + P2 + "px;");
                  var q2 = "";
                  q2 = S2.getAttribute("id") ? "#" + S2.getAttribute("id") : S2.classList[0] ? "." + S2.classList[0] : (S2.tagName || "").toLocaleLowerCase("en");
                  var Y2 = "", K = -1 >= ["absolute", "relative", "fixed", "sticky"].indexOf(H2);
                  if (K || 0 < V2.length) {
                    if (!w("head"))
                      return false;
                    K && (Y2 = "position:relative!important;");
                    var $2 = '<style id="Style-' + u.ID + "-" + Q + '">' + q2 + "." + z2 + "{" + Y2 + V2 + "}</style>", J = t.document.createRange();
                    J.selectNode(t.document.head);
                    var Z = J.createContextualFragment($2);
                    t.document.head.appendChild(Z), S2.classList.add(z2);
                  }
                  S2.appendChild(j2);
                }
              }
          } else
            var _ = function(e4) {
              var i3 = setTimeout(function() {
                null !== e4.parentNode && e4.parentNode.removeChild(e4);
                var a4 = e4.getAttribute("id"), n3 = t.document.getElementById("Style-" + a4);
                n3 && null !== n3.parentNode && n3.parentNode.removeChild(n3), clearTimeout(i3);
              }, o.cssAnimationDuration);
            }, tt = function(t2) {
              if (t2 && 0 < t2.length)
                for (var e4, n3 = 0; n3 < t2.length; n3++)
                  e4 = t2[n3], e4 && (e4.classList.add("nx-remove"), _(e4));
              else
                "string" == typeof a3 ? k('"Notiflix.Block.remove();" function called with "' + a3 + '" selector, but this selector does not have a "Block" element to remove.') : k('"Notiflix.Block.remove();" function called with "' + a3 + '", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.');
            }, et = function(t2) {
              var e4 = setTimeout(function() {
                t2.classList.remove(z2), clearTimeout(e4);
              }, o.cssAnimationDuration + 300);
            }, it = setTimeout(function() {
              for (var t2, e4 = 0; e4 < C2; e4++)
                t2 = m2[e4], t2 && (et(t2), D2 = t2.querySelectorAll("[id^=" + u.ID + "]"), tt(D2));
              clearTimeout(it);
            }, l2);
          o = v(true, o, f3);
        }, G = { Notify: { init: function(t2) {
          e2 = v(true, m, t2), h(D, "NotiflixNotifyInternalCSS");
        }, merge: function(t2) {
          return e2 ? void (e2 = v(true, e2, t2)) : (y("You have to initialize the Notify module before call Merge function."), false);
        }, success: function(t2, e3, i2) {
          F(l.Success, t2, e3, i2);
        }, failure: function(t2, e3, i2) {
          F(l.Failure, t2, e3, i2);
        }, warning: function(t2, e3, i2) {
          F(l.Warning, t2, e3, i2);
        }, info: function(t2, e3, i2) {
          F(l.Info, t2, e3, i2);
        } }, Report: { init: function(t2) {
          i = v(true, p, t2), h(E, "NotiflixReportInternalCSS");
        }, merge: function(t2) {
          return i ? void (i = v(true, i, t2)) : (y("You have to initialize the Report module before call Merge function."), false);
        }, success: function(t2, e3, i2, a3, n2) {
          j(c2.Success, t2, e3, i2, a3, n2);
        }, failure: function(t2, e3, i2, a3, n2) {
          j(c2.Failure, t2, e3, i2, a3, n2);
        }, warning: function(t2, e3, i2, a3, n2) {
          j(c2.Warning, t2, e3, i2, a3, n2);
        }, info: function(t2, e3, i2, a3, n2) {
          j(c2.Info, t2, e3, i2, a3, n2);
        } }, Confirm: { init: function(t2) {
          a2 = v(true, d2, t2), h(O, "NotiflixConfirmInternalCSS");
        }, merge: function(t2) {
          return a2 ? void (a2 = v(true, a2, t2)) : (y("You have to initialize the Confirm module before call Merge function."), false);
        }, show: function(t2, e3, i2, a3, n2, o2, r2) {
          H(f2.Show, t2, e3, null, i2, a3, n2, o2, r2);
        }, ask: function(t2, e3, i2, a3, n2, o2, r2, s2) {
          H(f2.Ask, t2, e3, i2, a3, n2, o2, r2, s2);
        }, prompt: function(t2, e3, i2, a3, n2, o2, r2, s2) {
          H(f2.Prompt, t2, e3, i2, a3, n2, o2, r2, s2);
        } }, Loading: { init: function(t2) {
          n = v(true, g, t2), h(P, "NotiflixLoadingInternalCSS");
        }, merge: function(t2) {
          return n ? void (n = v(true, n, t2)) : (y("You have to initialize the Loading module before call Merge function."), false);
        }, standard: function(t2, e3) {
          U(x.Standard, t2, e3, true, 0);
        }, hourglass: function(t2, e3) {
          U(x.Hourglass, t2, e3, true, 0);
        }, circle: function(t2, e3) {
          U(x.Circle, t2, e3, true, 0);
        }, arrows: function(t2, e3) {
          U(x.Arrows, t2, e3, true, 0);
        }, dots: function(t2, e3) {
          U(x.Dots, t2, e3, true, 0);
        }, pulse: function(t2, e3) {
          U(x.Pulse, t2, e3, true, 0);
        }, custom: function(t2, e3) {
          U(x.Custom, t2, e3, true, 0);
        }, notiflix: function(t2, e3) {
          U(x.Notiflix, t2, e3, true, 0);
        }, remove: function(t2) {
          "number" != typeof t2 && (t2 = 0), U(null, null, null, false, t2);
        }, change: function(t2) {
          V(t2);
        } }, Block: { init: function(t2) {
          o = v(true, u, t2), h(q, "NotiflixBlockInternalCSS");
        }, merge: function(t2) {
          return o ? void (o = v(true, o, t2)) : (y('You have to initialize the "Notiflix.Block" module before call Merge function.'), false);
        }, standard: function(t2, e3, i2) {
          Y(true, b2.Standard, t2, e3, i2);
        }, hourglass: function(t2, e3, i2) {
          Y(true, b2.Hourglass, t2, e3, i2);
        }, circle: function(t2, e3, i2) {
          Y(true, b2.Circle, t2, e3, i2);
        }, arrows: function(t2, e3, i2) {
          Y(true, b2.Arrows, t2, e3, i2);
        }, dots: function(t2, e3, i2) {
          Y(true, b2.Dots, t2, e3, i2);
        }, pulse: function(t2, e3, i2) {
          Y(true, b2.Pulse, t2, e3, i2);
        }, remove: function(t2, e3) {
          "number" != typeof e3 && (e3 = 0), Y(false, null, t2, null, null, e3);
        } } };
        return "object" == typeof t.Notiflix ? v(true, t.Notiflix, { Notify: G.Notify, Report: G.Report, Confirm: G.Confirm, Loading: G.Loading, Block: G.Block }) : { Notify: G.Notify, Report: G.Report, Confirm: G.Confirm, Loading: G.Loading, Block: G.Block };
      });
    }
  });

  // node_modules/@protobufjs/aspromise/index.js
  var require_aspromise = __commonJS({
    "node_modules/@protobufjs/aspromise/index.js"(exports2, module2) {
      "use strict";
      module2.exports = asPromise;
      function asPromise(fn, ctx) {
        var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
        while (index < arguments.length)
          params[offset++] = arguments[index++];
        return new Promise(function executor(resolve, reject) {
          params[offset] = function callback(err) {
            if (pending) {
              pending = false;
              if (err)
                reject(err);
              else {
                var params2 = new Array(arguments.length - 1), offset2 = 0;
                while (offset2 < params2.length)
                  params2[offset2++] = arguments[offset2];
                resolve.apply(null, params2);
              }
            }
          };
          try {
            fn.apply(ctx || null, params);
          } catch (err) {
            if (pending) {
              pending = false;
              reject(err);
            }
          }
        });
      }
    }
  });

  // node_modules/@protobufjs/base64/index.js
  var require_base64 = __commonJS({
    "node_modules/@protobufjs/base64/index.js"(exports2) {
      "use strict";
      var base64 = exports2;
      base64.length = function length(string) {
        var p = string.length;
        if (!p)
          return 0;
        var n = 0;
        while (--p % 4 > 1 && string.charAt(p) === "=")
          ++n;
        return Math.ceil(string.length * 3) / 4 - n;
      };
      var b64 = new Array(64);
      var s64 = new Array(123);
      for (i = 0; i < 64; )
        s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
      var i;
      base64.encode = function encode(buffer, start, end) {
        var parts = null, chunk = [];
        var i2 = 0, j = 0, t;
        while (start < end) {
          var b2 = buffer[start++];
          switch (j) {
            case 0:
              chunk[i2++] = b64[b2 >> 2];
              t = (b2 & 3) << 4;
              j = 1;
              break;
            case 1:
              chunk[i2++] = b64[t | b2 >> 4];
              t = (b2 & 15) << 2;
              j = 2;
              break;
            case 2:
              chunk[i2++] = b64[t | b2 >> 6];
              chunk[i2++] = b64[b2 & 63];
              j = 0;
              break;
          }
          if (i2 > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i2 = 0;
          }
        }
        if (j) {
          chunk[i2++] = b64[t];
          chunk[i2++] = 61;
          if (j === 1)
            chunk[i2++] = 61;
        }
        if (parts) {
          if (i2)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
          return parts.join("");
        }
        return String.fromCharCode.apply(String, chunk.slice(0, i2));
      };
      var invalidEncoding = "invalid encoding";
      base64.decode = function decode(string, buffer, offset) {
        var start = offset;
        var j = 0, t;
        for (var i2 = 0; i2 < string.length; ) {
          var c2 = string.charCodeAt(i2++);
          if (c2 === 61 && j > 1)
            break;
          if ((c2 = s64[c2]) === void 0)
            throw Error(invalidEncoding);
          switch (j) {
            case 0:
              t = c2;
              j = 1;
              break;
            case 1:
              buffer[offset++] = t << 2 | (c2 & 48) >> 4;
              t = c2;
              j = 2;
              break;
            case 2:
              buffer[offset++] = (t & 15) << 4 | (c2 & 60) >> 2;
              t = c2;
              j = 3;
              break;
            case 3:
              buffer[offset++] = (t & 3) << 6 | c2;
              j = 0;
              break;
          }
        }
        if (j === 1)
          throw Error(invalidEncoding);
        return offset - start;
      };
      base64.test = function test(string) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
      };
    }
  });

  // node_modules/@protobufjs/eventemitter/index.js
  var require_eventemitter = __commonJS({
    "node_modules/@protobufjs/eventemitter/index.js"(exports2, module2) {
      "use strict";
      module2.exports = EventEmitter;
      function EventEmitter() {
        this._listeners = {};
      }
      EventEmitter.prototype.on = function on(evt, fn, ctx) {
        (this._listeners[evt] || (this._listeners[evt] = [])).push({
          fn,
          ctx: ctx || this
        });
        return this;
      };
      EventEmitter.prototype.off = function off(evt, fn) {
        if (evt === void 0)
          this._listeners = {};
        else {
          if (fn === void 0)
            this._listeners[evt] = [];
          else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length; )
              if (listeners[i].fn === fn)
                listeners.splice(i, 1);
              else
                ++i;
          }
        }
        return this;
      };
      EventEmitter.prototype.emit = function emit(evt) {
        var listeners = this._listeners[evt];
        if (listeners) {
          var args = [], i = 1;
          for (; i < arguments.length; )
            args.push(arguments[i++]);
          for (i = 0; i < listeners.length; )
            listeners[i].fn.apply(listeners[i++].ctx, args);
        }
        return this;
      };
    }
  });

  // node_modules/@protobufjs/float/index.js
  var require_float = __commonJS({
    "node_modules/@protobufjs/float/index.js"(exports2, module2) {
      "use strict";
      module2.exports = factory(factory);
      function factory(exports3) {
        if (typeof Float32Array !== "undefined")
          (function() {
            var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
            function writeFloat_f32_cpy(val, buf, pos) {
              f32[0] = val;
              buf[pos] = f8b[0];
              buf[pos + 1] = f8b[1];
              buf[pos + 2] = f8b[2];
              buf[pos + 3] = f8b[3];
            }
            function writeFloat_f32_rev(val, buf, pos) {
              f32[0] = val;
              buf[pos] = f8b[3];
              buf[pos + 1] = f8b[2];
              buf[pos + 2] = f8b[1];
              buf[pos + 3] = f8b[0];
            }
            exports3.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
            exports3.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
            function readFloat_f32_cpy(buf, pos) {
              f8b[0] = buf[pos];
              f8b[1] = buf[pos + 1];
              f8b[2] = buf[pos + 2];
              f8b[3] = buf[pos + 3];
              return f32[0];
            }
            function readFloat_f32_rev(buf, pos) {
              f8b[3] = buf[pos];
              f8b[2] = buf[pos + 1];
              f8b[1] = buf[pos + 2];
              f8b[0] = buf[pos + 3];
              return f32[0];
            }
            exports3.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
            exports3.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
          })();
        else
          (function() {
            function writeFloat_ieee754(writeUint, val, buf, pos) {
              var sign = val < 0 ? 1 : 0;
              if (sign)
                val = -val;
              if (val === 0)
                writeUint(1 / val > 0 ? (
                  /* positive */
                  0
                ) : (
                  /* negative 0 */
                  2147483648
                ), buf, pos);
              else if (isNaN(val))
                writeUint(2143289344, buf, pos);
              else if (val > 34028234663852886e22)
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
              else if (val < 11754943508222875e-54)
                writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos);
              else {
                var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
              }
            }
            exports3.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
            exports3.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
            function readFloat_ieee754(readUint, buf, pos) {
              var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
              return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 1401298464324817e-60 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
            }
            exports3.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
            exports3.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
          })();
        if (typeof Float64Array !== "undefined")
          (function() {
            var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
            function writeDouble_f64_cpy(val, buf, pos) {
              f64[0] = val;
              buf[pos] = f8b[0];
              buf[pos + 1] = f8b[1];
              buf[pos + 2] = f8b[2];
              buf[pos + 3] = f8b[3];
              buf[pos + 4] = f8b[4];
              buf[pos + 5] = f8b[5];
              buf[pos + 6] = f8b[6];
              buf[pos + 7] = f8b[7];
            }
            function writeDouble_f64_rev(val, buf, pos) {
              f64[0] = val;
              buf[pos] = f8b[7];
              buf[pos + 1] = f8b[6];
              buf[pos + 2] = f8b[5];
              buf[pos + 3] = f8b[4];
              buf[pos + 4] = f8b[3];
              buf[pos + 5] = f8b[2];
              buf[pos + 6] = f8b[1];
              buf[pos + 7] = f8b[0];
            }
            exports3.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
            exports3.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
            function readDouble_f64_cpy(buf, pos) {
              f8b[0] = buf[pos];
              f8b[1] = buf[pos + 1];
              f8b[2] = buf[pos + 2];
              f8b[3] = buf[pos + 3];
              f8b[4] = buf[pos + 4];
              f8b[5] = buf[pos + 5];
              f8b[6] = buf[pos + 6];
              f8b[7] = buf[pos + 7];
              return f64[0];
            }
            function readDouble_f64_rev(buf, pos) {
              f8b[7] = buf[pos];
              f8b[6] = buf[pos + 1];
              f8b[5] = buf[pos + 2];
              f8b[4] = buf[pos + 3];
              f8b[3] = buf[pos + 4];
              f8b[2] = buf[pos + 5];
              f8b[1] = buf[pos + 6];
              f8b[0] = buf[pos + 7];
              return f64[0];
            }
            exports3.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
            exports3.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
          })();
        else
          (function() {
            function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
              var sign = val < 0 ? 1 : 0;
              if (sign)
                val = -val;
              if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? (
                  /* positive */
                  0
                ) : (
                  /* negative 0 */
                  2147483648
                ), buf, pos + off1);
              } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
              } else if (val > 17976931348623157e292) {
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
              } else {
                var mantissa;
                if (val < 22250738585072014e-324) {
                  mantissa = val / 5e-324;
                  writeUint(mantissa >>> 0, buf, pos + off0);
                  writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                  var exponent = Math.floor(Math.log(val) / Math.LN2);
                  if (exponent === 1024)
                    exponent = 1023;
                  mantissa = val * Math.pow(2, -exponent);
                  writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                  writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
              }
            }
            exports3.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
            exports3.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
            function readDouble_ieee754(readUint, off0, off1, buf, pos) {
              var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
              var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
              return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
            }
            exports3.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
            exports3.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
          })();
        return exports3;
      }
      function writeUintLE(val, buf, pos) {
        buf[pos] = val & 255;
        buf[pos + 1] = val >>> 8 & 255;
        buf[pos + 2] = val >>> 16 & 255;
        buf[pos + 3] = val >>> 24;
      }
      function writeUintBE(val, buf, pos) {
        buf[pos] = val >>> 24;
        buf[pos + 1] = val >>> 16 & 255;
        buf[pos + 2] = val >>> 8 & 255;
        buf[pos + 3] = val & 255;
      }
      function readUintLE(buf, pos) {
        return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
      }
      function readUintBE(buf, pos) {
        return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
      }
    }
  });

  // node_modules/@protobufjs/inquire/index.js
  var require_inquire = __commonJS({
    "node_modules/@protobufjs/inquire/index.js"(exports, module) {
      "use strict";
      module.exports = inquire;
      function inquire(moduleName) {
        try {
          var mod = eval("quire".replace(/^/, "re"))(moduleName);
          if (mod && (mod.length || Object.keys(mod).length))
            return mod;
        } catch (e2) {
        }
        return null;
      }
    }
  });

  // node_modules/@protobufjs/utf8/index.js
  var require_utf8 = __commonJS({
    "node_modules/@protobufjs/utf8/index.js"(exports2) {
      "use strict";
      var utf8 = exports2;
      utf8.length = function utf8_length(string) {
        var len = 0, c2 = 0;
        for (var i = 0; i < string.length; ++i) {
          c2 = string.charCodeAt(i);
          if (c2 < 128)
            len += 1;
          else if (c2 < 2048)
            len += 2;
          else if ((c2 & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
            ++i;
            len += 4;
          } else
            len += 3;
        }
        return len;
      };
      utf8.read = function utf8_read(buffer, start, end) {
        var len = end - start;
        if (len < 1)
          return "";
        var parts = null, chunk = [], i = 0, t;
        while (start < end) {
          t = buffer[start++];
          if (t < 128)
            chunk[i++] = t;
          else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
          else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
            chunk[i++] = 55296 + (t >> 10);
            chunk[i++] = 56320 + (t & 1023);
          } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
          if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
          }
        }
        if (parts) {
          if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
          return parts.join("");
        }
        return String.fromCharCode.apply(String, chunk.slice(0, i));
      };
      utf8.write = function utf8_write(string, buffer, offset) {
        var start = offset, c1, c2;
        for (var i = 0; i < string.length; ++i) {
          c1 = string.charCodeAt(i);
          if (c1 < 128) {
            buffer[offset++] = c1;
          } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6 | 192;
            buffer[offset++] = c1 & 63 | 128;
          } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
            c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
            ++i;
            buffer[offset++] = c1 >> 18 | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
          } else {
            buffer[offset++] = c1 >> 12 | 224;
            buffer[offset++] = c1 >> 6 & 63 | 128;
            buffer[offset++] = c1 & 63 | 128;
          }
        }
        return offset - start;
      };
    }
  });

  // node_modules/@protobufjs/pool/index.js
  var require_pool = __commonJS({
    "node_modules/@protobufjs/pool/index.js"(exports2, module2) {
      "use strict";
      module2.exports = pool;
      function pool(alloc, slice, size) {
        var SIZE = size || 8192;
        var MAX = SIZE >>> 1;
        var slab = null;
        var offset = SIZE;
        return function pool_alloc(size2) {
          if (size2 < 1 || size2 > MAX)
            return alloc(size2);
          if (offset + size2 > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
          }
          var buf = slice.call(slab, offset, offset += size2);
          if (offset & 7)
            offset = (offset | 7) + 1;
          return buf;
        };
      }
    }
  });

  // node_modules/protobufjs/src/util/longbits.js
  var require_longbits = __commonJS({
    "node_modules/protobufjs/src/util/longbits.js"(exports2, module2) {
      "use strict";
      module2.exports = LongBits;
      var util = require_minimal();
      function LongBits(lo, hi) {
        this.lo = lo >>> 0;
        this.hi = hi >>> 0;
      }
      var zero = LongBits.zero = new LongBits(0, 0);
      zero.toNumber = function() {
        return 0;
      };
      zero.zzEncode = zero.zzDecode = function() {
        return this;
      };
      zero.length = function() {
        return 1;
      };
      var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
      LongBits.fromNumber = function fromNumber(value) {
        if (value === 0)
          return zero;
        var sign = value < 0;
        if (sign)
          value = -value;
        var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
        if (sign) {
          hi = ~hi >>> 0;
          lo = ~lo >>> 0;
          if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
              hi = 0;
          }
        }
        return new LongBits(lo, hi);
      };
      LongBits.from = function from(value) {
        if (typeof value === "number")
          return LongBits.fromNumber(value);
        if (util.isString(value)) {
          if (util.Long)
            value = util.Long.fromString(value);
          else
            return LongBits.fromNumber(parseInt(value, 10));
        }
        return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
      };
      LongBits.prototype.toNumber = function toNumber(unsigned) {
        if (!unsigned && this.hi >>> 31) {
          var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
          if (!lo)
            hi = hi + 1 >>> 0;
          return -(lo + hi * 4294967296);
        }
        return this.lo + this.hi * 4294967296;
      };
      LongBits.prototype.toLong = function toLong(unsigned) {
        return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
      };
      var charCodeAt = String.prototype.charCodeAt;
      LongBits.fromHash = function fromHash(hash) {
        if (hash === zeroHash)
          return zero;
        return new LongBits(
          (charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0,
          (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0
        );
      };
      LongBits.prototype.toHash = function toHash() {
        return String.fromCharCode(
          this.lo & 255,
          this.lo >>> 8 & 255,
          this.lo >>> 16 & 255,
          this.lo >>> 24,
          this.hi & 255,
          this.hi >>> 8 & 255,
          this.hi >>> 16 & 255,
          this.hi >>> 24
        );
      };
      LongBits.prototype.zzEncode = function zzEncode() {
        var mask = this.hi >> 31;
        this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
        this.lo = (this.lo << 1 ^ mask) >>> 0;
        return this;
      };
      LongBits.prototype.zzDecode = function zzDecode() {
        var mask = -(this.lo & 1);
        this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
        this.hi = (this.hi >>> 1 ^ mask) >>> 0;
        return this;
      };
      LongBits.prototype.length = function length() {
        var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
        return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
      };
    }
  });

  // node_modules/protobufjs/src/util/minimal.js
  var require_minimal = __commonJS({
    "node_modules/protobufjs/src/util/minimal.js"(exports2) {
      "use strict";
      var util = exports2;
      util.asPromise = require_aspromise();
      util.base64 = require_base64();
      util.EventEmitter = require_eventemitter();
      util.float = require_float();
      util.inquire = require_inquire();
      util.utf8 = require_utf8();
      util.pool = require_pool();
      util.LongBits = require_longbits();
      util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
      util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || exports2;
      util.emptyArray = Object.freeze ? Object.freeze([]) : (
        /* istanbul ignore next */
        []
      );
      util.emptyObject = Object.freeze ? Object.freeze({}) : (
        /* istanbul ignore next */
        {}
      );
      util.isInteger = Number.isInteger || /* istanbul ignore next */
      function isInteger(value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
      };
      util.isString = function isString(value) {
        return typeof value === "string" || value instanceof String;
      };
      util.isObject = function isObject(value) {
        return value && typeof value === "object";
      };
      util.isset = /**
       * Checks if a property on a message is considered to be present.
       * @param {Object} obj Plain object or message instance
       * @param {string} prop Property name
       * @returns {boolean} `true` if considered to be present, otherwise `false`
       */
      util.isSet = function isSet(obj, prop) {
        var value = obj[prop];
        if (value != null && obj.hasOwnProperty(prop))
          return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
        return false;
      };
      util.Buffer = function() {
        try {
          var Buffer2 = util.inquire("buffer").Buffer;
          return Buffer2.prototype.utf8Write ? Buffer2 : (
            /* istanbul ignore next */
            null
          );
        } catch (e2) {
          return null;
        }
      }();
      util._Buffer_from = null;
      util._Buffer_allocUnsafe = null;
      util.newBuffer = function newBuffer(sizeOrArray) {
        return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
      };
      util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      util.Long = /* istanbul ignore next */
      util.global.dcodeIO && /* istanbul ignore next */
      util.global.dcodeIO.Long || /* istanbul ignore next */
      util.global.Long || util.inquire("long");
      util.key2Re = /^true|false|0|1$/;
      util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
      util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
      util.longToHash = function longToHash(value) {
        return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
      };
      util.longFromHash = function longFromHash(hash, unsigned) {
        var bits = util.LongBits.fromHash(hash);
        if (util.Long)
          return util.Long.fromBits(bits.lo, bits.hi, unsigned);
        return bits.toNumber(Boolean(unsigned));
      };
      function merge(dst, src, ifNotSet) {
        for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
          if (dst[keys[i]] === void 0 || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
        return dst;
      }
      util.merge = merge;
      util.lcFirst = function lcFirst(str) {
        return str.charAt(0).toLowerCase() + str.substring(1);
      };
      function newError(name) {
        function CustomError(message, properties) {
          if (!(this instanceof CustomError))
            return new CustomError(message, properties);
          Object.defineProperty(this, "message", { get: function() {
            return message;
          } });
          if (Error.captureStackTrace)
            Error.captureStackTrace(this, CustomError);
          else
            Object.defineProperty(this, "stack", { value: new Error().stack || "" });
          if (properties)
            merge(this, properties);
        }
        CustomError.prototype = Object.create(Error.prototype, {
          constructor: {
            value: CustomError,
            writable: true,
            enumerable: false,
            configurable: true
          },
          name: {
            get: function get() {
              return name;
            },
            set: void 0,
            enumerable: false,
            // configurable: false would accurately preserve the behavior of
            // the original, but I'm guessing that was not intentional.
            // For an actual error subclass, this property would
            // be configurable.
            configurable: true
          },
          toString: {
            value: function value() {
              return this.name + ": " + this.message;
            },
            writable: true,
            enumerable: false,
            configurable: true
          }
        });
        return CustomError;
      }
      util.newError = newError;
      util.ProtocolError = newError("ProtocolError");
      util.oneOfGetter = function getOneOf(fieldNames) {
        var fieldMap = {};
        for (var i = 0; i < fieldNames.length; ++i)
          fieldMap[fieldNames[i]] = 1;
        return function() {
          for (var keys = Object.keys(this), i2 = keys.length - 1; i2 > -1; --i2)
            if (fieldMap[keys[i2]] === 1 && this[keys[i2]] !== void 0 && this[keys[i2]] !== null)
              return keys[i2];
        };
      };
      util.oneOfSetter = function setOneOf(fieldNames) {
        return function(name) {
          for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
              delete this[fieldNames[i]];
        };
      };
      util.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: true
      };
      util._configure = function() {
        var Buffer2 = util.Buffer;
        if (!Buffer2) {
          util._Buffer_from = util._Buffer_allocUnsafe = null;
          return;
        }
        util._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || /* istanbul ignore next */
        function Buffer_from(value, encoding) {
          return new Buffer2(value, encoding);
        };
        util._Buffer_allocUnsafe = Buffer2.allocUnsafe || /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
          return new Buffer2(size);
        };
      };
    }
  });

  // node_modules/protobufjs/src/writer.js
  var require_writer = __commonJS({
    "node_modules/protobufjs/src/writer.js"(exports2, module2) {
      "use strict";
      module2.exports = Writer;
      var util = require_minimal();
      var BufferWriter;
      var LongBits = util.LongBits;
      var base64 = util.base64;
      var utf8 = util.utf8;
      function Op(fn, len, val) {
        this.fn = fn;
        this.len = len;
        this.next = void 0;
        this.val = val;
      }
      function noop() {
      }
      function State(writer) {
        this.head = writer.head;
        this.tail = writer.tail;
        this.len = writer.len;
        this.next = writer.states;
      }
      function Writer() {
        this.len = 0;
        this.head = new Op(noop, 0, 0);
        this.tail = this.head;
        this.states = null;
      }
      var create = function create2() {
        return util.Buffer ? function create_buffer_setup() {
          return (Writer.create = function create_buffer() {
            return new BufferWriter();
          })();
        } : function create_array() {
          return new Writer();
        };
      };
      Writer.create = create();
      Writer.alloc = function alloc(size) {
        return new util.Array(size);
      };
      if (util.Array !== Array)
        Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
      Writer.prototype._push = function push(fn, len, val) {
        this.tail = this.tail.next = new Op(fn, len, val);
        this.len += len;
        return this;
      };
      function writeByte(val, buf, pos) {
        buf[pos] = val & 255;
      }
      function writeVarint32(val, buf, pos) {
        while (val > 127) {
          buf[pos++] = val & 127 | 128;
          val >>>= 7;
        }
        buf[pos] = val;
      }
      function VarintOp(len, val) {
        this.len = len;
        this.next = void 0;
        this.val = val;
      }
      VarintOp.prototype = Object.create(Op.prototype);
      VarintOp.prototype.fn = writeVarint32;
      Writer.prototype.uint32 = function write_uint32(value) {
        this.len += (this.tail = this.tail.next = new VarintOp(
          (value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5,
          value
        )).len;
        return this;
      };
      Writer.prototype.int32 = function write_int32(value) {
        return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
      };
      Writer.prototype.sint32 = function write_sint32(value) {
        return this.uint32((value << 1 ^ value >> 31) >>> 0);
      };
      function writeVarint64(val, buf, pos) {
        while (val.hi) {
          buf[pos++] = val.lo & 127 | 128;
          val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
          val.hi >>>= 7;
        }
        while (val.lo > 127) {
          buf[pos++] = val.lo & 127 | 128;
          val.lo = val.lo >>> 7;
        }
        buf[pos++] = val.lo;
      }
      Writer.prototype.uint64 = function write_uint64(value) {
        var bits = LongBits.from(value);
        return this._push(writeVarint64, bits.length(), bits);
      };
      Writer.prototype.int64 = Writer.prototype.uint64;
      Writer.prototype.sint64 = function write_sint64(value) {
        var bits = LongBits.from(value).zzEncode();
        return this._push(writeVarint64, bits.length(), bits);
      };
      Writer.prototype.bool = function write_bool(value) {
        return this._push(writeByte, 1, value ? 1 : 0);
      };
      function writeFixed32(val, buf, pos) {
        buf[pos] = val & 255;
        buf[pos + 1] = val >>> 8 & 255;
        buf[pos + 2] = val >>> 16 & 255;
        buf[pos + 3] = val >>> 24;
      }
      Writer.prototype.fixed32 = function write_fixed32(value) {
        return this._push(writeFixed32, 4, value >>> 0);
      };
      Writer.prototype.sfixed32 = Writer.prototype.fixed32;
      Writer.prototype.fixed64 = function write_fixed64(value) {
        var bits = LongBits.from(value);
        return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
      };
      Writer.prototype.sfixed64 = Writer.prototype.fixed64;
      Writer.prototype.float = function write_float(value) {
        return this._push(util.float.writeFloatLE, 4, value);
      };
      Writer.prototype.double = function write_double(value) {
        return this._push(util.float.writeDoubleLE, 8, value);
      };
      var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos);
      } : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
          buf[pos + i] = val[i];
      };
      Writer.prototype.bytes = function write_bytes(value) {
        var len = value.length >>> 0;
        if (!len)
          return this._push(writeByte, 1, 0);
        if (util.isString(value)) {
          var buf = Writer.alloc(len = base64.length(value));
          base64.decode(value, buf, 0);
          value = buf;
        }
        return this.uint32(len)._push(writeBytes, len, value);
      };
      Writer.prototype.string = function write_string(value) {
        var len = utf8.length(value);
        return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
      };
      Writer.prototype.fork = function fork() {
        this.states = new State(this);
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
        return this;
      };
      Writer.prototype.reset = function reset() {
        if (this.states) {
          this.head = this.states.head;
          this.tail = this.states.tail;
          this.len = this.states.len;
          this.states = this.states.next;
        } else {
          this.head = this.tail = new Op(noop, 0, 0);
          this.len = 0;
        }
        return this;
      };
      Writer.prototype.ldelim = function ldelim() {
        var head = this.head, tail = this.tail, len = this.len;
        this.reset().uint32(len);
        if (len) {
          this.tail.next = head.next;
          this.tail = tail;
          this.len += len;
        }
        return this;
      };
      Writer.prototype.finish = function finish() {
        var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
        while (head) {
          head.fn(head.val, buf, pos);
          pos += head.len;
          head = head.next;
        }
        return buf;
      };
      Writer._configure = function(BufferWriter_) {
        BufferWriter = BufferWriter_;
        Writer.create = create();
        BufferWriter._configure();
      };
    }
  });

  // node_modules/protobufjs/src/writer_buffer.js
  var require_writer_buffer = __commonJS({
    "node_modules/protobufjs/src/writer_buffer.js"(exports2, module2) {
      "use strict";
      module2.exports = BufferWriter;
      var Writer = require_writer();
      (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
      var util = require_minimal();
      function BufferWriter() {
        Writer.call(this);
      }
      BufferWriter._configure = function() {
        BufferWriter.alloc = util._Buffer_allocUnsafe;
        BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
          buf.set(val, pos);
        } : function writeBytesBuffer_copy(val, buf, pos) {
          if (val.copy)
            val.copy(buf, pos, 0, val.length);
          else
            for (var i = 0; i < val.length; )
              buf[pos++] = val[i++];
        };
      };
      BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
        if (util.isString(value))
          value = util._Buffer_from(value, "base64");
        var len = value.length >>> 0;
        this.uint32(len);
        if (len)
          this._push(BufferWriter.writeBytesBuffer, len, value);
        return this;
      };
      function writeStringBuffer(val, buf, pos) {
        if (val.length < 40)
          util.utf8.write(val, buf, pos);
        else if (buf.utf8Write)
          buf.utf8Write(val, pos);
        else
          buf.write(val, pos);
      }
      BufferWriter.prototype.string = function write_string_buffer(value) {
        var len = util.Buffer.byteLength(value);
        this.uint32(len);
        if (len)
          this._push(writeStringBuffer, len, value);
        return this;
      };
      BufferWriter._configure();
    }
  });

  // node_modules/protobufjs/src/reader.js
  var require_reader = __commonJS({
    "node_modules/protobufjs/src/reader.js"(exports2, module2) {
      "use strict";
      module2.exports = Reader;
      var util = require_minimal();
      var BufferReader;
      var LongBits = util.LongBits;
      var utf8 = util.utf8;
      function indexOutOfRange(reader, writeLength) {
        return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
      }
      function Reader(buffer) {
        this.buf = buffer;
        this.pos = 0;
        this.len = buffer.length;
      }
      var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
          return new Reader(buffer);
        throw Error("illegal buffer");
      } : function create_array2(buffer) {
        if (Array.isArray(buffer))
          return new Reader(buffer);
        throw Error("illegal buffer");
      };
      var create = function create2() {
        return util.Buffer ? function create_buffer_setup(buffer) {
          return (Reader.create = function create_buffer(buffer2) {
            return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
          })(buffer);
        } : create_array;
      };
      Reader.create = create();
      Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */
      util.Array.prototype.slice;
      Reader.prototype.uint32 = function read_uint32_setup() {
        var value = 4294967295;
        return function read_uint32() {
          value = (this.buf[this.pos] & 127) >>> 0;
          if (this.buf[this.pos++] < 128)
            return value;
          value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return value;
          value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
          if (this.buf[this.pos++] < 128)
            return value;
          value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
          if (this.buf[this.pos++] < 128)
            return value;
          value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
          if (this.buf[this.pos++] < 128)
            return value;
          if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
          }
          return value;
        };
      }();
      Reader.prototype.int32 = function read_int32() {
        return this.uint32() | 0;
      };
      Reader.prototype.sint32 = function read_sint32() {
        var value = this.uint32();
        return value >>> 1 ^ -(value & 1) | 0;
      };
      function readLongVarint() {
        var bits = new LongBits(0, 0);
        var i = 0;
        if (this.len - this.pos > 4) {
          for (; i < 4; ++i) {
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
              return bits;
          }
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
          i = 0;
        } else {
          for (; i < 3; ++i) {
            if (this.pos >= this.len)
              throw indexOutOfRange(this);
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
              return bits;
          }
          bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
          return bits;
        }
        if (this.len - this.pos > 4) {
          for (; i < 5; ++i) {
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
              return bits;
          }
        } else {
          for (; i < 5; ++i) {
            if (this.pos >= this.len)
              throw indexOutOfRange(this);
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
              return bits;
          }
        }
        throw Error("invalid varint encoding");
      }
      Reader.prototype.bool = function read_bool() {
        return this.uint32() !== 0;
      };
      function readFixed32_end(buf, end) {
        return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
      }
      Reader.prototype.fixed32 = function read_fixed32() {
        if (this.pos + 4 > this.len)
          throw indexOutOfRange(this, 4);
        return readFixed32_end(this.buf, this.pos += 4);
      };
      Reader.prototype.sfixed32 = function read_sfixed32() {
        if (this.pos + 4 > this.len)
          throw indexOutOfRange(this, 4);
        return readFixed32_end(this.buf, this.pos += 4) | 0;
      };
      function readFixed64() {
        if (this.pos + 8 > this.len)
          throw indexOutOfRange(this, 8);
        return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
      }
      Reader.prototype.float = function read_float() {
        if (this.pos + 4 > this.len)
          throw indexOutOfRange(this, 4);
        var value = util.float.readFloatLE(this.buf, this.pos);
        this.pos += 4;
        return value;
      };
      Reader.prototype.double = function read_double() {
        if (this.pos + 8 > this.len)
          throw indexOutOfRange(this, 4);
        var value = util.float.readDoubleLE(this.buf, this.pos);
        this.pos += 8;
        return value;
      };
      Reader.prototype.bytes = function read_bytes() {
        var length = this.uint32(), start = this.pos, end = this.pos + length;
        if (end > this.len)
          throw indexOutOfRange(this, length);
        this.pos += length;
        if (Array.isArray(this.buf))
          return this.buf.slice(start, end);
        return start === end ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
      };
      Reader.prototype.string = function read_string() {
        var bytes = this.bytes();
        return utf8.read(bytes, 0, bytes.length);
      };
      Reader.prototype.skip = function skip(length) {
        if (typeof length === "number") {
          if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
          this.pos += length;
        } else {
          do {
            if (this.pos >= this.len)
              throw indexOutOfRange(this);
          } while (this.buf[this.pos++] & 128);
        }
        return this;
      };
      Reader.prototype.skipType = function(wireType) {
        switch (wireType) {
          case 0:
            this.skip();
            break;
          case 1:
            this.skip(8);
            break;
          case 2:
            this.skip(this.uint32());
            break;
          case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
              this.skipType(wireType);
            }
            break;
          case 5:
            this.skip(4);
            break;
          default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
        }
        return this;
      };
      Reader._configure = function(BufferReader_) {
        BufferReader = BufferReader_;
        Reader.create = create();
        BufferReader._configure();
        var fn = util.Long ? "toLong" : (
          /* istanbul ignore next */
          "toNumber"
        );
        util.merge(Reader.prototype, {
          int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
          },
          uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
          },
          sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
          },
          fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
          },
          sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
          }
        });
      };
    }
  });

  // node_modules/protobufjs/src/reader_buffer.js
  var require_reader_buffer = __commonJS({
    "node_modules/protobufjs/src/reader_buffer.js"(exports2, module2) {
      "use strict";
      module2.exports = BufferReader;
      var Reader = require_reader();
      (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
      var util = require_minimal();
      function BufferReader(buffer) {
        Reader.call(this, buffer);
      }
      BufferReader._configure = function() {
        if (util.Buffer)
          BufferReader.prototype._slice = util.Buffer.prototype.slice;
      };
      BufferReader.prototype.string = function read_string_buffer() {
        var len = this.uint32();
        return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
      };
      BufferReader._configure();
    }
  });

  // node_modules/protobufjs/src/rpc/service.js
  var require_service = __commonJS({
    "node_modules/protobufjs/src/rpc/service.js"(exports2, module2) {
      "use strict";
      module2.exports = Service;
      var util = require_minimal();
      (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
      function Service(rpcImpl, requestDelimited, responseDelimited) {
        if (typeof rpcImpl !== "function")
          throw TypeError("rpcImpl must be a function");
        util.EventEmitter.call(this);
        this.rpcImpl = rpcImpl;
        this.requestDelimited = Boolean(requestDelimited);
        this.responseDelimited = Boolean(responseDelimited);
      }
      Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
        if (!request)
          throw TypeError("request must be specified");
        var self2 = this;
        if (!callback)
          return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
        if (!self2.rpcImpl) {
          setTimeout(function() {
            callback(Error("already ended"));
          }, 0);
          return void 0;
        }
        try {
          return self2.rpcImpl(
            method,
            requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {
              if (err) {
                self2.emit("error", err, method);
                return callback(err);
              }
              if (response === null) {
                self2.end(
                  /* endedByRPC */
                  true
                );
                return void 0;
              }
              if (!(response instanceof responseCtor)) {
                try {
                  response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
                } catch (err2) {
                  self2.emit("error", err2, method);
                  return callback(err2);
                }
              }
              self2.emit("data", response, method);
              return callback(null, response);
            }
          );
        } catch (err) {
          self2.emit("error", err, method);
          setTimeout(function() {
            callback(err);
          }, 0);
          return void 0;
        }
      };
      Service.prototype.end = function end(endedByRPC) {
        if (this.rpcImpl) {
          if (!endedByRPC)
            this.rpcImpl(null, null, null);
          this.rpcImpl = null;
          this.emit("end").off();
        }
        return this;
      };
    }
  });

  // node_modules/protobufjs/src/rpc.js
  var require_rpc = __commonJS({
    "node_modules/protobufjs/src/rpc.js"(exports2) {
      "use strict";
      var rpc = exports2;
      rpc.Service = require_service();
    }
  });

  // node_modules/protobufjs/src/roots.js
  var require_roots = __commonJS({
    "node_modules/protobufjs/src/roots.js"(exports2, module2) {
      "use strict";
      module2.exports = {};
    }
  });

  // node_modules/protobufjs/src/index-minimal.js
  var require_index_minimal = __commonJS({
    "node_modules/protobufjs/src/index-minimal.js"(exports2) {
      "use strict";
      var protobuf2 = exports2;
      protobuf2.build = "minimal";
      protobuf2.Writer = require_writer();
      protobuf2.BufferWriter = require_writer_buffer();
      protobuf2.Reader = require_reader();
      protobuf2.BufferReader = require_reader_buffer();
      protobuf2.util = require_minimal();
      protobuf2.rpc = require_rpc();
      protobuf2.roots = require_roots();
      protobuf2.configure = configure;
      function configure() {
        protobuf2.util._configure();
        protobuf2.Writer._configure(protobuf2.BufferWriter);
        protobuf2.Reader._configure(protobuf2.BufferReader);
      }
      configure();
    }
  });

  // node_modules/@protobufjs/codegen/index.js
  var require_codegen = __commonJS({
    "node_modules/@protobufjs/codegen/index.js"(exports2, module2) {
      "use strict";
      module2.exports = codegen;
      function codegen(functionParams, functionName) {
        if (typeof functionParams === "string") {
          functionName = functionParams;
          functionParams = void 0;
        }
        var body = [];
        function Codegen(formatStringOrScope) {
          if (typeof formatStringOrScope !== "string") {
            var source = toString();
            if (codegen.verbose)
              console.log("codegen: " + source);
            source = "return " + source;
            if (formatStringOrScope) {
              var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
              while (scopeOffset < scopeKeys.length) {
                scopeParams[scopeOffset] = scopeKeys[scopeOffset];
                scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
              }
              scopeParams[scopeOffset] = source;
              return Function.apply(null, scopeParams).apply(null, scopeValues);
            }
            return Function(source)();
          }
          var formatParams = new Array(arguments.length - 1), formatOffset = 0;
          while (formatOffset < formatParams.length)
            formatParams[formatOffset] = arguments[++formatOffset];
          formatOffset = 0;
          formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
            var value = formatParams[formatOffset++];
            switch ($1) {
              case "d":
              case "f":
                return String(Number(value));
              case "i":
                return String(Math.floor(value));
              case "j":
                return JSON.stringify(value);
              case "s":
                return String(value);
            }
            return "%";
          });
          if (formatOffset !== formatParams.length)
            throw Error("parameter count mismatch");
          body.push(formatStringOrScope);
          return Codegen;
        }
        function toString(functionNameOverride) {
          return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
        }
        Codegen.toString = toString;
        return Codegen;
      }
      codegen.verbose = false;
    }
  });

  // node_modules/@protobufjs/fetch/index.js
  var require_fetch = __commonJS({
    "node_modules/@protobufjs/fetch/index.js"(exports2, module2) {
      "use strict";
      module2.exports = fetch;
      var asPromise = require_aspromise();
      var inquire2 = require_inquire();
      var fs = inquire2("fs");
      function fetch(filename, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        } else if (!options)
          options = {};
        if (!callback)
          return asPromise(fetch, this, filename, options);
        if (!options.xhr && fs && fs.readFile)
          return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
            return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
          });
        return fetch.xhr(filename, options, callback);
      }
      fetch.xhr = function fetch_xhr(filename, options, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function fetchOnReadyStateChange() {
          if (xhr.readyState !== 4)
            return void 0;
          if (xhr.status !== 0 && xhr.status !== 200)
            return callback(Error("status " + xhr.status));
          if (options.binary) {
            var buffer = xhr.response;
            if (!buffer) {
              buffer = [];
              for (var i = 0; i < xhr.responseText.length; ++i)
                buffer.push(xhr.responseText.charCodeAt(i) & 255);
            }
            return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
          }
          return callback(null, xhr.responseText);
        };
        if (options.binary) {
          if ("overrideMimeType" in xhr)
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
          xhr.responseType = "arraybuffer";
        }
        xhr.open("GET", filename);
        xhr.send();
      };
    }
  });

  // node_modules/@protobufjs/path/index.js
  var require_path = __commonJS({
    "node_modules/@protobufjs/path/index.js"(exports2) {
      "use strict";
      var path = exports2;
      var isAbsolute = (
        /**
         * Tests if the specified path is absolute.
         * @param {string} path Path to test
         * @returns {boolean} `true` if path is absolute
         */
        path.isAbsolute = function isAbsolute2(path2) {
          return /^(?:\/|\w+:)/.test(path2);
        }
      );
      var normalize = (
        /**
         * Normalizes the specified path.
         * @param {string} path Path to normalize
         * @returns {string} Normalized path
         */
        path.normalize = function normalize2(path2) {
          path2 = path2.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
          var parts = path2.split("/"), absolute = isAbsolute(path2), prefix = "";
          if (absolute)
            prefix = parts.shift() + "/";
          for (var i = 0; i < parts.length; ) {
            if (parts[i] === "..") {
              if (i > 0 && parts[i - 1] !== "..")
                parts.splice(--i, 2);
              else if (absolute)
                parts.splice(i, 1);
              else
                ++i;
            } else if (parts[i] === ".")
              parts.splice(i, 1);
            else
              ++i;
          }
          return prefix + parts.join("/");
        }
      );
      path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
        if (!alreadyNormalized)
          includePath = normalize(includePath);
        if (isAbsolute(includePath))
          return includePath;
        if (!alreadyNormalized)
          originPath = normalize(originPath);
        return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
      };
    }
  });

  // node_modules/protobufjs/src/types.js
  var require_types = __commonJS({
    "node_modules/protobufjs/src/types.js"(exports2) {
      "use strict";
      var types = exports2;
      var util = require_util();
      var s = [
        "double",
        // 0
        "float",
        // 1
        "int32",
        // 2
        "uint32",
        // 3
        "sint32",
        // 4
        "fixed32",
        // 5
        "sfixed32",
        // 6
        "int64",
        // 7
        "uint64",
        // 8
        "sint64",
        // 9
        "fixed64",
        // 10
        "sfixed64",
        // 11
        "bool",
        // 12
        "string",
        // 13
        "bytes"
        // 14
      ];
      function bake(values, offset) {
        var i = 0, o = {};
        offset |= 0;
        while (i < values.length)
          o[s[i + offset]] = values[i++];
        return o;
      }
      types.basic = bake([
        /* double   */
        1,
        /* float    */
        5,
        /* int32    */
        0,
        /* uint32   */
        0,
        /* sint32   */
        0,
        /* fixed32  */
        5,
        /* sfixed32 */
        5,
        /* int64    */
        0,
        /* uint64   */
        0,
        /* sint64   */
        0,
        /* fixed64  */
        1,
        /* sfixed64 */
        1,
        /* bool     */
        0,
        /* string   */
        2,
        /* bytes    */
        2
      ]);
      types.defaults = bake([
        /* double   */
        0,
        /* float    */
        0,
        /* int32    */
        0,
        /* uint32   */
        0,
        /* sint32   */
        0,
        /* fixed32  */
        0,
        /* sfixed32 */
        0,
        /* int64    */
        0,
        /* uint64   */
        0,
        /* sint64   */
        0,
        /* fixed64  */
        0,
        /* sfixed64 */
        0,
        /* bool     */
        false,
        /* string   */
        "",
        /* bytes    */
        util.emptyArray,
        /* message  */
        null
      ]);
      types.long = bake([
        /* int64    */
        0,
        /* uint64   */
        0,
        /* sint64   */
        0,
        /* fixed64  */
        1,
        /* sfixed64 */
        1
      ], 7);
      types.mapKey = bake([
        /* int32    */
        0,
        /* uint32   */
        0,
        /* sint32   */
        0,
        /* fixed32  */
        5,
        /* sfixed32 */
        5,
        /* int64    */
        0,
        /* uint64   */
        0,
        /* sint64   */
        0,
        /* fixed64  */
        1,
        /* sfixed64 */
        1,
        /* bool     */
        0,
        /* string   */
        2
      ], 2);
      types.packed = bake([
        /* double   */
        1,
        /* float    */
        5,
        /* int32    */
        0,
        /* uint32   */
        0,
        /* sint32   */
        0,
        /* fixed32  */
        5,
        /* sfixed32 */
        5,
        /* int64    */
        0,
        /* uint64   */
        0,
        /* sint64   */
        0,
        /* fixed64  */
        1,
        /* sfixed64 */
        1,
        /* bool     */
        0
      ]);
    }
  });

  // node_modules/protobufjs/src/field.js
  var require_field = __commonJS({
    "node_modules/protobufjs/src/field.js"(exports2, module2) {
      "use strict";
      module2.exports = Field;
      var ReflectionObject = require_object();
      ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
      var Enum = require_enum();
      var types = require_types();
      var util = require_util();
      var Type;
      var ruleRe = /^required|optional|repeated$/;
      Field.fromJSON = function fromJSON(name, json) {
        return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
      };
      function Field(name, id, type, rule, extend, options, comment) {
        if (util.isObject(rule)) {
          comment = extend;
          options = rule;
          rule = extend = void 0;
        } else if (util.isObject(extend)) {
          comment = options;
          options = extend;
          extend = void 0;
        }
        ReflectionObject.call(this, name, options);
        if (!util.isInteger(id) || id < 0)
          throw TypeError("id must be a non-negative integer");
        if (!util.isString(type))
          throw TypeError("type must be a string");
        if (rule !== void 0 && !ruleRe.test(rule = rule.toString().toLowerCase()))
          throw TypeError("rule must be a string rule");
        if (extend !== void 0 && !util.isString(extend))
          throw TypeError("extend must be a string");
        if (rule === "proto3_optional") {
          rule = "optional";
        }
        this.rule = rule && rule !== "optional" ? rule : void 0;
        this.type = type;
        this.id = id;
        this.extend = extend || void 0;
        this.required = rule === "required";
        this.optional = !this.required;
        this.repeated = rule === "repeated";
        this.map = false;
        this.message = null;
        this.partOf = null;
        this.typeDefault = null;
        this.defaultValue = null;
        this.long = util.Long ? types.long[type] !== void 0 : (
          /* istanbul ignore next */
          false
        );
        this.bytes = type === "bytes";
        this.resolvedType = null;
        this.extensionField = null;
        this.declaringField = null;
        this._packed = null;
        this.comment = comment;
      }
      Object.defineProperty(Field.prototype, "packed", {
        get: function() {
          if (this._packed === null)
            this._packed = this.getOption("packed") !== false;
          return this._packed;
        }
      });
      Field.prototype.setOption = function setOption(name, value, ifNotSet) {
        if (name === "packed")
          this._packed = null;
        return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
      };
      Field.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "rule",
          this.rule !== "optional" && this.rule || void 0,
          "type",
          this.type,
          "id",
          this.id,
          "extend",
          this.extend,
          "options",
          this.options,
          "comment",
          keepComments ? this.comment : void 0
        ]);
      };
      Field.prototype.resolve = function resolve() {
        if (this.resolved)
          return this;
        if ((this.typeDefault = types.defaults[this.type]) === void 0) {
          this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
          if (this.resolvedType instanceof Type)
            this.typeDefault = null;
          else
            this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
        } else if (this.options && this.options.proto3_optional) {
          this.typeDefault = null;
        }
        if (this.options && this.options["default"] != null) {
          this.typeDefault = this.options["default"];
          if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
            this.typeDefault = this.resolvedType.values[this.typeDefault];
        }
        if (this.options) {
          if (this.options.packed === true || this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof Enum))
            delete this.options.packed;
          if (!Object.keys(this.options).length)
            this.options = void 0;
        }
        if (this.long) {
          this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
          if (Object.freeze)
            Object.freeze(this.typeDefault);
        } else if (this.bytes && typeof this.typeDefault === "string") {
          var buf;
          if (util.base64.test(this.typeDefault))
            util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
          else
            util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
          this.typeDefault = buf;
        }
        if (this.map)
          this.defaultValue = util.emptyObject;
        else if (this.repeated)
          this.defaultValue = util.emptyArray;
        else
          this.defaultValue = this.typeDefault;
        if (this.parent instanceof Type)
          this.parent.ctor.prototype[this.name] = this.defaultValue;
        return ReflectionObject.prototype.resolve.call(this);
      };
      Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
        if (typeof fieldType === "function")
          fieldType = util.decorateType(fieldType).name;
        else if (fieldType && typeof fieldType === "object")
          fieldType = util.decorateEnum(fieldType).name;
        return function fieldDecorator(prototype, fieldName) {
          util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
        };
      };
      Field._configure = function configure(Type_) {
        Type = Type_;
      };
    }
  });

  // node_modules/protobufjs/src/oneof.js
  var require_oneof = __commonJS({
    "node_modules/protobufjs/src/oneof.js"(exports2, module2) {
      "use strict";
      module2.exports = OneOf;
      var ReflectionObject = require_object();
      ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
      var Field = require_field();
      var util = require_util();
      function OneOf(name, fieldNames, options, comment) {
        if (!Array.isArray(fieldNames)) {
          options = fieldNames;
          fieldNames = void 0;
        }
        ReflectionObject.call(this, name, options);
        if (!(fieldNames === void 0 || Array.isArray(fieldNames)))
          throw TypeError("fieldNames must be an Array");
        this.oneof = fieldNames || [];
        this.fieldsArray = [];
        this.comment = comment;
      }
      OneOf.fromJSON = function fromJSON(name, json) {
        return new OneOf(name, json.oneof, json.options, json.comment);
      };
      OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "options",
          this.options,
          "oneof",
          this.oneof,
          "comment",
          keepComments ? this.comment : void 0
        ]);
      };
      function addFieldsToParent(oneof) {
        if (oneof.parent) {
          for (var i = 0; i < oneof.fieldsArray.length; ++i)
            if (!oneof.fieldsArray[i].parent)
              oneof.parent.add(oneof.fieldsArray[i]);
        }
      }
      OneOf.prototype.add = function add(field) {
        if (!(field instanceof Field))
          throw TypeError("field must be a Field");
        if (field.parent && field.parent !== this.parent)
          field.parent.remove(field);
        this.oneof.push(field.name);
        this.fieldsArray.push(field);
        field.partOf = this;
        addFieldsToParent(this);
        return this;
      };
      OneOf.prototype.remove = function remove(field) {
        if (!(field instanceof Field))
          throw TypeError("field must be a Field");
        var index = this.fieldsArray.indexOf(field);
        if (index < 0)
          throw Error(field + " is not a member of " + this);
        this.fieldsArray.splice(index, 1);
        index = this.oneof.indexOf(field.name);
        if (index > -1)
          this.oneof.splice(index, 1);
        field.partOf = null;
        return this;
      };
      OneOf.prototype.onAdd = function onAdd(parent) {
        ReflectionObject.prototype.onAdd.call(this, parent);
        var self2 = this;
        for (var i = 0; i < this.oneof.length; ++i) {
          var field = parent.get(this.oneof[i]);
          if (field && !field.partOf) {
            field.partOf = self2;
            self2.fieldsArray.push(field);
          }
        }
        addFieldsToParent(this);
      };
      OneOf.prototype.onRemove = function onRemove(parent) {
        for (var i = 0, field; i < this.fieldsArray.length; ++i)
          if ((field = this.fieldsArray[i]).parent)
            field.parent.remove(field);
        ReflectionObject.prototype.onRemove.call(this, parent);
      };
      OneOf.d = function decorateOneOf() {
        var fieldNames = new Array(arguments.length), index = 0;
        while (index < arguments.length)
          fieldNames[index] = arguments[index++];
        return function oneOfDecorator(prototype, oneofName) {
          util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
          Object.defineProperty(prototype, oneofName, {
            get: util.oneOfGetter(fieldNames),
            set: util.oneOfSetter(fieldNames)
          });
        };
      };
    }
  });

  // node_modules/protobufjs/src/namespace.js
  var require_namespace = __commonJS({
    "node_modules/protobufjs/src/namespace.js"(exports2, module2) {
      "use strict";
      module2.exports = Namespace;
      var ReflectionObject = require_object();
      ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
      var Field = require_field();
      var util = require_util();
      var OneOf = require_oneof();
      var Type;
      var Service;
      var Enum;
      Namespace.fromJSON = function fromJSON(name, json) {
        return new Namespace(name, json.options).addJSON(json.nested);
      };
      function arrayToJSON(array, toJSONOptions) {
        if (!(array && array.length))
          return void 0;
        var obj = {};
        for (var i = 0; i < array.length; ++i)
          obj[array[i].name] = array[i].toJSON(toJSONOptions);
        return obj;
      }
      Namespace.arrayToJSON = arrayToJSON;
      Namespace.isReservedId = function isReservedId(reserved, id) {
        if (reserved) {
          for (var i = 0; i < reserved.length; ++i)
            if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id)
              return true;
        }
        return false;
      };
      Namespace.isReservedName = function isReservedName(reserved, name) {
        if (reserved) {
          for (var i = 0; i < reserved.length; ++i)
            if (reserved[i] === name)
              return true;
        }
        return false;
      };
      function Namespace(name, options) {
        ReflectionObject.call(this, name, options);
        this.nested = void 0;
        this._nestedArray = null;
      }
      function clearCache(namespace) {
        namespace._nestedArray = null;
        return namespace;
      }
      Object.defineProperty(Namespace.prototype, "nestedArray", {
        get: function() {
          return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
        }
      });
      Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
        return util.toObject([
          "options",
          this.options,
          "nested",
          arrayToJSON(this.nestedArray, toJSONOptions)
        ]);
      };
      Namespace.prototype.addJSON = function addJSON(nestedJson) {
        var ns = this;
        if (nestedJson) {
          for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
            nested = nestedJson[names[i]];
            ns.add(
              // most to least likely
              (nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : nested.id !== void 0 ? Field.fromJSON : Namespace.fromJSON)(names[i], nested)
            );
          }
        }
        return this;
      };
      Namespace.prototype.get = function get(name) {
        return this.nested && this.nested[name] || null;
      };
      Namespace.prototype.getEnum = function getEnum(name) {
        if (this.nested && this.nested[name] instanceof Enum)
          return this.nested[name].values;
        throw Error("no such enum: " + name);
      };
      Namespace.prototype.add = function add(object) {
        if (!(object instanceof Field && object.extend !== void 0 || object instanceof Type || object instanceof OneOf || object instanceof Enum || object instanceof Service || object instanceof Namespace))
          throw TypeError("object must be a valid nested object");
        if (!this.nested)
          this.nested = {};
        else {
          var prev = this.get(object.name);
          if (prev) {
            if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
              var nested = prev.nestedArray;
              for (var i = 0; i < nested.length; ++i)
                object.add(nested[i]);
              this.remove(prev);
              if (!this.nested)
                this.nested = {};
              object.setOptions(prev.options, true);
            } else
              throw Error("duplicate name '" + object.name + "' in " + this);
          }
        }
        this.nested[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
      };
      Namespace.prototype.remove = function remove(object) {
        if (!(object instanceof ReflectionObject))
          throw TypeError("object must be a ReflectionObject");
        if (object.parent !== this)
          throw Error(object + " is not a member of " + this);
        delete this.nested[object.name];
        if (!Object.keys(this.nested).length)
          this.nested = void 0;
        object.onRemove(this);
        return clearCache(this);
      };
      Namespace.prototype.define = function define2(path, json) {
        if (util.isString(path))
          path = path.split(".");
        else if (!Array.isArray(path))
          throw TypeError("illegal path");
        if (path && path.length && path[0] === "")
          throw Error("path must be relative");
        var ptr = this;
        while (path.length > 0) {
          var part = path.shift();
          if (ptr.nested && ptr.nested[part]) {
            ptr = ptr.nested[part];
            if (!(ptr instanceof Namespace))
              throw Error("path conflicts with non-namespace objects");
          } else
            ptr.add(ptr = new Namespace(part));
        }
        if (json)
          ptr.addJSON(json);
        return ptr;
      };
      Namespace.prototype.resolveAll = function resolveAll() {
        var nested = this.nestedArray, i = 0;
        while (i < nested.length)
          if (nested[i] instanceof Namespace)
            nested[i++].resolveAll();
          else
            nested[i++].resolve();
        return this.resolve();
      };
      Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
        if (typeof filterTypes === "boolean") {
          parentAlreadyChecked = filterTypes;
          filterTypes = void 0;
        } else if (filterTypes && !Array.isArray(filterTypes))
          filterTypes = [filterTypes];
        if (util.isString(path) && path.length) {
          if (path === ".")
            return this.root;
          path = path.split(".");
        } else if (!path.length)
          return this;
        if (path[0] === "")
          return this.root.lookup(path.slice(1), filterTypes);
        var found = this.get(path[0]);
        if (found) {
          if (path.length === 1) {
            if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
              return found;
          } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true)))
            return found;
        } else
          for (var i = 0; i < this.nestedArray.length; ++i)
            if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true)))
              return found;
        if (this.parent === null || parentAlreadyChecked)
          return null;
        return this.parent.lookup(path, filterTypes);
      };
      Namespace.prototype.lookupType = function lookupType(path) {
        var found = this.lookup(path, [Type]);
        if (!found)
          throw Error("no such type: " + path);
        return found;
      };
      Namespace.prototype.lookupEnum = function lookupEnum(path) {
        var found = this.lookup(path, [Enum]);
        if (!found)
          throw Error("no such Enum '" + path + "' in " + this);
        return found;
      };
      Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
        var found = this.lookup(path, [Type, Enum]);
        if (!found)
          throw Error("no such Type or Enum '" + path + "' in " + this);
        return found;
      };
      Namespace.prototype.lookupService = function lookupService(path) {
        var found = this.lookup(path, [Service]);
        if (!found)
          throw Error("no such Service '" + path + "' in " + this);
        return found;
      };
      Namespace._configure = function(Type_, Service_, Enum_) {
        Type = Type_;
        Service = Service_;
        Enum = Enum_;
      };
    }
  });

  // node_modules/protobufjs/src/mapfield.js
  var require_mapfield = __commonJS({
    "node_modules/protobufjs/src/mapfield.js"(exports2, module2) {
      "use strict";
      module2.exports = MapField;
      var Field = require_field();
      ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
      var types = require_types();
      var util = require_util();
      function MapField(name, id, keyType, type, options, comment) {
        Field.call(this, name, id, type, void 0, void 0, options, comment);
        if (!util.isString(keyType))
          throw TypeError("keyType must be a string");
        this.keyType = keyType;
        this.resolvedKeyType = null;
        this.map = true;
      }
      MapField.fromJSON = function fromJSON(name, json) {
        return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
      };
      MapField.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "keyType",
          this.keyType,
          "type",
          this.type,
          "id",
          this.id,
          "extend",
          this.extend,
          "options",
          this.options,
          "comment",
          keepComments ? this.comment : void 0
        ]);
      };
      MapField.prototype.resolve = function resolve() {
        if (this.resolved)
          return this;
        if (types.mapKey[this.keyType] === void 0)
          throw Error("invalid key type: " + this.keyType);
        return Field.prototype.resolve.call(this);
      };
      MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
        if (typeof fieldValueType === "function")
          fieldValueType = util.decorateType(fieldValueType).name;
        else if (fieldValueType && typeof fieldValueType === "object")
          fieldValueType = util.decorateEnum(fieldValueType).name;
        return function mapFieldDecorator(prototype, fieldName) {
          util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
        };
      };
    }
  });

  // node_modules/protobufjs/src/method.js
  var require_method = __commonJS({
    "node_modules/protobufjs/src/method.js"(exports2, module2) {
      "use strict";
      module2.exports = Method;
      var ReflectionObject = require_object();
      ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
      var util = require_util();
      function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
        if (util.isObject(requestStream)) {
          options = requestStream;
          requestStream = responseStream = void 0;
        } else if (util.isObject(responseStream)) {
          options = responseStream;
          responseStream = void 0;
        }
        if (!(type === void 0 || util.isString(type)))
          throw TypeError("type must be a string");
        if (!util.isString(requestType))
          throw TypeError("requestType must be a string");
        if (!util.isString(responseType))
          throw TypeError("responseType must be a string");
        ReflectionObject.call(this, name, options);
        this.type = type || "rpc";
        this.requestType = requestType;
        this.requestStream = requestStream ? true : void 0;
        this.responseType = responseType;
        this.responseStream = responseStream ? true : void 0;
        this.resolvedRequestType = null;
        this.resolvedResponseType = null;
        this.comment = comment;
        this.parsedOptions = parsedOptions;
      }
      Method.fromJSON = function fromJSON(name, json) {
        return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
      };
      Method.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "type",
          this.type !== "rpc" && /* istanbul ignore next */
          this.type || void 0,
          "requestType",
          this.requestType,
          "requestStream",
          this.requestStream,
          "responseType",
          this.responseType,
          "responseStream",
          this.responseStream,
          "options",
          this.options,
          "comment",
          keepComments ? this.comment : void 0,
          "parsedOptions",
          this.parsedOptions
        ]);
      };
      Method.prototype.resolve = function resolve() {
        if (this.resolved)
          return this;
        this.resolvedRequestType = this.parent.lookupType(this.requestType);
        this.resolvedResponseType = this.parent.lookupType(this.responseType);
        return ReflectionObject.prototype.resolve.call(this);
      };
    }
  });

  // node_modules/protobufjs/src/service.js
  var require_service2 = __commonJS({
    "node_modules/protobufjs/src/service.js"(exports2, module2) {
      "use strict";
      module2.exports = Service;
      var Namespace = require_namespace();
      ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
      var Method = require_method();
      var util = require_util();
      var rpc = require_rpc();
      function Service(name, options) {
        Namespace.call(this, name, options);
        this.methods = {};
        this._methodsArray = null;
      }
      Service.fromJSON = function fromJSON(name, json) {
        var service = new Service(name, json.options);
        if (json.methods)
          for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
            service.add(Method.fromJSON(names[i], json.methods[names[i]]));
        if (json.nested)
          service.addJSON(json.nested);
        service.comment = json.comment;
        return service;
      };
      Service.prototype.toJSON = function toJSON(toJSONOptions) {
        var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "options",
          inherited && inherited.options || void 0,
          "methods",
          Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */
          {},
          "nested",
          inherited && inherited.nested || void 0,
          "comment",
          keepComments ? this.comment : void 0
        ]);
      };
      Object.defineProperty(Service.prototype, "methodsArray", {
        get: function() {
          return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
        }
      });
      function clearCache(service) {
        service._methodsArray = null;
        return service;
      }
      Service.prototype.get = function get(name) {
        return this.methods[name] || Namespace.prototype.get.call(this, name);
      };
      Service.prototype.resolveAll = function resolveAll() {
        var methods = this.methodsArray;
        for (var i = 0; i < methods.length; ++i)
          methods[i].resolve();
        return Namespace.prototype.resolve.call(this);
      };
      Service.prototype.add = function add(object) {
        if (this.get(object.name))
          throw Error("duplicate name '" + object.name + "' in " + this);
        if (object instanceof Method) {
          this.methods[object.name] = object;
          object.parent = this;
          return clearCache(this);
        }
        return Namespace.prototype.add.call(this, object);
      };
      Service.prototype.remove = function remove(object) {
        if (object instanceof Method) {
          if (this.methods[object.name] !== object)
            throw Error(object + " is not a member of " + this);
          delete this.methods[object.name];
          object.parent = null;
          return clearCache(this);
        }
        return Namespace.prototype.remove.call(this, object);
      };
      Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
        for (var i = 0, method; i < /* initializes */
        this.methodsArray.length; ++i) {
          var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
          rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
            m: method,
            q: method.resolvedRequestType.ctor,
            s: method.resolvedResponseType.ctor
          });
        }
        return rpcService;
      };
    }
  });

  // node_modules/protobufjs/src/message.js
  var require_message = __commonJS({
    "node_modules/protobufjs/src/message.js"(exports2, module2) {
      "use strict";
      module2.exports = Message;
      var util = require_minimal();
      function Message(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            this[keys[i]] = properties[keys[i]];
      }
      Message.create = function create(properties) {
        return this.$type.create(properties);
      };
      Message.encode = function encode(message, writer) {
        return this.$type.encode(message, writer);
      };
      Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.$type.encodeDelimited(message, writer);
      };
      Message.decode = function decode(reader) {
        return this.$type.decode(reader);
      };
      Message.decodeDelimited = function decodeDelimited(reader) {
        return this.$type.decodeDelimited(reader);
      };
      Message.verify = function verify(message) {
        return this.$type.verify(message);
      };
      Message.fromObject = function fromObject(object) {
        return this.$type.fromObject(object);
      };
      Message.toObject = function toObject(message, options) {
        return this.$type.toObject(message, options);
      };
      Message.prototype.toJSON = function toJSON() {
        return this.$type.toObject(this, util.toJSONOptions);
      };
    }
  });

  // node_modules/protobufjs/src/decoder.js
  var require_decoder = __commonJS({
    "node_modules/protobufjs/src/decoder.js"(exports2, module2) {
      "use strict";
      module2.exports = decoder;
      var Enum = require_enum();
      var types = require_types();
      var util = require_util();
      function missing(field) {
        return "missing required '" + field.name + "'";
      }
      function decoder(mtype) {
        var gen = util.codegen(["r", "l"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field2) {
          return field2.map;
        }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
        if (mtype.group)
          gen("if((t&7)===4)")("break");
        gen("switch(t>>>3){");
        var i = 0;
        for (; i < /* initializes */
        mtype.fieldsArray.length; ++i) {
          var field = mtype._fieldsArray[i].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
          gen("case %i: {", field.id);
          if (field.map) {
            gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
            if (types.defaults[field.keyType] !== void 0)
              gen("k=%j", types.defaults[field.keyType]);
            else
              gen("k=null");
            if (types.defaults[type] !== void 0)
              gen("value=%j", types.defaults[type]);
            else
              gen("value=null");
            gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
            if (types.basic[type] === void 0)
              gen("value=types[%i].decode(r,r.uint32())", i);
            else
              gen("value=r.%s()", type);
            gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
            if (types.long[field.keyType] !== void 0)
              gen('%s[typeof k==="object"?util.longToHash(k):k]=value', ref);
            else
              gen("%s[k]=value", ref);
          } else if (field.repeated) {
            gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
            if (types.packed[type] !== void 0)
              gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");
            if (types.basic[type] === void 0)
              gen(field.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);
            else
              gen("%s.push(r.%s())", ref, type);
          } else if (types.basic[type] === void 0)
            gen(field.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i);
          else
            gen("%s=r.%s()", ref, type);
          gen("break")("}");
        }
        gen("default:")("r.skipType(t&7)")("break")("}")("}");
        for (i = 0; i < mtype._fieldsArray.length; ++i) {
          var rfield = mtype._fieldsArray[i];
          if (rfield.required)
            gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
        }
        return gen("return m");
      }
    }
  });

  // node_modules/protobufjs/src/verifier.js
  var require_verifier = __commonJS({
    "node_modules/protobufjs/src/verifier.js"(exports2, module2) {
      "use strict";
      module2.exports = verifier;
      var Enum = require_enum();
      var util = require_util();
      function invalid(field, expected) {
        return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
      }
      function genVerifyValue(gen, field, fieldIndex, ref) {
        if (field.resolvedType) {
          if (field.resolvedType instanceof Enum) {
            gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
            for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j)
              gen("case %i:", field.resolvedType.values[keys[j]]);
            gen("break")("}");
          } else {
            gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
          }
        } else {
          switch (field.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
              break;
            case "float":
            case "double":
              gen('if(typeof %s!=="number")', ref)("return%j", invalid(field, "number"));
              break;
            case "bool":
              gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field, "boolean"));
              break;
            case "string":
              gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
              break;
            case "bytes":
              gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field, "buffer"));
              break;
          }
        }
        return gen;
      }
      function genVerifyKey(gen, field, ref) {
        switch (field.keyType) {
          case "int32":
          case "uint32":
          case "sint32":
          case "fixed32":
          case "sfixed32":
            gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
            break;
          case "int64":
          case "uint64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
            break;
          case "bool":
            gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
            break;
        }
        return gen;
      }
      function verifier(mtype) {
        var gen = util.codegen(["m"], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected");
        var oneofs = mtype.oneofsArray, seenFirstField = {};
        if (oneofs.length)
          gen("var p={}");
        for (var i = 0; i < /* initializes */
        mtype.fieldsArray.length; ++i) {
          var field = mtype._fieldsArray[i].resolve(), ref = "m" + util.safeProp(field.name);
          if (field.optional)
            gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name);
          if (field.map) {
            gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
            genVerifyKey(gen, field, "k[i]");
            genVerifyValue(gen, field, i, ref + "[k[i]]")("}");
          } else if (field.repeated) {
            gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
            genVerifyValue(gen, field, i, ref + "[i]")("}");
          } else {
            if (field.partOf) {
              var oneofProp = util.safeProp(field.partOf.name);
              if (seenFirstField[field.partOf.name] === 1)
                gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
              seenFirstField[field.partOf.name] = 1;
              gen("p%s=1", oneofProp);
            }
            genVerifyValue(gen, field, i, ref);
          }
          if (field.optional)
            gen("}");
        }
        return gen("return null");
      }
    }
  });

  // node_modules/protobufjs/src/converter.js
  var require_converter = __commonJS({
    "node_modules/protobufjs/src/converter.js"(exports2) {
      "use strict";
      var converter = exports2;
      var Enum = require_enum();
      var util = require_util();
      function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
        var defaultAlreadyEmitted = false;
        if (field.resolvedType) {
          if (field.resolvedType instanceof Enum) {
            gen("switch(d%s){", prop);
            for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
              if (values[keys[i]] === field.typeDefault && !defaultAlreadyEmitted) {
                gen("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', prop, prop, prop);
                if (!field.repeated)
                  gen("break");
                defaultAlreadyEmitted = true;
              }
              gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
            }
            gen("}");
          } else
            gen('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
        } else {
          var isUnsigned = false;
          switch (field.type) {
            case "double":
            case "float":
              gen("m%s=Number(d%s)", prop, prop);
              break;
            case "uint32":
            case "fixed32":
              gen("m%s=d%s>>>0", prop, prop);
              break;
            case "int32":
            case "sint32":
            case "sfixed32":
              gen("m%s=d%s|0", prop, prop);
              break;
            case "uint64":
              isUnsigned = true;
            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
              break;
            case "bytes":
              gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
              break;
            case "string":
              gen("m%s=String(d%s)", prop, prop);
              break;
            case "bool":
              gen("m%s=Boolean(d%s)", prop, prop);
              break;
          }
        }
        return gen;
      }
      converter.fromObject = function fromObject(mtype) {
        var fields = mtype.fieldsArray;
        var gen = util.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
        if (!fields.length)
          return gen("return new this.ctor");
        gen("var m=new this.ctor");
        for (var i = 0; i < fields.length; ++i) {
          var field = fields[i].resolve(), prop = util.safeProp(field.name);
          if (field.map) {
            gen("if(d%s){", prop)('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
            genValuePartial_fromObject(
              gen,
              field,
              /* not sorted */
              i,
              prop + "[ks[i]]"
            )("}")("}");
          } else if (field.repeated) {
            gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
            genValuePartial_fromObject(
              gen,
              field,
              /* not sorted */
              i,
              prop + "[i]"
            )("}")("}");
          } else {
            if (!(field.resolvedType instanceof Enum))
              gen("if(d%s!=null){", prop);
            genValuePartial_fromObject(
              gen,
              field,
              /* not sorted */
              i,
              prop
            );
            if (!(field.resolvedType instanceof Enum))
              gen("}");
          }
        }
        return gen("return m");
      };
      function genValuePartial_toObject(gen, field, fieldIndex, prop) {
        if (field.resolvedType) {
          if (field.resolvedType instanceof Enum)
            gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);
          else
            gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
        } else {
          var isUnsigned = false;
          switch (field.type) {
            case "double":
            case "float":
              gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
              break;
            case "uint64":
              isUnsigned = true;
            case "int64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              gen('if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
              break;
            case "bytes":
              gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
              break;
            default:
              gen("d%s=m%s", prop, prop);
              break;
          }
        }
        return gen;
      }
      converter.toObject = function toObject(mtype) {
        var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
        if (!fields.length)
          return util.codegen()("return {}");
        var gen = util.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
        var repeatedFields = [], mapFields = [], normalFields = [], i = 0;
        for (; i < fields.length; ++i)
          if (!fields[i].partOf)
            (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
        if (repeatedFields.length) {
          gen("if(o.arrays||o.defaults){");
          for (i = 0; i < repeatedFields.length; ++i)
            gen("d%s=[]", util.safeProp(repeatedFields[i].name));
          gen("}");
        }
        if (mapFields.length) {
          gen("if(o.objects||o.defaults){");
          for (i = 0; i < mapFields.length; ++i)
            gen("d%s={}", util.safeProp(mapFields[i].name));
          gen("}");
        }
        if (normalFields.length) {
          gen("if(o.defaults){");
          for (i = 0; i < normalFields.length; ++i) {
            var field = normalFields[i], prop = util.safeProp(field.name);
            if (field.resolvedType instanceof Enum)
              gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
            else if (field.long)
              gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());
            else if (field.bytes) {
              var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
              gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
            } else
              gen("d%s=%j", prop, field.typeDefault);
          }
          gen("}");
        }
        var hasKs2 = false;
        for (i = 0; i < fields.length; ++i) {
          var field = fields[i], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
          if (field.map) {
            if (!hasKs2) {
              hasKs2 = true;
              gen("var ks2");
            }
            gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
            genValuePartial_toObject(
              gen,
              field,
              /* sorted */
              index,
              prop + "[ks2[j]]"
            )("}");
          } else if (field.repeated) {
            gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
            genValuePartial_toObject(
              gen,
              field,
              /* sorted */
              index,
              prop + "[j]"
            )("}");
          } else {
            gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name);
            genValuePartial_toObject(
              gen,
              field,
              /* sorted */
              index,
              prop
            );
            if (field.partOf)
              gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
          }
          gen("}");
        }
        return gen("return d");
      };
    }
  });

  // node_modules/protobufjs/src/wrappers.js
  var require_wrappers = __commonJS({
    "node_modules/protobufjs/src/wrappers.js"(exports2) {
      "use strict";
      var wrappers = exports2;
      var Message = require_message();
      wrappers[".google.protobuf.Any"] = {
        fromObject: function(object) {
          if (object && object["@type"]) {
            var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
            var type = this.lookup(name);
            if (type) {
              var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"];
              if (type_url.indexOf("/") === -1) {
                type_url = "/" + type_url;
              }
              return this.create({
                type_url,
                value: type.encode(type.fromObject(object)).finish()
              });
            }
          }
          return this.fromObject(object);
        },
        toObject: function(message, options) {
          var googleApi = "type.googleapis.com/";
          var prefix = "";
          var name = "";
          if (options && options.json && message.type_url && message.value) {
            name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
            prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
            var type = this.lookup(name);
            if (type)
              message = type.decode(message.value);
          }
          if (!(message instanceof this.ctor) && message instanceof Message) {
            var object = message.$type.toObject(message, options);
            var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName;
            if (prefix === "") {
              prefix = googleApi;
            }
            name = prefix + messageName;
            object["@type"] = name;
            return object;
          }
          return this.toObject(message, options);
        }
      };
    }
  });

  // node_modules/protobufjs/src/type.js
  var require_type = __commonJS({
    "node_modules/protobufjs/src/type.js"(exports2, module2) {
      "use strict";
      module2.exports = Type;
      var Namespace = require_namespace();
      ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
      var Enum = require_enum();
      var OneOf = require_oneof();
      var Field = require_field();
      var MapField = require_mapfield();
      var Service = require_service2();
      var Message = require_message();
      var Reader = require_reader();
      var Writer = require_writer();
      var util = require_util();
      var encoder = require_encoder();
      var decoder = require_decoder();
      var verifier = require_verifier();
      var converter = require_converter();
      var wrappers = require_wrappers();
      function Type(name, options) {
        Namespace.call(this, name, options);
        this.fields = {};
        this.oneofs = void 0;
        this.extensions = void 0;
        this.reserved = void 0;
        this.group = void 0;
        this._fieldsById = null;
        this._fieldsArray = null;
        this._oneofsArray = null;
        this._ctor = null;
      }
      Object.defineProperties(Type.prototype, {
        /**
         * Message fields by id.
         * @name Type#fieldsById
         * @type {Object.<number,Field>}
         * @readonly
         */
        fieldsById: {
          get: function() {
            if (this._fieldsById)
              return this._fieldsById;
            this._fieldsById = {};
            for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
              var field = this.fields[names[i]], id = field.id;
              if (this._fieldsById[id])
                throw Error("duplicate id " + id + " in " + this);
              this._fieldsById[id] = field;
            }
            return this._fieldsById;
          }
        },
        /**
         * Fields of this message as an array for iteration.
         * @name Type#fieldsArray
         * @type {Field[]}
         * @readonly
         */
        fieldsArray: {
          get: function() {
            return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
          }
        },
        /**
         * Oneofs of this message as an array for iteration.
         * @name Type#oneofsArray
         * @type {OneOf[]}
         * @readonly
         */
        oneofsArray: {
          get: function() {
            return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
          }
        },
        /**
         * The registered constructor, if any registered, otherwise a generic constructor.
         * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
         * @name Type#ctor
         * @type {Constructor<{}>}
         */
        ctor: {
          get: function() {
            return this._ctor || (this.ctor = Type.generateConstructor(this)());
          },
          set: function(ctor) {
            var prototype = ctor.prototype;
            if (!(prototype instanceof Message)) {
              (ctor.prototype = new Message()).constructor = ctor;
              util.merge(ctor.prototype, prototype);
            }
            ctor.$type = ctor.prototype.$type = this;
            util.merge(ctor, Message, true);
            this._ctor = ctor;
            var i = 0;
            for (; i < /* initializes */
            this.fieldsArray.length; ++i)
              this._fieldsArray[i].resolve();
            var ctorProperties = {};
            for (i = 0; i < /* initializes */
            this.oneofsArray.length; ++i)
              ctorProperties[this._oneofsArray[i].resolve().name] = {
                get: util.oneOfGetter(this._oneofsArray[i].oneof),
                set: util.oneOfSetter(this._oneofsArray[i].oneof)
              };
            if (i)
              Object.defineProperties(ctor.prototype, ctorProperties);
          }
        }
      });
      Type.generateConstructor = function generateConstructor(mtype) {
        var gen = util.codegen(["p"], mtype.name);
        for (var i = 0, field; i < mtype.fieldsArray.length; ++i)
          if ((field = mtype._fieldsArray[i]).map)
            gen("this%s={}", util.safeProp(field.name));
          else if (field.repeated)
            gen("this%s=[]", util.safeProp(field.name));
        return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
      };
      function clearCache(type) {
        type._fieldsById = type._fieldsArray = type._oneofsArray = null;
        delete type.encode;
        delete type.decode;
        delete type.verify;
        return type;
      }
      Type.fromJSON = function fromJSON(name, json) {
        var type = new Type(name, json.options);
        type.extensions = json.extensions;
        type.reserved = json.reserved;
        var names = Object.keys(json.fields), i = 0;
        for (; i < names.length; ++i)
          type.add(
            (typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]])
          );
        if (json.oneofs)
          for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
            type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
        if (json.nested)
          for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
            var nested = json.nested[names[i]];
            type.add(
              // most to least likely
              (nested.id !== void 0 ? Field.fromJSON : nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : Namespace.fromJSON)(names[i], nested)
            );
          }
        if (json.extensions && json.extensions.length)
          type.extensions = json.extensions;
        if (json.reserved && json.reserved.length)
          type.reserved = json.reserved;
        if (json.group)
          type.group = true;
        if (json.comment)
          type.comment = json.comment;
        return type;
      };
      Type.prototype.toJSON = function toJSON(toJSONOptions) {
        var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "options",
          inherited && inherited.options || void 0,
          "oneofs",
          Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
          "fields",
          Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
            return !obj.declaringField;
          }), toJSONOptions) || {},
          "extensions",
          this.extensions && this.extensions.length ? this.extensions : void 0,
          "reserved",
          this.reserved && this.reserved.length ? this.reserved : void 0,
          "group",
          this.group || void 0,
          "nested",
          inherited && inherited.nested || void 0,
          "comment",
          keepComments ? this.comment : void 0
        ]);
      };
      Type.prototype.resolveAll = function resolveAll() {
        var fields = this.fieldsArray, i = 0;
        while (i < fields.length)
          fields[i++].resolve();
        var oneofs = this.oneofsArray;
        i = 0;
        while (i < oneofs.length)
          oneofs[i++].resolve();
        return Namespace.prototype.resolveAll.call(this);
      };
      Type.prototype.get = function get(name) {
        return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
      };
      Type.prototype.add = function add(object) {
        if (this.get(object.name))
          throw Error("duplicate name '" + object.name + "' in " + this);
        if (object instanceof Field && object.extend === void 0) {
          if (this._fieldsById ? (
            /* istanbul ignore next */
            this._fieldsById[object.id]
          ) : this.fieldsById[object.id])
            throw Error("duplicate id " + object.id + " in " + this);
          if (this.isReservedId(object.id))
            throw Error("id " + object.id + " is reserved in " + this);
          if (this.isReservedName(object.name))
            throw Error("name '" + object.name + "' is reserved in " + this);
          if (object.parent)
            object.parent.remove(object);
          this.fields[object.name] = object;
          object.message = this;
          object.onAdd(this);
          return clearCache(this);
        }
        if (object instanceof OneOf) {
          if (!this.oneofs)
            this.oneofs = {};
          this.oneofs[object.name] = object;
          object.onAdd(this);
          return clearCache(this);
        }
        return Namespace.prototype.add.call(this, object);
      };
      Type.prototype.remove = function remove(object) {
        if (object instanceof Field && object.extend === void 0) {
          if (!this.fields || this.fields[object.name] !== object)
            throw Error(object + " is not a member of " + this);
          delete this.fields[object.name];
          object.parent = null;
          object.onRemove(this);
          return clearCache(this);
        }
        if (object instanceof OneOf) {
          if (!this.oneofs || this.oneofs[object.name] !== object)
            throw Error(object + " is not a member of " + this);
          delete this.oneofs[object.name];
          object.parent = null;
          object.onRemove(this);
          return clearCache(this);
        }
        return Namespace.prototype.remove.call(this, object);
      };
      Type.prototype.isReservedId = function isReservedId(id) {
        return Namespace.isReservedId(this.reserved, id);
      };
      Type.prototype.isReservedName = function isReservedName(name) {
        return Namespace.isReservedName(this.reserved, name);
      };
      Type.prototype.create = function create(properties) {
        return new this.ctor(properties);
      };
      Type.prototype.setup = function setup() {
        var fullName = this.fullName, types = [];
        for (var i = 0; i < /* initializes */
        this.fieldsArray.length; ++i)
          types.push(this._fieldsArray[i].resolve().resolvedType);
        this.encode = encoder(this)({
          Writer,
          types,
          util
        });
        this.decode = decoder(this)({
          Reader,
          types,
          util
        });
        this.verify = verifier(this)({
          types,
          util
        });
        this.fromObject = converter.fromObject(this)({
          types,
          util
        });
        this.toObject = converter.toObject(this)({
          types,
          util
        });
        var wrapper = wrappers[fullName];
        if (wrapper) {
          var originalThis = Object.create(this);
          originalThis.fromObject = this.fromObject;
          this.fromObject = wrapper.fromObject.bind(originalThis);
          originalThis.toObject = this.toObject;
          this.toObject = wrapper.toObject.bind(originalThis);
        }
        return this;
      };
      Type.prototype.encode = function encode_setup(message, writer) {
        return this.setup().encode(message, writer);
      };
      Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
      };
      Type.prototype.decode = function decode_setup(reader, length) {
        return this.setup().decode(reader, length);
      };
      Type.prototype.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof Reader))
          reader = Reader.create(reader);
        return this.decode(reader, reader.uint32());
      };
      Type.prototype.verify = function verify_setup(message) {
        return this.setup().verify(message);
      };
      Type.prototype.fromObject = function fromObject(object) {
        return this.setup().fromObject(object);
      };
      Type.prototype.toObject = function toObject(message, options) {
        return this.setup().toObject(message, options);
      };
      Type.d = function decorateType(typeName) {
        return function typeDecorator(target) {
          util.decorateType(target, typeName);
        };
      };
    }
  });

  // node_modules/protobufjs/src/root.js
  var require_root = __commonJS({
    "node_modules/protobufjs/src/root.js"(exports2, module2) {
      "use strict";
      module2.exports = Root;
      var Namespace = require_namespace();
      ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
      var Field = require_field();
      var Enum = require_enum();
      var OneOf = require_oneof();
      var util = require_util();
      var Type;
      var parse;
      var common;
      function Root(options) {
        Namespace.call(this, "", options);
        this.deferred = [];
        this.files = [];
      }
      Root.fromJSON = function fromJSON(json, root) {
        if (!root)
          root = new Root();
        if (json.options)
          root.setOptions(json.options);
        return root.addJSON(json.nested);
      };
      Root.prototype.resolvePath = util.path.resolve;
      Root.prototype.fetch = util.fetch;
      function SYNC() {
      }
      Root.prototype.load = function load(filename, options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = void 0;
        }
        var self2 = this;
        if (!callback)
          return util.asPromise(load, self2, filename, options);
        var sync = callback === SYNC;
        function finish(err, root) {
          if (!callback)
            return;
          var cb = callback;
          callback = null;
          if (sync)
            throw err;
          cb(err, root);
        }
        function getBundledFileName(filename2) {
          var idx = filename2.lastIndexOf("google/protobuf/");
          if (idx > -1) {
            var altname = filename2.substring(idx);
            if (altname in common)
              return altname;
          }
          return null;
        }
        function process(filename2, source) {
          try {
            if (util.isString(source) && source.charAt(0) === "{")
              source = JSON.parse(source);
            if (!util.isString(source))
              self2.setOptions(source.options).addJSON(source.nested);
            else {
              parse.filename = filename2;
              var parsed = parse(source, self2, options), resolved2, i2 = 0;
              if (parsed.imports) {
                for (; i2 < parsed.imports.length; ++i2)
                  if (resolved2 = getBundledFileName(parsed.imports[i2]) || self2.resolvePath(filename2, parsed.imports[i2]))
                    fetch(resolved2);
              }
              if (parsed.weakImports) {
                for (i2 = 0; i2 < parsed.weakImports.length; ++i2)
                  if (resolved2 = getBundledFileName(parsed.weakImports[i2]) || self2.resolvePath(filename2, parsed.weakImports[i2]))
                    fetch(resolved2, true);
              }
            }
          } catch (err) {
            finish(err);
          }
          if (!sync && !queued)
            finish(null, self2);
        }
        function fetch(filename2, weak) {
          filename2 = getBundledFileName(filename2) || filename2;
          if (self2.files.indexOf(filename2) > -1)
            return;
          self2.files.push(filename2);
          if (filename2 in common) {
            if (sync)
              process(filename2, common[filename2]);
            else {
              ++queued;
              setTimeout(function() {
                --queued;
                process(filename2, common[filename2]);
              });
            }
            return;
          }
          if (sync) {
            var source;
            try {
              source = util.fs.readFileSync(filename2).toString("utf8");
            } catch (err) {
              if (!weak)
                finish(err);
              return;
            }
            process(filename2, source);
          } else {
            ++queued;
            self2.fetch(filename2, function(err, source2) {
              --queued;
              if (!callback)
                return;
              if (err) {
                if (!weak)
                  finish(err);
                else if (!queued)
                  finish(null, self2);
                return;
              }
              process(filename2, source2);
            });
          }
        }
        var queued = 0;
        if (util.isString(filename))
          filename = [filename];
        for (var i = 0, resolved; i < filename.length; ++i)
          if (resolved = self2.resolvePath("", filename[i]))
            fetch(resolved);
        if (sync)
          return self2;
        if (!queued)
          finish(null, self2);
        return void 0;
      };
      Root.prototype.loadSync = function loadSync(filename, options) {
        if (!util.isNode)
          throw Error("not supported");
        return this.load(filename, options, SYNC);
      };
      Root.prototype.resolveAll = function resolveAll() {
        if (this.deferred.length)
          throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
            return "'extend " + field.extend + "' in " + field.parent.fullName;
          }).join(", "));
        return Namespace.prototype.resolveAll.call(this);
      };
      var exposeRe = /^[A-Z]/;
      function tryHandleExtension(root, field) {
        var extendedType = field.parent.lookup(field.extend);
        if (extendedType) {
          var sisterField = new Field(field.fullName, field.id, field.type, field.rule, void 0, field.options);
          if (extendedType.get(sisterField.name)) {
            return true;
          }
          sisterField.declaringField = field;
          field.extensionField = sisterField;
          extendedType.add(sisterField);
          return true;
        }
        return false;
      }
      Root.prototype._handleAdd = function _handleAdd(object) {
        if (object instanceof Field) {
          if (
            /* an extension field (implies not part of a oneof) */
            object.extend !== void 0 && /* not already handled */
            !object.extensionField
          ) {
            if (!tryHandleExtension(this, object))
              this.deferred.push(object);
          }
        } else if (object instanceof Enum) {
          if (exposeRe.test(object.name))
            object.parent[object.name] = object.values;
        } else if (!(object instanceof OneOf)) {
          if (object instanceof Type)
            for (var i = 0; i < this.deferred.length; )
              if (tryHandleExtension(this, this.deferred[i]))
                this.deferred.splice(i, 1);
              else
                ++i;
          for (var j = 0; j < /* initializes */
          object.nestedArray.length; ++j)
            this._handleAdd(object._nestedArray[j]);
          if (exposeRe.test(object.name))
            object.parent[object.name] = object;
        }
      };
      Root.prototype._handleRemove = function _handleRemove(object) {
        if (object instanceof Field) {
          if (
            /* an extension field */
            object.extend !== void 0
          ) {
            if (
              /* already handled */
              object.extensionField
            ) {
              object.extensionField.parent.remove(object.extensionField);
              object.extensionField = null;
            } else {
              var index = this.deferred.indexOf(object);
              if (index > -1)
                this.deferred.splice(index, 1);
            }
          }
        } else if (object instanceof Enum) {
          if (exposeRe.test(object.name))
            delete object.parent[object.name];
        } else if (object instanceof Namespace) {
          for (var i = 0; i < /* initializes */
          object.nestedArray.length; ++i)
            this._handleRemove(object._nestedArray[i]);
          if (exposeRe.test(object.name))
            delete object.parent[object.name];
        }
      };
      Root._configure = function(Type_, parse_, common_) {
        Type = Type_;
        parse = parse_;
        common = common_;
      };
    }
  });

  // node_modules/protobufjs/src/util.js
  var require_util = __commonJS({
    "node_modules/protobufjs/src/util.js"(exports2, module2) {
      "use strict";
      var util = module2.exports = require_minimal();
      var roots = require_roots();
      var Type;
      var Enum;
      util.codegen = require_codegen();
      util.fetch = require_fetch();
      util.path = require_path();
      util.fs = util.inquire("fs");
      util.toArray = function toArray(object) {
        if (object) {
          var keys = Object.keys(object), array = new Array(keys.length), index = 0;
          while (index < keys.length)
            array[index] = object[keys[index++]];
          return array;
        }
        return [];
      };
      util.toObject = function toObject(array) {
        var object = {}, index = 0;
        while (index < array.length) {
          var key = array[index++], val = array[index++];
          if (val !== void 0)
            object[key] = val;
        }
        return object;
      };
      var safePropBackslashRe = /\\/g;
      var safePropQuoteRe = /"/g;
      util.isReserved = function isReserved(name) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
      };
      util.safeProp = function safeProp(prop) {
        if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop))
          return '["' + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, '\\"') + '"]';
        return "." + prop;
      };
      util.ucFirst = function ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
      };
      var camelCaseRe = /_([a-z])/g;
      util.camelCase = function camelCase(str) {
        return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
          return $1.toUpperCase();
        });
      };
      util.compareFieldsById = function compareFieldsById(a2, b2) {
        return a2.id - b2.id;
      };
      util.decorateType = function decorateType(ctor, typeName) {
        if (ctor.$type) {
          if (typeName && ctor.$type.name !== typeName) {
            util.decorateRoot.remove(ctor.$type);
            ctor.$type.name = typeName;
            util.decorateRoot.add(ctor.$type);
          }
          return ctor.$type;
        }
        if (!Type)
          Type = require_type();
        var type = new Type(typeName || ctor.name);
        util.decorateRoot.add(type);
        type.ctor = ctor;
        Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
        Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
        return type;
      };
      var decorateEnumIndex = 0;
      util.decorateEnum = function decorateEnum(object) {
        if (object.$type)
          return object.$type;
        if (!Enum)
          Enum = require_enum();
        var enm = new Enum("Enum" + decorateEnumIndex++, object);
        util.decorateRoot.add(enm);
        Object.defineProperty(object, "$type", { value: enm, enumerable: false });
        return enm;
      };
      util.setProperty = function setProperty(dst, path, value) {
        function setProp(dst2, path2, value2) {
          var part = path2.shift();
          if (part === "__proto__") {
            return dst2;
          }
          if (path2.length > 0) {
            dst2[part] = setProp(dst2[part] || {}, path2, value2);
          } else {
            var prevValue = dst2[part];
            if (prevValue)
              value2 = [].concat(prevValue).concat(value2);
            dst2[part] = value2;
          }
          return dst2;
        }
        if (typeof dst !== "object")
          throw TypeError("dst must be an object");
        if (!path)
          throw TypeError("path must be specified");
        path = path.split(".");
        return setProp(dst, path, value);
      };
      Object.defineProperty(util, "decorateRoot", {
        get: function() {
          return roots["decorated"] || (roots["decorated"] = new (require_root())());
        }
      });
    }
  });

  // node_modules/protobufjs/src/object.js
  var require_object = __commonJS({
    "node_modules/protobufjs/src/object.js"(exports2, module2) {
      "use strict";
      module2.exports = ReflectionObject;
      ReflectionObject.className = "ReflectionObject";
      var util = require_util();
      var Root;
      function ReflectionObject(name, options) {
        if (!util.isString(name))
          throw TypeError("name must be a string");
        if (options && !util.isObject(options))
          throw TypeError("options must be an object");
        this.options = options;
        this.parsedOptions = null;
        this.name = name;
        this.parent = null;
        this.resolved = false;
        this.comment = null;
        this.filename = null;
      }
      Object.defineProperties(ReflectionObject.prototype, {
        /**
         * Reference to the root namespace.
         * @name ReflectionObject#root
         * @type {Root}
         * @readonly
         */
        root: {
          get: function() {
            var ptr = this;
            while (ptr.parent !== null)
              ptr = ptr.parent;
            return ptr;
          }
        },
        /**
         * Full name including leading dot.
         * @name ReflectionObject#fullName
         * @type {string}
         * @readonly
         */
        fullName: {
          get: function() {
            var path = [this.name], ptr = this.parent;
            while (ptr) {
              path.unshift(ptr.name);
              ptr = ptr.parent;
            }
            return path.join(".");
          }
        }
      });
      ReflectionObject.prototype.toJSON = /* istanbul ignore next */
      function toJSON() {
        throw Error();
      };
      ReflectionObject.prototype.onAdd = function onAdd(parent) {
        if (this.parent && this.parent !== parent)
          this.parent.remove(this);
        this.parent = parent;
        this.resolved = false;
        var root = parent.root;
        if (root instanceof Root)
          root._handleAdd(this);
      };
      ReflectionObject.prototype.onRemove = function onRemove(parent) {
        var root = parent.root;
        if (root instanceof Root)
          root._handleRemove(this);
        this.parent = null;
        this.resolved = false;
      };
      ReflectionObject.prototype.resolve = function resolve() {
        if (this.resolved)
          return this;
        if (this.root instanceof Root)
          this.resolved = true;
        return this;
      };
      ReflectionObject.prototype.getOption = function getOption(name) {
        if (this.options)
          return this.options[name];
        return void 0;
      };
      ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
        if (!ifNotSet || !this.options || this.options[name] === void 0)
          (this.options || (this.options = {}))[name] = value;
        return this;
      };
      ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
        if (!this.parsedOptions) {
          this.parsedOptions = [];
        }
        var parsedOptions = this.parsedOptions;
        if (propName) {
          var opt = parsedOptions.find(function(opt2) {
            return Object.prototype.hasOwnProperty.call(opt2, name);
          });
          if (opt) {
            var newValue = opt[name];
            util.setProperty(newValue, propName, value);
          } else {
            opt = {};
            opt[name] = util.setProperty({}, propName, value);
            parsedOptions.push(opt);
          }
        } else {
          var newOpt = {};
          newOpt[name] = value;
          parsedOptions.push(newOpt);
        }
        return this;
      };
      ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
        if (options)
          for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
            this.setOption(keys[i], options[keys[i]], ifNotSet);
        return this;
      };
      ReflectionObject.prototype.toString = function toString() {
        var className = this.constructor.className, fullName = this.fullName;
        if (fullName.length)
          return className + " " + fullName;
        return className;
      };
      ReflectionObject._configure = function(Root_) {
        Root = Root_;
      };
    }
  });

  // node_modules/protobufjs/src/enum.js
  var require_enum = __commonJS({
    "node_modules/protobufjs/src/enum.js"(exports2, module2) {
      "use strict";
      module2.exports = Enum;
      var ReflectionObject = require_object();
      ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
      var Namespace = require_namespace();
      var util = require_util();
      function Enum(name, values, options, comment, comments, valuesOptions) {
        ReflectionObject.call(this, name, options);
        if (values && typeof values !== "object")
          throw TypeError("values must be an object");
        this.valuesById = {};
        this.values = Object.create(this.valuesById);
        this.comment = comment;
        this.comments = comments || {};
        this.valuesOptions = valuesOptions;
        this.reserved = void 0;
        if (values) {
          for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
            if (typeof values[keys[i]] === "number")
              this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
        }
      }
      Enum.fromJSON = function fromJSON(name, json) {
        var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
        enm.reserved = json.reserved;
        return enm;
      };
      Enum.prototype.toJSON = function toJSON(toJSONOptions) {
        var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
        return util.toObject([
          "options",
          this.options,
          "valuesOptions",
          this.valuesOptions,
          "values",
          this.values,
          "reserved",
          this.reserved && this.reserved.length ? this.reserved : void 0,
          "comment",
          keepComments ? this.comment : void 0,
          "comments",
          keepComments ? this.comments : void 0
        ]);
      };
      Enum.prototype.add = function add(name, id, comment, options) {
        if (!util.isString(name))
          throw TypeError("name must be a string");
        if (!util.isInteger(id))
          throw TypeError("id must be an integer");
        if (this.values[name] !== void 0)
          throw Error("duplicate name '" + name + "' in " + this);
        if (this.isReservedId(id))
          throw Error("id " + id + " is reserved in " + this);
        if (this.isReservedName(name))
          throw Error("name '" + name + "' is reserved in " + this);
        if (this.valuesById[id] !== void 0) {
          if (!(this.options && this.options.allow_alias))
            throw Error("duplicate id " + id + " in " + this);
          this.values[name] = id;
        } else
          this.valuesById[this.values[name] = id] = name;
        if (options) {
          if (this.valuesOptions === void 0)
            this.valuesOptions = {};
          this.valuesOptions[name] = options || null;
        }
        this.comments[name] = comment || null;
        return this;
      };
      Enum.prototype.remove = function remove(name) {
        if (!util.isString(name))
          throw TypeError("name must be a string");
        var val = this.values[name];
        if (val == null)
          throw Error("name '" + name + "' does not exist in " + this);
        delete this.valuesById[val];
        delete this.values[name];
        delete this.comments[name];
        if (this.valuesOptions)
          delete this.valuesOptions[name];
        return this;
      };
      Enum.prototype.isReservedId = function isReservedId(id) {
        return Namespace.isReservedId(this.reserved, id);
      };
      Enum.prototype.isReservedName = function isReservedName(name) {
        return Namespace.isReservedName(this.reserved, name);
      };
    }
  });

  // node_modules/protobufjs/src/encoder.js
  var require_encoder = __commonJS({
    "node_modules/protobufjs/src/encoder.js"(exports2, module2) {
      "use strict";
      module2.exports = encoder;
      var Enum = require_enum();
      var types = require_types();
      var util = require_util();
      function genTypePartial(gen, field, fieldIndex, ref) {
        return field.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
      }
      function encoder(mtype) {
        var gen = util.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
        var i, ref;
        var fields = (
          /* initializes */
          mtype.fieldsArray.slice().sort(util.compareFieldsById)
        );
        for (var i = 0; i < fields.length; ++i) {
          var field = fields[i].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
          ref = "m" + util.safeProp(field.name);
          if (field.map) {
            gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
            if (wireType === void 0)
              gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref);
            else
              gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
            gen("}")("}");
          } else if (field.repeated) {
            gen("if(%s!=null&&%s.length){", ref, ref);
            if (field.packed && types.packed[type] !== void 0) {
              gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()");
            } else {
              gen("for(var i=0;i<%s.length;++i)", ref);
              if (wireType === void 0)
                genTypePartial(gen, field, index, ref + "[i]");
              else
                gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
            }
            gen("}");
          } else {
            if (field.optional)
              gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name);
            if (wireType === void 0)
              genTypePartial(gen, field, index, ref);
            else
              gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
          }
        }
        return gen("return w");
      }
    }
  });

  // node_modules/protobufjs/src/index-light.js
  var require_index_light = __commonJS({
    "node_modules/protobufjs/src/index-light.js"(exports2, module2) {
      "use strict";
      var protobuf2 = module2.exports = require_index_minimal();
      protobuf2.build = "light";
      function load(filename, root, callback) {
        if (typeof root === "function") {
          callback = root;
          root = new protobuf2.Root();
        } else if (!root)
          root = new protobuf2.Root();
        return root.load(filename, callback);
      }
      protobuf2.load = load;
      function loadSync(filename, root) {
        if (!root)
          root = new protobuf2.Root();
        return root.loadSync(filename);
      }
      protobuf2.loadSync = loadSync;
      protobuf2.encoder = require_encoder();
      protobuf2.decoder = require_decoder();
      protobuf2.verifier = require_verifier();
      protobuf2.converter = require_converter();
      protobuf2.ReflectionObject = require_object();
      protobuf2.Namespace = require_namespace();
      protobuf2.Root = require_root();
      protobuf2.Enum = require_enum();
      protobuf2.Type = require_type();
      protobuf2.Field = require_field();
      protobuf2.OneOf = require_oneof();
      protobuf2.MapField = require_mapfield();
      protobuf2.Service = require_service2();
      protobuf2.Method = require_method();
      protobuf2.Message = require_message();
      protobuf2.wrappers = require_wrappers();
      protobuf2.types = require_types();
      protobuf2.util = require_util();
      protobuf2.ReflectionObject._configure(protobuf2.Root);
      protobuf2.Namespace._configure(protobuf2.Type, protobuf2.Service, protobuf2.Enum);
      protobuf2.Root._configure(protobuf2.Type);
      protobuf2.Field._configure(protobuf2.Type);
    }
  });

  // node_modules/protobufjs/src/tokenize.js
  var require_tokenize = __commonJS({
    "node_modules/protobufjs/src/tokenize.js"(exports2, module2) {
      "use strict";
      module2.exports = tokenize;
      var delimRe = /[\s{}=;:[\],'"()<>]/g;
      var stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
      var stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
      var setCommentRe = /^ *[*/]+ */;
      var setCommentAltRe = /^\s*\*?\/*/;
      var setCommentSplitRe = /\n/g;
      var whitespaceRe = /\s/;
      var unescapeRe = /\\(.?)/g;
      var unescapeMap = {
        "0": "\0",
        "r": "\r",
        "n": "\n",
        "t": "	"
      };
      function unescape2(str) {
        return str.replace(unescapeRe, function($0, $1) {
          switch ($1) {
            case "\\":
            case "":
              return $1;
            default:
              return unescapeMap[$1] || "";
          }
        });
      }
      tokenize.unescape = unescape2;
      function tokenize(source, alternateCommentMode) {
        source = source.toString();
        var offset = 0, length = source.length, line = 1, lastCommentLine = 0, comments = {};
        var stack = [];
        var stringDelim = null;
        function illegal(subject) {
          return Error("illegal " + subject + " (line " + line + ")");
        }
        function readString() {
          var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
          re.lastIndex = offset - 1;
          var match = re.exec(source);
          if (!match)
            throw illegal("string");
          offset = re.lastIndex;
          push(stringDelim);
          stringDelim = null;
          return unescape2(match[1]);
        }
        function charAt(pos) {
          return source.charAt(pos);
        }
        function setComment(start, end, isLeading) {
          var comment = {
            type: source.charAt(start++),
            lineEmpty: false,
            leading: isLeading
          };
          var lookback;
          if (alternateCommentMode) {
            lookback = 2;
          } else {
            lookback = 3;
          }
          var commentOffset = start - lookback, c2;
          do {
            if (--commentOffset < 0 || (c2 = source.charAt(commentOffset)) === "\n") {
              comment.lineEmpty = true;
              break;
            }
          } while (c2 === " " || c2 === "	");
          var lines = source.substring(start, end).split(setCommentSplitRe);
          for (var i = 0; i < lines.length; ++i)
            lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
          comment.text = lines.join("\n").trim();
          comments[line] = comment;
          lastCommentLine = line;
        }
        function isDoubleSlashCommentLine(startOffset) {
          var endOffset = findEndOfLine(startOffset);
          var lineText = source.substring(startOffset, endOffset);
          var isComment = /^\s*\/{1,2}/.test(lineText);
          return isComment;
        }
        function findEndOfLine(cursor) {
          var endOffset = cursor;
          while (endOffset < length && charAt(endOffset) !== "\n") {
            endOffset++;
          }
          return endOffset;
        }
        function next() {
          if (stack.length > 0)
            return stack.shift();
          if (stringDelim)
            return readString();
          var repeat, prev, curr, start, isDoc, isLeadingComment = offset === 0;
          do {
            if (offset === length)
              return null;
            repeat = false;
            while (whitespaceRe.test(curr = charAt(offset))) {
              if (curr === "\n") {
                isLeadingComment = true;
                ++line;
              }
              if (++offset === length)
                return null;
            }
            if (charAt(offset) === "/") {
              if (++offset === length) {
                throw illegal("comment");
              }
              if (charAt(offset) === "/") {
                if (!alternateCommentMode) {
                  isDoc = charAt(start = offset + 1) === "/";
                  while (charAt(++offset) !== "\n") {
                    if (offset === length) {
                      return null;
                    }
                  }
                  ++offset;
                  if (isDoc) {
                    setComment(start, offset - 1, isLeadingComment);
                    isLeadingComment = true;
                  }
                  ++line;
                  repeat = true;
                } else {
                  start = offset;
                  isDoc = false;
                  if (isDoubleSlashCommentLine(offset)) {
                    isDoc = true;
                    do {
                      offset = findEndOfLine(offset);
                      if (offset === length) {
                        break;
                      }
                      offset++;
                      if (!isLeadingComment) {
                        break;
                      }
                    } while (isDoubleSlashCommentLine(offset));
                  } else {
                    offset = Math.min(length, findEndOfLine(offset) + 1);
                  }
                  if (isDoc) {
                    setComment(start, offset, isLeadingComment);
                    isLeadingComment = true;
                  }
                  line++;
                  repeat = true;
                }
              } else if ((curr = charAt(offset)) === "*") {
                start = offset + 1;
                isDoc = alternateCommentMode || charAt(start) === "*";
                do {
                  if (curr === "\n") {
                    ++line;
                  }
                  if (++offset === length) {
                    throw illegal("comment");
                  }
                  prev = curr;
                  curr = charAt(offset);
                } while (prev !== "*" || curr !== "/");
                ++offset;
                if (isDoc) {
                  setComment(start, offset - 2, isLeadingComment);
                  isLeadingComment = true;
                }
                repeat = true;
              } else {
                return "/";
              }
            }
          } while (repeat);
          var end = offset;
          delimRe.lastIndex = 0;
          var delim = delimRe.test(charAt(end++));
          if (!delim)
            while (end < length && !delimRe.test(charAt(end)))
              ++end;
          var token = source.substring(offset, offset = end);
          if (token === '"' || token === "'")
            stringDelim = token;
          return token;
        }
        function push(token) {
          stack.push(token);
        }
        function peek() {
          if (!stack.length) {
            var token = next();
            if (token === null)
              return null;
            push(token);
          }
          return stack[0];
        }
        function skip(expected, optional) {
          var actual = peek(), equals = actual === expected;
          if (equals) {
            next();
            return true;
          }
          if (!optional)
            throw illegal("token '" + actual + "', '" + expected + "' expected");
          return false;
        }
        function cmnt(trailingLine) {
          var ret = null;
          var comment;
          if (trailingLine === void 0) {
            comment = comments[line - 1];
            delete comments[line - 1];
            if (comment && (alternateCommentMode || comment.type === "*" || comment.lineEmpty)) {
              ret = comment.leading ? comment.text : null;
            }
          } else {
            if (lastCommentLine < trailingLine) {
              peek();
            }
            comment = comments[trailingLine];
            delete comments[trailingLine];
            if (comment && !comment.lineEmpty && (alternateCommentMode || comment.type === "/")) {
              ret = comment.leading ? null : comment.text;
            }
          }
          return ret;
        }
        return Object.defineProperty({
          next,
          peek,
          push,
          skip,
          cmnt
        }, "line", {
          get: function() {
            return line;
          }
        });
      }
    }
  });

  // node_modules/protobufjs/src/parse.js
  var require_parse = __commonJS({
    "node_modules/protobufjs/src/parse.js"(exports2, module2) {
      "use strict";
      module2.exports = parse;
      parse.filename = null;
      parse.defaults = { keepCase: false };
      var tokenize = require_tokenize();
      var Root = require_root();
      var Type = require_type();
      var Field = require_field();
      var MapField = require_mapfield();
      var OneOf = require_oneof();
      var Enum = require_enum();
      var Service = require_service2();
      var Method = require_method();
      var types = require_types();
      var util = require_util();
      var base10Re = /^[1-9][0-9]*$/;
      var base10NegRe = /^-?[1-9][0-9]*$/;
      var base16Re = /^0[x][0-9a-fA-F]+$/;
      var base16NegRe = /^-?0[x][0-9a-fA-F]+$/;
      var base8Re = /^0[0-7]+$/;
      var base8NegRe = /^-?0[0-7]+$/;
      var numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
      var nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
      var typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
      var fqTypeRefRe = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
      function parse(source, root, options) {
        if (!(root instanceof Root)) {
          options = root;
          root = new Root();
        }
        if (!options)
          options = parse.defaults;
        var preferTrailingComment = options.preferTrailingComment || false;
        var tn = tokenize(source, options.alternateCommentMode || false), next = tn.next, push = tn.push, peek = tn.peek, skip = tn.skip, cmnt = tn.cmnt;
        var head = true, pkg, imports, weakImports, syntax, isProto3 = false;
        var ptr = root;
        var applyCase = options.keepCase ? function(name) {
          return name;
        } : util.camelCase;
        function illegal(token2, name, insideTryCatch) {
          var filename = parse.filename;
          if (!insideTryCatch)
            parse.filename = null;
          return Error("illegal " + (name || "token") + " '" + token2 + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
        }
        function readString() {
          var values = [], token2;
          do {
            if ((token2 = next()) !== '"' && token2 !== "'")
              throw illegal(token2);
            values.push(next());
            skip(token2);
            token2 = peek();
          } while (token2 === '"' || token2 === "'");
          return values.join("");
        }
        function readValue(acceptTypeRef) {
          var token2 = next();
          switch (token2) {
            case "'":
            case '"':
              push(token2);
              return readString();
            case "true":
            case "TRUE":
              return true;
            case "false":
            case "FALSE":
              return false;
          }
          try {
            return parseNumber(
              token2,
              /* insideTryCatch */
              true
            );
          } catch (e2) {
            if (acceptTypeRef && typeRefRe.test(token2))
              return token2;
            throw illegal(token2, "value");
          }
        }
        function readRanges(target, acceptStrings) {
          var token2, start;
          do {
            if (acceptStrings && ((token2 = peek()) === '"' || token2 === "'"))
              target.push(readString());
            else
              target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
          } while (skip(",", true));
          skip(";");
        }
        function parseNumber(token2, insideTryCatch) {
          var sign = 1;
          if (token2.charAt(0) === "-") {
            sign = -1;
            token2 = token2.substring(1);
          }
          switch (token2) {
            case "inf":
            case "INF":
            case "Inf":
              return sign * Infinity;
            case "nan":
            case "NAN":
            case "Nan":
            case "NaN":
              return NaN;
            case "0":
              return 0;
          }
          if (base10Re.test(token2))
            return sign * parseInt(token2, 10);
          if (base16Re.test(token2))
            return sign * parseInt(token2, 16);
          if (base8Re.test(token2))
            return sign * parseInt(token2, 8);
          if (numberRe.test(token2))
            return sign * parseFloat(token2);
          throw illegal(token2, "number", insideTryCatch);
        }
        function parseId(token2, acceptNegative) {
          switch (token2) {
            case "max":
            case "MAX":
            case "Max":
              return 536870911;
            case "0":
              return 0;
          }
          if (!acceptNegative && token2.charAt(0) === "-")
            throw illegal(token2, "id");
          if (base10NegRe.test(token2))
            return parseInt(token2, 10);
          if (base16NegRe.test(token2))
            return parseInt(token2, 16);
          if (base8NegRe.test(token2))
            return parseInt(token2, 8);
          throw illegal(token2, "id");
        }
        function parsePackage() {
          if (pkg !== void 0)
            throw illegal("package");
          pkg = next();
          if (!typeRefRe.test(pkg))
            throw illegal(pkg, "name");
          ptr = ptr.define(pkg);
          skip(";");
        }
        function parseImport() {
          var token2 = peek();
          var whichImports;
          switch (token2) {
            case "weak":
              whichImports = weakImports || (weakImports = []);
              next();
              break;
            case "public":
              next();
            default:
              whichImports = imports || (imports = []);
              break;
          }
          token2 = readString();
          skip(";");
          whichImports.push(token2);
        }
        function parseSyntax() {
          skip("=");
          syntax = readString();
          isProto3 = syntax === "proto3";
          if (!isProto3 && syntax !== "proto2")
            throw illegal(syntax, "syntax");
          skip(";");
        }
        function parseCommon(parent, token2) {
          switch (token2) {
            case "option":
              parseOption(parent, token2);
              skip(";");
              return true;
            case "message":
              parseType(parent, token2);
              return true;
            case "enum":
              parseEnum(parent, token2);
              return true;
            case "service":
              parseService(parent, token2);
              return true;
            case "extend":
              parseExtension(parent, token2);
              return true;
          }
          return false;
        }
        function ifBlock(obj, fnIf, fnElse) {
          var trailingLine = tn.line;
          if (obj) {
            if (typeof obj.comment !== "string") {
              obj.comment = cmnt();
            }
            obj.filename = parse.filename;
          }
          if (skip("{", true)) {
            var token2;
            while ((token2 = next()) !== "}")
              fnIf(token2);
            skip(";", true);
          } else {
            if (fnElse)
              fnElse();
            skip(";");
            if (obj && (typeof obj.comment !== "string" || preferTrailingComment))
              obj.comment = cmnt(trailingLine) || obj.comment;
          }
        }
        function parseType(parent, token2) {
          if (!nameRe.test(token2 = next()))
            throw illegal(token2, "type name");
          var type = new Type(token2);
          ifBlock(type, function parseType_block(token3) {
            if (parseCommon(type, token3))
              return;
            switch (token3) {
              case "map":
                parseMapField(type, token3);
                break;
              case "required":
              case "repeated":
                parseField(type, token3);
                break;
              case "optional":
                if (isProto3) {
                  parseField(type, "proto3_optional");
                } else {
                  parseField(type, "optional");
                }
                break;
              case "oneof":
                parseOneOf(type, token3);
                break;
              case "extensions":
                readRanges(type.extensions || (type.extensions = []));
                break;
              case "reserved":
                readRanges(type.reserved || (type.reserved = []), true);
                break;
              default:
                if (!isProto3 || !typeRefRe.test(token3))
                  throw illegal(token3);
                push(token3);
                parseField(type, "optional");
                break;
            }
          });
          parent.add(type);
        }
        function parseField(parent, rule, extend) {
          var type = next();
          if (type === "group") {
            parseGroup(parent, rule);
            return;
          }
          while (type.endsWith(".") || peek().startsWith(".")) {
            type += next();
          }
          if (!typeRefRe.test(type))
            throw illegal(type, "type");
          var name = next();
          if (!nameRe.test(name))
            throw illegal(name, "name");
          name = applyCase(name);
          skip("=");
          var field = new Field(name, parseId(next()), type, rule, extend);
          ifBlock(field, function parseField_block(token2) {
            if (token2 === "option") {
              parseOption(field, token2);
              skip(";");
            } else
              throw illegal(token2);
          }, function parseField_line() {
            parseInlineOptions(field);
          });
          if (rule === "proto3_optional") {
            var oneof = new OneOf("_" + name);
            field.setOption("proto3_optional", true);
            oneof.add(field);
            parent.add(oneof);
          } else {
            parent.add(field);
          }
          if (!isProto3 && field.repeated && (types.packed[type] !== void 0 || types.basic[type] === void 0))
            field.setOption(
              "packed",
              false,
              /* ifNotSet */
              true
            );
        }
        function parseGroup(parent, rule) {
          var name = next();
          if (!nameRe.test(name))
            throw illegal(name, "name");
          var fieldName = util.lcFirst(name);
          if (name === fieldName)
            name = util.ucFirst(name);
          skip("=");
          var id = parseId(next());
          var type = new Type(name);
          type.group = true;
          var field = new Field(fieldName, id, name, rule);
          field.filename = parse.filename;
          ifBlock(type, function parseGroup_block(token2) {
            switch (token2) {
              case "option":
                parseOption(type, token2);
                skip(";");
                break;
              case "required":
              case "repeated":
                parseField(type, token2);
                break;
              case "optional":
                if (isProto3) {
                  parseField(type, "proto3_optional");
                } else {
                  parseField(type, "optional");
                }
                break;
              case "message":
                parseType(type, token2);
                break;
              case "enum":
                parseEnum(type, token2);
                break;
              default:
                throw illegal(token2);
            }
          });
          parent.add(type).add(field);
        }
        function parseMapField(parent) {
          skip("<");
          var keyType = next();
          if (types.mapKey[keyType] === void 0)
            throw illegal(keyType, "type");
          skip(",");
          var valueType = next();
          if (!typeRefRe.test(valueType))
            throw illegal(valueType, "type");
          skip(">");
          var name = next();
          if (!nameRe.test(name))
            throw illegal(name, "name");
          skip("=");
          var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
          ifBlock(field, function parseMapField_block(token2) {
            if (token2 === "option") {
              parseOption(field, token2);
              skip(";");
            } else
              throw illegal(token2);
          }, function parseMapField_line() {
            parseInlineOptions(field);
          });
          parent.add(field);
        }
        function parseOneOf(parent, token2) {
          if (!nameRe.test(token2 = next()))
            throw illegal(token2, "name");
          var oneof = new OneOf(applyCase(token2));
          ifBlock(oneof, function parseOneOf_block(token3) {
            if (token3 === "option") {
              parseOption(oneof, token3);
              skip(";");
            } else {
              push(token3);
              parseField(oneof, "optional");
            }
          });
          parent.add(oneof);
        }
        function parseEnum(parent, token2) {
          if (!nameRe.test(token2 = next()))
            throw illegal(token2, "name");
          var enm = new Enum(token2);
          ifBlock(enm, function parseEnum_block(token3) {
            switch (token3) {
              case "option":
                parseOption(enm, token3);
                skip(";");
                break;
              case "reserved":
                readRanges(enm.reserved || (enm.reserved = []), true);
                break;
              default:
                parseEnumValue(enm, token3);
            }
          });
          parent.add(enm);
        }
        function parseEnumValue(parent, token2) {
          if (!nameRe.test(token2))
            throw illegal(token2, "name");
          skip("=");
          var value = parseId(next(), true), dummy = {
            options: void 0
          };
          dummy.setOption = function(name, value2) {
            if (this.options === void 0)
              this.options = {};
            this.options[name] = value2;
          };
          ifBlock(dummy, function parseEnumValue_block(token3) {
            if (token3 === "option") {
              parseOption(dummy, token3);
              skip(";");
            } else
              throw illegal(token3);
          }, function parseEnumValue_line() {
            parseInlineOptions(dummy);
          });
          parent.add(token2, value, dummy.comment, dummy.options);
        }
        function parseOption(parent, token2) {
          var isCustom = skip("(", true);
          if (!typeRefRe.test(token2 = next()))
            throw illegal(token2, "name");
          var name = token2;
          var option = name;
          var propName;
          if (isCustom) {
            skip(")");
            name = "(" + name + ")";
            option = name;
            token2 = peek();
            if (fqTypeRefRe.test(token2)) {
              propName = token2.slice(1);
              name += token2;
              next();
            }
          }
          skip("=");
          var optionValue = parseOptionValue(parent, name);
          setParsedOption(parent, option, optionValue, propName);
        }
        function parseOptionValue(parent, name) {
          if (skip("{", true)) {
            var objectResult = {};
            while (!skip("}", true)) {
              if (!nameRe.test(token = next())) {
                throw illegal(token, "name");
              }
              var value;
              var propName = token;
              skip(":", true);
              if (peek() === "{")
                value = parseOptionValue(parent, name + "." + token);
              else if (peek() === "[") {
                value = [];
                var lastValue;
                if (skip("[", true)) {
                  do {
                    lastValue = readValue(true);
                    value.push(lastValue);
                  } while (skip(",", true));
                  skip("]");
                  if (typeof lastValue !== "undefined") {
                    setOption(parent, name + "." + token, lastValue);
                  }
                }
              } else {
                value = readValue(true);
                setOption(parent, name + "." + token, value);
              }
              var prevValue = objectResult[propName];
              if (prevValue)
                value = [].concat(prevValue).concat(value);
              objectResult[propName] = value;
              skip(",", true);
              skip(";", true);
            }
            return objectResult;
          }
          var simpleValue = readValue(true);
          setOption(parent, name, simpleValue);
          return simpleValue;
        }
        function setOption(parent, name, value) {
          if (parent.setOption)
            parent.setOption(name, value);
        }
        function setParsedOption(parent, name, value, propName) {
          if (parent.setParsedOption)
            parent.setParsedOption(name, value, propName);
        }
        function parseInlineOptions(parent) {
          if (skip("[", true)) {
            do {
              parseOption(parent, "option");
            } while (skip(",", true));
            skip("]");
          }
          return parent;
        }
        function parseService(parent, token2) {
          if (!nameRe.test(token2 = next()))
            throw illegal(token2, "service name");
          var service = new Service(token2);
          ifBlock(service, function parseService_block(token3) {
            if (parseCommon(service, token3))
              return;
            if (token3 === "rpc")
              parseMethod(service, token3);
            else
              throw illegal(token3);
          });
          parent.add(service);
        }
        function parseMethod(parent, token2) {
          var commentText = cmnt();
          var type = token2;
          if (!nameRe.test(token2 = next()))
            throw illegal(token2, "name");
          var name = token2, requestType, requestStream, responseType, responseStream;
          skip("(");
          if (skip("stream", true))
            requestStream = true;
          if (!typeRefRe.test(token2 = next()))
            throw illegal(token2);
          requestType = token2;
          skip(")");
          skip("returns");
          skip("(");
          if (skip("stream", true))
            responseStream = true;
          if (!typeRefRe.test(token2 = next()))
            throw illegal(token2);
          responseType = token2;
          skip(")");
          var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
          method.comment = commentText;
          ifBlock(method, function parseMethod_block(token3) {
            if (token3 === "option") {
              parseOption(method, token3);
              skip(";");
            } else
              throw illegal(token3);
          });
          parent.add(method);
        }
        function parseExtension(parent, token2) {
          if (!typeRefRe.test(token2 = next()))
            throw illegal(token2, "reference");
          var reference = token2;
          ifBlock(null, function parseExtension_block(token3) {
            switch (token3) {
              case "required":
              case "repeated":
                parseField(parent, token3, reference);
                break;
              case "optional":
                if (isProto3) {
                  parseField(parent, "proto3_optional", reference);
                } else {
                  parseField(parent, "optional", reference);
                }
                break;
              default:
                if (!isProto3 || !typeRefRe.test(token3))
                  throw illegal(token3);
                push(token3);
                parseField(parent, "optional", reference);
                break;
            }
          });
        }
        var token;
        while ((token = next()) !== null) {
          switch (token) {
            case "package":
              if (!head)
                throw illegal(token);
              parsePackage();
              break;
            case "import":
              if (!head)
                throw illegal(token);
              parseImport();
              break;
            case "syntax":
              if (!head)
                throw illegal(token);
              parseSyntax();
              break;
            case "option":
              parseOption(ptr, token);
              skip(";");
              break;
            default:
              if (parseCommon(ptr, token)) {
                head = false;
                continue;
              }
              throw illegal(token);
          }
        }
        parse.filename = null;
        return {
          "package": pkg,
          "imports": imports,
          weakImports,
          syntax,
          root
        };
      }
    }
  });

  // node_modules/protobufjs/src/common.js
  var require_common = __commonJS({
    "node_modules/protobufjs/src/common.js"(exports2, module2) {
      "use strict";
      module2.exports = common;
      var commonRe = /\/|\./;
      function common(name, json) {
        if (!commonRe.test(name)) {
          name = "google/protobuf/" + name + ".proto";
          json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
        }
        common[name] = json;
      }
      common("any", {
        /**
         * Properties of a google.protobuf.Any message.
         * @interface IAny
         * @type {Object}
         * @property {string} [typeUrl]
         * @property {Uint8Array} [bytes]
         * @memberof common
         */
        Any: {
          fields: {
            type_url: {
              type: "string",
              id: 1
            },
            value: {
              type: "bytes",
              id: 2
            }
          }
        }
      });
      var timeType;
      common("duration", {
        /**
         * Properties of a google.protobuf.Duration message.
         * @interface IDuration
         * @type {Object}
         * @property {number|Long} [seconds]
         * @property {number} [nanos]
         * @memberof common
         */
        Duration: timeType = {
          fields: {
            seconds: {
              type: "int64",
              id: 1
            },
            nanos: {
              type: "int32",
              id: 2
            }
          }
        }
      });
      common("timestamp", {
        /**
         * Properties of a google.protobuf.Timestamp message.
         * @interface ITimestamp
         * @type {Object}
         * @property {number|Long} [seconds]
         * @property {number} [nanos]
         * @memberof common
         */
        Timestamp: timeType
      });
      common("empty", {
        /**
         * Properties of a google.protobuf.Empty message.
         * @interface IEmpty
         * @memberof common
         */
        Empty: {
          fields: {}
        }
      });
      common("struct", {
        /**
         * Properties of a google.protobuf.Struct message.
         * @interface IStruct
         * @type {Object}
         * @property {Object.<string,IValue>} [fields]
         * @memberof common
         */
        Struct: {
          fields: {
            fields: {
              keyType: "string",
              type: "Value",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.Value message.
         * @interface IValue
         * @type {Object}
         * @property {string} [kind]
         * @property {0} [nullValue]
         * @property {number} [numberValue]
         * @property {string} [stringValue]
         * @property {boolean} [boolValue]
         * @property {IStruct} [structValue]
         * @property {IListValue} [listValue]
         * @memberof common
         */
        Value: {
          oneofs: {
            kind: {
              oneof: [
                "nullValue",
                "numberValue",
                "stringValue",
                "boolValue",
                "structValue",
                "listValue"
              ]
            }
          },
          fields: {
            nullValue: {
              type: "NullValue",
              id: 1
            },
            numberValue: {
              type: "double",
              id: 2
            },
            stringValue: {
              type: "string",
              id: 3
            },
            boolValue: {
              type: "bool",
              id: 4
            },
            structValue: {
              type: "Struct",
              id: 5
            },
            listValue: {
              type: "ListValue",
              id: 6
            }
          }
        },
        NullValue: {
          values: {
            NULL_VALUE: 0
          }
        },
        /**
         * Properties of a google.protobuf.ListValue message.
         * @interface IListValue
         * @type {Object}
         * @property {Array.<IValue>} [values]
         * @memberof common
         */
        ListValue: {
          fields: {
            values: {
              rule: "repeated",
              type: "Value",
              id: 1
            }
          }
        }
      });
      common("wrappers", {
        /**
         * Properties of a google.protobuf.DoubleValue message.
         * @interface IDoubleValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        DoubleValue: {
          fields: {
            value: {
              type: "double",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.FloatValue message.
         * @interface IFloatValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        FloatValue: {
          fields: {
            value: {
              type: "float",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.Int64Value message.
         * @interface IInt64Value
         * @type {Object}
         * @property {number|Long} [value]
         * @memberof common
         */
        Int64Value: {
          fields: {
            value: {
              type: "int64",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.UInt64Value message.
         * @interface IUInt64Value
         * @type {Object}
         * @property {number|Long} [value]
         * @memberof common
         */
        UInt64Value: {
          fields: {
            value: {
              type: "uint64",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.Int32Value message.
         * @interface IInt32Value
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        Int32Value: {
          fields: {
            value: {
              type: "int32",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.UInt32Value message.
         * @interface IUInt32Value
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        UInt32Value: {
          fields: {
            value: {
              type: "uint32",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.BoolValue message.
         * @interface IBoolValue
         * @type {Object}
         * @property {boolean} [value]
         * @memberof common
         */
        BoolValue: {
          fields: {
            value: {
              type: "bool",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.StringValue message.
         * @interface IStringValue
         * @type {Object}
         * @property {string} [value]
         * @memberof common
         */
        StringValue: {
          fields: {
            value: {
              type: "string",
              id: 1
            }
          }
        },
        /**
         * Properties of a google.protobuf.BytesValue message.
         * @interface IBytesValue
         * @type {Object}
         * @property {Uint8Array} [value]
         * @memberof common
         */
        BytesValue: {
          fields: {
            value: {
              type: "bytes",
              id: 1
            }
          }
        }
      });
      common("field_mask", {
        /**
         * Properties of a google.protobuf.FieldMask message.
         * @interface IDoubleValue
         * @type {Object}
         * @property {number} [value]
         * @memberof common
         */
        FieldMask: {
          fields: {
            paths: {
              rule: "repeated",
              type: "string",
              id: 1
            }
          }
        }
      });
      common.get = function get(file) {
        return common[file] || null;
      };
    }
  });

  // node_modules/protobufjs/src/index.js
  var require_src = __commonJS({
    "node_modules/protobufjs/src/index.js"(exports2, module2) {
      "use strict";
      var protobuf2 = module2.exports = require_index_light();
      protobuf2.build = "full";
      protobuf2.tokenize = require_tokenize();
      protobuf2.parse = require_parse();
      protobuf2.common = require_common();
      protobuf2.Root._configure(protobuf2.Type, protobuf2.parse, protobuf2.common);
    }
  });

  // node_modules/protobufjs/index.js
  var require_protobufjs = __commonJS({
    "node_modules/protobufjs/index.js"(exports2, module2) {
      "use strict";
      module2.exports = require_src();
    }
  });

  // node_modules/moment/moment.js
  var require_moment = __commonJS({
    "node_modules/moment/moment.js"(exports2, module2) {
      (function(global2, factory) {
        typeof exports2 === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global2.moment = factory();
      })(exports2, function() {
        "use strict";
        var hookCallback;
        function hooks() {
          return hookCallback.apply(null, arguments);
        }
        function setHookCallback(callback) {
          hookCallback = callback;
        }
        function isArray(input) {
          return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
        }
        function isObject(input) {
          return input != null && Object.prototype.toString.call(input) === "[object Object]";
        }
        function hasOwnProp(a2, b2) {
          return Object.prototype.hasOwnProperty.call(a2, b2);
        }
        function isObjectEmpty(obj) {
          if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
          } else {
            var k;
            for (k in obj) {
              if (hasOwnProp(obj, k)) {
                return false;
              }
            }
            return true;
          }
        }
        function isUndefined(input) {
          return input === void 0;
        }
        function isNumber(input) {
          return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
        }
        function isDate(input) {
          return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
        }
        function map(arr, fn) {
          var res = [], i, arrLen = arr.length;
          for (i = 0; i < arrLen; ++i) {
            res.push(fn(arr[i], i));
          }
          return res;
        }
        function extend(a2, b2) {
          for (var i in b2) {
            if (hasOwnProp(b2, i)) {
              a2[i] = b2[i];
            }
          }
          if (hasOwnProp(b2, "toString")) {
            a2.toString = b2.toString;
          }
          if (hasOwnProp(b2, "valueOf")) {
            a2.valueOf = b2.valueOf;
          }
          return a2;
        }
        function createUTC(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, true).utc();
        }
        function defaultParsingFlags() {
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
          };
        }
        function getParsingFlags(m) {
          if (m._pf == null) {
            m._pf = defaultParsingFlags();
          }
          return m._pf;
        }
        var some;
        if (Array.prototype.some) {
          some = Array.prototype.some;
        } else {
          some = function(fun) {
            var t = Object(this), len = t.length >>> 0, i;
            for (i = 0; i < len; i++) {
              if (i in t && fun.call(this, t[i], i, t)) {
                return true;
              }
            }
            return false;
          };
        }
        function isValid(m) {
          if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
              return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) {
              isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
            }
            if (Object.isFrozen == null || !Object.isFrozen(m)) {
              m._isValid = isNowValid;
            } else {
              return isNowValid;
            }
          }
          return m._isValid;
        }
        function createInvalid(flags) {
          var m = createUTC(NaN);
          if (flags != null) {
            extend(getParsingFlags(m), flags);
          } else {
            getParsingFlags(m).userInvalidated = true;
          }
          return m;
        }
        var momentProperties = hooks.momentProperties = [], updateInProgress = false;
        function copyConfig(to2, from2) {
          var i, prop, val, momentPropertiesLen = momentProperties.length;
          if (!isUndefined(from2._isAMomentObject)) {
            to2._isAMomentObject = from2._isAMomentObject;
          }
          if (!isUndefined(from2._i)) {
            to2._i = from2._i;
          }
          if (!isUndefined(from2._f)) {
            to2._f = from2._f;
          }
          if (!isUndefined(from2._l)) {
            to2._l = from2._l;
          }
          if (!isUndefined(from2._strict)) {
            to2._strict = from2._strict;
          }
          if (!isUndefined(from2._tzm)) {
            to2._tzm = from2._tzm;
          }
          if (!isUndefined(from2._isUTC)) {
            to2._isUTC = from2._isUTC;
          }
          if (!isUndefined(from2._offset)) {
            to2._offset = from2._offset;
          }
          if (!isUndefined(from2._pf)) {
            to2._pf = getParsingFlags(from2);
          }
          if (!isUndefined(from2._locale)) {
            to2._locale = from2._locale;
          }
          if (momentPropertiesLen > 0) {
            for (i = 0; i < momentPropertiesLen; i++) {
              prop = momentProperties[i];
              val = from2[prop];
              if (!isUndefined(val)) {
                to2[prop] = val;
              }
            }
          }
          return to2;
        }
        function Moment(config) {
          copyConfig(this, config);
          this._d = new Date(config._d != null ? config._d.getTime() : NaN);
          if (!this.isValid()) {
            this._d = /* @__PURE__ */ new Date(NaN);
          }
          if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
          }
        }
        function isMoment(obj) {
          return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
        }
        function warn(msg) {
          if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
            console.warn("Deprecation warning: " + msg);
          }
        }
        function deprecate(msg, fn) {
          var firstTime = true;
          return extend(function() {
            if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
              var args = [], arg, i, key, argLen = arguments.length;
              for (i = 0; i < argLen; i++) {
                arg = "";
                if (typeof arguments[i] === "object") {
                  arg += "\n[" + i + "] ";
                  for (key in arguments[0]) {
                    if (hasOwnProp(arguments[0], key)) {
                      arg += key + ": " + arguments[0][key] + ", ";
                    }
                  }
                  arg = arg.slice(0, -2);
                } else {
                  arg = arguments[i];
                }
                args.push(arg);
              }
              warn(
                msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
              );
              firstTime = false;
            }
            return fn.apply(this, arguments);
          }, fn);
        }
        var deprecations = {};
        function deprecateSimple(name, msg) {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
          }
          if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
          }
        }
        hooks.suppressDeprecationWarnings = false;
        hooks.deprecationHandler = null;
        function isFunction(input) {
          return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
        }
        function set(config) {
          var prop, i;
          for (i in config) {
            if (hasOwnProp(config, i)) {
              prop = config[i];
              if (isFunction(prop)) {
                this[i] = prop;
              } else {
                this["_" + i] = prop;
              }
            }
          }
          this._config = config;
          this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
          );
        }
        function mergeConfigs(parentConfig, childConfig) {
          var res = extend({}, parentConfig), prop;
          for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
              if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
              } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
              } else {
                delete res[prop];
              }
            }
          }
          for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
              res[prop] = extend({}, res[prop]);
            }
          }
          return res;
        }
        function Locale(config) {
          if (config != null) {
            this.set(config);
          }
        }
        var keys;
        if (Object.keys) {
          keys = Object.keys;
        } else {
          keys = function(obj) {
            var i, res = [];
            for (i in obj) {
              if (hasOwnProp(obj, i)) {
                res.push(i);
              }
            }
            return res;
          };
        }
        var defaultCalendar = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        };
        function calendar(key, mom, now2) {
          var output = this._calendar[key] || this._calendar["sameElse"];
          return isFunction(output) ? output.call(mom, now2) : output;
        }
        function zeroFill(number, targetLength, forceSign) {
          var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
          return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
        }
        var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
        function addFormatToken(token2, padded, ordinal2, callback) {
          var func = callback;
          if (typeof callback === "string") {
            func = function() {
              return this[callback]();
            };
          }
          if (token2) {
            formatTokenFunctions[token2] = func;
          }
          if (padded) {
            formatTokenFunctions[padded[0]] = function() {
              return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
          }
          if (ordinal2) {
            formatTokenFunctions[ordinal2] = function() {
              return this.localeData().ordinal(
                func.apply(this, arguments),
                token2
              );
            };
          }
        }
        function removeFormattingTokens(input) {
          if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
          }
          return input.replace(/\\/g, "");
        }
        function makeFormatFunction(format2) {
          var array = format2.match(formattingTokens), i, length;
          for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
              array[i] = formatTokenFunctions[array[i]];
            } else {
              array[i] = removeFormattingTokens(array[i]);
            }
          }
          return function(mom) {
            var output = "", i2;
            for (i2 = 0; i2 < length; i2++) {
              output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
            }
            return output;
          };
        }
        function formatMoment(m, format2) {
          if (!m.isValid()) {
            return m.localeData().invalidDate();
          }
          format2 = expandFormat(format2, m.localeData());
          formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
          return formatFunctions[format2](m);
        }
        function expandFormat(format2, locale2) {
          var i = 5;
          function replaceLongDateFormatTokens(input) {
            return locale2.longDateFormat(input) || input;
          }
          localFormattingTokens.lastIndex = 0;
          while (i >= 0 && localFormattingTokens.test(format2)) {
            format2 = format2.replace(
              localFormattingTokens,
              replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
          }
          return format2;
        }
        var defaultLongDateFormat = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        function longDateFormat(key) {
          var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
          if (format2 || !formatUpper) {
            return format2;
          }
          this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
              return tok.slice(1);
            }
            return tok;
          }).join("");
          return this._longDateFormat[key];
        }
        var defaultInvalidDate = "Invalid date";
        function invalidDate() {
          return this._invalidDate;
        }
        var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
        function ordinal(number) {
          return this._ordinal.replace("%d", number);
        }
        var defaultRelativeTime = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        function relativeTime(number, withoutSuffix, string, isFuture) {
          var output = this._relativeTime[string];
          return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
        }
        function pastFuture(diff2, output) {
          var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
          return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
        }
        var aliases = {};
        function addUnitAlias(unit, shorthand) {
          var lowerCase = unit.toLowerCase();
          aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
        }
        function normalizeUnits(units) {
          return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
        }
        function normalizeObjectUnits(inputObject) {
          var normalizedInput = {}, normalizedProp, prop;
          for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
              normalizedProp = normalizeUnits(prop);
              if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
              }
            }
          }
          return normalizedInput;
        }
        var priorities = {};
        function addUnitPriority(unit, priority) {
          priorities[unit] = priority;
        }
        function getPrioritizedUnits(unitsObj) {
          var units = [], u;
          for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
              units.push({ unit: u, priority: priorities[u] });
            }
          }
          units.sort(function(a2, b2) {
            return a2.priority - b2.priority;
          });
          return units;
        }
        function isLeapYear(year) {
          return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        }
        function absFloor(number) {
          if (number < 0) {
            return Math.ceil(number) || 0;
          } else {
            return Math.floor(number);
          }
        }
        function toInt(argumentForCoercion) {
          var coercedNumber = +argumentForCoercion, value = 0;
          if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
          }
          return value;
        }
        function makeGetSet(unit, keepTime) {
          return function(value) {
            if (value != null) {
              set$1(this, unit, value);
              hooks.updateOffset(this, keepTime);
              return this;
            } else {
              return get(this, unit);
            }
          };
        }
        function get(mom, unit) {
          return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
        }
        function set$1(mom, unit, value) {
          if (mom.isValid() && !isNaN(value)) {
            if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
              value = toInt(value);
              mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](
                value,
                mom.month(),
                daysInMonth(value, mom.month())
              );
            } else {
              mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
            }
          }
        }
        function stringGet(units) {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units]();
          }
          return this;
        }
        function stringSet(units, value) {
          if (typeof units === "object") {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
            for (i = 0; i < prioritizedLen; i++) {
              this[prioritized[i].unit](units[prioritized[i].unit]);
            }
          } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
              return this[units](value);
            }
          }
          return this;
        }
        var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
        regexes = {};
        function addRegexToken(token2, regex, strictRegex) {
          regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
            return isStrict && strictRegex ? strictRegex : regex;
          };
        }
        function getParseRegexForToken(token2, config) {
          if (!hasOwnProp(regexes, token2)) {
            return new RegExp(unescapeFormat(token2));
          }
          return regexes[token2](config._strict, config._locale);
        }
        function unescapeFormat(s) {
          return regexEscape(
            s.replace("\\", "").replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function(matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4;
              }
            )
          );
        }
        function regexEscape(s) {
          return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        var tokens = {};
        function addParseToken(token2, callback) {
          var i, func = callback, tokenLen;
          if (typeof token2 === "string") {
            token2 = [token2];
          }
          if (isNumber(callback)) {
            func = function(input, array) {
              array[callback] = toInt(input);
            };
          }
          tokenLen = token2.length;
          for (i = 0; i < tokenLen; i++) {
            tokens[token2[i]] = func;
          }
        }
        function addWeekParseToken(token2, callback) {
          addParseToken(token2, function(input, array, config, token3) {
            config._w = config._w || {};
            callback(input, config._w, config, token3);
          });
        }
        function addTimeToArrayFromToken(token2, input, config) {
          if (input != null && hasOwnProp(tokens, token2)) {
            tokens[token2](input, config._a, config, token2);
          }
        }
        var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
        function mod2(n, x) {
          return (n % x + x) % x;
        }
        var indexOf;
        if (Array.prototype.indexOf) {
          indexOf = Array.prototype.indexOf;
        } else {
          indexOf = function(o) {
            var i;
            for (i = 0; i < this.length; ++i) {
              if (this[i] === o) {
                return i;
              }
            }
            return -1;
          };
        }
        function daysInMonth(year, month) {
          if (isNaN(year) || isNaN(month)) {
            return NaN;
          }
          var modMonth = mod2(month, 12);
          year += (month - modMonth) / 12;
          return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
        }
        addFormatToken("M", ["MM", 2], "Mo", function() {
          return this.month() + 1;
        });
        addFormatToken("MMM", 0, 0, function(format2) {
          return this.localeData().monthsShort(this, format2);
        });
        addFormatToken("MMMM", 0, 0, function(format2) {
          return this.localeData().months(this, format2);
        });
        addUnitAlias("month", "M");
        addUnitPriority("month", 8);
        addRegexToken("M", match1to2);
        addRegexToken("MM", match1to2, match2);
        addRegexToken("MMM", function(isStrict, locale2) {
          return locale2.monthsShortRegex(isStrict);
        });
        addRegexToken("MMMM", function(isStrict, locale2) {
          return locale2.monthsRegex(isStrict);
        });
        addParseToken(["M", "MM"], function(input, array) {
          array[MONTH] = toInt(input) - 1;
        });
        addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
          var month = config._locale.monthsParse(input, token2, config._strict);
          if (month != null) {
            array[MONTH] = month;
          } else {
            getParsingFlags(config).invalidMonth = input;
          }
        });
        var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
        function localeMonths(m, format2) {
          if (!m) {
            return isArray(this._months) ? this._months : this._months["standalone"];
          }
          return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
        }
        function localeMonthsShort(m, format2) {
          if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
          }
          return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
        }
        function handleStrictParse(monthName, format2, strict) {
          var i, ii, mom, llc = monthName.toLocaleLowerCase();
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
              mom = createUTC([2e3, i]);
              this._shortMonthsParse[i] = this.monthsShort(
                mom,
                ""
              ).toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "MMM") {
              ii = indexOf.call(this._shortMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._longMonthsParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._longMonthsParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortMonthsParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeMonthsParse(monthName, format2, strict) {
          var i, mom, regex;
          if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format2, strict);
          }
          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          }
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            if (strict && !this._longMonthsParse[i]) {
              this._longMonthsParse[i] = new RegExp(
                "^" + this.months(mom, "").replace(".", "") + "$",
                "i"
              );
              this._shortMonthsParse[i] = new RegExp(
                "^" + this.monthsShort(mom, "").replace(".", "") + "$",
                "i"
              );
            }
            if (!strict && !this._monthsParse[i]) {
              regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
              this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
              return i;
            } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
              return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
            }
          }
        }
        function setMonth(mom, value) {
          var dayOfMonth;
          if (!mom.isValid()) {
            return mom;
          }
          if (typeof value === "string") {
            if (/^\d+$/.test(value)) {
              value = toInt(value);
            } else {
              value = mom.localeData().monthsParse(value);
              if (!isNumber(value)) {
                return mom;
              }
            }
          }
          dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
          mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
          return mom;
        }
        function getSetMonth(value) {
          if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
          } else {
            return get(this, "Month");
          }
        }
        function getDaysInMonth() {
          return daysInMonth(this.year(), this.month());
        }
        function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsShortStrictRegex;
            } else {
              return this._monthsShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsShortRegex")) {
              this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
          }
        }
        function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, "_monthsRegex")) {
              computeMonthsParse.call(this);
            }
            if (isStrict) {
              return this._monthsStrictRegex;
            } else {
              return this._monthsRegex;
            }
          } else {
            if (!hasOwnProp(this, "_monthsRegex")) {
              this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
          }
        }
        function computeMonthsParse() {
          function cmpLenRev(a2, b2) {
            return b2.length - a2.length;
          }
          var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
          for (i = 0; i < 12; i++) {
            mom = createUTC([2e3, i]);
            shortPieces.push(this.monthsShort(mom, ""));
            longPieces.push(this.months(mom, ""));
            mixedPieces.push(this.months(mom, ""));
            mixedPieces.push(this.monthsShort(mom, ""));
          }
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
          }
          for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }
          this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp(
            "^(" + longPieces.join("|") + ")",
            "i"
          );
          this._monthsShortStrictRegex = new RegExp(
            "^(" + shortPieces.join("|") + ")",
            "i"
          );
        }
        addFormatToken("Y", 0, 0, function() {
          var y = this.year();
          return y <= 9999 ? zeroFill(y, 4) : "+" + y;
        });
        addFormatToken(0, ["YY", 2], 0, function() {
          return this.year() % 100;
        });
        addFormatToken(0, ["YYYY", 4], 0, "year");
        addFormatToken(0, ["YYYYY", 5], 0, "year");
        addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
        addUnitAlias("year", "y");
        addUnitPriority("year", 1);
        addRegexToken("Y", matchSigned);
        addRegexToken("YY", match1to2, match2);
        addRegexToken("YYYY", match1to4, match4);
        addRegexToken("YYYYY", match1to6, match6);
        addRegexToken("YYYYYY", match1to6, match6);
        addParseToken(["YYYYY", "YYYYYY"], YEAR);
        addParseToken("YYYY", function(input, array) {
          array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
        });
        addParseToken("YY", function(input, array) {
          array[YEAR] = hooks.parseTwoDigitYear(input);
        });
        addParseToken("Y", function(input, array) {
          array[YEAR] = parseInt(input, 10);
        });
        function daysInYear(year) {
          return isLeapYear(year) ? 366 : 365;
        }
        hooks.parseTwoDigitYear = function(input) {
          return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
        };
        var getSetYear = makeGetSet("FullYear", true);
        function getIsLeapYear() {
          return isLeapYear(this.year());
        }
        function createDate(y, m, d2, h, M, s, ms) {
          var date;
          if (y < 100 && y >= 0) {
            date = new Date(y + 400, m, d2, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
              date.setFullYear(y);
            }
          } else {
            date = new Date(y, m, d2, h, M, s, ms);
          }
          return date;
        }
        function createUTCDate(y) {
          var date, args;
          if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
              date.setUTCFullYear(y);
            }
          } else {
            date = new Date(Date.UTC.apply(null, arguments));
          }
          return date;
        }
        function firstWeekOffset(year, dow, doy) {
          var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
          return -fwdlw + fwd - 1;
        }
        function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
          var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
          if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
          } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
          } else {
            resYear = year;
            resDayOfYear = dayOfYear;
          }
          return {
            year: resYear,
            dayOfYear: resDayOfYear
          };
        }
        function weekOfYear(mom, dow, doy) {
          var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
          if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
          } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
          } else {
            resYear = mom.year();
            resWeek = week;
          }
          return {
            week: resWeek,
            year: resYear
          };
        }
        function weeksInYear(year, dow, doy) {
          var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
          return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
        }
        addFormatToken("w", ["ww", 2], "wo", "week");
        addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
        addUnitAlias("week", "w");
        addUnitAlias("isoWeek", "W");
        addUnitPriority("week", 5);
        addUnitPriority("isoWeek", 5);
        addRegexToken("w", match1to2);
        addRegexToken("ww", match1to2, match2);
        addRegexToken("W", match1to2);
        addRegexToken("WW", match1to2, match2);
        addWeekParseToken(
          ["w", "ww", "W", "WW"],
          function(input, week, config, token2) {
            week[token2.substr(0, 1)] = toInt(input);
          }
        );
        function localeWeek(mom) {
          return weekOfYear(mom, this._week.dow, this._week.doy).week;
        }
        var defaultLocaleWeek = {
          dow: 0,
          // Sunday is the first day of the week.
          doy: 6
          // The week that contains Jan 6th is the first week of the year.
        };
        function localeFirstDayOfWeek() {
          return this._week.dow;
        }
        function localeFirstDayOfYear() {
          return this._week.doy;
        }
        function getSetWeek(input) {
          var week = this.localeData().week(this);
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        function getSetISOWeek(input) {
          var week = weekOfYear(this, 1, 4).week;
          return input == null ? week : this.add((input - week) * 7, "d");
        }
        addFormatToken("d", 0, "do", "day");
        addFormatToken("dd", 0, 0, function(format2) {
          return this.localeData().weekdaysMin(this, format2);
        });
        addFormatToken("ddd", 0, 0, function(format2) {
          return this.localeData().weekdaysShort(this, format2);
        });
        addFormatToken("dddd", 0, 0, function(format2) {
          return this.localeData().weekdays(this, format2);
        });
        addFormatToken("e", 0, 0, "weekday");
        addFormatToken("E", 0, 0, "isoWeekday");
        addUnitAlias("day", "d");
        addUnitAlias("weekday", "e");
        addUnitAlias("isoWeekday", "E");
        addUnitPriority("day", 11);
        addUnitPriority("weekday", 11);
        addUnitPriority("isoWeekday", 11);
        addRegexToken("d", match1to2);
        addRegexToken("e", match1to2);
        addRegexToken("E", match1to2);
        addRegexToken("dd", function(isStrict, locale2) {
          return locale2.weekdaysMinRegex(isStrict);
        });
        addRegexToken("ddd", function(isStrict, locale2) {
          return locale2.weekdaysShortRegex(isStrict);
        });
        addRegexToken("dddd", function(isStrict, locale2) {
          return locale2.weekdaysRegex(isStrict);
        });
        addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
          var weekday = config._locale.weekdaysParse(input, token2, config._strict);
          if (weekday != null) {
            week.d = weekday;
          } else {
            getParsingFlags(config).invalidWeekday = input;
          }
        });
        addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
          week[token2] = toInt(input);
        });
        function parseWeekday(input, locale2) {
          if (typeof input !== "string") {
            return input;
          }
          if (!isNaN(input)) {
            return parseInt(input, 10);
          }
          input = locale2.weekdaysParse(input);
          if (typeof input === "number") {
            return input;
          }
          return null;
        }
        function parseIsoWeekday(input, locale2) {
          if (typeof input === "string") {
            return locale2.weekdaysParse(input) % 7 || 7;
          }
          return isNaN(input) ? null : input;
        }
        function shiftWeekdays(ws, n) {
          return ws.slice(n, 7).concat(ws.slice(0, n));
        }
        var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
        function localeWeekdays(m, format2) {
          var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
          return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
        }
        function localeWeekdaysShort(m) {
          return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
        }
        function localeWeekdaysMin(m) {
          return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
        }
        function handleStrictParse$1(weekdayName, format2, strict) {
          var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for (i = 0; i < 7; ++i) {
              mom = createUTC([2e3, 1]).day(i);
              this._minWeekdaysParse[i] = this.weekdaysMin(
                mom,
                ""
              ).toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(
                mom,
                ""
              ).toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
            }
          }
          if (strict) {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format2 === "dddd") {
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else if (format2 === "ddd") {
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._minWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = indexOf.call(this._minWeekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._weekdaysParse, llc);
              if (ii !== -1) {
                return ii;
              }
              ii = indexOf.call(this._shortWeekdaysParse, llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        function localeWeekdaysParse(weekdayName, format2, strict) {
          var i, mom, regex;
          if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format2, strict);
          }
          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp(
                "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
              this._shortWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
              this._minWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
                "i"
              );
            }
            if (!this._weekdaysParse[i]) {
              regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
              this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
            }
            if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
            }
          }
        }
        function getSetDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, "d");
          } else {
            return day;
          }
        }
        function getSetLocaleDayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return input == null ? weekday : this.add(input - weekday, "d");
        }
        function getSetISODayOfWeek(input) {
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
          } else {
            return this.day() || 7;
          }
        }
        function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysStrictRegex;
            } else {
              return this._weekdaysRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
          }
        }
        function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysShortStrictRegex;
            } else {
              return this._weekdaysShortRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysShortRegex")) {
              this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
          }
        }
        function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, "_weekdaysRegex")) {
              computeWeekdaysParse.call(this);
            }
            if (isStrict) {
              return this._weekdaysMinStrictRegex;
            } else {
              return this._weekdaysMinRegex;
            }
          } else {
            if (!hasOwnProp(this, "_weekdaysMinRegex")) {
              this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
          }
        }
        function computeWeekdaysParse() {
          function cmpLenRev(a2, b2) {
            return b2.length - a2.length;
          }
          var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
          for (i = 0; i < 7; i++) {
            mom = createUTC([2e3, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ""));
            shortp = regexEscape(this.weekdaysShort(mom, ""));
            longp = regexEscape(this.weekdays(mom, ""));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
          }
          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);
          this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;
          this._weekdaysStrictRegex = new RegExp(
            "^(" + longPieces.join("|") + ")",
            "i"
          );
          this._weekdaysShortStrictRegex = new RegExp(
            "^(" + shortPieces.join("|") + ")",
            "i"
          );
          this._weekdaysMinStrictRegex = new RegExp(
            "^(" + minPieces.join("|") + ")",
            "i"
          );
        }
        function hFormat() {
          return this.hours() % 12 || 12;
        }
        function kFormat() {
          return this.hours() || 24;
        }
        addFormatToken("H", ["HH", 2], 0, "hour");
        addFormatToken("h", ["hh", 2], 0, hFormat);
        addFormatToken("k", ["kk", 2], 0, kFormat);
        addFormatToken("hmm", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
        });
        addFormatToken("hmmss", 0, 0, function() {
          return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        addFormatToken("Hmm", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2);
        });
        addFormatToken("Hmmss", 0, 0, function() {
          return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
        });
        function meridiem(token2, lowercase) {
          addFormatToken(token2, 0, 0, function() {
            return this.localeData().meridiem(
              this.hours(),
              this.minutes(),
              lowercase
            );
          });
        }
        meridiem("a", true);
        meridiem("A", false);
        addUnitAlias("hour", "h");
        addUnitPriority("hour", 13);
        function matchMeridiem(isStrict, locale2) {
          return locale2._meridiemParse;
        }
        addRegexToken("a", matchMeridiem);
        addRegexToken("A", matchMeridiem);
        addRegexToken("H", match1to2);
        addRegexToken("h", match1to2);
        addRegexToken("k", match1to2);
        addRegexToken("HH", match1to2, match2);
        addRegexToken("hh", match1to2, match2);
        addRegexToken("kk", match1to2, match2);
        addRegexToken("hmm", match3to4);
        addRegexToken("hmmss", match5to6);
        addRegexToken("Hmm", match3to4);
        addRegexToken("Hmmss", match5to6);
        addParseToken(["H", "HH"], HOUR);
        addParseToken(["k", "kk"], function(input, array, config) {
          var kInput = toInt(input);
          array[HOUR] = kInput === 24 ? 0 : kInput;
        });
        addParseToken(["a", "A"], function(input, array, config) {
          config._isPm = config._locale.isPM(input);
          config._meridiem = input;
        });
        addParseToken(["h", "hh"], function(input, array, config) {
          array[HOUR] = toInt(input);
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
          getParsingFlags(config).bigHour = true;
        });
        addParseToken("Hmm", function(input, array, config) {
          var pos = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos));
          array[MINUTE] = toInt(input.substr(pos));
        });
        addParseToken("Hmmss", function(input, array, config) {
          var pos1 = input.length - 4, pos2 = input.length - 2;
          array[HOUR] = toInt(input.substr(0, pos1));
          array[MINUTE] = toInt(input.substr(pos1, 2));
          array[SECOND] = toInt(input.substr(pos2));
        });
        function localeIsPM(input) {
          return (input + "").toLowerCase().charAt(0) === "p";
        }
        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
        function localeMeridiem(hours2, minutes2, isLower) {
          if (hours2 > 11) {
            return isLower ? "pm" : "PM";
          } else {
            return isLower ? "am" : "AM";
          }
        }
        var baseConfig = {
          calendar: defaultCalendar,
          longDateFormat: defaultLongDateFormat,
          invalidDate: defaultInvalidDate,
          ordinal: defaultOrdinal,
          dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
          relativeTime: defaultRelativeTime,
          months: defaultLocaleMonths,
          monthsShort: defaultLocaleMonthsShort,
          week: defaultLocaleWeek,
          weekdays: defaultLocaleWeekdays,
          weekdaysMin: defaultLocaleWeekdaysMin,
          weekdaysShort: defaultLocaleWeekdaysShort,
          meridiemParse: defaultLocaleMeridiemParse
        };
        var locales = {}, localeFamilies = {}, globalLocale;
        function commonPrefix(arr1, arr2) {
          var i, minl = Math.min(arr1.length, arr2.length);
          for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
              return i;
            }
          }
          return minl;
        }
        function normalizeLocale(key) {
          return key ? key.toLowerCase().replace("_", "-") : key;
        }
        function chooseLocale(names) {
          var i = 0, j, next, locale2, split;
          while (i < names.length) {
            split = normalizeLocale(names[i]).split("-");
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split("-") : null;
            while (j > 0) {
              locale2 = loadLocale(split.slice(0, j).join("-"));
              if (locale2) {
                return locale2;
              }
              if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
                break;
              }
              j--;
            }
            i++;
          }
          return globalLocale;
        }
        function isLocaleNameSane(name) {
          return name.match("^[^/\\\\]*$") != null;
        }
        function loadLocale(name) {
          var oldLocale = null, aliasedRequire;
          if (locales[name] === void 0 && typeof module2 !== "undefined" && module2 && module2.exports && isLocaleNameSane(name)) {
            try {
              oldLocale = globalLocale._abbr;
              aliasedRequire = __require;
              aliasedRequire("./locale/" + name);
              getSetGlobalLocale(oldLocale);
            } catch (e2) {
              locales[name] = null;
            }
          }
          return locales[name];
        }
        function getSetGlobalLocale(key, values) {
          var data;
          if (key) {
            if (isUndefined(values)) {
              data = getLocale(key);
            } else {
              data = defineLocale(key, values);
            }
            if (data) {
              globalLocale = data;
            } else {
              if (typeof console !== "undefined" && console.warn) {
                console.warn(
                  "Locale " + key + " not found. Did you forget to load it?"
                );
              }
            }
          }
          return globalLocale._abbr;
        }
        function defineLocale(name, config) {
          if (config !== null) {
            var locale2, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
              deprecateSimple(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              );
              parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
              if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
              } else {
                locale2 = loadLocale(config.parentLocale);
                if (locale2 != null) {
                  parentConfig = locale2._config;
                } else {
                  if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                  }
                  localeFamilies[config.parentLocale].push({
                    name,
                    config
                  });
                  return null;
                }
              }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) {
              localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
              });
            }
            getSetGlobalLocale(name);
            return locales[name];
          } else {
            delete locales[name];
            return null;
          }
        }
        function updateLocale(name, config) {
          if (config != null) {
            var locale2, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) {
              locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
              tmpLocale = loadLocale(name);
              if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
              }
              config = mergeConfigs(parentConfig, config);
              if (tmpLocale == null) {
                config.abbr = name;
              }
              locale2 = new Locale(config);
              locale2.parentLocale = locales[name];
              locales[name] = locale2;
            }
            getSetGlobalLocale(name);
          } else {
            if (locales[name] != null) {
              if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                  getSetGlobalLocale(name);
                }
              } else if (locales[name] != null) {
                delete locales[name];
              }
            }
          }
          return locales[name];
        }
        function getLocale(key) {
          var locale2;
          if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
          }
          if (!key) {
            return globalLocale;
          }
          if (!isArray(key)) {
            locale2 = loadLocale(key);
            if (locale2) {
              return locale2;
            }
            key = [key];
          }
          return chooseLocale(key);
        }
        function listLocales() {
          return keys(locales);
        }
        function checkOverflow(m) {
          var overflow, a2 = m._a;
          if (a2 && getParsingFlags(m).overflow === -2) {
            overflow = a2[MONTH] < 0 || a2[MONTH] > 11 ? MONTH : a2[DATE] < 1 || a2[DATE] > daysInMonth(a2[YEAR], a2[MONTH]) ? DATE : a2[HOUR] < 0 || a2[HOUR] > 24 || a2[HOUR] === 24 && (a2[MINUTE] !== 0 || a2[SECOND] !== 0 || a2[MILLISECOND] !== 0) ? HOUR : a2[MINUTE] < 0 || a2[MINUTE] > 59 ? MINUTE : a2[SECOND] < 0 || a2[SECOND] > 59 ? SECOND : a2[MILLISECOND] < 0 || a2[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
              overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
              overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
              overflow = WEEKDAY;
            }
            getParsingFlags(m).overflow = overflow;
          }
          return m;
        }
        var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, false],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, false],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, false],
          ["YYYY", /\d{4}/, false]
        ], isoTimes = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
          UT: 0,
          GMT: 0,
          EDT: -4 * 60,
          EST: -5 * 60,
          CDT: -5 * 60,
          CST: -6 * 60,
          MDT: -6 * 60,
          MST: -7 * 60,
          PDT: -7 * 60,
          PST: -8 * 60
        };
        function configFromISO(config) {
          var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
          if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDatesLen; i < l; i++) {
              if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
              }
            }
            if (dateFormat == null) {
              config._isValid = false;
              return;
            }
            if (match[3]) {
              for (i = 0, l = isoTimesLen; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                  timeFormat = (match[2] || " ") + isoTimes[i][0];
                  break;
                }
              }
              if (timeFormat == null) {
                config._isValid = false;
                return;
              }
            }
            if (!allowTime && timeFormat != null) {
              config._isValid = false;
              return;
            }
            if (match[4]) {
              if (tzRegex.exec(match[4])) {
                tzFormat = "Z";
              } else {
                config._isValid = false;
                return;
              }
            }
            config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
            configFromStringAndFormat(config);
          } else {
            config._isValid = false;
          }
        }
        function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
          var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
          ];
          if (secondStr) {
            result.push(parseInt(secondStr, 10));
          }
          return result;
        }
        function untruncateYear(yearStr) {
          var year = parseInt(yearStr, 10);
          if (year <= 49) {
            return 2e3 + year;
          } else if (year <= 999) {
            return 1900 + year;
          }
          return year;
        }
        function preprocessRFC2822(s) {
          return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }
        function checkWeekday(weekdayStr, parsedInput, config) {
          if (weekdayStr) {
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
              parsedInput[0],
              parsedInput[1],
              parsedInput[2]
            ).getDay();
            if (weekdayProvided !== weekdayActual) {
              getParsingFlags(config).weekdayMismatch = true;
              config._isValid = false;
              return false;
            }
          }
          return true;
        }
        function calculateOffset(obsOffset, militaryOffset, numOffset) {
          if (obsOffset) {
            return obsOffsets[obsOffset];
          } else if (militaryOffset) {
            return 0;
          } else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
          }
        }
        function configFromRFC2822(config) {
          var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
          if (match) {
            parsedArray = extractFromRFC2822Strings(
              match[4],
              match[3],
              match[2],
              match[5],
              match[6],
              match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
              return;
            }
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
          } else {
            config._isValid = false;
          }
        }
        function configFromString(config) {
          var matched = aspNetJsonRegex.exec(config._i);
          if (matched !== null) {
            config._d = /* @__PURE__ */ new Date(+matched[1]);
            return;
          }
          configFromISO(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          configFromRFC2822(config);
          if (config._isValid === false) {
            delete config._isValid;
          } else {
            return;
          }
          if (config._strict) {
            config._isValid = false;
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        hooks.createFromInputFallback = deprecate(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function(config) {
            config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
          }
        );
        function defaults(a2, b2, c2) {
          if (a2 != null) {
            return a2;
          }
          if (b2 != null) {
            return b2;
          }
          return c2;
        }
        function currentDateArray(config) {
          var nowValue = new Date(hooks.now());
          if (config._useUTC) {
            return [
              nowValue.getUTCFullYear(),
              nowValue.getUTCMonth(),
              nowValue.getUTCDate()
            ];
          }
          return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
        }
        function configFromArray(config) {
          var i, date, input = [], currentDate, expectedWeekday, yearToUse;
          if (config._d) {
            return;
          }
          currentDate = currentDateArray(config);
          if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
          }
          if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
              getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
          }
          for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
          }
          for (; i < 7; i++) {
            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
          }
          if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
          }
          config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
          );
          expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
          if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          }
          if (config._nextDay) {
            config._a[HOUR] = 24;
          }
          if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
          }
        }
        function dayOfYearFromWeekInfo(config) {
          var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
          w = config._w;
          if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            weekYear = defaults(
              w.GG,
              config._a[YEAR],
              weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
              weekdayOverflow = true;
            }
          } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
              weekday = w.d;
              if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
              }
            } else if (w.e != null) {
              weekday = w.e + dow;
              if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
              }
            } else {
              weekday = dow;
            }
          }
          if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
          } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
          } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
          }
        }
        hooks.ISO_8601 = function() {
        };
        hooks.RFC_2822 = function() {
        };
        function configFromStringAndFormat(config) {
          if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
          }
          if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
          }
          config._a = [];
          getParsingFlags(config).empty = true;
          var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
          tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
          tokenLen = tokens2.length;
          for (i = 0; i < tokenLen; i++) {
            token2 = tokens2[i];
            parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
            if (parsedInput) {
              skipped = string.substr(0, string.indexOf(parsedInput));
              if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
              }
              string = string.slice(
                string.indexOf(parsedInput) + parsedInput.length
              );
              totalParsedInputLength += parsedInput.length;
            }
            if (formatTokenFunctions[token2]) {
              if (parsedInput) {
                getParsingFlags(config).empty = false;
              } else {
                getParsingFlags(config).unusedTokens.push(token2);
              }
              addTimeToArrayFromToken(token2, parsedInput, config);
            } else if (config._strict && !parsedInput) {
              getParsingFlags(config).unusedTokens.push(token2);
            }
          }
          getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
          if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
          }
          if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = void 0;
          }
          getParsingFlags(config).parsedDateParts = config._a.slice(0);
          getParsingFlags(config).meridiem = config._meridiem;
          config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
          );
          era = getParsingFlags(config).era;
          if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
          }
          configFromArray(config);
          checkOverflow(config);
        }
        function meridiemFixWrap(locale2, hour, meridiem2) {
          var isPm;
          if (meridiem2 == null) {
            return hour;
          }
          if (locale2.meridiemHour != null) {
            return locale2.meridiemHour(hour, meridiem2);
          } else if (locale2.isPM != null) {
            isPm = locale2.isPM(meridiem2);
            if (isPm && hour < 12) {
              hour += 12;
            }
            if (!isPm && hour === 12) {
              hour = 0;
            }
            return hour;
          } else {
            return hour;
          }
        }
        function configFromStringAndArray(config) {
          var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
          if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = /* @__PURE__ */ new Date(NaN);
            return;
          }
          for (i = 0; i < configfLen; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
              tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) {
              validFormatFound = true;
            }
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
              if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                  bestFormatIsValid = true;
                }
              }
            } else {
              if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
              }
            }
          }
          extend(config, bestMoment || tempConfig);
        }
        function configFromObject(config) {
          if (config._d) {
            return;
          }
          var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
          config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function(obj) {
              return obj && parseInt(obj, 10);
            }
          );
          configFromArray(config);
        }
        function createFromConfig(config) {
          var res = new Moment(checkOverflow(prepareConfig(config)));
          if (res._nextDay) {
            res.add(1, "d");
            res._nextDay = void 0;
          }
          return res;
        }
        function prepareConfig(config) {
          var input = config._i, format2 = config._f;
          config._locale = config._locale || getLocale(config._l);
          if (input === null || format2 === void 0 && input === "") {
            return createInvalid({ nullInput: true });
          }
          if (typeof input === "string") {
            config._i = input = config._locale.preparse(input);
          }
          if (isMoment(input)) {
            return new Moment(checkOverflow(input));
          } else if (isDate(input)) {
            config._d = input;
          } else if (isArray(format2)) {
            configFromStringAndArray(config);
          } else if (format2) {
            configFromStringAndFormat(config);
          } else {
            configFromInput(config);
          }
          if (!isValid(config)) {
            config._d = null;
          }
          return config;
        }
        function configFromInput(config) {
          var input = config._i;
          if (isUndefined(input)) {
            config._d = new Date(hooks.now());
          } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
          } else if (typeof input === "string") {
            configFromString(config);
          } else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
              return parseInt(obj, 10);
            });
            configFromArray(config);
          } else if (isObject(input)) {
            configFromObject(config);
          } else if (isNumber(input)) {
            config._d = new Date(input);
          } else {
            hooks.createFromInputFallback(config);
          }
        }
        function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
          var c2 = {};
          if (format2 === true || format2 === false) {
            strict = format2;
            format2 = void 0;
          }
          if (locale2 === true || locale2 === false) {
            strict = locale2;
            locale2 = void 0;
          }
          if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
            input = void 0;
          }
          c2._isAMomentObject = true;
          c2._useUTC = c2._isUTC = isUTC;
          c2._l = locale2;
          c2._i = input;
          c2._f = format2;
          c2._strict = strict;
          return createFromConfig(c2);
        }
        function createLocal(input, format2, locale2, strict) {
          return createLocalOrUTC(input, format2, locale2, strict, false);
        }
        var prototypeMin = deprecate(
          "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
          function() {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
              return other < this ? this : other;
            } else {
              return createInvalid();
            }
          }
        ), prototypeMax = deprecate(
          "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
          function() {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
              return other > this ? this : other;
            } else {
              return createInvalid();
            }
          }
        );
        function pickBy(fn, moments) {
          var res, i;
          if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
          }
          if (!moments.length) {
            return createLocal();
          }
          res = moments[0];
          for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
              res = moments[i];
            }
          }
          return res;
        }
        function min() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isBefore", args);
        }
        function max() {
          var args = [].slice.call(arguments, 0);
          return pickBy("isAfter", args);
        }
        var now = function() {
          return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
        };
        var ordering = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond"
        ];
        function isDurationValid(m) {
          var key, unitHasDecimal = false, i, orderLen = ordering.length;
          for (key in m) {
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
              return false;
            }
          }
          for (i = 0; i < orderLen; ++i) {
            if (m[ordering[i]]) {
              if (unitHasDecimal) {
                return false;
              }
              if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
              }
            }
          }
          return true;
        }
        function isValid$1() {
          return this._isValid;
        }
        function createInvalid$1() {
          return createDuration(NaN);
        }
        function Duration(duration) {
          var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
          this._isValid = isDurationValid(normalizedInput);
          this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
          minutes2 * 6e4 + // 1000 * 60
          hours2 * 1e3 * 60 * 60;
          this._days = +days2 + weeks2 * 7;
          this._months = +months2 + quarters * 3 + years2 * 12;
          this._data = {};
          this._locale = getLocale();
          this._bubble();
        }
        function isDuration(obj) {
          return obj instanceof Duration;
        }
        function absRound(number) {
          if (number < 0) {
            return Math.round(-1 * number) * -1;
          } else {
            return Math.round(number);
          }
        }
        function compareArrays(array1, array2, dontConvert) {
          var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
          for (i = 0; i < len; i++) {
            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
              diffs++;
            }
          }
          return diffs + lengthDiff;
        }
        function offset(token2, separator) {
          addFormatToken(token2, 0, 0, function() {
            var offset2 = this.utcOffset(), sign2 = "+";
            if (offset2 < 0) {
              offset2 = -offset2;
              sign2 = "-";
            }
            return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
          });
        }
        offset("Z", ":");
        offset("ZZ", "");
        addRegexToken("Z", matchShortOffset);
        addRegexToken("ZZ", matchShortOffset);
        addParseToken(["Z", "ZZ"], function(input, array, config) {
          config._useUTC = true;
          config._tzm = offsetFromString(matchShortOffset, input);
        });
        var chunkOffset = /([\+\-]|\d\d)/gi;
        function offsetFromString(matcher, string) {
          var matches = (string || "").match(matcher), chunk, parts, minutes2;
          if (matches === null) {
            return null;
          }
          chunk = matches[matches.length - 1] || [];
          parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
          minutes2 = +(parts[1] * 60) + toInt(parts[2]);
          return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
        }
        function cloneWithOffset(input, model) {
          var res, diff2;
          if (model._isUTC) {
            res = model.clone();
            diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            res._d.setTime(res._d.valueOf() + diff2);
            hooks.updateOffset(res, false);
            return res;
          } else {
            return createLocal(input).local();
          }
        }
        function getDateOffset(m) {
          return -Math.round(m._d.getTimezoneOffset());
        }
        hooks.updateOffset = function() {
        };
        function getSetOffset(input, keepLocalTime, keepMinutes) {
          var offset2 = this._offset || 0, localAdjust;
          if (!this.isValid()) {
            return input != null ? this : NaN;
          }
          if (input != null) {
            if (typeof input === "string") {
              input = offsetFromString(matchShortOffset, input);
              if (input === null) {
                return this;
              }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
              input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
              localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
              this.add(localAdjust, "m");
            }
            if (offset2 !== input) {
              if (!keepLocalTime || this._changeInProgress) {
                addSubtract(
                  this,
                  createDuration(input - offset2, "m"),
                  1,
                  false
                );
              } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
              }
            }
            return this;
          } else {
            return this._isUTC ? offset2 : getDateOffset(this);
          }
        }
        function getSetZone(input, keepLocalTime) {
          if (input != null) {
            if (typeof input !== "string") {
              input = -input;
            }
            this.utcOffset(input, keepLocalTime);
            return this;
          } else {
            return -this.utcOffset();
          }
        }
        function setOffsetToUTC(keepLocalTime) {
          return this.utcOffset(0, keepLocalTime);
        }
        function setOffsetToLocal(keepLocalTime) {
          if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
              this.subtract(getDateOffset(this), "m");
            }
          }
          return this;
        }
        function setOffsetToParsedOffset() {
          if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
          } else if (typeof this._i === "string") {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
              this.utcOffset(tZone);
            } else {
              this.utcOffset(0, true);
            }
          }
          return this;
        }
        function hasAlignedHourOffset(input) {
          if (!this.isValid()) {
            return false;
          }
          input = input ? createLocal(input).utcOffset() : 0;
          return (this.utcOffset() - input) % 60 === 0;
        }
        function isDaylightSavingTime() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }
        function isDaylightSavingTimeShifted() {
          if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
          }
          var c2 = {}, other;
          copyConfig(c2, this);
          c2 = prepareConfig(c2);
          if (c2._a) {
            other = c2._isUTC ? createUTC(c2._a) : createLocal(c2._a);
            this._isDSTShifted = this.isValid() && compareArrays(c2._a, other.toArray()) > 0;
          } else {
            this._isDSTShifted = false;
          }
          return this._isDSTShifted;
        }
        function isLocal() {
          return this.isValid() ? !this._isUTC : false;
        }
        function isUtcOffset() {
          return this.isValid() ? this._isUTC : false;
        }
        function isUtc() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }
        var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function createDuration(input, key) {
          var duration = input, match = null, sign2, ret, diffRes;
          if (isDuration(input)) {
            duration = {
              ms: input._milliseconds,
              d: input._days,
              M: input._months
            };
          } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
              duration[key] = +input;
            } else {
              duration.milliseconds = +input;
            }
          } else if (match = aspNetRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: 0,
              d: toInt(match[DATE]) * sign2,
              h: toInt(match[HOUR]) * sign2,
              m: toInt(match[MINUTE]) * sign2,
              s: toInt(match[SECOND]) * sign2,
              ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
              // the millisecond decimal point is included in the match
            };
          } else if (match = isoRegex.exec(input)) {
            sign2 = match[1] === "-" ? -1 : 1;
            duration = {
              y: parseIso(match[2], sign2),
              M: parseIso(match[3], sign2),
              w: parseIso(match[4], sign2),
              d: parseIso(match[5], sign2),
              h: parseIso(match[6], sign2),
              m: parseIso(match[7], sign2),
              s: parseIso(match[8], sign2)
            };
          } else if (duration == null) {
            duration = {};
          } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
            diffRes = momentsDifference(
              createLocal(duration.from),
              createLocal(duration.to)
            );
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
          }
          ret = new Duration(duration);
          if (isDuration(input) && hasOwnProp(input, "_locale")) {
            ret._locale = input._locale;
          }
          if (isDuration(input) && hasOwnProp(input, "_isValid")) {
            ret._isValid = input._isValid;
          }
          return ret;
        }
        createDuration.fn = Duration.prototype;
        createDuration.invalid = createInvalid$1;
        function parseIso(inp, sign2) {
          var res = inp && parseFloat(inp.replace(",", "."));
          return (isNaN(res) ? 0 : res) * sign2;
        }
        function positiveMomentsDifference(base, other) {
          var res = {};
          res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
          if (base.clone().add(res.months, "M").isAfter(other)) {
            --res.months;
          }
          res.milliseconds = +other - +base.clone().add(res.months, "M");
          return res;
        }
        function momentsDifference(base, other) {
          var res;
          if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
          }
          other = cloneWithOffset(other, base);
          if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
          } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
          }
          return res;
        }
        function createAdder(direction, name) {
          return function(val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
              deprecateSimple(
                name,
                "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
              );
              tmp = val;
              val = period;
              period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
          };
        }
        function addSubtract(mom, duration, isAdding, updateOffset) {
          var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
          if (!mom.isValid()) {
            return;
          }
          updateOffset = updateOffset == null ? true : updateOffset;
          if (months2) {
            setMonth(mom, get(mom, "Month") + months2 * isAdding);
          }
          if (days2) {
            set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
          }
          if (milliseconds2) {
            mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
          }
          if (updateOffset) {
            hooks.updateOffset(mom, days2 || months2);
          }
        }
        var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
        function isString(input) {
          return typeof input === "string" || input instanceof String;
        }
        function isMomentInput(input) {
          return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
        }
        function isMomentInputObject(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms"
          ], i, property, propertyLen = properties.length;
          for (i = 0; i < propertyLen; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function isNumberOrStringArray(input) {
          var arrayTest = isArray(input), dataTypeTest = false;
          if (arrayTest) {
            dataTypeTest = input.filter(function(item) {
              return !isNumber(item) && isString(input);
            }).length === 0;
          }
          return arrayTest && dataTypeTest;
        }
        function isCalendarSpec(input) {
          var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse"
          ], i, property;
          for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
          }
          return objectTest && propertyTest;
        }
        function getCalendarFormat(myMoment, now2) {
          var diff2 = myMoment.diff(now2, "days", true);
          return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
        }
        function calendar$1(time, formats) {
          if (arguments.length === 1) {
            if (!arguments[0]) {
              time = void 0;
              formats = void 0;
            } else if (isMomentInput(arguments[0])) {
              time = arguments[0];
              formats = void 0;
            } else if (isCalendarSpec(arguments[0])) {
              formats = arguments[0];
              time = void 0;
            }
          }
          var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
          return this.format(
            output || this.localeData().calendar(format2, this, createLocal(now2))
          );
        }
        function clone() {
          return new Moment(this);
        }
        function isAfter(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() > localInput.valueOf();
          } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
          }
        }
        function isBefore(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input);
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() < localInput.valueOf();
          } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
          }
        }
        function isBetween(from2, to2, units, inclusivity) {
          var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
          if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
          }
          inclusivity = inclusivity || "()";
          return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
        }
        function isSame(input, units) {
          var localInput = isMoment(input) ? input : createLocal(input), inputMs;
          if (!(this.isValid() && localInput.isValid())) {
            return false;
          }
          units = normalizeUnits(units) || "millisecond";
          if (units === "millisecond") {
            return this.valueOf() === localInput.valueOf();
          } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
          }
        }
        function isSameOrAfter(input, units) {
          return this.isSame(input, units) || this.isAfter(input, units);
        }
        function isSameOrBefore(input, units) {
          return this.isSame(input, units) || this.isBefore(input, units);
        }
        function diff(input, units, asFloat) {
          var that, zoneDelta, output;
          if (!this.isValid()) {
            return NaN;
          }
          that = cloneWithOffset(input, this);
          if (!that.isValid()) {
            return NaN;
          }
          zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
          units = normalizeUnits(units);
          switch (units) {
            case "year":
              output = monthDiff(this, that) / 12;
              break;
            case "month":
              output = monthDiff(this, that);
              break;
            case "quarter":
              output = monthDiff(this, that) / 3;
              break;
            case "second":
              output = (this - that) / 1e3;
              break;
            case "minute":
              output = (this - that) / 6e4;
              break;
            case "hour":
              output = (this - that) / 36e5;
              break;
            case "day":
              output = (this - that - zoneDelta) / 864e5;
              break;
            case "week":
              output = (this - that - zoneDelta) / 6048e5;
              break;
            default:
              output = this - that;
          }
          return asFloat ? output : absFloor(output);
        }
        function monthDiff(a2, b2) {
          if (a2.date() < b2.date()) {
            return -monthDiff(b2, a2);
          }
          var wholeMonthDiff = (b2.year() - a2.year()) * 12 + (b2.month() - a2.month()), anchor = a2.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
          if (b2 - anchor < 0) {
            anchor2 = a2.clone().add(wholeMonthDiff - 1, "months");
            adjust = (b2 - anchor) / (anchor - anchor2);
          } else {
            anchor2 = a2.clone().add(wholeMonthDiff + 1, "months");
            adjust = (b2 - anchor) / (anchor2 - anchor);
          }
          return -(wholeMonthDiff + adjust) || 0;
        }
        hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        function toString() {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function toISOString(keepOffset) {
          if (!this.isValid()) {
            return null;
          }
          var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
          if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
              m,
              utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
          }
          if (isFunction(Date.prototype.toISOString)) {
            if (utc) {
              return this.toDate().toISOString();
            } else {
              return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
            }
          }
          return formatMoment(
            m,
            utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
        }
        function inspect() {
          if (!this.isValid()) {
            return "moment.invalid(/* " + this._i + " */)";
          }
          var func = "moment", zone = "", prefix, year, datetime, suffix;
          if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
            zone = "Z";
          }
          prefix = "[" + func + '("]';
          year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
          datetime = "-MM-DD[T]HH:mm:ss.SSS";
          suffix = zone + '[")]';
          return this.format(prefix + year + datetime + suffix);
        }
        function format(inputString) {
          if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
          }
          var output = formatMoment(this, inputString);
          return this.localeData().postformat(output);
        }
        function from(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function fromNow(withoutSuffix) {
          return this.from(createLocal(), withoutSuffix);
        }
        function to(time, withoutSuffix) {
          if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
            return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
          } else {
            return this.localeData().invalidDate();
          }
        }
        function toNow(withoutSuffix) {
          return this.to(createLocal(), withoutSuffix);
        }
        function locale(key) {
          var newLocaleData;
          if (key === void 0) {
            return this._locale._abbr;
          } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
              this._locale = newLocaleData;
            }
            return this;
          }
        }
        var lang = deprecate(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function(key) {
            if (key === void 0) {
              return this.localeData();
            } else {
              return this.locale(key);
            }
          }
        );
        function localeData() {
          return this._locale;
        }
        var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
        function mod$1(dividend, divisor) {
          return (dividend % divisor + divisor) % divisor;
        }
        function localStartOfDate(y, m, d2) {
          if (y < 100 && y >= 0) {
            return new Date(y + 400, m, d2) - MS_PER_400_YEARS;
          } else {
            return new Date(y, m, d2).valueOf();
          }
        }
        function utcStartOfDate(y, m, d2) {
          if (y < 100 && y >= 0) {
            return Date.UTC(y + 400, m, d2) - MS_PER_400_YEARS;
          } else {
            return Date.UTC(y, m, d2);
          }
        }
        function startOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year(), 0, 1);
              break;
            case "quarter":
              time = startOfDate(
                this.year(),
                this.month() - this.month() % 3,
                1
              );
              break;
            case "month":
              time = startOfDate(this.year(), this.month(), 1);
              break;
            case "week":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday()
              );
              break;
            case "isoWeek":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
              );
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date());
              break;
            case "hour":
              time = this._d.valueOf();
              time -= mod$1(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
              );
              break;
            case "minute":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_MINUTE);
              break;
            case "second":
              time = this._d.valueOf();
              time -= mod$1(time, MS_PER_SECOND);
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function endOf(units) {
          var time, startOfDate;
          units = normalizeUnits(units);
          if (units === void 0 || units === "millisecond" || !this.isValid()) {
            return this;
          }
          startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
          switch (units) {
            case "year":
              time = startOfDate(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              time = startOfDate(
                this.year(),
                this.month() - this.month() % 3 + 3,
                1
              ) - 1;
              break;
            case "month":
              time = startOfDate(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday() + 7
              ) - 1;
              break;
            case "isoWeek":
              time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
              break;
            case "day":
            case "date":
              time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              time = this._d.valueOf();
              time += MS_PER_HOUR - mod$1(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
              ) - 1;
              break;
            case "minute":
              time = this._d.valueOf();
              time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
              break;
            case "second":
              time = this._d.valueOf();
              time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
              break;
          }
          this._d.setTime(time);
          hooks.updateOffset(this, true);
          return this;
        }
        function valueOf() {
          return this._d.valueOf() - (this._offset || 0) * 6e4;
        }
        function unix() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function toDate() {
          return new Date(this.valueOf());
        }
        function toArray() {
          var m = this;
          return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond()
          ];
        }
        function toObject() {
          var m = this;
          return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
          };
        }
        function toJSON() {
          return this.isValid() ? this.toISOString() : null;
        }
        function isValid$2() {
          return isValid(this);
        }
        function parsingFlags() {
          return extend({}, getParsingFlags(this));
        }
        function invalidAt() {
          return getParsingFlags(this).overflow;
        }
        function creationData() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }
        addFormatToken("N", 0, 0, "eraAbbr");
        addFormatToken("NN", 0, 0, "eraAbbr");
        addFormatToken("NNN", 0, 0, "eraAbbr");
        addFormatToken("NNNN", 0, 0, "eraName");
        addFormatToken("NNNNN", 0, 0, "eraNarrow");
        addFormatToken("y", ["y", 1], "yo", "eraYear");
        addFormatToken("y", ["yy", 2], 0, "eraYear");
        addFormatToken("y", ["yyy", 3], 0, "eraYear");
        addFormatToken("y", ["yyyy", 4], 0, "eraYear");
        addRegexToken("N", matchEraAbbr);
        addRegexToken("NN", matchEraAbbr);
        addRegexToken("NNN", matchEraAbbr);
        addRegexToken("NNNN", matchEraName);
        addRegexToken("NNNNN", matchEraNarrow);
        addParseToken(
          ["N", "NN", "NNN", "NNNN", "NNNNN"],
          function(input, array, config, token2) {
            var era = config._locale.erasParse(input, token2, config._strict);
            if (era) {
              getParsingFlags(config).era = era;
            } else {
              getParsingFlags(config).invalidEra = input;
            }
          }
        );
        addRegexToken("y", matchUnsigned);
        addRegexToken("yy", matchUnsigned);
        addRegexToken("yyy", matchUnsigned);
        addRegexToken("yyyy", matchUnsigned);
        addRegexToken("yo", matchEraYearOrdinal);
        addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
        addParseToken(["yo"], function(input, array, config, token2) {
          var match;
          if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
          }
          if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
          } else {
            array[YEAR] = parseInt(input, 10);
          }
        });
        function localeEras(m, format2) {
          var i, l, date, eras = this._eras || getLocale("en")._eras;
          for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
              case "string":
                date = hooks(eras[i].since).startOf("day");
                eras[i].since = date.valueOf();
                break;
            }
            switch (typeof eras[i].until) {
              case "undefined":
                eras[i].until = Infinity;
                break;
              case "string":
                date = hooks(eras[i].until).startOf("day").valueOf();
                eras[i].until = date.valueOf();
                break;
            }
          }
          return eras;
        }
        function localeErasParse(eraName, format2, strict) {
          var i, l, eras = this.eras(), name, abbr, narrow;
          eraName = eraName.toUpperCase();
          for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) {
              switch (format2) {
                case "N":
                case "NN":
                case "NNN":
                  if (abbr === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNN":
                  if (name === eraName) {
                    return eras[i];
                  }
                  break;
                case "NNNNN":
                  if (narrow === eraName) {
                    return eras[i];
                  }
                  break;
              }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
              return eras[i];
            }
          }
        }
        function localeErasConvertYear(era, year) {
          var dir = era.since <= era.until ? 1 : -1;
          if (year === void 0) {
            return hooks(era.since).year();
          } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
          }
        }
        function getEraName() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].name;
            }
          }
          return "";
        }
        function getEraNarrow() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].narrow;
            }
          }
          return "";
        }
        function getEraAbbr() {
          var i, l, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until) {
              return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
              return eras[i].abbr;
            }
          }
          return "";
        }
        function getEraYear() {
          var i, l, dir, val, eras = this.localeData().eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            val = this.clone().startOf("day").valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
              return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
            }
          }
          return this.year();
        }
        function erasNameRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNameRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNameRegex : this._erasRegex;
        }
        function erasAbbrRegex(isStrict) {
          if (!hasOwnProp(this, "_erasAbbrRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasAbbrRegex : this._erasRegex;
        }
        function erasNarrowRegex(isStrict) {
          if (!hasOwnProp(this, "_erasNarrowRegex")) {
            computeErasParse.call(this);
          }
          return isStrict ? this._erasNarrowRegex : this._erasRegex;
        }
        function matchEraAbbr(isStrict, locale2) {
          return locale2.erasAbbrRegex(isStrict);
        }
        function matchEraName(isStrict, locale2) {
          return locale2.erasNameRegex(isStrict);
        }
        function matchEraNarrow(isStrict, locale2) {
          return locale2.erasNarrowRegex(isStrict);
        }
        function matchEraYearOrdinal(isStrict, locale2) {
          return locale2._eraYearOrdinalRegex || matchUnsigned;
        }
        function computeErasParse() {
          var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
          for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
          }
          this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
          this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
          this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
          this._erasNarrowRegex = new RegExp(
            "^(" + narrowPieces.join("|") + ")",
            "i"
          );
        }
        addFormatToken(0, ["gg", 2], 0, function() {
          return this.weekYear() % 100;
        });
        addFormatToken(0, ["GG", 2], 0, function() {
          return this.isoWeekYear() % 100;
        });
        function addWeekYearFormatToken(token2, getter) {
          addFormatToken(0, [token2, token2.length], 0, getter);
        }
        addWeekYearFormatToken("gggg", "weekYear");
        addWeekYearFormatToken("ggggg", "weekYear");
        addWeekYearFormatToken("GGGG", "isoWeekYear");
        addWeekYearFormatToken("GGGGG", "isoWeekYear");
        addUnitAlias("weekYear", "gg");
        addUnitAlias("isoWeekYear", "GG");
        addUnitPriority("weekYear", 1);
        addUnitPriority("isoWeekYear", 1);
        addRegexToken("G", matchSigned);
        addRegexToken("g", matchSigned);
        addRegexToken("GG", match1to2, match2);
        addRegexToken("gg", match1to2, match2);
        addRegexToken("GGGG", match1to4, match4);
        addRegexToken("gggg", match1to4, match4);
        addRegexToken("GGGGG", match1to6, match6);
        addRegexToken("ggggg", match1to6, match6);
        addWeekParseToken(
          ["gggg", "ggggg", "GGGG", "GGGGG"],
          function(input, week, config, token2) {
            week[token2.substr(0, 2)] = toInt(input);
          }
        );
        addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
          week[token2] = hooks.parseTwoDigitYear(input);
        });
        function getSetWeekYear(input) {
          return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
          );
        }
        function getSetISOWeekYear(input) {
          return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
          );
        }
        function getISOWeeksInYear() {
          return weeksInYear(this.year(), 1, 4);
        }
        function getISOWeeksInISOWeekYear() {
          return weeksInYear(this.isoWeekYear(), 1, 4);
        }
        function getWeeksInYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        }
        function getWeeksInWeekYear() {
          var weekInfo = this.localeData()._week;
          return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
        }
        function getSetWeekYearHelper(input, week, weekday, dow, doy) {
          var weeksTarget;
          if (input == null) {
            return weekOfYear(this, dow, doy).year;
          } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
              week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
          }
        }
        function setWeekAll(weekYear, week, weekday, dow, doy) {
          var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
          this.year(date.getUTCFullYear());
          this.month(date.getUTCMonth());
          this.date(date.getUTCDate());
          return this;
        }
        addFormatToken("Q", 0, "Qo", "quarter");
        addUnitAlias("quarter", "Q");
        addUnitPriority("quarter", 7);
        addRegexToken("Q", match1);
        addParseToken("Q", function(input, array) {
          array[MONTH] = (toInt(input) - 1) * 3;
        });
        function getSetQuarter(input) {
          return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        }
        addFormatToken("D", ["DD", 2], "Do", "date");
        addUnitAlias("date", "D");
        addUnitPriority("date", 9);
        addRegexToken("D", match1to2);
        addRegexToken("DD", match1to2, match2);
        addRegexToken("Do", function(isStrict, locale2) {
          return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
        });
        addParseToken(["D", "DD"], DATE);
        addParseToken("Do", function(input, array) {
          array[DATE] = toInt(input.match(match1to2)[0]);
        });
        var getSetDayOfMonth = makeGetSet("Date", true);
        addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
        addUnitAlias("dayOfYear", "DDD");
        addUnitPriority("dayOfYear", 4);
        addRegexToken("DDD", match1to3);
        addRegexToken("DDDD", match3);
        addParseToken(["DDD", "DDDD"], function(input, array, config) {
          config._dayOfYear = toInt(input);
        });
        function getSetDayOfYear(input) {
          var dayOfYear = Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
          return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
        }
        addFormatToken("m", ["mm", 2], 0, "minute");
        addUnitAlias("minute", "m");
        addUnitPriority("minute", 14);
        addRegexToken("m", match1to2);
        addRegexToken("mm", match1to2, match2);
        addParseToken(["m", "mm"], MINUTE);
        var getSetMinute = makeGetSet("Minutes", false);
        addFormatToken("s", ["ss", 2], 0, "second");
        addUnitAlias("second", "s");
        addUnitPriority("second", 15);
        addRegexToken("s", match1to2);
        addRegexToken("ss", match1to2, match2);
        addParseToken(["s", "ss"], SECOND);
        var getSetSecond = makeGetSet("Seconds", false);
        addFormatToken("S", 0, 0, function() {
          return ~~(this.millisecond() / 100);
        });
        addFormatToken(0, ["SS", 2], 0, function() {
          return ~~(this.millisecond() / 10);
        });
        addFormatToken(0, ["SSS", 3], 0, "millisecond");
        addFormatToken(0, ["SSSS", 4], 0, function() {
          return this.millisecond() * 10;
        });
        addFormatToken(0, ["SSSSS", 5], 0, function() {
          return this.millisecond() * 100;
        });
        addFormatToken(0, ["SSSSSS", 6], 0, function() {
          return this.millisecond() * 1e3;
        });
        addFormatToken(0, ["SSSSSSS", 7], 0, function() {
          return this.millisecond() * 1e4;
        });
        addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
          return this.millisecond() * 1e5;
        });
        addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
          return this.millisecond() * 1e6;
        });
        addUnitAlias("millisecond", "ms");
        addUnitPriority("millisecond", 16);
        addRegexToken("S", match1to3, match1);
        addRegexToken("SS", match1to3, match2);
        addRegexToken("SSS", match1to3, match3);
        var token, getSetMillisecond;
        for (token = "SSSS"; token.length <= 9; token += "S") {
          addRegexToken(token, matchUnsigned);
        }
        function parseMs(input, array) {
          array[MILLISECOND] = toInt(("0." + input) * 1e3);
        }
        for (token = "S"; token.length <= 9; token += "S") {
          addParseToken(token, parseMs);
        }
        getSetMillisecond = makeGetSet("Milliseconds", false);
        addFormatToken("z", 0, 0, "zoneAbbr");
        addFormatToken("zz", 0, 0, "zoneName");
        function getZoneAbbr() {
          return this._isUTC ? "UTC" : "";
        }
        function getZoneName() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        var proto2 = Moment.prototype;
        proto2.add = add;
        proto2.calendar = calendar$1;
        proto2.clone = clone;
        proto2.diff = diff;
        proto2.endOf = endOf;
        proto2.format = format;
        proto2.from = from;
        proto2.fromNow = fromNow;
        proto2.to = to;
        proto2.toNow = toNow;
        proto2.get = stringGet;
        proto2.invalidAt = invalidAt;
        proto2.isAfter = isAfter;
        proto2.isBefore = isBefore;
        proto2.isBetween = isBetween;
        proto2.isSame = isSame;
        proto2.isSameOrAfter = isSameOrAfter;
        proto2.isSameOrBefore = isSameOrBefore;
        proto2.isValid = isValid$2;
        proto2.lang = lang;
        proto2.locale = locale;
        proto2.localeData = localeData;
        proto2.max = prototypeMax;
        proto2.min = prototypeMin;
        proto2.parsingFlags = parsingFlags;
        proto2.set = stringSet;
        proto2.startOf = startOf;
        proto2.subtract = subtract;
        proto2.toArray = toArray;
        proto2.toObject = toObject;
        proto2.toDate = toDate;
        proto2.toISOString = toISOString;
        proto2.inspect = inspect;
        if (typeof Symbol !== "undefined" && Symbol.for != null) {
          proto2[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return "Moment<" + this.format() + ">";
          };
        }
        proto2.toJSON = toJSON;
        proto2.toString = toString;
        proto2.unix = unix;
        proto2.valueOf = valueOf;
        proto2.creationData = creationData;
        proto2.eraName = getEraName;
        proto2.eraNarrow = getEraNarrow;
        proto2.eraAbbr = getEraAbbr;
        proto2.eraYear = getEraYear;
        proto2.year = getSetYear;
        proto2.isLeapYear = getIsLeapYear;
        proto2.weekYear = getSetWeekYear;
        proto2.isoWeekYear = getSetISOWeekYear;
        proto2.quarter = proto2.quarters = getSetQuarter;
        proto2.month = getSetMonth;
        proto2.daysInMonth = getDaysInMonth;
        proto2.week = proto2.weeks = getSetWeek;
        proto2.isoWeek = proto2.isoWeeks = getSetISOWeek;
        proto2.weeksInYear = getWeeksInYear;
        proto2.weeksInWeekYear = getWeeksInWeekYear;
        proto2.isoWeeksInYear = getISOWeeksInYear;
        proto2.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
        proto2.date = getSetDayOfMonth;
        proto2.day = proto2.days = getSetDayOfWeek;
        proto2.weekday = getSetLocaleDayOfWeek;
        proto2.isoWeekday = getSetISODayOfWeek;
        proto2.dayOfYear = getSetDayOfYear;
        proto2.hour = proto2.hours = getSetHour;
        proto2.minute = proto2.minutes = getSetMinute;
        proto2.second = proto2.seconds = getSetSecond;
        proto2.millisecond = proto2.milliseconds = getSetMillisecond;
        proto2.utcOffset = getSetOffset;
        proto2.utc = setOffsetToUTC;
        proto2.local = setOffsetToLocal;
        proto2.parseZone = setOffsetToParsedOffset;
        proto2.hasAlignedHourOffset = hasAlignedHourOffset;
        proto2.isDST = isDaylightSavingTime;
        proto2.isLocal = isLocal;
        proto2.isUtcOffset = isUtcOffset;
        proto2.isUtc = isUtc;
        proto2.isUTC = isUtc;
        proto2.zoneAbbr = getZoneAbbr;
        proto2.zoneName = getZoneName;
        proto2.dates = deprecate(
          "dates accessor is deprecated. Use date instead.",
          getSetDayOfMonth
        );
        proto2.months = deprecate(
          "months accessor is deprecated. Use month instead",
          getSetMonth
        );
        proto2.years = deprecate(
          "years accessor is deprecated. Use year instead",
          getSetYear
        );
        proto2.zone = deprecate(
          "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
          getSetZone
        );
        proto2.isDSTShifted = deprecate(
          "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
          isDaylightSavingTimeShifted
        );
        function createUnix(input) {
          return createLocal(input * 1e3);
        }
        function createInZone() {
          return createLocal.apply(null, arguments).parseZone();
        }
        function preParsePostFormat(string) {
          return string;
        }
        var proto$1 = Locale.prototype;
        proto$1.calendar = calendar;
        proto$1.longDateFormat = longDateFormat;
        proto$1.invalidDate = invalidDate;
        proto$1.ordinal = ordinal;
        proto$1.preparse = preParsePostFormat;
        proto$1.postformat = preParsePostFormat;
        proto$1.relativeTime = relativeTime;
        proto$1.pastFuture = pastFuture;
        proto$1.set = set;
        proto$1.eras = localeEras;
        proto$1.erasParse = localeErasParse;
        proto$1.erasConvertYear = localeErasConvertYear;
        proto$1.erasAbbrRegex = erasAbbrRegex;
        proto$1.erasNameRegex = erasNameRegex;
        proto$1.erasNarrowRegex = erasNarrowRegex;
        proto$1.months = localeMonths;
        proto$1.monthsShort = localeMonthsShort;
        proto$1.monthsParse = localeMonthsParse;
        proto$1.monthsRegex = monthsRegex;
        proto$1.monthsShortRegex = monthsShortRegex;
        proto$1.week = localeWeek;
        proto$1.firstDayOfYear = localeFirstDayOfYear;
        proto$1.firstDayOfWeek = localeFirstDayOfWeek;
        proto$1.weekdays = localeWeekdays;
        proto$1.weekdaysMin = localeWeekdaysMin;
        proto$1.weekdaysShort = localeWeekdaysShort;
        proto$1.weekdaysParse = localeWeekdaysParse;
        proto$1.weekdaysRegex = weekdaysRegex;
        proto$1.weekdaysShortRegex = weekdaysShortRegex;
        proto$1.weekdaysMinRegex = weekdaysMinRegex;
        proto$1.isPM = localeIsPM;
        proto$1.meridiem = localeMeridiem;
        function get$1(format2, index, field, setter) {
          var locale2 = getLocale(), utc = createUTC().set(setter, index);
          return locale2[field](utc, format2);
        }
        function listMonthsImpl(format2, index, field) {
          if (isNumber(format2)) {
            index = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
          if (index != null) {
            return get$1(format2, index, field, "month");
          }
          var i, out = [];
          for (i = 0; i < 12; i++) {
            out[i] = get$1(format2, i, field, "month");
          }
          return out;
        }
        function listWeekdaysImpl(localeSorted, format2, index, field) {
          if (typeof localeSorted === "boolean") {
            if (isNumber(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          } else {
            format2 = localeSorted;
            index = format2;
            localeSorted = false;
            if (isNumber(format2)) {
              index = format2;
              format2 = void 0;
            }
            format2 = format2 || "";
          }
          var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
          if (index != null) {
            return get$1(format2, (index + shift) % 7, field, "day");
          }
          for (i = 0; i < 7; i++) {
            out[i] = get$1(format2, (i + shift) % 7, field, "day");
          }
          return out;
        }
        function listMonths(format2, index) {
          return listMonthsImpl(format2, index, "months");
        }
        function listMonthsShort(format2, index) {
          return listMonthsImpl(format2, index, "monthsShort");
        }
        function listWeekdays(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
        }
        function listWeekdaysShort(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
        }
        function listWeekdaysMin(localeSorted, format2, index) {
          return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
        }
        getSetGlobalLocale("en", {
          eras: [
            {
              since: "0001-01-01",
              until: Infinity,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD"
            },
            {
              since: "0000-12-31",
              until: -Infinity,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC"
            }
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(number) {
            var b2 = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b2 === 1 ? "st" : b2 === 2 ? "nd" : b2 === 3 ? "rd" : "th";
            return number + output;
          }
        });
        hooks.lang = deprecate(
          "moment.lang is deprecated. Use moment.locale instead.",
          getSetGlobalLocale
        );
        hooks.langData = deprecate(
          "moment.langData is deprecated. Use moment.localeData instead.",
          getLocale
        );
        var mathAbs = Math.abs;
        function abs() {
          var data = this._data;
          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);
          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.months = mathAbs(data.months);
          data.years = mathAbs(data.years);
          return this;
        }
        function addSubtract$1(duration, input, value, direction) {
          var other = createDuration(input, value);
          duration._milliseconds += direction * other._milliseconds;
          duration._days += direction * other._days;
          duration._months += direction * other._months;
          return duration._bubble();
        }
        function add$1(input, value) {
          return addSubtract$1(this, input, value, 1);
        }
        function subtract$1(input, value) {
          return addSubtract$1(this, input, value, -1);
        }
        function absCeil(number) {
          if (number < 0) {
            return Math.floor(number);
          } else {
            return Math.ceil(number);
          }
        }
        function bubble() {
          var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
          if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
            milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
            days2 = 0;
            months2 = 0;
          }
          data.milliseconds = milliseconds2 % 1e3;
          seconds2 = absFloor(milliseconds2 / 1e3);
          data.seconds = seconds2 % 60;
          minutes2 = absFloor(seconds2 / 60);
          data.minutes = minutes2 % 60;
          hours2 = absFloor(minutes2 / 60);
          data.hours = hours2 % 24;
          days2 += absFloor(hours2 / 24);
          monthsFromDays = absFloor(daysToMonths(days2));
          months2 += monthsFromDays;
          days2 -= absCeil(monthsToDays(monthsFromDays));
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          data.days = days2;
          data.months = months2;
          data.years = years2;
          return this;
        }
        function daysToMonths(days2) {
          return days2 * 4800 / 146097;
        }
        function monthsToDays(months2) {
          return months2 * 146097 / 4800;
        }
        function as(units) {
          if (!this.isValid()) {
            return NaN;
          }
          var days2, months2, milliseconds2 = this._milliseconds;
          units = normalizeUnits(units);
          if (units === "month" || units === "quarter" || units === "year") {
            days2 = this._days + milliseconds2 / 864e5;
            months2 = this._months + daysToMonths(days2);
            switch (units) {
              case "month":
                return months2;
              case "quarter":
                return months2 / 3;
              case "year":
                return months2 / 12;
            }
          } else {
            days2 = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
              case "week":
                return days2 / 7 + milliseconds2 / 6048e5;
              case "day":
                return days2 + milliseconds2 / 864e5;
              case "hour":
                return days2 * 24 + milliseconds2 / 36e5;
              case "minute":
                return days2 * 1440 + milliseconds2 / 6e4;
              case "second":
                return days2 * 86400 + milliseconds2 / 1e3;
              case "millisecond":
                return Math.floor(days2 * 864e5) + milliseconds2;
              default:
                throw new Error("Unknown unit " + units);
            }
          }
        }
        function valueOf$1() {
          if (!this.isValid()) {
            return NaN;
          }
          return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
        }
        function makeAs(alias) {
          return function() {
            return this.as(alias);
          };
        }
        var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
        function clone$1() {
          return createDuration(this);
        }
        function get$2(units) {
          units = normalizeUnits(units);
          return this.isValid() ? this[units + "s"]() : NaN;
        }
        function makeGetter(name) {
          return function() {
            return this.isValid() ? this._data[name] : NaN;
          };
        }
        var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
        function weeks() {
          return absFloor(this.days() / 7);
        }
        var round = Math.round, thresholds = {
          ss: 44,
          // a few seconds to seconds
          s: 45,
          // seconds to minute
          m: 45,
          // minutes to hour
          h: 22,
          // hours to day
          d: 26,
          // days to month/week
          w: null,
          // weeks to month
          M: 11
          // months to year
        };
        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
          return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
        }
        function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
          var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a2 = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
          if (thresholds2.w != null) {
            a2 = a2 || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
          }
          a2 = a2 || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
          a2[2] = withoutSuffix;
          a2[3] = +posNegDuration > 0;
          a2[4] = locale2;
          return substituteTimeAgo.apply(null, a2);
        }
        function getSetRelativeTimeRounding(roundingFunction) {
          if (roundingFunction === void 0) {
            return round;
          }
          if (typeof roundingFunction === "function") {
            round = roundingFunction;
            return true;
          }
          return false;
        }
        function getSetRelativeTimeThreshold(threshold, limit) {
          if (thresholds[threshold] === void 0) {
            return false;
          }
          if (limit === void 0) {
            return thresholds[threshold];
          }
          thresholds[threshold] = limit;
          if (threshold === "s") {
            thresholds.ss = limit - 1;
          }
          return true;
        }
        function humanize(argWithSuffix, argThresholds) {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var withSuffix = false, th = thresholds, locale2, output;
          if (typeof argWithSuffix === "object") {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
          }
          if (typeof argWithSuffix === "boolean") {
            withSuffix = argWithSuffix;
          }
          if (typeof argThresholds === "object") {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
              th.ss = argThresholds.s - 1;
            }
          }
          locale2 = this.localeData();
          output = relativeTime$1(this, !withSuffix, th, locale2);
          if (withSuffix) {
            output = locale2.pastFuture(+this, output);
          }
          return locale2.postformat(output);
        }
        var abs$1 = Math.abs;
        function sign(x) {
          return (x > 0) - (x < 0) || +x;
        }
        function toISOString$1() {
          if (!this.isValid()) {
            return this.localeData().invalidDate();
          }
          var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
          if (!total) {
            return "P0D";
          }
          minutes2 = absFloor(seconds2 / 60);
          hours2 = absFloor(minutes2 / 60);
          seconds2 %= 60;
          minutes2 %= 60;
          years2 = absFloor(months2 / 12);
          months2 %= 12;
          s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
          totalSign = total < 0 ? "-" : "";
          ymSign = sign(this._months) !== sign(total) ? "-" : "";
          daysSign = sign(this._days) !== sign(total) ? "-" : "";
          hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
          return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
        }
        var proto$2 = Duration.prototype;
        proto$2.isValid = isValid$1;
        proto$2.abs = abs;
        proto$2.add = add$1;
        proto$2.subtract = subtract$1;
        proto$2.as = as;
        proto$2.asMilliseconds = asMilliseconds;
        proto$2.asSeconds = asSeconds;
        proto$2.asMinutes = asMinutes;
        proto$2.asHours = asHours;
        proto$2.asDays = asDays;
        proto$2.asWeeks = asWeeks;
        proto$2.asMonths = asMonths;
        proto$2.asQuarters = asQuarters;
        proto$2.asYears = asYears;
        proto$2.valueOf = valueOf$1;
        proto$2._bubble = bubble;
        proto$2.clone = clone$1;
        proto$2.get = get$2;
        proto$2.milliseconds = milliseconds;
        proto$2.seconds = seconds;
        proto$2.minutes = minutes;
        proto$2.hours = hours;
        proto$2.days = days;
        proto$2.weeks = weeks;
        proto$2.months = months;
        proto$2.years = years;
        proto$2.humanize = humanize;
        proto$2.toISOString = toISOString$1;
        proto$2.toString = toISOString$1;
        proto$2.toJSON = toISOString$1;
        proto$2.locale = locale;
        proto$2.localeData = localeData;
        proto$2.toIsoString = deprecate(
          "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
          toISOString$1
        );
        proto$2.lang = lang;
        addFormatToken("X", 0, 0, "unix");
        addFormatToken("x", 0, 0, "valueOf");
        addRegexToken("x", matchSigned);
        addRegexToken("X", matchTimestamp);
        addParseToken("X", function(input, array, config) {
          config._d = new Date(parseFloat(input) * 1e3);
        });
        addParseToken("x", function(input, array, config) {
          config._d = new Date(toInt(input));
        });
        hooks.version = "2.29.4";
        setHookCallback(createLocal);
        hooks.fn = proto2;
        hooks.min = min;
        hooks.max = max;
        hooks.now = now;
        hooks.utc = createUTC;
        hooks.unix = createUnix;
        hooks.months = listMonths;
        hooks.isDate = isDate;
        hooks.locale = getSetGlobalLocale;
        hooks.invalid = createInvalid;
        hooks.duration = createDuration;
        hooks.isMoment = isMoment;
        hooks.weekdays = listWeekdays;
        hooks.parseZone = createInZone;
        hooks.localeData = getLocale;
        hooks.isDuration = isDuration;
        hooks.monthsShort = listMonthsShort;
        hooks.weekdaysMin = listWeekdaysMin;
        hooks.defineLocale = defineLocale;
        hooks.updateLocale = updateLocale;
        hooks.locales = listLocales;
        hooks.weekdaysShort = listWeekdaysShort;
        hooks.normalizeUnits = normalizeUnits;
        hooks.relativeTimeRounding = getSetRelativeTimeRounding;
        hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
        hooks.calendarFormat = getCalendarFormat;
        hooks.prototype = proto2;
        hooks.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          // <input type="datetime-local" />
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          // <input type="datetime-local" step="1" />
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          // <input type="datetime-local" step="0.001" />
          DATE: "YYYY-MM-DD",
          // <input type="date" />
          TIME: "HH:mm",
          // <input type="time" />
          TIME_SECONDS: "HH:mm:ss",
          // <input type="time" step="1" />
          TIME_MS: "HH:mm:ss.SSS",
          // <input type="time" step="0.001" />
          WEEK: "GGGG-[W]WW",
          // <input type="week" />
          MONTH: "YYYY-MM"
          // <input type="month" />
        };
        return hooks;
      });
    }
  });

  // js/util/axiosUtil.js
  var axios = require_axios();
  var Axios = class {
    constructor(opt) {
      const { type, baseURL } = opt || { type: "nomal", baseURL: null };
      this._axiosInstn = baseURL ? axios.create({ baseURL }) : axios.create();
      switch (type) {
        case "grpc":
          this._axiosInstn.defaults.headers.post["Content-Type"] = "application/x-protobuf";
          this._axiosInstn.defaults.transformResponse = (result) => {
            if (result instanceof ArrayBuffer) {
              return new Uint8Array(result);
            } else {
              console.log(result);
              throw new Error("GRPC \uD615\uC2DD\uC758 \uC751\uB2F5\uC774 \uC544\uB2D9\uB2C8\uB2E4.");
            }
          };
          break;
        default:
          break;
      }
    }
    get axiosInstn() {
      return this._axiosInstn;
    }
  };

  // js/business/exam_grpc.js
  var import_exam_answer_pb = __toESM(require_exam_answer_pb());
  var import_notiflix = __toESM(require_notiflix_aio_3_2_6_min());
  var protobuf = require_protobufjs();
  var moment = require_moment();
  import_notiflix.default.Loading.init({
    messageFontSize: "3vh",
    svgSize: "90",
    svgColor: "#0db5e7",
    messageColor: "#0db5e7",
    messageMaxLength: 60
  });
  var pythonPrintData = [];
  new mdb.Popover(document.querySelector("#infoPopup"), {
    html: true,
    content: `
<pre class="top_over w-100 prob-pre">
* Python Version - 3.10.2
   - available Library
    \u2160. numpy - 1.23.5
    \u2161. scipy - 1.9.3
    \u2162. pandas - 1.5.2
    \u2163. scikit-learn - 1.2.0</pre>`
  });
  var test_exam_type = [
    {
      examNm: "Python_20230109",
      actionDate: moment().format("YYYY-MM-DD")
    }
  ];
  var exam_question_list = [
    {
      examNm: "Python_20230109",
      probNum: 1,
      questType: 1,
      problem: "\uB2E4\uC74C \uC124\uBA85 \uC911 \uD2C0\uB9B0 \uAC83\uC740 \uBB34\uC5C7\uC778\uAC00?",
      problemSample: null,
      sample: ["\uBB38\uC790\uC5F4\uC740 \uBB38\uC790, \uB2E8\uC5B4 \uB4F1\uC73C\uB85C \uAD6C\uC131\uB41C \uBB38\uC790\uB4E4\uC758 \uC9D1\uD569\uB2C8\uB2E4.", "\uD29C\uD50C\uC740 []\uB85C \uB458\uB7EC\uC2F8\uC5EC \uC788\uB2E4.", "\uC9D1\uD569 \uC790\uB8CC\uD615\uC740 set \uD0A4\uC6CC\uB4DC\uB97C \uC0AC\uC6A9\uD574\uC11C \uB9CC\uB4E0\uB2E4.", "set\uC5D0\uC11C \uAD50\uC9D1\uD569\uC740 & \uC774\uB2E4"]
    },
    {
      examNm: "Python_20230109",
      probNum: 2,
      questType: 1,
      problem: "\uB2E4\uC74C \uC911 \uD30C\uC774\uC36C \uBB38\uBC95\uC5D0 \uB300\uD55C \uC124\uBA85\uC73C\uB85C \uD2C0\uB9B0 \uAC83\uC740? ",
      problemSample: null,
      sample: [
        "\uB515\uC11C\uB108\uB9AC\uB294 key\uC640 value\uC640 \uD558\uB098\uC758 \uC30D\uC774 {}\uB85C \uB458\uB7EC\uC2F8\uC5EC \uC788\uB2E4.",
        "\uB098\uB217\uC148\uC744 \uD558\uACE0 \uBAAB\uC744 \uBC18\uD658\uD558\uB294 \uC5F0\uC0B0\uC790\uB294 // \uC774\uB2E4.",
        "b = a[:]\uB294 a\uB97C b\uC5D0 \uBCF5\uC0AC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD55C\uB2E4.",
        "b = copy(a)\uB294 a\uB97C b\uC5D0 \uBCF5\uC0AC\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD55C\uB2E4."
      ]
    },
    {
      examNm: "Python_20230109",
      probNum: 3,
      questType: 1,
      problem: "\uB2E4\uC74C \uC911 \uD30C\uC774\uC36C \uC2E4\uD589\uC758 \uACB0\uACFC \uAC12\uC73C\uB85C \uD2C0\uB9B0 \uAC83\uC740?",
      problemSample: null,
      sample: ["round(1.4)\uB294 1\uC774\uB2E4.", "abs(-20)\uC740 20\uC774\uB2E4.", "all([1,2,3])\uC740 True \uC774\uB2E4.", "any([1,2,3,0])\uC740 False\uC774\uB2E4."]
    },
    {
      examNm: "Python_20230109",
      probNum: 4,
      questType: 1,
      problem: " \uB2E4\uC74C \uC911 \uD30C\uC774\uC36C \uC2E4\uD589\uC758 \uACB0\uACFC \uAC12\uC73C\uB85C \uD2C0\uB9B0 \uAC83\uC740?",
      problemSample: null,
      sample: ["pow(2,4)\uB294 16\uC774\uB2E4. ", "list(range(5,10))\uC740 [5,6,7,8,9,10]\uC774\uB2E4.", "tuple(\u201Cabs\u201D)\uB294 (\u2018a\u2019, \u2018b\u2019, \u2018c\u2019)\uC774\uB2E4. ", " type(\u201Cschool\u201D)\uC740 <class \u2018str\u2019>\uC774\uB2E4."]
    },
    {
      examNm: "Python_20230109",
      probNum: 5,
      questType: 2,
      problem: "\uBE48\uCE78\u2019\uC5D0 \uB4E4\uC5B4\uAC08 \uCF54\uB4DC\uB85C \uC801\uB2F9\uD55C \uAC83\uC740 \uBB34\uC5C7\uC778\uAC00? ",
      problemSample: {
        condition: `i = 0
while(True) 
    i = i+1
    if i == 1000: 
         [     \uBE48 \uCE78     ]
        break
        print(i)`,
        result: `0
... 999
i\uAC00 1000\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uBC18\uBCF5\uBB38\uC744 \uC911\uB2E8\uD569\uB2C8\uB2E4. `
      },
      sample: [
        "print(\u2018i\uAC00 {0}\uC774 \uB410\uC2B5\uB2C8\uB2E4. \uBC18\uBCF5\uBB38\uC744 \uC911\uB2E8\uD569\uB2C8\uB2E4.\u2019,format(i)) ",
        "print(\u2018i\uAC00 {0}\uC774 \uB410\uC2B5\uB2C8\uB2E4. \uBC18\uBCF5\uBB38\uC744 \uC911\uB2E8\uD569\uB2C8\uB2E4.\u2019.format(i))",
        "print(\u2018i\uAC00 \u2019+format(i)+\u2019\uC774 \uB410\uC2B5\uB2C8\uB2E4. \uBC18\uBCF5\uBB38\uC744 \uC911\uB2E8\uD569\uB2C8\uB2E4.\u2019)",
        "print(\u2018i\uAC00 \\i\uC774 \uB410\uC2B5\uB2C8\uB2E4. \uBC18\uBCF5\uBB38\uC744 \uC911\uB2E8\uD569\uB2C8\uB2E4.\u2019, format(i))"
      ]
    },
    {
      examNm: "Python_20230109",
      probNum: 6,
      questType: 2,
      problem: "\uBE48\uCE78\u2019\uC5D0 \uB4E4\uC5B4\uAC08 \uCF54\uB4DC\uB85C \uC801\uB2F9\uD55C \uAC83\uC740 \uBB34\uC5C7\uC778\uAC00? ",
      problemSample: {
        condition: `for i in range(1, 6): 
for j in range(i): 
    [     \uBE48 \uCE78     ]
print()`,
        result: `*
**
***
****
*****`
      },
      sample: ["print(\u201C*\u201D, end = \u201C\u201D, )", "print(\u201C*\u201D)", "print(\u201C*\u201D, end ==\u201C\u201D,)", "print(\u201C*\u201D+\u201C*\u201D)"]
    },
    {
      examNm: "Python_20230109",
      probNum: 7,
      questType: 2,
      problem: "\uB2E4\uC74C \uC124\uBA85 \uC911 \u2018\uBE48\uCE78\u2019\uC5D0 \uB4E4\uC5B4\uAC08 \uC54C\uB9DE\uC740 \uCF54\uB4DC\uB294? ",
      problemSample: {
        condition: `dic = {'\uC560\uD50C':'www.apple.com', '\uD30C\uC774\uC36C':'www.python.org', '\uB9C8\uC774\uD06C\uB85C\uC18C\uD504\uD2B8':'www.microsoft.com'}
[     \uBE48 \uCE78     ]
print("{0} : {1}".format(k,v))`,
        result: null
      },
      sample: ["while(k, v)", "for k, v in dic.items():", "for k, v in range(dic)", "for k, v"]
    },
    {
      examNm: "Python_20230109",
      probNum: 8,
      questType: 1,
      problem: "\uB2E4\uC74C \uC124\uBA85 \uC911 \uD2C0\uB9B0 \uAC83\uC744 \uACE0\uB974\uC138\uC694?",
      problemSample: null,
      sample: ["\uC2DC\uC2A4\uD15C \uD658\uACBD\uC744 \uC54C\uACE0 \uC2F6\uC744\uB54C\uB294 os.environment \uC774\uB2E4.", "\uB514\uB809\uD1A0\uB9AC \uC704\uCE58 \uBCC0\uACBD\uC740 os.chdir\uC774\uB2E4. ", "\uC2DC\uC2A4\uD15C \uBA85\uB839\uC5B4 \uD638\uCD9C\uC740 os.system\uC774\uB2E4. ", "shutil\uC740 \uD30C\uC77C\uC744 \uBCF5\uC0AC\uD574\uC8FC\uB294 python \uBAA8\uB4C8\uC774\uB2E4"]
    },
    {
      examNm: "Python_20230109",
      probNum: 9,
      questType: 1,
      problem: "\uC2DC\uAC04\uC5D0 \uAD00\uB828\uB41C time \uD568\uC218\uC5D0 \uB300\uD558\uC5EC \uD2C0\uB9B0\uAC83\uC740?",
      problemSample: null,
      sample: [
        "time.time()\uC740 UTC\uB97C \uC0AC\uC6A9\uD55C\uB2E4. ",
        "\uC2DC\uAC04\uC5D0 \uAD00\uB828\uB41C \uD3EC\uB9F7 \uCF54\uB4DC\uB294 %y\uB294 \uC5F0\uB3C4\uB97C \uB098\uD0C0\uB0B8\uB2E4. ",
        "time.localtime\uC740 \uC5F0\uB3C4, \uC6D4, \uC77C, \uC2DC, \uBD84, \uCD08\uC758 \uD615\uD0DC\uB85C \uBC14\uAFB8\uC5B4 \uC900\uB2E4. ",
        "time.asctime(time.localtime(time.time()))\uC740 'Mon Dec 30 19:41:00 2019'\uC758 \uD615\uD0DC\uC774\uB2E4."
      ]
    },
    {
      examNm: "Python_20230109",
      probNum: 10,
      questType: 2,
      problem: "\uB2E4\uC74C \uC911 \u2018\uBE48\uCE78\u2019\uC5D0 \uB4E4\uC5B4\uAC08 \uCF54\uB4DC\uB85C \uC54C\uB9DE\uC740 \uAC83\uC740? ",
      problemSample: {
        condition: `names = {'Marry':10999, 'Sams':2111, 'Aimy':9778, 'Tom':20245, 'Michale':27115, 'Bob':5887, 'Kelly':7855}
[     \uBE48 \uCE78     ]
print(items)
for item in items:
    print(item)`,
        result: `dict_items([('Marry', 10999), ('Sams', 2111), ('Aimy', 9778), ('Tom', 20245), ('Michale', 27115), 
('Bob', 5887), ('Kelly', 7855)])
('Marry', 10999)
('Sams', 2111)
('Aimy', 9778)
('Tom', 20245)
('Michale', 27115)
('Bob', 5887)
('Kelly', 7855)`
      },
      sample: ["items = names.items(:)", "items = names.items(1:5)", "items = names.item()", "items = names.items()"]
    },
    {
      examNm: "Python_20230109",
      probNum: 11,
      questType: 3,
      questTypeLv: 2,
      permitLine: [],
      subNum: 1,
      problem: "\uB2E4\uC74C \uC870\uAC74\uC5D0 \uB9DE\uAC8C \u2018\uBE48 \uCE78\u2019\uC5D0 \uB4E4\uC5B4\uAC08 \uC54C\uB9DE\uC740 \uB0B4\uC6A9\uC744 \uC801\uC73C\uC2DC\uC624.",
      problemSample: {
        condition: `
1\uBD80\uD130 \uC785\uB825 \uAC12\uAE4C\uC9C0 \uD569\uC744 \uAD6C\uD558\uC138\uC694.

[\uACB0\uACFC \uCD9C\uB825 \uD654\uBA74]

55`,
        result: `
init = int(10)
class MathTest:
    @staticmethod
    def sum(a, b):
        return a + b

final = 0
for j in range(1, init + 1 ):
    final +=  MathTest.sum(init, 1) / 2
    
print(int(final))`
      },
      sample: null
    },
    {
      examNm: "Python_20230109",
      probNum: 12,
      questType: 3,
      questTypeLv: 1,
      permitLine: [],
      subNum: 2,
      problem: "\uC62C\uD574 \uACBD\uACFC\uB41C \uB0A0\uC9DC \uC218 \uACC4\uC0B0\uD558\uAE30.",
      problemSample: {
        condition: `
1. \uB0A0\uC9DC\uB294 \uD604\uC7AC\uD574 1\uC6D4 1\uC77C\uBD80\uD130 \uCE74\uC6B4\uD2B8 \uD569\uB2C8\uB2E4. 
2. \uD654\uBA74\uC5D0 print\uB97C \uC774\uC6A9\uD558\uC5EC \uB2E4\uC74C\uACFC \uAC19\uC774 \uCD9C\uB825\uD569\uB2C8\uB2E4. 
    \u201C\uC624\uB298\uC740 [2019-01-01]\uC774\uD6C4 [365]\uC77C\uC9F8 \uB418\uB294 \uB0A0\uC785\uB2C8\uB2E4.\u201D
3. time \uBAA8\uB4C8\uC758 localtime()\uC744 \uD569\uB2C8\uB2E4`,
        result: `
from time import localtime
t = localtime()
start_day = '%d-01-01'%t.tm_year
elapsed_day = t.tm_yday
print('\uC624\uB298\uC740 [%s]\uC774\uD6C4 [%d]\uC77C\uC9F8 \uB418\uB294 \uB0A0\uC785\uB2C8\uB2E4. '%(start_day, elapsed_day))`
      },
      sample: null
    },
    {
      examNm: "Python_20230109",
      probNum: 13,
      questType: 3,
      questTypeLv: 1,
      permitLine: [],
      subNum: 3,
      problem: "\uB450\uAC1C\uC758 \uC8FC\uC5B4\uC9C4 \uC870\uAC74\uC5D0\uC11C \uCD5C\uB300\uAC12\uACFC \uCD5C\uC18C\uAC12\uC744 \uAD6C\uD558\uC5EC\uB77C.",
      problemSample: {
        condition: `
1. 9.96, 1.27, 5.07, 6.45, 8.38, 9.29, 4.93, 7.73, 3.71, 0.93 \uC911\uC5D0\uC11C \uCD5C\uB300\uAC12\uACFC \uCD5C\uC18C\uAC12\uC744 \uAD6C\uD558\uC5EC\uB77C
2. Alotofthingsoccureachday \uC911\uC5D0\uC11C \uCD5C\uB300\uAC12\uACFC \uCD5C\uC18C\uAC12\uC744 \uAD6C\uD558\uC5EC\uB77C.`,
        result: `
listdata = [9.96, 1.27, 5.07, 6.45, 8.38, 9.29, 4.93, 7.73, 3.71, 0.93]
maxval = max(listdata)
minval = min(listdata)
print('\uCD5C\uB300\uAC12 : ', maxval)
print('\uCD5C\uC18C\uAC12 : ', minval)
txt = 'Alotofthingsoccureachday'
maxval = max(txt)
minval = min(txt)
print('\uCD5C\uB300\uAC12 : ', maxval)
print('\uCD5C\uC18C\uAC12 : ', minval)`
      },
      sample: null
    },
    {
      examNm: "Python_20230109",
      probNum: 14,
      questType: 3,
      questTypeLv: 1,
      permitLine: [],
      subNum: 4,
      problem: "\uBB38\uC790 \uCF54\uB4DC \uAD6C\uD558\uAE30",
      problemSample: {
        condition: `
1. \uBB38\uC790\uB97C \uCEE4\uB9E8\uB4DC \uCC3D\uC5D0\uC11C \uC785\uB825\uBC1B\uB294\uB2E4. 
2. \uC785\uB825\uC740 \u201C\uBB38\uC790 1\uAC1C\uB97C \uC785\uB825\uD558\uC138\uC694 : \u201D\uB85C \uD55C\uB2E4. 
3. \uACB0\uACFC\uB294 \uC544\uB798\uC640 \uAC19\uC774 \uD654\uBA74\uC5D0 \uD504\uB9B0\uD2B8\uD55C\uB2E4. 
\uBB38\uC790 : c \uCF54\uB4DC\uAC12: 99[0x63]`,
        result: `
ch = '\uBB38\uC790\uB97C 1\uAC1C \uC785\uB825\uD558\uC138\uC694 : '
text = 'c'
if len(ch)!=0 :
    ch = ch[0]
    chv = ord(text)
    print('\uBB38\uC790 : %s 	 \uCF54\uB4DC\uAC12: %d[%s]'%(text, chv, hex(chv)))`
      },
      sample: null
    },
    /*     {
        examNm: "Python_20230109",
        probNum: 15,
        questType: 3,
        questTypeLv: 1,
        permitLine: [],
        subNum: 4,
        problem: "URL에서 쿼리 문자열 추출하기",
        problemSample: {
            condition: `
            1. 웹 사이트 주소는 “https://post.naver.com/viewer/postView.nhn?volumeNo=27174949&memberNo=37451778&navi
                gationType=push” 로 한다. 2. 결과는 다음과 같이 한다. volumeNo=27174949
                memberNo=37451778
                navigationType=push
            `,
            result: null,
        },
        sample: null,
    }, */
    {
      examNm: "Python_20230109",
      probNum: 15,
      questType: 3,
      questTypeLv: 2,
      permitLine: [1],
      subNum: 4,
      problem: "URL\uC5D0\uC11C \uCFFC\uB9AC \uBB38\uC790\uC5F4 \uCD94\uCD9C\uD558\uAE30",
      problemSample: {
        condition: `
\uB450 \uC218\uC758 \uD569 \uAD6C\uD558\uB294 \uD568\uC218\uB97C \uC644\uC131\uD558\uC138\uC694. 

[\uACB0\uACFC \uCD9C\uB825 \uD654\uBA74]
30`,
        result: `def hap(x, y):
    [\uBE48\uCE78]
re = hap(10, 20)
print(re)
            `
      },
      sample: null
    }
  ];
  var Answer = class {
    constructor(probList) {
      this._answerStore = probList.map((one, idx) => {
        return {
          prob: idx + 1,
          answer: null
        };
      });
    }
    get answerStore() {
      return this._answerStore;
    }
    set answerStore(obj) {
      const thisIdx = this._answerStore.findIndex((one) => one["prob"] === obj["prob"]);
      this._answerStore[thisIdx]["answer"] = isNaN(parseInt(obj["answer"])) ? obj["answer"] : parseInt(obj["answer"]);
    }
  };
  var Question = class {
    constructor({ question, type, cm, db }) {
      this.cm = cm;
      this.db = db;
      this.$WRAP = $(document.getElementById("questionWrap"));
      this.type = type;
      this.question = question;
      this.prevSumNum = 1;
      this.mapper = {
        0: "\u2460",
        1: "\u2461",
        2: "\u2462",
        3: "\u2463"
      };
    }
    CreateQuestionWrap() {
      this.question.forEach((one, idx) => {
        const { examNm, problem, problemSample, questType, sample } = one;
        if (questType === 3)
          return;
        const questionNum = idx + 1;
        const elemnt = this.StringToDom(`
            <div id="questionWrap" class="row m-3 mb-4">
                <h1 class="mb-2 ex-prb">\u3010\uBB38\uC81C ${questionNum}\u3011${problem}</h1>
                <div id="questionWrap_${questionNum}" data-num="${questionNum}" data-type="${questType}" class="row m-1">
                </div>
            </div>
            `);
        switch (questType) {
          case 1:
            if (sample) {
              sample.forEach((data, idx2) => {
                const p = this.StringToDom(`<p class="mb-2 ex-samp" data-num="${questionNum}" data-type="${questType}" data-sample-num=${idx2 + 1}>${this.mapper[idx2]} ${data}</p>`);
                p.addEventListener("click", async (e2) => {
                  e2.currentTarget.parentNode.childNodes.forEach((one2) => {
                    if (one2.nodeType === 1)
                      one2.classList.remove("ex-samp-selected");
                  });
                  setTimeout(() => e2.target.classList.add("ex-samp-selected"), 50);
                  await this.db.CONNECTION.insert({
                    into: "questions",
                    upsert: true,
                    values: [
                      {
                        id: questionNum,
                        answer: e2.target.dataset.sampleNum
                      }
                    ]
                  });
                });
                elemnt.querySelector(`#questionWrap_${questionNum}`).appendChild(p);
              });
            }
            break;
          case 2:
            const { condition, result } = problemSample;
            const card = `
                    <div class="row col-12">
                        <div class="card p-0">
                            <div class="card-header">
                                \uC870\uAC74
                            </div>
                            <div class="card-body p-0">
                                <pre class="card-text lh-base prob-pre m-0 p-3" id="condition" style="white-space: pre;"></pre>
                            </div>
                        </div>
                        ${result ? ` <div class="card p-0">
                                        <div class="card-header">
                                            [\uACB0\uACFC \uCD9C\uB825 \uD654\uBA74]
                                        </div>
                                        <div class="card-body p-0">
                                            <pre class="card-text prob-pre lh-base m-0 p-3" id="result" style="white-space: break-spaces;"</pre>
                                        </div>
                                    </div>` : ``}
                       
                        <div id="questionWrap_${questionNum}" data-num="${questionNum}" data-type="${questType}" class="row m-3">
                        </div>
                    </div>
                    `;
            const type2 = this.StringToDom(card);
            Array.from(type2.getElementsByTagName("pre")).forEach((one2, idx2) => {
              one2.innerHTML = idx2 === 0 ? condition : result;
            });
            elemnt.querySelector(`#questionWrap_${questionNum}`).appendChild(type2);
            if (sample) {
              sample.forEach((data, idx2) => {
                const p = this.StringToDom(`<p class="mb-2 ex-samp" data-num="${questionNum}" data-type="${questType}" data-sample-num=${idx2 + 1}>${this.mapper[idx2]} ${data}</p>`);
                p.addEventListener("click", async (e2) => {
                  e2.currentTarget.parentNode.childNodes.forEach((one2) => {
                    if (one2.nodeType === 1)
                      one2.classList.remove("ex-samp-selected");
                  });
                  setTimeout(() => e2.target.classList.add("ex-samp-selected"), 50);
                  await this.db.CONNECTION.insert({
                    into: "questions",
                    upsert: true,
                    values: [
                      {
                        id: questionNum,
                        answer: e2.target.dataset.sampleNum
                      }
                    ]
                  });
                });
                elemnt.querySelector(`#questionWrap_${questionNum}`).appendChild(p);
              });
            }
            break;
        }
        $(document.getElementById("allQuestionWrap")).append(elemnt);
      });
    }
    /**
     * 주관식 문제 생성
     * @param {Integer} probNum 문제번호
     * @returns Object
     */
    CreateSubjectiveQuestion(probNum) {
      probNum = probNum || 1;
      const subProb = this.question.find((oneProb) => oneProb["questType"] === 3 && oneProb["probNum"] == probNum);
      const subProbIdx = this.question.findIndex((oneProb) => oneProb["questType"] === 3 && oneProb["probNum"] == probNum);
      if (subProb) {
        const { examNm, problem, problemSample, questType, questTypeLv, permitLine, sample, subNum } = subProb;
        const questionNum = subProbIdx + 1;
        this.cm.permitLines = permitLine;
        const elemnt = this.StringToDom(`
            <div id="questionWrap" class="row p-2">
                <div class="ex-prb">\uBB38\uC81C ${questionNum}\u3011${problem}</div>
                <pre class="card-text lh-base prob-pre m-0 p-3" id="condition" style="color: black;white-space : pre;background: aliceblue;">
                    ${problemSample.condition}
                </pre>
            </div> `);
        if (questTypeLv === 2) {
          this.cm.editor.setValue(problemSample.result);
        } else {
          this.cm.editor.setValue(problemSample.result);
        }
        $(document.getElementById("allQuestionWrap_s")).empty();
        $(document.getElementById("allQuestionWrap_s")).append(elemnt);
        return {
          subProbNum: questionNum,
          //전체 문제에서의 문제번호
          subNum
          //주관식에서의 문제번호
        };
      }
    }
    StringToDom(string) {
      return new DOMParser().parseFromString(string, "text/html").body.firstChild;
    }
  };
  var PyThonMirror = class {
    #pyodide;
    constructor({ el, output, probText }) {
      this._permitLines = [3, 4, 5];
      this._probNum = 1;
      this.#pyodide = null;
      this.editor = CodeMirror.fromTextArea(el, {
        mode: {
          //name: "python-noprint",
          name: "python",
          version: 3,
          singleLineStringErrors: false
        },
        lineNumbers: true,
        indentUnit: 4,
        styleActiveLine: true,
        lint: true,
        matchBrackets: true,
        gutters: ["CodeMirror-lint-markers"]
      });
      this.output = output;
      this.errorOutput = output;
      this.editor.on("keydown", function(cm, event2) {
        if (event2.keyCode == 13) {
          return;
        }
      });
      this.editor.on("dragstart", () => event.preventDefault());
      this.editor.on("beforeChange", (cm, change) => this.BeforeChange(cm, change));
      this.editor.on("change", (cm, change) => {
        if (this.permitLines && this.permitLines.length === 0) {
          [...Array(cm.doc.size).keys()].forEach((one, idx) => {
            this.editor.removeLineClass(one, "wrap", "line-top");
            this.editor.removeLineClass(one, "wrap", "non-permit");
          });
        } else {
          [...Array(cm.doc.size).keys()].forEach((one, idx) => {
            this.editor.removeLineClass(one, "wrap", "line-top");
            this.editor.removeLineClass(one, "wrap", "non-permit");
            if (this.permitLines.includes(one)) {
              this.editor.addLineClass(one, "wrap", "line-top");
            } else {
              this.editor.addLineClass(one, "wrap", "non-permit");
            }
          });
        }
      });
    }
    BeforeChange(cm, change) {
      const { from, to, origin } = change;
      if (origin === "setValue")
        return;
      if (this.permitLines && this.permitLines.length === 0)
        return;
      if (from.line !== to.line || !this.permitLines.includes(from.line) || change.text.length > 1) {
        change.cancel();
      }
    }
    set addToOutput(buildResult) {
      const { result, data } = buildResult;
      if (result) {
        this.errorOutput.value = null;
      } else {
        this.output.value = null;
      }
      setTimeout(() => {
        if (pythonPrintData.length > 0) {
          pythonPrintData.forEach((print) => {
            this[`${result ? "output" : "errorOutput"}`].value += ">>>" + print + "\n";
          });
        }
        if (data) {
          this[`${result ? "output" : "errorOutput"}`].value += ">>>" + data + "\n";
        }
      }, 100);
    }
    set probNum(num) {
      this._probNum = num;
    }
    get probNum() {
      return this._probNum;
    }
    get permitLines() {
      return (() => this._permitLines)();
    }
    set permitLines(datas) {
      return this._permitLines = datas;
    }
  };
  var IndexDBed = class {
    constructor() {
      this.DB;
      this.CONNECTION = new JsStore.Connection(new Worker("/static/js/lib/jsstore.worker.min.js"));
    }
    async Init() {
      const defineDB = {
        name: "EXAM_DB",
        tables: [this.TableDefine({ tbName: "exam" }), this.TableDefine({ tbName: "questions" })]
      };
      this.DB = await this.CONNECTION.initDb(defineDB);
      if (this.DB) {
        console.log(`%c Db Created & connection is opened`, `color : blue`);
      } else {
        console.log(`%c Db Connection is opened`, `color : blue`);
      }
    }
    TableDefine({ tbName }) {
      const tableForm = {
        name: tbName,
        columns: {
          id: { primaryKey: true, autoIncrement: true }
        }
      };
      if (tbName === "exam") {
        tableForm["columns"]["examNm"] = { notNull: true, dataType: "string" };
        tableForm["columns"]["actionDate"] = { notNull: true, dataType: "string" };
      } else if (tbName == "questions") {
        tableForm["columns"]["answer"] = { notNull: false, dataType: "string" };
      }
      return tableForm;
    }
    async DataSelect(condition = null) {
      const query = {
        from: "questions"
      };
      if (condition) {
        query["where"] = { id: parseInt(condition) };
      }
      const result = await this.CONNECTION.select(query).catch((e2) => {
        console.error(e2);
        return [];
      });
      return result;
    }
  };
  var axios2 = require_axios();
  document.addEventListener("DOMContentLoaded", async () => {
    import_notiflix.default.Loading.hourglass("Python \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\uC785\uB2C8\uB2E4. \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824 \uC8FC\uC2ED\uC2DC\uC624.");
    const grpcAxios = new Axios({ type: "grpc", baseURL: "/restApi/deviceStatus" }).axiosInstn;
    const indexDBed = new IndexDBed();
    await indexDBed.Init();
    const results = await indexDBed.DataSelect();
    const examAnswerParamsProto = new import_exam_answer_pb.ExamAnswerParams();
    results.forEach((one, idx) => {
      const examAnswerProto = new import_exam_answer_pb.ExamAnswer();
      examAnswerProto.setId(one.id);
      examAnswerProto.setAnswer(one.answer);
      examAnswerParamsProto.addList(examAnswerProto);
    });
    const tttt = examAnswerParamsProto.serializeBinary();
    console.log(tttt);
    await grpcAxios.post("/insertExamAnswer", tttt, {
      responseType: "arraybuffer"
    }).then((result) => {
      const { flag, data } = result;
      console.log(result.data);
      console.log(import_exam_answer_pb.ExamAnswerParams.deserializeBinary(result.data).toObject());
    }).catch((e2) => console.error(e2)).finally(() => {
    });
    const params = {
      list: results
    };
    await axios2.post("/restApi/deviceStatus/jsonInsertExamAnswer", { params }).then((result) => {
      const { flag, data } = result;
      console.log(result.data);
    }).catch((e2) => console.error(e2)).finally(() => {
    });
    const pyThonMirror = new PyThonMirror({ el: document.getElementById("code"), output: document.getElementById(`output`) });
    document.getElementById(`pythonRun`).addEventListener("click", () => {
      pythonPrintData = [];
      PrintData(pyThonMirror);
    });
    const question = new Question({ question: exam_question_list, type: "m", cm: pyThonMirror, db: indexDBed });
    question.CreateQuestionWrap();
    if (results.length > 0) {
      results.forEach((one) => {
        const { id, answer: answer2 } = one;
        const probEl = document.getElementById(`questionWrap_${id}`);
        if (!probEl)
          return;
        probEl.childNodes.forEach((child) => {
          if (child.nodeType === 1 && answer2) {
            if (child.dataset.sampleNum == answer2) {
              child.classList.add("ex-samp-selected");
            }
          }
        });
      });
    }
    const pyodideInst = await loadPyodide({
      stdout: PrintData,
      stdin: (text) => {
        console.log(text);
        return text;
      }
    }).then(async (result) => {
      console.log("%c [ Python Module Load Success!!! ]", "color : green; font-size : 15px");
      import_notiflix.default.Loading.remove();
      return result;
    }).catch((err) => {
      import_notiflix.default.Loading.remove();
      import_notiflix.default.Report.info("\uC548\uB0B4", "Python \uBAA8\uB4C8 \uC2E4\uD589\uC5D0 \uC2E4\uD328\uD558\uC600\uC2B5\uB2C8\uB2E4.", "\uD655\uC778");
      console.log(err);
      console.log("%c Python Module Load Fail...", "color : red; font-size : 15px");
      return false;
    });
    function PrintData(e2) {
      if (typeof e2 !== "string") {
        if (!pyodideInst) {
          alert("\uD30C\uC774\uC36C \uBAA8\uB4C8 \uB85C\uB4DC \uC2E4\uD328");
          return;
        }
        try {
          e2.addToOutput = { result: true, data: pyodideInst.runPython(e2.editor.getValue()) };
        } catch (err) {
          e2.addToOutput = { result: false, data: err };
        }
      } else {
        pythonPrintData.push(e2);
      }
    }
    pyThonMirror.editor.on("changes", (e2, val) => {
    });
    pyThonMirror.editor.on("blur", async (e2, val) => {
      await indexDBed.CONNECTION.insert({
        into: "questions",
        upsert: true,
        values: [
          {
            id: parseInt(pyThonMirror.probNum),
            answer: pyThonMirror.editor.getValue()
          }
        ]
      });
    });
    question.question.filter((oneProb) => oneProb["questType"] === 3).forEach((one) => {
      const { probNum } = one;
      const btn = question.StringToDom(
        `<button type="button" name="subProbBtn" class="btn btn-secondary btn-lg p-3 m-2" data-sub-num=${probNum} style="display: none">${probNum}\uBC88 \uBB38\uC81C</button>`
      );
      btn.addEventListener("click", async (e2) => {
        const subNum = e2.target.dataset.subNum;
        console.log(`\uD074\uB9AD\uD55C \uC8FC\uAD00\uC2DD \uBC88\uD638 :: ${subNum}`);
        console.log(`\uC774\uC804 \uC8FC\uAD00\uC2DD \uBC88\uD638 :: ${pyThonMirror.probNum}`);
        console.log(pyThonMirror.editor.getValue());
        await indexDBed.CONNECTION.insert({
          into: "questions",
          upsert: true,
          values: [
            {
              id: parseInt(pyThonMirror.probNum),
              answer: pyThonMirror.editor.getValue()
            }
          ]
        });
        const results2 = await indexDBed.DataSelect(subNum);
        question.CreateSubjectiveQuestion(subNum);
        if (results2.length > 0) {
          if (results2[0]["answer"] != "") {
            pyThonMirror.editor.setValue(results2[0]["answer"]);
          }
        }
        pyThonMirror.probNum = subNum;
        document.getElementById("output").value = null;
      });
      $(document.getElementById("probBtn")).append(btn);
    });
    const answer = new Answer(exam_question_list);
    const tabEl = document.querySelectorAll('a[data-mdb-toggle="pill"]');
    tabEl.forEach(
      (oneTab) => oneTab.addEventListener("shown.mdb.tab", (e2) => {
        setTimeout(() => {
          TabCntr(e2);
        }, 300);
      })
    );
    async function TabCntr(event2) {
      if (event2.target.id === "ex-2-tab-1") {
      } else {
        Array.from(document.querySelectorAll(".ex-samp-selected")).map(async (oneProb) => {
          const { num, type, sampleNum } = oneProb.dataset;
          answer.answerStore = {
            prob: parseInt(num),
            answer: sampleNum
          };
          await indexDBed.CONNECTION.insert({
            into: "questions",
            upsert: true,
            values: [
              {
                id: parseInt(num),
                answer: sampleNum
              }
            ]
          });
        });
        const cc = document.querySelector("#allQuestionWrap_s");
        if (!cc.firstElementChild) {
          const firstSubProb = question.question.filter((oneProb) => oneProb["questType"] === 3).reduce((pre, now) => {
            return pre["probNum"] < now["probNum"] ? pre : now;
          });
          pyThonMirror.probNum = firstSubProb["probNum"];
          question.CreateSubjectiveQuestion(firstSubProb["probNum"]);
          const results2 = await indexDBed.DataSelect(firstSubProb["probNum"]);
          if (results2.length > 0) {
            pyThonMirror.editor.setValue(results2[0]["answer"]);
          }
          setTimeout(() => {
            pyThonMirror.editor.refresh();
          }, 300);
        }
        pyThonMirror.editor.focus();
        document.getElementsByName("subProbBtn").forEach((oneBtn) => oneBtn.style.display = "block");
      }
      console.log(event2.target.id);
      console.log(event2.relatedTarget.id);
    }
  });
})();
/*! Bundled license information:

moment/moment.js:
  (*! moment.js *)
  (*! version : 2.29.4 *)
  (*! authors : Tim Wood, Iskren Chernev, Moment.js contributors *)
  (*! license : MIT *)
  (*! momentjs.com *)
*/
//# sourceMappingURL=exam_grpc.js.map
