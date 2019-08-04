export function isEngliseLetter(str) {
    const reg = /^[ a-z, A-Z ]*$/;
    const res = reg.test(str);
    return res;
}