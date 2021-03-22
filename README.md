#### Домашние задания к курсу «Продвинутый JavaScript в браузере»
### 5. Forms. Popovers

[![Build](https://ci.appveyor.com/api/projects/status/7jvnai7and6coqgw?svg=true)](https://ci.appveyor.com/project/npeplov/ahj-forms-popovers)

Environment: https://npeplov.github.io/ahj-popovers

License: https://npeplov.github.io/ahj-popovers/license.txt

---

Вот так должен выглядеть виджет в целом, для упрощения будем считать, что виджет всегда должен показываться сверху.

![](./pic/Popovers.png)

У popover'а обязательно должно быть название и текст. Центрироваться он обязательно должен по горизонтали относительно элемента, который вызвал popover'а.

Не забудьте написать авто-тест на взаимодействие с DOM на базе Puppeteer или JSDOM (на ваш выбор).

**Подсказка**: страница, на которой можно "подглядеть" реализацию: https://getbootstrap.com/docs/4.3/components/popovers/. Но мы пока не проходили `translate`, `translate3d`, поэтому делайте позиционирование в px.