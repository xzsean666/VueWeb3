import CryptoJS from "crypto-js";
import Jwt from "jsonwebtoken";

class CryptoUtils {
    key: string
    constructor(key?: string) {
        this.key = this.initKey(key)
    }
    initKey(key: string | undefined) {
        if (key) {
            return key
        } else {
            return "0"
        }
    }
    generateMD5(message: string) {
        return CryptoJS.HmacMD5(message, this.key).toString()
    }
    generateSHA256(message: string) {
        return CryptoJS.HmacSHA256(message, this.key).toString()
    }
    encodeMessage(message: string) {
        const b64 = CryptoJS.AES.encrypt(message, this.key).toString();
        const e64 = CryptoJS.enc.Base64.parse(b64);
        const cipherText = e64.toString(CryptoJS.enc.Hex);
        // const ciphertext = CryptoJS.AES.encrypt(message,this.key)
        // const cipherString = ciphertext.toString(CryptoJS.format.Hex);
        // const ciphertext = CryptoJS.AES.encrypt(message,this.key).ciphertext.toString()
        // console.log(ciphertext)
        // const ciphertext = CryptoJS.AES.encrypt(message,this.key).toString(CryptoJS.format.Hex)
        // console.log(ciphertext1)
        return cipherText
    }
    decodeMessage(cipherText: string) {
        const reb64 = CryptoJS.enc.Hex.parse(cipherText);
        const bytes = reb64.toString(CryptoJS.enc.Base64);
        const decrypt = CryptoJS.AES.decrypt(bytes, this.key);
        const plain = decrypt.toString(CryptoJS.enc.Utf8);
        return plain;
        // const encryptedHex = CryptoJS.enc.Hex.parse(encryptedDataHexStr);
        // const encryptedBase64 = CryptoJS.enc.Base64.stringify(encryptedHex);
        // const decryptedData = CryptoJS.AES.decrypt(encryptedBase64, this.key, {
        //     mode: CryptoJS.mode.ECB,
        //     padding: CryptoJS.pad.Pkcs7,
        //   });
        // const decryptText = decryptedData.toString();
        // console.log(decryptedData);
        // console.log(decryptText);
        // console.log(decryptedData);
        // console.log(decryptedData);
        // const bytes  = CryptoJS.AES.decrypt(message, this.key);

        // const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        // return decryptText
        // const bytes = CryptoJS.AES.decrypt({ciphertext: CryptoJS.enc.Hex.parse(cypherString)},this.key, {format: CryptoJS.format.Hex});

        // return CryptoJS.AES.decrypt(CryptoJS.enc.Hex.parse(message) ,this.key).toString()
    }
    jwtEncode(payload: string | object | Buffer) {
        const result = Jwt.sign(payload, this.key.toString())
        return result
    }
    jwtDecode(payload: string) {
        try {
            return Jwt.verify(payload, this.key)
        } catch {
            return false
        }
    }
}

export {
    CryptoUtils
}