# Faking API Responses

## Goal
To be able to simulate errors (e.g., 500 Internal Server error) when making API calls.

## Considerations

* Do you need to test what happens in a general case? (e.g., "Will my page blow up if this service throws a 500?")
    * Use **remote mapping**. It's simpler!
* Do you need to test something more specific? (e.g., "I'm using a bad API, and when something goes wrong it changes the body of the response but still has a 200 status code.")
    * Use **rewriting**. It lets you do more complex configurations for faking responses!

## Remote Mapping

1. Find the response you want to remap.
1. Right-click it and select "Map remote..."
1. Set the host that you want to map responses to instead.
    * https://httpstat.us/: A site with different URLs that will return different HTTP statuses. (e.g., https://httpstat.us/500 will return a 500.)

## Rewriting an API Response

1. From the menu bar, select "Tools -> Rewrite..."
1. Check "Enable Rewrite".
1. Click "Add" to create a new set of rewrite settings.
1. Add a new location, using the host from which you want to rewrite responses.
1. Add the rewrite rules for how you want to update the response. For example, you might want to rewrite the response body or modify a response code.
1. Make sure your settings, locations, and rules are all checked! Then click "OK" to apply the rewrite settings.
1. From the menu bar, select "Proxy -> SSL Proxy Settings..."
1. Check "Enable SSL Proxying".
1. Add locations for each of the hosts you want to proxy.
1. Click "OK" to apply your changes.