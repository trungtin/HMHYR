# HMHYR - Reading progress-bar component for React

Simple components for display reading progress, using `.getBoundingClientRect()` to calculate position relative to viewport

## Installation

``` javascript
npm install hmhyr --save-dev
```

## Usage

``` javascript
import HMHYR from 'hmhyr';
<HMHYR
  area
  style
  overlayStyle
  target
  static
  title
/>
```

| Option        | Type          | Default                                              | Description  |
| ------------- |---------------|------------------------------------------------------| -------------|
| area          | object        | { top: '20%', center: '50%', bottom: '60%' }           | Progress bar will display if target is in area limit by area.top and area.bottom. Area.center is the point where counter start. All in percentage, relative to viewport, 1% = 1vh|
| style         | object        | Default styling.                                     | Use style because of CSS specificities problem. Recommended, default style is crap :(.|
| overlayStyle  | object        | Default styling.                                     | Style use for overlay bar                       |
| target        | string        |                                                      | Either use target id to determine target or use HMHYR as wrapper of target. |
| timeCounter   |               | None                                                 | If exist, progress bar will have a estimated read time. |
| static        |               | None.                                                | If exist, progress bar background will stay even if target outside valid area ,require style.height value being set. | 
| title         | string        | None.                                                | Title for being display on progress-bar. |

## TODO
- Add support for multiple target per component.
- Built-in theme.
- Write unit test.
- Other position than 'fixed'.

## License

**HMHYR** is available under MIT. See LICENSE for more details.

