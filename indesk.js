document.addEventListener('DOMContentLoaded', function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 696 316');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText =
    'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';

  function makePath(i, pos) {
    var a = 380 - i * 5 * pos;
    var b = 189 + i * 6;
    var c = 312 - i * 5 * pos;
    var d = 216 - i * 6;
    var e = 152 - i * 5 * pos;
    var f = 343 - i * 6;
    var g = 616 - i * 5 * pos;
    var h = 470 - i * 6;
    var k = 684 - i * 5 * pos;
    var m = 875 - i * 6;
    return (
      'M-' + a + ' -' + b +
      'C-' + a + ' -' + b + ' -' + c + ' ' + d + ' ' + e + ' ' + f +
      'C' + g + ' ' + h + ' ' + k + ' ' + m + ' ' + k + ' ' + m
    );
  }

  [1, -1].forEach(function (pos) {
    for (var i = 0; i < 36; i++) {
      var el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      el.setAttribute('d', makePath(i, pos));
      el.setAttribute('stroke', 'white');
      el.setAttribute('stroke-width', String(0.5 + i * 0.03));
      el.setAttribute('pathLength', '1');
      el.setAttribute('fill', 'none');
      el.style.strokeOpacity = String(Math.min(0.1 + i * 0.03, 1));

      var duration = (20 + Math.random() * 10) * 1000;
      var delay = -Math.random() * duration;

      el.animate(
        [
          { strokeDasharray: '0.3 1', strokeDashoffset: '0.3', opacity: 0.3 },
          { strokeDasharray: '0.3 1', strokeDashoffset: '-0.3', opacity: 0.6 },
          { strokeDasharray: '0.3 1', strokeDashoffset: '-1.3', opacity: 0.3 },
        ],
        {
          duration: duration,
          iterations: Infinity,
          easing: 'linear',
          delay: delay,
        }
      );

      svg.appendChild(el);
    }
  });

  hero.insertBefore(svg, hero.firstChild);
});
