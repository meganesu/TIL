# JavaScript Event Loop

* Each message runs to completion. That is, it won't stop in the middle of processing one callback to switch to the next callback.
    * Pros: You'll never have to worry about your thread being interrupted.
    * Cons: If a message takes a long time to process, it will block the user from interacting with the page, because those interactions can't be processed until the current message is finished.