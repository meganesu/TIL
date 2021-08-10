# Designing an Accessible User Experience

## Accessibility and Inclusive Design

Accessibility should be a minimum goal for all websites. But how do you decide whether something is accessible or not?

Standards like WCAG exist, but they only include testable, objective criteria for accessible websites. It's possible to have an accessibile website (that meets all the WCAG success criteria) that is still has a poor user experience. But usability testing is more difficult, because the success criteria are more subjective. That's why it's important to test your site with real humans, so that you can get a variety of perspectives on your product.

## Universal Design

The term "universal design" was originally coined by a group of architects, to refer to the guiding principles for designing buildings that could be used by everyone.

There are 7 principles of universal design:

1. **Equitable use**: one design that works for everyone
2. **Flexibility in use**: provide multiple options for using features
3. **Simple and intuitive use**: minimize complexity so it's easy to understand how to use the product
4. **Perceptible information**: sensory abilities (blind/low-vision, deaf/hard-of-hearing) shouldn't prevent users from accessing information
5. **Tolerance for error**: reduce impact of accidental actions
6. **Low physical effort**: reduce repetitive tasks
7. **Size and space for approach and use**: provide enough physical space for users with different physical builds/abilities (less relevant for virtual experiences)

## Avoid Exclusive Design Patterns

If a design can't be used by disabled users, it's a problem with the design, not the user. Often, inaccessible designs are created unintentionally, because designers aren't aware of the biases they bring into the design process that exclude certain users.

It's possible for designers to build accessible experiences that can be used by everyone. But it requires conscious effort on the designer's part to examine their own biases and look for ways their designs might be excluding people.

Questions to ask yourself while designing:

* What about the design of this environment could be limiting a person's ability to engage with it?
* How could the environment be better designed to remove this limitation?

The key is to shift your mindset from seeing the **person** as flawed to seeing the **design** as flawed.

## Accessibility Design Failures

* **Failure to design** for accessibility at all.
* **Ineffective designs** that don't follow accessibility best practices. Common errors include:
    * No semantic markup
    * Custom widgets without ARIA markup (names, roles, values)
    * Custom widgets without keyboard focus management
    * Poor color contrast
    * Form validation with only visual cues (like red outlines without screen reader announcements)
* **Incomplete designs** that still don't provide an overall accessible experience.
* **Bad retrofitting** to try and make an inaccessible design technically accessible.
    * One risk of adding a "temporary" fix before doing a larger redesign is that you might end up being stuck with with that fix permanently.
* **Inconvenient or stigmatizing designs** that segregate disabled users into a separate experience.
* **"Accessibility rot" over time** as maintainers change or forget to test existing accessibility requirements.

## User Research with People with Disabilities

* **Fix what you know how to fix first.** Don't waste testers' time with things that automated testing tools can catch for you.
* **Pay attention to usability feedback.** If it's technically accessible but not usable, then it's not done. What things do users find confusing? Where do they get stuck?
* **Record screen videos of people with disabilities using the site.**
