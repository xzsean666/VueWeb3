// class WebRTC {
//     // lpeer: any;
//     // lchannel: any;
//     // rpeer: any;
//     // rchannel: any;

//     constructor() {
//         this.lpeer = new RTCPeerConnection()
        
//         this.lchannel = this.lpeer.createDataChannel('channel')
        
//         this.lchannel.onopen = () => console.log("open");
//         this.lchannel.onclose = () => console.log("close");
//         this.lchannel.onmessage = ({
//             data
//         }) => console.log(data);
        
//         // remote setting
//         this.rpeer = new RTCPeerConnection()
//         this.rpeer.onicecandidate = e => console.log(JSON.stringify(this.rpeer.localDescription));
//         this.rpeer.ondatachannel = ({
//             channel
//         }) => {
//             const recive = channel
//             recive.onopen = () => console.log("open");
//             recive.onclose = () => console.log("close");
//             recive.onmessage = ({
//                 data
//             }) => console.log(data);
//             this.rchannel = recive
//         }
//     }

//     async createOffer() {
//         const offer = await this.lpeer.createOffer();
//         this.lpeer.setLocalDescription(offer)        
//         return offer
//     }
//     async setAnswer(answer){
//         this.lpeer.setRemoteDescription(answer)
//     }
//     async joinChannel(offer) {
//         this.rpeer.setRemoteDescription(offer)
//         const answer = await this.rpeer.createAnswer()
//         this.rpeer.setLocalDescription(answer)
//         return answer       
//     }

// }



// class WebRTC {
//     // constructor(parameters) {
//     //     parameters   
//     // }
//     createPeer() {
//         const peer = new RTCPeerConnection()
//         return peer
//     }
//     async createDataChannel(channelName) {
//         const peer = this.createPeer()
//         peer.onicecandidate = e => console.log(JSON.stringify(peer.localDescription));
//         const channel = peer.createDataChannel(channelName)
//         const offer = await peer.createOffer();
//         peer.setLocalDescription(offer)        
//         return {channel,offer,peer}
//     }
//     async joinDataChannel(offer) {
//         const peer = this.createPeer()
//         peer.onicecandidate = e => console.log(JSON.stringify(peer.localDescription));
//         peer.setRemoteDescription(offer)
//         // const channel = new Promise<any>((resolve, reject) => {
//         //     peer.ondatachannel = ({
//         //         channel
//         //     }) => {
//         //         resolve(channel) 
//         //     }
//         // })
//         const answer = await peer.createAnswer()
//         peer.setLocalDescription(answer)
//         console.log(answer);
        
//         return {answer,peer}
         
//     }

// }


// peer.ondatachannel = ({
//     channel
// }) => {
//     const recive = channel
//     recive.onopen = () => console.log("open");
//     recive.onclose = () => console.log("close");
//     recive.onmessage = ({
//         data
//     }) => console.log(data);
 
// }
