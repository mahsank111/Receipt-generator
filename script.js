var receiptID = "20180613T130518.512Z";
var receiptQRID = "4#4s1Fs"

JsBarcode("#barcode", receiptID, {
  format: "code128",
  width: 1.3,
  height: 30,
  marginLeft: 0,
  displayValue: false
});

var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "https://gg.bronyhouse.com/r/"+receiptQRID,
	colorDark : "#000000",
	colorLight : "#ffffff",
  width : 100,
  height : 100,
	correctLevel : QRCode.CorrectLevel.H,
});