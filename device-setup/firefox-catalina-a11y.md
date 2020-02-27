# Make Firefox allow tabbing through links in Catalina

Apparently there's some issue with Catalina where it won't let Firefox tab through links in the browser window (focus just loops through the Firefox toolbar). I fixed it by following this Stack Overflow post: [Stack Overflow - How to allow keyboard focus of links in Firefox](https://stackoverflow.com/questions/11704828/how-to-allow-keyboard-focus-of-links-in-firefox).

I had to do BOTH of the following steps:

1. In System Preferences → Keyboard, in the Shortcuts pane, check the “Use keyboard navigation to move focus between controls” box at the bottom.
1. In Firefox, type "about:config" in the URL bar. There is no accessibility.tabfocus preference on the Mac, so you'll have to make one. Right click in the window, create a new "integer" preference, and set it to 7.
