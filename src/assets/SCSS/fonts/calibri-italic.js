﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('calibri-italic.ttf', font);
this.addFont('calibri-italic.ttf', 'calibri', 'italic');
};
jsPDF.API.events.push(['addFonts', callAddFont])