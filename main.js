const _0x5d1b18=_0x4dd2;(function(_0x3ef716,_0x56d32b){const _0x2e913e=_0x4dd2,_0x156130=_0x3ef716();while(!![]){try{const _0x2eabaa=parseInt(_0x2e913e(0x1ee))/0x1+-parseInt(_0x2e913e(0x20a))/0x2*(-parseInt(_0x2e913e(0x1d0))/0x3)+parseInt(_0x2e913e(0x1d3))/0x4*(-parseInt(_0x2e913e(0x1f1))/0x5)+-parseInt(_0x2e913e(0x227))/0x6*(parseInt(_0x2e913e(0x1d8))/0x7)+-parseInt(_0x2e913e(0x200))/0x8*(parseInt(_0x2e913e(0x202))/0x9)+parseInt(_0x2e913e(0x1f3))/0xa+parseInt(_0x2e913e(0x1fd))/0xb*(parseInt(_0x2e913e(0x1e9))/0xc);if(_0x2eabaa===_0x56d32b)break;else _0x156130['push'](_0x156130['shift']());}catch(_0x48d288){_0x156130['push'](_0x156130['shift']());}}}(_0x2c2d,0x6b0d5));const {WAConnection,MessageType,Presence,Mimetype,GroupSettingChange}=require(_0x5d1b18(0x20c)),fs=require('fs'),fetch=require(_0x5d1b18(0x1ec)),moment=require(_0x5d1b18(0x1ff)),{wait,banner,getBuffer,h2k,generateMessageID,getGroupAdmins,getRandom,start,info,success,close}=require('./lib/functions'),{color}=require(_0x5d1b18(0x20b)),_welkom=JSON[_0x5d1b18(0x1fe)](fs['readFileSync']('./database/welcome.json')),{uploadImages}=require(_0x5d1b18(0x221)),{OwnerNumber,BotName,OwnerName}=require(_0x5d1b18(0x21a)),{welkam,goodbye}=require(_0x5d1b18(0x21b)),sleep=async _0x2ffa46=>{return new Promise(_0x327a3e=>setTimeout(_0x327a3e,_0x2ffa46));};thumb=fs[_0x5d1b18(0x1d1)](_0x5d1b18(0x22b)),require(_0x5d1b18(0x224)),nocache(_0x5d1b18(0x224),_0x251cc3=>console[_0x5d1b18(0x1d9)](_0x251cc3+_0x5d1b18(0x1ef)));const starts=async(_0x487184=new WAConnection())=>{const _0x20472d=_0x5d1b18;_0x487184[_0x20472d(0x1fa)][_0x20472d(0x1f6)]=_0x20472d(0x1f5),_0x487184[_0x20472d(0x1e6)]=[0x2,0x85f,0x3],_0x487184[_0x20472d(0x229)]=[_0x20472d(0x1f2),_0x20472d(0x1dc),_0x20472d(0x210)],_0x487184['on']('qr',()=>{const _0x55efcf=_0x20472d;console['log'](color('[','white'),color('!',_0x55efcf(0x22c)),color(']',_0x55efcf(0x217)),color(_0x55efcf(0x205)));});const _0x120899=async(_0x500bb9,_0xb64f24,_0x5f02fc,_0x105f79,_0x2e9349)=>{const _0x3233bc=_0x20472d;gam=_0x105f79,jadinya=await _0x487184[_0x3233bc(0x1eb)](_0x500bb9,gam,MessageType[_0x3233bc(0x1db)]),buttonMessagesI={'imageMessage':jadinya[_0x3233bc(0x1d4)][_0x3233bc(0x222)],'contentText':_0xb64f24,'footerText':_0x5f02fc,'buttons':_0x2e9349,'headerType':0x4},_0x487184[_0x3233bc(0x1f7)](_0x500bb9,buttonMessagesI,MessageType[_0x3233bc(0x220)]);};fs['existsSync']('./QrRyuu.json')&&_0x487184[_0x20472d(0x22a)]('./QrRyuu.json'),_0x487184['on'](_0x20472d(0x206),()=>{const _0x5a22bb=_0x20472d;start('2',_0x5a22bb(0x215));}),_0x487184['on']('open',()=>{const _0x10eaa9=_0x20472d;success('2',_0x10eaa9(0x228)),_0x487184[_0x10eaa9(0x1f7)](OwnerNumber+_0x10eaa9(0x1e8),_0x10eaa9(0x213)+BotName+_0x10eaa9(0x204),MessageType['text'],{'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':'Developer\x20Bot','body':'','previewType':_0x10eaa9(0x21f),'thumbnail':fs[_0x10eaa9(0x1d1)](_0x10eaa9(0x22b)),'sourceUrl':'https://wa.me/6283891921787?text=Assalamualaikum'}}});}),await _0x487184[_0x20472d(0x21d)]({'timeoutMs':0x1e*0x3e8}),fs[_0x20472d(0x1dd)](_0x20472d(0x1f4),JSON[_0x20472d(0x1d2)](_0x487184[_0x20472d(0x223)](),null,'\x09')),teks='https://chat.whatsapp.com/BhOYdoWNRFC4n4bdsEexlV',_0x487184[_0x20472d(0x226)]({'json':['action',_0x20472d(0x218),''+teks['replace'](_0x20472d(0x22e),'')]}),console[_0x20472d(0x1d9)](color(_0x20472d(0x209),_0x20472d(0x219)),color(_0x20472d(0x1ce),_0x20472d(0x219))),_0x487184['on'](_0x20472d(0x230),async _0x2eab3e=>{const _0xf92701=_0x20472d;require(_0xf92701(0x224))(_0x487184,_0x2eab3e,_welkom);}),_0x487184['on'](_0x20472d(0x1f9),async _0x4e8ea2=>{const _0x28a806=_0x20472d,_0x9f7138=_welkom['includes'](_0x4e8ea2[_0x28a806(0x208)]);try{groupMet=await _0x487184[_0x28a806(0x203)](_0x4e8ea2[_0x28a806(0x208)]),groupMembers=groupMet[_0x28a806(0x225)],groupAdmins=getGroupAdmins(groupMembers),mem=_0x4e8ea2[_0x28a806(0x225)][0x0],console['log'](_0x4e8ea2);try{pp_user=await _0x487184[_0x28a806(0x211)](mem);}catch(_0x5351e1){pp_user='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';}try{pp_grup=await _0x487184[_0x28a806(0x211)](_0x4e8ea2[_0x28a806(0x208)]);}catch(_0x1bee18){pp_grup=_0x28a806(0x1ed);}_0x4e8ea2[_0x28a806(0x201)]==_0x28a806(0x22f)&&mem[_0x28a806(0x1d6)](_0x487184['user'][_0x28a806(0x208)])&&_0x487184[_0x28a806(0x1f7)](_0x4e8ea2[_0x28a806(0x208)],_0x28a806(0x216),'conversation');let _0x37b7cf=await getBuffer(pp_user),_0xba1e27=await uploadImages(_0x37b7cf),_0x48845b=await getBuffer(pp_grup),_0x2daa36=await uploadImages(_0x48845b);if(!_0x9f7138)return;if(_0x4e8ea2[_0x28a806(0x201)]=='add'){num=_0x4e8ea2[_0x28a806(0x225)][0x0],mdata=await _0x487184[_0x28a806(0x203)](_0x4e8ea2[_0x28a806(0x208)]),memeg=mdata[_0x28a806(0x225)][_0x28a806(0x207)];let _0x41f5ae=_0x487184[_0x28a806(0x1e2)][num]||{'notify':num['replace'](/@.+/,'')};anu_user=_0x41f5ae[_0x28a806(0x20e)]||_0x41f5ae['notify']||num[_0x28a806(0x1fb)]('@')[0x0],time_wel=moment['tz'](_0x28a806(0x1e3))[_0x28a806(0x21e)](_0x28a806(0x1e0));try{ppimg=await _0x487184[_0x28a806(0x211)](_0x4e8ea2[_0x28a806(0x225)][0x0][_0x28a806(0x1fb)]('@')[0x0]+'@c.us');}catch{ppimg=_0x28a806(0x1e1);}image=await getBuffer(_0x28a806(0x1cf)+anu_user+_0x28a806(0x1da)+memeg+_0x28a806(0x22d)+encodeURIComponent(mdata[_0x28a806(0x1fc)])+_0x28a806(0x1ea)+_0xba1e27+_0x28a806(0x21c)+_0x2daa36+_0x28a806(0x20f)),teks=_0x28a806(0x212)+num[_0x28a806(0x1fb)]('@')[0x0]+'*\x0a𝗦𝗲𝗹𝗮𝗺𝗮𝘁\x20𝗗𝗮𝘁𝗮𝗻𝗴\x20𝗗𝗶\x20𝗚𝗿𝗼𝘂𝗽\x20'+mdata[_0x28a806(0x1fc)]+'\x0a\x0a',but=[{'buttonId':'.welcomedekkk','buttonText':{'displayText':_0x28a806(0x214)},'type':0x1}];let _0x4f028e=await getBuffer(ppimg);_0x120899(mdata['id'],teks+welkam(),_0x28a806(0x1f0)+mdata['subject']+'*',image,but);}else{if(_0x4e8ea2['action']==_0x28a806(0x1df)){num=_0x4e8ea2[_0x28a806(0x225)][0x0],mdata=await _0x487184[_0x28a806(0x203)](_0x4e8ea2[_0x28a806(0x208)]),memeg=mdata['participants'][_0x28a806(0x207)];let _0x563886=_0x487184['contacts'][num]||{'notify':num[_0x28a806(0x1e5)](/@.+/,'')};anu_user=_0x563886[_0x28a806(0x20e)]||_0x563886[_0x28a806(0x1e7)]||num[_0x28a806(0x1fb)]('@')[0x0],time_wel=moment['tz'](_0x28a806(0x1e3))[_0x28a806(0x21e)](_0x28a806(0x1e0));try{ppimg=await _0x487184['getProfilePicture'](num[_0x28a806(0x1fb)]('@')[0x0]+_0x28a806(0x20d));}catch{ppimg=_0x28a806(0x1e1);}imagee=await getBuffer(_0x28a806(0x1d7)+anu_user+_0x28a806(0x1da)+memeg+_0x28a806(0x22d)+encodeURIComponent(mdata[_0x28a806(0x1fc)])+_0x28a806(0x1ea)+_0xba1e27+_0x28a806(0x21c)+_0x2daa36+_0x28a806(0x20f)),tekss='𝗬𝗮𝗵𝗵\x20𝗦𝗶\x20*@'+num['split']('@')[0x0]+'*\x20𝗞𝗲𝗹𝘂𝗮𝗿\x0a\x0a',butt=[{'buttonId':'.remove','buttonText':{'displayText':'GOODBYE\x20👋'},'type':0x1}];let _0x412af4=await getBuffer(ppimg);_0x120899(mdata['id'],tekss+goodbye(),_0x28a806(0x1f0)+mdata[_0x28a806(0x1fc)]+'*',imagee,butt);}}}catch(_0x18b7c0){console['log'](_0x28a806(0x1f8),color(_0x18b7c0,'red'));}});};function _0x4dd2(_0xfd1450,_0xe35422){const _0x2c2dbc=_0x2c2d();return _0x4dd2=function(_0x4dd243,_0x2065c6){_0x4dd243=_0x4dd243-0x1ce;let _0x363a5e=_0x2c2dbc[_0x4dd243];return _0x363a5e;},_0x4dd2(_0xfd1450,_0xe35422);}function nocache(_0x504dba,_0x5ba963=()=>{}){const _0x254c61=_0x5d1b18;console['log'](_0x254c61(0x1e4),'\x27'+_0x504dba+'\x27','sekarang\x20sedang\x20diawasi\x20untuk\x20perubahan'),fs[_0x254c61(0x1d5)](require[_0x254c61(0x1de)](_0x504dba),async()=>{const _0x17cb29=_0x254c61;await uncache(require[_0x17cb29(0x1de)](_0x504dba)),_0x5ba963(_0x504dba);});}function _0x2c2d(){const _0x1856df=['format','PHOTO','buttonsMessage','./lib/uploadimage','imageMessage','base64EncodedAuthInfo','./Ryuu.js','participants','query','12qEKbkV','Bot\x20Sudah\x20Terhububung,\x20Selamat\x20Memakai\x20Bot','browserDescription','loadAuthInfo','./media/thumb.jpg','red','&gcname=','https://chat.whatsapp.com/','add','chat-update','BOT\x20MEMASUKI\x20GROUP\x20•\x20Ryuuka\x20Botz\x20Official\x20•','https://ryuu-apii.herokuapp.com/api/creator/Welcome3?username=','3pNpizY','readFileSync','stringify','4ppVHqx','message','watchFile','includes','https://ryuu-apii.herokuapp.com/api/creator/goodbye3?username=','1850135uOZUmr','log','&memberCount=','image','Safari','writeFileSync','resolve','remove','HH:mm','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','contacts','Asia/Jakarta','Module','replace','version','notify','@s.whatsapp.net','12GWMItx','&bg=https://telegra.ph/file/bf8079fc05fcc8b51cf32.jpg&pp=','prepareMessage','node-fetch','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','375842NzjeiD','\x20telah\x20di\x20update!','*©\x20Whatsapp\x20|\x20','2507525hYZREL','RyuBotz','5856880HKOWpf','./QrRyuu.json','warn','level','sendMessage','Error\x20:\x20%s','group-participants-update','logger','split','subject','7709097kOiCPn','parse','moment-timezone','664dYlidf','action','62001uPRvQK','groupMetadata','\x20👋*\x0a\x0aBot\x20Sekarang\x20Sudah\x20Tersambung\x20Dan\x20Siap\x20Untuk\x20Dipakai\x20🤙😉\x0a\x0aJika\x20Terjadi\x20Emror\x20Hubungi\x20Developer\x0a\x0aJangan\x20Lupa\x20Ucapkan\x20Terima\x20Kasih\x20Kepada\x20Developer\x20Bot\x20Serta\x20Jangan\x20Lupa\x20Subrek\x20Youtube\x20Ryuuka\x20Botz','\x20Scan\x20Qrnya\x20Kak\x20Waktu\x20Cuma\x2020\x20Detik\x20!!','connecting','length','jid','[\x20WARN\x20]','756060mGzWIq','./lib/color','@adiwajshing/baileys','@c.us','vname','&apikey=RyuBotz','3.0','getProfilePicture','𝗛𝗮𝗹𝗼\x20𝗞𝗮𝗸\x20*@','*Halo\x20Owner\x20','WELCOME\x20👋','Menghubungkan\x20...','```Haloo\x20Semua\x20👋\x20Terima\x20Kasih\x20sudah\x20Mengundangku,\x20Jika\x20ingin\x20Menggunakan\x20Bot\x20Ketik\x20.menu```','white','invite','yellow','./setting.json','./lib/welkam.js','&gcicon=','connect'];_0x2c2d=function(){return _0x1856df;};return _0x2c2d();}function uncache(_0x1aa8d5='.'){return new Promise((_0x515f48,_0x6ad714)=>{try{delete require['cache'][require['resolve'](_0x1aa8d5)],_0x515f48();}catch(_0x57886d){_0x6ad714(_0x57886d);}});}starts();