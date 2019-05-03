# @chakray/marked

  `angular + markdown renderer`

# installation

```
  npm i @chakray/marked marked --save
```

in __app.module.ts__
```diff
+ import * as marked from 'marked';
+ import { CmMarkedMod, mdLib, MarkedLib } from '@chakray/marked';

+ function mdFac() {
+   return new MarkedLib(marked);
+ }

+ providers: [
+   { provide: mdLib, useFactory: mdFac }
+ ],
```

in __app.component.html__
```
  <cm-marked src='# title \n __bold__ '></cm-marked>
```
