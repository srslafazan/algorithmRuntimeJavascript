var testingSorts = [ mergeSort, bubbleSort, insertionSort, quickSort, shellSort, heapSort ];

testRunningTime(testingSorts);

// HEAP SORT
function heapSort (array) {
    
    
    return array;
}



// MERGE SORT
function mergeSort(arr) {
    if (arr.length < 2)
        return arr;
 
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    function merge(left, right) {
        var result = [];
     
        while (left[0] && right[0]) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
     
        while (left[0])
            result.push(left.shift());
     
        while (right[0])
            result.push(right.shift());
    
        return result;
    }
    
    return merge(mergeSort(left), mergeSort(right));
}
 
// QUICK SORT
function quickSort (array) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  function partition(array, pivot, left, right) {
    var storeIndex = left,
        pivotValue = array[pivot];
    swap(array, pivot, right);
    for(var v = left; v < right; v++) {
      if(array[v] < pivotValue) {
        swap(array, v, storeIndex);
        storeIndex++;
      }
    }
    swap(array, right, storeIndex);
    return storeIndex;
  }
  function sort(array, left, right) {
    var pivot = null;
    if(typeof left !== 'number') {
      left = 0;
    }
    if(typeof right !== 'number') {
      right = array.length - 1;
    }
    if(left < right) {
      pivot     = left + Math.ceil((right - left) * 0.5);
      newPivot  = partition(array, pivot, left, right);
      sort(array, left, newPivot - 1);
      sort(array, newPivot + 1, right);
      
    }
  }
  return {
    sort: sort
  };
} 
 
 
// BUBBLE SORT
function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    
    return a;
}

// INSERTION SORT
function insertionSort(arr){
    
    var l = arr.length,
        val;
    
    for ( var i = 1; i < arr.length; i++ ){
        
        val = arr[i];
        var j = i;
        
        while ( j > 0 && arr[j - 1] > val ){
           arr[j] = arr[j-1]; // OPTIMIZED FOR SINGLE ITERATIVE ASSIGNMENT
           j--;
        }
        arr[j] = val; // UPDATE STORED VAL
    }
    return arr;
}

// SHELL SORT
function shellSort (a) {
    for (var gap = parseInt( a.length / 2 ); gap !== 0 ; gap = parseInt(gap / 2) ) {
        for (var i = gap; i < a.length; i++) {
            var k = a[i];
            for (var j = i; j >= gap && k < a[j - gap]; j -= gap) {
                a[j] = a[j - gap];
            }
            a[j] = k;
        }
    }
    return a;
}


// EXECUTION TEST
function testRunningTime(sorts){
    var arrayLength;
    
    var runtimes = [];

    function populate (n) {
        var a = []; 
        for (var i = 0; i < n; i++ ) {
            a.push(Math.floor(Math.random()*10000));
        }   
        return a;
    }
    
    if ( typeof(sorts) === 'function') { // run one sort:
        console.log('... beginning test: ');
        arrayLength = 12;
        test(sorts, arrayLength);
        
    } else if ( typeof(sorts) === 'object') { // run multiple sorts
        console.log('... beginning tests: ');
        for (var i = 0; i < sorts.length; i++) {
            console.log("Testing \"" + sorts[i].name + "\": ");
            for ( var len = 0; len < 3; len++ ){
                arrayLength = Math.pow(10, len + 2);
                test(sorts[i], arrayLength);
            }
        }
        
    } else { // invalid input
        console.log("Invalid input");
        return false;
    }
    
    
    function test (sort, arrayLength){

        var overallExecutionAvg = 0;
        
        for ( var j = 0; j < 3; j++) {
            var executionSum = 0;
            var sorted = 'check failed';
            
            for ( var i = 0; i < 3; i++){
                var arr = populate(arrayLength); // if we don't re-populate the test array, the sorts will re-sort an already sorted array and skew data
                
                var start = performance.now();
                sort(arr);
                var end = performance.now();    
                var executionTime = end - start;
                
                executionSum += executionTime;
                sorted = isSorted(sort(arr));
            }
            
            var executionAvg = executionSum/3;
            overallExecutionAvg += executionAvg;
        }
        var runTime = (overallExecutionAvg/3).toFixed(6);
        var log = "...\t" + runTime + " ms \tfor " + arrayLength + " integers\t" + sorted;
        console.log(log);

        $("#log").append("<tr><td>" + sort.name + "</td><td>" + arrayLength + 
            "</td><td>" + runTime + " ms</td><td>" + sorted + "</td></tr>");

        runtimes.push({name: sort.name, runtime: runTime, arrayLength: arrayLength, sorted: sorted});

    }
    
    function isSorted (array, direction){
            if (!direction || direction == 'desc') {
                for ( var i = 0; i < array.length - 1; i++ ){
                    if ( array[i] > array[i+1]){
                        return 'failed';
                    }
                }
            } else if (direction == 'asc') {
                for ( var j = 0; j < array.length - 1; j++ ){
                    if ( array[j] < array[j+1]){
                        return 'failed';
                    }
                }
            }
            else {
                return ("haven't implemented direction function yet");
            }
        return 'passed';
    }
    
    var hundredElements = [];
    var thousandElements = [];
    var tenthousandElements = [];
  
    for ( var i in runtimes ) {
        if ( runtimes[i].arrayLength == 100 ) {
            hundredElements.push(runtimes[i]);
        } else if ( runtimes[i].arrayLength == 1000 ) {
            thousandElements.push(runtimes[i]);
        } else if ( runtimes[i].arrayLength == 10000 ) {
            tenthousandElements.push(runtimes[i]);
        }
    }

    function compareRuntimes(a, b) {
        return a.runtime - b.runtime;
    }

    hundredElementsSorted = hundredElements.sort(compareRuntimes);
    thousandElementsSorted = thousandElements.sort(compareRuntimes);
    tenthousandElementsSorted = tenthousandElements.sort(compareRuntimes);

    for ( var i in hundredElementsSorted ) {
        if ( hundredElementsSorted[i].sorted ) {
            $('#stack-hundred').append("<tr><td>" + hundredElementsSorted[i].name + 
                "</td><td>" + 
                hundredElementsSorted[i].runtime.substring(0, 6) + "<td>" + hundredElementsSorted[i].sorted + "</td></tr>");
        }
    }
    for ( var i in thousandElementsSorted ) {
        if ( thousandElementsSorted[i].sorted ) {
            $('#stack-thousand').append("<tr><td>" + thousandElementsSorted[i].name + 
                "</td><td>" + 
                thousandElementsSorted[i].runtime.substring(0, 6) + "<td>" + thousandElementsSorted[i].sorted + "</td></tr>");
        }
    }
    for ( var i in tenthousandElementsSorted ) {
        if ( tenthousandElementsSorted[i].sorted ) {
            $('#stack-tenthousand').append("<tr><td>" + tenthousandElementsSorted[i].name + 
                "</td><td>" + 
                tenthousandElementsSorted[i].runtime.substring(0, 6) + "<td>" + tenthousandElementsSorted[i].sorted + "</td></tr>");
        }
    }
    
    console.log(runtimes);
    console.log("... Done.\n");
}
