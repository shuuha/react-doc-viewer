"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_pdf_1 = require("react-pdf");
var styled_components_1 = __importDefault(require("styled-components"));
var PDFPages_1 = __importDefault(require("./components/pages/PDFPages"));
var PDFControls_1 = __importDefault(require("./components/PDFControls"));
var state_1 = require("./state");
require("react-pdf/dist/esm/Page/AnnotationLayer.css");
require("react-pdf/dist/esm/Page/TextLayer.css");
react_pdf_1.pdfjs.GlobalWorkerOptions.workerSrc = "//unpkg.com/pdfjs-dist@".concat(react_pdf_1.pdfjs.version, "/build/pdf.worker.min.js");
var PDFRenderer = function (_a) {
    var mainState = _a.mainState;
    return (react_1.default.createElement(state_1.PDFProvider, { mainState: mainState },
        react_1.default.createElement(Container, { id: "pdf-renderer", "data-testid": "pdf-renderer" },
            react_1.default.createElement(PDFControls_1.default, null),
            react_1.default.createElement(PDFPages_1.default, null))));
};
exports.default = PDFRenderer;
PDFRenderer.fileTypes = ["pdf", "application/pdf"];
PDFRenderer.weight = 0;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n\n  /* width */\n  &::-webkit-scrollbar {\n    ", ";\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    /* background: ", "; */\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n\n  /* width */\n  &::-webkit-scrollbar {\n    ", ";\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    /* background: ", "; */\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"])), function (props) {
    return props.theme.disableThemeScrollbar ? "" : "width: 10px";
}, function (props) { return props.theme.secondary; }, function (props) { return props.theme.tertiary; }, function (props) { return props.theme.primary; });
var templateObject_1;
