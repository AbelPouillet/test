const a0_0x5c4f=['log_period,\x20log_tx_period,\x20log_tx_random_activation,redundancy_factor','low\x20threshold\x20untrigger\x20value','request_get_version','Start\x20event','WRITE\x20RESISTANCE\x20THRESHOLD','Log\x20period','resistance','push','lowthreshold_overrun_alarm2','unknown\x20prefix\x20for\x20this\x20firmwareType','GET\x20FW\x20VERSION','request_reset_battery_level','highthreshold_resistance_activation','ohm','SHIFT\x20LOG\x20TRANSMISSION','current','value','Redundancy\x20factor','log_tx_random_activation','lowthreshold_resistance_activation','Reading\x20period','Alarm\x20acked\x20on\x20any\x20downlink','measures','events','request_write_resistance_thresholds','minute','second','timestamp','high\x20threshold\x20trigger\x20value','UINT_32','unshift','high\x20threshold\x20overrun','RESET\x20BATTERY\x20LEVEL','1.3','log_period,\x20log_tx_shift','Freshness\x20alarm2','frameID','undecoded\x20payload','Resistance\x20alarm2','FPort','parameters','SenlabR','lowthreshold_untrigger_resistance','log_period','lowthreshold_trigger_resistance','start_event','reading_period','highthreshold_untrigger_resistance','backtonormal_overrun_alarm2','log_tx_period','Log\x20transmission\x20shift','indexOf','Resistance\x20alarm1','lowthreshold_overrun','low\x20threshold\x20resistance\x20activation','log_tx_shift','error','UINT_16','back\x20to\x20normal\x20alarm2','firmwareType','decode','BOOL','high\x20threshold\x20overrun\x20alarm2','highthreshold_overrun_alarm2','high\x20threshold\x20resistance\x20activation','UINT_8','resistance_alarm1','encode','request_write_reading_period','../encoder','Freshness\x20alarm1','Log\x20transmission\x20random\x20activation','../parser','high\x20threshold\x20untrigger\x20value','low\x20threshold\x20overrun'];(function(_0x89dd84,_0x5c4fa3){const _0x4d6800=function(_0x5b3309){while(--_0x5b3309){_0x89dd84['push'](_0x89dd84['shift']());}};_0x4d6800(++_0x5c4fa3);}(a0_0x5c4f,0x88));const a0_0x4d68=function(_0x89dd84,_0x5c4fa3){_0x89dd84=_0x89dd84-0x0;let _0x4d6800=a0_0x5c4f[_0x89dd84];return _0x4d6800;};const parser=require(a0_0x4d68('0xb')),encoder=require(a0_0x4d68('0x8')),knownPrefix=['0b','8b','81','89'];exports[a0_0x4d68('0x4a')]=function(_0x208a03){_0x208a03[a0_0x4d68('0x49')]=a0_0x4d68('0x37');let _0x4d3e85=parser(_0x208a03);if(_0x4d3e85[a0_0x4d68('0x46')])return _0x4d3e85;else{let _0x40602b={'id':_0x4d3e85['id'],'firmwareType':a0_0x4d68('0x37'),'measures':[],'parameters':[],'events':[]};if(_0x208a03[a0_0x4d68('0x35')]===0x2||_0x208a03[a0_0x4d68('0x35')]===0x3){if(-0x1<knownPrefix[a0_0x4d68('0x41')](_0x4d3e85['frameID']))for(let _0x17379f in _0x4d3e85['measures']){let _0x2d7f20=_0x4d3e85[a0_0x4d68('0x24')][_0x17379f];_0x2d7f20['id']?_0x40602b[a0_0x4d68('0x24')][a0_0x4d68('0x15')](_0x2d7f20):_0x40602b[a0_0x4d68('0x24')][a0_0x4d68('0x2c')]({'id':'resistance','timestamp':_0x2d7f20[a0_0x4d68('0x29')],'value':_0x2d7f20[a0_0x4d68('0x1e')]});}else return{'error':a0_0x4d68('0x33'),'reason':a0_0x4d68('0x17'),'prefix':_0x4d3e85[a0_0x4d68('0x32')],'port':_0x208a03[a0_0x4d68('0x35')]};}for(let _0x7caa4e in _0x4d3e85[a0_0x4d68('0x36')]){let _0x237479=_0x4d3e85[a0_0x4d68('0x36')][_0x7caa4e];_0x237479['id']&&_0x40602b['parameters']['push'](_0x237479);}for(let _0x1ad91f in _0x4d3e85[a0_0x4d68('0x25')]){let _0x3f658b=_0x4d3e85['events'][_0x1ad91f];_0x3f658b['id']&&_0x40602b[a0_0x4d68('0x25')][a0_0x4d68('0x15')](_0x3f658b);}return _0x40602b;}},exports[a0_0x4d68('0x6')]=function(_0x1369d2){return encoder(_0x1369d2);},exports['measures']=()=>[a0_0x4d68('0x1d')],exports['describe']=()=>({'id':a0_0x4d68('0x37'),'name':a0_0x4d68('0x37'),'version':a0_0x4d68('0x2f'),'parameters':[{'id':a0_0x4d68('0x39'),'name':a0_0x4d68('0x13'),'unit':a0_0x4d68('0x27'),'is':a0_0x4d68('0x47')},{'id':a0_0x4d68('0x3f'),'name':'Log\x20transmission\x20period','unit':a0_0x4d68('0x27'),'is':a0_0x4d68('0x47')},{'id':a0_0x4d68('0x20'),'name':a0_0x4d68('0xa'),'unit':null,'is':a0_0x4d68('0x0')},{'id':a0_0x4d68('0x45'),'name':a0_0x4d68('0x40'),'unit':'minute','is':a0_0x4d68('0x47')},{'id':'redundancy_factor','name':a0_0x4d68('0x1f'),'unit':null,'is':a0_0x4d68('0x4'),'value':'1'},{'id':a0_0x4d68('0x3c'),'name':a0_0x4d68('0x22'),'unit':a0_0x4d68('0x28'),'is':'UINT_16'},{'id':'ack_any_downlink','name':a0_0x4d68('0x23'),'unit':null,'is':a0_0x4d68('0x0')},{'id':a0_0x4d68('0x1a'),'name':a0_0x4d68('0x3'),'unit':null,'is':'BOOL'},{'id':'highthreshold_trigger_resistance','name':a0_0x4d68('0x2a'),'unit':'ohm','is':a0_0x4d68('0x47')},{'id':a0_0x4d68('0x3d'),'name':a0_0x4d68('0xc'),'unit':a0_0x4d68('0x1b'),'is':a0_0x4d68('0x47')},{'id':a0_0x4d68('0x21'),'name':a0_0x4d68('0x44'),'unit':null,'is':a0_0x4d68('0x0')},{'id':a0_0x4d68('0x3a'),'name':'low\x20threshold\x20trigger\x20value','unit':'ohm','is':a0_0x4d68('0x47')},{'id':a0_0x4d68('0x38'),'name':a0_0x4d68('0xf'),'unit':a0_0x4d68('0x1b'),'is':a0_0x4d68('0x47')}],'measures':[{'id':'battery_current_level','name':'Battery\x20current\x20level','unit':'%','is':a0_0x4d68('0x4')},{'id':a0_0x4d68('0x14'),'name':a0_0x4d68('0x14'),'unit':a0_0x4d68('0x1b'),'is':a0_0x4d68('0x2b')}],'events':[{'id':a0_0x4d68('0x3b'),'name':a0_0x4d68('0x11'),'unit':null,'is':a0_0x4d68('0x0')},{'id':'highthreshold_overrun','name':a0_0x4d68('0x2d'),'unit':null,'is':a0_0x4d68('0x0')},{'id':a0_0x4d68('0x43'),'name':a0_0x4d68('0xd'),'unit':null,'is':a0_0x4d68('0x0')},{'id':'backtonormal_overrun','name':'back\x20to\x20normal','unit':null,'is':a0_0x4d68('0x0')},{'id':'freshness_alarm1','name':a0_0x4d68('0x9'),'unit':a0_0x4d68('0x28'),'is':a0_0x4d68('0x2b')},{'id':a0_0x4d68('0x5'),'name':a0_0x4d68('0x42'),'unit':a0_0x4d68('0x1b'),'is':'UINT_32'},{'id':a0_0x4d68('0x2'),'name':a0_0x4d68('0x1'),'unit':null,'is':a0_0x4d68('0x0')},{'id':a0_0x4d68('0x16'),'name':'low\x20threshold\x20overrun\x20\x20alarm2','unit':null,'is':a0_0x4d68('0x0')},{'id':a0_0x4d68('0x3e'),'name':a0_0x4d68('0x48'),'unit':null,'is':a0_0x4d68('0x0')},{'id':'freshness_alarm2','name':a0_0x4d68('0x31'),'unit':a0_0x4d68('0x28'),'is':'UINT_32'},{'id':'resistance_alarm2','name':a0_0x4d68('0x34'),'unit':a0_0x4d68('0x1b'),'is':a0_0x4d68('0x2b')}],'operations':[{'id':'request_write_datalog_cfg','name':'WRITE\x20DATALOG\x20CFG','in':a0_0x4d68('0xe'),'out':null},{'id':a0_0x4d68('0x7'),'name':'WRITE\x20READING\x20PERIOD','in':a0_0x4d68('0x3c'),'out':null},{'id':a0_0x4d68('0x26'),'name':a0_0x4d68('0x12'),'in':'lowthreshold_resistance_activation,lowthreshold_trigger_resistance,lowthreshold_untrigger_resistance,highthreshold_resistance_activation,highthreshold_trigger_resistance,highthreshold_untrigger_resistance','out':null},{'id':'request_shift_log_tx','name':a0_0x4d68('0x1c'),'in':a0_0x4d68('0x30'),'out':null},{'id':a0_0x4d68('0x19'),'name':a0_0x4d68('0x2e'),'in':null,'out':null},{'id':'request_stop_application','name':'STOP\x20APPLICATION','in':null,'out':null},{'id':a0_0x4d68('0x10'),'name':a0_0x4d68('0x18'),'in':null,'out':null}]});