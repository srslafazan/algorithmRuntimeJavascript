# algorithmRuntimeJavascript
Algorithm Runtime Analysis

Add your sort function to the testingSorts array to test its runtime. 

The testingSorts array accepts functions that take a single array of integers as a parameter and output a sorted array of integers.

You can open index.html in your browser and see results in the console or in the browser window.

If you're feeling lucky, you can change the number of input elements by manipulating arrayLength in the on main.js lines 209 - 211. Anything over 100000 elements could potentially crash your browser. 

Example output for arrays of 100, 1000, 10000, 100000 elements:

    ... beginning tests: 
    
    Testing "bubbleSort": 
    ...	0.115111 ms 	for 100 integers	passed (desc)
    ...	2.168111 ms 	for 1000 integers	passed (desc)
    ...	257.646444 ms 	for 10000 integers	passed (desc)
    ...	28961.291667 ms 	for 100000 integers	passed (desc)
    
    ... Done.


bubbleSort could take about 5 minutes for 100000 elements. 

Optional Assignments/Food-for-thought:

1. Improve the runtime of bubbleSort ( try to swap twice per iteration )

2. Does this quickSort look like it's working properly? Try to find out why it's throwing false positives in our isSorted() function.

3. What are some ways we can improve the runtime of this mergeSort?

4. Which algorithms are "in-place" sorts?

5. Which algorithm has the largest space complexity?
