var jias = document.querySelectorAll('#tab1 .jia');
				var count = 0;
				for(let i = 0; i < jias.length; i++){
					jias[i].onclick = function() {
						var srcs = document.querySelectorAll('.jian')[i].src;
						var nos = srcs.indexOf('imgs/jian.png');
						//拿价格
						var money = document.querySelectorAll('.spanbig')[i].innerText.slice(1) * 1;
						count += money;
						if(nos == '-1') {
							document.querySelectorAll('.jian')[i].src = '../imgs/jian.png';
							document.querySelectorAll('#num')[i].innerHTML = 1;
							add1('tb1')
						} else {
							var nums = document.querySelectorAll('#num')[i].innerHTML * 1 + 1;
							document.querySelectorAll('#num')[i].innerHTML = nums;
							document.querySelector('nav.tb1 .spanbig').innerHTML = Math.floor(count);
							//小数点处理
							add2('tb1')
						}
					}
				}

				function add1(a) {
					document.querySelector('nav.' + a + ' .money').style.display = 'block';
					document.querySelector('nav.' + a + ' #buttongreen').style.display = 'block';
					document.querySelector('nav.' + a + ' #wenzi').innerHTML = '';
					document.querySelector('nav .' + a).src = '../imgs/shopgreen.png';
					//放价格
					document.querySelector('nav.' + a + ' .spanbig').innerHTML = Math.floor(count);
					document.querySelector('nav.' + a + ' .spansmall').innerHTML = String(count.toFixed(1)).slice(-2) + '0'
				}

				function add2(a) {

					if(String(count).indexOf('.') == -1 || count < 0) {
						document.querySelector('nav.' + a + ' .spansmall').innerHTML = '.00';
					} else {

						document.querySelector('nav.' + a + ' .spansmall').innerHTML = String(count.toFixed(1)).slice(-2) + '0'

					}
				}
				//减号店家
				var jians = document.querySelectorAll('.jian');
				for(let i = 0; i < jias.length; i++) {
					jians[i].onclick = function() {
						var nums = document.querySelectorAll('#num')[i].innerHTML - 1;
						var money = document.querySelectorAll('.spanbig')[i].innerText.slice(1) * 1;
						count -= money;

						if(nums > 0) {
							document.querySelectorAll('#num')[i].innerHTML = nums;
						} else if(nums == 0) {
							document.querySelectorAll('#num')[i].innerHTML = '';
							document.querySelectorAll('.jian')[i].src = '';
						}
							jianhao('tb1')
						
					}
				}

				//减号的
				function jianhao(a) {
					if(Math.floor(count) <= 0) {
						document.querySelector('nav.' + a + ' .spanbig').innerHTML = 0;
					} else {
						document.querySelector('nav.' + a + ' .spanbig').innerHTML = Math.floor(count);
					}

					if(String(count).indexOf('.') == -1 || String(count).indexOf('.0') == 1) {
						document.querySelector('nav.' + a + ' .spansmall').innerHTML = '.00';
					} else {
						document.querySelector('nav.' + a + ' .spansmall').innerHTML = String(count.toFixed(1)).slice(-2) + '0'
					}

					if(document.querySelector('nav.' + a + ' .spanbig').innerHTML == 0.0) {
						count = 0;
						document.querySelector('nav .' + a).src = '../imgs/shopgray.png';
						document.querySelector('nav.' + a + ' .money').style.display = 'none';
						document.querySelector('nav.' + a + ' #buttongreen').style.display = 'none';
						document.querySelector('nav.' + a + ' #wenzi').innerHTML = '仅支持预约，暂无外送';

					}
				}