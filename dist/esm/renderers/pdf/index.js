var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import { pdfjs } from "react-pdf";
import styled from "styled-components";
import PDFPages from "./components/pages/PDFPages";
import PDFControls from "./components/PDFControls";
import { PDFProvider } from "./state";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = "//unpkg.com/pdfjs-dist@".concat(pdfjs.version, "/build/pdf.worker.min.js");
var PDFRenderer = function (_a) {
    var mainState = _a.mainState;
    return (React.createElement(PDFProvider, { mainState: mainState },
        React.createElement(Container, { id: "pdf-renderer", "data-testid": "pdf-renderer" },
            React.createElement(PDFControls, null),
            React.createElement(PDFPages, null))));
};
export default PDFRenderer;
PDFRenderer.fileTypes = ["pdf", "application/pdf"];
PDFRenderer.weight = 0;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n\n  /* width */\n  &::-webkit-scrollbar {\n    ", ";\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    /* background: ", "; */\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n\n  /* width */\n  &::-webkit-scrollbar {\n    ", ";\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    /* background: ", "; */\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"])), function (props) {
    return props.theme.disableThemeScrollbar ? "" : "width: 10px";
}, function (props) { return props.theme.secondary; }, function (props) { return props.theme.tertiary; }, function (props) { return props.theme.primary; });
var templateObject_1;
