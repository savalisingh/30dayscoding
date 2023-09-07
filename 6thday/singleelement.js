function occurance(array) {
    let singleElements = [];
    let doubleElements = [];
    let multitimeElements = [];
    let no1="no";
    let no2="no";
    let no3="no";
    for (let i = 0; i < array.length; i++) {
        var count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                count++;
            }
        }
        if (count === 1) {
            no1=array[i];
        }else if(count===2){
            no2=array[i];
        }else {
            no3=array[i];
        }
    }
    console.log('Elements that occur exactly once:',no1);
    console.log('Elements that occur exactly twice: ',no2);
    console.log('Elements that occur three time or more than three:',no3);
}
let Aaa = [1, 1, 3, 3, 3, 0];
let Bbb = [1, 2, 2, 2, 2, 2, 2];
occurance(Aaa);
occurance(Bbb);