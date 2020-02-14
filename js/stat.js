'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderFont = function (ctx, font, baseline, style) {
  ctx.font = font;
  ctx.textBaseline = baseline;
  ctx.fillStyle = style;
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var getRandomNumber = function () {
    return Math.floor(Math.random() * 200);
  };

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    renderFont(ctx, '16px PT Mono', 'hanging', '#000');

    ctx.fillText(players[i], CLOUD_X + (GAP * 2) + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y * 10 + BAR_HEIGHT);

    ctx.fillText(Math.floor(times[i]), CLOUD_X + (GAP * 2) + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y * 7 + BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime));

    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + getRandomNumber() + '%, 50%)';

    ctx.fillRect(CLOUD_X + (GAP * 2) + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y * 9 + BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
