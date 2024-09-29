'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  notification.classList.add('notification', type);

  notification.style.position = 'absolute';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  const notificationTitle = document.createElement('h2');
  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;
  notification.appendChild(notificationTitle);

  const notificationContent = document.createElement('p');
  notificationContent.textContent = description;
  notification.appendChild(notificationContent);

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
