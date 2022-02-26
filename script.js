// A function is a series  of steps that can be repeated over and over again
let ourlist = ['rice', 'rice', 'rice', 'broccoli', 'chicken', 'avocado']

let plist = [ ]

plist.push(9,8,7,3,2   );

function pfunc( list1) {
    for (let p = 0; p < list1.length; p++) {
        const element = list1[p];
        alert( element );
        if ( element < 6 ) { 
            alert( "this is small number");
            
        }
        else { 
            alert( " this is bibgger number");
        }
        
    }
}
pfunc(plist);
