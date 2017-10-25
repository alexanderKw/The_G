'use strict';

const getElementFromTemplate = template => {
  const container = document.createElement(`template`);
  container.innerHTML = template;
  return container.content;
};

const container = document.querySelector('#main');

const initialState = {
  level: 0,
  lives: 2,
  time: 0
};

const headerTemplate = `
  <header class="header">
    <div class="header-part level">
      <em class="title">Level: ${initialState.level}</em>
    </div>
    <div class="header-part lives">
      <em class="title">Lives: </em>
      <ul>
        ${new Array(3 - initialState.lives)
          .fill(`<li class="live-empty">&#9898;</li>`)
          .join('\n')}
        ${new Array(initialState.lives)
          .fill(`<li class="live-full">&#9899;</li>`)
          .join('\n')}
      </ul>
    </div>
    <div class="header-part time">
      <em class="title">Time: ${initialState.time}</em>
    </div>
  </header>
`;

container.appendChild(getElementFromTemplate(headerTemplate));
