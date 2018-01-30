import Color from '@dicebear/avatars/lib/model/color';
import ColorCollection from '@dicebear/avatars/lib/model/color/collection';

import Sprite from '@dicebear/avatars/lib/model/sprite';
import SpriteCollection from '@dicebear/avatars/lib/model/sprite/collection';

import LightnessDarker from '@dicebear/avatars/lib/model/color/collection/modifier/lightness/darker';
import LightnessDifference from '@dicebear/avatars/lib/model/color/collection/modifier/lightness/difference';

// @ts-ignore
import * as svg from '../assets/sprites.svg';

let skinColor = new ColorCollection([
  new Color('#FFDBAC'),
  new Color('#F5CFA0'),
  new Color('#EAC393'),
  new Color('#E0B687'),
  new Color('#CB9E6E'),
  new Color('#B68655'),
  new Color('#A26D3D'),
  new Color('#8D5524')
]);

let hairColor = new LightnessDifference(
  new ColorCollection([
    new Color('#090806'),
    new Color('#2c222b'),
    new Color('#71635a'),
    new Color('#b7a69e'),
    new Color('#d6c4c2'),
    new Color('#cabfb1'),
    new Color('#dcd0ba'),
    new Color('#fff5e1'),
    new Color('#e6cea8'),
    new Color('#e5c8a8'),
    new Color('#debc99'),
    new Color('#b89778'),
    new Color('#a56b46'),
    new Color('#b55239'),
    new Color('#8d4a43'),
    new Color('#91553d'),
    new Color('#533d32'),
    new Color('#3b3024'),
    new Color('#554838'),
    new Color('#4e433f'),
    new Color('#504444'),
    new Color('#6a4e42'),
    new Color('#a7856a'),
    new Color('#977961')
  ]),
  skinColor,
  17
);

export default new SpriteCollection(
  [
    new Sprite(svg.head, skinColor),
    new Sprite(
      svg.eyes,
      new ColorCollection([
        new Color('#76778b'),
        new Color('#697b94'),
        new Color('#647b90'),
        new Color('#5b7c8b'),
        new Color('#588387')
      ])
    ),
    new Sprite(svg.eyebrows, new LightnessDarker(new LightnessDarker(hairColor, skinColor, 7), hairColor, 10)),
    new Sprite(
      svg.accessories,
      new ColorCollection([
        new Color('#daa520'),
        new Color('#ffd700'),
        new Color('#eee8aa'),
        new Color('#fafad2'),
        new Color('#d3d3d3'),
        new Color('#a9a9a9')
      ]),
      15
    ),
    new Sprite(
      svg.mouth,
      new LightnessDifference(
        new ColorCollection([
          new Color('#dbac98'),
          new Color('#d29985'),
          new Color('#c98276'),
          new Color('#e35d6a'),
          new Color('#e32153'),
          new Color('#de0f0d')
        ]),
        skinColor,
        10
      )
    ),
    new Sprite(
      svg.glasses,
      new ColorCollection([
        new Color('#5f705c'),
        new Color('#43677d'),
        new Color('#5e172d'),
        new Color('#ffb67a'),
        new Color('#a04b5d'),
        new Color('#191919'),
        new Color('#323232'),
        new Color('#4b4b4b')
      ]),
      25
    ),
    new Sprite(
      svg.clothes,
      new ColorCollection([
        new Color('#d11141'),
        new Color('#00b159'),
        new Color('#00aedb'),
        new Color('#f37735'),
        new Color('#ffc425'),
        new Color('#740001'),
        new Color('#ae0001'),
        new Color('#eeba30'),
        new Color('#96ceb4'),
        new Color('#ffeead'),
        new Color('#ff6f69'),
        new Color('#ffcc5c'),
        new Color('#88d8b0')
      ])
    ),
    new Sprite(svg.hair, hairColor, 95),
    new Sprite(
      svg.hats,
      new ColorCollection([
        new Color('#cc6192'),
        new Color('#2663a3'),
        new Color('#a62116'),
        new Color('#3d8a6b'),
        new Color('#614f8a')
      ]),
      5
    )
  ],
  20
);
