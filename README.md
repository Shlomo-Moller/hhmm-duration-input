# hhmm-duration-input

## About

This is a small project showing the simplest component which serves as a time duration input of the format: `hh:mm`.

## Techs

[React](https://reactjs.org/) + [Typescript](https://github.com/Microsoft/TypeScript) with [Vite](https://vitejs.dev/)

## Terminology

* **"Duration slot"** - Each of the duration's sections - `hh` & `mm` - is considered a slot of the time duration.

## Functionality

* **Increment/decrement with arrows** - Provides on each "duration slot" an `ArrowUp` & `ArrowDown` functionality for incrementing/decrementing the slot's value.
* **Moving between slots** - Provides the ability to move from one slot to another (from the `hh` section to the `mm` one, and vice versa) using the `ArrowLeft` & `ArrowRight` keys.
* **Increment/decrement cyclically** - 00:00, 00:01, ..., 00:59, 01:00, ..., 99:59, 00:00 (see [Limits](#limits)).

## Limits

* `"00"` ≤ `hh` ≤ `"99"`
* `"00"` ≤ `mm` ≤ `"59"`
