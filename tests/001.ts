import { scanQRCode } from 'tencent-wx-jssdk';

scanQRCode({
	needResult: 0,
	scanType: ['qrCode'],
	success(res) {
		console.log(res);
	}
});

wx.scanQRCode({
	needResult: 0,
	scanType: ['qrCode'],
	success(res) {
		console.log(res);
	}
});

jWeixin.scanQRCode({
	needResult: 0,
	scanType: ['qrCode'],
	success(res) {
		console.log(res);
	}
});

WeixinJSBridge.invoke("getBrandWCPayRequest", {}, (res) => {
});
