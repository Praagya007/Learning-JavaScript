# Day 11 — Prototypes & Classes

Today I explored how JavaScript handles inheritance, prototypes, classes, and some practical exercises with timers.

## Key Learnings
- Objects can inherit properties using `Object.create`.
- Classes in JS are syntactic sugar over prototypes, but they feel cleaner and more structured.
- Inheritance with `extends` makes code reusable and easier to organize.
- Property checks:  
  - `in` → checks own + inherited properties.  
  - `hasOwnProperty` → checks only own properties.

## Timer Implementations
I built several versions:
1. **Basic Timer (Class)** → start, stop, reset, elapsed.
2. **Factory Function Timer** → same functionality, but without `class`.
3. **Advanced Timer (Class)** → added pause and resume support.

## Ergonomics Reflection (Using classes vs using factories)
- Writing the same logic as a class felt much more organized and natural than the factory version.  
- With `class`, methods stay grouped together, making it easier to read and reuse. If I had to divide
it across multiple Timers like Work timer, Play timer, I can inherit some of them same properties and just add. 
- Factory functions are better suited for single usage.
- For bigger projects, classes are easier to extend and maintain.  

## Conclusion
Day 11 was about seeing prototypes in action, practicing class inheritance, and building reusable timers. Classes definitely felt more ergonomic than factories, especially as features grew.
