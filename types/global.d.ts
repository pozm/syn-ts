import Line = Enum.VelocityConstraintMode.Line;
import Local = Enum.StudioScriptEditorColorCategories.Local;

declare function hookfunction<T,K>(func: T, hook: K): T;

declare type anyTable = {[key:string]:any};
declare type anyFn = (...args:any[])=>any

declare const enum SynRequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE",
    CONNECT = "CONNECT",
}
declare const enum synCryptoCustomCiphers {
    AESCBC = "aes-cbc",
    AESCFB = "aes-cfb",
    AESCTR = "aes-ctr",
    AESOFB = "aes-ofb",
    AESGCM = "aes-gcm",
    AESEAX = "aes-eax",

    BFCBC = "bf-cbc",
    BCCFB = "bf-cfb",
    BFOFB = "bf-ofb",

}
declare const enum synCryptoCustomHashAlgorithms {
    md5 = "md5",

    sha1 = "sha1",

    sha224 = "sha224",
    sha256 = "sha256",
    sha384 = "sha384",
    sha512 = "sha512",

    sha32256 = "sha3-256",
    sha33384 = "sha3-384",
    sha3512 = "sha3-512",

}

declare interface synRequestOptions {
    Url: string;
    Method?: SynRequestMethod;
    Headers?: { [key: string]: string } & synDefaultHeaders;
    Cookies?: { [key: string]: string };
    Body?: string;
}

declare interface synDefaultHeaders {
    "Syn-Fingerprint": string;
    "Syn-User-Identifier": string;
    "User-Agent": string;
}

declare interface synResponse {
   Success: boolean;
   StatusCode: number;
   StatusMessage: string;
   Headers: { [key: string]: string } & synDefaultHeaders;
   Cookies: { [key: string]: string };
   Body: string;
}
declare interface synCryptoBase64 {
    encode:(input: string)=> string;
    decode:(input: string)=> string;
}

declare interface synCryptoCustom {
    decrypt:(cipher:synCryptoCustomCiphers,data :string, key: string, nonce:string)=> string;
    encrypt:(cipher:synCryptoCustomCiphers,data :string, key: string, nonce:string)=> string;

    hash:(this:void,algorithm:synCryptoCustomHashAlgorithms, data:string)=> string;
}

declare interface synCrypto {
    encrypt:(data: string, key: string)=> string;
    decrypt:(data: string, key: string)=> string;
    base64: synCryptoBase64;
    hash:(data: string)=>string;
    derive:(value:string,length:number)=>string;
    random:(size:number)=>string;
    custom:synCryptoCustom

}
declare class Websocket {
    send(data: string): void;
    close(): void;
    OnMessage: RBXScriptSignal<(msg:string)=>void>;
    OnClose: RBXScriptSignal;
}

declare namespace syn {
    function cache_replace(obj:Instance, t_obj:Instance):void;
    function cache_invalidate(obj:Instance):void;

    function set_thread_identity(n:number):void;
    function get_thread_identity():number;

    function is_cached(obj:Instance):boolean;

    function write_clipboard(content:string):void;

    function queue_on_teleport(code:string):void;

    function protect_gui(GUI: GuiBase):void;
    function unprotect_gui(GUI: GuiBase):void;

    function is_beta():boolean;

    const crypto:synCrypto;

    function request(options:synRequestOptions):synResponse;

    function secure_call<K>(func: K,fakeEnv:{[x:string]:any} | LocalScript | ModuleScript):any;
    function secure_call<K>(func: K,fakeEnv:{[x:string]:any},...args: Parameters<K>):any;

    function create_secure_function(code:string):string;
    function run_secure_function(code:string):void;

    namespace websocket {
        const connect: (url:string)=>Websocket;
    }

    // const websocket:synWebsocket;

}

declare const enum DrawingTypes {
    Line="Line",
    Text="Text",
    Circle="Circle",
    Image="Image",
    Square="Square",
    Quad="Quad",
    Triangle="Triangle",
}

declare class Drawing {
    constructor(type:DrawingTypes)
    Text:string;
    Thickness:number;
    From:Vector2;
    To:Vector2;
    Size:number
    Center:boolean
    Outline:boolean
    OutlineColor3:Color3
    Position:Vector2
    readonly TextBounds:Vector2
    Font:Enum.Font
    Data:string
    Rounding:number
    NumSides:number
    Radius:number
    Filled:boolean
    PointA:Vector2
    PointB:Vector2
    PointC:Vector2
    PointD:Vector2
    Visible:boolean
    ZIndex:number
    Transparency:number
    Color:Color3
    Remove():void
}


declare namespace debug {
    function getconstants(fi:(...args:any[])=>any|number): { [key: string]: any };
    function getconstant(fi:(...args:any[])=>any|number,idx:number): number|boolean|null|string
    function setconstant(fi:(...args:any[])=>any|number,idx:number|string, value: number|boolean|null|string): void

    function getupvalues(fi:(...args:any[])=>any|number): { [key: string]: any };
    function getupvalue(fi:(...args:any[])=>any|number,idx:number): number|boolean|null|string
    function setupvalue(fi:(...args:any[])=>any|number,idx:number|string, value: {[key:string]:any}): void

    function getprotos(fi:(...args:any[])=>any): { [key: string]: any };
    function getproto(fi:(...args:any[])=>any|number,idx:number,activated?:boolean): (...args:any[])=>any|{[key:string]:any}
    function setproto(fi:(...args:any[])=>any,idx:number|string, replacement: (...args:any[])=>any): void


    function getstack(indice:number): {[key:string]:any}
    function setstack(indice:number,indice2:number,value:{[key:string]:any}): void

    function setmetatable(o:{[key:string]:any},mt:{[key:string]:any}): void

    function getregistry(): {[key:string]:any}

    function getinfo(fi:(...args:any[])=>any|number,w:string): {[key:string]:any}
}

declare class Connection {
    Function: anyFn;
    State: any
    Enable(): void;
    Disable(): void;
    Fire(): void;
}

declare function getgenv(): anyTable
declare function getrenv(): anyTable
declare function getreg(): anyTable
declare function getgc(include_tables:boolean): anyTable
declare function getinstances(): Instance[]
declare function getnilinstances(): Instance[]
declare function getscripts(): (ModuleScript | LocalScript)[]
declare function getloadedmodules(): ModuleScript[]

declare function getconnections(obj:RBXScriptSignal): Connection[]
declare function firesignal(obj:RBXScriptSignal, ...args: any[]): void
declare function fireclickdetector(obj:ClickDetector, distance:number): void
declare function fireproximityprompt(obj:ProximityPrompt, distance:number): void
declare function firetouchinterest(obj:Instance, distance:number): void
declare function isnetworkowner(obj:BasePart): boolean
declare function gethiddenproperty(obj:Instance, property:string): any
declare function sethiddenproperty(obj:Instance, property:string, value:any): void
declare function setsimulationradius(radius:number,max?:number): void

declare function getsenv(script:LocalScript|ModuleScript): anyTable
declare function getcallingscript(): LocalScript|ModuleScript
declare function getscriptclosure(script:LocalScript|ModuleScript): anyFn

declare function getscripthash(script:LocalScript|ModuleScript): string

declare function getrawmetatable(obj:anyTable): anyTable
declare function setrawmetatable(obj:anyTable, mt:anyTable): boolean
declare function setreadonly(obj:anyTable, readonly:boolean): void
declare function isreadonly(obj:anyTable): boolean

declare function iswindowactive(): boolean

declare function keypress(key:number): void
declare function keyrelease(key:number): void

declare function mouse1click(): void
declare function mouse1release(): void
declare function mouse1press(): void

declare function mouse2click(): void
declare function mouse2release(): void
declare function mouse2press(): void

declare function mousescroll(delta:number): void
declare function mousemoverel(x:number,y:number): void
declare function mousemoveabs(x:number,y:number): void

declare function hookmetamethod(obj:Instance, method:string, hook:anyFn): anyFn

declare function newcclosure<k>(fn:k): k

declare function checkcaller(): boolean
declare function islclosure(fn:anyFn): boolean
declare function dumpstring(str:string): string
declare function decompile(fn:anyFn | LocalScript | ModuleScript | string, mode: string | boolean, timeout?:number): string

declare function rconsoleprint(str:string): void
declare function rconsoleinfo(str:string): void
declare function rconsolewarn(str:string): void
declare function rconsoleerr(str:string): void
declare function rconsoleclear(): void
declare function rconsoleinput():void
declare function printconsole(str:string,red:number,green:number,blue:number ): void

declare function readfile(path:string): string
declare function writefile(path:string,data:string): void
declare function appendfile(path:string,data:string): void
declare function loadfile(path:string): [anyFn|number,string]
declare function listfiles(path:string): string[]
declare function isfile(path:string): boolean
declare function isfolder(path:string): boolean
declare function makefolder(path:string): void
declare function delfolder(path:string): void
declare function delfile(path:string): void

declare function setclipboard(str:string): void
declare function setfflag(flag:string,value:boolean): void
declare function getnamecallmethod(): string
declare function setnamecallmethod(method:string): void
declare function getsynasset(asset:string): string
declare function getspecialinfo(obj:Instance): anyTable

interface ISaveInstanceProp {
    mode : "optimized" | "full" | "scripts",
    noscripts : boolean,
    scriptcache : boolean,
    timeout : number,
}

declare function saveinstance(t:ISaveInstanceProp):void

declare const enum IMessageBoxFlags {
    OK,
    OKCANCEL,
    ABORTRETRYIGNORE,
    YESNOCANCEL,
    YESNO,
    RETRYCANCEL,
    CANCELTRYCONTINUE,
}

declare function messagebox(title:string,msg:string,flags:IMessageBoxFlags): number