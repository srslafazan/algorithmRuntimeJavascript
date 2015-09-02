# algorithmRuntimeJavascript
Algorithm Runtime Analysis

Add your sort function to the testingSorts array to test its runtime. 

The testingSorts array accepts functions that take a single array of integers as a parameter and output a sorted array of integers.

You can open index.html in your browser and see results in the console or in the browser window.

If you're feeling lucky, you can change the number of input elements by manipulating arrayLength in the on main.js lines 209 - 211. Example output for arrays of 100, 1000, 10000, 100000 elements:

                                      ... beginning tests: 
                                      
                                      Testing "bubbleSort": 
                                      ...	0.115111 ms 	for 100 integers	passed (desc)
                                      ...	2.168111 ms 	for 1000 integers	passed (desc)
                                      ...	257.646444 ms 	for 10000 integers	passed (desc)
                                      ...	28961.291667 ms 	for 100000 integers	passed (desc)
                                      
                                      ... Done.


bubbleSort could take about 5 minutes for 100000 elements. These algorithms are not all optimized, so feel free to look for ways to improve their runtime.
