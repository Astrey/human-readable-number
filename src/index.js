module.exports = function toReadable (number) {
    let num_by_digits = num_to_digits(number);
    let result = (number==0) ? 'zero' : '';
    let current_num;
    /*go throught 3 positions*/
    for (let i=0; i<3; ++i) {
        current_num = num_by_digits[i];
        /*pass if zero in position*/
        if (current_num == 0) {continue;}
        switch(i) {
            /*Position for hundreds*/
            case 0:
                result += units[current_num] + ' hundred';
                break;
            /*Position for decimals*/
            case 1:
                if (current_num == 1) {
                    current_num = num_by_digits[++i];
                    result += ' '+teens[current_num];
                    return result.trim();
                } else {
                    result += ' '+decimals[current_num];
                }
                break;
            /*Position for units*/
            case 2:
                result += ' '+ units[current_num];
                break;
        }
    }
    return result.trim();
}

const units = ['','one','two','three','four','five','six','seven','eight','nine'];
const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const decimals = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']

const num_to_digits = (number) => {
    return [Math.floor(number/100) % 10, Math.floor(number/10) % 10, number % 10]
}