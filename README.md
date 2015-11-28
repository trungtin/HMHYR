# HMHYR - Reading progress-bar component for React

Simple components for display reading progress, using `.getBoundingClientRect()` to calculate position relative to viewport

## Installation

``` javascript
npm install HMHYR --save-dev
```

## Usage

``` javascript
import HMHYR from 'HMHYR';
<HMHYR
  area
  style
  target
  static
/>
```

| Option        | Type          | Default                                              | Description  |
| ------------- |---------------|------------------------------------------------------| -------------|
| area          | object        | { top: '20%', center: '50%', bottom: '60%' }           | Progress bar will display if target is in area limit by area.top and area.bottom. Area.center is the point where counter start. All in percentage, relative to viewport, 1% = 1vh|
| style         | object        | Default styling.                                     | Use style because of CSS specificities problem. |
| target        | string        |                                                      | Either use target id to determine target or use HMHYR as wrapper of target. |
| static        |               | None.                                                | If appear, progress bar still display even if target outside valid area, require style.height value being set. | 

## License

**HMHYR** is available under MIT. See LICENSE for more details.

