# Google Sheets

This is a cheat sheet of Google Sheets formulas or expressions that I've found helpful.

## Functions

* `SUMIF(range, criterion, [sum_range])` - only add values in a range if a certain criterion is met
    * `range` - The range which is tested against criterion.
    * `criterion` - The pattern or test to apply to range.
    * `sum_range` - [optional] - The range to be summed, if different from range.

## Pattern Matching

* `<>` - does not equal
    * Example: `=SUMIF(F2:F, "<>Paid", E2:E)` will sum up the values in column E if the corresponding value in column F does NOT equal `Paid`.
