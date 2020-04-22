// give a string then convert to the utf-8 en-codeing
function strToBuffer1(str){
    var n = str.length,
        idx = 0,
        utf8 = new Uint8Array(new ArrayBuffer(n * 4)),
        i, j, c;

    //http://user1.matsumoto.ne.jp/~goma/js/utf.js
    for(i = 0; i < n; ++i){
        c = str.charCodeAt(i);
        if(c <= 0x7F){
            utf8[idx++] = c;
        } else if(c <= 0x7FF){
            utf8[idx++] = 0xC0 | (c >>> 6);// here the '>>>' mean the sign changed shift, will using zero will, not preserve the sign
            utf8[idx++] = 0x80 | (c & 0x3F);
        } else if(c <= 0xFFFF){
            utf8[idx++] = 0xE0 | (c >>> 12);
            utf8[idx++] = 0x80 | ((c >>> 6) & 0x3F);
            utf8[idx++] = 0x80 | (c & 0x3F);
        } else {
            j = 4;
            while(c >> (6 * j)) j++;
            utf8[idx++] = ((0xFF00 >>> j) & 0xFF) | (c >>> (6 * --j));
            while(j--)
                utf8[idx++] = 0x80 | ((c >>> (6 * j)) & 0x3F);
        }
    }
    return utf8.subarray(0, idx).buffer;
}
//
function strToBuffer2(str){
    var n = str.length,
        idx = 0,
        utf8 = [],
        i, j, c;

    for(i = 0; i < n; ++i){
        c = str.charCodeAt(i);
        if(c <= 0x7F){
            utf8[idx++] = c;
        } else if(c <= 0x7FF){
            utf8[idx++] = 0xC0 | (c >>> 6);
            utf8[idx++] = 0x80 | (c & 0x3F);
        } else if(c <= 0xFFFF){
            utf8[idx++] = 0xE0 | (c >>> 12);
            utf8[idx++] = 0x80 | ((c >>> 6) & 0x3F);
            utf8[idx++] = 0x80 | (c & 0x3F);
        } else {
            j = 4;
            while(c >> (6 * j)) j++;
            utf8[idx++] = ((0xFF00 >>> j) & 0xFF) | (c >>> (6 * --j));
            while(j--)
                utf8[idx++] = 0x80 | ((c >>> (6 * j)) & 0x3F);
        }
    }
    return utf8;
}