/*
飞天茅台预约
自动预约茅台 执行时间大家自己改下
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#飞天茅台预约
0 5 10,12,16 * * * https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js, tag=飞天茅台预约, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 5 10,12,16 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js,tag=飞天茅台预约
===================================Surge================================
飞天茅台预约 = type=cron,cronexp="0 5 10,12,16 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js
====================================小火箭=============================
飞天茅台预约 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_ftmtyy.js, cronexpr="0 5 10,12,16 * * *", timeout=3600, enable=true
 */
const $ = new Env('飞天茅台预约');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxdd37b=["\x73\x66\x79\x78","\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68","\x69\x73\x4E\x6F\x64\x65","\x2E\x2F\x71\x6C\x32\x31\x32\x37\x39\x36\x36\x36\x38\x2E\x6A\x73","","\x5C\x6E\x5C\x6E\u6211\u89C9\u5F97\u4F60\u6CA1\u62C9\u6211\u4ED3\u5E93\uFF0C\u811A\u672C\u4E0D\u6267\u884C\u4E86\x5C\x6E\x5C\x6E","\x6C\x6F\x67","\x0A\u62C9\u4ED3\u5E93\u52A0\x51\x51\u7FA4\uFF1A\x32\x31\x32\x37\x39\x36\x36\x36\x38\x20\uFF0C\u770B\u7FA4\u516C\u544A\x0A","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x30","\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72","\x67\x65\x74\x4D\x6F\x6E\x74\x68","\x67\x65\x74\x44\x61\x74\x65","\x67\x65\x74\x48\x6F\x75\x72\x73","\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\u5BF9\u4E0D\u8D77\uFF0C\u811A\u672C\u5DF2\u8FC7\u671F\uFF1B\u8BF7\u6DFB\u52A0\x51\x51\u7FA4\uFF1A\x32\x31\x32\x37\x39\x36\x36\x36\x38\x20\u83B7\u53D6\u6700\u65B0\u811A\u672C","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x5C\x6E\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x5C\x6E","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x74\x68\x65\x6E","\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x61\x70\x70\x6F\x69\x6E\x74\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x30\x2E\x33\x2E\x30\x26\x62\x75\x69\x6C\x64\x3D\x39\x31\x37\x39\x35\x26\x63\x6C\x69\x65\x6E\x74\x3D\x61\x6E\x64\x72\x6F\x69\x64\x26\x70\x61\x72\x74\x6E\x65\x72\x3D\x74\x65\x6E\x63\x65\x6E\x74\x26\x6F\x61\x69\x64\x3D\x30\x36\x61\x64\x31\x65\x62\x37\x38\x35\x62\x35\x34\x61\x33\x37\x26\x65\x69\x64\x3D\x65\x69\x64\x41\x36\x31\x39\x62\x38\x31\x32\x33\x66\x66\x73\x39\x7A\x56\x6E\x70\x6C\x61\x6F\x51\x53\x46\x69\x52\x64\x52\x73\x49\x62\x41\x73\x4C\x4A\x73\x31\x5A\x36\x77\x2F\x51\x75\x59\x68\x67\x30\x73\x6D\x59\x6B\x64\x4F\x46\x37\x59\x79\x4C\x51\x79\x78\x78\x6F\x51\x75\x68\x54\x57\x56\x54\x6E\x71\x47\x50\x7A\x42\x65\x56\x2F\x63\x61\x50\x4E\x77\x71\x42\x57\x67\x5A\x53\x49\x64\x6B\x6D\x5A\x64\x63\x6F\x71\x52\x4D\x6B\x43\x5A\x47\x59\x39\x4F\x38\x42\x45\x46\x52\x50\x26\x73\x64\x6B\x56\x65\x72\x73\x69\x6F\x6E\x3D\x33\x30\x26\x6C\x61\x6E\x67\x3D\x7A\x68\x5F\x43\x4E\x26\x68\x61\x72\x6D\x6F\x6E\x79\x4F\x73\x3D\x30\x26\x6E\x65\x74\x77\x6F\x72\x6B\x54\x79\x70\x65\x3D\x55\x4E\x4B\x4E\x4F\x57\x4E\x26\x75\x74\x73\x3D\x30\x66\x33\x31\x54\x56\x52\x6A\x42\x53\x73\x71\x6E\x64\x75\x34\x25\x32\x46\x6A\x67\x55\x50\x7A\x36\x75\x79\x6D\x79\x35\x30\x4D\x51\x4A\x42\x44\x51\x6A\x7A\x41\x47\x25\x32\x46\x36\x35\x6D\x4B\x70\x61\x67\x46\x4A\x52\x51\x49\x41\x59\x79\x68\x50\x75\x76\x4E\x44\x43\x25\x32\x42\x68\x4A\x47\x61\x70\x61\x47\x4C\x71\x73\x31\x74\x57\x74\x52\x31\x43\x4A\x35\x47\x70\x65\x5A\x6F\x52\x35\x49\x6E\x6F\x54\x59\x50\x61\x77\x36\x70\x63\x36\x73\x44\x30\x49\x58\x6D\x6B\x42\x4C\x39\x71\x58\x77\x63\x75\x4E\x57\x79\x55\x45\x35\x66\x49\x78\x76\x4A\x4C\x4D\x52\x55\x75\x54\x6F\x72\x71\x56\x45\x36\x74\x76\x52\x68\x66\x74\x7A\x45\x31\x35\x76\x71\x6B\x51\x31\x49\x77\x30\x74\x59\x36\x48\x58\x25\x32\x46\x51\x38\x4E\x68\x62\x35\x68\x78\x6D\x55\x44\x78\x73\x25\x32\x42\x38\x44\x51\x61\x6F\x4E\x55\x4E\x45\x4B\x74\x6E\x49\x58\x47\x59\x56\x25\x32\x46\x30\x4A\x63\x51\x46\x59\x6A\x45\x6F\x59\x59\x43\x77\x78\x62\x62\x77\x37\x67\x25\x33\x44\x25\x33\x44\x26\x75\x65\x6D\x70\x73\x3D\x30\x2D\x30\x26\x65\x78\x74\x3D\x25\x37\x42\x25\x32\x32\x70\x72\x73\x74\x61\x74\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x37\x44\x26\x65\x66\x3D\x31\x26\x65\x70\x3D\x25\x37\x42\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4A\x4D\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6C\x76\x4D\x49\x70\x59\x50\x6F\x6B\x30\x74\x74\x35\x6B\x39\x6B\x57\x34\x41\x72\x4A\x45\x55\x33\x6C\x66\x4C\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x34\x31\x32\x39\x35\x38\x32\x32\x33\x37\x39\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2D\x31\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x61\x72\x65\x61\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4A\x56\x70\x43\x4A\x53\x6E\x43\x31\x38\x7A\x44\x4E\x4F\x6D\x58\x7A\x63\x6E\x44\x7A\x4F\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x64\x5F\x6D\x6F\x64\x65\x6C\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4A\x4A\x53\x6E\x43\x4E\x54\x42\x43\x55\x50\x4E\x25\x32\x32\x25\x32\x43\x25\x32\x32\x77\x69\x66\x69\x42\x73\x73\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x64\x57\x35\x68\x62\x77\x39\x33\x62\x71\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6F\x73\x56\x65\x72\x73\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4A\x4F\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x64\x5F\x62\x72\x61\x6E\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x57\x51\x76\x72\x62\x32\x31\x66\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x63\x72\x65\x65\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x7A\x4B\x6D\x44\x79\x65\x6E\x44\x4E\x47\x6D\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x5A\x77\x59\x32\x43\x51\x4F\x7A\x45\x4E\x64\x77\x44\x77\x54\x72\x45\x4E\x75\x6D\x44\x4B\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x5A\x77\x59\x32\x43\x51\x4F\x7A\x45\x4E\x64\x77\x44\x77\x54\x72\x45\x4E\x75\x6D\x44\x4B\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6F\x70\x65\x6E\x75\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x5A\x77\x59\x32\x43\x51\x4F\x7A\x45\x4E\x64\x77\x44\x77\x54\x72\x45\x4E\x75\x6D\x44\x4B\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2E\x32\x2E\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6E\x61\x6D\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6F\x6D\x2E\x6A\x69\x6E\x67\x64\x6F\x6E\x67\x2E\x61\x70\x70\x2E\x6D\x61\x6C\x6C\x25\x32\x32\x25\x37\x44\x26\x73\x74\x3D\x31\x36\x34\x31\x32\x39\x35\x38\x37\x30\x39\x32\x36\x26\x73\x69\x67\x6E\x3D\x65\x33\x64\x64\x33\x61\x32\x66\x36\x31\x32\x37\x63\x65\x64\x33\x32\x30\x39\x32\x34\x65\x33\x34\x63\x38\x38\x34\x65\x38\x63\x63\x26\x73\x76\x3D\x31\x32\x32","\x77\x68\x77\x73\x77\x73\x77\x77\x73\x3D\x4A\x44\x30\x31\x32\x31\x34\x35\x62\x39\x36\x44\x32\x34\x44\x35\x47\x4A\x5A\x71\x31\x36\x34\x31\x32\x39\x35\x38\x32\x37\x36\x37\x39\x30\x35\x35\x73\x61\x74\x31\x78\x48\x44\x4C\x70\x36\x55\x74\x48\x4C\x6D\x42\x32\x56\x49\x76\x72\x77\x45\x45\x4B\x68\x56\x63\x66\x77\x73\x4C\x4C\x5A\x43\x62\x64\x68\x6B\x43\x4E\x6B\x31\x71\x31\x63\x76\x62\x79\x7E\x6A\x63\x59\x66\x54\x59\x6C\x68\x74\x72\x53\x6A\x59\x34\x34\x79\x39\x6D\x32\x2B\x58\x76\x44\x49\x41\x4D\x37\x7A\x65\x41\x6B\x58\x50\x50\x57\x6E\x5A\x66\x52\x6C\x48\x78\x34\x59\x4E\x38\x71\x36\x54\x32\x66\x6D\x65\x72\x2B\x57\x4A\x56\x75\x70\x6D\x36\x52\x72\x66\x38\x71\x53\x6F\x47\x38\x41\x59\x76\x75\x39\x38\x56\x38\x72\x7A\x6E\x68\x44\x4C\x6E\x67\x3D\x3D\x3B\x75\x6E\x69\x6F\x6E\x77\x73\x77\x73\x3D\x7B\x22\x64\x65\x76\x69\x63\x65\x66\x69\x6E\x67\x65\x72\x22\x3A\x22\x65\x69\x64\x41\x36\x31\x39\x62\x38\x31\x32\x33\x66\x66\x73\x39\x7A\x56\x6E\x70\x6C\x61\x6F\x51\x53\x46\x69\x52\x64\x52\x73\x49\x62\x41\x73\x4C\x4A\x73\x31\x5A\x36\x77\x2F\x51\x75\x59\x68\x67\x30\x73\x6D\x59\x6B\x64\x4F\x46\x37\x59\x79\x4C\x51\x79\x78\x78\x6F\x51\x75\x68\x54\x57\x56\x54\x6E\x71\x47\x50\x7A\x42\x65\x56\x2F\x63\x61\x50\x4E\x77\x71\x42\x57\x67\x5A\x53\x49\x64\x6B\x6D\x5A\x64\x63\x6F\x71\x52\x4D\x6B\x43\x5A\x47\x59\x39\x4F\x38\x42\x45\x46\x52\x50\x22\x2C\x22\x6A\x6D\x61\x66\x69\x6E\x67\x65\x72\x22\x3A\x22\x4A\x44\x30\x31\x32\x31\x34\x35\x62\x39\x36\x44\x32\x34\x44\x35\x47\x4A\x5A\x71\x31\x36\x34\x31\x32\x39\x35\x38\x32\x37\x36\x37\x39\x30\x35\x35\x73\x61\x74\x31\x78\x48\x44\x4C\x70\x36\x55\x74\x48\x4C\x6D\x42\x32\x56\x49\x76\x72\x77\x45\x45\x4B\x68\x56\x63\x66\x77\x73\x4C\x4C\x5A\x43\x62\x64\x68\x6B\x43\x4E\x6B\x31\x71\x31\x63\x76\x62\x79\x7E\x6A\x63\x59\x66\x54\x59\x6C\x68\x74\x72\x53\x6A\x59\x34\x34\x79\x39\x6D\x32\x2B\x58\x76\x44\x49\x41\x4D\x37\x7A\x65\x41\x6B\x58\x50\x50\x57\x6E\x5A\x66\x52\x6C\x48\x78\x34\x59\x4E\x38\x71\x36\x54\x32\x66\x6D\x65\x72\x2B\x57\x4A\x56\x75\x70\x6D\x36\x52\x72\x66\x38\x71\x53\x6F\x47\x38\x41\x59\x76\x75\x39\x38\x56\x38\x72\x7A\x6E\x68\x44\x4C\x6E\x67\x3D\x3D\x22\x7D\x3B","\x25\x37\x42\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4A\x4D\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6C\x76\x4D\x49\x70\x59\x50\x6F\x6B\x30\x74\x74\x35\x6B\x39\x6B\x57\x34\x41\x72\x4A\x45\x55\x33\x6C\x66\x4C\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x34\x31\x32\x39\x35\x38\x32\x32\x34\x39\x32\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2D\x31\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x70\x69\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x54\x55\x55\x31\x54\x4A\x75\x30\x54\x4A\x75\x6D\x54\x55\x55\x32\x54\x4A\x76\x4E\x54\x4A\x75\x31\x54\x55\x55\x35\x54\x4A\x75\x30\x54\x4A\x72\x4D\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2E\x32\x2E\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6E\x61\x6D\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6F\x6D\x2E\x6A\x69\x6E\x67\x64\x6F\x6E\x67\x2E\x61\x70\x70\x2E\x6D\x61\x6C\x6C\x25\x32\x32\x25\x37\x44","\x25\x37\x42\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4A\x4D\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6C\x76\x4D\x49\x70\x59\x50\x6F\x6B\x30\x74\x74\x35\x6B\x39\x6B\x57\x34\x41\x72\x4A\x45\x55\x33\x6C\x66\x4C\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x34\x31\x32\x39\x35\x38\x32\x32\x34\x39\x32\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2D\x31\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x62\x32\x6A\x65\x64\x52\x48\x6D\x42\x7A\x43\x6B\x43\x4A\x53\x6B\x43\x4A\x6A\x67\x5A\x51\x31\x72\x62\x51\x6D\x37\x59\x57\x35\x75\x63\x77\x39\x66\x5A\x4E\x6A\x32\x5A\x58\x54\x7A\x61\x57\x39\x6B\x42\x7A\x4F\x6D\x42\x74\x43\x6B\x43\x4E\x6A\x73\x64\x57\x76\x69\x5A\x4D\x38\x35\x43\x4A\x63\x35\x44\x4A\x6A\x7A\x59\x33\x54\x76\x5A\x57\x34\x6C\x43\x4A\x47\x30\x43\x52\x71\x7A\x43\x4E\x4B\x33\x45\x32\x39\x7A\x42\x7A\x4F\x6E\x45\x6D\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2E\x32\x2E\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6E\x61\x6D\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6F\x6D\x2E\x6A\x69\x6E\x67\x64\x6F\x6E\x67\x2E\x61\x70\x70\x2E\x6D\x61\x6C\x6C\x25\x32\x32\x25\x37\x44","\x77\x68\x77\x73\x77\x73\x77\x77\x73\x3D\x4A\x44\x30\x31\x32\x31\x34\x35\x62\x39\x36\x44\x32\x34\x44\x35\x47\x4A\x5A\x71\x31\x36\x34\x31\x32\x39\x35\x38\x32\x37\x36\x37\x39\x30\x35\x35\x73\x61\x74\x31\x78\x48\x44\x4C\x70\x36\x55\x74\x48\x4C\x6D\x42\x32\x56\x49\x76\x72\x77\x45\x45\x4B\x68\x56\x63\x66\x77\x73\x4C\x4C\x5A\x43\x62\x64\x68\x6B\x43\x4E\x6B\x31\x71\x31\x63\x76\x62\x79\x7E\x6A\x63\x59\x66\x54\x59\x6C\x68\x74\x72\x53\x6A\x59\x34\x34\x79\x39\x6D\x32\x2B\x58\x76\x44\x49\x41\x4D\x37\x7A\x65\x41\x6B\x58\x50\x50\x57\x6E\x5A\x66\x52\x6C\x48\x78\x34\x59\x4E\x38\x71\x36\x54\x32\x66\x6D\x65\x72\x2B\x57\x4A\x56\x75\x70\x6D\x36\x52\x72\x66\x38\x71\x53\x6F\x47\x38\x41\x59\x76\x75\x39\x38\x56\x38\x72\x7A\x6E\x68\x44\x4C\x6E\x67\x3D\x3D\x3B\x75\x6E\x69\x6F\x6E\x77\x73\x77\x73\x3D\x7B\x22\x64\x65\x76\x69\x63\x65\x66\x69\x6E\x67\x65\x72\x22\x3A\x22\x65\x69\x64\x41\x36\x31\x39\x62\x38\x31\x32\x33\x66\x66\x73\x39\x7A\x56\x6E\x70\x6C\x61\x6F\x51\x53\x46\x69\x52\x64\x52\x73\x49\x62\x41\x73\x4C\x4A\x73\x31\x5A\x36\x77\x2F\x51\x75\x59\x68\x67\x30\x73\x6D\x59\x6B\x64\x4F\x46\x37\x59\x79\x4C\x51\x79\x78\x78\x6F\x51\x75\x68\x54\x57\x56\x54\x6E\x71\x47\x50\x7A\x42\x65\x56\x2F\x63\x61\x50\x4E\x77\x71\x42\x57\x67\x5A\x53\x49\x64\x6B\x6D\x5A\x64\x63\x6F\x71\x52\x4D\x6B\x43\x5A\x47\x59\x39\x4F\x38\x42\x45\x46\x52\x50\x22\x2C\x22\x6A\x6D\x61\x66\x69\x6E\x67\x65\x72\x22\x3A\x22\x4A\x44\x30\x31\x32\x31\x34\x35\x62\x39\x36\x44\x32\x34\x44\x35\x47\x4A\x5A\x71\x31\x36\x34\x31\x32\x39\x35\x38\x32\x37\x36\x37\x39\x30\x35\x35\x73\x61\x74\x31\x78\x48\x44\x4C\x70\x36\x55\x74\x48\x4C\x6D\x42\x32\x56\x49\x76\x72\x77\x45\x45\x4B\x68\x56\x63\x66\x77\x73\x4C\x4C\x5A\x43\x62\x64\x68\x6B\x43\x4E\x6B\x31\x71\x31\x63\x76\x62\x79\x7E\x6A\x63\x59\x66\x54\x59\x6C\x68\x74\x72\x53\x6A\x59\x34\x34\x79\x39\x6D\x32\x2B\x58\x76\x44\x49\x41\x4D\x37\x7A\x65\x41\x6B\x58\x50\x50\x57\x6E\x5A\x66\x52\x6C\x48\x78\x34\x59\x4E\x38\x71\x36\x54\x32\x66\x6D\x65\x72\x2B\x57\x4A\x56\x75\x70\x6D\x36\x52\x72\x66\x38\x71\x53\x6F\x47\x38\x41\x59\x76\x75\x39\x38\x56\x38\x72\x7A\x6E\x68\x44\x4C\x6E\x67\x3D\x3D\x22\x7D\x3B\x22","\x4B\x65\x65\x70\x2D\x41\x6C\x69\x76\x65","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x55\x54\x46\x2D\x38","\x62\x72\x2C\x67\x7A\x69\x70\x2C\x64\x65\x66\x6C\x61\x74\x65","\x6F\x6B\x68\x74\x74\x70\x2F\x33\x2E\x31\x32\x2E\x31\x3B\x6A\x64\x6D\x61\x6C\x6C\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x76\x65\x72\x73\x69\x6F\x6E\x2F\x31\x30\x2E\x33\x2E\x30\x3B\x62\x75\x69\x6C\x64\x2F\x39\x31\x37\x39\x35\x3B","\x6E\x6F\x2D\x63\x61\x63\x68\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64\x3B\x20\x63\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38","\x32\x31\x37","\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x61\x75\x74\x6F\x41\x64\x64\x43\x61\x72\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x62\x73\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x65\x63\x6B\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x74\x65\x78\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x73\x53\x68\x6F\x77\x43\x6F\x64\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6D\x61\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x6B\x75\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x30\x30\x30\x31\x32\x30\x34\x33\x39\x37\x38\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x25\x32\x32\x25\x37\x44\x26","\x50\x4F\x53\x54","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];$[__Oxdd37b[0x0]]= true;const fetch=require(__Oxdd37b[0x1]);try{$[__Oxdd37b[0x2]]()?require(__Oxdd37b[0x3]):__Oxdd37b[0x4]}catch(e){console[__Oxdd37b[0x6]](`${__Oxdd37b[0x5]}`);console[__Oxdd37b[0x6]](__Oxdd37b[0x7]);$[__Oxdd37b[0x0]]= false};let cookiesArr=[],cookie=__Oxdd37b[0x4],message;if($[__Oxdd37b[0x2]]()){Object[__Oxdd37b[0xa]](jdCookieNode)[__Oxdd37b[0x9]]((_0xe148x5)=>{cookiesArr[__Oxdd37b[0x8]](jdCookieNode[_0xe148x5])});if(process[__Oxdd37b[0xc]][__Oxdd37b[0xb]]&& process[__Oxdd37b[0xc]][__Oxdd37b[0xb]]=== __Oxdd37b[0xd]){console[__Oxdd37b[0x6]]= ()=>{}}}else {cookiesArr= [$[__Oxdd37b[0x10]](__Oxdd37b[0xf]),$[__Oxdd37b[0x10]](__Oxdd37b[0x11]),...jsonParse($[__Oxdd37b[0x10]](__Oxdd37b[0x14])|| __Oxdd37b[0x15])[__Oxdd37b[0x13]]((_0xe148x5)=>{return _0xe148x5[__Oxdd37b[0x12]]})][__Oxdd37b[0xe]]((_0xe148x5)=>{return !!_0xe148x5})};function formatZero(_0xe148x7){if(_0xe148x7>= 0&& _0xe148x7<= 9){return __Oxdd37b[0x16]+ _0xe148x7}else {return _0xe148x7}}function getCurrentDateTime(){var _0xe148x9= new Date();var _0xe148xa=_0xe148x9[__Oxdd37b[0x17]]();var _0xe148xb=_0xe148x9[__Oxdd37b[0x18]]()+ 1;var _0xe148xc=_0xe148x9[__Oxdd37b[0x19]]();var _0xe148xd=_0xe148x9[__Oxdd37b[0x1a]]();var _0xe148xe=_0xe148x9[__Oxdd37b[0x1b]]();var _0xe148xf=_0xe148x9[__Oxdd37b[0x1c]]();return _0xe148xa+ formatZero(_0xe148xb)+ formatZero(_0xe148xc)+ formatZero(_0xe148xd)+ formatZero(_0xe148xe)+ formatZero(_0xe148xf)}!(async ()=>{if(!$[__Oxdd37b[0x0]]){return};if(!cookiesArr[0x0]){$[__Oxdd37b[0x25]]($[__Oxdd37b[0x1f]],__Oxdd37b[0x23],__Oxdd37b[0x24],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxdd37b[0x24]});return};if(getCurrentDateTime()> 20220616194431){console[__Oxdd37b[0x6]](__Oxdd37b[0x26]);return};for(let _0xe148x11=0;_0xe148x11< cookiesArr[__Oxdd37b[0x27]];_0xe148x11++){if(cookiesArr[_0xe148x11]){cookie= cookiesArr[_0xe148x11];$[__Oxdd37b[0x28]]= decodeURIComponent(cookie[__Oxdd37b[0x29]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxdd37b[0x29]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxdd37b[0x2a]]= _0xe148x11+ 1;$[__Oxdd37b[0x2b]]= true;$[__Oxdd37b[0x2c]]= __Oxdd37b[0x4];message= __Oxdd37b[0x4];console[__Oxdd37b[0x6]](`${__Oxdd37b[0x2d]}${$[__Oxdd37b[0x2a]]}${__Oxdd37b[0x2e]}${$[__Oxdd37b[0x2c]]|| $[__Oxdd37b[0x28]]}${__Oxdd37b[0x2f]}`);if(!$[__Oxdd37b[0x2b]]){$[__Oxdd37b[0x25]]($[__Oxdd37b[0x1f]],`${__Oxdd37b[0x30]}`,`${__Oxdd37b[0x31]}${$[__Oxdd37b[0x2a]]}${__Oxdd37b[0x32]}${$[__Oxdd37b[0x2c]]|| $[__Oxdd37b[0x28]]}${__Oxdd37b[0x33]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxdd37b[0x24]});if($[__Oxdd37b[0x2]]()){ await notify[__Oxdd37b[0x36]](`${__Oxdd37b[0x4]}${$[__Oxdd37b[0x1f]]}${__Oxdd37b[0x34]}${$[__Oxdd37b[0x28]]}${__Oxdd37b[0x4]}`,`${__Oxdd37b[0x31]}${$[__Oxdd37b[0x2a]]}${__Oxdd37b[0x32]}${$[__Oxdd37b[0x28]]}${__Oxdd37b[0x35]}`)};continue}; await fetch(__Oxdd37b[0x39],{"\x68\x65\x61\x64\x65\x72\x73":{"\x43\x6F\x6F\x6B\x69\x65":cookie+ __Oxdd37b[0x3a],"\x4A\x2D\x45\x2D\x43":__Oxdd37b[0x3b],"\x4A\x2D\x45\x2D\x48":__Oxdd37b[0x3c],"\x6A\x64\x63\x2D\x62\x61\x63\x6B\x75\x70":cookie+ __Oxdd37b[0x3d],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdd37b[0x3e],"\x68\x6F\x73\x74":__Oxdd37b[0x3f],"\x43\x68\x61\x72\x73\x65\x74":__Oxdd37b[0x40],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdd37b[0x41],"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":__Oxdd37b[0x42],"\x43\x61\x63\x68\x65\x2D\x43\x6F\x6E\x74\x72\x6F\x6C":__Oxdd37b[0x43],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxdd37b[0x44],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x4C\x65\x6E\x67\x74\x68":__Oxdd37b[0x45]},"\x62\x6F\x64\x79":__Oxdd37b[0x46],"\x6D\x65\x74\x68\x6F\x64":__Oxdd37b[0x47]})[__Oxdd37b[0x37]]((_0xe148x13)=>{return _0xe148x13[__Oxdd37b[0x38]]()})[__Oxdd37b[0x37]]((_0xe148x12)=>{console[__Oxdd37b[0x6]](_0xe148x12)})}}})()[__Oxdd37b[0x22]]((_0xe148x10)=>{$[__Oxdd37b[0x6]](__Oxdd37b[0x4],`${__Oxdd37b[0x4]}${$[__Oxdd37b[0x1f]]}${__Oxdd37b[0x20]}${_0xe148x10}${__Oxdd37b[0x21]}`,__Oxdd37b[0x4])})[__Oxdd37b[0x1e]](()=>{$[__Oxdd37b[0x1d]]()});(function(_0xe148x14,_0xe148x15,_0xe148x16,_0xe148x17,_0xe148x18,_0xe148x19){_0xe148x19= __Oxdd37b[0x48];_0xe148x17= function(_0xe148x1a){if( typeof alert!== _0xe148x19){alert(_0xe148x1a)};if( typeof console!== _0xe148x19){console[__Oxdd37b[0x6]](_0xe148x1a)}};_0xe148x16= function(_0xe148x1b,_0xe148x14){return _0xe148x1b+ _0xe148x14};_0xe148x18= _0xe148x16(__Oxdd37b[0x49],_0xe148x16(_0xe148x16(__Oxdd37b[0x4a],__Oxdd37b[0x4b]),__Oxdd37b[0x4c]));try{_0xe148x14= __encode;if(!( typeof _0xe148x14!== _0xe148x19&& _0xe148x14=== _0xe148x16(__Oxdd37b[0x4d],__Oxdd37b[0x4e]))){_0xe148x17(_0xe148x18)}}catch(e){_0xe148x17(_0xe148x18)}})({})
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}