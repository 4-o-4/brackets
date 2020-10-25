module.exports = function check(str, bracketsConfig) {
    let brackets = [],
        i = 0;

    while (bracketsConfig.length > i) {
        brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
        i++;
    }

    let newStr = str;
    while (true) {
        i = 0;
        while (brackets.length > i) {
            str = str.replace(brackets[i], "");
            i++;
        }

        if (str.length == 0) {
            return true;
        }
        if (newStr === str) {
            return false;
        }

        newStr = str;
    }
};
