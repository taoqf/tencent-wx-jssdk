# tencent-wx-jssdk
Weixin [JS-SDK](https://mp.weixin.qq.com/wiki?t=resource/res_main&amp;id=mp1421141115)

# SDK Version

1.3.0

# Install

```sh
npm install tencent-wx-jssdk --save
# or
npm install tencent-wx-jssdk@v1_0_0 --save	# sdk version v1.0.0
npm install tencent-wx-jssdk@v1_1_0 --save	# sdk version v1.1.0
npm install tencent-wx-jssdk@v1_2_0 --save	# sdk version v1.2.0
```

# How to Use

## TypeScript

```ts
// sometime you want import this module, eg. use this with webpack
import { scanQRCode } from 'tencent-wx-jssdk';

scanQRCode({
	needResult: 0,
	scanType: ['qrCode'],
	success(res) {
		console.log(res);
	}
});
```

or, you could add this module in your tsconfig.json

```json
{
	"compilerOptions": {
		"types": [
			"tencent-wx-jssdk"
		]
	}
}
```

then use it freely.

```ts

// you may use wx
wx.scanQRCode({
	needResult: 0,
	scanType: ['qrCode'],
	success(res) {
		console.log(res);
	}
});
// or you can use `jWeixin` as well
jWeixin.scanQRCode({
	needResult: 0,
	scanType: ['qrCode'],
	success(res) {
		console.log(res);
	}
});

// sometimes you must use WeixinJSBridge, like wexin paying
WeixinJSBridge.invoke("getBrandWCPayRequest", {}, (res) => {
});
```

## javascript

**You will need this only if you would like get your project packed.**

```js
const wx = require('tencent-wx-jssdk');
wx.scanQRCode({
	needResult: 0,
	scanType: ['qrCode'],
	success(res) {
		console.log(res);
	}
});
```

# Others

## ts Error

If you get this Error:
`[ts] Initializers are not allowed in ambient contexts.`

Try add `"skipLibCheck": true` to `compilerOptions` in file `tsconfig.json`.

Good luck!
