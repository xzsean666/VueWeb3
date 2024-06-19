//local setting
const local = new RTCPeerConnection()
local.onicecandidate = e => console.log(JSON.stringify(local.localDescription));
const lchannel = local.createDataChannel('channel')
lchannel.onopen = () => console.log("open");
lchannel.onclose = () => console.log("close");
lchannel.onmessage = ({
    data
}) => console.log(data);
local.createOffer().then(o => local.setLocalDescription(o))
// remote setting
const remote = new RTCPeerConnection()
remote.onicecandidate = e => console.log(JSON.stringify(remote.localDescription));
remote.ondatachannel = ({
    channel
}) => {
    const recive = channel
    recive.onopen = () => console.log("open");
    recive.onclose = () => console.log("close");
    recive.onmessage = ({
        data
    }) => console.log(data);
    remote.channel = recive
}

remote.setRemoteDescription()
remote.createAnswer().then(a => console.log(remote.setLocalDescription(a)))

local.setRemoteDescription()



// remote.channel.send("hi,from remote")
// lchannel.send("hi,from host")