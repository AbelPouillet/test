const a0_0x3e5d=['message_event_threshold','value','humidity_highthreshold_overrun','decode_unsigned','slice','temperature_lowthreshold_overrun','time','push','readInt16BE','humidity_lowthreshold_overrun','temperature_highthreshold_overrun','temperature_lowthreshold_backtonormal','data','exports','../datalog_transmission/ebv','readUInt32BE','temperature_highthreshold_backtonormal','humidity_highthreshold_backtonormal'];(function(_0x3c639d,_0x3e5d64){const _0x1e94c=function(_0x17b9c3){while(--_0x17b9c3){_0x3c639d['push'](_0x3c639d['shift']());}};_0x1e94c(++_0x3e5d64);}(a0_0x3e5d,0x161));const a0_0x1e94=function(_0x3c639d,_0x3e5d64){_0x3c639d=_0x3c639d-0x0;let _0x1e94c=a0_0x3e5d[_0x3c639d];return _0x1e94c;};const ebv=require(a0_0x1e94('0x3')),alarmType=[[a0_0x1e94('0x5'),a0_0x1e94('0x11'),a0_0x1e94('0x0'),a0_0x1e94('0xc')],[a0_0x1e94('0x6'),a0_0x1e94('0x9'),'humidity_lowthreshold_backtonormal',a0_0x1e94('0x10')]];module[a0_0x1e94('0x2')]=_0x17c633=>{let _0x3e3972={'id':a0_0x1e94('0x7'),'events':[]},_0x4af797=_0x17c633['payload'],_0x3533cc=(_0x4af797[0x0]&0x1)+0x1,_0x247456=(_0x17c633['payload'][0x0]&0x80)!==0x0;_0x4af797=_0x4af797['slice'](0x1);let _0x21e9b8;!![]===_0x247456?(_0x21e9b8=_0x4af797[a0_0x1e94('0x4')](),_0x21e9b8+=0x50e22700,_0x21e9b8*=0x3e8,_0x4af797=_0x4af797[a0_0x1e94('0xb')](0x4)):_0x21e9b8=_0x17c633[a0_0x1e94('0xd')];for(let _0x2c5c11=0x0;_0x2c5c11<_0x3533cc;_0x2c5c11++){let _0x5afa12=_0x4af797[0x0]&0x1,_0x5ca48f=(_0x4af797[0x0]&0x30)>>0x4;_0x4af797=_0x4af797[a0_0x1e94('0xb')](0x1);let _0x3ef2de=ebv[a0_0x1e94('0xa')](_0x4af797),_0x8e3a8c=_0x3ef2de[a0_0x1e94('0x8')];_0x4af797=_0x3ef2de[a0_0x1e94('0x1')];let _0x46d7ad=_0x21e9b8-0x3e8*_0x8e3a8c,_0x36b3d0;0x1===_0x5afa12?(_0x36b3d0=_0x4af797[0x0],_0x4af797=_0x4af797[a0_0x1e94('0xb')](0x1)):(_0x36b3d0=_0x4af797[a0_0x1e94('0xf')]()/0x10,_0x4af797=_0x4af797[a0_0x1e94('0xb')](0x2)),_0x3e3972['events'][a0_0x1e94('0xe')]({'id':alarmType[_0x5afa12][_0x5ca48f],'value':_0x36b3d0,'timestamp':_0x46d7ad});}return _0x3e3972;};