# Firebase Authentication Memory Leak
This repository demonstrates a common issue in Firebase Authentication: memory leaks.  Improper handling of the `onAuthStateChanged` listener and asynchronous user fetching can lead to memory leaks, especially in long-running applications. This example shows how to fix it.

## Problem
The `onAuthStateChanged` listener, if not unsubscribed from, will continue to consume resources even after the component or function that uses it is unmounted or finished executing. This is a memory leak. Asynchronous fetching of the current user without proper handling can also cause issues.

## Solution
The solution involves unsubscribing from the `onAuthStateChanged` listener using the returned unsubscribe function. For asynchronous user fetching, ensure the function is properly cleaned up if the component or function is unmounted or no longer needed.
