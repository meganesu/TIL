# Layout Thrashing

## What Is It?

When browsers render your page, there's one stage called the "layout" stage, where it calculates the position and dimensions of all the elements on your page before rendering them. Calculating the layout of the page is an expensive process, and takes a long time and lots of your user's resources.

Layout thrashing happens when your page makes lots of repeated adjustments to the layout, which means that the browser is forced to recalculate the whole page layout a bunch of times. This is bad user experience, because the browser gets slowed down with duplicate work.

## How To Prevent Layout Thrashing

* Save writes to do in a batch.

## Resources

* [Codetonics - Layout thrashing is killing the performance of your web application](https://codetonics.com/javascript/layout-thrashing/)
* [Google Developers Web Fundamentals - Avoid Large, Complex Layouts and Layout Thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing)
* [paulirish Gist - What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
