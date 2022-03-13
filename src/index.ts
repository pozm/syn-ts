import {CollectionService, Players} from "@rbxts/services";

let pog = hookfunction(os.date,(...args:Parameters<typeof os.date>)=>{
	warn("not poggers!")
	return pog(...args);
})

let ws = syn.websocket.connect("");

ws.send("poggers")
ws.OnMessage.Connect(function(msg){
	warn(msg)
})
ws.OnClose.Connect(function(){
	warn("ws closed")
})

ws.close()


syn.crypto.custom.hash(synCryptoCustomHashAlgorithms.sha256, "poggers");

let drawing = new Drawing(DrawingTypes.Line);

drawing.From = new Vector2(0,0);
drawing.To = new Vector2(1,1);
drawing.Visible = true;
drawing.Thickness = 1;

wait(5)

drawing.Remove()