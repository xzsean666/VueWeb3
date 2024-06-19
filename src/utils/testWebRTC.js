const servers = {
    iceServers: [{
        urls: ['stun:140.83.86.14:3478']
    }]
}
class WebRTC {
    constructor() {
        this.lpeer = new RTCPeerConnection(servers)
        this.lchannel = this.lpeer.createDataChannel('channel')
        this.lchannel.onopen = () => console.log("open");
        this.lchannel.onclose = () => console.log("close");
        this.lchannel.onmessage = ({
            data
        }) => console.log(data);

        // remote setting
        this.rpeer = new RTCPeerConnection(servers)
        this.rpeer.onicecandidate = e => {
            this.answer = this.rpeer.localDescription
            console.log(JSON.stringify(this.rpeer.currentLocalDescription))
        };
        this.rpeer.ondatachannel = ({
            channel
        }) => {
            const recive = channel
            recive.onopen = () => console.log("open");
            recive.onclose = () => console.log("close");
            recive.onmessage = ({
                data
            }) => console.log(data);
            this.channel = recive
            delete this.lchannel
            delete this.rchannel
        }
    }

    async createOffer() {
        const offer = await this.lpeer.createOffer();
        this.lpeer.setLocalDescription(offer)
        console.log(offer)
        this.channel = this.lchannel
        delete this.lchannel
        return offer
    }
    async setAnswer(answer) {
        this.lpeer.setRemoteDescription(answer)
    }
    async joinChannel(offer) {
        await this.rpeer.setRemoteDescription(offer)
        const answer = await this.rpeer.createAnswer()
        await this.rpeer.setLocalDescription(answer)
        return this.answer
    }
}

const wr = new WebRTC()

// stun:stun1.l.google.com:19302
// stun:stun2.l.google.com:19302
// stun:stun3.l.google.com:19302
// stun:stun4.l.google.com:19302
// stun:23.21.150.121
// stun:stun01.sipphone.com
// stun:stun.ekiga.net
// stun:stun.fwdnet.net
// stun:stun.ideasip.com
// stun:stun.iptel.org
// stun:stun.rixtelecom.se
// stun:stun.schlund.de
// stun:stunserver.org
// stun:stun.softjoys.com
// stun:stun.voiparound.com
// stun:stun.voipbuster.com
// stun:stun.voipstunt.com
// stun:stun.voxgratia.org
// stun:stun.xten.com